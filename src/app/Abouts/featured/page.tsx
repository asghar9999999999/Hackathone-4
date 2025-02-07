import Header from "../../homepage/components/header";
import Footer from "../../homepage/components/footer";

export default function Featured() {
    return (
        <div>
            <Header />
            <div className="max-w-7xl mx-auto p-4">
                <h1 className="text-4xl font-bold text-center my-8">Featured</h1>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {Array(6)
                        .fill(0)
                        .map((_, idx) => (
                            <div
                                key={idx}
                                className="p-4 border rounded-lg shadow hover:shadow-lg transition"
                            >
                                <h2 className="text-xl font-semibold mb-2">Featured Item {idx + 1}</h2>
                                <p className="text-gray-600">Description of the featured item goes here.</p>
                            </div>
                        ))}
                </div>
            </div>
            <Footer />
        </div>
    );
}

