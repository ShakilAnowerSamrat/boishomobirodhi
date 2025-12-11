import { Navbar } from "@/components/navigation/Navbar";
import { Footer } from "@/components/navigation/Footer";
import demandsData from "@/data/demands.json";
import { CheckCircle, Flag, Target, Shield, AlertCircle, Calendar } from "lucide-react";

export const metadata = {
    title: "দাবিসমূহ | বৈষম্যবিরোধী ছাত্র আন্দোলন",
    description: "আন্দোলনের বিভিন্ন পর্যায়ের গুরুত্বপূর্ণ দাবিগুলো",
};

export default function DemandsPage() {
    return (
        <>
            <Navbar />
            <main className="min-h-screen bg-gray-900 pt-24 pb-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h1 className="text-4xl font-bold text-white mb-4">
                            ঐতিহাসিক দাবিসমূহ
                        </h1>
                        <p className="text-gray-400 max-w-2xl mx-auto">
                            কোটা সংস্কার থেকে সরকার পতন - আন্দোলনের বাঁক বদলানো সব দাবি।
                        </p>
                    </div>

                    <div className="space-y-20">
                        {/* 1 Point Demand - Hero Section */}
                        <section className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary-red/10 to-gray-900 border border-primary-red/20 p-8 md:p-12 text-center">
                            <div className="absolute top-0 right-0 p-4 opacity-10">
                                <Flag className="w-32 h-32 text-primary-red" />
                            </div>
                            <div className="relative z-10">
                                <div className="flex items-center justify-center gap-4 mb-6">
                                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-red/20 text-primary-red text-sm font-medium">
                                        <Target className="w-4 h-4" />
                                        <span>চূড়ান্ত বিজয়</span>
                                    </div>
                                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gray-800 text-gray-400 text-sm border border-gray-700">
                                        <Calendar className="w-4 h-4" />
                                        <span>{demandsData["1_point"].date}</span>
                                    </div>
                                </div>
                                <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                                    {demandsData["1_point"].title}
                                </h2>
                                <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                                    {demandsData["1_point"].description}
                                </p>
                                <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-primary-red/30 inline-block">
                                    <p className="text-2xl md:text-3xl font-bold text-primary-red">
                                        "{demandsData["1_point"].items[0]}"
                                    </p>
                                </div>
                            </div>
                        </section>

                        {/* 9 Point Demands */}
                        <section>
                            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
                                <div className="flex items-center gap-4">
                                    <div className="p-3 rounded-lg bg-yellow-500/10 text-yellow-500">
                                        <AlertCircle className="w-8 h-8" />
                                    </div>
                                    <div>
                                        <h2 className="text-2xl font-bold text-white">
                                            {demandsData["9_point"].title}
                                        </h2>
                                        <div className="flex items-center gap-2 text-primary-red text-sm mt-1">
                                            <Calendar className="w-4 h-4" />
                                            <span>{demandsData["9_point"].date}</span>
                                        </div>
                                    </div>
                                </div>
                                <p className="text-gray-400 max-w-md md:text-right">
                                    {demandsData["9_point"].description}
                                </p>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {demandsData["9_point"].items.map((item, index) => (
                                    <div key={index} className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-yellow-500/50 transition-all group">
                                        <div className="flex items-start gap-4">
                                            <span className="flex-shrink-0 w-8 h-8 rounded-full bg-yellow-500/10 text-yellow-500 flex items-center justify-center font-bold text-sm border border-yellow-500/20 group-hover:bg-yellow-500 group-hover:text-black transition-all">
                                                {index + 1}
                                            </span>
                                            <p className="text-gray-300 group-hover:text-white transition-colors">
                                                {item}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                            {/* Early 4 Point Demands */}
                            <section>
                                <div className="flex items-center justify-between gap-4 mb-8">
                                    <div className="flex items-center gap-4">
                                        <div className="p-3 rounded-lg bg-blue-500/10 text-blue-500">
                                            <Shield className="w-8 h-8" />
                                        </div>
                                        <div>
                                            <h2 className="text-2xl font-bold text-white">
                                                {demandsData["early_4_point"].title}
                                            </h2>
                                            <div className="flex items-center gap-2 text-gray-500 text-sm mt-1">
                                                <Calendar className="w-4 h-4" />
                                                <span>{demandsData["early_4_point"].date}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <p className="text-gray-400 mb-6">
                                    {demandsData["early_4_point"].description}
                                </p>
                                <div className="space-y-4">
                                    {demandsData["early_4_point"].items.map((item, index) => (
                                        <div key={index} className="bg-gray-800 rounded-xl p-4 border border-gray-700 flex items-start gap-4">
                                            <CheckCircle className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                                            <p className="text-gray-300">{item}</p>
                                        </div>
                                    ))}
                                </div>
                            </section>

                            {/* Resistance Week 4 Point Demands */}
                            <section>
                                <div className="flex items-center justify-between gap-4 mb-8">
                                    <div className="flex items-center gap-4">
                                        <div className="p-3 rounded-lg bg-green-500/10 text-green-500">
                                            <Flag className="w-8 h-8" />
                                        </div>
                                        <div>
                                            <h2 className="text-2xl font-bold text-white">
                                                {demandsData["resistance_4_point"].title}
                                            </h2>
                                            <div className="flex items-center gap-2 text-gray-500 text-sm mt-1">
                                                <Calendar className="w-4 h-4" />
                                                <span>{demandsData["resistance_4_point"].date}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <p className="text-gray-400 mb-6">
                                    {demandsData["resistance_4_point"].description}
                                </p>
                                <div className="space-y-4">
                                    {demandsData["resistance_4_point"].items.map((item, index) => (
                                        <div key={index} className="bg-gray-800 rounded-xl p-4 border border-gray-700 flex items-start gap-4">
                                            <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                                            <p className="text-gray-300">{item}</p>
                                        </div>
                                    ))}
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}
