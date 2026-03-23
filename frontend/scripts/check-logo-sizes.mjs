import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sizeOf from "image-size";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, "..");

const args = process.argv.slice(2);

const getArgValue = (name, fallback) => {
  const index = args.indexOf(name);
  if (index === -1 || index + 1 >= args.length) return fallback;
  return args[index + 1];
};

const targetWidth = Number(getArgValue("--width", 120));
const targetHeight = Number(getArgValue("--height", 60));
const relativeDir = getArgValue("--dir", "public/assets/Presentation/Client Logos");
const logosDir = path.resolve(rootDir, relativeDir);

if (!fs.existsSync(logosDir)) {
  console.error(`❌ Logo directory not found: ${logosDir}`);
  process.exit(1);
}

const validExtensions = new Set([".png", ".jpg", ".jpeg", ".webp", ".avif", ".gif"]);

const files = fs
  .readdirSync(logosDir)
  .filter((name) => validExtensions.has(path.extname(name).toLowerCase()))
  .sort((a, b) => a.localeCompare(b));

if (files.length === 0) {
  console.error(`❌ No supported image files found in ${logosDir}`);
  process.exit(1);
}

const results = [];

for (const file of files) {
  const fullPath = path.join(logosDir, file);
  let width = 0;
  let height = 0;

  try {
    const imageBuffer = fs.readFileSync(fullPath);
    const dimensions = sizeOf(imageBuffer);
    width = dimensions.width ?? 0;
    height = dimensions.height ?? 0;
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unable to read dimensions";
    results.push({ file, error: message });
    continue;
  }

  if (!width || !height) {
    results.push({ file, error: "Unable to read dimensions" });
    continue;
  }

  const scale = Math.min(targetWidth / width, targetHeight / height, 1);
  const fittedWidth = Math.round(width * scale);
  const fittedHeight = Math.round(height * scale);
  const isOversized = width > targetWidth || height > targetHeight;
  const isUndersized = width < targetWidth || height < targetHeight;
  const aspect = (width / height).toFixed(2);

  results.push({
    file,
    width,
    height,
    aspect,
    fittedWidth,
    fittedHeight,
    isOversized,
    isUndersized,
  });
}

console.log(`\nLogo audit for: ${relativeDir}`);
console.log(`Target box: ${targetWidth}x${targetHeight}\n`);

for (const item of results) {
  if (item.error) {
    console.log(`❌ ${item.file.padEnd(45)} ${item.error}`);
    continue;
  }

  let marker = "✅";
  if (item.isOversized && item.isUndersized) marker = "⚠️";
  else if (item.isOversized) marker = "🔼";
  else if (item.isUndersized) marker = "🔽";

  const details = `${String(item.width).padStart(4)}x${String(item.height).padEnd(4)} aspect ${item.aspect}`;
  const fitted = `-> fit ${String(item.fittedWidth).padStart(3)}x${String(item.fittedHeight).padEnd(3)}`;
  const flags = [
    item.isOversized ? "over" : null,
    item.isUndersized ? "under" : null,
  ]
    .filter(Boolean)
    .join(",");

  console.log(`${marker} ${item.file.padEnd(45)} ${details} ${fitted}${flags ? ` [${flags}]` : ""}`);
}

const oversizedCount = results.filter((item) => item.isOversized).length;
const undersizedCount = results.filter((item) => item.isUndersized).length;
const erroredCount = results.filter((item) => item.error).length;

console.log("\nSummary:");
console.log(`- Total logos: ${results.length}`);
console.log(`- Over target box: ${oversizedCount}`);
console.log(`- Under target box: ${undersizedCount}`);
console.log(`- Read errors: ${erroredCount}`);

if (erroredCount > 0) {
  process.exit(1);
}
