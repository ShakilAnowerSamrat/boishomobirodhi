const fs = require('fs');
const path = require('path');

// PASTE THE HTML CODE FROM BROWSER BELOW (replace the empty string):
const htmlContent = `
PASTE YOUR HTML HERE
`;

// Extract video data from HTML
function extractVideos(html) {
    const videos = [];

    // Match video src and title patterns
    const videoPattern = /<video[^>]*src="([^"]+)"[^>]*>[\s\S]*?<div class="font-semibold">(.*?)<\/div>/g;

    let match;
    while ((match = videoPattern.exec(html)) !== null) {
        const url = match[1];
        const title = match[2]
            .replace(/<[^>]+>/g, '') // Remove HTML tags
            .replace(/&nbsp;/g, ' ') // Replace nbsp
            .replace(/&amp;/g, '&')
            .trim();

        if (url && title) {
            videos.push({ url, title, description: '' });
        }
    }

    return videos;
}

// Check if HTML is pasted
if (htmlContent.trim() === '' || htmlContent.includes('PASTE YOUR HTML HERE')) {
    console.log('\n❌ NO HTML PASTED!');
    console.log('\n📋 INSTRUCTIONS:');
    console.log('1. Open this file in a text editor');
    console.log('2. Find the line: const htmlContent = `');
    console.log('3. Paste your HTML code between the backticks');
    console.log('4. Save the file');
    console.log('5. Run: node extract_videos.js\n');
    process.exit(0);
}

// Extract videos
const videos = extractVideos(htmlContent);

if (videos.length === 0) {
    console.log('\n⚠️  NO VIDEOS FOUND!');
    console.log('The HTML pattern may have changed. Check the script.\n');
    process.exit(1);
}

// Save to JSON
const dataDir = path.join('data');
if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true });
}

const jsonPath = path.join(dataDir, 'videos.json');
fs.writeFileSync(jsonPath, JSON.stringify(videos, null, 2));

console.log(`\n✅ Extracted ${videos.length} videos!`);
console.log(`📝 Saved to ${jsonPath}\n`);

// Show sample
console.log('Sample videos:');
videos.slice(0, 5).forEach((v, i) => {
    console.log(`${i + 1}. ${v.title}`);
});
console.log(`\n... and ${videos.length - 5} more\n`);
