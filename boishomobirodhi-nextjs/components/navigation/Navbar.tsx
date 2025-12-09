"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navItems = [
        { href: "/", label: "প্রধান পাতা" },
        { href: "/history", label: "ইতিহাস" },
        { href: "/archive", label: "আর্কাইভ" },
        { href: "/demands", label: "দাবি" },
        { href: "/universities", label: "বিশ্ববিদ্যালয়" },
        { href: "/testimonies", label: "সাক্ষ্য" },
        { href: "/legal", label: "আইনি দিক" },
        { href: "/international", label: "আন্তর্জাতিক" },
        { href: "/media", label: "মিডিয়া" },
        { href: "/conclusion", label: "উপসংহার" },
    ];

    return (
        <nav
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                isScrolled
                    ? "bg-gray-900/95 backdrop-blur-md border-b border-red-500/20"
                    : "bg-transparent"
            )}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    <Link href="/" className="flex items-center gap-3 group">
                        <div className="relative w-12 h-12">
                            <Image
                                src="/images/logo/logo.png.png"
                                alt="লোগো"
                                fill
                                className="object-contain"
                            />
                        </div>
                        <span className="text-lg font-semibold text-white group-hover:text-primary-red transition-colors">
                            বৈষম্যবিরোধী ছাত্র আন্দোলন
                        </span>
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden lg:flex items-center gap-1">
                        {navItems.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className="px-4 py-2 text-sm text-gray-300 hover:text-primary-red transition-colors rounded-md hover:bg-white/5"
                            >
                                {item.label}
                            </Link>
                        ))}
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="lg:hidden p-2 text-white hover:text-primary-red transition-colors"
                        aria-label="মেনু টগল"
                    >
                        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <div className="lg:hidden py-4 border-t border-white/10">
                        <div className="flex flex-col gap-2">
                            {navItems.map((item) => (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="px-4 py-3 text-gray-300 hover:text-primary-red hover:bg-white/5 transition-colors rounded-md"
                                >
                                    {item.label}
                                </Link>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
}
