const https = require('https');

const url = 'https://jrabd.org/archive/photo-archive';

https.get(url, (res) => {
    let data = '';

    res.on('data', (chunk) => {
        data += chunk;
    });

    res.on('end', () => {
        // Look for Next.js data
        const nextDataMatch = data.match(/<script id="__NEXT_DATA__" type="application\/json">(.*?)<\/script>/);
        if (nextDataMatch && nextDataMatch[1]) {
            console.log("FOUND_NEXT_DATA");
            console.log(nextDataMatch[1].substring(0, 500) + "..."); // Print start of data to verify
        } else {
            // Look for other common JSON blobs
            console.log("NO_NEXT_DATA_FOUND");
            // Check for window.initialData or similar
            const otherJson = data.match(/window\.__INITIAL_STATE__\s*=\s*({.*?});/);
            if (otherJson) console.log("FOUND_INITIAL_STATE");
        }

        // Check if we can see image URLs in the raw HTML (Server Side Rendered)
        const imgMatches = data.match(/https:\/\/jrabd\.org\/storage\/.*?\.(jpg|png|jpeg)/g);
        if (imgMatches) {
            console.log(`FOUND_${imgMatches.length}_RAW_IMAGES`);
            console.log(imgMatches.slice(0, 5));
        } else {
            console.log("NO_RAW_IMAGES_FOUND");
        }
    });

}).on("error", (err) => {
    console.log("Error: " + err.message);
});
