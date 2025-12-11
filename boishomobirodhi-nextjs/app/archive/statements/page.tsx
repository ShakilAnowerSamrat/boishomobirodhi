import { Navbar } from "@/components/navigation/Navbar";
import { Footer } from "@/components/navigation/Footer";
import statementsData from "@/data/statements.json";
import { FileText, Calendar, Building, ArrowUpRight } from "lucide-react";

export const metadata = {
    title: "বিবৃতি ও প্রতিক্রিয়া | বৈষম্যবিরোধী ছাত্র আন্দোলন",
    description: "আন্দোলনের সময় বিভিন্ন পক্ষের গুরুত্বপূর্ণ বিবৃতি ও প্রতিক্রিয়া",
};

export default function StatementsPage() {
    return (
        <>
            <Navbar />
            <main className="min-h-screen bg-gray-900 pt-24 pb-12">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h1 className="text-4xl font-bold text-white mb-4">
                            বিবৃতি ও প্রতিক্রিয়া
                        </h1>
                        <p className="text-gray-400 max-w-2xl mx-auto">
                            আন্দোলনের বাঁক বদলানো গুরুত্বপূর্ণ সব বিবৃতি, ঘোষণা এবং প্রতিক্রিয়া।
                        </p>
                    </div>

                    <div className="space-y-6 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-gray-700 before:to-transparent">
                        {statementsData.map((statement, idx) => (
                            <StatementCard key={statement.id} statement={statement} index={idx} />
                        ))}
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}

function StatementCard({ statement, index }: { statement: any, index: number }) {
    const isEven = index % 2 === 0;

    const typeColors = {
        student: "text-green-400 bg-green-400/10 border-green-400/20",
        government: "text-red-400 bg-red-400/10 border-red-400/20",
        political_party: "text-blue-400 bg-blue-400/10 border-blue-400/20",
        international: "text-yellow-400 bg-yellow-400/10 border-yellow-400/20",
    } as const;

    // Helper to get type label in Bengali
    const getTypeLabel = (type: string) => {
        switch (type) {
            case 'student': return 'আন্দোলনকারী';
            case 'government': return 'সরকার পক্ষ';
            case 'political_party': return 'রাজনৈতিক দল';
            case 'international': return 'আন্তর্জাতিক';
            default: return 'অন্যান্য';
        }
    };

    return (
        <div className={`relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group ${isEven ? 'md:flex-row' : ''}`}>

            {/* Timeline Dot */}
            <div className="absolute left-0 md:left-1/2 w-10 h-10 border-4 border-gray-900 bg-gray-800 rounded-full flex items-center justify-center transform md:-translate-x-1/2 z-10 group-hover:border-primary-red transition-colors">
                <FileText className="w-4 h-4 text-gray-400" />
            </div>

            {/* Content Card */}
            <div className="w-full md:w-[calc(50%-2rem)] pl-14 md:pl-0">
                <div className="bg-gray-800 p-6 rounded-xl border border-gray-700 hover:border-gray-600 transition-all shadow-lg">
                    <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-2 text-sm text-gray-400">
                            <Calendar className="w-4 h-4" />
                            <span>{statement.date}</span>
                        </div>
                        <span className={`px-2 py-1 text-xs rounded border ${typeColors[statement.type as keyof typeof typeColors] || 'text-gray-400'}`}>
                            {getTypeLabel(statement.type)}
                        </span>
                    </div>

                    <div className="flex items-center gap-2 mb-2 text-primary-red font-medium text-sm">
                        <Building className="w-4 h-4" />
                        <span>{statement.source}</span>
                    </div>

                    <p className="text-gray-200 leading-relaxed">
                        {statement.summary}
                    </p>
                </div>
            </div>
        </div>
    );
}
