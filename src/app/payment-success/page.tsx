'use client';

import { useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import Swal from 'sweetalert2';
import jsPDF from 'jspdf';

const PaymentSuccessPage = () => {
    const searchParams = useSearchParams();
    const rawAmount = searchParams.get('amount');
    const amount = rawAmount ? (parseFloat(rawAmount) / 100).toFixed(2) : '0.00'; // Convert cents to dollars


    useEffect(() => {
        Swal.fire({
            title: 'Payment Successful!',
            text: `Thank you for your payment of $${amount}.`,
            icon: 'success',
            // confirmButtonText: 'Download Receipt',
            confirmButtonText : "Thank You",
        }).then((result) => {
            if (result.isConfirmed) {
            }
        });
    }, [amount]);

    const generateReceipt = () => {
        const doc = new jsPDF();
        doc.setFontSize(18);
        doc.text('Payment Receipt', 20, 20);
        doc.setFontSize(14);
        doc.text(`Date: ${new Date().toLocaleDateString()}`, 20, 30);
        doc.text(`Transaction ID: ${Math.random().toString(36).slice(2, 11).toUpperCase()}`, 20, 40); // Example Transaction ID
        doc.setFontSize(12);
        doc.text(`Amount Paid: $${amount}`, 20, 60);
        doc.text('Transaction Status: Successful', 20, 70);
        doc.text('Payment Method: Stripe', 20, 80);
        doc.setFontSize(10);
        doc.text('------------------------------------------------------', 20, 90);
        doc.text('Service Details:', 20, 100);
        doc.text('Car Rental Booking', 20, 110); // You can dynamically add details here
        doc.setFontSize(12);
        doc.text('Thank you for choosing our service!', 20, 130);
        doc.setFontSize(10);
        doc.text('For inquiries, contact giaicstudentxyz@example.com.', 20, 140);
        doc.save('receipt.pdf');
    };


    return (
        // <div className="p-10 text-center">
        //     <h1 className="text-2xl font-bold">Payment Successful!</h1>
        //     <p className="mt-2">Your payment of ${amount} was processed successfully.</p>
        //     <p className="mt-4">You can download your receipt using the button in the popup.</p>
        // </div>
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
            <div className="bg-white shadow-lg rounded-2xl w-full max-w-md p-6 text-center">
                <div className="flex justify-center items-center w-16 h-16 bg-green-100 rounded-full mx-auto">
                    <svg
                        className="w-8 h-8 text-green-500"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 12l2 2 4-4m-7 8a9 9 0 1118 0 9 9 0 01-18 0z"
                        />
                    </svg>
                </div>
                <h1 className="text-2xl font-bold text-gray-800 mt-4">Payment Successful!</h1>
                <p className="text-gray-600 mt-2">
                    Your payment of <span className="font-bold text-green-500">${amount }</span> was processed successfully.
                </p>
                <p className="text-sm text-gray-500 mt-4">
                    A receipt has been generated. You can download it below.
                </p>
                <button
                    onClick={generateReceipt}
                    className="mt-6 px-4 py-2 bg-green-500 text-white font-semibold rounded-lg shadow hover:bg-green-600 transition"
                >
                    Download Receipt
                </button>
            </div>
            <p className="text-gray-500 text-sm mt-4">
                Thank you for choosing our service!
            </p>
        </div>

    );
};

export default PaymentSuccessPage;
