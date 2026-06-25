/**
 * ponytail: smoke test — run after setting VITE_WEB3FORMS_ACCESS_KEY in .env.local
 * Usage: node scripts/verify-waitlist.mjs
 */
import { readFileSync, existsSync } from 'node:fs'
import { chromium } from 'playwright'
import { spawn } from 'node:child_process'

const envPath = '.env.local'
if (!existsSync(envPath)) {
  console.error('Missing .env.local — add VITE_WEB3FORMS_ACCESS_KEY (see .env.example)')
  process.exit(1)
}

const key = readFileSync(envPath, 'utf8').match(/^VITE_WEB3FORMS_ACCESS_KEY=(.+)$/m)?.[1]?.trim()
if (!key) {
  console.error('.env.local must contain VITE_WEB3FORMS_ACCESS_KEY=your_key')
  process.exit(1)
}

const dev = spawn('npm', ['run', 'dev', '--', '--port', '5174'], {
  cwd: process.cwd(),
  stdio: ['ignore', 'pipe', 'pipe'],
  env: { ...process.env, VITE_WEB3FORMS_ACCESS_KEY: key },
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
  await page.goto('http://localhost:5174/?waitlist=1')
  await page.getByPlaceholder('Your email address').fill(`verify+${Date.now()}@example.com`)
  await page.getByRole('button', { name: 'Reserve My Spot' }).click()
  await page.getByRole('heading', { name: "You're in!" }).waitFor({ timeout: 15000 })
  console.log('OK — waitlist submit succeeded (check info@now-flourish.com inbox)')
  await browser.close()
} catch (err) {
  console.error('FAIL:', err.message)
  process.exitCode = 1
} finally {
  dev.kill('SIGTERM')
}
