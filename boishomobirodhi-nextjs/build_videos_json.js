const fs = require('fs');
const path = require('path');

// Read existing process_videos.js to get all URLs
const processVideosContent = fs.readFileSync('process_videos.js', 'utf8');

// Extract the videoUrls array
const urlsMatch = processVideosContent.match(/const videoUrls = \[([\s\S]*?)\];/);
if (!urlsMatch) {
    console.error('Could not find video URLs in process_videos.js');
    process.exit(1);
}

// Parse the URLs
const urlsString = urlsMatch[1];
const urls = urlsString
    .split(',')
    .map(s => s.trim().replace(/['"]/g, ''))
    .filter(s => s.length > 0);

console.log(`Found ${urls.length} video URLs`);

// Function to extract title from filename
function extractTitle(url) {
    const filename = url.split('/').pop();
    const nameWithoutHash = filename.split('-').slice(1).join('-');
    const title = decodeURIComponent(nameWithoutHash)
        .replace(/\.mp4$/i, '')
        .replace(/FDownloader\.Net_/g, '')
        .replace(/_\d+p_.+$/g, '')
        .replace(/_/g, ' ')
        .replace(/\(\d+\)/g, '')
        .trim();

    return title || 'আর্কাইভ ভিডিও';
}

// Create video data
const videos = urls.map((url, index) => ({
    url,
    title: extractTitle(url),
    description: ''
}));

// Save to videos.json
fs.writeFileSync(
    'data/videos.json',
    JSON.stringify(videos, null, 2)
);

console.log(`✅ Created videos.json with ${videos.length} videos`);
console.log('\nSample titles:');
videos.slice(0, 10).forEach((v, i) => {
    console.log(`${i + 1}. ${v.title}`);
});
console.log(`\n...and ${videos.length - 10} more!`);
