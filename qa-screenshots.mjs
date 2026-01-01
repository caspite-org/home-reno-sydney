import { chromium } from 'playwright'
import { mkdir } from 'fs/promises'

const BASE_URL = 'http://localhost:3000'

const viewports = {
  mobile: { width: 375, height: 812, name: 'mobile' }, // iPhone 13
  tablet: { width: 768, height: 1024, name: 'tablet' }, // iPad
  desktop: { width: 1920, height: 1080, name: 'desktop' }, // Full HD
}

const pages = [
  { url: '/', name: 'home' },
  { url: '/about', name: 'about' },
  { url: '/services', name: 'services' },
]

async function takeScreenshots() {
  console.log('🎭 Starting Playwright QA...\n')

  // Create screenshots directory
  await mkdir('screenshots', { recursive: true })

  const browser = await chromium.launch()
  const context = await browser.newContext()
  const page = await context.newPage()

  for (const pageInfo of pages) {
    console.log(`📄 Testing: ${pageInfo.name}`)

    for (const [viewportName, viewport] of Object.entries(viewports)) {
      await page.setViewportSize({ width: viewport.width, height: viewport.height })
      await page.goto(`${BASE_URL}${pageInfo.url}`, { waitUntil: 'networkidle' })

      // Wait a bit for fonts and animations
      await page.waitForTimeout(1000)

      const screenshotPath = `screenshots/${pageInfo.name}-${viewport.name}.png`
      await page.screenshot({
        path: screenshotPath,
        fullPage: true,
      })

      console.log(`  ✓ ${viewportName}: ${screenshotPath}`)
    }

    console.log('')
  }

  // Test mobile navigation
  console.log('📱 Testing mobile navigation...')
  await page.setViewportSize({ width: 375, height: 812 })
  await page.goto(BASE_URL)

  // Click hamburger menu
  await page.click('button[aria-label="Toggle menu"]')
  await page.waitForTimeout(500)
  await page.screenshot({
    path: 'screenshots/mobile-menu-open.png',
    fullPage: true,
  })
  console.log('  ✓ Mobile menu: screenshots/mobile-menu-open.png\n')

  // Test contact form
  console.log('📝 Testing contact form...')
  await page.goto(`${BASE_URL}/#contact`)
  await page.waitForTimeout(500)

  await page.fill('input[name="firstName"]', 'John')
  await page.fill('input[name="lastName"]', 'Smith')
  await page.fill('input[name="email"]', 'john@example.com')
  await page.fill('input[name="phone"]', '+61 400 000 000')
  await page.selectOption('select[name="projectType"]', 'kitchen')
  await page.fill('textarea[name="message"]', 'I would like a quote for kitchen renovation')

  await page.screenshot({
    path: 'screenshots/contact-form-filled.png',
    fullPage: true,
  })
  console.log('  ✓ Form filled: screenshots/contact-form-filled.png\n')

  await browser.close()

  console.log('✅ QA Complete! Check the screenshots/ folder\n')
}

takeScreenshots().catch(console.error)
