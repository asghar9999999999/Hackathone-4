import Header from "../../homepage/components/header";
import Footer from "../../homepage/components/footer";
export default function Partnership() {
    return (
        <div>
            <Header />
            <div className="max-w-7xl mx-auto p-4">
                <h1 className="text-4xl font-bold text-center my-8">Partnership</h1>
                <div className="space-y-6 text-gray-700">
                    <section className="p-4 border rounded-lg shadow">
                        <h2 className="text-2xl font-semibold mb-2">Why Partner With Us?</h2>
                        <p>Join hands with us for mutual growth and success.</p>
                    </section>
                    <section className="p-4 border rounded-lg shadow">
                        <h2 className="text-2xl font-semibold mb-2">Benefits of Partnership</h2>
                        <ul className="list-disc ml-6">
                            <li>Access to a large customer base</li>
                            <li>Collaborative marketing efforts</li>
                            <li>Shared growth opportunities</li>
                        </ul>
                    </section>
                </div>
            </div>
            <Footer />
        </div>
    );
}
