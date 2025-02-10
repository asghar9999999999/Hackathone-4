import type { Metadata } from "next"
import "./globals.css"
import React from "react";
import { CartProvider } from "./context/CartContext";

export const metadata: Metadata = {
    title: "MORENT - Car Rental",
    description: "The best platform for car rental",
}



export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body>
                <CartProvider>
                    {children}
                </CartProvider>
            </body>
        </html>
    )
}