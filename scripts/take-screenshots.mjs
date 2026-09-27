import { chromium } from "playwright";
import fs from "fs";
import path from "path";

async function capture() {
  const browser = await chromium.launch();
  const context = await browser.newContext({
    viewport: { width: 390, height: 844 }, // iPhone 12/13/14
    deviceScaleFactor: 2,
  });
  const page = await context.newPage();

  const outDir = "./public/test-screenshots";
  if (!fs.existsSync(outDir)) {
    fs.mkdirSync(outDir, { recursive: true });
  }

  const routes = [
    { url: "http://localhost:3000/", name: "mobile_home" },
    { url: "http://localhost:3000/pricing", name: "mobile_pricing" },
    { url: "http://localhost:3000/gallery", name: "mobile_gallery" },
    { url: "http://localhost:3000/contact", name: "mobile_contact" },
    { url: "http://localhost:3000/services", name: "mobile_services" },
    { url: "http://localhost:3000/services/driveway-cleaning", name: "mobile_driveway" },
  ];

  for (const r of routes) {
    console.log(`Navigating to ${r.url}...`);
    await page.goto(r.url, { waitUntil: "domcontentloaded" });
    await page.waitForTimeout(1000);

    // Take screenshot of top
    await page.screenshot({ path: path.join(outDir, `${r.name}_top.png`) });

    // Scroll down 600px
    await page.evaluate(() => window.scrollBy(0, 700));
    await page.waitForTimeout(500);
    await page.screenshot({ path: path.join(outDir, `${r.name}_mid.png`) });

    // Scroll down more
    await page.evaluate(() => window.scrollBy(0, 900));
    await page.waitForTimeout(500);
    await page.screenshot({ path: path.join(outDir, `${r.name}_lower.png`) });
  }

  await browser.close();
  console.log("Screenshots captured successfully!");
}

capture().catch(console.error);
