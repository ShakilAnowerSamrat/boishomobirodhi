export function Testimonies() {
    return (
        <section id="testimonies" className="py-20 bg-gray-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-16">
                    সাক্ষ্য ও অভিজ্ঞতা
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-white/5 backdrop-blur-sm border border-primary-red/20 rounded-xl p-8">
                        <h3 className="text-xl font-bold text-white mb-3">আতোয়ারুল ইসলাম</h3>
                        <p className="text-gray-400 mb-4">
                            "আমি ছিলাম সামনের সারিতে। যখন গুলি শুরু হলো, আমি দেখলাম আমার পাশের সবাই মাটিতে পড়ে যাচ্ছে..."
                        </p>
                        <span className="text-sm text-primary-red">আহত ছাত্র</span>
                    </div>

                    <div className="bg-white/5 backdrop-blur-sm border border-primary-red/20 rounded-xl p-8">
                        <h3 className="text-xl font-bold text-white mb-3">হাবিবুল</h3>
                        <p className="text-gray-400 mb-4">
                            "আমরা শুধু আমাদের অধিকারের জন্য লড়াই করছিলাম। কিন্তু তারা আমাদের উপর গুলি চালাল..."
                        </p>
                        <span className="text-sm text-primary-red">প্রত্যক্ষদর্শী</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
