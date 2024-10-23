import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

const newsArticles = [
    {
        title: 'Coastal Gas Ltd. Expands LPG Distribution Network',
        date: '2024-03-15',
        image: 'https://source.unsplash.com/random/800x600/?gas,station'
    },
    {
        title: 'New Lubricant Product Line Launched',
        date: '2024-02-28',
        image: 'https://source.unsplash.com/random/800x600/?oil,lubricant'
    },
    {
        title: 'Coastal Gas Receives Safety Excellence Award',
        date: '2024-01-10',
        image: 'https://source.unsplash.com/random/800x600/?award,ceremony'
    }
];

export default function News() {
    return (
        <section id="news" className="py-16 bg-gray-100">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-8">Latest News and Updates</h2>
                <div className="grid md:grid-cols-3 gap-6">
                    {newsArticles.map((article, index) => (
                        <Card key={index}>
                            <Image
                                src={article.image}
                                alt={article.title}
                                width={800}
                                height={600}
                                className="rounded-t-lg"
                            />
                            <CardHeader>
                                <CardTitle>{article.title}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-sm text-gray-500">{article.date}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}