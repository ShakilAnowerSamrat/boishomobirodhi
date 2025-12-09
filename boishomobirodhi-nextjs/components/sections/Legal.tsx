export function Legal() {
    return (
        <section id="legal" className="py-20 bg-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-16">
                    আইনি ও মানবাধিকার দিক
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8">
                        <h3 className="text-2xl font-bold text-primary-red mb-4">আন্তর্জাতিক ফৌজদারি আদালত</h3>
                        <p className="text-gray-400">
                            বাংলাদেশে সংঘটিত গণহত্যা তদন্তের দাবি উত্থাপিত
                        </p>
                    </div>

                    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8">
                        <h3 className="text-2xl font-bold text-primary-green mb-4">জাতীয় মামলা</h3>
                        <p className="text-gray-400">
                            শত শত মামলা দায়ের এবং ক্ষতিপূরণ দাবি চলমান
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
