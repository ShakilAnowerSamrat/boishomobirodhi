import Image from "next/image";
import Link from "next/link";

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-gray-900 border-t border-primary-red/20 py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
                    <div className="text-center md:text-left">
                        <div className="relative w-20 h-20 mx-auto md:mx-0 mb-4">
                            <Image
                                src="/images/logo/logo.png.png"
                                alt="লোগো"
                                fill
                                className="object-contain rounded-full"
                            />
                        </div>
                        <p className="text-gray-400 text-sm">
                            বৈষম্যবিরোধী ছাত্র আন্দোলন ২০২৪ - একটি ঐতিহাসিক গণঅভ্যুত্থানের আর্কাইভ
                        </p>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold text-white mb-4">দ্রুত লিংক</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link
                                    href="#home"
                                    className="text-gray-400 hover:text-primary-red transition-colors text-sm"
                                >
                                    প্রধান পাতা
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="#history"
                                    className="text-gray-400 hover:text-primary-red transition-colors text-sm"
                                >
                                    ইতিহাস
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="#demands"
                                    className="text-gray-400 hover:text-primary-red transition-colors text-sm"
                                >
                                    দাবি
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="#media"
                                    className="text-gray-400 hover:text-primary-red transition-colors text-sm"
                                >
                                    মিডিয়া
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold text-white mb-4">যোগাযোগ</h3>
                        <p className="text-gray-400 text-sm">
                            এই আর্কাইভ সম্পর্কে যেকোনো তথ্য বা সংশোধনের জন্য আমাদের জানান।
                        </p>
                    </div>
                </div>

                <div className="pt-8 border-t border-white/5 text-center">
                    <p className="text-gray-500 text-sm mb-2">
                        © ২০২৪-{currentYear} বৈষম্যবিরোধী ছাত্র আন্দোলন আর্কাইভ। সর্বস্বত্ব সংরক্ষিত।
                    </p>
                    <p className="text-gray-600 text-xs">
                        তৈরি করেছেন ইতিহাস সংরক্ষণের উদ্দেশ্যে
                    </p>
                </div>
            </div>
        </footer>
    );
}
