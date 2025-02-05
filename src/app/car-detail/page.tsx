// "use client";
// import { Search, Settings, Heart, Star,  Bell } from "lucide-react";                           
// import { useSearchParams } from "next/navigation";
// import { useEffect, useState } from "react";
// import { createClient } from "@sanity/client";
// import Image from "next/image";
// import {Header} from "./components/Header";
// import { Sidebar } from "./components/Sidebar";
// import CarCard from "./components/CarCard";
// import Footer from "./components/footer";
// import Link from "next/link";
// import { Button } from "@/components/ui/button";
// // Sanity client setup
// const client = createClient({
//     projectId: "32dr44ij", // Replace with your Sanity project ID
//     dataset: "production",
//     apiVersion: "2023-01-01",
//     useCdn: true,
// });

// const cars = [
//     {
//         _id: "1",

//         name: "Koenigsegg",
//         brand: "Koenigsegg",
//         description: "High-performance sports car with cutting-edge technology.",
//         type: "Sport",
//         fuelCapacity: "90L",
//         transmission: "Manual",
//         seatingCapacity: "2",
//         pricePerDay: "99.00",
//         originalPrice: "120.00",
//         tags: ["Luxury", "High Performance"],
//         image: "/c6.png?height=200&width=400",
//         liked: true,
//         slug: "koenigsegg",
//     },
//     {
//         _id: "2",
//         name: "Nissan GT-R",
//         brand: "Nissan",
//         description: "Iconic Japanese sports car known for its performance and handling.",
//         type: "Sport",
//         fuelCapacity: "90L",
//         transmission: "Auto",
//         seatingCapacity: "4",
//         pricePerDay: "80.00",
//         originalPrice: "100.00",
//         tags: ["Fast", "Iconic"],
//         liked: false,
//         slug: "nissan-gt-r",
//     },
//     {
//         _id: "3",
//         name: "Rolls-Royce Phantom",
//         brand: "Rolls-Royce",
//         description: "Ultimate luxury sedan with unparalleled comfort and prestige.",
//         type: "Sedan",
//         fuelCapacity: "100L",
//         transmission: "Auto",
//         seatingCapacity: "5",
//         pricePerDay: "96.00",
//         originalPrice: "120.00",
//         tags: ["Luxury", "Comfort"],
//         image: "/c4.png?height=200&width=400",
//         liked: true,
//         slug: "rolls-royce-phantom",
//     },
//     {
//         _id: 4,
//         name: "Porsche 911",
//         brand: "Porsche",
//         description: "Legendary sports car with timeless design and exhilarating performance.",
//         type: "Sport",
//         fuelCapacity: "80L",
//         transmission: "Manual",
//         seatingCapacity: "4",
//         pricePerDay: "85.00",
//         originalPrice: "110.00",
//         tags: ["Classic", "Performance"],
//         image: "/c5.png?height=200&width=400",
//         liked: false,
//         slug: "porsche-911",
//     },
//     {
//         _id: "5",
//         name: "All New Rush",
//         brand: "Toyota",
//         description: "Versatile compact SUV perfect for urban adventures.",
//         type: "SUV",
//         fuelCapacity: "70L",
//         transmission: "Auto",
//         seatingCapacity: "7",
//         pricePerDay: "72.00",
//         originalPrice: "80.00",
//         tags: ["Family", "Efficient"],
//         image: "/c6.png?height=200&width=400",
//         liked: false,
//         slug: "all-new-rush",
//     },
//     {
//         _id: "6",
//         name: "CR - V",
//         brand: "Honda",
//         description: "Reliable and spacious SUV with advanced safety features.",
//         type: "SUV",
//         fuelCapacity: "80L",
//         transmission: "Auto",
//         seatingCapacity: "5",
//         pricePerDay: "80.00",
//         originalPrice: "100.00",
//         tags: ["Reliable", "Spacious"],
//         image: "/c7.png?height=200&width=400",
//         liked: true,
//         slug: "cr-v",
//     },
//     {
//         _id: "7",
//         name: "All New Terios",
//         brand: "Daihatsu",
//         description: "Compact SUV with great maneuverability and fuel efficiency.",
//         type: "SUV",
//         fuelCapacity: "60L",
//         transmission: "Manual",
//         seatingCapacity: "5",
//         pricePerDay: "74.00",
//         originalPrice: "90.00",
//         tags: ["Compact", "Efficient"],
//         image: "/c1.png?height=200&width=400",
//         liked: false,
//         slug: "all-new-terios",
//     },
//     {
//         _id: "8",
//         name: "MG ZS",
//         brand: "MG",
//         description: "Modern SUV with stylish design and advanced technology.",
//         type: "SUV",
//         fuelCapacity: "75L",
//         transmission: "Auto",
//         seatingCapacity: "5",
//         pricePerDay: "80.00",
//         originalPrice: "100.00",
//         tags: ["Modern", "Tech"],
//         image: "/c2.png?height=200&width=400",
//         liked: true,
//         slug: "mg-zs",
//     },
//     {
//         _id: "9",
//         name: "Koenigsegg",
//         brand: "Koenigsegg",
//         description: "High-performance sports car with cutting-edge technology.",
//         type: "Sport",
//         fuelCapacity: "90L",
//         transmission: "Manual",
//         seatingCapacity: "2",
//         pricePerDay: "99.00",
//         originalPrice: "120.00",
//         tags: ["Luxury", "High Performance"],
//         image: "/c6.png?height=200&width=400",
//         liked: true,
//         slug: "koenigsegg",
//     },
//     // Add more cars here...
// ];


