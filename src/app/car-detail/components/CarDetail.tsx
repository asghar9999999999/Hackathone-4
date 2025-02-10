// "use client"
// import React, { useState, useEffect } from "react";
// import { createClient } from "@sanity/client";
// import Image from "next/image";
// import  Header  from "./Header";
// import { Sidebar } from "./Sidebar";
// import { Star } from "lucide-react";
// import { useSearchParams } from "next/navigation";
// import Footer from "./footer";
// import CarDisplay from "./car";
// import Swal from "sweetalert2";

// const client = createClient({
//     projectId: "32dr44ij", // Replace with your Sanity project ID
//     dataset: "production",
//     apiVersion: "2023-01-01",
//     useCdn: true,
// });




// const CarDetail = () => {
//     const searchParams = useSearchParams(); // ✅ Ab ye Suspense ke under hai
//     const carId = searchParams.get("id");
//     interface Car {
//         _id: string;
//         name: string;
//         brand: string;
//         description: string;
//         type: string;
//         fuelCapacity: string;
//         transmission: string;
//         seatingCapacity: string;
//         pricePerDay: number;
//         originalPrice: number;
//         tags: string[];
//         image: string;
//         quantity?: number;
//         rating: number;
//         slug: { current: string };
//         liked: boolean;
//     }

//     const [car, setCar] = useState<Car | null>(null);
//     const [loading, setLoading] = useState(true);
//     const [cart, setCart] = useState<Car[]>([]);
//     const [, setCars] = useState<Car[]>([]); // 🛠 Added missing 'cars' state

//     // Add Notification
//     const addToCart = (car: Car) => {
//         setCart((prevCart) => [...prevCart, { ...car, quantity: (car.quantity || 1) }]);
//         Swal.fire({
//             title: "Added to Cart!",
//             text: `${car.name} has been added successfully.`,
//             icon: "success",
//             // toast: true,
//             // position: "top-right",
//             timer: 1500,
//             showConfirmButton: false,
//         });
//         // alert(`${car.name} has been added to your cart!`);
//     };

//     useEffect(() => {
//         if (carId) {
//             client
//                 .fetch(
//                     `*[_type == "car" && _id == $carId][0]{
//                         _id,
//                         name,
//                         brand,
//                         description,
//                         type,
//                         fuelCapacity,
//                         transmission,
//                         seatingCapacity,
//                         pricePerDay,
//                         originalPrice,
//                         tags,
//                         "image": image.asset->url
//                     }`,
//                     { carId }
//                 )
//                 .then((data) => {
//                     setCar(data);
//                     setLoading(false);
//                 })
//                 .catch((error) => {
//                     console.error("Error fetching car details:", error);
//                     setLoading(false);
//                 });
//         }

//         // Fetch all cars for recommendation
//         client
//             .fetch(
//                 `*[_type == "car"]{
//                     _id,
//                     name,
//                     brand,
//                     pricePerDay,
//                     "image": image.asset->url
//                 }`
//             )
//             .then((data) => setCars(data))
//             .catch((error) => console.error("Error fetching cars:", error));
//     }, [carId]);

//     if (loading) return <p>Loading car details...</p>;
//     if (!car) return <p>Car not found!</p>;

//     const handleIncrease = (_id: string) => {
//         setCart((prevCart) =>
//             prevCart.map((item) =>
//                 item._id === _id ? { ...item, quantity: (item.quantity || 1) + 1 } : item
//             )
//         );
//     };

//     const handleDecrease = (_id: string) => {
//         setCart((prevCart) =>
//             prevCart.map((item) =>
//                 item._id === _id && item.quantity! > 1 ? { ...item, quantity: item.quantity! - 1 } : item
//             )
//         );
//     };

//     const handleRemove = (_id: string) => {
//         setCart((prevCart) => prevCart.filter((item) => item._id !== _id));
//     };



//     return (

