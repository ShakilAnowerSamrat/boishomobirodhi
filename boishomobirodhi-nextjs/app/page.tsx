import { Navbar } from "@/components/navigation/Navbar";
import { Footer } from "@/components/navigation/Footer";
import { Hero } from "@/components/sections/Hero";
import { Highlights } from "@/components/sections/Highlights";
import Link from "next/link";
import { ArrowRight, BookOpen, Clock, FileText, Globe, GraduationCap, Image as ImageIcon, Scale, Users } from "lucide-react";

export default function Home() {
    const sections = [
        { icon: <Clock className="w-6 h-6" />, title: "ইতিহাস", href: "/history", description: "আন্দোলনের সম্পূর্ণ ইতিহাস ও টাইমলাইন" },
        { icon: <FileText className="w-6 h-6" />, title: "দাবিসমূহ", href: "/demands", description: "৪ দফা, ৯ দফা এবং ১ দফা দাবি" },
        { icon: <GraduationCap className="w-6 h-6" />, title: "বিশ্ববিদ্যালয়", href: "/universities", description: "অংশগ্রহণকারী বিশ্ববিদ্যালয়সমূহ" },
        { icon: <Users className="w-6 h-6" />, title: "সাক্ষ্য", href: "/testimonies", description: "আহত ছাত্রদের সাক্ষ্য ও অভিজ্ঞতা" },
        { icon: <Scale className="w-6 h-6" />, title: "আইনি দিক", href: "/legal", description: "মানবাধিকার ও আইনি প্রক্রিয়া" },
        { icon: <Globe className="w-6 h-6" />, title: "আন্তর্জাতিক", href: "/international", description: "বৈশ্বিক প্রতিক্রিয়া" },
        { icon: <ImageIcon className="w-6 h-6" />, title: "মিডিয়া", href: "/media", description: "ভিডিও ও ছবি আর্কাইভ" },
        { icon: <BookOpen className="w-6 h-6" />, title: "উপসংহার", href: "/conclusion", description: "আন্দোলনের সারসংক্ষেপ" },
    ];

    return (
        <>
            <Navbar />
            <main>
                <Hero />
                <Highlights />

                {/* Archive Grid Section */}
                <section className="py-20 bg-gray-800">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                                আর্কাইভ নেভিগেশন
                            </h2>
                            <p className="text-gray-400 max-w-2xl mx-auto">
                                বৈষম্যবিরোধী ছাত্র আন্দোলনের প্রতিটি দিক বিস্তারিতভাবে জানুন এবং ইতিহাসের সাক্ষী হন
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {sections.map((section, index) => (
                                <Link
                                    key={index}
                                    href={section.href}
                                    className="group bg-gray-900 border border-gray-700/50 rounded-xl p-6 hover:bg-gray-800 hover:border-primary-red/50 transition-all duration-300 relative overflow-hidden"
                                >
                                    <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-primary-red/5 to-transparent rounded-bl-full -mr-4 -mt-4 transition-all group-hover:from-primary-red/10" />

                                    <div className="relative z-10">
                                        <div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center text-primary-red mb-4 group-hover:scale-110 transition-transform">
                                            {section.icon}
                                        </div>
                                        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary-red transition-colors">
                                            {section.title}
                                        </h3>
                                        <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                                            {section.description}
                                        </p>
                                        <div className="flex items-center text-sm text-primary-red font-medium opacity-0 group-hover:opacity-100 transform translate-x-[-10px] group-hover:translate-x-0 transition-all">
                                            বিস্তারিত <ArrowRight className="w-4 h-4 ml-1" />
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Quote Section */}
                <section className="py-20 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
                    <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
                        <div className="text-6xl text-primary-red/20 font-serif mb-6">"</div>
                        <blockquote className="text-2xl md:text-3xl font-medium text-gray-200 leading-normal mb-8">
                            দেশে আর কোনো বৈষম্য থাকবে না। মেধার ভিত্তিতে রাষ্ট্র পরিচালিত হবে। আমরা রক্ত দিয়ে যে স্বাধীনতা এনেছি, তা বৃথা যেতে দেব না।
                        </blockquote>
                        <cite className="text-primary-red font-bold not-italic text-lg">
                            - বৈষম্যবিরোধী ছাত্র আন্দোলন
                        </cite>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
