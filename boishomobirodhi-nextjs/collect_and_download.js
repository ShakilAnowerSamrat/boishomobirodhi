/**
 * Interactive URL Collector Script
 * 
 * This script helps you manually collect photo URLs from jrabd.org
 * 
 * HOW TO USE:
 * 1. Open https://jrabd.org/archive/photo-archive in your browser
 * 2. Press F12 to open Developer Tools
 * 3. Go to Console tab
 * 4. Paste this code and press Enter:
 *
 *    copy(JSON.stringify(Array.from(document.querySelectorAll('img')).map(img => img.src).filter(src => src.includes('jrabd.org/storage'))))
 *
 * 5. This copies all image URLs to your clipboard as JSON
 * 6. Paste the URLs into the photoUrls array below
 * 7. Run: node collect_and_download.js
 */

const https = require('https');
const fs = require('fs');
const path = require('path');

// PASTE YOUR URLS HERE (replace this empty array):
const photoUrls = [
    // Example: "https://jrabd.org/storage/uploads/...",
    // Add your URLs here after collecting them from the browser
];

// If no URLs provided, show instructions
if (photoUrls.length === 0) {
    console.log('\n📋 NO URLS FOUND!');
    console.log('\n👉 INSTRUCTIONS:');
    console.log('1. Open https://jrabd.org/archive/photo-archive in Chrome/Edge');
    console.log('2. Scroll down and click "Load More" several times');
    console.log('3. Press F12 → Console tab');
    console.log('4. Paste this code and press Enter:\n');
    console.log('   copy(JSON.stringify(Array.from(document.querySelectorAll(\'img\')).map(img => img.src).filter(src => src.includes(\'jrabd.org/storage\'))))');
    console.log('\n5. The URLs are now in your clipboard!');
    console.log('6. Paste them into this file (photoUrls array)');
    console.log('7. Run: node collect_and_download.js\n');
    process.exit(0);
}

// Create directory
const downloadDir = path.join('public', 'archive', 'photos');
if (!fs.existsSync(downloadDir)) {
    fs.mkdirSync(downloadDir, { recursive: true });
    console.log(`✅ Created: ${downloadDir}`);
}

console.log(`\n📥 Downloading ${photoUrls.length} photos...\n`);

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
