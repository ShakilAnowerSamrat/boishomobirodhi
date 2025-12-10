const fs = require('fs');
const path = require('path');

// Your HTML snippet with video data
const htmlContent = `<div class="shadow-xl p-[10px] rounded-xl cursor-pointer bg-white border hover:shadow-2xl transition-shadow"><div class="relative w-full h-52 bg-gray-900 rounded-xl overflow-hidden group"><video src="https://d1d5tqaqgxfrly.cloudfront.net/video-archive/ue87GmjN-FDownloader.Net_AQOFl0gAgn8YDIuw6i51n4ymgOVNXO1FtgvZKHPp0USG8rkNP7k9a9em2GIkfClWN50Bmtxjtqp2wFgiVEt_fsZEyTYkgE0OqX1H5fqHNA_360p_(SD).mp4" class="w-full h-full object-cover" preload="metadata"></video><div class="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 group-hover:bg-opacity-50 transition-all"><div class="bg-green-600 group-hover:bg-green-700 rounded-full p-4 shadow-lg transition-all transform group-hover:scale-110"><svg class="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 20 20"><path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z"></path></svg></div></div></div><div class="mt-3 text-sm text-gray-700 text-center"><div class="font-semibold">President Mohammed Shahabuddin Chuppu announced the resignation of Prime Minister Sheikh Hasina</div></div></div>`;

// Extract all video entries
const videoPattern = /<video[^>]*src="([^"]+)"[^>]*>[\s\S]*?<div class="font-semibold">(.*?)<\/div>/g;

const videos = [];
let match;

while ((match = videoPattern.exec(htmlContent)) !== null) {
    const url = match[1];
    const rawTitle = match[2];

    // Clean up title
    const title = rawTitle
        .replace(/<[^>]+>/g, '') // Remove HTML tags
        .replace(/&nbsp;/g, ' ') // Replace nbsp
        .replace(/&amp;/g, '&')
        .trim();

    if (url && title) {
        videos.push({
            url,
            title,
            description: ''
        });
    }
}

// Save to JSON
const dataDir = path.join(__dirname, 'data');
if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true });
}

const jsonPath = path.join(dataDir, 'videos.json');
fs.writeFileSync(jsonPath, JSON.stringify(videos, null, 2));

console.log(`\n✅ Successfully extracted ${videos.length} videos!`);
console.log(`📝 Saved to: ${jsonPath}\n`);

console.log('Sample videos:');
videos.slice(0, 5).forEach((v, i) => {
    console.log(`${i + 1}. ${v.title}`);
});

if (videos.length > 5) {
    console.log(`\n... and ${videos.length - 5} more videos!\n`);
}
