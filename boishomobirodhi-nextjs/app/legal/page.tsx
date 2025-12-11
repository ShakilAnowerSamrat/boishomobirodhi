import { Navbar } from "@/components/navigation/Navbar";
import { Footer } from "@/components/navigation/Footer";
import legalData from "@/data/legal_proceedings.json";
import { Scale, Gavel, FileCheck, Globe, AlertCircle, FileText } from "lucide-react";

export default function LegalPage() {
    const getIcon = (type: string) => {
        switch (type) {
            case "ICT Trial": return <Gavel className="w-6 h-6" />;
            case "Arrest": return <AlertCircle className="w-6 h-6" />;
            case "Case": return <FileText className="w-6 h-6" />;
            case "Reform": return <Scale className="w-6 h-6" />;
            case "International": return <Globe className="w-6 h-6" />;
            default: return <Scale className="w-6 h-6" />;
        }
    };

    const getTypeTitle = (type: string) => {
        switch (type) {
            case "ICT Trial": return "আন্তর্জাতিক অপরাধ ট্রাইব্যুনাল";
            case "Arrest": return "গ্রেপ্তার ও আটক (মন্ত্রী ও কর্মকর্তা)";
            case "Case": return "উল্লেখযোগ্য হত্যা ও ফৌজদারি মামলা";
            case "Reform": return "রাষ্ট্রীয় সংস্কার কমিশনসমূহ";
            case "International": return "আন্তর্জাতিক তদন্ত ও পদক্ষেপ";
            default: return "অন্যান্য";
        }
    };

    const groups = {
        "ICT Trial": legalData.filter(item => item.type === "ICT Trial"),
        "Arrest": legalData.filter(item => item.type === "Arrest"),
        "Case": legalData.filter(item => item.type === "Case"),
        "Reform": legalData.filter(item => item.type === "Reform"),
        "International": legalData.filter(item => item.type === "International"),
    };

    return (
        <>
            <Navbar />
            <main className="min-h-screen bg-gray-900 pt-24 pb-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                            আইনি পদক্ষেপ ও বিচার
                        </h1>
                        <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                            জুলাই গণঅভ্যুত্থান পরবর্তী আইনি ব্যবস্থা, গ্রেপ্তার, বিচার কাজ এবং সংস্কারের বিস্তারিত তথ্য।
                        </p>
                    </div>

                    <div className="space-y-12">
                        {Object.entries(groups).map(([type, items]) => {
                            if (items.length === 0) return null;
                            return (
                                <div key={type} className="bg-gray-800/50 rounded-xl p-6 border border-gray-700/50">
                                    <div className="flex items-center gap-3 mb-6 border-b border-gray-700 pb-4">
                                        <div className="p-2 rounded-lg bg-primary-red/10 text-primary-red">
                                            {getIcon(type)}
                                        </div>
                                        <h2 className="text-2xl font-bold text-white">
                                            {getTypeTitle(type)}
                                        </h2>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        {items.map((item) => (
                                            <div key={item.id} className="bg-gray-900/50 rounded-lg p-5 border border-gray-800 hover:border-primary-red/30 transition-colors">
                                                <div className="flex justify-between items-start mb-2 gap-4">
                                                    <h3 className="font-bold text-lg text-white">{item.title}</h3>
                                                    <span className={`px-2 py-1 rounded text-xs font-medium whitespace-nowrap ${item.status.includes("রায়") || item.status === "কার্যকর" || item.status === "সম্পন্ন" || item.status === "দণ্ডাদেশ"
                                                            ? "bg-green-500/20 text-green-400"
                                                            : item.status.includes("আটক") || item.status.includes("গ্রেপ্তার")
                                                                ? "bg-red-500/20 text-red-400"
                                                                : "bg-yellow-500/20 text-yellow-400"
                                                        }`}>
                                                        {item.status}
                                                    </span>
                                                </div>
                                                <p className="text-gray-400 mb-3 text-sm leading-relaxed">
                                                    {item.description}
                                                </p>
                                                <div className="text-xs text-gray-500 border-t border-gray-800 pt-3 mt-3">
                                                    তারিখ/সময়কাল: <span className="text-gray-400">{item.date}</span>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}
