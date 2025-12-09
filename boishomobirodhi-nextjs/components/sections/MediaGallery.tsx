export function MediaGallery() {
    return (
        <section id="media" className="py-20 bg-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-16">
                    মিডিয়া গ্যালারি
                </h2>

                <div className="mb-12">
                    <h3 className="text-2xl font-bold text-white mb-6">ভিডিও আর্কাইভ</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden">
                            <div className="aspect-video bg-gray-900 flex items-center justify-center">
                                <p className="text-gray-500">YouTube Video Embed</p>
                            </div>
                            <div className="p-4">
                                <p className="text-gray-400 text-sm">জুলাই আন্দোলনের ডকুমেন্টারি</p>
                            </div>
                        </div>

                        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden">
                            <div className="aspect-video bg-gray-900 flex items-center justify-center">
                                <p className="text-gray-500">YouTube Video Embed</p>
                            </div>
                            <div className="p-4">
                                <p className="text-gray-400 text-sm">ছাত্র সমাবেশ</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
