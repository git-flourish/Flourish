/**
 * ponytail: smoke test — run after setting env vars in .env.local or .env
 * Usage: node scripts/verify-waitlist.mjs
 * Optional: WAITLIST_TEST_EMAIL=you@example.com WAITLIST_TEST_NAME=Test
 */
import { readFileSync, existsSync } from 'node:fs'
import { chromium } from 'playwright'
import { spawn } from 'node:child_process'

const envPath = existsSync('.env.local') ? '.env.local' : '.env'
if (!existsSync(envPath)) {
  console.error('Missing .env.local or .env — add VITE_WEB3FORMS_ACCESS_KEY')
  process.exit(1)
}

const envFile = readFileSync(envPath, 'utf8')
const envVar = (name) => envFile.match(new RegExp(`^${name}=(.+)$`, 'm'))?.[1]?.trim()

const key = envVar('VITE_WEB3FORMS_ACCESS_KEY')
if (!key) {
  console.error(`${envPath} must contain VITE_WEB3FORMS_ACCESS_KEY=your_key`)
  process.exit(1)
}

const emailjsVars = {
  VITE_EMAILJS_PUBLIC_KEY: envVar('VITE_EMAILJS_PUBLIC_KEY'),
  VITE_EMAILJS_SERVICE_ID: envVar('VITE_EMAILJS_SERVICE_ID'),
  VITE_EMAILJS_WELCOME_TEMPLATE_ID: envVar('VITE_EMAILJS_WELCOME_TEMPLATE_ID'),
}
const emailjsReady = Object.values(emailjsVars).every(Boolean)
if (!emailjsReady) {
  console.warn('EmailJS env vars missing — welcome email will be skipped in this test')
}

const testEmail = process.env.WAITLIST_TEST_EMAIL || `verify+${Date.now()}@example.com`
const testName = process.env.WAITLIST_TEST_NAME || ''

const dev = spawn('npm', ['run', 'dev', '--', '--port', '5174'], {
  cwd: process.cwd(),
  stdio: ['ignore', 'pipe', 'pipe'],
  env: {
    ...process.env,
    VITE_WEB3FORMS_ACCESS_KEY: key,
    ...Object.fromEntries(Object.entries(emailjsVars).filter(([, v]) => v)),
  },
})

const ready = new Promise((resolve, reject) => {
  const t = setTimeout(() => reject(new Error('dev server timeout')), 15000)
  const onData = (buf) => {
    if (buf.toString().includes('localhost:5174')) {
      clearTimeout(t)
      resolve()
    }
  }
  dev.stdout.on('data', onData)
  dev.stderr.on('data', onData)
  dev.on('exit', (code) => reject(new Error(`dev exited ${code}`)))
})

try {
  await ready
  const browser = await chromium.launch()
  const page = await browser.newPage()
  await page.goto('http://localhost:5174/Flourish/?waitlist=1')
  if (testName) {
    await page.getByPlaceholder('First name (optional)').fill(testName)
  }
  await page.getByPlaceholder('Your email address').fill(testEmail)
  await page.getByRole('button', { name: 'Reserve My Spot' }).click()
  await page.getByRole('heading', { name: "You're in!" }).waitFor({ timeout: 15000 })
  console.log(`OK — waitlist submit succeeded (${testEmail})`)
  console.log('Check info@now-flourish.com for signup notification (Web3Forms)')
  if (emailjsReady) {
    console.log(`Check ${testEmail} for welcome email (EmailJS)`)
  }
  await browser.close()
} catch (err) {
  console.error('FAIL:', err.message)
  process.exitCode = 1
} finally {
  dev.kill('SIGTERM')
}
