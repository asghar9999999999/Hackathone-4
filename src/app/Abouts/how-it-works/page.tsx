import Header from "../../homepage/components/header";
import Footer from "../../homepage/components/footer";

export default function HowItWorks() {
    return (
        <div>
            <Header />
            <div className="max-w-7xl mx-auto p-4">
                <h1 className="text-4xl font-bold text-center my-8">How It Works</h1>
                <div className="space-y-6 text-gray-700">
                    <section className="p-4 border rounded-lg shadow">
                        <h2 className="text-2xl font-semibold mb-2">Step 1: Explore</h2>
                        <p>Browse through our extensive collection of options tailored to meet your needs.</p>
                    </section>
                    <section className="p-4 border rounded-lg shadow">
                        <h2 className="text-2xl font-semibold mb-2">Step 2: Select</h2>
                        <p>Choose the product or service that best suits your requirements.</p>
                    </section>
                    <section className="p-4 border rounded-lg shadow">
                        <h2 className="text-2xl font-semibold mb-2">Step 3: Confirm</h2>
                        <p>Confirm your selection, and we’ll take care of the rest!</p>
                    </section>
                </div>
            </div>
            <Footer />
        </div>
    );
}
