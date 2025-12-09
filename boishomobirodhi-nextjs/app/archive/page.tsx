"use client";

import { Navbar } from "@/components/navigation/Navbar";
import { Footer } from "@/components/navigation/Footer";
import Link from "next/link";
import { motion } from "framer-motion";
import { Users, Mic2, FileText, Image as ImageIcon, ArrowRight, Heart } from "lucide-react";

export default function ArchiveHub() {
    const archiveSections = [
        {
            title: "শহীদদের তালিকা",
            description: "যারা দেশের জন্য প্রাণ দিয়েছেন তাদের বীরাত্বগাথা",
            icon: <Heart className="w-8 h-8 text-red-500" />,
            href: "/archive/martyrs",
            gradient: "from-red-900/20 to-transparent",
            border: "hover:border-red-500/50"
        },
        {
            title: "স্লোগান সংকলন",
            description: "আন্দোলনের মুখে মুখে ফেরা লড়াকু স্লোগান",
            icon: <Mic2 className="w-8 h-8 text-yellow-500" />,
            href: "/archive/slogans",
            gradient: "from-yellow-900/20 to-transparent",
            border: "hover:border-yellow-500/50"
        },
        {
            title: "সমন্বয়ক ও নেতৃত্ব",
            description: "আন্দোলনের নেতৃত্বদানকারী শিক্ষার্থীদের তালিকা",
            icon: <Users className="w-8 h-8 text-green-500" />,
            href: "/archive/coordinators",
            gradient: "from-green-900/20 to-transparent",
            border: "hover:border-green-500/50"
        },
        {
            title: "ছবি ও ভিডিও গ্যালারি",
            description: "আন্দোলনের দুর্লভ মুহূর্ত ও গ্রাফিতি চিত্র",
            icon: <ImageIcon className="w-8 h-8 text-blue-500" />,
            href: "/archive/art",
            gradient: "from-blue-900/20 to-transparent",
            border: "hover:border-blue-500/50"
        },
        {
            title: "দাবি ও বিবৃতি",
            description: "৪ দফা, ৯ দফা থেকে ১ দফার দালিলিক ইতিহাস",
            icon: <FileText className="w-8 h-8 text-purple-500" />,
            href: "/archive/statements",
            gradient: "from-purple-900/20 to-transparent",
            border: "hover:border-purple-500/50"
        }
    ];

    return (
        <div className="min-h-screen bg-gray-900 text-white font-bengali">
            <Navbar />
            <main className="pt-24 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        ডিজিটাল <span className="text-primary-red">আর্কাইভ</span>
                    </h1>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                        বৈষম্যবিরোধী ছাত্র আন্দোলনের সকল তথ্য, উপাত্ত এবং স্মৃতিচিহ্নের সংরক্ষিত ভান্ডার
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {archiveSections.map((section, index) => (
                        <Link key={index} href={section.href}>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className={`h-full bg-white/5 backdrop-blur-sm border border-gray-800 rounded-xl p-8 transition-all group relative overflow-hidden ${section.border}`}
                            >
                                <div className={`absolute inset-0 bg-gradient-to-br ${section.gradient} opacity-0 group-hover:opacity-100 transition-opacity`} />

                                <div className="relative z-10">
                                    <div className="bg-gray-800/50 w-16 h-16 rounded-xl flex items-center justify-center mb-6 border border-gray-700 group-hover:scale-110 transition-transform">
                                        {section.icon}
                                    </div>
                                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-primary-red transition-colors">
                                        {section.title}
                                    </h3>
                                    <p className="text-gray-400 mb-6">
                                        {section.description}
                                    </p>
                                    <div className="flex items-center text-primary-red font-medium opacity-0 group-hover:opacity-100 transform translate-x-[-10px] group-hover:translate-x-0 transition-all">
                                        দেখুন <ArrowRight className="w-5 h-5 ml-2" />
                                    </div>
                                </div>
                            </motion.div>
                        </Link>
                    ))}
                </div>
            </main>
            <Footer />
        </div>
    );
}
