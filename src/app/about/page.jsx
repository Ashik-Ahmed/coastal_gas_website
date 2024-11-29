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
                                With our sister concerns over the years, we have earned a significant place as a trusted partner in several industries nationwide, delivering solutions that enhance performance and impact livelihoods. With Coastal Gas Limited, we have one ‘clean’ mission: to address Bangladesh&apos;s rising demand for premium-quality LPG and lube-based oils.
                            </p>
                            <p className="text-lg text-gray-600 mb-6">
                                While our expertise in lubricant production is progressing notably, we plan to expand into new horizons. One such venture is developing and distributing LPG, diversifying our portfolio.
                            </p>
                            <p className="text-lg text-gray-600 mb-6">
                                With our strategy, we are building ourselves to extend beyond manufacturing. We are creating ourselves as a dynamic force in the global market that will leverage strategic import and export activities to secure top-grade raw materials with competitive pricing. Additionally, our proficiency in shipping and logistics from other wings will ensure seamless transportation and distribution, reinforcing our promise of reliability and efficiency.
                            </p>
                            <p className="text-lg text-gray-600 mb-6">
                                With a forward-thinking approach and customer-centric focus, we anticipate Coastal Gas Limited will set new benchmarks, empowering industries and enriching lives with every step forward.
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
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Mission Card */}
                    <div className="bg-blue-100 shadow-md rounded-lg p-6 hover:shadow-lg transition">
                        <div className="flex items-center justify-center text-blue-600 text-4xl mb-4">
                            <Target size={48} />
                        </div>
                        <h3 className="text-2xl font-semibold text-blue-700 mb-3 text-center">Our Mission</h3>
                        <p className="text-gray-700 text-center">
                            We aim to deliver dependable, high-performance lubricants, LPG, and related energy solutions to the Bangladeshi market. Our commitment will drive sustainable economic growth and champion environmental stewardship through innovative technologies and responsible business practices.
                        </p>
                    </div>

                    {/* Vision Card */}
                    <div className="bg-green-100 shadow-md rounded-lg p-6 hover:shadow-lg transition">
                        <div className="flex items-center justify-center text-green-600 text-4xl mb-4">
                            <Eye size={48} />
                        </div>
                        <h3 className="text-2xl font-semibold text-green-700 mb-3 text-center">Our Vision</h3>
                        <p className="text-gray-700 text-center">
                            We will strive to be Bangladesh&apos;s foremost energy solutions provider, offering diverse products and services that will adapt to our customers&apos; evolving needs. Doing so will foster a sustainable and thriving future for the nation.
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