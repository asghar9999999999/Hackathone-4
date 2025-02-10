// 'use client';

// import { useState, useEffect } from 'react';
// import { loadStripe } from '@stripe/stripe-js';
// import { Elements } from '@stripe/react-stripe-js';
// import { useStripe, useElements, PaymentElement } from '@stripe/react-stripe-js';
// import Swal from 'sweetalert2';
// import Header from '../homepage/components/header';
// import Footer from '../homepage/components/footer';

// const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY!);

// interface CheckoutPageProps {
//     amount: number;
//     bookingDetails: {
//         carName: string;
//         rentPerDay: number;
//         days: number;
//         total: number;
//     };
// }

// const CheckoutForm = ({ amount, bookingDetails }: any) => {
//     const stripe = useStripe();
//     const elements = useElements();
//     const [loading, setLoading] = useState(false);

//     const handlePayment = async (e: React.FormEvent<HTMLFormElement>) => {
//         e.preventDefault();
//         setLoading(true);

//         if (!stripe || !elements) {
//             Swal.fire('Error', 'Stripe has not been initialized properly.', 'error');
//             setLoading(false);
//             return;
//         }

//         const { error } = await stripe.confirmPayment({
//             elements,
//             confirmParams: {
//                 return_url: `${window.location.origin}/payment-success?amount=${amount}`,
//             },
//         });

//         if (error) {
//             Swal.fire('Payment Failed', error.message || 'Unknown error occurred.', 'error');
//             setLoading(false);
//         }
//     };


//     return (
//         <form onSubmit={handlePayment} className="p-6">
//             <PaymentElement />
//             <button
//                 type="submit"
//                 className="w-full bg-blue-500 text-white py-2 mt-4 rounded hover:bg-blue-600"
//                 disabled={!stripe || !elements || loading}
//             >
//                 {loading ? 'Processing...' : 'Pay Now'}
//             </button>
//         </form>
//     );
// };

// const CheckoutPage = ({ amount, bookingDetails }: CheckoutPageProps) => {
//     const [clientSecret, setClientSecret] = useState<string | null>(null);

//     useEffect(() => {
//         fetch('/api/payment-intent', {
//             method: 'POST',
//             headers: { 'Content-Type': 'application/json' },
//             body: JSON.stringify({ amount }),
//         })
//             .then((res) => res.json())
//             .then((data) => setClientSecret(data.clientSecret));
//     }, [amount]);

//     if (!clientSecret) {
//         return <div>Loading...</div>;
//     }

//     return (
//         <Elements stripe={stripePromise} options={{ clientSecret }}>
//             <CheckoutForm clientSecret={clientSecret} amount={amount} bookingDetails={bookingDetails} />
//         </Elements>
//     );
// };

// export default function App() {
//     const bookingDetails = {
//         carName: 'Nissan GT-R',
//         rentPerDay: 80,
//         days: 5,
//         total: 400,
//     };

//     return (
//         <div>
//         <div>
//             <Header/>
//         </div>
//         <CheckoutPage amount={bookingDetails.total * 100} bookingDetails={bookingDetails} />
//         <div>
//             <Footer/>
//         </div>
//         </div>
//     );
// }
// 'use client';

// import { useState, useEffect } from 'react';
// import { loadStripe } from '@stripe/stripe-js';
// import { Elements } from '@stripe/react-stripe-js';
// import { useStripe, useElements, PaymentElement } from '@stripe/react-stripe-js';
// import Swal from 'sweetalert2';
// import Header from '../homepage/components/header';
// import Footer from '../homepage/components/footer';

// const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY!);

// interface CheckoutPageProps {
//     amount: number;
//     bookingDetails: {
//         carName: string;
//         rentPerDay: number;
//         days: number;
//         total: number;
//         carImage: string;
//         fuel: string;
//         seatingCapacity: number;
//         transmission: string;
//     };
// }

// const CheckoutForm = ({ amount, bookingDetails }: any) => {
//     const stripe = useStripe();
//     const elements = useElements();
//     const [loading, setLoading] = useState(false);

