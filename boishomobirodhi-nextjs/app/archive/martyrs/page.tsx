"use client";

import { Navbar } from "@/components/navigation/Navbar";
import { Footer } from "@/components/navigation/Footer";
import { motion } from "framer-motion";
import Link from "next/link";

export default function MartyrsPage() {
    const martyrs = [
        { name: "মো: নাঈম", id: "2237", title: "শিক্ষার্থী", location: "যাত্রাবাড়ী", date: "১৯ জুলাই" },
        { name: "মো: মেহেদী হাসান", id: "14229", title: "শিক্ষার্থী", location: "ঢাকা", date: "জুলাই" },
        { name: "আলী হোসেন", id: "16", title: "শিক্ষার্থী", location: "ঢাকা", date: "জুলাই" },
        { name: "তাজুল ইসলাম", id: "45", title: "শিক্ষার্থী", location: "ঢাকা", date: "জুলাই" },
        { name: "জসিম", id: "72", title: "শিক্ষার্থী", location: "ঢাকা", date: "জুলাই" },
        { name: "শাকিল হোসেন পারভেজ", id: "20", title: "শিক্ষার্থী", location: "ঢাকা", date: "জুলাই" },
        { name: "জাহিদুজ্জামান তানভিন", id: "8", title: "শিক্ষার্থী", location: "গাজীপুর", date: "১৮ জুলাই" },
        { name: "সজীব সরকার", id: "14", title: "শিক্ষার্থী", location: "ঢাকা", date: "জুলাই" },
        { name: "আসিফ হাসান", id: "34", title: "শিক্ষার্থী", location: "ঢাকা", date: "জুলাই" },
        { name: "মীর মাহফুজুর রহমান মুগ্ধ", id: "31", title: "শিক্ষার্থী, বিইউপি", location: "উত্তরা, ঢাকা", date: "১৮ জুলাই" },
        // ... previous verified list
        { name: "আবু সাঈদ", id: "1", title: "শিক্ষার্থী, বেগম রোকেয়া বিশ্ববিদ্যালয়", location: "রংপুর", date: "১৬ জুলাই" },
    ];

    return (
        <div className="min-h-screen bg-gray-900 text-white font-bengali">
            <Navbar />
            <main className="pt-24 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold text-primary-red mb-6">
                        বীর শহীদদের তালিকা
                    </h1>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                        যাদের রক্তের বিনিময়ে আমরা পেয়েছি নতুন স্বাধীনতা। এই তালিকা অসম্পূর্ণ, আমরা প্রতিনিয়ত এটি হালনাগাদ করছি।
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {martyrs.map((martyr, index) => (
                        <Link href={`/archive/martyrs/${martyr.id || '2237'}`} key={index}>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="bg-white/5 backdrop-blur-sm border border-gray-800 rounded-xl p-6 hover:bg-white/10 hover:border-primary-red/50 transition-all group h-full cursor-pointer"
                            >
                                <div className="flex items-start justify-between mb-4">
                                    <div className="w-12 h-12 rounded-full bg-primary-red/20 flex items-center justify-center text-primary-red font-bold text-xl group-hover:scale-110 transition-transform">
                                        {martyr.name.charAt(0)}
                                    </div>
                                    <span className="text-xs font-mono text-gray-500 bg-gray-800 px-2 py-1 rounded">
                                        {martyr.date}
                                    </span>
                                </div>
                                <h3 className="text-xl font-bold text-white mb-2">{martyr.name}</h3>
                                <p className="text-gray-400 mb-1">{martyr.title}</p>
                                <div className="flex items-center text-sm text-gray-500 mt-3">
                                    <span className="w-2 h-2 rounded-full bg-primary-green mr-2"></span>
                                    {martyr.location}
                                </div>
                            </motion.div>
                        </Link>
                    ))}
                </div>

                <div className="mt-16 p-8 bg-red-900/20 border border-red-500/30 rounded-xl text-center">
                    <h3 className="text-2xl font-bold text-white mb-4">মোট শহীদ সংখ্যা</h3>
                    <div className="text-5xl font-bold text-primary-red mb-2">১,৫৮১+</div>
                    <p className="text-gray-400">
                        (প্রাথমিক তালিকা, স্বাস্থ্য অধিদপ্তর ও বিভিন্ন সংস্থার তথ্য মতে)
                    </p>
                </div>
            </main>
            <Footer />
        </div>
    );
}
