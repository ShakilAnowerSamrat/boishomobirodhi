const fs = require('fs');
const path = require('path');

const VIDEOS_JSON_PATH = path.join(__dirname, 'data', 'videos.json');
const SOURCE_HTML_PATH = path.join(__dirname, 'data', 'source_videos.html');

function main() {
    if (!fs.existsSync(VIDEOS_JSON_PATH) || !fs.existsSync(SOURCE_HTML_PATH)) {
        console.error("❌ Missing videos.json or source_videos.html");
        process.exit(1);
    }

    const videos = JSON.parse(fs.readFileSync(VIDEOS_JSON_PATH, 'utf-8'));
    const htmlContent = fs.readFileSync(SOURCE_HTML_PATH, 'utf-8');

    console.log(`📂 Loaded ${videos.length} videos from JSON.`);

    // Regex to match video src and the following caption
    // We look for <video src="..."> then match until we find the <div class="font-semibold">CAPTION</div>
    const regex = /<video src="([^"]+)"[\s\S]*?<div class="font-semibold">([\s\S]*?)<\/div>/g;

    let match;
    let updates = 0;
    const foundMeta = [];

    while ((match = regex.exec(htmlContent)) !== null) {
        const src = match[1];
        const caption = match[2].trim();
        foundMeta.push({ src, caption });
    }

    console.log(`🔍 Found ${foundMeta.length} captions in HTML.`);

    foundMeta.forEach(meta => {
        // Try to match by filename or full URL
        const video = videos.find(v => {
            if (!v.url) return false;
            // Decode URLs for comparison
            const vUrlDecoded = decodeURIComponent(v.url);
            const metaUrlDecoded = decodeURIComponent(meta.src);

            // Exact match
            if (vUrlDecoded === metaUrlDecoded) return true;

            // Check if one contains the other (handling query params etc)
            if (vUrlDecoded.includes(metaUrlDecoded) || metaUrlDecoded.includes(vUrlDecoded)) return true;

            // Filename match
            const vFilename = path.basename(vUrlDecoded.split('?')[0]);
            const metaFilename = path.basename(metaUrlDecoded.split('?')[0]);
            return vFilename === metaFilename;
        });

        if (video) {
            // Clean up caption (remove &nbsp; etc)
            const cleanCaption = meta.caption.replace(/&nbsp;/g, ' ').replace(/\s+/g, ' ').trim();

            if (video.title !== cleanCaption) {
                // Check if current title is just a filename-based placeholder
                // Update if the new caption is better (longer, has spaces, not just filename)
                video.title = cleanCaption;
                // Also update description if it's empty
                if (!video.description) video.description = cleanCaption;

                updates++;
                // console.log(`   📝 Updated: ${cleanCaption.substring(0, 50)}...`);
            }
        }
    });

    if (updates > 0) {
        fs.writeFileSync(VIDEOS_JSON_PATH, JSON.stringify(videos, null, 2));
        console.log(`✅ Updated ${updates} videos with captions from HTML.`);
    } else {
        console.log("ℹ️ No new updates found.");
    }
}

main();
