import Header from "../../homepage/components/header";
import Footer from "../../homepage/components/footer";

export default function Blog() {
    return (
        <div>
            <Header />
            <div className="max-w-7xl mx-auto p-4">
                <h1 className="text-4xl font-bold text-center my-8">Blog</h1>
                <p className="text-lg text-gray-700 text-center mb-6">
                    Read our latest articles and insights!
                </p>
                <div className="space-y-6">
                    {Array(6)
                        .fill(0)
                        .map((_, idx) => (
                            <article
                                key={idx}
                                className="p-4 border rounded-lg shadow hover:shadow-lg transition"
                            >
                                <h2 className="text-2xl font-semibold mb-2">Blog Post Title {idx + 1}</h2>
                                <p className="text-gray-600">
                                    A short snippet or introduction to the blog post content.
                                </p>
                            </article>
                        ))}
                </div>
            </div>
            <Footer />
        </div>
    );
}
