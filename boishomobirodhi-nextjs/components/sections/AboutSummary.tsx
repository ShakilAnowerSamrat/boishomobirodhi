import { ArrowRight, BookOpen, Clock, Users } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export function AboutSummary() {
    return (
        <section className="py-20 bg-gray-900 border-t border-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                            বৈষম্যবিরোধী <span className="text-primary-red">ছাত্র আন্দোলন</span>
                        </h2>
                        <p className="text-gray-300 text-lg leading-relaxed mb-6">
                            ২০২৪ সালের জুলাই মাসে কোটা সংস্কারের দাবিতে শুরু হওয়া সাধারণ শিক্ষার্থীদের এই আন্দোলন এক ঐতিহাসিক গণঅভ্যুত্থানে রূপ নেয়।
                            মেধাবী শিক্ষার্থীদের ন্যায্য অধিকার আদায়ের এই সংগ্রাম শেষ পর্যন্ত স্বৈরাচারী শাসনের পতন ঘটায় এবং বাংলাদেশের ইতিহাসে এক নতুন অধ্যায়ের সূচনা করে।
                        </p>
                        <p className="text-gray-400 mb-8">
                            এই আন্দোলন কেবল চাকরির কোটা সংস্কারের জন্য ছিল না, এটি ছিল সাম্য, মানবিক মর্যাদা এবং সামাজিক ন্যায়বিচার প্রতিষ্ঠার লড়াই।
                        </p>

                        <div className="flex flex-wrap gap-4">
                            <Link
                                href="/history"
                                className="inline-flex items-center px-6 py-3 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-colors border border-white/10"
                            >
                                <Clock className="w-5 h-5 mr-2" />
                                পূর্ণাঙ্গ ইতিহাস
                            </Link>
                            <Link
                                href="/archive"
                                className="inline-flex items-center px-6 py-3 bg-primary-red hover:bg-red-700 text-white rounded-lg transition-colors shadow-lg shadow-red-900/20"
                            >
                                <BookOpen className="w-5 h-5 mr-2" />
                                আর্কাইভ দেখুন
                                <ArrowRight className="w-4 h-4 ml-2" />
                            </Link>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-4 pt-8">
                            <div className="bg-gray-800 p-6 rounded-xl border border-gray-700">
                                <h3 className="text-4xl font-bold text-primary-red mb-2">৩৬</h3>
                                <p className="text-gray-400">দিনব্যাপী সংগ্রাম</p>
                            </div>
                            <div className="bg-gray-800 p-6 rounded-xl border border-gray-700">
                                <h3 className="text-4xl font-bold text-primary-green mb-2">১৫৮১+</h3>
                                <p className="text-gray-400">শহীদ</p>
                            </div>
                        </div>
                        <div className="space-y-4">
                            <div className="bg-gray-800 p-6 rounded-xl border border-gray-700">
                                <h3 className="text-4xl font-bold text-white mb-2">৩১k+</h3>
                                <p className="text-gray-400">আহত ও পঙ্গুত্ববরণ</p>
                            </div>
                            <div className="bg-gray-800 p-6 rounded-xl border border-gray-700">
                                <h3 className="text-4xl font-bold text-blue-400 mb-2">১ দফা</h3>
                                <p className="text-gray-400">চূড়ান্ত বিজয়</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
