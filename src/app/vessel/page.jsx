"use client"

import { motion } from 'framer-motion';
import {
    Anchor,
    Ship,
    Ruler,
    Scale,
    Engine,
    Shield,
    DollarSign,
    CheckCircle2
} from 'lucide-react';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';

const specifications = [
    { icon: Ruler, label: "Length", value: "63.80 M" },
    { icon: Ruler, label: "Breadth", value: "10.10 M" },
    { icon: Anchor, label: "Draft", value: "4.5 M" },
    { icon: Scale, label: "Gross Tonnage", value: "492" },
    { icon: Ship, label: "Type", value: "Oil Tanker" },
    { icon: Engine, label: "Engine", value: "China Diesel (2Nos)" },
    { icon: Engine, label: "Horse Power", value: "720X2=1440 BHP" },
    // { icon: Shield, label: "Classification", value: "RINA" }
];

const features = [
    "Steel Body Construction",
    "Double Hull Design",
    "Double Bottom Safety",
    "1250 MT Capacity",
    "Advanced Navigation Systems",
    "Under the classification of IR"
];

export default function VesselPage() {
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
                        <h1 className="text-5xl font-bold mb-6">Our Vessel</h1>
                        <p className="text-xl text-gray-200 max-w-3xl mx-auto">
                            Coastal Gas Limited proudly owns the MT Pride of Shah Jalal, a vessel currently dedicated to transporting refined oil on behalf of Padma Oil Company Ltd. This strategic asset underscores our capability to manage critical logistics efficiently, ensuring timely and secure delivery of energy resources.
                        </p>
                    </motion.div>
                </div>
            </section>

            <section className="py-16">
                <div className="container mx-auto px-4">
                    <Tabs defaultValue="gallery" className="space-y-8">
                        <TabsList className="grid w-full md:w-[400px] grid-cols-2 mx-auto">
                            <TabsTrigger value="gallery">Gallery</TabsTrigger>
                            <TabsTrigger value="specs">Specifications</TabsTrigger>
                        </TabsList>

                        <TabsContent value="gallery" className="space-y-8">
                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    className="relative h-[300px] rounded-xl overflow-hidden"
                                >
                                    <Image
                                        src="/ship.jpg"
                                        alt="MT Pride of Shah Jalal - Front View"
                                        layout="fill"
                                        objectFit="cover"
                                        className="transition-transform hover:scale-110 duration-500"
                                    />
                                </motion.div>
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    className="relative h-[300px] rounded-xl overflow-hidden"
                                >
                                    <Image
                                        src="/ship2.jpg"
                                        alt="MT Pride of Shah Jalal - Side View"
                                        layout="fill"
                                        objectFit="cover"
                                        className="transition-transform hover:scale-110 duration-500"
                                    />
                                </motion.div>
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    className="relative h-[300px] rounded-xl overflow-hidden"
                                >
                                    <Image
                                        src="/ship3.jpg"
                                        alt="MT Pride of Shah Jalal - Deck View"
                                        layout="fill"
                                        objectFit="cover"
                                        className="transition-transform hover:scale-110 duration-500"
                                    />
                                </motion.div>
                            </div>
                        </TabsContent>

                        <TabsContent value="specs">
                            <div className="grid md:grid-cols-2 gap-8">
                                <Card>
                                    <CardHeader>
                                        <CardTitle className="flex items-center gap-2">
                                            <Ship className="h-6 w-6 text-blue-600" />
                                            Technical Specifications
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="grid grid-cols-2 gap-4">
                                            {specifications.map((spec, index) => (
                                                <div key={index} className="flex items-center gap-2">
                                                    {/* <spec.icon className="h-5 w-5 text-blue-600" /> */}
                                                    <div>
                                                        <p className="text-sm text-gray-500">{spec.label}</p>
                                                        <p className="font-semibold">{spec.value}</p>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </CardContent>
                                </Card>

                                <Card>
                                    <CardHeader>
                                        <CardTitle className="flex items-center gap-2">
                                            <CheckCircle2 className="h-6 w-6 text-blue-600" />
                                            Key Features
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="grid grid-cols-2 gap-4">
                                            {features.map((feature, index) => (
                                                <div key={index} className="flex items-center gap-2">
                                                    <CheckCircle2 className="h-5 w-5 text-green-500" />
                                                    <p>{feature}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>

                            <Card className="mt-8">
                                <CardHeader>
                                    <CardTitle className="flex items-center gap-2">
                                        <DollarSign className="h-6 w-6 text-blue-600" />
                                        Vessel Value
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-2xl font-bold text-blue-600">12 Crore BDT</p>
                                    <p className="text-gray-600 mt-2">
                                        Our vessel represents a significant investment in Bangladesh&#39;s maritime infrastructure,
                                        equipped with state-of-the-art technology and safety features.
                                    </p>
                                </CardContent>
                            </Card>
                        </TabsContent>
                    </Tabs>
                </div>
            </section>
        </>
    );
}

