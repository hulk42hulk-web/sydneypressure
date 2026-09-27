import { chromium } from "playwright";
import fs from "fs";
import path from "path";

async function runMobileAudit() {
  const browser = await chromium.launch();
  const outDir = "./public/test-screenshots/mobile-audit";
  if (!fs.existsSync(outDir)) {
    fs.mkdirSync(outDir, { recursive: true });
  }

  const viewports = [
    { width: 320, height: 600, label: "320px_ultrasmall" },
    { width: 360, height: 740, label: "360px_galaxy" },
    { width: 390, height: 844, label: "390px_iphone" },
  ];

  const routes = [
    "/",
    "/pricing",
    "/gallery",
    "/about",
    "/contact",
    "/services",
    "/services/driveway-cleaning",
    "/services/residential-pressure-cleaning",
    "/services/soft-washing",
    "/services/strata-cleaning",
    "/services/commercial-pressure-cleaning",
  ];

  let hasErrors = false;

  for (const vp of viewports) {
    console.log(`\n========================================`);
    console.log(`📱 TESTING VIEWPORT: ${vp.width}x${vp.height} (${vp.label})`);
    console.log(`========================================`);

    const context = await browser.newContext({
      viewport: { width: vp.width, height: vp.height },
      deviceScaleFactor: 2,
    });
    const page = await context.newPage();

    for (const route of routes) {
      await page.goto("http://localhost:3000" + route, { waitUntil: "domcontentloaded" });
      await page.waitForTimeout(300);

      const overflow = await page.evaluate(() => {
        const docWidth = document.documentElement.clientWidth;
        const bodyWidth = document.body.scrollWidth;
        const overflowingElements = [];

        document.querySelectorAll("*").forEach((el) => {
          const rect = el.getBoundingClientRect();
          if (rect.right > docWidth + 1) {
            overflowingElements.push({
              tag: el.tagName,
              className: el.className ? el.className.toString().slice(0, 70) : "",
              right: Math.round(rect.right),
              docWidth,
            });
          }
        });

        return {
          docWidth,
          bodyWidth,
          isOverflowing: bodyWidth > docWidth,
          diff: bodyWidth - docWidth,
          overflowingElements: overflowingElements.slice(0, 5),
        };
      });

      if (overflow.isOverflowing) {
        console.error(`❌ [${vp.label}] ${route} has HORIZONTAL OVERFLOW of +${overflow.diff}px!`);
        console.error(overflow.overflowingElements);
        hasErrors = true;
      } else {
        console.log(`✅ [${vp.label}] ${route} perfectly responsive (width: ${overflow.docWidth}px, scroll: ${overflow.bodyWidth}px)`);
      }

      // Save screenshot for homepage & services at 320px
      if (route === "/" || route === "/services/driveway-cleaning") {
        const cleanName = route === "/" ? "home" : "driveway";
        await page.screenshot({
          path: path.join(outDir, `${vp.label}_${cleanName}_top.png`),
        });
        await page.evaluate(() => window.scrollBy(0, 600));
        await page.waitForTimeout(200);
        await page.screenshot({
          path: path.join(outDir, `${vp.label}_${cleanName}_mid.png`),
        });
      }
    }

    // Test Quote Modal on mobile
    if (vp.width === 320) {
      await page.goto("http://localhost:3000/", { waitUntil: "domcontentloaded" });
      const quoteBtn = page.getByRole("button", { name: /Quote/i }).first();
      await quoteBtn.click();
      await page.waitForTimeout(400);

      const modalVisible = await page.locator('[role="dialog"]').isVisible();
      console.log(`\n🔍 [${vp.label}] Quote Modal opened: ${modalVisible ? "SUCCESS" : "FAILED"}`);
      await page.screenshot({
        path: path.join(outDir, `${vp.label}_modal_opened.png`),
      });

      // Close modal
      const closeBtn = page.getByLabel("Close modal");
      await closeBtn.click();
      await page.waitForTimeout(300);
      const modalClosed = !(await page.locator('[role="dialog"]').isVisible());
      console.log(`🔍 [${vp.label}] Quote Modal closed: ${modalClosed ? "SUCCESS" : "FAILED"}`);

      // Test mobile menu toggle
      const menuBtn = page.getByLabel("Toggle navigation menu");
      await menuBtn.click();
      await page.waitForTimeout(300);
      await page.screenshot({
        path: path.join(outDir, `${vp.label}_mobile_menu.png`),
      });
      console.log(`🔍 [${vp.label}] Mobile Navigation Drawer opened`);
    }

    await context.close();
  }

  await browser.close();

  if (hasErrors) {
    console.error("\n❌ Mobile audit completed WITH issues.");
    process.exit(1);
  } else {
    console.log("\n🎉 ALL PAGES PASSED MOBILE AUDIT ON 320px, 360px, AND 390px WITH ZERO OVERFLOW!");
  }
}

runMobileAudit().catch((err) => {
  console.error(err);
  process.exit(1);
});
