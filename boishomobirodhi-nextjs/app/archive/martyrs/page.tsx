"use client";

import { Navbar } from "@/components/navigation/Navbar";
import { Footer } from "@/components/navigation/Footer";
import { motion } from "framer-motion";

export default function MartyrsPage() {
    const martyrs = [
        { name: "আবু সাঈদ", title: "শিক্ষার্থী, বেগম রোকেয়া বিশ্ববিদ্যালয়", location: "রংপুর", date: "১৬ জুলাই" },
        { name: "মীর মাহফুজুর রহমান মুগ্ধ", title: "শিক্ষার্থী, বিইউপি", location: "উত্তরা, ঢাকা", date: "১৮ জুলাই" },
        { name: "ফারহান ফাইয়াজ", title: "শিক্ষার্থী, রেসিডেন্সিয়াল মডেল কলেজ", location: "ঢাকা", date: "১৮ জুলাই" },
        { name: "ওয়াসিম আকরাম", title: "শিক্ষার্থী, চট্টগ্রাম কলেজ", location: "চট্টগ্রাম", date: "১৬ জুলাই" },
        { name: "শাইখ আশাবুল ইয়ামিন", title: "শিক্ষার্থী, এমআইএসটি", location: "সাভার", date: "১৮ জুলাই" },
        { name: "রাকিব হোসেন", title: "শিক্ষার্থী, সাউথইস্ট বিশ্ববিদ্যালয়", location: "ঢাকা", date: "৫ আগস্ট" },
        { name: "তাহমিদ তামিম", title: "শিক্ষার্থী, কাদির মোল্লা কলেজ", location: "নরসিংদী", date: "১৮ জুলাই" },
        { name: "হৃদয় চন্দ্র তরুয়া", title: "শিক্ষার্থী, চট্টগ্রাম বিশ্ববিদ্যালয়", location: "চট্টগ্রাম", date: "১৮ জুলাই" },
        { name: "ফয়সাল আহমেদ শান্ত", title: "শিক্ষার্থী, ওমরগনি এম.ই.এস কলেজ", location: "চট্টগ্রাম", date: "১৬ জুলাই" },
        { name: "শাহরিয়ার খান আনাস", title: "শিক্ষার্থী", location: "ঢাকা", date: "৫ আগস্ট" },
        { name: "গোলাম নাফিজ", title: "শিক্ষার্থী, নৌবাহিনী কলেজ", location: "ফার্মগেট, ঢাকা", date: "৪ আগস্ট" },
        { name: "জাহিদুজ্জামান তানভিন", title: "শিক্ষার্থী, আইইউএসটি", location: "গাজীপুর", date: "১৮ জুলাই" },
        { name: "সাকিব পারভেজ", title: "শিক্ষার্থী, মানারাত বিশ্ববিদ্যালয়", location: "ঢাকা", date: "১৮ জুলাই" },
        { name: "শরীফ হাসান", title: "শিক্ষার্থী, ইম্পেরিয়াল কলেজ", location: "ঢাকা", date: "১৮ জুলাই" },
        { name: "ইফাত হোসেন", title: "শিক্ষার্থী", location: "যাত্রাবাড়ী, ঢাকা", date: "২০ জুলাই" }
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
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-white/5 backdrop-blur-sm border border-gray-800 rounded-xl p-6 hover:bg-white/10 hover:border-primary-red/50 transition-all group"
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