//     const handlePayment = async (e: React.FormEvent<HTMLFormElement>) => {
//         e.preventDefault();
//         setLoading(true);

//         if (!stripe || !elements) {
//             Swal.fire('Error', 'Stripe has not been initialized properly.', 'error');
//             setLoading(false);
//             return;
//         }

//         const { error } = await stripe.confirmPayment({
//             elements,
//             confirmParams: {
//                 return_url: `${window.location.origin}/payment-success?amount=${amount}`,
//             },
//         });

//         if (error) {
//             Swal.fire('Payment Failed', error.message || 'Unknown error occurred.', 'error');
//             setLoading(false);
//         }
//     };

//     return (
//         <form onSubmit={handlePayment} className="p-6">
//             <PaymentElement />
//             <button
//                 type="submit"
//                 className="w-full bg-blue-500 text-white py-2 mt-4 rounded hover:bg-blue-600"
//                 disabled={!stripe || !elements || loading}
//             >
//                 {loading ? 'Processing...' : 'Pay Now'}
//             </button>
//         </form>
//     );
// };

// const CheckoutPage = ({ amount, bookingDetails }: CheckoutPageProps) => {
//     const [clientSecret, setClientSecret] = useState<string | null>(null);

//     useEffect(() => {
//         fetch('/api/payment-intent', {
//             method: 'POST',
//             headers: { 'Content-Type': 'application/json' },
//             body: JSON.stringify({ amount }),
//         })
//             .then((res) => res.json())
//             .then((data) => setClientSecret(data.clientSecret));
//     }, [amount]);

//     if (!clientSecret) {
//         return <div>Loading...</div>;
//     }

//     return (
//         <div className="flex flex-col lg:flex-row max-w-7xl mx-auto p-4">
//             {/* Left Section - Payment Form */}
//             <div className="lg:w-2/3 w-full p-4">
//                 <Elements stripe={stripePromise} options={{ clientSecret }}>
//                     <CheckoutForm clientSecret={clientSecret} amount={amount} bookingDetails={bookingDetails} />
//                 </Elements>
//             </div>

//             {/* Right Section - Car Details */}
//             <div className="lg:w-1/3 w-full p-4 bg-gray-100 border rounded-lg shadow-lg">
//                 <h2 className="text-xl font-bold mb-4">Booking Details</h2>
//                 <div className="flex flex-col items-center">
//                     <img
//                         src={bookingDetails.carImage}
//                         alt={bookingDetails.carName}
//                         className="w-32 h-32 object-cover rounded mb-4"
//                     />
//                     <h3 className="text-lg font-semibold">{bookingDetails.carName}</h3>
//                     <p className="text-gray-600">Price per Day: ${bookingDetails.rentPerDay}</p>
//                     <p className="text-gray-600">Fuel: {bookingDetails.fuel}</p>
//                     <p className="text-gray-600">Seating Capacity: {bookingDetails.seatingCapacity} persons</p>
//                     <p className="text-gray-600">Transmission: {bookingDetails.transmission}</p>
//                     <p className="text-gray-800 font-bold mt-4">
//                         Total Price: ${bookingDetails.total}
//                     </p>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default function App() {
//     const bookingDetails = {
//         carName: 'Nissan GT-R',
//         rentPerDay: 80,
//         days: 5,
//         total: 400,
//         carImage: 'https://example.com/car-image.jpg', // Replace with an actual image URL
//         fuel: 'Petrol',
//         seatingCapacity: 4,
//         transmission: 'Automatic',
//     };

//     return (
//         <div>
//             <Header />
//             <CheckoutPage amount={bookingDetails.total * 100} bookingDetails={bookingDetails} />
//             <Footer />
//         </div>
//     );
// }
"use client";

import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import Link from "next/link";
import Footer from "../homepage/components/footer";
import Header from "../homepage/components/header";

// const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

