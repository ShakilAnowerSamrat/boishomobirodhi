import { Navbar } from "@/components/navigation/Navbar";
import { Footer } from "@/components/navigation/Footer";
import { Legal } from "@/components/sections/Legal";

export default function LegalPage() {
    return (
        <>
            <Navbar />
            <main className="pt-20">
                <Legal />
            </main>
            <Footer />
        </>
    );
}
