const fs = require('fs');
const path = require('path');
const https = require('https');
const videos = require('../data/videos.json');

const DOWNLOAD_DIR = path.join(__dirname, '../public/archive/videos');

if (!fs.existsSync(DOWNLOAD_DIR)) {
    fs.mkdirSync(DOWNLOAD_DIR, { recursive: true });
}

async function downloadVideo(url, filename) {
    const filePath = path.join(DOWNLOAD_DIR, filename);

    if (fs.existsSync(filePath)) {
        console.log(`Skipping (already exists): ${filename}`);
        return;
    }

    console.log(`Downloading: ${filename} ...`);

    return new Promise((resolve, reject) => {
        const file = fs.createWriteStream(filePath);
        https.get(url, (response) => {
            if (response.statusCode !== 200) {
                reject(new Error(`Failed to download ${url}: Status Code ${response.statusCode}`));
                return;
            }
            response.pipe(file);
            file.on('finish', () => {
                file.close();
                console.log(`Completed: ${filename}`);
                resolve();
            });
        }).on('error', (err) => {
            fs.unlink(filePath, () => { }); // Delete partial file
            reject(err);
        });
    });
}

async function processVideos() {
    let successCount = 0;
    let failCount = 0;

    for (const video of videos) {
        if (!video.url || !video.localPath) continue;

        // Extract filename from localPath (e.g., "/archive/videos/video_1.mp4" -> "video_1.mp4")
        const filename = path.basename(video.localPath);

        try {
            await downloadVideo(video.url, filename);
            successCount++;
        } catch (error) {
            console.error(`Error downloading ${filename}:`, error.message);
            failCount++;
        }
    }

    console.log(`\nDownload Summary:`);
    console.log(`Success: ${successCount}`);
    console.log(`Failed: ${failCount}`);
}

processVideos();
