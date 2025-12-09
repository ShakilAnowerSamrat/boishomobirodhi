import { Navbar } from "@/components/navigation/Navbar";
import { Footer } from "@/components/navigation/Footer";
import { Demands } from "@/components/sections/Demands";

export default function DemandsPage() {
    return (
        <>
            <Navbar />
            <main className="pt-20">
                <Demands />
            </main>
            <Footer />
        </>
    );
}
