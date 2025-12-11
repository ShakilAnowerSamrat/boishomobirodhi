const fs = require('fs');
const path = require('path');

const VIDEOS_PATH = path.join(__dirname, 'data', 'videos.json');

// Enhanced segment rules based on common words in titles
function guessSegment(title) {
    const text = title.toLowerCase();

    // Significant locations/events
    if (/(ganabhaban|parliament|sangsad|gonobhaban|shaheed minar|shohid minar)/i.test(text)) return "Significant video";
    if (/(ashuganj|sirajganj|kishoreganj|narayanganj)/i.test(text)) return "Significant video";
    if (/(president|resignation|hasina escape|army chief|chuppu)/i.test(text)) return "Significant video";
    if (/(victory|toppled|bulldozer)/i.test(text)) return "Significant video";

    // Police/Violence
    if (/(police|rab|bgb|apbn|firing|shot|shoot|gunfire|bullet|baton)/i.test(text)) return "Police Brutality";
    if (/(surrender|abduct|arrest|brutality|brutal|attack on|torture)/i.test(text)) return "Police Brutality";
    if (/(teargas|tear gas|shell|bomb|violence|bloody)/i.test(text)) return "Police Brutality";

    // League related
    if (/(league|chatro league|jubo league|bcl|bsl|goon)/i.test(text)) return "League Attack";
    if (/(ছাত্রলীগ|লীগ)/i.test(text)) return "League Attack";

    // Martyrs
    if (/(martyr|shahid|shaheed|killed|died|murder|dead body|deadbody|body)/i.test(text)) return "Martyr Video";
    if (/(শহীদ)/i.test(text)) return "Martyr Video";

    // Protests/Uprising
    if (/(protest|uprising|revolt|revolution|march|rally|demand|roar|rise)/i.test(text)) return "Significant video";
    if (/(আন্দোলন|বিক্ষোভ|মিছিল)/i.test(text)) return "Significant video";
    if (/(one demand|step down|resign|dictator)/i.test(text)) return "Significant video";
    if (/(vua|ভুয়া)/i.test(text)) return "Slogan";

    // Universities
    if (/(university|du |ju |ru |buet|sust|nsu|iub|bracu|brac|ruet|duet)/i.test(text)) return "Private University";
    if (/(বিশ্ববিদ্যালয়|ঢাবি|জাবি)/i.test(text)) return "Private University";
    if (/(college|কলেজ)/i.test(text)) return "Private University";

    // Slogan
    if (/(slogan|chant|স্লোগান)/i.test(text)) return "Slogan";
    if (/(তুমি কে আমি কে|রাজাকার)/i.test(text)) return "Slogan";

    // Probashi/Foreign
    if (/(london|usa|canada|kolkata|sweden|swidden|abroad)/i.test(text)) return "Probasi";
    if (/(কলকাতা|সুইডেন)/i.test(text)) return "Probasi";

    // Teachers/Mothers
    if (/(teacher|mother|শিক্ষক|মা)/i.test(text)) return "Teacher";

    // Helicopter
    if (/(helicopter)/i.test(text)) return "Helicopter shot";

    // Music/Songs
    if (/\b(song|music|gan|gaan|গান)\b/i.test(text)) return "July Song";

    // News
    if (/(news|সংবাদ|খবর|ntv|jamuna|channel|banglavision)/i.test(text)) return "Significant video";

    // Location-based fallback (just place names = likely protest footage)
    const locations = /(uttara|mirpur|dhanmondi|gulshan|banani|badda|rampura|mohammadpur|jatrabari|chattogram|sylhet|rajshahi|khulna|barishal|comilla|gazipur|savar|feni|noakhali|bogura|rangpur|dinajpur|mymensingh|kushtia|pabna)/i;
    if (locations.test(text) && text.length < 50) return "Random"; // Short location-only titles

    return "Unknown";
}

function main() {
    const videos = JSON.parse(fs.readFileSync(VIDEOS_PATH, 'utf-8'));
    console.log(`📂 Loaded ${videos.length} videos`);

    let updated = 0;
    videos.forEach(v => {
        const oldSegment = v.segment;
        const newSegment = guessSegment(v.title || "");
        if (newSegment !== "Unknown" && oldSegment === "Unknown") {
            v.segment = newSegment;
            updated++;
        }
    });

    fs.writeFileSync(VIDEOS_PATH, JSON.stringify(videos, null, 2));
    console.log(`✅ Updated ${updated} videos`);

    // Stats
    const segments = {};
    videos.forEach(v => {
        segments[v.segment] = (segments[v.segment] || 0) + 1;
    });
    console.log("\n📊 New segment distribution:");
    Object.entries(segments).sort((a, b) => b[1] - a[1]).forEach(([seg, count]) => {
        console.log(`   ${seg}: ${count}`);
    });
}

main();
