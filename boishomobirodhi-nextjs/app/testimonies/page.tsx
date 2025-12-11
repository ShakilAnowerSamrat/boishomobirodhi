import { Navbar } from "@/components/navigation/Navbar";
import { Footer } from "@/components/navigation/Footer";
import testimoniesData from "@/data/testimonies.json";
import { Quote, User, Calendar, ExternalLink, Globe, Flag, Users } from "lucide-react";
import Link from "next/link";

export default function TestimoniesPage() {
    const getTestimoniesByCategory = () => {
        const groups = {
            "Martyrs & Families": [] as typeof testimoniesData,
            "Student Coordinators": [] as typeof testimoniesData,
            "National Leaders & Politicians": [] as typeof testimoniesData,
            "Intellectuals & Civil Society": [] as typeof testimoniesData,
            "International": [] as typeof testimoniesData,
            "General Public": [] as typeof testimoniesData,
        };

        testimoniesData.forEach(t => {
            if (t.category === "Martyrs & Families") {
                groups["Martyrs & Families"].push(t);
            } else if (t.category === "Student Coordinators" || t.role.includes("Student Activist") && !t.role.includes("Martyr")) {
                groups["Student Coordinators"].push(t);
            } else if (t.category.includes("Political") || t.category === "National" || t.category === "Government Officials" || t.category === "Religious Leaders") {
                groups["National Leaders & Politicians"].push(t);
            } else if (t.category === "Intellectuals" || t.category === "Civil Society" || t.role === "Educator") {
                groups["Intellectuals & Civil Society"].push(t);
            } else if (t.category.startsWith("International")) {
                groups["International"].push(t);
            } else {
                groups["General Public"].push(t);
            }
        });

        return groups;
    };

    const categories = getTestimoniesByCategory();

    const getCategoryDetails = (category: string) => {
        switch (category) {
            case "Martyrs & Families":
                return { title: "শহীদ পরিবার ও স্মৃতিচারণ", icon: <User className="w-5 h-5" /> };
            case "Student Coordinators":
                return { title: "সমন্বয়ক ও শিক্ষার্থী", icon: <Users className="w-5 h-5" /> };
            case "National Leaders & Politicians":
                return { title: "জাতীয় নেতৃবৃন্দ ও রাজনৈতিক ব্যক্তিত্ব", icon: <Flag className="w-5 h-5" /> };
            case "Intellectuals & Civil Society":
                return { title: "বুদ্ধিজীবী ও বিশিষ্ট নাগরিক", icon: <Quote className="w-5 h-5" /> };
            case "International":
                return { title: "আন্তর্জাতিক সম্প্রদায়", icon: <Globe className="w-5 h-5" /> };
            case "General Public":
                return { title: "সাধারণ জনগন ও প্রতিবাদী", icon: <Users className="w-5 h-5" /> };
            default:
                return { title: category, icon: <User className="w-5 h-5" /> };
        }
    };

    return (
        <>
            <Navbar />
            <main className="min-h-screen bg-gray-900 pt-24 pb-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Header */}
                    <div className="text-center mb-16">
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                            কন্ঠস্বর ও সাক্ষ্য
                        </h1>
                        <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                            ২০২৪ সালের জুলাই আন্দোলনের সময় এবং পরবর্তী সময়ে দেশি-বিদেশি বিশিষ্ট ব্যক্তি এবং সাধারণ মানুষের প্রতিক্রিয়া ও বক্তব্য।
                        </p>
                    </div>

                    {/* Testimonies Sections */}
                    <div className="space-y-16">
                        {Object.entries(categories).map(([category, items]) => {
                            if (items.length === 0) return null;
                            const details = getCategoryDetails(category);

                            return (
                                <section key={category}>
                                    <div className="flex items-center gap-3 mb-8 border-b border-gray-800 pb-4">
                                        <div className="p-2 rounded-lg bg-primary-red/10 text-primary-red">
                                            {details.icon}
                                        </div>
                                        <h2 className="text-2xl font-bold text-white">
                                            {details.title}
                                        </h2>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                        {items.map((testimony) => (
                                            <div key={testimony.id} className="bg-gray-800/50 rounded-xl p-6 border border-gray-700/50 hover:border-primary-red/50 transition-colors group h-full flex flex-col">
                                                <div className="mb-4 text-primary-red opacity-50 group-hover:opacity-100 transition-opacity">
                                                    <Quote className="w-8 h-8" />
                                                </div>

                                                <blockquote className="text-lg text-gray-300 italic mb-6 flex-grow">
                                                    "{testimony.quote}"
                                                </blockquote>

                                                <div className="mt-auto pt-6 border-t border-gray-700/50">
                                                    <div className="flex items-start justify-between gap-4">
                                                        <div>
                                                            <div className="font-bold text-white text-lg">{testimony.name}</div>
                                                            <div className="text-sm text-gray-400 mb-1">{testimony.role}</div>
                                                            {testimony.date && (
                                                                <div className="flex items-center gap-1.5 text-xs text-gray-500 mt-2">
                                                                    <Calendar className="w-3 h-3" />
                                                                    <span>{testimony.date}</span>
                                                                </div>
                                                            )}
                                                        </div>
                                                    </div>

                                                    {testimony.source && (
                                                        <div className="mt-4 flex items-center justify-between text-xs">
                                                            <span className="text-gray-500">উৎস: {testimony.source}</span>
                                                            {testimony.sourceUrl && (
                                                                <a
                                                                    href={testimony.sourceUrl}
                                                                    target="_blank"
                                                                    rel="noopener noreferrer"
                                                                    className="flex items-center gap-1 text-primary-red hover:underline"
                                                                >
                                                                    বিস্তারিত
                                                                    <ExternalLink className="w-3 h-3" />
                                                                </a>
                                                            )}
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </section>
                            );
                        })}
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}
