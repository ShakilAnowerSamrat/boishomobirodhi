"use client";

import { motion } from "framer-motion";
import { ArrowRight, Users, Shield, Globe, BookOpen } from "lucide-react";
import Link from "next/link";

export function Highlights() {
    const highlights = [
        {
            icon: <Users className="w-8 h-8 text-red-500" />,
            title: "গণ-অভ্যুত্থান",
            description: "ছাত্র-জনতার এক অভূতপূর্ব জাগরণ যা দেশকে স্বৈরাচারমুক্ত করেছে।"
        },
        {
            icon: <Shield className="w-8 h-8 text-green-500" />,
            title: "রাষ্ট্র সংস্কার",
            description: "বৈষম্যহীন নতুন বাংলাদেশ গড়ার লক্ষ্যে রাষ্ট্রীয় কাঠামোর সংস্কার।"
        },
        {
            icon: <Globe className="w-8 h-8 text-blue-500" />,
            title: "আন্তর্জাতিক স্বীকৃতি",
            description: "বিশ্বজুড়ে প্রশংসিত ছাত্র সমাজের অদম্য সাহস ও ত্যাগের গল্প।"
        },
        {
            icon: <BookOpen className="w-8 h-8 text-yellow-500" />,
            title: "নতুন সংবিধান",
            description: "জনগণের আকাঙ্খার প্রতিফলন ঘটাতে সাংবিধানিক সংস্কারের উদ্যোগ।"
        }
    ];

    return (
        <section className="py-20 bg-gray-900 overflow-hidden relative">
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary-red/5 rounded-full blur-3xl -mr-32 -mt-32" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-green/5 rounded-full blur-3xl -ml-32 -mb-32" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
                            রক্তের বিনিময়ে অর্জিত <span className="text-primary-green">দ্বিতীয় স্বাধীনতা</span>
                        </h2>
                        <p className="text-gray-400 text-lg leading-relaxed mb-8">
                            ২০২৪ সালের এই আন্দোলন শুধু কোটা সংস্কারের মধ্যে সীমাবদ্ধ ছিল না, এটি ছিল ভাতের অধিকার, ভোটের অধিকার এবং ন্যায়বিচারের দাবিতে এক মহাজাগরণ। হাজারো ছাত্র-জনতার ত্যাগের বিনিময়ে আমরা পেয়েছি নতুন এক বাংলাদেশ।
                        </p>
                        <Link href="/history" className="inline-flex items-center gap-2 text-primary-red font-semibold hover:gap-3 transition-all">
                            সম্পূর্ণ ইতিহাস পড়ুন <ArrowRight className="w-5 h-5" />
                        </Link>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="grid grid-cols-1 sm:grid-cols-2 gap-6"
                    >
                        {highlights.map((item, index) => (
                            <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-xl hover:bg-white/10 transition-colors">
                                <div className="mb-4 bg-gray-800 w-14 h-14 rounded-lg flex items-center justify-center">
                                    {item.icon}
                                </div>
                                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                                <p className="text-gray-400 text-sm">{item.description}</p>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
