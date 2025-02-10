import Header from "./homepage/components/header"
import Hero from "./homepage/components/hero"
import SearchForm from "./homepage/components/search-form"
import Footer from "./homepage/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import CarDisplay from "./display/car"
import React from 'react';
import { CartProvider } from './context/CartContext';
export default function Home() {
    return (
        <CartProvider>
        <div className="flex min-h-screen flex-col bg-background">
            <Header />

            <main className="flex-1">
                <Hero />
                <SearchForm />
                <div className="container mx-auto px-4 py-8">
                    <section className="mb-8">
                        <div className="mb-6 flex items-center justify-between">
                            <h2 className="text-lg md:text-xl font-semibold">Popular Car</h2>
                         
                        </div>
                        <CarDisplay />
                        <div className="mb-6 flex items-center justify-between">
                            <h2 className="text-lg md:text-xl font-semibold"></h2>
                            <a href="/category/components" className="text-xs sm:text-sm text-primary hover:underline">
                                View All
                            </a>
                        </div>
                        </section>
                        {/* <div className="mb-6 flex items-center justify-between">
                            <h2 className="text-lg md:text-xl font-semibold">Popular Car</h2>
                            <a href="/category/components" className="text-xs sm:text-sm text-primary hover:underline">
                                View All
                            </a>
                        </div>
                        <div className="grid gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-4">
                            {popularCars.map((car) => (
                                <CarCard key={car.name} car={car} />
                            ))}
                        </div>
                    </section>
                    <section>
                        <div className="mb-6 flex items-center justify-between">
                            <h2 className="text-lg md:text-xl font-semibold">Recommendation Car</h2>
                            <a href="/category/components" className="text-xs sm:text-sm text-primary hover:underline">
                                View All
                            </a>
                        </div>

                        <div className="grid gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-4">
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
                </div> */}
                    <div className="mt-8 flex justify-center">
                        <Link href="/category/components">
                            <Button size="lg">Show more cars</Button>
                        </Link>
                    </div>
                </div>
            
            </main>
            <Footer />
        </div>
        </CartProvider>
    );
}
