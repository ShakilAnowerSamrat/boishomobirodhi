"use client";

import { Navbar } from "@/components/navigation/Navbar";
import { Footer } from "@/components/navigation/Footer";
import { motion } from "framer-motion";
import Image from "next/image";

export default function ArtPage() {
    const arts = [
        {
            title: "সুবোধ",
            artist: "অজানা শিল্পী",
            description: "‘সুবোধ তুই পালিয়ে যা’ - গ্রাফিতি সিরিজটি একসময় হতাশার প্রতীক ছিল, কিন্তু আন্দোলনে তা প্রতিরোধের প্রতীক হয়ে ওঠে।",
            type: "গ্রাফিতি",
            location: "ঢাকা শহরের বিভিন্ন দেওয়াল"
        },
        {
            title: "উই আর ফ্রি",
            artist: "শিক্ষার্থী",
            description: "৫ আগস্ট বিজয়ের পর 'We Are Free 8.5.24' লেখা গ্রাফিতি যা স্বাধীনতার আনন্দ প্রকাশ করে।",
            type: "ক্যালিগ্রাফি",
            location: "গণভবন এলাকা"
        },
        {
            title: "পানি লাগবে পানি?",
            artist: "মুগ্ধ স্মরণে",
            description: "শহীদ মুগ্ধর শেষ কথা 'পানি লাগবে পানি?' নিয়ে আঁকা অসংখ্য দেয়ালচিত্র।",
            type: "ম্যুরাল",
            location: "সারাদেশ"
        },
        {
            title: "দেশটা কারো বাপের না",
            artist: "বিদ্রোহী ছাত্রজনতা",
            description: "স্বৈরাচারী মানসিকতার বিরুদ্ধে সরাসরি চ্যালেঞ্জ ছুঁড়ে দেয়া স্লোগান ও আর্ট।",
            type: "টাইপোগ্রাফি",
            location: "ঢাকা বিশ্ববিদ্যালয় এলাকা"
        },
        {
            title: "রক্তাক্ত জুলাই",
            artist: "চারুকলা শিক্ষার্থী",
            description: "জুলাই মাসের হত্যাযজ্ঞ এবং শিক্ষার্থীদের ওপর হামলার চিত্রায়ন।",
            type: "চিত্রকর্ম",
            location: "শাহবাগ"
        },
        {
            title: "ফ্যাসিবাদ নিপাত যাক",
            artist: "গণমানুষ",
            description: "স্বৈরাচারের পতনের দাবিতে আঁকা ব্যঙ্গচিত্র ও কার্টুন।",
            type: "কার্টুন",
            location: "অনলাইন ও অফলাইন"
        }
    ];

    return (
        <div className="min-h-screen bg-gray-900 text-white font-bengali">
            <Navbar />
            <main className="pt-24 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        বিদ্রোহী <span className="text-primary-red">শিল্পকলা</span>
                    </h1>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                        দেয়াল লিখন, গ্রাফিতি এবং কার্টুনে ফুটে ওঠা প্রতিবাদের ভাষা
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {arts.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-white/5 backdrop-blur-sm border border-gray-800 rounded-xl overflow-hidden hover:border-primary-green/50 transition-all group"
                        >
                            <div className="h-48 bg-gray-800 relative flex items-center justify-center overflow-hidden">
                                {/* Placeholder for actual art images */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10" />
                                <span className="text-6xl text-gray-700 font-bold opacity-30 select-none">
                                    {item.type}
                                </span>
                                <div className="absolute bottom-4 left-4 z-20">
                                    <span className="px-3 py-1 bg-primary-red text-xs rounded-full text-white font-bold">
                                        {item.type}
                                    </span>
                                </div>
                            </div>

                            <div className="p-6">
                                <h3 className="text-2xl font-bold text-white mb-2">{item.title}</h3>
                                <div className="flex justify-between items-center text-sm text-gray-400 mb-4">
                                    <span>শিল্পী: {item.artist}</span>
                                    <span>{item.location}</span>
                                </div>
                                <p className="text-gray-300 leading-relaxed">
                                    {item.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-20 p-8 rounded-2xl bg-white/5 border border-white/10 text-center">
                    <p className="text-gray-400">
                        * খুব শীঘ্রই আমরা প্রতিটি গ্রাফিতির আলোকচিত্র এখানে যুক্ত করব। আপনার কাছে কোনো ছবি থাকলে আমাদের পাঠাতে পারেন।
                    </p>
                </div>
            </main>
            <Footer />
        </div>
    );
}
