const https = require('https');
const fs = require('fs');
const path = require('path');

// Fresh photo URLs from jrabd.org (via CloudFront CDN)
const photoUrls = [
    "https://d1d5tqaqgxfrly.cloudfront.net/photo-archive/Sciencelab.jpg",
    "https://d1d5tqaqgxfrly.cloudfront.net/photo-archive/IMG_6547.JPG",
    "https://d1d5tqaqgxfrly.cloudfront.net/photo-archive/Screenshot%202025-07-08%20162101.png",
    "https://d1d5tqaqgxfrly.cloudfront.net/photo-archive/-6079923939095722212_121.jpg",
    "https://d1d5tqaqgxfrly.cloudfront.net/photo-archive/-6075660299291180485_121.jpg",
    "https://d1d5tqaqgxfrly.cloudfront.net/photo-archive/-6075660299291180483_121.jpg",
    "https://d1d5tqaqgxfrly.cloudfront.net/photo-archive/-6075660299291180482_121.jpg",
    "https://d1d5tqaqgxfrly.cloudfront.net/photo-archive/-6075660299291180481_121.jpg",
    "https://d1d5tqaqgxfrly.cloudfront.net/photo-archive/-6075660299291180480_121.jpg",
    "https://d1d5tqaqgxfrly.cloudfront.net/photo-archive/-6075660299291180479_121.jpg",
    "https://d1d5tqaqgxfrly.cloudfront.net/photo-archive/-6075660299291180462_121.jpg",
    "https://d1d5tqaqgxfrly.cloudfront.net/photo-archive/-6073408499477495808_121.jpg",
    "https://d1d5tqaqgxfrly.cloudfront.net/photo-archive/-6073385650251481044_121.jpg",
    "https://d1d5tqaqgxfrly.cloudfront.net/photo-archive/-6071118676318339629_121.jpg",
    "https://d1d5tqaqgxfrly.cloudfront.net/photo-archive/-6071118676318339356_121.jpg",
    "https://d1d5tqaqgxfrly.cloudfront.net/photo-archive/-6064611182389608556_121.jpg",
    "https://d1d5tqaqgxfrly.cloudfront.net/photo-archive/-6064611182389608553_121.jpg",
    "https://d1d5tqaqgxfrly.cloudfront.net/photo-archive/-6084427538723093697_121.jpg",
    "https://d1d5tqaqgxfrly.cloudfront.net/photo-archive/-6084427538723093693_121.jpg",
    "https://d1d5tqaqgxfrly.cloudfront.net/photo-archive/-6082175738909408102_121.jpg"
];

// Create directory
const downloadDir = path.join('public', 'archive', 'photos');
if (!fs.existsSync(downloadDir)) {
    fs.mkdirSync(downloadDir, { recursive: true });
    console.log(`✅ Created: ${downloadDir}`);
}

console.log(`\n📥 Downloading ${photoUrls.length} photos from CloudFront...\n`);

let completed = 0;
let failed = 0;
const successfulUrls = [];

photoUrls.forEach((url, index) => {
    const filename = `photo_${String(index + 1).padStart(3, '0')}.jpg`;
    const filepath = path.join(downloadDir, filename);

    console.log(`[${index + 1}/${photoUrls.length}] ${filename}`);

    const file = fs.createWriteStream(filepath);

    https.get(url, (response) => {
        if (response.statusCode === 200) {
            response.pipe(file);
            file.on('finish', () => {
                file.close();
                completed++;
                console.log(`   ✅ SUCCESS`);
                successfulUrls.push(`/archive/photos/${filename}`);

                if (completed + failed === photoUrls.length) {
                    finish();
                }
            });
        } else {
            console.log(`   ❌ FAILED: Status ${response.statusCode}`);
            failed++;
            try { fs.unlinkSync(filepath); } catch (e) { }

            if (completed + failed === photoUrls.length) {
                finish();
            }
        }
    }).on('error', (err) => {
        console.log(`   ❌ ERROR: ${err.message}`);
        failed++;
        try { fs.unlinkSync(filepath); } catch (e) { }

        if (completed + failed === photoUrls.length) {
            finish();
        }
    });
});

function finish() {
    console.log(`\n✨ Complete: ${completed} succeeded, ${failed} failed\n`);

    if (successfulUrls.length > 0) {
        // Update photos.json with local paths
        const jsonPath = path.join('data', 'photos.json');
        fs.writeFileSync(jsonPath, JSON.stringify(successfulUrls, null, 2));
        console.log(`📝 Updated ${jsonPath} with ${successfulUrls.length} local photo paths`);
    }
}
