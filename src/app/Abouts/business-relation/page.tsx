import Header from "../../homepage/components/header";
import Footer from "../../homepage/components/footer";

export default function BusinessRelation() {
    return (
        <div>
            <Header />
            <div className="max-w-7xl mx-auto p-4">
                <h1 className="text-4xl font-bold text-center my-8">Business Relation</h1>
                <div className="space-y-6 text-gray-700">
                    <section className="p-4 border rounded-lg shadow">
                        <h2 className="text-2xl font-semibold mb-2">Building Strong Relationships</h2>
                        <p>We believe in fostering long-term relationships with our partners and clients.</p>
                    </section>
                    <section className="p-4 border rounded-lg shadow">
                        <h2 className="text-2xl font-semibold mb-2">Our Approach</h2>
                        <p>Our approach focuses on transparency, collaboration, and mutual success.</p>
                    </section>
                </div>
            </div>
            <Footer />
        </div>
    );
}
