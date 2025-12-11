import { Navbar } from "@/components/navigation/Navbar";
import { Footer } from "@/components/navigation/Footer";
import slogansData from "@/data/slogans.json";
import { Quote } from "lucide-react";

export const metadata = {
    title: "স্লোগান আর্কাইভ | বৈষম্যবিরোধী ছাত্র আন্দোলন",
    description: "২০২৪ সালের ছাত্র আন্দোলনে ব্যবহৃত বিপ্লবী স্লোগানসমূহ",
};

export default function SlogansPage() {
    // Group slogans by category
    const slogansByCategory = {
        general: slogansData.filter(s => s.category === "general"),
        protest: slogansData.filter(s => s.category === "protest"),
        demand: slogansData.filter(s => s.category === "demand"),
    };

    return (
        <>
            <Navbar />
            <main className="min-h-screen bg-gray-900 pt-24 pb-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h1 className="text-4xl font-bold text-white mb-4">
                            বিপ্লবী স্লোগানসমূহ
                        </h1>
                        <p className="text-gray-400 max-w-2xl mx-auto">
                            যে স্লোগানগুলো কাঁপিয়ে দিয়েছিল রাজপথ, নাড়িয়ে দিয়েছিল স্বৈরাচারের গদি।
                            প্রতিটি স্লোগান এক একটি ইতিহাসের সাক্ষী।
                        </p>
                    </div>

                    <div className="space-y-16">
                        {/* General Slogans */}
                        <section>
                            <h2 className="text-2xl font-bold text-primary-red mb-8 border-b border-gray-800 pb-2 flex items-center">
                                <span className="mr-2">🔥</span> জাগরণ ও চেতনার স্লোগান
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {slogansByCategory.general.map((slogan) => (
                                    <SloganCard key={slogan.id} slogan={slogan} />
                                ))}
                            </div>
                        </section>

                        {/* Protest Slogans */}
                        <section>
                            <h2 className="text-2xl font-bold text-primary-red mb-8 border-b border-gray-800 pb-2 flex items-center">
                                <span className="mr-2">✊</span> প্রতিবাদের স্লোগান
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {slogansByCategory.protest.map((slogan) => (
                                    <SloganCard key={slogan.id} slogan={slogan} />
                                ))}
                            </div>
                        </section>

                        {/* Demand Slogans */}
                        <section>
                            <h2 className="text-2xl font-bold text-primary-red mb-8 border-b border-gray-800 pb-2 flex items-center">
                                <span className="mr-2">📢</span> দাবির স্লোগান
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {slogansByCategory.demand.map((slogan) => (
                                    <SloganCard key={slogan.id} slogan={slogan} />
                                ))}
                            </div>
                        </section>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}

function SloganCard({ slogan }: { slogan: any }) {
    return (
        <div className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-primary-red/50 transition-all hover:bg-gray-800/80 group">
            <Quote className="w-8 h-8 text-gray-600 mb-4 group-hover:text-primary-red transition-colors" />
            <h3 className="text-xl font-bold text-white mb-3 font-serif leading-relaxed">
                "{slogan.text}"
            </h3>
            {slogan.context && (
                <p className="text-sm text-gray-400 border-t border-gray-700 pt-3 mt-3">
                    <span className="text-xs uppercase tracking-wider text-gray-500 block mb-1">প্রেক্ষাপট</span>
                    {slogan.context}
                </p>
            )}
        </div>
    );
}
