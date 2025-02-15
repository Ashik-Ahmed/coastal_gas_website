"use client"
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Button } from './ui/button';
import Link from 'next/link';

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-r from-blue-900 to-blue-700">
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50 z-10"></div>
                <Image
                    src="/coastal_gas_banner.jpg"
                    alt="Energy background"
                    layout="fill"
                    objectFit="cover"
                    priority
                    quality={100}
                    className="object-contain z-0"
                />
            </div>

            <div className="container mx-auto px-4 relative z-20">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="max-w-6xl mx-auto text-center text-white"
                >
                    <h1 className="text-2xl md:text-6xl font-bold mb-6 leading-tight">
                        Performance - Progress - Possibilities
                        {/* <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-900 to-cyan-200">
                            {" "}
                        </span> */}
                    </h1>
                    <p className="text-lg md:text-xl mb-8 text-white">
                        Clean Energy For A Better Tomorrow
                    </p>
                    <div className="flex gap-4 justify-center">
                        <Button
                            size="lg"
                            className="bg-white hover:bg-blue-700 text-blue-900 hover:text-white px-8 py-6 text-lg rounded-full"
                        >
                            <Link href="/services">Explore Services</Link>
                        </Button>
                        <Button
                            variant="outline"
                            size="lg"
                            className="border-2 px-8 py-6 text-lg rounded-full hover:bg-white hover:text-blue-900"
                        >
                            <Link href="/contact">Contact Us</Link>
                        </Button>
                    </div>
                </motion.div>
            </div>

            {/* <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent z-20"></div> */}
        </section>
    );
}