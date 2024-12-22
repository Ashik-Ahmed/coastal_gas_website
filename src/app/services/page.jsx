"use client"

import { motion } from 'framer-motion';
import {
    Droplet,
    Truck,
    Ship,
    Globe,
} from 'lucide-react';
import { Card, CardHeader, CardTitle } from '../components/ui/card';
import Image from 'next/image';


export default function ServicesPage() {

    const partnershipDetails = [
        { brand: "Vivo", year: 2019, country: "Singapore" },
        { brand: "Hyrax", year: 2021, country: "Malaysia" },
        { brand: "Mabanol", year: 2023, country: "Germany" },
    ];

    const productData = [
        { grade: "5W-40", vivo: "-", hyrax: "-", mabanol: "320" },
        { grade: "10W-40", vivo: "-", hyrax: "-", mabanol: "2,880" },
        { grade: "15W-40", vivo: "-", hyrax: "-", mabanol: "7,080" },
        { grade: "20W-50", vivo: "25,056", hyrax: "91,950", mabanol: "11,488" },
        { grade: "Total", vivo: "25,056", hyrax: "91,950", mabanol: "21,768" },
    ];

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
                        <h1 className="text-5xl font-bold mb-6">Our Expertise</h1>
                        <p className="md:text-xl text-gray-200 max-w-6xl mx-auto">
                            Reliable Energy, Seamlessly Delivered.
                        </p>
                        <p className="md:text-xl text-gray-200 max-w-6xl mx-auto">
                            Using the expertise of our sister concerns and Coastal Gas development, our goal is to power innovation, tailored solutions, safety and sustainability.
                        </p>
                    </motion.div>
                </div>
            </section>

            <section className="py-24 w-full">
                <div className="container mx-auto px-2 md:px-4">
                    <div className="grid gap-8">
                        <motion.section
                            id="lpg_process"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 1 * 0.1 }}
                            className="scroll-mt-16"
                        >
                            <Card className="h-full">
                                <CardHeader>
                                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r from-blue-500 to-cyan-500 p-4 mb-4`}>
                                        <Droplet className="w-full h-full text-white" />
                                    </div>
                                    <CardTitle className="text-2xl mb-2">LPG Processing and Distribution</CardTitle>
                                    <p className="text-gray-600">
                                        We are mapping out the LPG processing and distribution service to be built on precision, safety, and a deep commitment to excellence. From sourcing and refining to seamless delivery, we are designing every step to meet the highest industry standards. Our goal is to be the champion of clean, efficient, and reliable LPG solutions that will empower households, businesses, and industries across Bangladesh. We will focus on sustainability, driving progress while safeguarding the environment and delivering exceptional value to our consumers.
                                    </p>
                                </CardHeader>
                            </Card>
                        </motion.section>
                        <motion.section
                            id="lubricant_oil"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 2 * 0.1 }}
                            className="scroll-mt-16"
                        >
                            <Card className="h-full">
                                <CardHeader>
                                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 p-4 mb-4`}>
                                        <Truck className="w-full h-full text-white" />
                                    </div>
                                    <CardTitle className="text-2xl mb-2">Progress with Lubricating Oil Marketing</CardTitle>
                                    <p className="text-gray-600">
                                        We have already broadened our horizons through a specialized division that imports and supplies premium lubricants and lube-based engine oils. This initiative meets the growing demand for high-quality lubricants in Bangladesh, strengthened by partnerships with globally renowned brands such as Vivo (Singapore), Hyrax (Malaysia), and Mabanol (Germany). These collaborations have paved the way for the introduction of cutting-edge products, including our flagship heavy-duty engine oil, Tiger Super, which Hyrax supplies, redefining performance standards in the regional market. Our dedication to excellence ensures that every drop delivers unmatched quality and reliability to our consumers.
                                    </p>
                                    <p className="text-gray-600 mt-4">
                                        Engine oils, Tiger Super supplied Hyrax, setting a new standard in the regional market.
                                    </p>
                                    <div>
                                        <div className="container mx-auto px-4 py-8">
                                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                                <div className="relative overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:scale-105">
                                                    <Image
                                                        src="/vivo.png"
                                                        alt="Vivo supreme bike 4T"
                                                        width={500}
                                                        height={500}
                                                        loading="lazy"
                                                        className="w-full h-64 object-contain bg-gray-200 transition-transform duration-300 hover:scale-110"
                                                    />
                                                    <div className="absolute inset-0 bg-gradient-to-t from-blue-500/60 to-transparent opacity-0 transition-opacity duration-300 hover:opacity-100">
                                                    </div>
                                                </div>
                                                <div className="relative overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:scale-105">
                                                    <Image
                                                        src="/hyrax.png"
                                                        alt="Tiger Super"
                                                        width={500}
                                                        height={500}
                                                        loading="lazy"
                                                        className="w-full h-64 object-contain bg-gray-200 transition-transform duration-300 hover:scale-110"
                                                    />
                                                    <div className="absolute inset-0 bg-gradient-to-t from-blue-500/60 to-transparent opacity-0 transition-opacity duration-300 hover:opacity-100">
                                                    </div>
                                                </div>
                                                <div className="relative overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:scale-105">
                                                    <Image
                                                        src="/mabanol.png"
                                                        alt="Mabanol"
                                                        width={500}
                                                        height={500}
                                                        loading="lazy"
                                                        className="w-full h-64 object-contain bg-gray-200 transition-transform duration-300 hover:scale-110"
                                                    />
                                                    <div className="absolute inset-0 bg-gradient-to-t from-blue-500/60 to-transparent opacity-0 transition-opacity duration-300 hover:opacity-100">
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="p-6 font-sans">
                                            {/* Company Partnership Details */}
                                            <section className="mb-10">
                                                <h2 className="text-xl font-bold mb-4">Company Partnership Details</h2>
                                                <table className="w-full border-collapse border border-gray-300 text-left">
                                                    <thead>
                                                        <tr className="bg-blue-200">
                                                            <th className="border border-gray-300 px-4 py-2">Brand</th>
                                                            <th className="border border-gray-300 px-4 py-2">Year of Agreement</th>
                                                            <th className="border border-gray-300 px-4 py-2">Country of Origin</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {partnershipDetails.map((row, index) => (
                                                            <tr key={index} className="hover:bg-gray-50">
                                                                <td className="border border-gray-300 px-4 py-2">{row.brand}</td>
                                                                <td className="border border-gray-300 px-4 py-2">{row.year}</td>
                                                                <td className="border border-gray-300 px-4 py-2">{row.country}</td>
                                                            </tr>
                                                        ))}
                                                    </tbody>
                                                </table>
                                            </section>

                                            {/* Product Variety & Quantity Supplied */}
                                            <section>
                                                <h2 className="text-xl font-bold mb-4">Product Variety & Quantity Supplied</h2>
                                                <p className="mb-4">
                                                    Through our specialized division, we provide a variety of engine oil
                                                    grades from these renowned brands tailored to meet diverse automotive
                                                    and industrial requirements. The table below outlines the available
                                                    types and quantities:
                                                </p>
                                                <table className="w-full border-collapse border border-gray-300 text-left">
                                                    <thead>
                                                        <tr className="bg-blue-200">
                                                            <th className="border border-gray-300 px-2 md:px-4 py-2">SAE Grade</th>
                                                            <th className="border border-gray-300 px-2 md:px-4 py-2">Vivo (Liters)</th>
                                                            <th className="border border-gray-300 px-2 md:px-4 py-2">Hyrax (Liters)</th>
                                                            <th className="border border-gray-300 px-2 md:px-4 py-2">Mabanol (Liters)</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {productData.map((row, index) => (
                                                            <tr key={index} className="hover:bg-gray-50">
                                                                <td className="border border-gray-300 px-2 md:px-4 py-2">{row.grade}</td>
                                                                <td className="border border-gray-300 px-2 md:px-4 py-2">{row.vivo}</td>
                                                                <td className="border border-gray-300 px-2 md:px-4 py-2">{row.hyrax}</td>
                                                                <td className="border border-gray-300 px-2 md:px-4 py-2">{row.mabanol}</td>
                                                            </tr>
                                                        ))}
                                                    </tbody>
                                                </table>
                                            </section>
                                        </div>
                                    </div>
                                </CardHeader>
                            </Card>
                        </motion.section>

                        <motion.section
                            id="shipping_and_logistics"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 3 * 0.1 }}
                            className="scroll-mt-16"
                        >
                            <Card className="h-full">
                                <CardHeader>
                                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r from-green-500 to-emerald-500 p-4 mb-4`}>
                                        <Ship className="w-full h-full text-white" />
                                    </div>
                                    <CardTitle className="text-2xl mb-2">Shipping & Logistics</CardTitle>
                                    <p className="text-gray-600">
                                        With the help of our sister concern, we offer comprehensive shipping solutions, especially documentation and specialized shipping management. Supported by advanced Fender services of our other wings, we can be crucial in providing efficient, secure, and timely transportation. Our capabilities are further strengthened by assets such as the MT Pride of Shah Jalal, which currently transports refined oil for Padma Oil Company, showcasing our dedication to excellence in shipping operations.
                                    </p>
                                </CardHeader>
                            </Card>
                        </motion.section>
                        <motion.section
                            id="carbon_credit_trading"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 3 * 0.1 }}
                            className="scroll-mt-16"
                        >
                            <Card className="h-full">
                                <CardHeader>
                                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r from-orange-500 to-yellow-500 p-4 mb-4`}>
                                        <Globe className="w-full h-full text-white" />
                                    </div>
                                    <CardTitle className="text-2xl mb-2">Carbon Credit Trading</CardTitle>
                                    <p className="text-gray-600">
                                        Coastal Gas envisions becoming a key player in carbon credit trading, aligning economic growth with environmental responsibility. By planning to enhance our processes with strategic expertise, we aim to participate in global carbon markets, facilitating the purchase, sale, and exchange of carbon credits. Carbon credit trading allows industries to offset carbon emissions by purchasing credits from projects that reduce or remove greenhouse gases, such as renewable energy initiatives or reforestation projects. This system enables businesses to meet their environmental goals while promoting sustainable practices. Through this approach, we aim to contribute to a greener, more sustainable future for Bangladesh and the global community.
                                    </p>
                                </CardHeader>
                            </Card>
                        </motion.section>
                    </div>
                </div>
            </section>
        </>
    );
}