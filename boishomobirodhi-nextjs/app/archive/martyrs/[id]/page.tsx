"use client";

import { Navbar } from "@/components/navigation/Navbar";
import { Footer } from "@/components/navigation/Footer";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";

import martyrsDataList from "@/data/martyrs.json";

// Convert list array to object map for easy lookup by ID
const martyrsData = martyrsDataList.reduce((acc, item) => {
    acc[item.id] = item;
    return acc;
}, {} as Record<string, any>);

export default function MartyrProfile() {
    const params = useParams();
    const id = params.id as string;
    const profile = martyrsData[id] || {
        name: "তথ্য পাওয়া যায়নি",
        biography: "দুঃখিত, এই শহীদের বিস্তারিত তথ্য এখনও আমাদের ডেটাবেসে যুক্ত হয়নি।"
    };

    return (
        <div className="min-h-screen bg-gray-900 text-white font-bengali">
            <Navbar />
            <main className="pt-24 pb-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
                <div className="bg-gray-800 rounded-2xl overflow-hidden border border-gray-700 shadow-xl">
                    <div className="relative h-64 md:h-80 bg-gradient-to-r from-gray-900 to-gray-800">
                        {/* Abstract background since we don't have high-res separate images */}
                        <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
                        <div className="absolute -bottom-16 left-8 md:left-12">
                            <div className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-gray-800 bg-gray-700 overflow-hidden relative">
                                <div className="absolute inset-0 flex items-center justify-center text-4xl font-bold text-gray-500">
                                    {profile.name?.charAt(0)}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="pt-20 px-8 md:px-12 pb-12">
                        <div className="flex justify-between items-start mb-6">
                            <div>
                                <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">{profile.name}</h1>
                                <div className="flex flex-wrap gap-4 text-gray-400 text-sm">
                                    <span className="bg-primary-red/10 text-primary-red px-3 py-1 rounded-full">
                                        শহীদ
                                    </span>
                                    {profile.location && <span>📍 {profile.location}</span>}
                                    {profile.date && <span>📅 {profile.date}</span>}
                                </div>
                            </div>
                        </div>

                        <div className="prose prose-invert max-w-none">
                            <h3 className="text-xl font-bold text-gray-200 border-b border-gray-700 pb-2 mb-4">জীবনী ও আত্মত্যাগ</h3>
                            <div className="whitespace-pre-line text-gray-300 leading-relaxed text-lg">
                                {profile.biography}
                            </div>
                        </div>

                        <div className="mt-12 flex justify-center">
                            <Link
                                href="/archive/martyrs"
                                className="px-6 py-3 bg-gray-700 hover:bg-gray-600 rounded-lg text-white transition-colors"
                            >
                                সকল শহীদদের তালিকায় ফিরে যান
                            </Link>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
