const fs = require('fs');
const https = require('https');
const path = require('path');

const downloadDir = path.join(__dirname, 'public', 'archive', 'photos');
if (!fs.existsSync(downloadDir)) {
    fs.mkdirSync(downloadDir, { recursive: true });
}

console.log("Starting download process for 8 verified images...");

const photos = [
    "https://jrabd.org/storage/uploads/optimized_images_11zon/66ac898d9cc9c17/optimized__LpY5eT9__1722510255.jpg",
    "https://jrabd.org/storage/uploads/optimized_images_11zon/66ac898d9cc9c14/optimized__o6_P4O0__1722510342.jpg",
    "https://jrabd.org/storage/uploads/optimized_images_11zon/66ac8b0907d726/optimized__p_e1h5e_1722591602.jpg",
    "https://jrabd.org/storage/uploads/optimized_images_11zon/66ac7b90226343/optimized_23f-e54e4a07-8ec9-4595-ad24-469b8bd515cd-13eb674b-abce-4d56-b072-bc325126f5d8-043cf641-58d3-4929-a16f-161b5ee17246-(1)-1_1722604085.jpg",
    "https://jrabd.org/storage/uploads/optimized_images_11zon/66ac7b90226344/optimized_24f_1722604090.jpg",
    "https://jrabd.org/storage/uploads/optimized_images_11zon/66ac7b90226345/optimized_25f_1722604107.jpg",
    "https://jrabd.org/storage/uploads/optimized_images_11zon/66ac7b90226346/optimized_26f_1722604113.jpg",
    "https://jrabd.org/storage/uploads/optimized_images_11zon/66ac7b90226347/optimized_27f_1722604119.jpg"
];

const localPaths = [];

console.log(`Found ${photos.length} photos to download.`);

let completed = 0;

photos.forEach((url, index) => {
    const filename = `archive_photo_${index + 1}.jpg`;
    const filePath = path.join(downloadDir, filename);
    const file = fs.createWriteStream(filePath);

    console.log(`[${index + 1}/${photos.length}] Downloading: ${url}`);

    https.get(url, (response) => {
        response.pipe(file);
        file.on('finish', () => {
            file.close();
            console.log(`✅ Success: ${filename}`);
            completed++;
            if (completed === photos.length) {
                console.log("All downloads completed!");
                // Update photos.json content only after all done
                const jsonPath = path.join(__dirname, 'data', 'photos.json');
                fs.writeFileSync(jsonPath, JSON.stringify(localPaths, null, 2));
                console.log("Updated data/photos.json with local paths.");
            }
        });
    }).on('error', (err) => {
        fs.unlink(filePath);
        console.error(`❌ Error downloading ${filename}: ${err.message}`);
    });

    localPaths.push(`/archive/photos/${filename}`);
});
