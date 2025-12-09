const https = require('https');
const fs = require('fs');
const path = require('path');

// Create directories
const dirs = ['public/archive/photos', 'public/archive/videos', 'public/archive/martyrs'];
dirs.forEach(dir => {
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
        console.log(`✅ Created directory: ${dir}`);
    }
});

console.log('\n📥 Starting photo downloads from jrabd.org...\n');

// Test with a few photo URLs from jrabd.org
const photoUrls = [
    'https://jrabd.org/storage/uploads/optimized_images_11zon/66ac898d9cc9c17/optimized__LpY5eT9__1722510255.jpg',
    'https://jrabd.org/storage/uploads/optimized_images_11zon/66ac898d9cc9c14/optimized__o6_P4O0__1722510342.jpg',
    'https://jrabd.org/storage/uploads/optimized_images_11zon/66ac8b0907d726/optimized__p_e1h5e_1722591602.jpg',
];

let completed = 0;
let failed = 0;

photoUrls.forEach((url, index) => {
    const filename = `photo_${index + 1}.jpg`;
    const filepath = path.join('public', 'archive', 'photos', filename);

    console.log(`[${index + 1}/${photoUrls.length}] Downloading: ${filename}`);

    const file = fs.createWriteStream(filepath);

    https.get(url, (response) => {
        if (response.statusCode === 200) {
            response.pipe(file);
            file.on('finish', () => {
                file.close();
                completed++;
                console.log(`   ✅ SUCCESS: ${filename}`);

                if (completed + failed === photoUrls.length) {
                    console.log(`\n✨ Download complete: ${completed} succeeded, ${failed} failed`);
                }
            });
        } else {
            console.log(`   ❌ FAILED: Status ${response.statusCode}`);
            failed++;
            fs.unlinkSync(filepath);

            if (completed + failed === photoUrls.length) {
                console.log(`\n✨ Download complete: ${completed} succeeded, ${failed} failed`);
            }
        }
    }).on('error', (err) => {
        console.log(`   ❌ ERROR: ${err.message}`);
        failed++;
        try { fs.unlinkSync(filepath); } catch (e) { }

        if (completed + failed === photoUrls.length) {
            console.log(`\n✨ Download complete: ${completed} succeeded, ${failed} failed`);
        }
    });
});
