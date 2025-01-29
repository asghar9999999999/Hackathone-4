"use client"
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { createClient } from '@sanity/client';
import { Users } from 'lucide-react';
import { urlFor } from '@/sanity/lib/image';
import { useRouter } from 'next/navigation';

// Sanity client setup
const client = createClient({
    projectId: '32dr44ij', // Replace with your Sanity project ID
    dataset: 'production',
    apiVersion : "2023-01-01",
    useCdn: true,
});

// Car interface for TypeScript
interface Car {
    _id: string;
    name: string;
    brand: string;
    description: string;
    type: string;
    fuelCapacity: string;
    transmission: string;
    seatingCapacity: string;
    pricePerDay: string;
    originalPrice: string;
    tags: string[];
    image? : {
        asset : {
            _ref: string;
            type: 'image';
        };
    };
}

const CarDisplay: React.FC = () => {
    const router = useRouter();
    const [cars, setCars] = useState<Car[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Fetch data from Sanity
        client
            .fetch(
                `*[_type == "car"]{
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
        }`
            )
            .then((data) => {
                setCars(data);
                setLoading(false);
            })
            .catch((error) => {
                console.error('Error fetching cars:', error);
                setLoading(false);
            });
    }, []);

    if (loading) return <p>Loading cars...</p>;

    return (
        <div className="container mx-auto px-4 py-6">
            {/* Responsive grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {cars.map((car) => (
                    <div
                        key={car._id}
                        className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
                    >
                        {/* Car Image */}
                        <div className="relative w-full h-48 bg-white-100 flex items-center justify-center">
                            {car.image && (
                                <Image
                                    src={urlFor(car.image).url()}
                                    alt={car.name}
                                    objectFit="contain"
                                    className="rounded-t-lg"
                                    width={4000}
                                    height={4000}
                                />
                            )}
                      
                            <div className="absolute top-2 right-2 bg-white p-1 rounded-full shadow-md cursor-pointer">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5 text-red-500"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                                </svg>
                            </div>
                        </div>
                        {/* Car Details */}
                        <div className="p-4">
                            <h3 className="text-lg font-bold text-gray-800">{car.name}</h3>
                            <p className="text-sm text-gray-500 mb-2">{car.type}</p>
                            {/* Features */}
                            <div className="flex items-center justify-between text-sm text-gray-600 mb-3">
                                <div className="flex items-center gap-11">
                                    <div className="flex items-center gap-1 text-muted-foreground">
                                        <span className="text-lg">⛽</span>
                                        {car.fuelCapacity}
                                    </div>
                                    <div className="flex items-center gap-1 text-muted-foreground">
                                        <span className="text-lg flex items-center gap-10">🔄</span>
                                        {car.transmission}
                                    </div>
                                </div>
       <div className="flex items-center gap-2 text-muted-foreground">
                        <Users className="h-4 w-4" />
                        {car.seatingCapacity}
                    </div>                            </div>
                            {/* Description */}
                            {car.description && <p className="mt-2 text-sm text-muted-foreground line-clamp-2">{car.description}</p>}       {car.tags && car.tags.length > 0 && (
                                <div className="mt-2.5 flex flex-wrap gap-1">
                                    {car.tags.map((tag, index) => (
                                        <span
                                            key={index}
                                            className="inline-flex items-center rounded-full bg-primary/10 px-2 py-0.5 text-xs text-primary"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            )}
                            {/* Price Section */}
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-lg font-bold mt-7">
                                        ${car.pricePerDay}
                                        <span className="text-sm font-normal text-muted-foreground">/day</span>
                                    </p>
                                    <p className="text-sm text-muted-foreground line-through">${car.originalPrice}</p>
                                </div>
                                <button
                                    onClick={() => router.push(`/car-detail?id=${car._id}`)} // Corrected navigation
                                    className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
                                >
                                    Rent Now
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
export default CarDisplay;
 
