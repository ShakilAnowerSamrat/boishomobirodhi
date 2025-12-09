"use client";

import { Navbar } from "@/components/navigation/Navbar";
import { Footer } from "@/components/navigation/Footer";
import { motion } from "framer-motion";
import { Facebook, Globe, Users } from "lucide-react";

export default function CoordinatorsPage() {
    const centralCoordinators = [
        { name: "নাহিদ ইসলাম", role: "সমন্বয়ক", institution: "ঢাকা বিশ্ববিদ্যালয়" },
        { name: "আসিফ মাহমুদ", role: "সমন্বয়ক", institution: "ঢাকা বিশ্ববিদ্যালয়" },
        { name: "আবু বাকের মজুমদার", role: "সমন্বয়ক", institution: "ঢাকা বিশ্ববিদ্যালয়" },
        { name: "সারজিস আলম", role: "সমন্বয়ক", institution: "ঢাকা বিশ্ববিদ্যালয়" },
        { name: "হাসনাত আব্দুল্লাহ", role: "সমন্বয়ক", institution: "ঢাকা বিশ্ববিদ্যালয়" },
        { name: "নুসরাত তাবাসসুম", role: "সমন্বয়ক", institution: "ঢাকা বিশ্ববিদ্যালয়" },
        { name: "উমামা ফাতেমা", role: "সমন্বয়ক", institution: "ঢাকা বিশ্ববিদ্যালয়" },
        { name: "আহনাফ সাঈদ", role: "সমন্বয়ক", institution: "জাহাঙ্গীরনগর বিশ্ববিদ্যালয়" },
        { name: "আসিফ মাহতাব", role: "সমন্বয়ক", institution: "ব্র্যাক বিশ্ববিদ্যালয়" }
    ];

    return (
        <div className="min-h-screen bg-gray-900 text-white font-bengali">
            <Navbar />
            <main className="pt-24 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        সমন্বয়ক ও <span className="text-primary-green">নেতৃত্ব</span>
                    </h1>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                        বৈষম্যবিরোধী ছাত্র আন্দোলনের নেতৃত্বে ছিলেন যারা
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {centralCoordinators.map((person, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-white/5 backdrop-blur-sm border border-gray-800 rounded-xl overflow-hidden hover:border-primary-green/50 transition-all group"
                        >
                            <div className="h-24 bg-gradient-to-r from-gray-800 to-gray-900 relative">
                                <div className="absolute -bottom-8 left-6">
                                    <div className="w-16 h-16 rounded-full bg-gray-700 border-4 border-gray-900 flex items-center justify-center text-2xl font-bold text-gray-400">
                                        {person.name.charAt(0)}
                                    </div>
                                </div>
                            </div>
                            <div className="pt-10 p-6">
                                <h3 className="text-xl font-bold text-white mb-1">{person.name}</h3>
                                <p className="text-primary-green font-medium text-sm mb-4">{person.role}</p>

                                <div className="flex items-center text-gray-400 text-sm mb-2">
                                    <Users className="w-4 h-4 mr-2" />
                                    {person.institution}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-20 p-8 rounded-2xl bg-gradient-to-br from-gray-800 to-black border border-gray-700 text-center">
                    <h3 className="text-2xl font-bold text-white mb-4">স্বতঃস্ফূর্ত নেতৃত্ব</h3>
                    <p className="text-gray-400 max-w-2xl mx-auto leading-relaxed">
                        এই আন্দোলনের প্রকৃত নেতা ছিল সাধারণ ছাত্রজনতা। প্রতিটি বিশ্ববিদ্যালয়, কলেজ, স্কুল এবং পাড়া-মহল্লায় যারা নেতৃত্ব দিয়েছেন, ঝুঁকি নিয়েছেন - তারা সবাই এই বিজয়ের অংশীদার।
                    </p>
                </div>
            </main>
            <Footer />
        </div>
    );
}
