"use client";

import { Navbar } from "@/components/navigation/Navbar";
import { Footer } from "@/components/navigation/Footer";
import { motion } from "framer-motion";
import { Play } from "lucide-react";

export default function VideoArchivePage() {
    const videos = [
        { caption: "President Mohammed Shahabuddin Chuppu announced the resignation of Prime Minister Sheikh Hasina" },
        { caption: "No More Fear, No More Chains: From Ricksha Puller , Farmers to Factory Workers, the Victory is Ours" },
        { caption: "Statue of Sheikh Mujib Toppled by Bulldozer After Victory" },
        { caption: "Public Gains Upper Hand — Police Respond with Gunfire , Bashundhara" },
        { caption: "No More Fear, No More Chains: From Farmers to Factory Workers, the Victory is Ours" },
        { caption: "Police Surrenders" },
        { caption: "Boshundhara Gate" },
        { caption: "You Can’t Tear Gas a Revolution | We Bleed, We Rise | Chants Louder Than Bullets" }
    ];

    return (
        <div className="min-h-screen bg-gray-900 text-white font-bengali">
            <Navbar />
            <main className="pt-24 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        ভিডিও <span className="text-primary-red">আর্কাইভ</span>
                    </h1>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                        ইতিহাসের সাক্ষী হওয়া ভিডিও ফুটেজসমূহ
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {videos.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-gray-800 rounded-xl overflow-hidden group border border-gray-700 hover:border-primary-red/50 transition-all"
                        >
                            <div className="aspect-video bg-black relative flex items-center justify-center group-hover:bg-gray-900 transition-colors">
                                {/* Placeholder since we couldn't scrape video URLs */}
                                <div className="w-16 h-16 rounded-full bg-red-600/20 flex items-center justify-center group-hover:scale-110 transition-transform cursor-pointer">
                                    <Play className="w-8 h-8 text-primary-red fill-current" />
                                </div>
                                <span className="absolute bottom-2 right-2 text-xs bg-black/50 px-2 py-1 rounded">
                                    সংরক্ষিত
                                </span>
                            </div>
                            <div className="p-4">
                                <h3 className="text-white font-medium line-clamp-2 group-hover:text-primary-red transition-colors">
                                    {item.caption}
                                </h3>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </main>
            <Footer />
        </div>
    );
}
