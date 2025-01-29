// page.tsx
"use client";

import React, { useState } from "react";

export default function Page() {
    const [showPopup, setShowPopup] = useState(false);
    const [orders, setOrders] = useState<number>(0);
    const [quantity, setQuantity] = useState(1);

    const handleBookNow = () => {
        setShowPopup(true);
    };

    const handleIncrease = () => setQuantity(quantity + 1);
    const handleDecrease = () => quantity > 1 && setQuantity(quantity - 1);
    const handleRemove = () => setQuantity(0);
    const handleProcessed = () => {
        alert("Your order successful confirm");
        setShowPopup(false);
        setOrders(orders + quantity);
        setQuantity(1);
    };

    return (
        <div className="p-4">
            <button
                onClick={handleBookNow}
                className="px-4 py-2 bg-blue-500 text-white rounded"
            >
                Book Now
            </button>

            {showPopup && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
                    <div className="bg-white p-6 rounded shadow-lg">
                        <h2 className="text-lg font-bold mb-4">
                            Your Order Successfully Processed
                        </h2>
                        <p className="mb-4">Quantity: {quantity}</p>
                        <div className="flex gap-4">
                            <button
                                onClick={handleIncrease}
                                className="px-4 py-2 bg-green-500 text-white rounded"
                            >
                                Increase
                            </button>
                            <button
                                onClick={handleDecrease}
                                className="px-4 py-2 bg-yellow-500 text-white rounded"
                            >
                                Decrease
                            </button>
                            <button
                                onClick={handleRemove}
                                className="px-4 py-2 bg-red-500 text-white rounded"
                            >
                                Remove
                            </button>
                        </div>
                        <button
                            onClick={handleProcessed}
                            className="mt-4 px-6 py-2 bg-blue-600 text-white rounded"
                        >
                            Processed
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
