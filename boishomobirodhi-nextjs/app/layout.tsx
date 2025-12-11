import type { Metadata } from "next";
import { Noto_Sans_Bengali, Hind_Siliguri } from "next/font/google";
import "./globals.css";

const notoSansBengali = Noto_Sans_Bengali({
    subsets: ["bengali"],
    weight: ["300", "400", "500", "600", "700"],
    variable: "--font-noto-sans-bengali",
});

const hindSiliguri = Hind_Siliguri({
    subsets: ["bengali"],
    weight: ["300", "400", "500", "600", "700"],
    variable: "--font-hind-siliguri",
});

export const metadata: Metadata = {
    title: "বৈষম্যবিরোধী ছাত্র আন্দোলন ২০২৪ | ইতিহাস ও আর্কাইভ",
    description: "২০২৪ সালের জুলাইয়ে বাংলাদেশের ছাত্র আন্দোলনের পূর্ণাঙ্গ ইতিহাস ও আর্কাইভ",
    keywords: "বৈষম্যবিরোধী ছাত্র আন্দোলন, কোটা সংস্কার, জুলাই গণহত্যা, বাংলাদেশ",
    openGraph: {
        title: "বৈষম্যবিরোধী ছাত্র আন্দোলন ২০২৪",
        description: "২০২৪ সালের জুলাইয়ে বাংলাদেশের ছাত্র আন্দোলনের পূর্ণাঙ্গ ইতিহাস ও আর্কাইভ",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="bn" className={`${notoSansBengali.variable} ${hindSiliguri.variable}`} suppressHydrationWarning>
            <body className="font-bengali antialiased">
                {children}
            </body>
        </html>
    );
}
