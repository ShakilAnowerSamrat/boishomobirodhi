const fs = require('fs');
const path = require('path');

// Configuration
const VIDEOS_JSON_PATH = path.join(__dirname, 'data', 'videos.json');
const BACKUP_PATH = path.join(__dirname, 'data', 'videos.backup.json');

// Metadata Categories (Matched with frontend)
const SEGMENTS = [
    "Arrest", "Brutality", "Celebrity", "Child", "Dead body",
    "Foreign celebrity", "Helicopter shot", "Islamist Hujur", "July Song",
    "League Attack", "Martyr Video", "Medical College", "Meme&cartoon",
    "Mondir pahara", "Mother", "Mujibbad Murdabad", "Photo", "Photocard",
    "Police Brutality", "Private University", "Probasi", "Rickshaw Wala",
    "Significant photo", "Significant video", "Teacher", "Video with music",
    "Women", "Slogan", "Poster", "Random"
];

const DATES = [
    ...Array.from({ length: 36 }, (_, i) => `${i + 1}${i === 0 ? 'st' : i === 1 ? 'nd' : i === 2 ? 'rd' : 'th'} July`)
];

// Helper to guess segment from title/description
function guessSegment(title, description) {
    const text = (title + " " + description).toLowerCase();

    // Exact place matches that should NOT be songs
    if (/(ganabhaban|parliament|sangsad|gonobhaban)/i.test(text)) return "Significant video";
    if (/(ashuganj|sirajganj|kishoreganj|narayanganj)/i.test(text)) return "Significant video";

    const rules = [
        { key: /slogan|slagon/i, value: "Slogan" },
        { key: /martyr|shahid|killed|died|murder/i, value: "Martyr Video" },
        { key: /police|rab|bgb/i, value: "Police Brutality" },
        { key: /league|chatro league|jubo league/i, value: "League Attack" },
        { key: /helicopter/i, value: "Helicopter shot" },
        { key: /\b(song|music|gan|gange)\b/i, value: "July Song" },
        { key: /teacher|shikkhok/i, value: "Teacher" },
        { key: /student|chatro/i, value: "Significant video" }, // Default fallback for students
    ];

    for (const rule of rules) {
        if (rule.key.test(text)) return rule.value;
    }
    return "Unknown";
}

// Main function
function main() {
    const args = process.argv.slice(2);
    const command = args[0];

    if (!fs.existsSync(VIDEOS_JSON_PATH)) {
        console.error("❌ videos.json not found!");
        process.exit(1);
    }

    const videos = JSON.parse(fs.readFileSync(VIDEOS_JSON_PATH, 'utf-8'));
    console.log(`📂 Loaded ${videos.length} videos.`);

    // Backup
    if (!fs.existsSync(BACKUP_PATH)) {
        fs.writeFileSync(BACKUP_PATH, JSON.stringify(videos, null, 2));
        console.log("💾 Created backup at videos.backup.json");
    }

    if (command === 'init') {
        // Initialize fields
        let updatedCount = 0;
        videos.forEach(v => {
            if (!v.segment) { v.segment = "Unknown"; updatedCount++; }
            if (!v.date) { v.date = "Unknown"; updatedCount++; }
        });
        saveVideos(videos);
        console.log(`✅ Initialized metadata for ${updatedCount} fields.`);

    } else if (command === 'auto' || command === 'retag') {
        // Auto-guess segments
        let updatedCount = 0;
        videos.forEach(v => {
            // If 'retag', we check everything. If 'auto', only Unknown.
            if (command === 'retag' || v.segment === "Unknown" || !v.segment) {
                const oldSegment = v.segment;
                const guess = guessSegment(v.title || "", v.description || "");

                // Only update if we found a better guess than "Unknown"
                // OR if we are retagging and the new guess is different from the old one
                if (guess !== "Unknown" && (guess !== oldSegment || command === 'retag')) {
                    // Check if we are fixing a bad "July Song" tag
                    if (oldSegment === "July Song" && guess === "Significant video") {
                        v.segment = guess;
                        updatedCount++;
                        console.log(`   🔧 FIXED: "${v.title}" : ${oldSegment} -> ${guess}`);
                    } else if (guess !== oldSegment) {
                        v.segment = guess;
                        updatedCount++;
                        console.log(`   🔸 "${v.title}" : ${oldSegment} -> ${guess}`);
                    }
                }
            }
        });
        saveVideos(videos);
        console.log(`✅ ${command === 'retag' ? 'Re-tagged' : 'Auto-tagged'} ${updatedCount} videos.`);

    } else if (command === 'status') {
        // Show status
        const segmentStats = {};
        let unknownSegments = 0;
        let unknownDates = 0;

        videos.forEach(v => {
            segmentStats[v.segment] = (segmentStats[v.segment] || 0) + 1;
            if (v.segment === "Unknown" || !v.segment) unknownSegments++;
            if (v.date === "Unknown" || !v.date) unknownDates++;
        });

        console.log("\n📊 Statistics:");
        console.log(`   Unknown Segments: ${unknownSegments}`);
        console.log(`   Unknown Dates:    ${unknownDates}`);
        console.log("\n📋 Segment Distribution:");
        Object.keys(segmentStats).forEach(k => console.log(`   - ${k}: ${segmentStats[k]}`));

    } else {
        console.log("\n❓ Usage:");
        console.log("   node manage_metadata.js init   - Add missing fields (Unknown)");
        console.log("   node manage_metadata.js auto   - Auto-guess for unknown fields");
        console.log("   node manage_metadata.js retag  - Re-process ALL videos (fixes errors)");
        console.log("   node manage_metadata.js status - Show metadata statistics");
    }
}

function saveVideos(videos) {
    fs.writeFileSync(VIDEOS_JSON_PATH, JSON.stringify(videos, null, 2));
    console.log("💾 Saved changes to videos.json");
}

main();
