import { Navbar } from "@/components/navigation/Navbar";
import { Footer } from "@/components/navigation/Footer";
import coordinatorsData from "@/data/coordinators.json";
import { User, GraduationCap, Building2 } from "lucide-react";

export const metadata = {
    title: "সমন্বয়ক তালিকা | বৈষম্যবিরোধী ছাত্র আন্দোলন",
    description: "আন্দোলনের নেতৃত্বদানকারী চাবি সমন্বয়কবৃন্দ",
};

export default function CoordinatorsPage() {
    return (
        <>
            <Navbar />
            <main className="min-h-screen bg-gray-900 pt-24 pb-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h1 className="text-4xl font-bold text-white mb-4">
                            সমন্বয়কবৃন্দ
                        </h1>
                        <p className="text-gray-400 max-w-2xl mx-auto">
                            যাদের সাহসী নেতৃত্বে সংঘটিত হয়েছে এই ঐতিহাসিক গণঅভ্যুত্থান।
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {coordinatorsData.map((coordinator) => (
                            <CoordinatorCard key={coordinator.id} coordinator={coordinator} />
                        ))}
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}

function CoordinatorCard({ coordinator }: { coordinator: any }) {
    return (
        <div className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-primary-red/50 transition-all text-center group">
            <div className="w-20 h-20 bg-gray-700 rounded-full mx-auto mb-4 flex items-center justify-center text-gray-400 group-hover:bg-gray-700 group-hover:text-primary-red transition-all">
                <User className="w-10 h-10" />
            </div>

            <h3 className="text-xl font-bold text-white mb-1">
                {coordinator.name}
            </h3>

            <div className="inline-block px-3 py-1 bg-primary-red/10 text-primary-red text-xs rounded-full mb-4">
                {coordinator.role}
            </div>

            <div className="space-y-2 text-sm text-gray-400 border-t border-gray-700 pt-4">
                <div className="flex items-center justify-center gap-2">
                    <Building2 className="w-4 h-4" />
                    <span>{coordinator.institution}</span>
                </div>
                {coordinator.department && (
                    <div className="flex items-center justify-center gap-2">
                        <GraduationCap className="w-4 h-4" />
                        <span>{coordinator.department}</span>
                    </div>
                )}
            </div>
        </div>
    );
}
