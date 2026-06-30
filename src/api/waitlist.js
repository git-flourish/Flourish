import emailjs from '@emailjs/browser'

const ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID
const EMAILJS_WELCOME_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_WELCOME_TEMPLATE_ID

let emailjsSkippedLogged = false

function emailjsConfigured() {
  return EMAILJS_PUBLIC_KEY && EMAILJS_SERVICE_ID && EMAILJS_WELCOME_TEMPLATE_ID
}

async function postToWeb3Forms(body) {
  const res = await fetch('https://api.web3forms.com/submit', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify({ access_key: ACCESS_KEY, botcheck: '', ...body }),
  })
  const data = await res.json()
  if (!data.success) {
    throw new Error(data.message || 'Waitlist submit failed')
  }
}

async function submitToWeb3Forms({ email, firstName, sourcePage }) {
  await postToWeb3Forms({
    subject: `Flourish waitlist — ${sourcePage}`,
    from_name: 'Flourish',
    email,
    first_name: firstName?.trim() || 'there',
    name: firstName?.trim() || '(not provided)',
    message: [
      'New waitlist signup',
      '',
      `Email: ${email}`,
      `First name: ${firstName || '(not provided)'}`,
      `Source: ${sourcePage}`,
    ].join('\n'),
  })
}

async function sendWelcomeEmail({ email, firstName }) {
  await emailjs.send(
    EMAILJS_SERVICE_ID,
    EMAILJS_WELCOME_TEMPLATE_ID,
    {
      to_email: email,
      first_name: firstName?.trim() || 'there',
    },
    { publicKey: EMAILJS_PUBLIC_KEY },
  )
}

async function notifyWelcomeFailure({ email, sourcePage, error }) {
  try {
    await postToWeb3Forms({
      subject: 'Flourish welcome email FAILED — check EmailJS quota',
      from_name: 'Flourish Waitlist',
      email,
      message: [
        'Welcome email failed to send.',
        '',
        `Subscriber: ${email}`,
        `Source: ${sourcePage}`,
        `Error: ${error?.message || String(error)}`,
      ].join('\n'),
    })
  } catch {
    // ponytail: best-effort alert; signup already succeeded
  }
}

export async function submitWaitlistEntry({ email, firstName, sourcePage }) {
  if (!ACCESS_KEY) {
    throw new Error('Missing VITE_WEB3FORMS_ACCESS_KEY')
  }

  await submitToWeb3Forms({ email, firstName, sourcePage })

  if (!emailjsConfigured()) {
    if (!emailjsSkippedLogged) {
      console.error(
        '[Flourish waitlist] EmailJS not configured — welcome email skipped. ' +
          'Set VITE_EMAILJS_PUBLIC_KEY, VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_WELCOME_TEMPLATE_ID.',
      )
      emailjsSkippedLogged = true
    }
    return
  }

  try {
    await sendWelcomeEmail({ email, firstName })
  } catch (err) {
    console.error('[Flourish waitlist] EmailJS welcome email failed:', err?.text || err?.message || err)
    await notifyWelcomeFailure({ email, sourcePage, error: err })
  }
}
