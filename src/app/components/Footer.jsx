import Link from 'next/link';
import { Facebook, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-gray-800 text-white py-12">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-4 gap-8">
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li><Link href="/" className="hover:text-blue-400">Home</Link></li>
                            <li><Link href="#about" className="hover:text-blue-400">About Us</Link></li>
                            <li><Link href="#services" className="hover:text-blue-400">Services</Link></li>
                            <li><Link href="#ship" className="hover:text-blue-400">Our Ship</Link></li>
                            <li><Link href="#news" className="hover:text-blue-400">News</Link></li>
                            <li><Link href="#contact" className="hover:text-blue-400">Contact Us</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Contact Information</h3>
                        <ul className="space-y-2">
                            <li className="flex items-center">
                                <MapPin className="h-5 w-5 mr-2" />
                                123 Energy Street, Dhaka, Bangladesh
                            </li>
                            <li className="flex items-center">
                                <Phone className="h-5 w-5 mr-2" />
                                +880 1234 567890
                            </li>
                            <li className="flex items-center">
                                <Mail className="h-5 w-5 mr-2" />
                                info@coastalgas.com
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
                        <div className="flex space-x-4">
                            <a href="#" className="hover:text-blue-400"><Facebook className="h-6 w-6" /></a>
                            <a href="#" className="hover:text-blue-400"><Linkedin className="h-6 w-6" /></a>
                        </div>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
                        <p className="mb-4">Stay updated with our latest news and offers.</p>
                        <form className="flex">
                            <input
                                type="email"
                                placeholder="Your email"
                                className="flex-grow px-3 py-2 text-gray-700 rounded-l-md focus:outline-none"
                            />
                            <button
                                type="submit"
                                className="bg-blue-600 text-white px-2 py-2 rounded-r-md hover:bg-blue-700 focus:outline-none"
                            >
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>
                <div className="mt-8 pt-8 border-t border-gray-700 text-center">
                    <p>&copy; 2024 Coastal Gas Ltd. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
}