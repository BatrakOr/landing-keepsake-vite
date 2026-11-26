import fs from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

const srcDir = path.resolve('src/assets/image');
const outDir = path.resolve('public/assets/images');
const widths = [400, 800];

const targets = ['vol-16'];

await fs.mkdir(outDir, { recursive: true });

const candidates = [path.join(srcDir, 'vol-16.jpg')];

let sourcePath = null;
for (const file of candidates) {
  try {
    await fs.access(file);
    sourcePath = file;
    break;
  } catch {}
}

if (!sourcePath) {
  throw new Error('Не знайдено вихідних jpg-файлів у src/assets/image');
}

for (const name of targets) {
  for (const width of widths) {
    const base = sharp(sourcePath).resize({ width, withoutEnlargement: false });

    await base
      .clone()
      .avif({ quality: 55 })
      .toFile(path.join(outDir, `${name}-${width}.avif`));

    await base
      .clone()
      .webp({ quality: 78 })
      .toFile(path.join(outDir, `${name}-${width}.webp`));

    await base
      .clone()
      .jpeg({ quality: 82, mozjpeg: true })
      .toFile(path.join(outDir, `${name}-${width}.jpg`));
  }
}

console.log(`Generated AVIF, WebP, and JPEG assets for ${targets.length} images.`);
