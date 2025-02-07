import React from 'react';

const AboutPage: React.FC = () => {
    return (
        <div className="bg-gray-50 min-h-screen">
            <header className="bg-blue-600 text-white py-6 text-center">
                <h1 className="text-3xl font-bold">About Us</h1>
            </header>
            <main className="max-w-4xl mx-auto p-6">
                <section className="bg-white p-6 shadow-lg rounded-lg mb-6">
                    <h2 className="text-blue-600 text-2xl font-semibold mb-4">Welcome to Our Car Rental Service</h2>
                    <p className="text-gray-700">
                        At <strong>Morent Car Rental</strong>, we pride ourselves on delivering exceptional service and a wide range of vehicles to meet your travel needs. Whether your looking for a compact car for city drives, an SUV for a family trip, or a luxury car for special occasions, we have you covered.
                    </p>
                </section>
                <section className="bg-white p-6 shadow-lg rounded-lg mb-6">
                    <h2 className="text-blue-600 text-2xl font-semibold mb-4">Our Mission</h2>
                    <p className="text-gray-700">
                        Our mission is to make car rentals easy, affordable, and reliable for everyone. We are committed to ensuring our customers experience comfort and convenience every step of the way.
                    </p>
                </section>
                <section className="bg-white p-6 shadow-lg rounded-lg mb-6">
                    <h2 className="text-blue-600 text-2xl font-semibold mb-4">Why Choose Us?</h2>
                    <ul className="list-disc list-inside text-gray-700">
                        <li>A diverse fleet of well-maintained vehicles.</li>
                        <li>Affordable pricing with no hidden fees.</li>
                        <li>24/7 customer support to assist you anytime.</li>
                        <li>Easy booking process via our website or app.</li>
                    </ul>
                </section>
                <section className="bg-white p-6 shadow-lg rounded-lg">
                    <h2 className="text-blue-600 text-2xl font-semibold mb-4">Contact Us</h2>
                    <p className="text-gray-700">
                        Have questions or need assistance? Reach out to us at <a href="mailto:student.giaic@gmail.com" className="text-blue-500 underline">student.giaic@gmail.com</a> or call us at <strong>+92 123 456 789</strong>. We are here to help!
                    </p>
                </section>
            </main>
        </div>
    );
};

export default AboutPage;
