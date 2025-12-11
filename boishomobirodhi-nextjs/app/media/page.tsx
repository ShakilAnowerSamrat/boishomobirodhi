import { Navbar } from "@/components/navigation/Navbar";
import { Footer } from "@/components/navigation/Footer";
import mediaDataRaw from "@/data/media.json";
import { PlayCircle, FileText, Film, ExternalLink, Video } from "lucide-react";
import Image from "next/image";

interface MediaItem {
    id: string;
    type: string;
    title: string;
    outlet: string;
    description: string;
    url: string;
    date: string;
    youtubeId?: string;
    thumbnail?: string;
}

const mediaData = mediaDataRaw as MediaItem[];

export default function MediaPage() {
    const categories = [
        { id: 'Documentary', label: 'ডকুমেন্টারি', icon: Film },
        { id: 'Video', label: 'ভিডিও বিশ্লেষণ', icon: PlayCircle },
        { id: 'Report', label: 'প্রতিবেদন', icon: FileText },
    ];

    return (
        <>
            <Navbar />
            <main className="min-h-screen bg-gray-900 pt-24 pb-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Header */}
                    <div className="text-center mb-16">
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                            মিডিয়া আর্কাইভ
                        </h1>
                        <p className="text-lg text-gray-400 max-w-3xl mx-auto">
                            জুলাই বিপ্লব নিয়ে আন্তর্জাতিক ডকুমেন্টারি, ভিডিও বিশ্লেষণ এবং অনুসন্ধানী প্রতিবেদন।
                        </p>
                    </div>

                    {categories.map((category) => {
                        const items = mediaData.filter(item => item.type === category.id);
                        if (items.length === 0) return null;

                        const Icon = category.icon;

                        return (
                            <div key={category.id} className="mb-16 last:mb-0">
                                <div className="flex items-center gap-3 mb-8 border-b border-gray-800 pb-4">
                                    <Icon className="w-6 h-6 text-primary-red" />
                                    <h2 className="text-2xl font-bold text-white">
                                        {category.label}
                                    </h2>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                    {items.map((item) => (
                                        <div
                                            key={item.id}
                                            className="group bg-gray-800/50 rounded-xl overflow-hidden border border-gray-700/50 hover:border-primary-red/50 transition-all block h-full flex flex-col"
                                        >
                                            {/* Video Embed/Thumbnail */}
                                            <div className="relative aspect-video w-full overflow-hidden bg-gray-900 group">
                                                {item.youtubeId ? (
                                                    <iframe
                                                        className="w-full h-full"
                                                        src={`https://www.youtube.com/embed/${item.youtubeId}`}
                                                        title={item.title}
                                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                        allowFullScreen
                                                    ></iframe>
                                                ) : (
                                                    <>
                                                        <Image
                                                            src={item.thumbnail || "/api/placeholder/400/225"}
                                                            alt={item.title}
                                                            width={400}
                                                            height={225}
                                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                                        />
                                                        <div className="absolute top-3 right-3 px-2 py-1 bg-black/70 rounded text-[10px] text-white font-medium border border-gray-700">
                                                            {item.outlet}
                                                        </div>
                                                        <a
                                                            href={item.url}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center z-10"
                                                        >
                                                            <PlayCircle className="w-12 h-12 text-white/90" />
                                                        </a>
                                                    </>
                                                )}
                                            </div>

                                            {/* Content */}
                                            <div className="p-5 flex flex-col flex-grow">
                                                <h3 className="text-lg font-bold text-white mb-2 leading-snug group-hover:text-primary-red transition-colors">
                                                    {item.title}
                                                </h3>
                                                <p className="text-gray-400 text-sm mb-4 line-clamp-3 flex-grow">
                                                    {item.description}
                                                </p>

                                                <div className="pt-4 border-t border-gray-700/50 flex items-center justify-between mt-auto">
                                                    <div className="flex flex-col">
                                                        <span className="text-xs text-gray-500">
                                                            {item.date}
                                                        </span>
                                                        <span className="text-[10px] text-gray-400">
                                                            {item.outlet}
                                                        </span>
                                                    </div>

                                                    <a
                                                        href={item.url}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="text-primary-red hover:underline flex items-center gap-1 text-xs font-medium"
                                                    >
                                                        দেখুন
                                                        <ExternalLink className="w-3 h-3" />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </main>
            <Footer />
        </>
    );
}
