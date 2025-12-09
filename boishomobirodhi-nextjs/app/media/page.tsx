import { Navbar } from "@/components/navigation/Navbar";
import { Footer } from "@/components/navigation/Footer";
import { MediaGallery } from "@/components/sections/MediaGallery";

export default function MediaPage() {
    return (
        <>
            <Navbar />
            <main className="pt-20">
                <MediaGallery />
            </main>
            <Footer />
        </>
    );
}
