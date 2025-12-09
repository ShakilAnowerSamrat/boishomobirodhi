"use client";

export function Timeline() {
    const timelineEvents = [
        {
            date: "৫ জুন, ২০২৪",
            title: "আন্দোলনের সূত্রপাত",
            description: "হাইকোর্ট কর্তৃক ২০১৮ সালের কোটা বাতিলের পরিপত্র অবৈধ ঘোষণা। শিক্ষার্থীরা তাৎক্ষণিকভাবে এর প্রতিবাদে রাস্তায় নেমে আসে।"
        },
        {
            date: "১ জুলাই, ২০২৪",
            title: "দাবি আদায়ের আল্টিমেটাম",
            description: "ঢাকা বিশ্ববিদ্যালয়ের শিক্ষার্থীরা কোটা বাতিলের দাবিতে বিক্ষোভ করে এবং ৪ জুলাই পর্যন্ত আল্টিমেটাম দেয়।"
        },
        {
            date: "৬ জুলাই, ২০২৪",
            title: "বাংলা ব্লকেড শুরু",
            description: "শিক্ষার্থীরা শাহবাগসহ ঢাকার প্রধান মোড়গুলো অবরোধ করে 'বাংলা ব্লকেড' কর্মসূচি পালন করে। সারাদেশের মহাসড়কগুলোতেও অবরোধ শুরু হয়।"
        },
        {
            date: "৭ জুলাই, ২০২৪",
            title: "সর্বাত্মক অবরোধ",
            description: "বাংলা ব্লকেডের ফলে ঢাকা অচল হয়ে পড়ে। সারাদেশের শিক্ষা প্রতিষ্ঠানে ক্লাস-পরীক্ষা বর্জন শুরু হয়।"
        },
        {
            date: "১৪ জুলাই, ২০২৪",
            title: "রাষ্ট্রপতির কাছে স্মারকলিপি",
            description: "শিক্ষার্থীরা রাষ্ট্রপতির কাছে স্মারকলিপি পেশ করে। তৎকালীন প্রধানমন্ত্রীর বিতর্কিত মন্তব্যে আন্দোলন নতুন মোড় নেয়।"
        },
        {
            date: "১৫ জুলাই, ২০২৪",
            title: "শিক্ষার্থীদের ওপর হামলা",
            description: "ঢাকা বিশ্ববিদ্যালয় এলাকায় শিক্ষার্থীদের ওপর ছাত্রলীগ ও পুলিশের বর্বরোচিত হামলা। অন্তত ৩০০ শিক্ষার্থী আহত।"
        },
        {
            date: "১৬ জুলাই, ২০২৪",
            title: "আবু সাঈদ শহীদ",
            description: "রংপুরে পুলিশের গুলিতে বেগম রোকেয়া বিশ্ববিদ্যালয়ের ছাত্র আবু সাঈদ শহীদ হন। সারাদেশে ৬ জন নিহত। আন্দোলন তীব্র আকার ধারণ করে।"
        },
        {
            date: "১৮ জুলাই, ২০২৪",
            title: "কমপ্লিট শাটডাউন",
            description: "সারাদেশে 'কমপ্লিট শাটডাউন' কর্মসূচি পালিত হয়। বিজিবি মোতায়েন এবং ইন্টারনেট বন্ধ করে দেয়া হয়। পুলিশের গুলিতে অন্তত ২৯ জন শহীদ।"
        },
        {
            date: "১৯ জুলাই, ২০২৪",
            title: "কারফিউ জারি",
            description: "সরকার সারাদেশে কারফিউ জারি করে এবং সেনাবাহিনী মোতায়েন করে। দিনব্যাপী সংঘর্ষে ৬৬ জন শহীদ।"
        },
        {
            date: "২০ জুলাই, ২০২৪",
            title: "নাহিদ ইসলাম আটক",
            description: "আন্দোলনের অন্যতম সমন্বয়ক নাহিদ ইসলামকে আটক করা হয়। কারফিউর মধ্যেও সংঘর্ষে ২৬ জন শহীদ।"
        },
        {
            date: "৩ আগস্ট, ২০২৪",
            title: "এক দফা দাবি",
            description: "শহীদ মিনারে বিশাল জনসমাবেশ থেকে সরকারের পদত্যাগের 'এক দফা' দাবি ঘোষণা করা হয়।"
        },
        {
            date: "৪ আগস্ট, ২০২৪",
            title: "মারাত্মক সংঘর্ষ",
            description: "অসহযোগ আন্দোলনের প্রথম দিনে সারাদেশে ব্যাপক সংঘর্ষে অন্তত ৯০ জন নিহত। অনির্দিষ্টকালের জন্য কারফিউ ঘোষণা।"
        },
        {
            date: "৫ আগস্ট, ২০২৪",
            title: "বিজয় ও নতুন অধ্যায়",
            description: "'লং মার্চ টু ঢাকা' কর্মসূচিতে লাখো মানুষের ঢল। শেখ হাসিনার পদত্যাগ ও দেশত্যাগ। সাধারণ জনতার গণভবন দখল এবং বিজয়ের উল্লাস।"
        }
    ];

    return (
        <section id="history" className="py-20 bg-gradient-to-b from-gray-900 to-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-4">
                    আন্দোলনের ইতিহাস
                </h2>
                <p className="text-gray-400 text-center mb-16 max-w-3xl mx-auto">
                    ২০২৪ সালের জুলাই থেকে আগস্ট পর্যন্ত বাংলাদেশের ছাত্র আন্দোলনের ক্রনোলজি
                </p>

                <div className="relative">
                    {/* Timeline line */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-primary-red via-primary-green to-primary-red" />

                    <div className="space-y-12">
                        {timelineEvents.map((event, index) => (
                            <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8'}`}>
                                    <div className="bg-white/5 backdrop-blur-sm border border-gray-700 hover:border-primary-red/50 rounded-xl p-6 hover:bg-white/10 transition-all duration-300 shadow-lg">
                                        <div className="text-primary-red font-bold mb-2 text-lg">{event.date}</div>
                                        <h3 className="text-xl font-bold text-white mb-3">{event.title}</h3>
                                        <p className="text-gray-300 text-sm leading-relaxed">{event.description}</p>
                                    </div>
                                </div>
                                <div className="w-4 h-4 bg-primary-red rounded-full border-4 border-gray-900 z-10" />
                                <div className="w-1/2" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