//         <div>
//             <Header />
//             <div className="flex flex-col lg:flex-row gap-8">
//                 <Sidebar />
//                 <div className="max-w-7xl mx-auto px-4 py-8">
//                     <div className="bg-white rounded-lg shadow-md p-6 mb-8">
//                         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
//                             {/* Left Column - Image */}
//                             <div className="space-y-4">
//                                 <div className="relative rounded-lg overflow-hidden bg-white p-6 border border-gray-300 shadow-lg border-card-border">
//                                     {car.image && (
//                                         <Image
//                                             src={car.image}
//                                             alt={car.name}
//                                             className="w-full h-auto object-cover rounded-lg"
//                                             width={1200}
//                                             height={1000}
//                                         />
//                                     )}
//                                 </div>
//                                 <div className="flex gap-2 ">
//                                     <Image
//                                         src="/c5.png"
//                                         alt="Car Thumbnail 1"
//                                         width={200}
//                                         height={100}
//                                         className="w-1/1 h-auto object-cover relative rounded-lg overflow-hidden bg-white p-6 border border-gray-300 shadow-lg border-card-border"
//                                     />
//                                     <Image
//                                         src="/c4.png"
//                                         alt="Car Thumbnail 2"
//                                         width={200}
//                                         height={100}
//                                         className="w-1/1 h-auto object-cover relative rounded-lg overflow-hidden bg-white p-6 border border-gray-300 shadow-lg border-card-border"
//                                     />
//                                     <Image
//                                         src="/c3.png"
//                                         alt="Car Thumbnail 3"
//                                         width={200}
//                                         height={100}
//                                         className="w-1/1 h-auto object-cover relative rounded-lg overflow-hidden bg-white p-6 border border-gray-300 shadow-lg border-card-border"
//                                     />
//                                 </div>
//                             </div>

//                             {/* Right Column - Details */}
//                             <div className="space-y-6">
//                                 <div className="flex justify-between items-start">
//                                     <div>
//                                         <h1 className="text-4xl font-extrabold text-gray-900">{car.name}</h1>
//                                         <div className="flex items-center gap-2 mt-3">
//                                             <span className="text-gray-600">{car.brand}</span>
//                                             <div className="flex items-center mt-1">
//                                                 <Star className="text-yellow-400 fill-current" />
//                                                 <Star className="text-yellow-400 fill-current" />
//                                                 <Star className="text-yellow-400 fill-current" />
//                                                 <Star className="text-yellow-400 fill-current" />
//                                                 <Star className="text-gray-300" />
//                                                 <span className="ml-2 text-gray-600">440+ Reviewer</span>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>

//                                 <p className="text-gray-700 mb-4">{car.description}</p>

//                                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
//                                     <div className="flex items-center mt-3">
//                                         <span className="font-bold text-gray-800">Type: </span> {car.type}
//                                     </div>
//                                     <div className="flex items-center mt-2">
//                                         <span className="font-bold text-gray-800">Fuel Capacity: </span> {car.fuelCapacity}
//                                     </div>
//                                     <div className="flex items-center mt-2">
//                                         <span className="font-bold text-gray-800">Transmission: </span> {car.transmission}
//                                     </div>
//                                     <div className="flex items-center mt-2">
//                                         <span className="font-bold text-gray-800">Seating Capacity: </span> {car.seatingCapacity}
//                                     </div>
//                                 </div>
//                                 <div className="flex items-center justify-between">
//                                     <div>
//                                         <p className="text-3xl font-bold mt-7">
//                                             ${car.pricePerDay}
//                                             <span className="text-lg font-normal text-muted-foreground">/day</span>
//                                         </p>
//                                         <p className="text-lg text-muted-foreground line-through">${car.originalPrice}</p>

//                                     </div>
//                                     <button
//                                         onClick={() => addToCart(car)}
//                                         className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition duration-300">
//                                         Add to Cart
//                                     </button>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>

//                     {/* Cart Page */}
//                     <div className="p-4 mt-8">
//                         <h2 className="text-lg font-bold mb-4">Your Cart</h2>
//                         {cart.map((item) => (
//                             <div key={item._id} className="flex justify-between items-center mb-4">
//                                 <p>{item.name}</p>
//                                 <div className="flex gap-2">
//                                     <button
//                                         onClick={() => handleIncrease(item._id)}
//                                         className="px-2 py-1 bg-green-500 text-white rounded"
//                                     >
//                                         +
//                                     </button>
//                                     <span>{item.quantity}</span>
//                                     <button
//                                         onClick={() => handleDecrease(item._id)}
//                                         className="px-2 py-1 bg-red-500 text-white rounded"
//                                     >
//                                         -
//                                     </button>
//                                     <button
//                                         onClick={() => handleRemove(item._id)}
//                                         className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition duration-300">

