
import { Target, Eye } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

export default function MissionVision() {
    return (
        <section className="py-16">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-2 gap-8">
                    <Card>
                        <CardHeader>
                            <Target className="h-10 w-10 text-blue-600 mb-2" />
                            <CardTitle>Our Mission</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p>To provide reliable, high-quality energy solutions while contributing to sustainable growth.</p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader>
                            <Eye className="h-10 w-10 text-blue-600 mb-2" />
                            <CardTitle>Our Vision</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p>To be a leading provider of energy solutions, contributing to a sustainable and prosperous Bangladesh.</p>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    );
}