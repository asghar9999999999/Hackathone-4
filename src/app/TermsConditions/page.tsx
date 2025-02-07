const TermsConditionsPage: React.FC = () => {
    return (
        <div className="bg-gray-50 min-h-screen">
            <header className="bg-blue-600 text-white py-6 text-center">
                <h1 className="text-3xl font-bold">Terms & Conditions</h1>
            </header>
            <main className="max-w-4xl mx-auto p-6">
                <section className="bg-white p-6 shadow-lg rounded-lg mb-6">
                    <h2 className="text-blue-600 text-2xl font-semibold mb-4">Introduction</h2>
                    <p className="text-gray-700">
                        These Terms & Conditions govern the use of our services and your responsibilities as a user.
                    </p>
                </section>
                <section className="bg-white p-6 shadow-lg rounded-lg mb-6">
                    <h2 className="text-blue-600 text-2xl font-semibold mb-4">Booking Policies</h2>
                    <ul className="list-disc list-inside text-gray-700">
                        <li>All bookings are subject to availability.</li>
                        <li>A valid drivers license is required for rentals.</li>
                        <li>Payments must be made in advance.</li>
                    </ul>
                </section>
                <section className="bg-white p-6 shadow-lg rounded-lg mb-6">
                    <h2 className="text-blue-600 text-2xl font-semibold mb-4">User Responsibilities</h2>
                    <ul className="list-disc list-inside text-gray-700">
                        <li>Adhere to traffic laws and regulations.</li>
                        <li>Return the vehicle in the same condition as rented.</li>
                        <li>Notify us immediately in case of accidents or damages.</li>
                    </ul>
                </section>
                <section className="bg-white p-6 shadow-lg rounded-lg">
                    <h2 className="text-blue-600 text-2xl font-semibold mb-4">Contact Us</h2>
                    <p className="text-gray-700">
                        For any questions about these Terms & Conditions, contact us at <a href="mailto:student.giaic@gmail.com" className="text-blue-500 underline">student.giaic@gmail.com</a>.
                    </p>
                </section>
            </main>
        </div>
    );
};

export default TermsConditionsPage;
