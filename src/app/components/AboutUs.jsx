import Image from 'next/image';
import { Card, CardContent } from './ui/card';

export default function AboutUs() {
    return (
        <section id="about" className="py-16 bg-gray-100">
            <div className="container mx-auto px-4">
                {/* <h2 className="text-3xl font-bold text-center mb-8">About Us</h2> */}
                <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div>
                        <p className="text-lg mb-6">
                            Coastal Gas Ltd. was founded in 2010 with the mission to meet the growing demand for high-quality energy solutions in Bangladesh. We are committed to sustainable growth through innovative solutions.
                        </p>
                        <div className="grid grid-cols-3 gap-4">
                            <Card>
                                <CardContent className="p-4 text-center">
                                    <h3 className="text-2xl font-bold text-blue-600">14+</h3>
                                    <p>Years of Service</p>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardContent className="p-4 text-center">
                                    <h3 className="text-2xl font-bold text-blue-600">500+</h3>
                                    <p>Satisfied Clients</p>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardContent className="p-4 text-center">
                                    <h3 className="text-2xl font-bold text-blue-600">1000+</h3>
                                    <p>Success History</p>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                    <div className="relative h-64 md:h-auto">
                        <Image
                            src="/oil_refinery.jpg"
                            alt="Coastal Gas Ltd. Facility"
                            width={800}
                            height={600}
                            objectFit="cover"
                            className="rounded-lg"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}