/**
 * Video URL Collector for jrabd.org
 * 
 * HOW TO COLLECT VIDEO URLs:
 * 
 * 1. Open https://jrabd.org/archive/video-archive in your browser
 * 2. Scroll down and click "Load More" several times
 * 3. Press F12 → Console tab
 * 4. Run this command:
 * 
 *    console.log(JSON.stringify(Array.from(document.querySelectorAll('iframe, video, source')).map(el => el.src || el.getAttribute('data-src')).filter(Boolean)))
 * 
 * 5. Copy the URLs and paste them into the videoData array below
 * 6. Run: node collect_videos.js
 */

const fs = require('fs');
const path = require('path');

// PASTE YOUR VIDEO DATA HERE
// Format: { url: "...", title: "...", thumbnail: "..." }
const videoData = [
    // Example:
    // { 
    //   url: "https://youtube.com/embed/...", 
    //   title: "Video Title",
    //   thumbnail: "https://..."
    // }
];

if (videoData.length === 0) {
    console.log('\n📹 NO VIDEO DATA FOUND!\n');
    console.log('👉 INSTRUCTIONS:\n');
    console.log('1. Open https://jrabd.org/archive/video-archive');
    console.log('2. Scroll and click "Load More" several times');
    console.log('3. Right-click on a video → "Inspect Element"');
    console.log('4. Look for <iframe> or <video> tags');
    console.log('5. Copy the src URLs (YouTube embeds, etc.)');
    console.log('6. Manually add them to this file\n');
    console.log('OR use the console command to extract all at once.\n');
    process.exit(0);
}

// Save to JSON
const dataDir = path.join('data');
if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true });
}

const jsonPath = path.join(dataDir, 'videos.json');
fs.writeFileSync(jsonPath, JSON.stringify(videoData, null, 2));

console.log(`✅ Saved ${videoData.length} videos to ${jsonPath}`);
console.log('\n📺 Next step: Run `npm run dev` and visit /archive/video\n');
