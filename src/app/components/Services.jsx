"use client"

import { motion } from 'framer-motion';
import { Droplet, Truck, Ship, Globe, ChevronRight } from 'lucide-react';
import { Card } from './ui/card';
import Link from 'next/link';

const services = [
    {
        title: 'LPG Processing and Distribution',
        description: 'State-of-the-art LPG processing and nationwide distribution network.',
        icon: Droplet,
        link: "/services#lpg_process",
        color: 'from-blue-500 to-cyan-500'
    },
    {
        title: 'Progress with Lubricating Oil Marketing',
        description: 'High-quality lubricants for automotive and industrial applications.',
        icon: Truck,
        link: "/services#lubricant_oil",
        color: 'from-purple-500 to-pink-500'
    },
    {
        title: 'Shipping & Logistics',
        description: 'Efficient transportation with our modern vessel fleet.',
        icon: Ship,
        link: "/services#shipping_and_logistics",
        color: 'from-green-500 to-emerald-500'
    },
    {
        title: 'Carbon Credit Trading',
        description: 'International sourcing and distribution of energy products.',
        icon: Globe,
        link: "/services#carbon_credit_trading",
        color: 'from-orange-500 to-yellow-500'
    }
];

export default function Services() {
    return (
        <section id="services" className="py-24 bg-gray-50">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-blue-900 text-4xl font-bold mb-4">Key Services</h2>
                    {/* <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Comprehensive energy solutions tailored to meet your needs
                    </p> */}
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                        >
                            <Card className="service-card h-full p-6 group hover:border-l-8 hover:border-blue-600">
                                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${service.color} p-4 mb-6`}>
                                    <service.icon className="w-full h-full text-white" />
                                </div>
                                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                                {/* <p className="text-gray-600 mb-4">{service.description}</p> */}
                                <Link href={service.link} className="flex items-center text-blue-600 group-hover:text-blue-700">
                                    Learn More <ChevronRight className="ml-2 w-4 h-4" />
                                </Link>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}