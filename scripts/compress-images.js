import sharp from 'sharp';
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PHOTOS_DIR = path.join(__dirname, '..', 'public', 'photos');

async function compressImages() {
    try {
        const files = await fs.readdir(PHOTOS_DIR);
        const imageFiles = files.filter(file =>
            /\.(jpg|jpeg|png|webp)$/i.test(file)
        );

        console.log(`Found ${imageFiles.length} images to compress.`);

        for (const file of imageFiles) {
            try {
                const filePath = path.join(PHOTOS_DIR, file);
                const tempPath = path.join(PHOTOS_DIR, `temp_${file}`);

                const stats = await fs.stat(filePath);
                const originalSize = (stats.size / 1024).toFixed(2);

                console.log(`Compressing ${file} (${originalSize} KB)...`);

                // Read file into buffer to avoid locking issues
                const buffer = await fs.readFile(filePath);
                let pipeline = sharp(buffer);

                const ext = path.extname(file).toLowerCase();
                if (ext === '.jpg' || ext === '.jpeg') {
                    pipeline = pipeline.jpeg({ quality: 80, mozjpeg: true });
                } else if (ext === '.png') {
                    pipeline = pipeline.png({ quality: 80, compressionLevel: 9 });
                } else if (ext === '.webp') {
                    pipeline = pipeline.webp({ quality: 80 });
                }

                const outputBuffer = await pipeline.toBuffer();

                const newSize = (outputBuffer.length / 1024).toFixed(2);
                const reduction = (((stats.size - outputBuffer.length) / stats.size) * 100).toFixed(2);

                if (outputBuffer.length < stats.size) {
                    await fs.writeFile(filePath, outputBuffer);
                    console.log(`  Success: ${newSize} KB (${reduction}% reduction)`);
                } else {
                    console.log(`  Skipped: Compression didn't reduce size.`);
                }
            } catch (fileError) {
                console.error(`  Error processing ${file}:`, fileError.message);
            }
        }

        console.log('Image compression complete.');
    } catch (error) {
        console.error('Error compressing images:', error);
    }
}

compressImages();
