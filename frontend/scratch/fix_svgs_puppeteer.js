const fs = require('fs');
const path = require('path');
const puppeteer = require('puppeteer');

const dir = path.join(__dirname, '../public/assets/Presentation/Service Blobs');
const files = fs.readdirSync(dir).filter(f => f.endsWith('.svg'));

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  for (const file of files) {
    const filePath = path.join(dir, file);
    let content = fs.readFileSync(filePath, 'utf8');

    // Create a temporary HTML file to load the SVG
    const htmlContent = `
      <!DOCTYPE html>
      <html>
      <body>
        ${content}
        <script>
          const path = document.querySelector('path');
          const bbox = path.getBBox();
          console.log(JSON.stringify({ x: bbox.x, y: bbox.y, width: bbox.width, height: bbox.height }));
        </script>
      </body>
      </html>
    `;
    
    // We can evaluate directly
    await page.setContent(htmlContent);
    const bboxStr = await page.evaluate(() => {
      const p = document.querySelector('path');
      const b = p.getBBox();
      return JSON.stringify({ x: b.x, y: b.y, width: b.width, height: b.height });
    });
    
    const bbox = JSON.parse(bboxStr);
    
    // Pad a little bit to avoid clipping edges
    const padding = 2;
    const x = bbox.x - padding;
    const y = bbox.y - padding;
    const width = bbox.width + padding * 2;
    const height = bbox.height + padding * 2;
    
    const newViewBox = `${x} ${y} ${width} ${height}`;
    
    content = content.replace(/viewBox="[^"]+"/, `viewBox="${newViewBox}"`);
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated ${file} with viewBox="${newViewBox}"`);
  }

  await browser.close();
})();
