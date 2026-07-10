import sharp from 'sharp';
import fs from 'fs';

async function run() {
  try {
    const inputPath = './public/img/armazem-loop.webp';
    const outputPath = './public/img/armazem-loop-compressed.webp';

    console.log('Starting compression of', inputPath);
    const start = Date.now();

    await sharp(inputPath, { animated: true })
      .webp({ quality: 65, effort: 6 }) // quality 65, effort 6 (max compression)
      .toFile(outputPath);

    const end = Date.now();
    const originalSize = fs.statSync(inputPath).size;
    const compressedSize = fs.statSync(outputPath).size;

    console.log(`Compression finished in ${((end - start)/1000).toFixed(2)}s`);
    console.log(`Original size: ${(originalSize / 1024 / 1024).toFixed(2)} MB (${originalSize} bytes)`);
    console.log(`Compressed size: ${(compressedSize / 1024 / 1024).toFixed(2)} MB (${compressedSize} bytes)`);
    console.log(`Saved: ${((1 - compressedSize / originalSize) * 100).toFixed(1)}%`);
  } catch (err) {
    console.error('Error during compression:', err);
  }
}
run();
