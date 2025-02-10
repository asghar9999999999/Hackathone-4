'use client';

import { useState, useEffect } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import { useStripe, useElements, PaymentElement } from '@stripe/react-stripe-js';
import Swal from 'sweetalert2';
import Header from '../homepage/components/header';
import Footer from '../homepage/components/footer';
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY!);

interface CheckoutPageProps {
    amount: number;
    bookingDetails: {
        carName: string;
        rentPerDay: number;
        days: number;
        total: number;
        carImage: string;
        fuel: string;
        seatingCapacity: number;
        transmission: string;
    };
}

interface CheckoutFormProps {
    amount: number;
}

const CheckoutForm = ({ amount }: CheckoutFormProps) => {
    const stripe = useStripe();
    const elements = useElements();
    const [loading, setLoading] = useState(false);

    const handlePayment = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);

        if (!stripe || !elements) {
            Swal.fire('Error', 'Stripe has not been initialized properly.', 'error');
            setLoading(false);
            return;
        }

        const { error } = await stripe.confirmPayment({
            elements,
            confirmParams: {
                return_url: `${window.location.origin}/payment-success?amount=${amount}`,
            },
        });

        if (error) {
            Swal.fire('Payment Failed', error.message || 'Unknown error occurred.', 'error');
            setLoading(false);
        }
    };

    return (
        <form onSubmit={handlePayment} className="p-6">
            <PaymentElement />
            <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 mt-4 rounded hover:bg-blue-600"
                disabled={!stripe || !elements || loading}
            >
                {loading ? 'Processing...' : 'Pay Now'}
            </button>
        </form>
    );
};

const CheckoutPage = ({ amount,  }: CheckoutPageProps) => {
    const [clientSecret, setClientSecret] = useState<string | null>(null);

    useEffect(() => {
        fetch('/api/payment-intent', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ amount }),
        })
            .then((res) => res.json())
            .then((data) => setClientSecret(data.clientSecret));
    }, [amount]);

    if (!clientSecret) {
        return <div>Loading...</div>;
    }

    return (
        <div >
            {/* Left Section - Payment Form */}
            <div className="lg:w-3/3 w-full p-4 mb-16">
                <Elements stripe={stripePromise} options={{ clientSecret }}>
                    <CheckoutForm amount={amount} />
                </Elements>
            </div>

            {/* Right Section - Car Details */}
            {/* <div className="lg:w-1/3 w-full p-4 bg-gray-100 border rounded-lg shadow-lg">
                <h2 className="text-xl font-bold mb-4">Booking Details</h2>
                <div className="flex flex-col items-center">
                    <Image
                        src={bookingDetails.carImage}
                        alt={bookingDetails.carName}
                        width={200}
                        height={100}
                        className="w-32 h-32 object-cover rounded mb-4"
                    />
                    <h3 className="text-lg font-semibold">{bookingDetails.carName}</h3>
                    <p className="text-gray-600">Price per Day: ${bookingDetails.rentPerDay}</p>
                    <p className="text-gray-600">Fuel: {bookingDetails.fuel}</p>
                    <p className="text-gray-600">Seating Capacity: {bookingDetails.seatingCapacity} persons</p>
                    <p className="text-gray-600">Transmission: {bookingDetails.transmission}</p>
                    <p className="text-gray-800 font-bold mt-4">
                        Total Price: ${bookingDetails.total}
                    </p>
                </div>
            </div> */}
        </div>
    );
};

export default function App() {
    const bookingDetails = {
        carName: 'Nissan GT-R',
        rentPerDay: 80,
        days: 5,
        total: 400,
        carImage: '', // Replace with an actual image URL
        fuel: 'Petrol',
        seatingCapacity: 4,
        transmission: 'Automatic',
    };

    return (
        <div>
   <Header/>
            <CheckoutPage amount={bookingDetails.total * 100} bookingDetails={bookingDetails} />
            <Footer/>
        </div>
    );
}
