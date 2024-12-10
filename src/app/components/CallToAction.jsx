import Link from "next/link";
import { Button } from "./ui/button";


export default function CallToAction() {
    return (
        <section className="py-16 bg-blue-600 text-white">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-3xl font-bold mb-4">We Are Preparing to Power Your Future</h2>
                <p className="text-xl mb-8">We are building the foundation for innovative energy solutions. Stay connected to see how we can meet your energy needs soon.</p>
                <Button size="lg" variant="secondary" asChild>
                    <Link href="/contact">Get in Touch</Link>
                </Button>
            </div>
        </section>
    );
}