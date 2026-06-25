const ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY

export async function submitWaitlistEntry({ email, firstName, sourcePage }) {
  if (!ACCESS_KEY) {
    throw new Error('Missing VITE_WEB3FORMS_ACCESS_KEY')
  }

  const res = await fetch('https://api.web3forms.com/submit', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify({
      access_key: ACCESS_KEY,
      subject: `Flourish waitlist — ${sourcePage}`,
      from_name: 'Flourish Waitlist',
      botcheck: '',
      name: firstName || '(not provided)',
      email,
      message: [
        'New waitlist signup',
        '',
        `Email: ${email}`,
        `First name: ${firstName || '(not provided)'}`,
        `Source: ${sourcePage}`,
      ].join('\n'),
    }),
  })

  const data = await res.json()
  if (!data.success) {
    throw new Error(data.message || 'Waitlist submit failed')
  }
}
