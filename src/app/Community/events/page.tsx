import Header from "../../homepage/components/header";
import Footer from "../../homepage/components/footer";

export default function Events() {
    return (
        <div>
            <Header />
            <div className="max-w-7xl mx-auto p-4">
                <h1 className="text-4xl font-bold text-center my-8">Events</h1>
                <p className="text-lg text-gray-700 text-center mb-6">
                    Stay updated with our latest events and activities!
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {Array(6)
                        .fill(0)
                        .map((_, idx) => (
                            <div
                                key={idx}
                                className="p-4 border rounded-lg shadow hover:shadow-lg transition"
                            >
                                <h2 className="text-xl font-semibold mb-2">Event {idx + 1}</h2>
                                <p className="text-gray-600">Details about the event, date, and location.</p>
                            </div>
                        ))}
                </div>
            </div>
            <Footer />
        </div>
    );
}
