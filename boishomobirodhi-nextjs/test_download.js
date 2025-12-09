const fs = require('fs');
const https = require('https');
const path = require('path');

const downloadDir = path.join(__dirname, 'public', 'archive', 'photos');
if (!fs.existsSync(downloadDir)) {
    console.log(`Creating directory: ${downloadDir}`);
    fs.mkdirSync(downloadDir, { recursive: true });
}

// Just one verified image for testing
const testUrl = "https://jrabd.org/storage/uploads/optimized_images_11zon/66ac898d9cc9c17/optimized__LpY5eT9__1722510255.jpg";
const filename = "test_download.jpg";
const filePath = path.join(downloadDir, filename);

console.log(`Attempting to download: ${testUrl}`);

const file = fs.createWriteStream(filePath);
const request = https.get(testUrl, (response) => {
    if (response.statusCode !== 200) {
        console.error(`Failed to download: Status Code ${response.statusCode}`);
        return;
    }

    response.pipe(file);

    file.on('finish', () => {
        file.close();
        console.log(`✅ SUCCESS: Downloaded to ${filePath}`);
    });
});

request.on('error', (err) => {
    console.error(`❌ ERROR: ${err.message}`);
    fs.unlink(filePath, () => { }); // Delete the file async
});
