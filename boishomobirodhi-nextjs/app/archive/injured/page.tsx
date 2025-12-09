"use client";

import { Navbar } from "@/components/navigation/Navbar";
import { Footer } from "@/components/navigation/Footer";
import { motion } from "framer-motion";
import { User, ExternalLink } from "lucide-react";
import Link from "next/link";

export default function InjuredListPage() {
    const injured = [
        { name: "Tarun Khandoker", id: "3369" },
        { name: "Ruhul Amin", id: "4115" },
        { name: "Imam Hossen", id: "4190" },
        { name: "Ramjan Ali Arman", id: "4215" },
        { name: "Jalaluddin", location: "Profachor Para, Chandpur", id: "3779" },
        { name: "Maruf", id: "3948" },
        { name: "Shahidul Islam", id: "4686" },
        { name: "Ratul Fakir", id: "4884" },
        { name: "Md.badol", id: "5072" },
        { name: "Ilias", id: "4947" },
        { name: "Farhad", id: "4948" },
        { name: "Soharab", id: "4837" },
        { name: "Omar Faruk", id: "5215" },
        { name: "Md Ridon", id: "5652" },
        { name: "Md. Amir Hamja", id: "6439" },
        { name: "Mosharrof Hossen", id: "5653" }
    ];

    return (
        <div className="min-h-screen bg-gray-900 text-white font-bengali">
            <Navbar />
            <main className="pt-24 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        আহত <span className="text-primary-red">যোদ্ধাদের</span> তালিকা
                    </h1>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                        যাদের ত্যাগের কারণে আমরা পেয়েছি নতুন দেশ
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                    {injured.map((person, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3, delay: index * 0.05 }}
                            className="bg-white/5 border border-gray-800 rounded-lg p-4 flex items-center gap-4 hover:bg-white/10 hover:border-primary-red/30 transition-all group"
                        >
                            <div className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center text-gray-400 group-hover:text-primary-red transition-colors">
                                <User className="w-5 h-5" />
                            </div>
                            <div className="flex-1 min-w-0">
                                <h3 className="text-white font-semibold truncate">{person.name}</h3>
                                {person.location && (
                                    <p className="text-xs text-gray-500 truncate">{person.location}</p>
                                )}
                            </div>
                            <Link
                                href="#"
                                className="text-gray-500 hover:text-white transition-colors"
                                title="বিস্তারিত (আসছে)"
                            >
                                <ExternalLink className="w-4 h-4" />
                            </Link>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-12 text-center text-gray-500 text-sm">
                    * তালিকাটি প্রাথমিক এবং অসম্পূর্ণ। তথ্য সংগ্রহের কাজ চলছে।
                </div>
            </main>
            <Footer />
        </div>
    );
}
