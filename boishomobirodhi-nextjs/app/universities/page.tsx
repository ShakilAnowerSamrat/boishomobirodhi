import { Navbar } from "@/components/navigation/Navbar";
import { Footer } from "@/components/navigation/Footer";
import universitiesData from "@/data/universities.json";
import Link from "next/link";
import { MapPin, ArrowRight, School, Building2, GraduationCap } from "lucide-react";

export const metadata = {
    title: "বিশ্ববিদ্যালয়সমূহ | বৈষম্যবিরোধী ছাত্র আন্দোলন",
    description: "আন্দোলনে অংশগ্রহণকারী বিশ্ববিদ্যালয়সমূহের বীরত্বগাথা",
};

export default function UniversitiesPage() {
    // Group universities by type
    const groupedUniversities = universitiesData.reduce((acc, uni) => {
        const type = uni.type || "Other";
        if (!acc[type]) {
            acc[type] = [];
        }
        acc[type].push(uni);
        return acc;
    }, {} as Record<string, typeof universitiesData>);

    const getTypeLabel = (type: string) => {
        switch (type) {
            case "Public University": return "পাবলিক বিশ্ববিদ্যালয়";
            case "Private University": return "প্রাইভেট বিশ্ববিদ্যালয়";
            case "Public College": return "সরকারি কলেজ";
            case "Private College": return "প্রাইভেট কলেজ";
            default: return "অন্যান্য শিক্ষা প্রতিষ্ঠান";
        }
    };

    const getTypeIcon = (type: string) => {
        switch (type) {
            case "Public University": return <School className="w-6 h-6" />;
            case "Private University": return <Building2 className="w-6 h-6" />;
            case "Public College": return <GraduationCap className="w-6 h-6" />;
            default: return <School className="w-6 h-6" />;
        }
    };

    return (
        <>
            <Navbar />
            <main className="min-h-screen bg-gray-900 pt-24 pb-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center justify-center p-3 rounded-full bg-primary-red/10 text-primary-red mb-6">
                            <School className="w-8 h-8" />
                        </div>
                        <h1 className="text-4xl font-bold text-white mb-4">
                            প্রতিরোধের দুর্গসমূহ
                        </h1>
                        <p className="text-gray-400 max-w-2xl mx-auto">
                            যেসব শিক্ষাপ্রতিষ্ঠানের শিক্ষার্থীদের রক্ত আর ত্যাগে অর্জিত হয়েছে এই নতুন বাংলাদেশ।
                        </p>
                    </div>

                    <div className="space-y-16">
                        {Object.entries(groupedUniversities).map(([type, universities]) => (
                            <section key={type}>
                                <div className="flex items-center gap-3 mb-8 border-b border-gray-800 pb-4">
                                    <div className="p-2 rounded-lg bg-gray-800 text-gray-300">
                                        {getTypeIcon(type)}
                                    </div>
                                    <h2 className="text-2xl font-bold text-white">
                                        {getTypeLabel(type)}
                                    </h2>
                                    <span className="px-3 py-1 rounded-full bg-gray-800 text-gray-400 text-xs font-medium">
                                        {universities.length}
                                    </span>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                    {universities.map((uni) => (
                                        <Link
                                            key={uni.id}
                                            href={`/universities/${uni.id}`}
                                            className="group bg-gray-800 rounded-xl overflow-hidden border border-gray-700 hover:border-primary-red/50 transition-all duration-300 hover:transform hover:-translate-y-1 flex flex-col"
                                        >
                                            <div className="h-48 bg-gray-700 relative overflow-hidden flex-shrink-0">
                                                <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 group-hover:scale-105 transition-transform duration-500" />
                                                <div className="absolute inset-0 flex items-center justify-center text-gray-600">
                                                    <School className="w-16 h-16 opacity-20" />
                                                </div>
                                                <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm px-3 py-1 rounded-full border border-gray-600 flex items-center gap-1.5 text-xs text-gray-300">
                                                    <MapPin className="w-3 h-3" />
                                                    {uni.location}
                                                </div>
                                            </div>
                                            <div className="p-6 flex flex-col flex-grow">
                                                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary-red transition-colors line-clamp-1">
                                                    {uni.name}
                                                </h3>
                                                <p className="text-gray-400 text-sm line-clamp-3 mb-6 flex-grow">
                                                    {uni.description}
                                                </p>
                                                <div className="flex items-center text-primary-red font-medium text-sm gap-2 mt-auto">
                                                    বিস্তারিত দেখুন <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                                </div>
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            </section>
                        ))}
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}
