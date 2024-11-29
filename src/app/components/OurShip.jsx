import Image from 'next/image';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { ChevronRight } from 'lucide-react';
import Link from 'next/link';

export default function OurShip() {
    return (
        <section id="ship" className="py-16 bg-gray-100">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-8">Our Vessel: MT Pride of Shah Jalal</h2>
                <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div className="grid grid-cols-2 gap-4">
                        <Image
                            src="/vessel/mt_pride_shah_jalal_1.jpg"
                            alt="MT Pride of Shah Jalal - Full View"
                            width={600}
                            height={400}
                            className="rounded-lg"
                        />
                        <Image
                            src="/vessel/mt_pride_shah_jalal_2.jpg"
                            alt="MT Pride of Shah Jalal - Deck"
                            width={600}
                            height={400}
                            className="rounded-lg"
                        />
                        <Image
                            src="/vessel/mt_pride_shah_jalal_5.jpeg"
                            alt="MT Pride of Shah Jalal - Bridge"
                            width={600}
                            height={400}
                            className="rounded-lg"
                        />
                        <Image
                            src="/vessel/mt_pride_shah_jalal_4.jpeg"
                            alt="MT Pride of Shah Jalal - Engine Room"
                            width={600}
                            height={400}
                            className="rounded-lg"
                        />
                    </div>
                    <div>
                        <Card>
                            <CardContent className="p-6">
                                {/* <h3 className="text-2xl font-bold mb-4">Vessel Details</h3> */}
                                <ul className="space-y-2">
                                    <li><strong>Length:</strong> 63.80 M</li>
                                    <li><strong>Breadth:</strong> 10.10 M</li>
                                    <li><strong>Draft:</strong> 4.5 M</li>
                                    <li><strong>Capacity:</strong> 1250 MT</li>
                                    <li><strong>Type:</strong> Oil Tanker</li>
                                </ul>
                                <blockquote className="mt-6 border-l-4 border-blue-600 pl-4 italic">
                                    &quot; Ensuring safe and efficient transportation of refined oil across Bangladesh.&quot;
                                </blockquote>

                                <Button className="mt-6 bg-blue-900"> <Link href="/vessel">See Details</Link> <ChevronRight className="ml-2 w-4 h-4" /> </Button>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </section>
    );
}