# Manual Setup Guide

Since I cannot execute commands directly, please run these steps manually in your PowerShell terminal.

## Step 1: Download Photos

Run this command:
```powershell
node manual_download_photos.js
```

This will:
- Create the `public/archive/photos` directory
- Download test images from jrabd.org
- Show you which ones work and which return 404

## Step 2: Get Fresh URLs from jrabd.org

If the test images return 404 (file not found), the URLs may be outdated. You need to:

1. Open https://jrabd.org/archive/photo-archive in your browser
2. Right-click on images → "Open image in new tab"
3. Copy the real image URLs
4. Paste them into `manual_download_photos.js` (replace the photoUrls array)
5. Run `node manual_download_photos.js` again

## Step 3: Run the Next.js Dev Server

```powershell
npm run dev
```

Then open http://localhost:3000 to see your website!

## What I Can Do Without Commands

While you handle downloads manually, I can:
- ✅ Create/update all website pages
- ✅ Build the photo/video gallery UI
- ✅ Add martyr profiles
- ✅ Implement search and filters
- ✅ Create the complete archive structure

Let me know once you've tried the download script and I'll continue building the website!
