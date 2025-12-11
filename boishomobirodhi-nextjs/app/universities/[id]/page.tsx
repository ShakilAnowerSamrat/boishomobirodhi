import { Navbar } from "@/components/navigation/Navbar";
import { Footer } from "@/components/navigation/Footer";
import universitiesData from "@/data/universities.json";
import sourcesData from "@/data/sources.json";
import { MapPin, Calendar, Users, ArrowLeft, Shield, UserCheck, BookOpen, ExternalLink, Link as LinkIcon } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

// Generate static params for all universities
export async function generateStaticParams() {
    return universitiesData.map((uni) => ({
        id: uni.id,
    }));
}

export default function UniversityDetailPage({ params }: { params: { id: string } }) {
    const university = universitiesData.find((u) => u.id === params.id);

    if (!university) {
        notFound();
    }

    // Extract citation IDs from story
    const citationIds = new Set<string>();
    const matches = university.story.match(/\[(\d+)\]/g);
    if (matches) {
        matches.forEach(match => {
            const id = match.replace(/[\[\]]/g, '');
            citationIds.add(id);
        });
    }

    // Helper to render text with citations
    const renderWithCitations = (text: string) => {
        const parts = text.split(/(\[\d+\])/g);
        return parts.map((part, index) => {
            const match = part.match(/^\[(\d+)\]$/);
            if (match) {
                const id = match[1];
                return (
                    <a
                        key={index}
                        href={`#ref-${id}`}
                        className="text-primary-red hover:underline align-super text-xs font-bold mx-0.5"
                    >
                        [{id}]
                    </a>
                );
            }
            return part;
        });
    };

    return (
        <>
            <Navbar />
            <main className="min-h-screen bg-gray-900 pt-24 pb-12">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <Link
                        href="/universities"
                        className="inline-flex items-center text-gray-400 hover:text-white mb-8 transition-colors"
                    >
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        ফিরে যান
                    </Link>

                    {/* Hero Section */}
                    <div className="bg-gray-800 rounded-2xl p-8 md:p-12 border border-gray-700 mb-12 relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-8 opacity-5">
                            <Users className="w-64 h-64 text-white" />
                        </div>
                        <div className="relative z-10">
                            <div className="flex flex-wrap items-center gap-4 text-sm mb-4">
                                <span className="px-3 py-1 rounded-full bg-gray-700 text-gray-300 border border-gray-600">
                                    {university.type}
                                </span>
                                <div className="flex items-center gap-1.5 text-primary-red">
                                    <MapPin className="w-4 h-4" />
                                    <span className="font-medium">{university.location}</span>
                                </div>
                            </div>
                            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                                {university.name}
                            </h1>
                            <p className="text-xl text-gray-300 leading-relaxed max-w-2xl">
                                {university.description}
                            </p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
                        {/* Student Contributions */}
                        {university.studentContributions && (
                            <div className="lg:col-span-2 bg-gray-800/50 rounded-xl p-6 border border-gray-700/50">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="p-2 rounded-lg bg-blue-500/10 text-blue-500">
                                        <Shield className="w-5 h-5" />
                                    </div>
                                    <h3 className="text-lg font-bold text-white">অবদান ও ভূমিকা</h3>
                                </div>
                                <ul className="space-y-3">
                                    {university.studentContributions.map((contribution, idx) => (
                                        <li key={idx} className="flex items-start gap-3 text-gray-300">
                                            <span className="mt-2 w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0" />
                                            <span>{contribution}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        {/* Key Leaders */}
                        {university.keyLeaders && university.keyLeaders.length > 0 && (
                            <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700/50">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="p-2 rounded-lg bg-green-500/10 text-green-500">
                                        <UserCheck className="w-5 h-5" />
                                    </div>
                                    <h3 className="text-lg font-bold text-white">সমন্বয়ক ও নেতৃত্ব</h3>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {university.keyLeaders.map((leader, idx) => (
                                        <span key={idx} className="px-3 py-1 rounded-lg bg-gray-700/50 text-gray-300 text-sm border border-gray-600">
                                            {leader}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Story Section */}
                    <section className="mb-16">
                        <h2 className="text-2xl font-bold text-white mb-6 border-l-4 border-primary-red pl-4">
                            প্রতিরোধের গল্প
                        </h2>
                        <div className="bg-gray-800/50 rounded-xl p-8 border border-gray-700/50 text-gray-300 leading-loose text-lg text-justify whitespace-pre-line">
                            {renderWithCitations(university.story)}
                        </div>
                    </section>

                    {/* Martyrs Section (if any) */}
                    {university.martyrs && university.martyrs.length > 0 && (
                        <section className="mb-16">
                            <h2 className="text-2xl font-bold text-white mb-6 border-l-4 border-primary-red pl-4">
                                আমাদের শহীদ
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {university.martyrs.map((martyr, index) => (
                                    <div key={index} className="bg-red-900/10 border border-primary-red/20 rounded-lg p-4 flex items-center gap-3">
                                        <div className="w-2 h-2 rounded-full bg-primary-red" />
                                        <span className="text-gray-200 font-medium">{martyr}</span>
                                    </div>
                                ))}
                            </div>
                        </section>
                    )}

                    {/* Timeline Section */}
                    {university.keyEvents && university.keyEvents.length > 0 && (
                        <section className="mb-16">
                            <h2 className="text-2xl font-bold text-white mb-8 border-l-4 border-primary-red pl-4">
                                ঘটনা প্রবাহ
                            </h2>
                            <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-gray-700 before:to-transparent">
                                {university.keyEvents.map((event, index) => (
                                    <div key={index} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                                        <div className="flex items-center justify-center w-10 h-10 rounded-full border border-gray-700 bg-gray-800 text-gray-500 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 ml-10 md:ml-0 z-10">
                                            <Calendar className="w-5 h-5" />
                                        </div>
                                        <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-gray-800 p-6 rounded-xl border border-gray-700 shadow-sm ml-4 md:ml-0">
                                            <div className="flex items-center justify-between space-x-2 mb-1">
                                                <span className="text-primary-red font-bold text-sm">
                                                    {event.date}
                                                </span>
                                            </div>
                                            <h3 className="text-white font-bold mb-2 text-lg">
                                                {event.title}
                                            </h3>
                                            <p className="text-gray-400 text-sm">
                                                {event.description}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>
                    )}

                    {/* References Section */}
                    {citationIds.size > 0 && (
                        <section className="border-t border-gray-800 pt-12 mt-12 mb-12">
                            <div className="flex items-center gap-2 mb-6 text-gray-400">
                                <BookOpen className="w-5 h-5" />
                                <h2 className="text-xl font-bold">তথ্যসূত্র ও উদ্ধৃতি</h2>
                            </div>
                            <div className="grid gap-3">
                                {Array.from(citationIds).sort((a, b) => Number(a) - Number(b)).map((id) => {
                                    const source = sourcesData[id as keyof typeof sourcesData];
                                    if (!source) return null;
                                    return (
                                        <div key={id} id={`ref-${id}`} className="flex gap-3 text-sm text-gray-400 group items-start">
                                            <span className="flex-shrink-0 w-6 text-right font-mono text-gray-500 mt-0.5">[{id}]</span>
                                            <div className="flex-grow">
                                                {source.url ? (
                                                    <a
                                                        href={source.url}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="text-gray-300 font-medium mr-2 hover:text-primary-red hover:underline decoration-primary-red/50 decoration-1 underline-offset-2 transition-all inline-flex items-center gap-1"
                                                    >
                                                        {source.title}
                                                        <ExternalLink className="w-3 h-3 opacity-50" />
                                                    </a>
                                                ) : (
                                                    <span className="text-gray-300 font-medium mr-2">{source.title}</span>
                                                )}
                                                <span className="italic mr-2 block sm:inline text-gray-500">{source.source}</span>
                                                {source.date && <span className="text-gray-600 block sm:inline">({source.date})</span>}
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </section>
                    )}
                </div>
            </main>
            <Footer />
        </>
    );
}
