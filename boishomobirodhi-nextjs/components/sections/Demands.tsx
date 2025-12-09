export function Demands() {
    return (
        <section id="demands" className="py-20 bg-gray-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-16">
                    আন্দোলনের দাবি
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="border border-primary-red/30 rounded-xl p-8 hover:border-primary-red hover:bg-white/5 transition-all">
                        <h3 className="text-2xl font-bold text-primary-red mb-4">৪ দফা দাবি</h3>
                        <ul className="space-y-2 text-gray-300">
                            <li>• কোটা সংস্কার</li>
                            <li>• নিরাপত্তা নিশ্চিতকরণ</li>
                            <li>• ন্যায়বিচার প্রতিষ্ঠা</li>
                            <li>• বৈষম্য দূরীকরণ</li>
                        </ul>
                    </div>

                    <div className="border border-primary-green/30 rounded-xl p-8 hover:border-primary-green hover:bg-white/5 transition-all">
                        <h3 className="text-2xl font-bold text-primary-green mb-4">৯ দফা দাবি</h3>
                        <ul className="space-y-2 text-gray-300">
                            <li>• শিক্ষা সংস্কার</li>
                            <li>• নাগরিক অধিকার রক্ষা</li>
                            <li>• স্বৈরাচার বিরোধী</li>
                            <li>এবং আরও...</li>
                        </ul>
                    </div>

                    <div className="border border-primary-red/30 rounded-xl p-8 hover:border-primary-red hover:bg-white/5 transition-all">
                        <h3 className="text-2xl font-bold text-primary-red mb-4">১ দফা দাবি</h3>
                        <p className="text-gray-300 text-lg font-semibold">
                            শেখ হাসিনা সরকারের পদত্যাগ
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
