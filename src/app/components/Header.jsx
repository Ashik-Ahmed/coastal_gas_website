"use client"

import { useState } from 'react';
import Link from 'next/link';
import { Droplet, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from './ui/button';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const navItems = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'Our Foundation' },
    { href: '/services', label: 'Expertise' },
    { href: '/vessel', label: 'Vessel' }
];

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const currentPath = usePathname();

    return (
        <header className="sticky top-0 left-0 w-full bg-blue-900 backdrop-blur-md shadow-sm z-50">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between h-16">
                    <Link href="/" className="flex items-center space-x-2 px-4 py-2">
                        <Image src="/coastal_gas_logo.png" alt="Coastal Gas Logo" width={255} height={37} />
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center space-x-8">
                        {navItems.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={`text-white hover:text-blue-600 transition-colors p-2 hover:bg-white ${currentPath === item.href ? 'font-bold border-b' : ''}`}
                            >
                                {item.label}
                            </Link>
                        ))}
                        <Button><Link href="/contact">Let&apos;s Connect</Link></Button>
                    </nav>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden p-2"
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label="Toggle menu"
                    >
                        {isOpen ? (
                            <X className="h-6 w-6 text-white" />
                        ) : (
                            <Menu className="h-6 w-6 text-white" />
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Navigation */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-blue-900 border-t"
                    >
                        <nav className="container mx-auto px-4 py-4 flex flex-col space-y-4">
                            {navItems.map((item) => (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className={`text-white hover:text-blue-600 transition-colors w-fit p-2 hover:bg-white ${currentPath === item.href ? 'font-bold border-b' : ''}`}
                                    onClick={() => setIsOpen(false)}
                                >
                                    {item.label}
                                </Link>
                            ))}
                            <Button className="w-full"><Link href="/contact">Request a Quote</Link></Button>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}