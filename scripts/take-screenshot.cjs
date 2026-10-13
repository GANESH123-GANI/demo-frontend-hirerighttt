const { chromium } = require('C:/Users/ADMIN/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright');

(async () => {
  const browser = await chromium.launch({
    executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe',
    headless: true,
  });
  const page = await browser.newPage({ viewport: { width: 1280, height: 900 } });
  await page.goto('http://localhost:5173/', { waitUntil: 'networkidle' });
  await page.waitForTimeout(1000);

  // Take screenshot of hero
  await page.screenshot({ path: 'frontend/public/assets/current_hero_render.png', fullPage: false });

  // Scroll to CTA banner and screenshot
  const cta = await page.locator('.cta-banner-wrapper');
  if (await cta.count() > 0) {
    await cta.scrollIntoViewIfNeeded();
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'frontend/public/assets/current_cta_render.png', fullPage: false });
  }

  // Scroll to footer and screenshot
  const footer = await page.locator('.site-footer');
  if (await footer.count() > 0) {
    await footer.scrollIntoViewIfNeeded();
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'frontend/public/assets/current_footer_render.png', fullPage: false });
  }

  await browser.close();
  console.log('Screenshots saved successfully');
})().catch(err => {
  console.error(err);
  process.exit(1);
});
