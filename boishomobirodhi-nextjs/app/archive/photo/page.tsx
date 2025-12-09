"use client";

import { Navbar } from "@/components/navigation/Navbar";
import { Footer } from "@/components/navigation/Footer";
import { motion } from "framer-motion";
import Image from "next/image";

export default function PhotoArchivePage() {
    const photos = [
        "https://jrabd.org/storage/uploads/optimized_images_11zon/66ac898d9cc9c17/optimized__LpY5eT9__1722510255.jpg",
        "https://jrabd.org/storage/uploads/optimized_images_11zon/66ac898d9cc9c14/optimized__o6_P4O0__1722510342.jpg",
        "https://jrabd.org/storage/uploads/optimized_images_11zon/66ac8b0907d726/optimized__p_e1h5e_1722591602.jpg",
        "https://jrabd.org/storage/uploads/optimized_images_11zon/66ac7b90226343/optimized_23f-e54e4a07-8ec9-4595-ad24-469b8bd515cd-13eb674b-abce-4d56-b072-bc325126f5d8-043cf641-58d3-4929-a16f-161b5ee17246-(1)-1_1722604085.jpg",
        "https://jrabd.org/storage/uploads/optimized_images_11zon/66ac7b90226344/optimized_24f_1722604090.jpg",
        "https://jrabd.org/storage/uploads/optimized_images_11zon/66ac7b90226345/optimized_25f_1722604107.jpg",
        "https://jrabd.org/storage/uploads/optimized_images_11zon/66ac7b90226346/optimized_26f_1722604113.jpg",
        "https://jrabd.org/storage/uploads/optimized_images_11zon/66ac7b90226347/optimized_27f_1722604119.jpg"
    ];

    return (
        <div className="min-h-screen bg-gray-900 text-white font-bengali">
            <Navbar />
            <main className="pt-24 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        ছবি <span className="text-primary-red">আর্কাইভ</span>
                    </h1>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                        আন্দোলনের দুর্লভ মুহূর্তগুলো
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {photos.map((src, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="aspect-square relative overflow-hidden rounded-xl border border-gray-800 hover:border-primary-red/50 transition-all group"
                        >
                            <Image
                                src={src}
                                alt={`Archive Photo ${index + 1}`}
                                fill
                                className="object-cover group-hover:scale-110 transition-transform duration-500"
                                unoptimized
                            />
                        </motion.div>
                    ))}
                </div>
            </main>
            <Footer />
        </div>
    );
}
