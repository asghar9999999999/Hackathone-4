import React from 'react';

const PrivacyPolicy: React.FC = () => {
    return (
        <div className="bg-gray-50 min-h-screen">
            <header className="bg-blue-600 text-white py-6 text-center">
                <h1 className="text-3xl font-bold">Privacy Policy</h1>
            </header>
            <main className="max-w-4xl mx-auto p-6">
                <section className="bg-white p-6 shadow-lg rounded-lg mb-6">
                    <h2 className="text-blue-600 text-2xl font-semibold mb-4">Introduction</h2>
                    <p className="text-gray-700">
                        At <strong>Morent Car Rental</strong>, your privacy is our priority. This Privacy Policy explains how we collect, use, and protect your information.
                    </p>
                </section>
                <section className="bg-white p-6 shadow-lg rounded-lg mb-6">
                    <h2 className="text-blue-600 text-2xl font-semibold mb-4">Information We Collect</h2>
                    <p className="text-gray-700">
                        We collect personal information such as your name, email, phone number, and payment details to provide our services efficiently.
                    </p>
                </section>
                <section className="bg-white p-6 shadow-lg rounded-lg mb-6">
                    <h2 className="text-blue-600 text-2xl font-semibold mb-4">How We Use Your Information</h2>
                    <ul className="list-disc list-inside text-gray-700">
                        <li>To process bookings and payments.</li>
                        <li>To improve our services and customer support.</li>
                        <li>To send updates and promotional offers.</li>
                    </ul>
                </section>
                <section className="bg-white p-6 shadow-lg rounded-lg">
                    <h2 className="text-blue-600 text-2xl font-semibold mb-4">Contact Us</h2>
                    <p className="text-gray-700">
                        For any questions about this Privacy Policy, contact us at <a href="mailto:student.giaic@gmail.com" className="text-blue-500 underline">student.giaic@gmail.com</a>.
                    </p>
                </section>
            </main>
        </div>
    );
};

export default PrivacyPolicy;