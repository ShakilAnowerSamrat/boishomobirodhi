import { Navbar } from "@/components/navigation/Navbar";
import { Footer } from "@/components/navigation/Footer";
import { Conclusion } from "@/components/sections/Conclusion";

export default function ConclusionPage() {
    return (
        <>
            <Navbar />
            <main className="pt-20">
                <Conclusion />
            </main>
            <Footer />
        </>
    );
}