// const CarDetail = () => {
//     const searchParams = useSearchParams();
//     const carId = searchParams.get("id");

//     interface Car {
//         _id: string;
//         name: string;
//         brand: string;
//         description: string;
//         type: string;
//         fuelCapacity: string;
//         transmission: string;
//         seatingCapacity: number;
//         pricePerDay: number;
//         originalPrice: number;
//         tags: string[];
//         image: string;
//     }

//     const [car, setCar] = useState<Car | null>(null);
//     const [loading, setLoading] = useState(true);

//     const [cart, setCart] = useState<Car[]>([]); // Cart state to store selected cars

//     const addToCart = (car: Car) => {
//         setCart((prevCart) => [...prevCart, car]); // Add selected car to cart
//         alert(`${car.name} has been added to your cart!`); // Optional: show an alert to confirm
//     };

//     useEffect(() => {
//         if (carId) {
//             client
//                 .fetch(
//                     `*[_type == "car" && _id == $carId][0]{
//         _id,
//         name,
//         brand,
//         description,
//         type,
//         fuelCapacity,
//         transmission,
//         seatingCapacity,
//         pricePerDay,
//         originalPrice,
//         tags,
//         "image": image.asset->url
//       }`,
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
//     }, [carId]);

//     if (loading) return <p>Loading car details...</p>;
//     if (!car) return <p>Car not found!</p>;

//     return (
//         <div>
//             <Header/>
//             <div className="flex flex-col lg:flex-row gap-8">
//                 <Sidebar />
//         <div className="max-w-7xl mx-auto px-4 py-8"> 
//                 <div className="bg-white rounded-lg shadow-md p-6 mb-8">


//             <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
//                 {/* Left Column - Image */}
//                 <div className="space-y-4">
//                     <div className="relative rounded-lg overflow-hidden bg-white p-6 border border-gray-300 shadow-lg border-card-border">
//                         {car.image && (
//                             <Image
//                                 src={car.image}
//                                 alt={car.name}
//                              className="w-full h-1/3 object-cover rounded-lg" 
//                               width={800}
//                                 height={1600}

//                             />
//                         )}
//                     </div>
//                                 <div className="flex gap-2">
//                                     <Image
//                                         src="/c5.png"
//                                         alt="Nissan GT-R Thumbnail 1"
//                                         width={100}
//                                         height={100}
//                                         className="w-1/2 h-auto object-cover rounded-lg"
//                                     />
//                                     <Image
//                                         src="/c4.png"
//                                         alt="Nissan GT-R Thumbnail 2"
//                                         width={100}
//                                         height={100}
//                                         className="w-1/2 h-auto object-cover rounded-lg"
//                                     />
//                                     <Image
//                                         src="/c3.png"
//                                         alt="Nissan GT-R Thumbnail 3"
//                                         width={100}
//                                         height={100}
//                                         className="w-1/2 h-auto object-cover rounded-lg"
//                                     />
//                                 </div>
//                 </div>

