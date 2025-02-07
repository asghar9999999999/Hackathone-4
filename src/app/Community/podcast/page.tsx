import Header from "../../homepage/components/header";
import Footer from "../../homepage/components/footer";

export default function Podcast() {
    return (
        <div>
            <Header />
            <div className="max-w-7xl mx-auto p-4">
                <h1 className="text-4xl font-bold text-center my-8">Podcast</h1>
                <p className="text-lg text-gray-700 text-center mb-6">
                    Tune in to our latest episodes!
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {Array(6)
                        .fill(0)
                        .map((_, idx) => (
                            <div
                                key={idx}
                                className="p-4 border rounded-lg shadow hover:shadow-lg transition"
                            >
                                <h2 className="text-xl font-semibold mb-2">Episode {idx + 1}</h2>
                                <p className="text-gray-600">A brief description of the episode content.</p>
                                <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                                    Listen Now
                                </button>
                            </div>
                        ))}
                </div>
            </div>
            <Footer />
        </div>
    );
}
