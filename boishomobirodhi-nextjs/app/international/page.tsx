import { Navbar } from "@/components/navigation/Navbar";
import { Footer } from "@/components/navigation/Footer";
import internationalData from "@/data/international.json";
import { Globe, MessageSquare, ExternalLink, Flag } from "lucide-react";

export default function InternationalPage() {
    return (
        <>
            <Navbar />
            <main className="min-h-screen bg-gray-900 pt-24 pb-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Header */}
                    <div className="text-center mb-12">
                        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            আন্তর্জাতিক প্রতিক্রিয়া
                        </h1>
                        <p className="text-lg text-gray-400 max-w-3xl mx-auto">
                            জুলাই গণঅভ্যুত্থান এবং পরবর্তী পরিস্থিতি নিয়ে বিশ্বনেতাদের বার্তা, আন্তর্জাতিক সংস্থাগুলোর বিবৃতি এবং বৈশ্বিক গণমাধ্যমের ভূমিকা।
                        </p>
                    </div>

                    {/* Content Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {internationalData.map((item) => (
                            <div key={item.id} className="bg-gray-800/50 rounded-lg p-5 border border-gray-700/50 hover:border-primary-red/50 transition-colors group flex flex-col h-full">
                                <div className="flex items-start justify-between mb-3">
                                    <div className="flex items-center gap-2">
                                        <div className="p-1.5 rounded-md bg-blue-500/10 text-blue-400">
                                            {item.organization ? <Globe className="w-4 h-4" /> : <Flag className="w-4 h-4" />}
                                        </div>
                                        <div>
                                            <h3 className="text-base font-bold text-white leading-tight">
                                                {item.organization || item.country}
                                            </h3>
                                            {item.organization && (
                                                <span className="text-xs text-gray-500 block">{item.country}</span>
                                            )}
                                        </div>
                                    </div>
                                    <span className="px-2 py-0.5 rounded-full bg-gray-700/50 text-gray-400 text-[10px] border border-gray-600 whitespace-nowrap">
                                        {item.date}
                                    </span>
                                </div>

                                <h4 className="text-sm font-semibold text-gray-200 mb-2 leading-snug">
                                    {item.summary}
                                </h4>

                                <p className="text-gray-400 mb-4 text-xs leading-relaxed flex-grow">
                                    "{item.detailed_message}"
                                </p>

                                <div className="pt-3 border-t border-gray-700/50 flex justify-between items-center mt-auto">
                                    <span className="text-[10px] text-gray-500 flex items-center gap-1.5">
                                        <MessageSquare className="w-3 h-3" />
                                        {item.type}
                                    </span>
                                    <a
                                        href={item.source_url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-primary-red hover:underline flex items-center gap-1 text-[10px] font-medium"
                                    >
                                        সূত্র
                                        <ExternalLink className="w-3 h-3" />
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}
