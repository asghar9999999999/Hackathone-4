"use client";

import Header  from "../../homepage/components/header";
import LocationPicker from "./LocationPicker";
import { Sidebar } from "./Sidebar";
import Footer from "./footer";
import CarDisplay from "./car";
import Link from "next/link";

const Category = () => {
    return (
        <div className="min-h-screen bg-morent-background">
            <Header/>
            <main className="container py-8 px-4 md:px-8">
                <div className="flex flex-col md:flex-row gap-4 mb-8">
                    <LocationPicker />
                     </div>
                <div className="flex flex-col lg:flex-row gap-8">
                    <Sidebar />

                  {/* Responsive Code */}

                    <div className="flex-1">
                        <CarDisplay />
                        <div className="flex justify-center mt-8">
                            <button className="bg-morent-blue text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors"><Link href="/category/components">
                                Show more cars
                            </Link>
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
