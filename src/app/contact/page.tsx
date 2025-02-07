import React from 'react';

const ContactPage: React.FC = () => {
    return (
        <div className="bg-gray-50 min-h-screen">
            <header className="bg-blue-600 text-white py-6 text-center">
                <h1 className="text-3xl font-bold">Contact Us</h1>
            </header>
            <main className="max-w-4xl mx-auto p-6">
                <section className="bg-white p-6 shadow-lg rounded-lg mb-6">
                    <h2 className="text-blue-600 text-2xl font-semibold mb-4">Get in Touch</h2>
                    <p className="text-gray-700">
                        We would love to hear from you! Whether you have questions, need assistance, or want to provide feedback, feel free to reach out to us.
                    </p>
                </section>
                <section className="bg-white p-6 shadow-lg rounded-lg mb-6">
                    <h2 className="text-blue-600 text-2xl font-semibold mb-4">Contact Information</h2>
                    <ul className="text-gray-700">
                        <li><strong>Email:</strong> <a href="mailto:student.giaic@gmail.com" className="text-blue-500 underline">student.giaic@gmail.com</a></li>
                        <li><strong>Phone:</strong> +92 123-456-789</li>
                        <li><strong>Address:</strong> 123 Main Street, Karachi, Pakistan</li>
                    </ul>
                </section>
                <section className="bg-white p-6 shadow-lg rounded-lg">
                    <h2 className="text-blue-600 text-2xl font-semibold mb-4">Send Us a Message</h2>
                    <form className="space-y-4">
                        <div>
                            <label className="block text-gray-700 font-medium mb-2" htmlFor="name">Name</label>
                            <input
                                type="text"
                                id="name"
                                className="w-full border border-gray-300 rounded-lg p-2 focus:ring focus:ring-blue-200"
                                placeholder="Your Name"
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700 font-medium mb-2" htmlFor="email">Email</label>
                            <input
                                type="email"
                                id="email"
                                className="w-full border border-gray-300 rounded-lg p-2 focus:ring focus:ring-blue-200"
                                placeholder="Your Email"
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700 font-medium mb-2" htmlFor="message">Message</label>
                            <textarea
                                id="message"
                                className="w-full border border-gray-300 rounded-lg p-2 focus:ring focus:ring-blue-200"
                                placeholder="Your Message"
                                rows={5}
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 focus:ring focus:ring-blue-300"
                        >
                            Send Message
                        </button>
                    </form>
                </section>
            </main>
        </div>
    );
};

export default ContactPage;
