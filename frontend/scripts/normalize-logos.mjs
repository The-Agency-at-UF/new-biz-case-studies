import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, "..");

const args = process.argv.slice(2);

const getArgValue = (name, fallback) => {
  const index = args.indexOf(name);
  if (index === -1 || index + 1 >= args.length) return fallback;
  return args[index + 1];
};

const width = Number(getArgValue("--width", 120));
const height = Number(getArgValue("--height", 60));
const srcRelative = getArgValue("--src", "public/assets/Presentation/Client Logos");
const outRelative = getArgValue("--out", "public/assets/Presentation/Client Logos Normalized");

const srcDir = path.resolve(rootDir, srcRelative);
const outDir = path.resolve(rootDir, outRelative);

if (!fs.existsSync(srcDir)) {
  console.error(`❌ Source logo directory not found: ${srcDir}`);
  process.exit(1);
}

if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

const validExtensions = new Set([".png", ".jpg", ".jpeg", ".webp", ".avif", ".gif"]);

const files = fs
  .readdirSync(srcDir)
  .filter((name) => validExtensions.has(path.extname(name).toLowerCase()))
  .sort((a, b) => a.localeCompare(b));

if (files.length === 0) {
  console.error(`❌ No image files found in: ${srcDir}`);
  process.exit(1);
}

let successCount = 0;
let errorCount = 0;

console.log(`\nNormalizing ${files.length} logos to ${width}x${height}...\n`);

for (const file of files) {
  const srcPath = path.join(srcDir, file);
  const outPath = path.join(outDir, file);

  try {
    await sharp(srcPath)
      .trim()
      .resize(width, height, {
        fit: "contain",
        background: { r: 0, g: 0, b: 0, alpha: 0 },
        withoutEnlargement: false,
      })
      .png()
      .toFile(outPath);

    successCount += 1;
    console.log(`✅ ${file}`);
  } catch (error) {
    errorCount += 1;
    const message = error instanceof Error ? error.message : "Unknown error";
    console.log(`❌ ${file} - ${message}`);
  }
}

console.log("\nDone.");
console.log(`- Source: ${srcRelative}`);
console.log(`- Output: ${outRelative}`);
console.log(`- Normalized: ${successCount}`);
console.log(`- Failed: ${errorCount}`);

if (errorCount > 0) {
  process.exit(1);
}
