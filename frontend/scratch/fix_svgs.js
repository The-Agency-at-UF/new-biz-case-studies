const fs = require('fs');
const path = require('path');
const { svgPathBbox } = require('svg-path-bbox');

const dir = path.join(__dirname, '../public/assets/Presentation/Service Blobs');
const files = fs.readdirSync(dir).filter(f => f.endsWith('.svg'));

files.forEach(file => {
  const filePath = path.join(dir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  
  const pathMatch = content.match(/d="([^"]+)"/);
  if (pathMatch) {
    const d = pathMatch[1];
    
    try {
      const [minX, minY, maxX, maxY] = svgPathBbox(d);
      
      const width = maxX - minX;
      const height = maxY - minY;
      
      const newViewBox = `${minX} ${minY} ${width} ${height}`;
      
      content = content.replace(/viewBox="[^"]+"/, `viewBox="${newViewBox}"`);
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Updated ${file} with viewBox="${newViewBox}"`);
    } catch (e) {
      console.error(`Error processing ${file}:`, e.message);
    }
  }
});
