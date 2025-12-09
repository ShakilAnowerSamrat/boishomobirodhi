import { Navbar } from "@/components/navigation/Navbar";
import { Footer } from "@/components/navigation/Footer";
import { Testimonies } from "@/components/sections/Testimonies";

export default function TestimoniesPage() {
    return (
        <>
            <Navbar />
            <main className="pt-20">
                <Testimonies />
            </main>
            <Footer />
        </>
    );
}
