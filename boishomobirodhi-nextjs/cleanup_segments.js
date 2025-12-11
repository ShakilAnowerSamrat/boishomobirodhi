const fs = require('fs');
const path = require('path');

const VIDEOS_PATH = path.join(__dirname, 'data', 'videos.json');

// Location-only videos should be "Random" instead of "Unknown"
const locationPatterns = [
    /^uttara$/i, /^mirpur$/i, /^dhanmondi$/i, /^gulshan$/i, /^banani$/i,
    /^badda$/i, /^rampura$/i, /^mohammadpur$/i, /^jatrabari$/i, /^chattogram$/i,
    /^sylhet$/i, /^rajshahi$/i, /^khulna$/i, /^barishal$/i, /^comilla$/i,
    /^gazipur$/i, /^savar$/i, /^feni$/i, /^noakhali$/i, /^bogura$/i,
    /^rangpur$/i, /^dinajpur$/i, /^mymensingh$/i, /^kushtia$/i, /^pabna$/i,
    /^naoga$/i, /^shahbag$/i, /^shahbagh$/i, /^nikunja$/i, /^banasree$/i,
    /^changkharpul$/i, /^sherpur$/i, /^lakshmipur$/i, /^chandpur$/i,
    /^brahmanbaria$/i, /^bagerhat$/i, /^ashuganj$/i, /^cox$/i, /^sirajganj$/i,
    /^panchagarh$/i, /^thakurgaon$/i, /^gaibandha$/i, /^jnu$/i,
    /^somewhere in/i, // "Somewhere in X" patterns
];

function isLocationOnly(title) {
    const cleaned = title.trim().toLowerCase();
    for (const pattern of locationPatterns) {
        if (pattern.test(cleaned)) return true;
    }
    // Short titles with common location words
    if (cleaned.length < 30 && /^(somewhere|unknown|random|\w+pur|\w+ganj|\w+hat)$/i.test(cleaned)) {
        return true;
    }
    return false;
}

function main() {
    const videos = JSON.parse(fs.readFileSync(VIDEOS_PATH, 'utf-8'));
    console.log(`📂 Loaded ${videos.length} videos`);

    let converted = 0;
    videos.forEach(v => {
        // Convert remaining Unknown location-only titles to Random
        if (v.segment === "Unknown" && isLocationOnly(v.title)) {
            v.segment = "Random";
            converted++;
        }
    });

    fs.writeFileSync(VIDEOS_PATH, JSON.stringify(videos, null, 2));
    console.log(`✅ Converted ${converted} location-only videos to "Random"`);

    // Stats
    const segments = {};
    videos.forEach(v => {
        segments[v.segment] = (segments[v.segment] || 0) + 1;
    });
    console.log("\n📊 Final segment distribution:");
    Object.entries(segments).sort((a, b) => b[1] - a[1]).forEach(([seg, count]) => {
        console.log(`   ${seg}: ${count}`);
    });
}

main();
