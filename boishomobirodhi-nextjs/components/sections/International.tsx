export function International() {
    return (
        <section id="international" className="py-20 bg-gray-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-16">
                    আন্তর্জাতিক প্রতিক্রিয়া
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 text-center">
                        <div className="text-4xl mb-4">🇺🇳</div>
                        <h3 className="text-xl font-bold text-white mb-2">জাতিসংঘ</h3>
                        <p className="text-gray-400 text-sm">মানবাধিকার লঙ্ঘনের তীব্র নিন্দা</p>
                    </div>

                    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 text-center">
                        <div className="text-4xl mb-4">🇺🇸</div>
                        <h3 className="text-xl font-bold text-white mb-2">যুক্তরাষ্ট্র</h3>
                        <p className="text-gray-400 text-sm">গণতন্ত্র পুনঃপ্রতিষ্ঠার আহ্বান</p>
                    </div>

                    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 text-center">
                        <div className="text-4xl mb-4">🇪🇺</div>
                        <h3 className="text-xl font-bold text-white mb-2">ইউরোপীয় ইউনিয়ন</h3>
                        <p className="text-gray-400 text-sm">স্বাধীন তদন্তের দাবি</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
