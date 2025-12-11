const fs = require('fs');
const path = require('path');

const SCRAPED_PATH = path.join(__dirname, 'data', 'scraped_videos.json');
const VIDEOS_PATH = path.join(__dirname, 'data', 'videos.json');

function guessSegment(title) {
    const text = title.toLowerCase();
    if (/(ganabhaban|parliament|sangsad|gonobhaban)/i.test(text)) return "Significant video";
    if (/(ashuganj|sirajganj|kishoreganj|narayanganj)/i.test(text)) return "Significant video";
    if (/police|rab|bgb|firing|shot|shoot/i.test(text)) return "Police Brutality";
    if (/league|chatro league|jubo league/i.test(text)) return "League Attack";
    if (/martyr|shahid|killed|died|murder/i.test(text)) return "Martyr Video";
    if (/slogan/i.test(text)) return "Slogan";
    if (/helicopter/i.test(text)) return "Helicopter shot";
    if (/\b(song|music|gan|gaan)\b/i.test(text)) return "July Song";
    return "Unknown";
}

function main() {
    if (!fs.existsSync(SCRAPED_PATH)) {
        console.error("❌ scraped_videos.json not found!");
        process.exit(1);
    }

    const scraped = JSON.parse(fs.readFileSync(SCRAPED_PATH, 'utf-8'));
    console.log(`📂 Loaded ${scraped.length} videos from scraped_videos.json`);

    const videos = scraped.map((item, index) => {
        const segment = guessSegment(item.caption || "");
        return {
            url: item.src,
            title: item.caption || "Unknown",
            description: item.caption || "",
            localPath: `/archive/videos/video_${index + 1}.mp4`,
            segment: segment,
            date: "Unknown"
        };
    });

    fs.writeFileSync(VIDEOS_PATH, JSON.stringify(videos, null, 2));
    console.log(`✅ Created videos.json with ${videos.length} videos`);

    // Stats
    const segments = {};
    videos.forEach(v => {
        segments[v.segment] = (segments[v.segment] || 0) + 1;
    });
    console.log("\n📊 Segment distribution:");
    Object.entries(segments).sort((a, b) => b[1] - a[1]).forEach(([seg, count]) => {
        console.log(`   ${seg}: ${count}`);
    });
}

main();
