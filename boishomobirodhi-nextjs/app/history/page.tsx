import { Navbar } from "@/components/navigation/Navbar";
import { Footer } from "@/components/navigation/Footer";
import { Timeline } from "@/components/sections/Timeline";

export default function HistoryPage() {
    return (
        <>
            <Navbar />
            <main className="pt-20">
                <Timeline />
            </main>
            <Footer />
        </>
    );
}
