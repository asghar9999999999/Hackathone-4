import type { Car } from "../../types/car"
import Header from "./homepage/components/header"
import Hero from "./homepage/components/hero"
import SearchForm from "./homepage/components/search-form"
import CarCard from "./homepage/components/car-card"
import Footer from "./homepage/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import CarDisplay from "./display/car"

const popularCars: Car[] = [
    {
        _id: "1",
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
        slug: { current: "mg-zs" },
        rating: 0
    },
    {
        _id: "2",
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
        image: "/c3.png?height=200&width=400",
        liked: false,
        slug: { current: "mg-zs" },
        rating: 0
    },
    {
        _id: "3",
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
        slug: { current: "mg-zs" },
        rating: 0
    },
    {
        _id: "4",
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
        image: "/c5.png?height=200&width=400",
        liked: false,
        slug: { current: "mg-zs" },
        rating: 0
    },
]

const recommendedCars: Car[] = [
    {
        _id: "5",
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
        slug: { current: "mg-zs" },
        rating: 0
    },
    {
        _id: "6",
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
        slug: { current: "mg-zs" },
        rating: 0
    },
    {
        _id: "7",
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
        slug: { current: "mg-zs" },
        rating: 0
    },
    {
        _id: "8",
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
        slug: { current: "mg-zs" },
        rating: 0
    },
]

export default function Home() {
    return (
        <div className="flex min-h-screen flex-col bg-background">
            <Header />
            <main className="flex-1">
                <Hero />
                <SearchForm />
                <div className="container mx-auto px-4 py-8">
                    <section className="mb-8">
                        <div className="mb-6 flex items-center justify-between">
                            <h2 className="text-xl font-semibold">Sanity Car</h2>
                            <a href="/category/components" className="text-sm text-primary hover:underline">
                                View All
                            </a>
                        </div>
                        <CarDisplay />
                        <div className="mb-6 flex items-center justify-between">
                            <h2 className="text-xl font-semibold">Popular Car</h2>
                            <a href="/category/components" className="text-sm text-primary hover:underline">
                                View All
                            </a>
                        </div>
                        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                            {popularCars.map((car) => (
                                <CarCard key={car.name} car={car} />
                            ))}
                        </div>
                    </section>
                    <section>
                        <div className="mb-6 flex items-center justify-between">
                            <h2 className="text-xl font-semibold">Recommendation Car</h2>
                            <a href="/category/components" className="text-sm text-primary hover:underline">
                                View All
                            </a>
                        </div>

                        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                            {recommendedCars.map((car) => (
                                <CarCard key={car.name} car={car} />
                            ))}
                        </div>
                        <div className="mt-8 flex justify-center">
                            <Link href="/category/components">
                                <Button size="lg">Show more cars</Button>
                            </Link>
                        </div>
                    </section>
                </div>
            </main>
            <Footer />
        </div>
    )
}

