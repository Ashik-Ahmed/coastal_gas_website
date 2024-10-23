"use client"

import { motion } from 'framer-motion';
import Image from 'next/image';
import {
    Users,
    Target,
    Trophy,
    Award
} from 'lucide-react';
import { Card, CardContent } from '../components/ui/card';

const stats = [
    { icon: Users, value: '500+', label: 'Employees' },
    { icon: Target, value: '14+', label: 'Years Experience' },
    { icon: Trophy, value: '50+', label: 'Awards' },
    { icon: Award, value: '1000+', label: 'Clients' }
];

export default function AboutPage() {
    return (
        <>
            <section className="relative py-24 bg-gradient-to-r from-blue-900 to-blue-700">
                <div className="absolute inset-0 bg-black/50"></div>
                <div className="container mx-auto px-4 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center text-white"
                    >
                        <h1 className="text-5xl font-bold mb-6">About Coastal Gas Ltd.</h1>
                        <p className="text-xl text-gray-200 max-w-2xl mx-auto">
                            Leading Bangladesh's energy sector with innovation and excellence
                        </p>
                    </motion.div>
                </div>
            </section>

            <section className="py-24">
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-4xl font-bold mb-6">Our Journey</h2>
                            <p className="text-lg text-gray-600 mb-6">
                                Since our establishment in 2010, Coastal Gas Ltd. has been at the forefront of Bangladesh's energy sector.
                                We've grown from a small local supplier to one of the country's leading energy solution providers.
                            </p>
                            <p className="text-lg text-gray-600">
                                Our commitment to quality, safety, and innovation has earned us the trust of thousands of clients across
                                the nation, from individual households to major industrial operations.
                            </p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="relative h-[400px] rounded-2xl overflow-hidden"
                        >
                            <Image
                                src="https://images.unsplash.com/photo-1581094794329-c8112c4e5190?auto=format&fit=crop&q=80"
                                alt="Our facility"
                                layout="fill"
                                objectFit="cover"
                                className="rounded-2xl"
                            />
                        </motion.div>
                    </div>
                </div>
            </section>

            <section className="py-24 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-4 gap-8">
                        {stats.map((stat, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <Card className="text-center p-6">
                                    <CardContent>
                                        <stat.icon className="w-12 h-12 mx-auto mb-4 text-blue-600" />
                                        <h3 className="text-3xl font-bold text-blue-600 mb-2">{stat.value}</h3>
                                        <p className="text-gray-600">{stat.label}</p>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}