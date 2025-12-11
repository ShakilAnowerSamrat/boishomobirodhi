const fs = require('fs');
const path = require('path');

const VIDEOS_JSON_PATH = path.join(__dirname, 'data', 'videos.json');
// Prefer full source if available, fallback to source_videos.html
const FULL_SOURCE_PATH = path.join(__dirname, 'data', 'full_source.html');
const SOURCE_HTML_PATH = path.join(__dirname, 'data', 'source_videos.html');

function main() {
    let htmlPath = SOURCE_HTML_PATH;
    if (process.argv.includes('--full') && fs.existsSync(FULL_SOURCE_PATH)) {
        htmlPath = FULL_SOURCE_PATH;
        console.log(`📂 Using full source HTML from: ${htmlPath}`);
    } else if (fs.existsSync(SOURCE_HTML_PATH)) {
        console.log(`📂 Using source HTML from: ${htmlPath}`);
    } else {
        console.error("❌ Missing source html file");
        process.exit(1);
    }

    if (!fs.existsSync(VIDEOS_JSON_PATH)) {
        console.error("❌ Missing videos.json");
        process.exit(1);
    }

    const videos = JSON.parse(fs.readFileSync(VIDEOS_JSON_PATH, 'utf-8'));
    const htmlContent = fs.readFileSync(htmlPath, 'utf-8');

    console.log(`📂 Loaded ${videos.length} videos from JSON.`);

    // 1. Extract Filter Options (Segments)
    // Looking for <option value="Segment Name">Segment Name</option>
    // but we can be smarter: search for the specific select block if possible, or just all unique options
    // The snippet usually has options like <option value="Arrest">Arrest</option>
    const optionRegex = /<option value="([^"]+)">/g;
    const segments = new Set();
    let optMatch;
    while ((optMatch = optionRegex.exec(htmlContent)) !== null) {
        const val = optMatch[1];
        // Filter out likely non-segment options if global regex catches too much
        // Segments usually capitalize, dates are numeric/month
        if (val !== "All Segments" && val !== "All Dates" && val.length > 2) {
            segments.add(val);
        }
    }
    // Note: This matches both Segments and Dates, but we primarily need Titles for now.
    // If we want to map Segments to Videos, we need to see if the HTML acts as a map.
    // In the provided snippet, there is NO direct link between video div and segment name in class/attr.
    // So we primarily rely on Title Extraction.

    // 2. Extract Titles/Captions
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
            const cleanCaption = meta.caption.replace(/&nbsp;/g, ' ').replace(/\s+/g, ' ').replace(/&amp;/g, '&').trim();

            if (video.title !== cleanCaption) {
                // Check if current title is just a filename-based placeholder
                // Update if the new caption is better (longer, has spaces, not just filename)
                video.title = cleanCaption;
                // Also update description if it's empty or same as old title
                if (!video.description || video.description === video.title) {
                    video.description = cleanCaption;
                }

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
