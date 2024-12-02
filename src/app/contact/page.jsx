"use client"

import { motion } from 'framer-motion';
import {
    MapPin,
    Phone,
    Mail,
    Clock,
    Send
} from 'lucide-react';
import { Card, CardContent } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Button } from '../components/ui/button';
import { Textarea } from '../components/ui/textarea';

const contactInfo = [
    {
        icon: MapPin,
        title: "Visit Us",
        details: "BTMC Bhaban (7th Floor), 7-9 Kawran Bazar, Dhaka- 1217, Bangladesh"
    },
    {
        icon: Phone,
        title: "Call Us",
        details: "+880-2-8189244, +880-2-8189321, +880-2-58155623"
    },
    {
        icon: Mail,
        title: "Email Us",
        details: "info@coastalgas.com.bd"
    },
    {
        icon: Clock,
        title: "Working Hours",
        details: "Sun - Thu: 9:30 AM - 5:30 PM"
    }
];

export default function ContactPage() {
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
                        <h1 className="text-5xl font-bold mb-6">Contact Us</h1>
                        <p className="text-xl text-gray-200 max-w-2xl mx-auto">
                            Get in touch with our team for any inquiries or support
                        </p>
                    </motion.div>
                </div>
            </section>

            <section className="py-24">
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-12">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-3xl font-bold mb-8">Send Us a Message</h2>
                            <Card>
                                <CardContent className="p-6">
                                    <form className="space-y-6">
                                        <div className="grid md:grid-cols-2 gap-4">
                                            <div>
                                                <label className="block text-sm font-medium mb-2">First Name</label>
                                                <Input placeholder="John" className="placeholder:text-gray-400" />
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium mb-2">Last Name</label>
                                                <Input placeholder="Doe" className="placeholder:text-gray-400" />
                                            </div>
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium mb-2">Email</label>
                                            <Input type="email" placeholder="john@example.com" className="placeholder:text-gray-400" />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium mb-2">Message</label>
                                            <Textarea placeholder="Your message..." className="h-32 placeholder:text-gray-400" />
                                        </div>
                                        <Button className="w-full">
                                            Send Message <Send className="ml-2 w-4 h-4" />
                                        </Button>
                                    </form>
                                </CardContent>
                            </Card>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="space-y-6"
                        >
                            <h2 className="text-3xl font-bold mb-8">Contact Information</h2>
                            <div className="grid sm:grid-cols-2 gap-6">
                                {contactInfo.map((info, index) => (
                                    <Card key={index}>
                                        <CardContent className="p-6">
                                            <info.icon className="w-8 h-8 text-blue-600 mb-4" />
                                            <h3 className="text-lg font-semibold mb-2">{info.title}</h3>
                                            <p className="text-gray-600">{info.details}</p>
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>

                            <Card className="mt-6">
                                <CardContent className="p-6">
                                    <h3 className="text-lg font-semibold mb-4">Our Location</h3>
                                    <div className="aspect-video rounded-lg overflow-hidden">
                                        <iframe
                                            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3651.9095685543075!2d90.3914651!3d23.750604!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b897f9400001%3A0x7d74993af65c7dad!2sCarbon%20Holdings%20Ltd!5e0!3m2!1sen!2sbd!4v1733134856050!5m2!1sen!2sbd"
                                            width="100%"
                                            height="100%"
                                            style={{ border: 0 }}
                                            allowFullScreen=""
                                            loading="lazy"
                                            referrerPolicy="no-referrer-when-downgrade"
                                        ></iframe>
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    </div>
                </div>
            </section>
        </>
    );
}