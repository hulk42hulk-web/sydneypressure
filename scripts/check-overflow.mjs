import { chromium } from "playwright";

async function checkOverflow() {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 375, height: 812 } });

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

  for (const route of routes) {
    await page.goto("http://localhost:3000" + route, { waitUntil: "networkidle" });

    const overflowElements = await page.evaluate(() => {
      const docWidth = document.documentElement.clientWidth;
      const bodyWidth = document.body.scrollWidth;
      const issues = [];

      document.querySelectorAll("*").forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.right > docWidth + 1) {
          issues.push({
            tag: el.tagName,
            class: el.className ? el.className.toString().slice(0, 100) : "",
            id: el.id,
            right: Math.round(rect.right),
            width: Math.round(rect.width),
            docWidth,
          });
        }
      });
      return { docWidth, bodyWidth, issues: issues.slice(0, 15) };
    });

    console.log(`=== ROUTE: ${route} ===`);
    console.log(`docWidth: ${overflowElements.docWidth}, bodyScrollWidth: ${overflowElements.bodyWidth}`);
    if (overflowElements.bodyWidth > overflowElements.docWidth) {
      console.log(`⚠️ HORIZONTAL OVERFLOW DETECTED: +${overflowElements.bodyWidth - overflowElements.docWidth}px`);
      console.log(JSON.stringify(overflowElements.issues, null, 2));
    } else {
      console.log("✓ No horizontal overflow");
    }
  }

  await browser.close();
}

checkOverflow().catch(console.error);
