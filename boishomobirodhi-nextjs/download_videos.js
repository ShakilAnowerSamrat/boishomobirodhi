const fs = require('fs');
const https = require('https');
const path = require('path');
const videosData = require('./data/videos.json');

console.log('\n🎬 VIDEO DOWNLOAD SCRIPT');
console.log('========================\n');

// Create videos directory
const videoDir = 'public/archive/videos';
if (!fs.existsSync(videoDir)) {
    fs.mkdirSync(videoDir, { recursive: true });
    console.log(`✅ Created directory: ${videoDir}\n`);
}

// Function to download a single video
function downloadVideo(url, filename) {
    return new Promise((resolve, reject) => {
        const filePath = path.join(videoDir, filename);

        // Skip if already exists
        if (fs.existsSync(filePath)) {
            console.log(`⏭️  Skipped (exists): ${filename}`);
            resolve({ filename, status: 'skipped' });
            return;
        }

        console.log(`⬇️  Downloading: ${filename}...`);

        const file = fs.createWriteStream(filePath);

        https.get(url, (response) => {
            if (response.statusCode === 200) {
                response.pipe(file);

                file.on('finish', () => {
                    file.close();
                    const fileSizeMB = (fs.statSync(filePath).size / (1024 * 1024)).toFixed(2);
                    console.log(`✅ Downloaded: ${filename} (${fileSizeMB} MB)`);
                    resolve({ filename, status: 'success', size: fileSizeMB });
                });
            } else {
                fs.unlink(filePath, () => { });
                console.log(`❌ Failed: ${filename} (Status: ${response.statusCode})`);
                reject(new Error(`Status: ${response.statusCode}`));
            }
        }).on('error', (err) => {
            fs.unlink(filePath, () => { });
            console.log(`❌ Error: ${filename} - ${err.message}`);
            reject(err);
        });
    });
}

// Main download function
async function downloadAllVideos() {
    console.log(`📹 Found ${videosData.length} videos to download\n`);
    console.log('⚠️  WARNING: This will download a LOT of data!');
    console.log('   Estimated size: ~50-100 MB per video\n');
    console.log('Press Ctrl+C to cancel, or wait 5 seconds to start...\n');

    // Wait 5 seconds
    await new Promise(resolve => setTimeout(resolve, 5000));

    const results = {
        success: 0,
        failed: 0,
        skipped: 0
    };

    for (let i = 0; i < videosData.length; i++) {
        const video = videosData[i];
        const filename = `video_${i + 1}.mp4`;

        try {
            const result = await downloadVideo(video.url, filename);

            if (result.status === 'success') {
                results.success++;
                // Update JSON with local path
                videosData[i].localPath = `/archive/videos/${filename}`;
            } else if (result.status === 'skipped') {
                results.skipped++;
                videosData[i].localPath = `/archive/videos/${filename}`;
            }
        } catch (err) {
            results.failed++;
        }

        // Show progress
        console.log(`\nProgress: ${i + 1}/${videosData.length}\n`);
    }

    // Update videos.json
    fs.writeFileSync(
        'data/videos.json',
        JSON.stringify(videosData, null, 2)
    );

    console.log('\n\n✅ DOWNLOAD COMPLETE!');
    console.log('======================');
    console.log(`✅ Success: ${results.success}`);
    console.log(`⏭️  Skipped: ${results.skipped}`);
    console.log(`❌ Failed: ${results.failed}`);
    console.log(`📝 Updated: data/videos.json\n`);
}

// Start downloads
downloadAllVideos().catch(err => {
    console.error('\n❌ Fatal error:', err);
    process.exit(1);
});
