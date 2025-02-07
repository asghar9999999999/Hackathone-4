// import Link from "next/link"
// import { Bell, Heart, Search, Settings, ShoppingCart } from 'lucide-react'
// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
// import Image from "next/image"

// export default function Header() {
//     return (
//         <header className="sticky top-0 z-50 w-full border-b bg-background">
//             <div className="container flex h-16 items-center justify-between px-4">
//                 <Link href="/" className="text-2xl font-bold text-primary">
//                     MORENT
//                 </Link>
                
//                 {/* Search */}

//                 <div className="hidden md:block relative">
//                     <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
//                     <Input
//                         type="search"
//                         placeholder="Search something here"
//                         className="w-[400px] pl-9 pr-4"
//                     />
//                 </div>
//                 <div className="flex items-center gap-2">

//                     <p className="mr-4 text-sm">
//                         <Link href="/">
//                         Home
//                         </Link></p>

//                     <p className="mr-3 text-sm">
//                         <Link href="/about">
//                         About 
//                         </Link>
//                         </p>
//                     {/* 
//                     <Button variant="ghost" size="icon">
//                         <Settings className="h-5 w-5" />
//                     </Button> */}
//                     <p className="mr-2 text-sm">
//                          <Link href="/contact">
//                         Contact Us
//                         </Link>
//                         </p>

//                     <Button variant="ghost" size="icon">
//                         <Link href="/cart">
//                         <ShoppingCart className="h-10 w-14 mr-2" />
//                         </Link>  {/* Updated icon */}
//                     </Button>


//                     {/* <Button variant="ghost" size="icon">
//                         <Bell className="h-5 w-5" />
//                     </Button> */}
            
                    
//                     <Button variant="ghost" size="icon" className="rounded-full">
//                         <Image
//                             src="/Profil.png?height=2000&width=2000"
//                             alt="Sports car"
//                             width={2000}
//                             height={2000}
                        
//                         />
//                     </Button>
//                 </div>
//             </div>
//         </header>
//     )
// }
"use client"
import Link from "next/link";
import { Search, ShoppingCart } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background">
            <div className="container flex h-16 items-center justify-between px-4">
                <Link href="/" className="text-2xl font-bold text-primary">
                    MORENT
                </Link>

                {/* Search */}
                <div className="hidden md:block relative">
                    <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                    <Input
                        type="search"
                        placeholder="Search something here"
                        className="w-[400px] pl-9 pr-4"
                    />
                </div>

                <div className="hidden md:flex items-center gap-2">
                    <Link href="/" className="text-sm mr-4">
                        Home
                    </Link>
                    <Link href="/about" className="text-sm mr-3">
                        About
                    </Link>
                    <Link href="/contact" className="text-sm mr-2">
                        Contact Us
                    </Link>
                    <Button variant="ghost" size="icon">
                        <Link href="/cart">
                            <ShoppingCart className="h-12 w-16 mr-2" /> {/* Adjusted height and width */}
                        </Link>
                    </Button>

                    {/* Sign Up Button */}
                    <div className="flex items-center gap-4">
                        <Link href="/auth">
                            <Button variant="default" size="sm" className="px-4">
                                Sign Up
                            </Button>
                        </Link>
                    </div>
                </div>

                {/* Mobile Menu Button */}
                <Button
                    variant="ghost"
                    size="icon"
                    className="md:hidden"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    <span className="text-xl">☰</span>
                </Button>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="md:hidden bg-background border-t">
                    <nav className="flex flex-col items-start px-4 py-2">
                        <Link href="/" className="py-2 text-sm w-full">
                            Home
                        </Link>
                        <Link href="/about" className="py-2 text-sm w-full">
                            About
                        </Link>
                        <Link href="/contact" className="py-2 text-sm w-full">
                            Contact Us
                        </Link>
                        <Link href="/cart" className="py-2 text-sm w-full flex items-center">
                            <ShoppingCart className="h-4 w-4 mr-2" /> Cart
                        </Link>

                        {/* Sign Up Button */}
                        <div className="flex items-center gap-4">
                            <Link href="/auth">
                                <Button variant="default" size="sm" className="px-4">
                                    Sign Up
                                </Button>
                            </Link>
                        </div>
                    </nav>
                </div>
            )}
        </header>
    );
}
