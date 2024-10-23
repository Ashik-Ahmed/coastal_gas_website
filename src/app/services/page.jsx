"use client"

import { motion } from 'framer-motion';
import {
    Droplet,
    Truck,
    Ship,
    Globe,
    ArrowRight,
    CheckCircle
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';

const services = [
    {
        icon: Droplet,
        title: "LPG Solutions",
        description: "Comprehensive LPG processing and distribution services",
        features: [
            "State-of-the-art processing facilities",
            "Nationwide distribution network",
            "24/7 supply chain monitoring",
            "Safety-first approach"
        ],
        color: "from-blue-500 to-cyan-500"
    },
    {
        icon: Truck,
        title: "Premium Lubricants",
        description: "High-quality lubricants for all applications",
        features: [
            "Automotive lubricants",
            "Industrial oils",
            "Marine lubricants",
            "Specialty products"
        ],
        color: "from-purple-500 to-pink-500"
    },
    {
        icon: Ship,
        title: "Maritime Transport",
        description: "Reliable maritime transportation solutions",
        features: [
            "Modern vessel fleet",
            "Experienced crew",
            "Real-time tracking",
            "International standards"
        ],
        color: "from-green-500 to-emerald-500"
    },
    {
        icon: Globe,
        title: "Global Trade",
        description: "International energy product trading",
        features: [
            "Global sourcing",
            "Quality assurance",
            "Competitive pricing",
            "Reliable delivery"
        ],
        color: "from-orange-500 to-yellow-500"
    }
];

export default function ServicesPage() {
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
                        <h1 className="text-5xl font-bold mb-6">Our Services</h1>
                        <p className="text-xl text-gray-200 max-w-2xl mx-auto">
                            Comprehensive energy solutions tailored to your needs
                        </p>
                    </motion.div>
                </div>
            </section>

            <section className="py-24">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-2 gap-8">
                        {services.map((service, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <Card className="h-full">
                                    <CardHeader>
                                        <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${service.color} p-4 mb-4`}>
                                            <service.icon className="w-full h-full text-white" />
                                        </div>
                                        <CardTitle className="text-2xl mb-2">{service.title}</CardTitle>
                                        <p className="text-gray-600">{service.description}</p>
                                    </CardHeader>
                                    <CardContent>
                                        <ul className="space-y-3">
                                            {service.features.map((feature, idx) => (
                                                <li key={idx} className="flex items-center">
                                                    <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                                                    <span>{feature}</span>
                                                </li>
                                            ))}
                                        </ul>
                                        <Button className="mt-6 w-full">
                                            Learn More <ArrowRight className="ml-2 w-4 h-4" />
                                        </Button>
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