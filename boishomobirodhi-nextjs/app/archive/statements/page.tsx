"use client";

import { Navbar } from "@/components/navigation/Navbar";
import { Footer } from "@/components/navigation/Footer";
import { motion } from "framer-motion";
import { FileText, Calendar, CheckCircle } from "lucide-react";

export default function StatementsPage() {
    const statements = [
        {
            date: "১ জুলাই, ২০২৪",
            title: "আন্দোলনের সূচনা ও ৪ দফা দাবি",
            points: [
                "২০১৮ সালের পরিপত্র বহাল সাপেক্ষে কমিশন গঠন করে দ্রুততম সময়ের মধ্যে সরকারি চাকরিতে সকল গ্রেডে অযৌক্তিক ও বৈষম্যমূলক কোটা বাদ দেয়া।",
                "সংবিধানে উল্লেখিত অনগ্রসর জনগোষ্ঠীর জন্য কোটা ন্যূনতম পর্যায়ে এনে সংসদে আইন পাস করা।",
                "সকল গ্রেডে কোটা সংস্কার করা।",
                "মেধাভিত্তিক নিয়োগ নিশ্চিত করা।"
            ],
            context: "আন্দোলনের শুরুতে ‘বৈষম্যবিরোধী ছাত্র আন্দোলন’ ব্যানারে এই ৪ দফা দাবি পেশ করা হয়।"
        },
        {
            date: "জুলাই, ২০২৪",
            title: "৯ দফা দাবি",
            points: [
                "প্রধানমন্ত্রী শেখ হাসিনাকে প্রকাশ্যে ক্ষমা চাইতে হবে।",
                "আইনশৃঙ্খলা রক্ষাকারী বাহিনীর দোষী সদস্যদের বিচার করতে হবে।",
                "নিহতদের পরিবারকে ক্ষতিপূরণ দিতে হবে।",
                "ঢাকা বিশ্ববিদ্যালয়সহ সকল ক্যাম্পাসে সন্ত্রাসী কর্মকাণ্ড বন্ধ করতে হবে।",
                "স্বরাষ্ট্রমন্ত্রী ও সেতুমন্ত্রীর পদত্যাগ।",
                "ইন্টারনেট শাটডাউন ও হামলার দায় নিতে হবে।",
                "সকল মিথ্যা মামলা প্রত্যাহার করতে হবে।",
                "ক্যাম্পাসগুলোতে ছাত্র সংসদ নির্বাচন দিতে হবে।",
                "শিক্ষার্থীদের নিরাপত্তা নিশ্চিত করতে হবে।"
            ],
            context: "পুলিশি হামলা এবং হত্যাকাণ্ডের পর শিক্ষার্থীরা ৪ দফা থেকে সরে এসে ৯ দফা দাবি ঘোষণা করে।"
        },
        {
            date: "৩ আগস্ট, ২০২৪",
            title: "এক দফা দাবি",
            points: [
                "প্রধানমন্ত্রী শেখ হাসিনা এবং তার মন্ত্রিসভার পদত্যাগ।",
                "ফ্যাসিবাদী ব্যবস্থার বিলোপ এবং একটি নতুন রাজনৈতিক বন্দোবস্ত।",
                "ছাত্র-জনতার অভ্যুত্থানের মাধ্যমে একটি ন্যায়ভিত্তিক রাষ্ট্র গঠন।"
            ],
            context: "শহীদ মিনারের জনসমুদ্র থেকে বৈষম্যবিরোধী ছাত্র আন্দোলনের সমন্বয়করা এই এক দফা দাবি ঘোষণা করেন।"
        }
    ];

    return (
        <div className="min-h-screen bg-gray-900 text-white font-bengali">
            <Navbar />
            <main className="pt-24 pb-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        ঐতিহাসিক <span className="text-primary-red">দলিলাদি</span>
                    </h1>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                        ৪ দফা থেকে ১ দফা: যেভাবে বদলেছে আন্দোলনের গতিপথ
                    </p>
                </div>

                <div className="space-y-12">
                    {statements.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-white/5 backdrop-blur-sm border border-gray-800 rounded-xl overflow-hidden"
                        >
                            <div className="bg-gray-800/50 p-6 border-b border-gray-700 flex flex-col md:flex-row md:items-center justify-between gap-4">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-lg bg-primary-red/10 flex items-center justify-center text-primary-red">
                                        <FileText className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h2 className="text-2xl font-bold text-white">{item.title}</h2>
                                        <div className="flex items-center text-gray-400 text-sm mt-1">
                                            <Calendar className="w-4 h-4 mr-2" />
                                            {item.date}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="p-8">
                                <p className="text-gray-400 mb-6 italic border-l-4 border-primary-green pl-4">
                                    {item.context}
                                </p>
                                <ul className="space-y-4">
                                    {item.points.map((point, idx) => (
                                        <li key={idx} className="flex items-start gap-3">
                                            <CheckCircle className="w-5 h-5 text-primary-green mt-1 flex-shrink-0" />
                                            <span className="text-gray-300 text-lg">{point}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </main>
            <Footer />
        </div>
    );
}