//                                         Remove
//                                     </button>
//                                 </div>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             </div>
//             <div className="flex-1">
//                 <CarDisplay />
//                 <div className="flex justify-center mt-8 mb-8">
//                     <button className="bg-morent-blue text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors">
//                         Show more cars
//                     </button>
//                 </div>
//             </div>
//             <Footer />
//         </div>
//     );
// };

// export default CarDetail;
// "use client";

// import React, { useEffect, useState } from "react";
// import { createClient } from "@sanity/client";
// import Image from "next/image";
// import { useCart } from "../../cart/CartContext";
// import Header from "./Header";
// import {Sidebar} from "./Sidebar";
// import Footer from "./footer";
// import { useSearchParams } from "next/navigation";
// import CarDisplay from "./car";
// import { Star } from "lucide-react";
// import Link from "next/link";

// const client = createClient({
//     projectId: "32dr44ij",
//     dataset: "production",
//     apiVersion: "2023-01-01",
//     useCdn: true,
// });

// const CarDetail = () => {
//     const { addToCart } = useCart([]);
//     const [car, setCar] = useState< any | null>(null);
//     const [loading, setLoading] = useState(true);
//     const [, setCars] = useState<Car[]>([]); // 🛠 Added missing 'cars' state


//     const searchParams = useSearchParams(); // ✅ Ab ye Suspense ke under hai
//     const carId = searchParams.get("id");
//     interface Car {
//         _id: string;
//         name: string;
//         brand: string;
//         description: string;
//         type: string;
//         fuelCapacity: string;
//         transmission: string;
//         seatingCapacity: string;
//         pricePerDay: number;
//         originalPrice: number;
//         tags: string[];
//         image: string;
//         quantity?: number;
//         rating: number;
//         slug: { current: string };
//         liked: boolean;
//     }




//     useEffect(() => {
//         if (carId) {
//             client
//                 .fetch(
//                     `*[_type == "car" && _id == $carId][0]{
//                         _id,
//                         name,
//                         brand,
//                         description,
//                         type,
//                         fuelCapacity,
//                         transmission,
//                         seatingCapacity,
//                         pricePerDay,
//                         originalPrice,
//                         tags,
//                         "image": image.asset->url
//                     }`,
//                     { carId }
//                 )
//                 .then((data) => {
//                     setCar(data);
//                     setLoading(false);
//                 })
//                 .catch((error) => {
//                     console.error("Error fetching car details:", error);
//                     setLoading(false);
//                 });
//         }

//         // Fetch all cars for recommendation
//         client
//             .fetch(
//                 `*[_type == "car"]{
//                     _id,
//                     name,
//                     brand,
//                     pricePerDay,
//                     "image": image.asset->url
//                 }`
//             )
//             .then((data) => setCars(data))
//             .catch((error) => console.error("Error fetching cars:", error));
//     }, [carId]);


//     if (loading) return <p>Loading...</p>;
//     if (!car) return <p>Car not found!</p>;

//     return (
//         <div>
//             <Header />
//             <div className="flex flex-col lg:flex-row gap-8">
//                 <Sidebar />
//                 <div className="max-w-7xl mx-auto px-4 py-8">
//                     <div className="bg-white rounded-lg shadow-md p-6 mb-8">
//                         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
//                             {/* Left Column - Image */}
//                             <div className="space-y-4">
//                                 <div className="relative rounded-lg overflow-hidden bg-white p-6 border border-gray-300 shadow-lg border-card-border">
//                                     {car.image && (
//                                         <Image
//                                             src={car.image}
//                                             alt={car.name}
//                                             className="w-full h-auto object-cover rounded-lg"
//                                             width={1200}
//                                             height={1000}
//                                         />
//                                     )}
//                                 </div>
//                                 <div className="flex gap-2 ">
//                                     <Image
//                                         src="/c5.png"
//                                         alt="Car Thumbnail 1"
//                                         width={200}
//                                         height={100}
//                                         className="w-1/1 h-auto object-cover relative rounded-lg overflow-hidden bg-white p-6 border border-gray-300 shadow-lg border-card-border"
//                                     />
//                                     <Image
//                                         src="/c4.png"
//                                         alt="Car Thumbnail 2"
//                                         width={200}
//                                         height={100}
//                                         className="w-1/1 h-auto object-cover relative rounded-lg overflow-hidden bg-white p-6 border border-gray-300 shadow-lg border-card-border"
//                                     />
//                                     <Image
//                                         src="/c3.png"
//                                         alt="Car Thumbnail 3"
//                                         width={200}
//                                         height={100}
//                                         className="w-1/1 h-auto object-cover relative rounded-lg overflow-hidden bg-white p-6 border border-gray-300 shadow-lg border-card-border"
//                                     />
//                                 </div>
//                             </div>

