"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export function Hero() {
    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
            {/* Background overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-gray-900/90 via-gray-900/80 to-gray-900/90 z-0" />

            {/* Animated background pattern */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(220,20,60,0.1),transparent_50%)]" />
                <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_20%,rgba(0,106,78,0.1),transparent_50%)]" />
            </div>

            <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="mb-8"
                >
                    <div className="relative w-32 h-32 mx-auto mb-6 animate-pulse">
                        <Image
                            src="/images/logo/logo.png.png"
                            alt="বৈষম্যবিরোধী ছাত্র আন্দোলন"
                            fill
                            className="object-contain drop-shadow-2xl"
                            priority
                        />
                    </div>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
                >
                    বৈষম্যবিরোধী ছাত্র আন্দোলন
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-xl md:text-2xl text-gray-300 mb-12"
                >
                    ২০২৪ সালের ঐতিহাসিক গণঅভ্যুত্থান
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto"
                >
                    <div className="bg-red-900/20 backdrop-blur-sm border border-red-500/30 rounded-xl p-6 hover:bg-red-900/30 transition-all">
                        <div className="text-4xl font-bold text-red-500 mb-2">১,৫৮১+</div>
                        <div className="text-gray-300 font-medium">শহীদ</div>
                        <div className="text-xs text-gray-500 mt-1">প্রাথমিক তালিকা</div>
                    </div>
                    <div className="bg-white/5 backdrop-blur-sm border border-white/20 rounded-xl p-6 hover:bg-white/10 transition-all">
                        <div className="text-4xl font-bold text-white mb-2">৩১,০০০+</div>
                        <div className="text-gray-300 font-medium">আহত</div>
                        <div className="text-xs text-gray-500 mt-1">বিভিন্ন হাসপাতালে</div>
                    </div>
                    <div className="bg-green-900/20 backdrop-blur-sm border border-green-500/30 rounded-xl p-6 hover:bg-green-900/30 transition-all">
                        <div className="text-4xl font-bold text-green-500 mb-2">৩৬</div>
                        <div className="text-gray-300 font-medium">দিনের সংগ্রাম</div>
                        <div className="text-xs text-gray-500 mt-1">১ জুলাই - ৫ আগস্ট</div>
                    </div>
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1 }}
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            >
                <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
                    <motion.div
                        animate={{ y: [0, 12, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                        className="w-1.5 h-1.5 bg-white rounded-full mt-2"
                    />
                </div>
            </motion.div>
        </section>
    );
}
