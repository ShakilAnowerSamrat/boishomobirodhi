"use client";

import { Navbar } from "@/components/navigation/Navbar";
import { Footer } from "@/components/navigation/Footer";
import { motion } from "framer-motion";

export default function SlogansPage() {
    const slogans = [
        {
            bengali: "আমার ভাই কবরে, খুনি কেন বাহিরে?",
            english: "My brother is in the grave, why is the killer free?",
            context: "বিচারহীনতার সংস্কৃতির বিরুদ্ধে তীব্র প্রতিবাদ"
        },
        {
            bengali: "কোটা না মেধা? মেধা, মেধা",
            english: "Quota or Merit? Merit, Merit",
            context: "আন্দোলনের শুরুর দিকের মূল স্লোগান"
        },
        {
            bengali: "দিয়েছি তো রক্ত, আরো দেবো রক্ত",
            english: "We gave blood, we will give more blood",
            context: "শিক্ষার্থীদের অদম্য সাহসের বহিঃপ্রকাশ"
        },
        {
            bengali: "তুমি কে? আমি কে? রাজাকার, রাজাকার",
            english: "Who are you? Who am I? Razakar, Razakar",
            context: "প্রধানমন্ত্রীর বিতর্কিত মন্তব্যের পর নিজেদের ব্যঙ্গাত্মক পরিচয়"
        },
        {
            bengali: "চাইতে গেলাম অধিকার, হয়ে গেলাম রাজাকার",
            english: "Went to ask for rights, became a Razakar",
            context: "ন্যায্য দাবির প্রতি সরকারের উপহাসের জবাব"
        },
        {
            bengali: "স্বৈরাচারের গদিতে, আগুন জ্বালো একসাথে",
            english: "Set fire to the dictator's throne, together",
            context: "সরকার পতনের একদফা দাবির সময়কার স্লোগান"
        },
        {
            bengali: "বুকের ভেতর দারুণ ঝড়, বুক পেতেছি গুলি কর",
            english: "A storm rages inside, shoot at my chest",
            context: "পুলিশি বাধার মুখে সাহসিকতার উচ্চারণ"
        },
        {
            bengali: "এক দফা এক দাবি, শেখ হাসিনা কবে যাবি",
            english: "One point one demand, when will Sheikh Hasina go",
            context: "চূড়ান্ত পর্যায়ের সরকার পতনের স্লোগান"
        },
        {
            bengali: "রক্তের বন্যায়, ভেসে যাবে অন্যায়",
            english: "In the flood of blood, injustice will be washed away",
            context: "শহীদের রক্ত বৃথা না যাওয়ার শপথ"
        },
        {
            bengali: "ভয় পেলে তুমি শেষ, রুখে দাঁড়ালে বাংলাদেশ",
            english: "If you fear you end, if you resist you are Bangladesh",
            context: "ভয়ভীতির ঊর্ধ্বে ওঠার আহ্বান"
        }
    ];

    return (
        <div className="min-h-screen bg-gray-900 text-white font-bengali">
            <Navbar />
            <main className="pt-24 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        লড়াকু <span className="text-primary-red">স্লোগান</span>
                    </h1>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                        যে স্লোগানগুলো রাজপথ কাঁপিয়েছিল এবং কোটি মানুষকে উজ্জীবিত করেছিল
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {slogans.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-white/5 backdrop-blur-sm border border-gray-800 rounded-xl p-8 hover:bg-white/10 hover:border-primary-red/30 transition-all group relative overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 w-32 h-32 bg-primary-red/5 rounded-full blur-3xl -mr-16 -mt-16 group-hover:bg-primary-red/10 transition-colors" />

                            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3 relative z-10 leading-normal">
                                "{item.bengali}"
                            </h2>
                            <p className="text-base text-gray-400 italic mb-4 relative z-10 font-sans border-l-2 border-primary-red/50 pl-3">
                                {item.english}
                            </p>
                            <div className="inline-block bg-gray-800/80 px-3 py-1 rounded-full text-xs text-primary-green relative z-10 border border-gray-700">
                                {item.context}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </main>
            <Footer />
        </div>
    );
}
