const fs = require('fs');
const path = require('path');
const https = require('https');
const http = require('http');

const VIDEOS_PATH = path.join(__dirname, 'data', 'videos.json');
const OUTPUT_DIR = path.join(__dirname, 'public', 'archive', 'videos');

// Create output directory if it doesn't exist
if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
    console.log(`📁 Created directory: ${OUTPUT_DIR}`);
}

function downloadFile(url, destPath) {
    return new Promise((resolve, reject) => {
        const protocol = url.startsWith('https') ? https : http;
        const file = fs.createWriteStream(destPath);

        protocol.get(url, (response) => {
            if (response.statusCode === 301 || response.statusCode === 302) {
                // Handle redirect
                downloadFile(response.headers.location, destPath).then(resolve).catch(reject);
                return;
            }

            if (response.statusCode !== 200) {
                reject(new Error(`HTTP ${response.statusCode}`));
                return;
            }

            response.pipe(file);
            file.on('finish', () => {
                file.close();
                resolve();
            });
        }).on('error', (err) => {
            fs.unlink(destPath, () => { }); // Delete partial file
            reject(err);
        });
    });
}

async function main() {
    const videos = JSON.parse(fs.readFileSync(VIDEOS_PATH, 'utf-8'));
    console.log(`📂 Loaded ${videos.length} videos to download\n`);

    let downloaded = 0;
    let skipped = 0;
    let failed = 0;

    for (let i = 0; i < videos.length; i++) {
        const video = videos[i];
        const filename = `video_${i + 1}.mp4`;
        const destPath = path.join(OUTPUT_DIR, filename);

        // Skip if already downloaded
        if (fs.existsSync(destPath)) {
            const stats = fs.statSync(destPath);
            if (stats.size > 1000) { // More than 1KB
                skipped++;
                continue;
            }
        }

        // Skip invalid URLs
        if (!video.url || !video.url.startsWith('http')) {
            console.log(`⚠️  [${i + 1}/${videos.length}] Invalid URL: ${video.url}`);
            failed++;
            continue;
        }

        try {
            console.log(`⬇️  [${i + 1}/${videos.length}] Downloading: ${video.title.substring(0, 50)}...`);
            await downloadFile(video.url, destPath);
            downloaded++;

            // Update localPath in videos array
            video.localPath = `/archive/videos/${filename}`;

        } catch (err) {
            console.log(`❌ [${i + 1}/${videos.length}] Failed: ${err.message}`);
            failed++;
        }
    }

    // Save updated videos.json with localPaths
    fs.writeFileSync(VIDEOS_PATH, JSON.stringify(videos, null, 2));

    console.log(`\n✅ Download complete!`);
    console.log(`   Downloaded: ${downloaded}`);
    console.log(`   Skipped (already exists): ${skipped}`);
    console.log(`   Failed: ${failed}`);
}

main().catch(console.error);