//                 {/* Right Column - Details */}
//                 <div className="space-y-6">
//                     <div className="flex justify-between items-start">
//                         <div>
//                             <h1 className="text-4xl font-extrabold text-gray-900">{car.name}</h1>
//                             <div className="flex items-center gap-2 mt-2">

//                                 <span className="flex items-center mb-2 text-gray-600">{car.brand}</span>
//                                             <div className="flex items-center mb-2">
//                                                 <Star className="text-yellow-400 fill-current" />
//                                                 <Star className="text-yellow-400 fill-current" />
//                                                 <Star className="text-yellow-400 fill-current" />
//                                                 <Star className="text-yellow-400 fill-current" />
//                                                 <Star className="text-gray-300" />
//                                                 <span className="ml-2 text-gray-600">440+ Reviewer</span>
//                                             </div>
//                             </div>
//                         </div>
//                     </div>

//                     <p className="text-gray-700 mb-4">{car.description}</p>

//                     <div className="grid grid-cols-2 gap-4 mb-6">
//                         <div className="flex items-center mt-3">
//                             <span className="font-bold text-gray-800">Type:</span> {car.type}
//                         </div>
//                         <div className="flex items-center mt-3">
//                             <span className="font-bold text-gray-800">Fuel Capacity:</span> {car.fuelCapacity}
//                         </div>
//                         <div className="flex items-center">
//                             <span className="font-bold text-gray-800">Transmission:</span> {car.transmission}
//                         </div>
//                         <div className="flex items-center">
//                             <span className="font-bold text-gray-800">Seating Capacity:</span> {car.seatingCapacity}
//                         </div>
//                     </div>
//                     <div className="flex items-center justify-between">
//                         <div>
//                             <p className="text-3xl font-bold mt-7">
//                                 ${car.pricePerDay}
//                                 <span className="text-lg font-normal text-muted-foreground">/day</span>
//                             </p>
//                             <p className="text-lg text-muted-foreground line-through">${car.originalPrice}</p>
//                         </div>
//                         <button 
//                                         onClick={() => addToCart(car)} // Add car to cart on button cli
//                         className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition duration-300">
//                             Book Now
//                         </button>
//                     </div>
//                 </div>
//             </div>
//             </div>


//                 <div className="flex-1">
//                     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//                         {cars.map((car, index) => (
//                             <CarCard key={index} car={car} />
//                         ))}
//                     </div>
//                         <div className="mt-8 flex justify-center">
//                             <Link href="/category/components">
//                                 <Button size="lg">Show more cars</Button>
//                             </Link>
//                         </div>
//                 </div>
//             </div>


//         </div>
//             <Footer />  
//         </div>
//     );
// };

// export default CarDetail;

// "use client";

// import React, { useState, useEffect } from "react";
// import { createClient } from "@sanity/client";
// import Image from "next/image";
// import { Header } from "./components/Header";
// import { Sidebar } from "./components/Sidebar";
// import { Star } from "lucide-react";
// import { useSearchParams } from "next/navigation";
// import Footer from "./components/footer";
// import CarDisplay from "./components/car";
// import { Suspense } from "react"; // ✅ Suspense import karein
//  // Sanity client setup
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
//         alert(`${car.name} has been added to your cart!`);
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
       
//                 <Suspense fallback={<div>Loading Car Details...</div>}>
//                 <div className="flex-1">
//                     <CarDisplay />
//                     <div className="flex justify-center mt-8 mb-8">
//                         <button className="bg-morent-blue text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors">
//                             Show more cars
//                         </button>
//                     </div>
//                 </div>
//             </Suspense>
            

//             {/* <div className="flex-1">
//                 <CarDisplay />
//                 <div className="flex justify-center mt-8 mb-8">
//                     <button className="bg-morent-blue text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors">
//                         Show more cars
//                     </button>
//                 </div>
//             </div> */}
//             <Footer />
//         </div>
      
//     );
// };
 
//  export default CarDetail;

// app/car-detail/page.tsx
import { Suspense } from "react";
import CarDetail from "./components/CarDetail"; // Child component import karein

export default function CarDetailPage() {
    return (
        <Suspense fallback={<div>Car details loading!</div>}>
            <CarDetail /> {/* Yahan original component ko use karein */}
        </Suspense>
    );
}
