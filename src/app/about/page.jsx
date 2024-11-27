"use client"

import { motion } from 'framer-motion';
import Image from 'next/image';
import {
    Users,
    Target,
    Trophy,
    Award,
    Eye,
    Lightbulb
} from 'lucide-react';
import { Card, CardContent } from '../components/ui/card';

const stats = [
    { icon: Users, value: '50+', label: 'Employees' },
    { icon: Target, value: '14+', label: 'Years Experience' },
    { icon: Award, value: '500+', label: 'Clients' },
    { icon: Trophy, value: '1000+', label: 'Success Stories' },
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
                        <h1 className="text-5xl font-bold mb-6">Our Foundation</h1>
                        {/* <p className="text-xl text-gray-200 max-w-2xl mx-auto">
                            Leading Bangladesh&#39;s energy sector with innovation and excellence
                        </p> */}
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
                            {/* <h2 className="text-4xl font-bold mb-6">Our Journey</h2> */}
                            <p className="text-lg text-gray-600 mb-6">
                                Founded in 2010, Coastal Gas Limited emerged with a clear mission: to address Bangladesh&#39;s rising demand for premium-quality lubricants and lube-based oils. Over the years, we have earned a significant place as a trusted partner for industries nationwide, delivering solutions that power progress and enhance performance.
                            </p>
                            <p className="text-lg text-gray-600 mb-6">
                                At the core of our success lies a commitment to innovation and excellence. While our expertise in lubricant production remains our cornerstone, we are actively expanding into new horizons. One such venture is the development and distribution of LPG under our legacy, adding diversification to our portfolio.
                            </p>
                            <p className="text-lg text-gray-600 mb-6">
                                Our operations extend beyond manufacturing. Coastal Gas Limited is a dynamic force in the global market, leveraging strategic import and export activities to secure top-grade raw materials and deliver competitive pricing. Additionally, our proficiency in shipping and logistics ensures seamless transportation and distribution, reinforcing our promise of reliability and efficiency.
                            </p>
                            <p className="text-lg text-gray-600 mb-6">
                                With a forward-thinking approach and customer-centric focus, Coastal Gas Limited continues to set new benchmarks, empowering industries and enriching lives with every step forward.
                            </p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="relative h-[400px] rounded-2xl overflow-hidden"
                        >
                            <Image
                                src="/about_us.jpg"
                                alt="Our facility"
                                layout="fill"
                                objectFit="cover"
                                className="rounded-2xl"
                            />
                        </motion.div>
                    </div>
                </div>
            </section>

            <section id="about-us" className="container mx-auto py-16 px-4">
                {/* <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">About Us</h2> */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Mission Card */}
                    <div className="bg-blue-100 shadow-md rounded-lg p-6 hover:shadow-lg transition">
                        <div className="flex items-center justify-center text-blue-600 text-4xl mb-4">
                            <Target size={48} />
                        </div>
                        <h3 className="text-2xl font-semibold text-blue-700 mb-3 text-center">Our Mission</h3>
                        <p className="text-gray-700 text-center">
                            We aim to deliver dependable, high-performance lubricants, LPG, and related energy
                            solutions to the Bangladeshi market. We are dedicated to driving sustainable economic
                            growth and championing environmental stewardship through innovative technologies and
                            responsible business practices.
                        </p>
                    </div>

                    {/* Vision Card */}
                    <div className="bg-green-100 shadow-md rounded-lg p-6 hover:shadow-lg transition">
                        <div className="flex items-center justify-center text-green-600 text-4xl mb-4">
                            <Eye size={48} />
                        </div>
                        <h3 className="text-2xl font-semibold text-green-700 mb-3 text-center">Our Vision</h3>
                        <p className="text-gray-700 text-center">
                            We vision to be Bangladesh’s foremost energy solutions provider, delivering a diverse
                            portfolio of products and services that adapt to our customers’ changing needs while
                            fostering a sustainable and thriving future for the nation.
                        </p>
                    </div>

                    {/* Expertise Card */}
                    <div className="bg-yellow-100 shadow-md rounded-lg p-6 hover:shadow-lg transition">
                        <div className="flex items-center justify-center text-yellow-600 text-4xl mb-4">
                            <Lightbulb size={48} />
                        </div>
                        <h3 className="text-2xl font-semibold text-yellow-700 mb-3 text-center">Our Expertise</h3>
                        <p className="text-gray-700 text-center">
                            Reliable Energy, Seamlessly Delivered.
                            <br />
                            With us, you experience the power of innovation, tailored solutions, safety, and
                            sustainability.
                        </p>
                    </div>
                </div>
            </section>

            {/* <section className="py-24 bg-gray-50">
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
            </section> */}
        </>
    );
}