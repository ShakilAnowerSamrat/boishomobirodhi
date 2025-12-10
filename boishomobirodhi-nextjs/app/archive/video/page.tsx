"use client";

import { Navbar } from "@/components/navigation/Navbar";
import { Footer } from "@/components/navigation/Footer";
import Link from "next/link";
import { ArrowLeft, Play } from "lucide-react";
import videosData from "@/data/videos.json";

export default function VideoArchivePage() {
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
                            মোট ভিডিও: {videosData.length}
                        </div>
                    )}
                </div>

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
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {videosData.map((video: any, index: number) => (
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