//                             {/* Right Column - Details */}
//                             <div className="space-y-6">
//                                 <div className="flex justify-between items-start">
//                                     <div>
//                                         <h1 className="text-4xl font-extrabold text-gray-900">{car.name}</h1>
//                                         <div className="flex items-center gap-2 mt-3">
//                                             <span className="text-gray-600">{car.brand}</span>
//                                             <div className="flex items-center mt-1">
//                                                 <Star className="text-yellow-400 fill-current" />
//                                                 <Star className="text-yellow-400 fill-current" />
//                                                 <Star className="text-yellow-400 fill-current" />
//                                                 <Star className="text-yellow-400 fill-current" />
//                                                 <Star className="text-gray-300" />
//                                                 <span className="ml-2 text-gray-600">440+ Reviewer</span>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>

//                                 <p className="text-gray-700 mb-4">{car.description}</p>

//                                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
//                                     <div className="flex items-center mt-3">
//                                         <span className="font-bold text-gray-800">Type: </span> {car.type}
//                                     </div>
//                                     <div className="flex items-center mt-2">
//                                         <span className="font-bold text-gray-800">Fuel Capacity: </span> {car.fuelCapacity}
//                                     </div>
//                                     <div className="flex items-center mt-2">
//                                         <span className="font-bold text-gray-800">Transmission: </span> {car.transmission}
//                                     </div>
//                                     <div className="flex items-center mt-2">
//                                         <span className="font-bold text-gray-800">Seating Capacity: </span> {car.seatingCapacity}
//                                     </div>
//                                 </div>
//                                 <div className="flex items-center justify-between">
//                                     <div>
//                                         <p className="text-3xl font-bold mt-7">
//                                             ${car.pricePerDay}
//                                             <span className="text-lg font-normal text-muted-foreground">/day</span>
//                                         </p>
//                                         <p className="text-lg text-muted-foreground line-through">${car.originalPrice}</p>

//                                     </div>
//                         <button
//                             onClick={() => addToCart(car)}
//                             className="bg-blue-500 text-white px-4 py-2 mt-4 rounded"
//                         >
//                             Add to Cart
//                         </button>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             <div className="flex-1">
//                 <CarDisplay />
//                 <div className="flex justify-center mt-8 mb-8">
//                     <button className="bg-morent-blue text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors"> <Link href="/category/components">
//                         Show more cars
//                     </Link>
//                     </button>
//                 </div>
//             </div>
//             <Footer />
//         </div>
//     );
// };

// export default CarDetail;
"use client";

import React, { useEffect, useState } from "react";
import { createClient } from "@sanity/client";
import Image from "next/image";
import { useCart } from "../../context/CartContext";
import Header from "./Header";
import { Sidebar } from "./Sidebar";
import Footer from "./footer";
import { useSearchParams } from "next/navigation";
import CarDisplay from "./car";
import { Star } from "lucide-react";
import Link from "next/link";

// Sanity client configuration
const client = createClient({
    projectId: "32dr44ij",
    dataset: "production",
    apiVersion: "2023-01-01",
    useCdn: true,
});

// Car interface
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
    image: string; // Image is a string (URL)
    quantity?: number;
    rating: number;
    slug: { current: string };
    liked: boolean;
}

