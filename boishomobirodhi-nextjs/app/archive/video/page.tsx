"use client";

import { Navbar } from "@/components/navigation/Navbar";
import { Footer } from "@/components/navigation/Footer";
import Link from "next/link";
import { ArrowLeft, Play, Search } from "lucide-react";
import videosData from "@/data/videos.json";
import { useState, useMemo } from "react";

// Segment categories from jrabd.org
const SEGMENTS = [
    "All Segments",
    "Arrest",
    "Brutality",
    "Celebrity",
    "Child",
    "Dead body",
    "Foreign celebrity",
    "Helicopter shot",
    "Islamist Hujur",
    "July Song",
    "League Attack",
    "Martyr Video",
    "Medical College",
    "Meme&cartoon",
    "Mondir pahara",
    "Mother",
    "Mujibbad Murdabad",
    "Photo",
    "Photocard",
    "Police Brutality",
    "Private University",
    "Probasi",
    "Rickshaw Wala",
    "Significant photo",
    "Significant video",
    "Teacher",
    "Video with music",
    "Women",
    "Slogan",
    "Poster",
    "Random"
];

// Dates from jrabd.org
const DATES = [
    "All Dates",
    ...Array.from({ length: 36 }, (_, i) => `${i + 1}${i === 0 ? 'st' : i === 1 ? 'nd' : i === 2 ? 'rd' : 'th'} July`),
    "Unknown"
];

export default function VideoArchivePage() {
    const [selectedSegment, setSelectedSegment] = useState("All Segments");
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedDate, setSelectedDate] = useState("All Dates");

    // Filter videos based on selected filters
    const filteredVideos = useMemo(() => {
        return videosData.filter((video) => {
            // Segment filter
            const matchesSegment = selectedSegment === "All Segments" || video.segment === selectedSegment;

            // Search filter - search in title and description
            const matchesSearch = searchQuery === "" ||
                video.title?.toLowerCase().includes(searchQuery.toLowerCase()) ||
                video.description?.toLowerCase().includes(searchQuery.toLowerCase());

            // Date filter
            const matchesDate = selectedDate === "All Dates" || video.date === selectedDate;

            return matchesSearch && matchesSegment && matchesDate;
        });
    }, [searchQuery, selectedSegment, selectedDate]);

    return (
        <div className="min-h-screen bg-gray-900 text-white font-bengali">
            <Navbar />
            <main className="pt-24 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                <Link
                    href="/archive"
                    className="inline-flex items-center text-primary-red hover:text-red-400 transition-colors mb-8"
                >
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    আর্কাইভে ফিরে যান
                </Link>

                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        ভিডিও <span className="text-primary-red">আর্কাইভ</span>
                    </h1>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        ইতিহাসের সাক্ষী ভিডিও সংকলন
                    </p>
                    {videosData.length > 0 && (
                        <div className="mt-4 text-primary-green">
                            {searchQuery || selectedSegment !== "All Segments" || selectedDate !== "All Dates" ? (
                                <>প্রদর্শিত ভিডিও: {filteredVideos.length} / মোট: {videosData.length}</>
                            ) : (
                                <>মোট ভিডিও: {videosData.length}</>
                            )}
                        </div>
                    )}
                </div>

                {/* Filter Controls */}
                {videosData.length > 0 && (
                    <div className="mb-8 flex flex-col md:flex-row gap-4 items-center justify-between">
                        {/* Segment Filter */}
                        <select
                            value={selectedSegment}
                            onChange={(e) => setSelectedSegment(e.target.value)}
                            className="w-full md:w-1/4 px-4 py-2 bg-gray-800 border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-primary-green hover:bg-gray-750 transition"
                        >
                            {SEGMENTS.map((segment) => (
                                <option key={segment} value={segment}>
                                    {segment}
                                </option>
                            ))}
                        </select>

                        {/* Search Input */}
                        <div className="relative w-full md:w-1/3">
                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                            <input
                                type="text"
                                placeholder="Search caption or credit"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full pl-10 pr-4 py-2 bg-gray-800 border border-gray-700 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-green hover:bg-gray-750 transition"
                            />
                        </div>

                        {/* Date Filter */}
                        <select
                            value={selectedDate}
                            onChange={(e) => setSelectedDate(e.target.value)}
                            className="w-full md:w-1/4 px-4 py-2 bg-gray-800 border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-primary-green hover:bg-gray-750 transition"
                        >
                            {DATES.map((date) => (
                                <option key={date} value={date}>
                                    {date}
                                </option>
                            ))}
                        </select>
                    </div>
                )}

                {videosData.length === 0 ? (
                    <div className="text-center py-20">
                        <div className="bg-gray-800 border border-gray-700 rounded-xl p-12 max-w-2xl mx-auto">
                            <Play className="w-16 h-16 mx-auto mb-4 text-primary-red" />
                            <h3 className="text-2xl font-bold mb-4">ভিডিও সংগ্রহ করা হচ্ছে...</h3>
                            <p className="text-gray-400 mb-6">
                                ভিডিও আর্কাইভ তৈরি করা হচ্ছে। অনুগ্রহ করে পরে আসুন।
                            </p>
                            <div className="text-sm text-gray-500">
                                <p>📹 To collect videos from jrabd.org:</p>
                                <p className="mt-2">Run: <code className="bg-gray-900 px-2 py-1 rounded">node collect_videos.js</code></p>
                            </div>
                        </div>
                    </div>
                ) : filteredVideos.length === 0 ? (
                    <div className="text-center py-20">
                        <div className="bg-gray-800 border border-gray-700 rounded-xl p-12 max-w-2xl mx-auto">
                            <Search className="w-16 h-16 mx-auto mb-4 text-gray-400" />
                            <h3 className="text-2xl font-bold mb-4">কোনো ফলাফল পাওয়া যায়নি</h3>
                            <p className="text-gray-400">
                                আপনার অনুসন্ধান বা ফিল্টারের জন্য কোনো ভিডিও খুঁজে পাওয়া যায়নি।
                            </p>
                            <p className="text-gray-400 mt-2">ফিল্টার পরিবর্তন করে আবার চেষ্টা করুন।</p>
                        </div>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filteredVideos.map((video: any, index: number) => (
                            <div
                                key={index}
                                className="group bg-gray-800 rounded-xl overflow-hidden border border-gray-700 hover:border-primary-red/50 transition-all duration-300"
                            >
                                {video.url && video.url.includes('youtube.com') ? (
                                    <div className="aspect-video">
                                        <iframe
                                            src={video.url}
                                            title={video.title || `Video ${index + 1}`}
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                            allowFullScreen
                                            className="w-full h-full"
                                        />
                                    </div>
                                ) : (
                                    <div className="aspect-video relative bg-gray-900">
                                        <video
                                            className="w-full h-full object-cover"
                                            controls
                                            preload="metadata"
                                            onMouseEnter={(e) => e.currentTarget.play()}
                                            onMouseLeave={(e) => {
                                                e.currentTarget.pause();
                                                e.currentTarget.currentTime = 0;
                                            }}
                                        >
                                            <source
                                                src={video.localPath || video.url}
                                                type="video/mp4"
                                            />
                                            Your browser does not support the video tag.
                                        </video>
                                    </div>
                                )}

                                <div className="p-4">
                                    <h3 className="font-bold text-white mb-2">
                                        {video.title || `ভিডিও #${index + 1}`}
                                    </h3>
                                    {video.description && (
                                        <p className="text-sm text-gray-400 line-clamp-2">
                                            {video.description}
                                        </p>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </main>
            <Footer />
        </div>
    );
}
