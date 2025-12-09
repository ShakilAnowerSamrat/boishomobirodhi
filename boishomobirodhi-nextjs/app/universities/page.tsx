import { Navbar } from "@/components/navigation/Navbar";
import { Footer } from "@/components/navigation/Footer";
import { Universities } from "@/components/sections/Universities";

export default function UniversitiesPage() {
    return (
        <>
            <Navbar />
            <main className="pt-20">
                <Universities />
            </main>
            <Footer />
        </>
    );
}
