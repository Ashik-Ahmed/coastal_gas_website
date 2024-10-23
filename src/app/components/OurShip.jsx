import Image from 'next/image';
import { Card, CardContent } from './ui/card';

export default function OurShip() {
    return (
        <section id="ship" className="py-16 bg-gray-100">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-8">Our Vessel: MT Pride of Shah Jalal</h2>
                <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div className="grid grid-cols-2 gap-4">
                        <Image
                            src="https://source.unsplash.com/random/600x400/?oil,tanker"
                            alt="MT Pride of Shah Jalal - Full View"
                            width={600}
                            height={400}
                            className="rounded-lg"
                        />
                        <Image
                            src="https://source.unsplash.com/random/600x400/?ship,deck"
                            alt="MT Pride of Shah Jalal - Deck"
                            width={600}
                            height={400}
                            className="rounded-lg"
                        />
                        <Image
                            src="https://source.unsplash.com/random/600x400/?ship,bridge"
                            alt="MT Pride of Shah Jalal - Bridge"
                            width={600}
                            height={400}
                            className="rounded-lg"
                        />
                        <Image
                            src="https://source.unsplash.com/random/600x400/?ship,engine"
                            alt="MT Pride of Shah Jalal - Engine Room"
                            width={600}
                            height={400}
                            className="rounded-lg"
                        />
                    </div>
                    <div>
                        <Card>
                            <CardContent className="p-6">
                                <h3 className="text-2xl font-bold mb-4">Vessel Details</h3>
                                <ul className="space-y-2">
                                    <li><strong>Length:</strong> 120 meters</li>
                                    <li><strong>Breadth:</strong> 20 meters</li>
                                    <li><strong>Draft:</strong> 8 meters</li>
                                    <li><strong>Capacity:</strong> 10,000 DWT</li>
                                    <li><strong>Type:</strong> Oil/Chemical Tanker</li>
                                </ul>
                                <blockquote className="mt-6 border-l-4 border-blue-600 pl-4 italic">
                                    "Ensuring safe and efficient transportation of refined oil across Bangladesh."
                                </blockquote>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </section>
    );
}