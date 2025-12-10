# বৈষম্যবিরোধী ছাত্র আন্দোলন ২০২৪ | Anti-Discrimination Student Movement 2024

> **ইতিহাসের সাক্ষী - Witness to History**  
> A comprehensive digital archive preserving the memory of Bangladesh's July-August 2024 Anti-Discrimination Student Movement

[![Next.js](https://img.shields.io/badge/Next.js-15.5.7-black?logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-18-blue?logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.0-38bdf8?logo=tailwind-css)](https://tailwindcss.com/)

---

## 📖 Table of Contents

- [About](#about)
- [Features](#features)
- [Technology Stack](#technology-stack)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Archive Content](#archive-content)
- [Development](#development)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

---

## 🎯 About

This project is a **historical archive** documenting the Anti-Discrimination Student Movement that took place in Bangladesh during July-August 2024. The movement resulted in significant political change, including the resignation of Prime Minister Sheikh Hasina on **August 5, 2024**.

The archive preserves:
- 📸 **Photographs** from the movement
- 🎬 **Videos** documenting events
- 🕯️ **Martyr profiles** honoring those who sacrificed their lives
- 📜 **Historical documents**, statements, and demands
- 🎨 **Revolutionary art** and graffiti
- 🗣️ **Slogans** that defined the movement

**Mission**: To ensure this pivotal moment in Bangladesh's history is never forgotten and remains accessible for future generations.

---

## ✨ Features

### Archive Sections

- **📷 Photo Archive**: Curated collection of photographs from the movement
- **🎥 Video Archive**: 160+ videos with hover-to-play functionality
- **🕯️ Martyrs Memorial**: Dedicated pages for each martyr with biographical information
- **📅 Timeline**: Chronological documentation of key events
- **🎨 Revolutionary Art**: Graffiti and visual art from the movement
- **📢 Slogans & Chants**: Preserved revolutionary slogans
- **👥 Coordinators**: Profiles of student leaders
- **🩹 Injured**: Documentation of those injured during the movement
- **📜 Statements**: Official demands and declarations

### Technical Features

- ⚡ **Fast Performance**: Built with Next.js 15 and optimized for speed
- 📱 **Responsive Design**: Works perfectly on all devices
- 🎨 **Modern UI**: Clean, accessible interface with Tailwind CSS
- 🔍 **SEO Optimized**: Proper meta tags and structured data
- 💾 **Local Storage**: All media files stored locally for permanent archival
- 🌐 **Bilingual Support**: Bengali and English content
- 🎭 **Interactive Elements**: Hover effects, smooth animations
- 📊 **Dynamic Data**: JSON-based content management

---

## 🛠️ Technology Stack

| Category | Technology |
|----------|-----------|
| **Framework** | Next.js 15.5.7 (React 18, App Router) |
| **Language** | TypeScript 5 |
| **Styling** | Tailwind CSS 4.0 |
| **Components** | Lucide React (icons) |
| **Data Management** | JSON files |
| **Media Storage** | Local filesystem |
| **Development** | Hot reload, TypeScript strict mode |

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** 18.0 or higher ([Download](https://nodejs.org/))
- **npm** or **yarn** package manager
- **Git** for version control

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/ShakilAnowerSamrat/boishomobirodhi.git
   cd boishomobirodhi-nextjs
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open in browser**
   ```
   http://localhost:3000
   ```

The app will automatically reload when you make changes to the code.

---

## 📁 Project Structure

```
boishomobirodhi-nextjs/
├── app/                          # Next.js App Router
│   ├── archive/                  # Archive section pages
│   │   ├── photo/               # Photo gallery
│   │   ├── video/               # Video gallery
│   │   ├── martyrs/             # Martyr profiles
│   │   ├── slogans/             # Revolutionary slogans
│   │   ├── coordinators/        # Student leaders
│   │   ├── art/                 # Revolutionary art
│   │   ├── statements/          # Official statements
│   │   └── injured/             # Injured documentation
│   ├── layout.tsx               # Root layout
│   └── page.tsx                 # Homepage
├── components/                   # React components
│   ├── navigation/              # Navbar, Footer
│   └── sections/                # Homepage sections
├── data/                        # JSON data files
│   ├── videos.json              # 170 video entries
│   ├── photos.json              # Photo metadata
│   ├── martyrs.json             # 16 martyr profiles
│   ├── slogans.json             # Revolutionary slogans
│   └── ...                      # Other data files
├── public/                      # Static assets
│   └── archive/                 # Archived media
│       ├── photos/              # 20 photos (~15-20 MB)
│       ├── videos/              # 160 videos (~920 MB)
│       └── martyrs/             # Martyr photos
├── scripts/                     # Utility scripts
│   ├── download_videos.js       # Video downloader
│   ├── download_photos.js       # Photo downloader
│   └── build_videos_json.js     # JSON generator
└── README.md                    # This file
```

---

## 📦 Archive Content

### Current Archive Statistics

| Content Type | Count | Size | Status |
|--------------|-------|------|--------|
| **Videos** | 160/170 | ~920 MB | ✅ Downloaded |
| **Photos** | 20 | ~15-20 MB | ✅ Downloaded |
| **Martyrs** | 16 profiles | With photos | ✅ Complete |
| **Slogans** | 10 | Text data | ✅ Complete |
| **Coordinators** | Multiple | Profiles | ✅ Complete |
| **Art Descriptions** | Several | Text data | ✅ Complete |

### Failed Video Downloads

The following 10 videos failed to download (no longer available on CDN):

- `video_113.mp4`
- `video_116.mp4`
- `video_118.mp4`
- `video_125.mp4`
- `video_128.mp4`
- `video_132.mp4`
- `video_134.mp4`
- `video_136.mp4`
- `video_138.mp4`
- (1 more from the 170 total)

These can be added manually by:
1. Obtaining the video files
2. Placing them in `public/archive/videos/`
3. Videos will automatically be picked up from `videos.json`

---

## 💻 Development

### Key Commands

```bash
# Development server
npm run dev

# Production build
npm run build

# Start production server
npm start

# Type checking
npx tsc --noEmit

# Linting
npm run lint
```

### Adding New Content

#### Adding Photos

1. Place photos in `public/archive/photos/`
2. Update `data/photos.json`:
   ```json
   {
     "id": "unique-id",
     "url": "https://original-url.com/photo.jpg",
     "localPath": "/archive/photos/photo-name.jpg",
     "caption": "Photo description",
     "credit": "Photographer name"
   }
   ```

#### Adding Videos

1. Place videos in `public/archive/videos/`
2. Update `data/videos.json`:
   ```json
   {
     "url": "https://original-url.com/video.mp4",
     "title": "Video title",
     "description": "Video description",
     "localPath": "/archive/videos/video-name.mp4"
   }
   ```

#### Adding Martyrs

1. Add martyr photo to `public/archive/martyrs/`
2. Update `data/martyrs.json`:
   ```json
   {
     "id": "unique-id",
     "name": "মার্টির নাম",
     "nameEn": "Martyr Name",
     "age": 20,
     "dateOfDeath": "2024-07-16",
     "location": "Dhaka",
     "bio": "Biography...",
     "photoUrl": "/archive/martyrs/photo.jpg"
   }
   ```

---

## 🌐 Deployment

### Deploy to Vercel (Recommended)

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Import to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "Import Project"
   - Select your GitHub repository
   - Click "Deploy"

3. **Configure Build Settings** (auto-detected)
   - Framework: Next.js
   - Build Command: `npm run build`
   - Output Directory: `.next`

### Deploy to Other Platforms

- **Netlify**: Works with Next.js plugin
- **GitHub Pages**: Requires static export (`npm run build && npm run export`)
- **Self-hosted**: Use `npm start` after `npm run build`

---

## 🤝 Contributing

We welcome contributions to preserve and improve this historical archive!

### How to Contribute

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. **Make your changes**
4. **Commit with a descriptive message**
   ```bash
   git commit -m "Add: Description of your changes"
   ```
5. **Push to your fork**
   ```bash
   git push origin feature/your-feature-name
   ```
6. **Open a Pull Request**

### Contribution Guidelines

- ✅ Ensure all media is properly attributed
- ✅ Verify historical accuracy
- ✅ Follow existing code style (TypeScript + Tailwind)
- ✅ Test thoroughly before submitting
- ✅ Update documentation as needed
- ✅ Respect the dignity and memory of martyrs

---

## 📜 License

This project is dedicated to preserving the history of the July-August 2024 Anti-Discrimination Student Movement in Bangladesh. 

**Content**: Historical documentation is in the public interest for preservation and education.

**Code**: MIT License - Feel free to use and modify the codebase.

---

## 🙏 Acknowledgments

- **The Martyrs**: Who gave their lives for justice and equality
- **The Students**: Who led the movement with courage
- **The People of Bangladesh**: Who supported the movement
- **jrabd.org**: For initial documentation and media hosting
- **All Contributors**: Who help preserve this history

---

## 📞 Contact

For questions, suggestions, or to contribute content:

- **GitHub**: [ShakilAnowerSamrat/boishomobirodhi](https://github.com/ShakilAnowerSamrat/boishomobirodhi)
- **Email**: info@jrabd.org

---

## 🎯 Roadmap

- [ ] Complete download of all 170 videos
- [ ] Add more martyr profiles with detailed biographies
- [ ] Implement advanced search functionality
- [ ] Add multilingual support (more languages)
- [ ] Create downloadable archive packages
- [ ] Add interactive timeline with map integration
- [ ] Develop mobile app version
- [ ] Integrate eyewitness testimonials

---

<div align="center">

**ইতিহাসের সাক্ষী থাকবে চিরকাল**  
*The Witness to History Will Remain Forever*

**🇧🇩 বাংলাদেশ | Bangladesh**

---

Made with ❤️ for the martyrs and the people of Bangladesh

</div>
