import Image from "next/image";
import { Navbar } from "@/components/navigation/Navbar";
import { Footer } from "@/components/navigation/Footer";
import Link from "next/link";
import { ArrowLeft, Download } from "lucide-react";
import photosData from "@/data/photos.json";

export default function PhotoArchivePage() {
    // Filter out any invalid URLs (empty or not starting with http)
    const photos = photosData.filter(url => url && (url.startsWith('http') || url.startsWith('/')));

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
                        ছবি <span className="text-primary-red">আর্কাইভ</span>
                    </h1>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        আন্দোলনের দুর্লভ চিত্রকলা
                    </p>
                    {photos.length > 0 && (
                        <div className="mt-4 text-primary-green">
                            মোট ছবি: {photos.length}
                        </div>
                    )}
                </div>

                {photos.length === 0 ? (
                    <div className="text-center py-20">
                        <div className="bg-gray-800 border border-gray-700 rounded-xl p-12 max-w-2xl mx-auto">
                            <h3 className="text-2xl font-bold mb-4">ছবি লোড হচ্ছে...</h3>
                            <p className="text-gray-400 mb-6">
                                ছবি আর্কাইভ তৈরি করা হচ্ছে। অনুগ্রহ করে পরে আসুন।
                            </p>
                            <div className="text-sm text-gray-500">
                                <p>📸 Photos are being collected from jrabd.org</p>
                                <p className="mt-2">Run: <code className="bg-gray-900 px-2 py-1 rounded">node collect_and_download.js</code></p>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {photos.map((photo, index) => (
                            <div
                                key={index}
                                className="group relative bg-gray-800 rounded-xl overflow-hidden border border-gray-700 hover:border-primary-red/50 transition-all duration-300"
                            >
                                <div className="aspect-[4/3] relative bg-gray-900">
                                    {photo.startsWith('http') ? (
                                        <img
                                            src={photo}
                                            alt={`Archive Photo ${index + 1}`}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                        />
                                    ) : (
                                        <Image
                                            src={photo}
                                            alt={`Archive Photo ${index + 1}`}
                                            fill
                                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                                        />
                                    )}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                                </div>
                                <div className="p-4">
                                    <p className="text-gray-400 text-sm">
                                        ছবি #{index + 1}
                                    </p>
                                    {photo.startsWith('http') && (
                                        <a
                                            href={photo}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="mt-2 inline-flex items-center text-xs text-primary-red hover:text-red-400"
                                        >
                                            <Download className="w-3 h-3 mr-1" />
                                            ডাউনলোড
                                        </a>
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
