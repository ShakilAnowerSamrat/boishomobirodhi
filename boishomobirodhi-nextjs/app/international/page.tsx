import { Navbar } from "@/components/navigation/Navbar";
import { Footer } from "@/components/navigation/Footer";
import { International } from "@/components/sections/International";

export default function InternationalPage() {
    return (
        <>
            <Navbar />
            <main className="pt-20">
                <International />
            </main>
            <Footer />
        </>
    );
}
