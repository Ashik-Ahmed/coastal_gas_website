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
                    src="https://images.unsplash.com/photo-1581094288338-2314dddb7ece?auto=format&fit=crop&q=80"
                    alt="Energy background"
                    layout="fill"
                    objectFit="cover"
                    className="z-0"
                    priority
                />
            </div>

            <div className="container mx-auto px-4 relative z-20">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-6xl mx-auto text-center text-white"
                >
                    <h1 className="text-xl font-bold mb-6 leading-tight">
                        Powering Progress,
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300">
                            {" "}Powering Growth
                        </span>
                    </h1>
                    <p className="text-xl mb-8 text-gray-200">
                        Enriching Lives With Energy For A Better Tomorrow
                    </p>
                    <div className="flex gap-4 justify-center">
                        <Button
                            size="lg"
                            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg rounded-full"
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

            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent z-20"></div>
        </section>
    );
}