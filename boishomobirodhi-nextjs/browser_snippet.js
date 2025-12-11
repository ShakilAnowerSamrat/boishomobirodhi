// 1. Go to https://jrabd.org/archive/video-archive
// 2. Scroll down until ALL videos are loaded (click "Load More" if needed)
// 3. Press F12 to open Developer Tools -> Console tab
// 4. Paste ALL the code below and press Enter:

(function() {
    const extractedData = [];
    const cards = document.querySelectorAll('.shadow-xl');
    
    console.log(`Found ${cards.length} card elements.`);
    
    cards.forEach(card => {
        const videoEl = card.querySelector('video');
        const captionEl = card.querySelector('.font-semibold');
        
        if (videoEl && captionEl) {
            extractedData.push({
                src: videoEl.src,
                caption: captionEl.innerText.trim()
                    .replace(/\n/g, ' ')  // Remove newlines
                    .replace(/\s+/g, ' ') // Collapse multiple spaces
            });
        }
    });

    if (extractedData.length > 0) {
        console.log(`✅ Successfully extracted ${extractedData.length} videos.`);
        
        // Print to console in case copy fails
        console.log(JSON.stringify(extractedData, null, 2));
        
        // DevTools specific command to copy to clipboard
        if (typeof copy === 'function') {
            copy(extractedData);
            console.log("🎉 Data automatically COPIED to your clipboard! You can paste it now.");
            alert("Data copied to clipboard! Paste it into the file.");
        } else {
            console.log("⚠️ Auto-copy failed. Please manually copy the JSON object above.");
        }
    } else {
        console.log("❌ No videos found. Please make sure you are on the correct page and videos are loaded.");
    }
})();
