"use client";

import { Header } from "./Header";
import LocationPicker from "./LocationPicker";
import { Sidebar } from "./Sidebar";
import CarCard from "./CarCard";
import Footer from "./footer";
import CarDisplay from "./car";
const cars = [
    {
        _id : "1",

        name: "Koenigsegg",
        brand: "Koenigsegg",
        description: "High-performance sports car with cutting-edge technology.",
        type: "Sport",
        fuelCapacity: "90L",
        transmission: "Manual",
        seatingCapacity: "2",
        pricePerDay: "99.00",
        originalPrice: "120.00",
        tags: ["Luxury", "High Performance"],
        image: "/c6.png?height=200&width=400",
        liked: true,
        slug: { current: "car-1" },
        rating: 4.5,
    },
    { 
        _id : "2",
        name: "Nissan GT-R",
        brand: "Nissan",
        description: "Iconic Japanese sports car known for its performance and handling.",
        type: "Sport",
        fuelCapacity: "90L",
        transmission: "Auto",
        seatingCapacity: "4",
        pricePerDay: "80.00",
        originalPrice: "100.00",
        tags: ["Fast", "Iconic"],
        liked: false,
        slug: { current: "car-2" },
        rating: 4.5,
        image: "/c4.png?height=200&width=400",
    },
    { 
        _id : "3",
        name: "Rolls-Royce Phantom",
        brand: "Rolls-Royce",
        description: "Ultimate luxury sedan with unparalleled comfort and prestige.",
        type: "Sedan",
        fuelCapacity: "100L",
        transmission: "Auto",
        seatingCapacity: "5",
        pricePerDay: "96.00",
        originalPrice: "120.00",
        tags: ["Luxury", "Comfort"],
        image: "/c4.png?height=200&width=400",
        liked: true,
        slug: { current: "car-3" },
        rating: 4.5,
    },
    { 
        _id : "4",
        name: "Porsche 911",
        brand: "Porsche",
        description: "Legendary sports car with timeless design and exhilarating performance.",
        type: "Sport",
        fuelCapacity: "80L",
        transmission: "Manual",
        seatingCapacity: "4",
        pricePerDay: "85.00",
        originalPrice: "110.00",
        tags: ["Classic", "Performance"],
        liked: false,
        slug: { current: "car-4" },
        rating: 4.5,
        image: "/c2.png?height=200&width=400",
    },
    
    { 
        _id : "5",
        name: "All New Rush",
        brand: "Toyota",
        description: "Versatile compact SUV perfect for urban adventures.",
        type: "SUV",
        fuelCapacity: "70L",
        transmission: "Auto",
        seatingCapacity: "7",
        pricePerDay: "72.00",
        originalPrice: "80.00",
        tags: ["Family", "Efficient"],
        image: "/c6.png?height=200&width=400",
        liked: false,
        slug: { current: "car-5" },
        rating: 4.5,
    },
    { 
        _id : "6",
        name: "CR - V",
        brand: "Honda",
        description: "Reliable and spacious SUV with advanced safety features.",
        type: "SUV",
        fuelCapacity: "80L",
        transmission: "Auto",
        seatingCapacity: "5",
        pricePerDay: "80.00",
        originalPrice: "100.00",
        tags: ["Reliable", "Spacious"],
        image: "/c7.png?height=200&width=400",
        liked: true,
        slug: { current: "car-6" },
        rating: 4.5,
    },
    { 
        _id : "7",
        name: "All New Terios",
        brand: "Daihatsu",
        description: "Compact SUV with great maneuverability and fuel efficiency.",
        type: "SUV",
        fuelCapacity: "60L",
        transmission: "Manual",
        seatingCapacity: "5",
        pricePerDay: "74.00",
        originalPrice: "90.00",
        tags: ["Compact", "Efficient"],
        image: "/c1.png?height=200&width=400",
        liked: false,
        slug: { current: "car-7" },
        rating: 4.5,
    },
    { 
        _id : "8",
        name: "MG ZS",
        brand: "MG",
        description: "Modern SUV with stylish design and advanced technology.",
        type: "SUV",
        fuelCapacity: "75L",
        transmission: "Auto",
        seatingCapacity: "5",
        pricePerDay: "80.00",
        originalPrice: "100.00",
        tags: ["Modern", "Tech"],
        image: "/c2.png?height=200&width=400",
        liked: true,
        slug: { current: "car-8" },
        rating: 4.5,
    },
    {
        _id : "9",
        name: "Koenigsegg",
        brand: "Koenigsegg",
        description: "High-performance sports car with cutting-edge technology.",
        type: "Sport",
        fuelCapacity: "90L",
        transmission: "Manual",
        seatingCapacity: "2",
        pricePerDay: "99.00",
        originalPrice: "120.00",
        tags: ["Luxury", "High Performance"],
        image: "/c6.png?height=200&width=400",
        liked: true,
        slug: { current: "car-9" },
        rating: 4.5,
    },
    // Add more cars here...
];

const Category = () => {
    return (
        <div className="min-h-screen bg-morent-background">
            <Header />
            <main className="container py-8 px-4 md:px-8">
                <div className="flex flex-col md:flex-row gap-4 mb-8">
                    <LocationPicker />
                     </div>
                <div className="flex flex-col lg:flex-row gap-8">
                    <Sidebar />

                  {/* Responsive Code */}

                    <div className="flex-1">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {cars.map((car, index) => (
                                <CarCard key={index} car={car} />
                            ))}
                        </div>
                        <CarDisplay />
                        <div className="flex justify-center mt-8">
                            <button className="bg-morent-blue text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors">
                                Show more cars
                            </button>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Category;
