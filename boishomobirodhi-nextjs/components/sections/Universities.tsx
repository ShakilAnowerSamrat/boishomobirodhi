export function Universities() {
    return (
        <section id="universities" className="py-20 bg-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-16">
                    অংশগ্রহণকারী বিশ্ববিদ্যালয়
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {[
                        "ঢাকা বিশ্ববিদ্যালয়",
                        " জাহাঙ্গীরনগর বিশ্ববিদ্যালয়",
                        "রাজশাহী বিশ্ববিদ্যালয়",
                        "চট্টগ্রাম বিশ্ববিদ্যালয়",
                        "বুয়েট",
                        "চবি",
                        "ব্র্যাক বিশ্ববিদ্যালয়",
                        "নর্থ সাউথ ইউনিভার্সিটি"
                    ].map((uni, index) => (
                        <div
                            key={index}
                            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6 text-center hover:border-primary-green hover:bg-white/10 transition-all"
                        >
                            <p className="text-white font-semibold">{uni}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