const CheckoutPage = () => {
    const { cart } = useCart();
    const [billingInfo, setBillingInfo] = useState({
        name: "",
        phone: "",
        address: "",
        city: "",
    });
    const [rentalDetails, setRentalDetails] = useState({
        pickupDate: "",
        dropoffDate: "",
        pickupTime: "",
        dropoffTime: "",
    });
    const [] = useState("card");
    const [isConfirmed, setIsConfirmed] = useState(false);

    const handleBillingChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setBillingInfo({ ...billingInfo, [e.target.name]: e.target.value });
    };

    const handleRentalChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setRentalDetails({ ...rentalDetails, [e.target.name]: e.target.value });
    };


    const handleConfirmation = () => {
        setIsConfirmed(!isConfirmed);
    };
    

    return (
               
//         <div>

//             <Header/>
//         <div className="max-w-7xl mx-auto p-4">
 

//             <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
//                 {/* Left Side - Form Sections */}
//                 <div className="lg:col-span-2 space-y-8">
//                     {/* Billing Info */}
//                     <section className="p-4 border rounded-lg shadow">
//                         <h2 className="text-xl font-semibold mb-4">Billing Info</h2>
//                         <div className="grid grid-cols-2 gap-4">
//                             <input
//                                 type="text"
//                                 name="name"
//                                 placeholder="Name"
//                                 onChange={handleBillingChange}
//                                 className="border p-2 w-full"
//                             />
//                             <input
//                                 type="text"
//                                 name="phone"
//                                 placeholder="Phone Number"
//                                 onChange={handleBillingChange}
//                                 className="border p-2 w-full"
//                             />
//                             <input
//                                 type="text"
//                                 name="address"
//                                 placeholder="Address"
//                                 onChange={handleBillingChange}
//                                 className="border p-2 w-full col-span-2"
//                             />
//                             <input
//                                 type="text"
//                                 name="city"
//                                 placeholder="Town / City"
//                                 onChange={handleBillingChange}
//                                 className="border p-2 w-full col-span-2"
//                             />
//                         </div>
//                     </section>

//                     {/* Rental Details */}
//                     <section className="p-4 border rounded-lg shadow">
//                         <h2 className="text-xl font-semibold mb-4">Rental Details</h2>
//                         <div className="grid grid-cols-2 gap-4">
//                             <div>
//                                 <h3 className="font-medium mb-2">Pick-up</h3>
//                                 <input
//                                     type="date"
//                                     name="pickupDate"
//                                     onChange={handleRentalChange}
//                                     className="border p-2 w-full"
//                                 />
//                                 <input
//                                     type="time"
//                                     name="pickupTime"
//                                     onChange={handleRentalChange}
//                                     className="border p-2 w-full mt-2"
//                                 />
//                             </div>
//                             <div>
//                                 <h3 className="font-medium mb-2">Drop-off</h3>
//                                 <input
//                                     type="date"
//                                     name="dropoffDate"
//                                     onChange={handleRentalChange}
//                                     className="border p-2 w-full"
//                                 />
//                                 <input
//                                     type="time"
//                                     name="dropoffTime"
//                                     onChange={handleRentalChange}
//                                     className="border p-2 w-full mt-2"
//                                 />
//                             </div>
//                         </div>
//                     </section>
                         
//                     {/* Payment Method */}
//                     {/* <section className="p-4 border rounded-lg shadow">
//                         <h2 className="text-xl font-semibold mb-4">Payment Method</h2>
//                         <div className="space-y-4">
//                             <label className="flex items-center space-x-2">
//                                 <input
//                                     type="radio"
//                                     name="paymentMethod"
//                                     value="card"
//                                     checked={paymentMethod === "card"}
//                                     onChange={() => handlePaymentChange("card")}
//                                 />
//                                 <span>Credit Card</span>
//                             </label>
//                             <label className="flex items-center space-x-2">
//                                 <input
//                                     type="radio"
//                                     name="paymentMethod"
//                                     value="paypal"
//                                     checked={paymentMethod === "paypal"}
//                                     onChange={() => handlePaymentChange("paypal")}
//                                 />
//                                 <span>PayPal</span>
//                             </label>
//                             <label className="flex items-center space-x-2">
//                                 <input
//                                     type="radio"
//                                     name="paymentMethod"
//                                     value="bitcoin"
//                                     checked={paymentMethod === "bitcoin"}
//                                     onChange={() => handlePaymentChange("bitcoin")}
//                                 />
//                                 <span>Bitcoin</span>
//                             </label>
//                         </div>
//                     </section> */}

//                     {/* Confirmation */}
//                     <section className="p-4 border rounded-lg shadow">
//                         <label className="flex items-center space-x-2">
//                             <input
//                                 type="checkbox"
//                                 checked={isConfirmed}
//                                 onChange={handleConfirmation}
//                                 className="w-5 h-5"
//                             />
//                             <span>I agree with the terms and conditions.</span>
//                         </label>
//                     </section>
//                 </div>

//                 {/* Right Side - Order Summary */}
//                 {/* <div className="p-4 border rounded-lg shadow">
//                     <h2 className="text-xl font-semibold mb-4">Rental Summary</h2>
//                     <ul className="space-y-4">
//                         {cart.map((item) => (
//                             <li key={item._id} className="flex justify-between">
//                                   <div className="flex items-center gap-4">
//                                      {item.image && (
//                                     <Image
//                                      src={urlFor(item.image).url()}   // Add a placeholder image path if no image is available
//                                      alt= "image"
//                                       width={60}
//                                       height={60}
//                                      className="rounded-lg border border-gray-300"
//                                     />
//                                     )}
//                                     </div>
                                
//                                 <span>{item.name}</span>
//                                 <span>${item.pricePerDay}</span>
//                             </li>
//                         ))}
//                     </ul>
//                     <div className="flex justify-between font-semibold mt-4">
//                         <span>{`Total Rental Price`}</span>
//                         <span>${cart.reduce((acc, item) => acc + item.pricePerDay * (item.quantity || 1), 0)}</span>
//                     </div>
//                 </div> */}

//                 {/* Right Section - Car Details */}
//                 <div className="p-4 border rounded-lg shadow-lg">
//                     <h2 className="text-2xl font-bold mb-4 text-gray-800">Rental Summary</h2>
//                     <ul className="space-y-6">
//                         {cart.map((item) => (
//                             <li
//                                 key={item._id}
//                                 className="border-b pb-4 last:border-none"
//                             >
//                                 {/* Image */}
//                                 {item.image && (
//                                     <Image
//                                         src={urlFor(item.image).url()}
//                                         alt="Car Image"
//                                         width={800}
//                                         height={800}
//                                         className="rounded-lg border border-gray-300 object-cover mx-auto"
//                                     />
//                                 )}
//                                 {/* Details Below Image */}
//                                 <div className="mt-4 text-center">
//                                     <h3 className="text-lg font-semibold text-gray-700 mb-2">{item.name}</h3>
//                                     <p className="text-gray-600 text-sm mb-1">
//                                         <span className="font-medium">Price per Day:</span> ${item.pricePerDay}
//                                     </p>
//                                     <p className="text-gray-600 text-sm">
//                                         <span className="font-medium">Quantity:</span> {item.quantity || 1}
//                                     </p>
//                                 </div>
//                             </li>
//                         ))}
//                     </ul>

//                     {/* Total */}
//                     <div className="flex justify-between font-semibold mt-6 text-gray-800 text-lg">
//                         <span>Total Rental Price</span>
//                         <span>${cart.reduce((acc, item) => acc + item.pricePerDay * (item.quantity || 1), 0)}</span>
//                     </div>
//                 </div>

         
//             </div>  
//          </div>
//             <div className=" mt-4 flex justify-center ml-48">
//                 <Link href="/Payment">
//                     <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 rounded px-6 mb-7">
//                         Proceed to Payment
//                     </button></Link>
//             </div>
//          <Footer/>
//         </div>
//     );
    
// };

// export default CheckoutPage;
        <div>
            <Header />
            <div className="max-w-7xl mx-auto p-4">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Left Side - Form Sections */}
                    <div className="lg:col-span-2 space-y-8">
                        {/* Billing Info */}
                        <section className="p-4 border rounded-lg shadow">
                            <h2 className="text-xl font-semibold mb-4">Billing Info</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Name"
                                    onChange={handleBillingChange}
                                    className="border p-2 w-full"
                                />
                                <input
                                    type="text"
                                    name="phone"
                                    placeholder="Phone Number"
                                    onChange={handleBillingChange}
                                    className="border p-2 w-full"
                                />
                                <input
                                    type="text"
                                    name="address"
                                    placeholder="Address"
                                    onChange={handleBillingChange}
                                    className="border p-2 w-full md:col-span-2"
                                />
                                <input
                                    type="text"
                                    name="city"
                                    placeholder="Town / City"
                                    onChange={handleBillingChange}
                                    className="border p-2 w-full md:col-span-2"
                                />
                            </div>
                        </section>

                        {/* Rental Details */}
                        <section className="p-4 border rounded-lg shadow">
                            <h2 className="text-xl font-semibold mb-4">Rental Details</h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div>
                                    <h3 className="font-medium mb-2">Pick-up</h3>
                                    <input
                                        type="date"
                                        name="pickupDate"
                                        onChange={handleRentalChange}
                                        className="border p-2 w-full"
                                    />
                                    <input
                                        type="time"
                                        name="pickupTime"
                                        onChange={handleRentalChange}
                                        className="border p-2 w-full mt-2"
                                    />
                                </div>
                                <div>
                                    <h3 className="font-medium mb-2">Drop-off</h3>
                                    <input
                                        type="date"
                                        name="dropoffDate"
                                        onChange={handleRentalChange}
                                        className="border p-2 w-full"
                                    />
                                    <input
                                        type="time"
                                        name="dropoffTime"
                                        onChange={handleRentalChange}
                                        className="border p-2 w-full mt-2"
                                    />
                                </div>
                            </div>
                        </section>

                        {/* Confirmation */}
                        <section className="p-4 border rounded-lg shadow">
                            <label className="flex items-center space-x-2">
                                <input
                                    type="checkbox"
                                    checked={isConfirmed}
                                    onChange={handleConfirmation}
                                    className="w-5 h-5"
                                />
                                <span>I agree with the terms and conditions.</span>
                            </label>
                        </section>
                    </div>

                    {/* Right Side - Order Summary */}
                    <div className="p-4 border rounded-lg shadow-lg">
                        <h2 className="text-2xl font-bold mb-4 text-gray-800">Rental Summary</h2>
                        <ul className="space-y-6">
                            {cart.map((item) => (
                                <li
                                    key={item._id}
                                    className="border-b pb-4 last:border-none"
                                >
                                    {/* {item.image && (
                                        <Image
                                            src={urlFor(item.image).url()}
                                            alt="Car Image"
                                            width={800}
                                            height={800}
                                            className="rounded-lg border border-gray-300 object-cover mx-auto"
                                        />
                                    )} */}
                                    <div className="mt-4 text-center">
                                        <h3 className="text-lg font-semibold text-gray-700 mb-2">{item.name}</h3>
                                        <p className="text-gray-600 text-sm mb-1">
                                            <span className="font-medium">Price per Day:</span> ${item.pricePerDay}
                                        </p>
                                        <p className="text-gray-600 text-sm">
                                            <span className="font-medium">Quantity:</span> {item.quantity || 1}
                                        </p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                        <div className="flex justify-between font-semibold mt-6 text-gray-800 text-lg">
                            <span>Total Rental Price</span>
                            <span>${cart.reduce((acc, item) => acc + item.pricePerDay * (item.quantity || 1), 0)}</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-4 flex justify-center">
                <Link href="/Payment">
                    <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-6 rounded mb-5">
                        Proceed to Payment
                    </button>
                </Link>
            </div>
            <Footer />
        </div>

    );

};

export default CheckoutPage;