const CarDetail = () => {
    const { addToCart } = useCart();
    const [car, setCar] = useState<Car | null>(null);
    const [loading, setLoading] = useState(true);
    const [, setCars] = useState<Car[]>([]);

    const searchParams = useSearchParams();
    const carId = searchParams.get("id");

    // Fetch car details and recommendations
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
                        "image": image.asset->url,
                        rating,
                        slug,
                        liked
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

        // Fetch all cars for recommendations
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

    if (loading) return <p>Loading...</p>;
    if (!car) return <p>Car not found!</p>;

    // Add to cart handler
    const handleAddToCart = () => {
        addToCart({
            ...car,
            image: <Image
             src={car.image}
              alt={car.name}
              className="w-full h-auto object-cover rounded-lg"
              width={1200}
              height={1000}
               />, // Converting image URL to a React element
        });
    };

    return (
        <div>
            <Header />
            <div className="flex flex-col lg:flex-row gap-8">
                <Sidebar />
                <div className="max-w-7xl mx-auto px-4 py-8">
                    <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                            {/* Left Column - Image */}
                            <div className="space-y-4">
                                <div className="relative rounded-lg overflow-hidden bg-white p-6 border border-gray-300 shadow-lg border-card-border">
                                    {car.image && (
                                        <Image
                                            src={car.image}
                                            alt={car.name}
                                            className="w-full h-auto object-cover rounded-lg"
                                            width={1200}
                                            height={1000}
                                        />
                                    )}
                                </div>
                                <div className="flex gap-2">
                                    <Image
                                        src="/c5.png"
                                        alt="Car Thumbnail 1"
                                        width={200}
                                        height={100}
                                        className="w-1/1 h-auto object-cover relative rounded-lg overflow-hidden bg-white p-6 border border-gray-300 shadow-lg border-card-border"
                                    />
                                    <Image
                                        src="/c4.png"
                                        alt="Car Thumbnail 2"
                                        width={200}
                                        height={100}
                                        className="w-1/1 h-auto object-cover relative rounded-lg overflow-hidden bg-white p-6 border border-gray-300 shadow-lg border-card-border"
                                    />
                                    <Image
                                        src="/c3.png"
                                        alt="Car Thumbnail 3"
                                        width={200}
                                        height={100}
                                        className="w-1/1 h-auto object-cover relative rounded-lg overflow-hidden bg-white p-6 border border-gray-300 shadow-lg border-card-border"
                                    />
                                </div>
                            </div>

                            {/* Right Column - Details */}
                            <div className="space-y-6">
                                <div className="flex justify-between items-start">
                                    <div>
                                        <h1 className="text-4xl font-extrabold text-gray-900">{car.name}</h1>
                                        <div className="flex items-center gap-2 mt-3">
                                            <span className="text-gray-600">{car.brand}</span>
                                            <div className="flex items-center mt-1">
                                                <Star className="text-yellow-400 fill-current" />
                                                <Star className="text-yellow-400 fill-current" />
                                                <Star className="text-yellow-400 fill-current" />
                                                <Star className="text-yellow-400 fill-current" />
                                                <Star className="text-gray-300" />
                                                <span className="ml-2 text-gray-600">440+ Reviewer</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <p className="text-gray-700 mb-4">{car.description}</p>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                                    <div className="flex items-center mt-3">
                                        <span className="font-bold text-gray-800">Type: </span> {car.type}
                                    </div>
                                    <div className="flex items-center mt-2">
                                        <span className="font-bold text-gray-800">Fuel Capacity: </span> {car.fuelCapacity}
                                    </div>
                                    <div className="flex items-center mt-2">
                                        <span className="font-bold text-gray-800">Transmission: </span> {car.transmission}
                                    </div>
                                    <div className="flex items-center mt-2">
                                        <span className="font-bold text-gray-800">Seating Capacity: </span> {car.seatingCapacity}
                                    </div>
                                </div>
                                <div className="flex items-center justify-between">
                                    <div>
                                        <p className="text-3xl font-bold mt-7">
                                            ${car.pricePerDay}
                                            <span className="text-lg font-normal text-muted-foreground">/day</span>
                                        </p>
                                        <p className="text-lg text-muted-foreground line-through">${car.originalPrice}</p>
                                    </div>
                                    <button
                                        onClick={handleAddToCart}
                                        className="bg-blue-500 text-white px-4 py-2 mt-4 rounded"
                                    >
                                        Add to Cart
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex-1">
                <CarDisplay />
                <div className="flex justify-center mt-8 mb-8">
                    <button className="bg-morent-blue text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors">
                        <Link href="/category/components">Show more cars</Link>
                    </button>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default CarDetail;
