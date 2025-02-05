"use client"
import React, { useState, useEffect } from "react";
import { createClient } from "@sanity/client";
import Image from "next/image";
import Header from "./Header";
import { Sidebar } from "./Sidebar";
import { Star } from "lucide-react";
import { useSearchParams } from "next/navigation";
import Footer from "./footer";
import CarDisplay from "./car";

const client = createClient({
    projectId: "32dr44ij", // Replace with your Sanity project ID
    dataset: "production",
    apiVersion: "2023-01-01",
    useCdn: true,
});




const cart = () => {
    const searchParams = useSearchParams(); // ✅ Ab ye Suspense ke under hai
    const carId = searchParams.get("id");
    interface Car {
        _id: string;
        name: string;
        brand: string;
        description: string;
        type: string;
        fuelCapacity: string;
        transmission: string;
        seatingCapacity: string;
        pricePerDay: number;
        originalPrice: number;
        tags: string[];
        image: string;
        quantity?: number;
        rating: number;
        slug: { current: string };
        liked: boolean;
    }

    const [car, setCar] = useState<Car | null>(null);
    const [loading, setLoading] = useState(true);
    const [cart, setCart] = useState<Car[]>([]);
    const [, setCars] = useState<Car[]>([]); // 🛠 Added missing 'cars' state

    // Add Notification
    const addToCart = (car: Car) => {
        setCart((prevCart) => [...prevCart, { ...car, quantity: (car.quantity || 1) }]);
        alert(`${car.name} has been added to your cart!`);
    };

    useEffect(() => {
        if (carId) {
            client
                .fetch(
                    `*[_type == "car" && _id == $carId][0]{
                        _id,
                        name,
                        brand,
                        description,
                        type,
                        fuelCapacity,
                        transmission,
                        seatingCapacity,
                        pricePerDay,
                        originalPrice,
                        tags,
                        "image": image.asset->url
                    }`,
                    { carId }
                )
                .then((data) => {
                    setCar(data);
                    setLoading(false);
                })
                .catch((error) => {
                    console.error("Error fetching car details:", error);
                    setLoading(false);
                });
        }

        // Fetch all cars for recommendation
        client
            .fetch(
                `*[_type == "car"]{
                    _id,
                    name,
                    brand,
                    pricePerDay,
                    "image": image.asset->url
                }`
            )
            .then((data) => setCars(data))
            .catch((error) => console.error("Error fetching cars:", error));
    }, [carId]);

    if (loading) return <p>Loading car details...</p>;
    if (!car) return <p>Car not found!</p>;

    const handleIncrease = (_id: string) => {
        setCart((prevCart) =>
            prevCart.map((item) =>
                item._id === _id ? { ...item, quantity: (item.quantity || 1) + 1 } : item
            )
        );
    };

    const handleDecrease = (_id: string) => {
        setCart((prevCart) =>
            prevCart.map((item) =>
                item._id === _id && item.quantity! > 1 ? { ...item, quantity: item.quantity! - 1 } : item
            )
        );
    };

    const handleRemove = (_id: string) => {
        setCart((prevCart) => prevCart.filter((item) => item._id !== _id));
    };



    return (

        <div>
           
                                    {/* <button
                                        onClick={() => addToCart(car)}
                                        className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition duration-300">
                                        Add to Cart
                                    </button> */}
                     
                    {/* Cart Page */}
                    <div className="p-4 mt-8">
                        <h2 className="text-lg font-bold mb-4">Your Cart</h2>
                        {cart.map((item) => (
                            <div key={item._id} className="flex justify-between items-center mb-4">
                                <p>{item.name}</p>
                                <div className="flex gap-2">
                                    <button
                                        onClick={() => handleIncrease(item._id)}
                                        className="px-2 py-1 bg-green-500 text-white rounded"
                                    >
                                        +
                                    </button>
                                    <span>{item.quantity}</span>
                                    <button
                                        onClick={() => handleDecrease(item._id)}
                                        className="px-2 py-1 bg-red-500 text-white rounded"
                                    >
                                        -
                                    </button>
                                    <button
                                        onClick={() => handleRemove(item._id)}
                                        className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition duration-300">

                                        Remove
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
    );
};

export default cart
