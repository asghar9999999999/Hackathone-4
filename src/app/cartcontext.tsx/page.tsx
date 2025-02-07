// "use client";

// import React, { createContext, useContext, useEffect, useState } from "react";
// import Swal from "sweetalert2";

// // Define car type
// interface Car {
//     _id: string;
//     name: string;
//     price: number;
//     quantity?: number;
// }

// // Create Cart Context
// const cartcontext = createContext<any>(null);

// export function CartProvider({ children }: { children: React.ReactNode }) {
//     const [cart, setCart] = useState<Car[]>([]);

//     // Load cart from localStorage when component mounts
//     useEffect(() => {
//         const savedCart = localStorage.getItem("cart");
//         if (savedCart) {
//             setCart(JSON.parse(savedCart));
//         }
//     }, []);

//     // Save cart to localStorage whenever cart changes
//     useEffect(() => {
//         localStorage.setItem("cart", JSON.stringify(cart));
//     }, [cart]);

//     // Add to Cart function
//     const addToCart = (car: Car) => {
//         setCart((prevCart) => {
//             const existingItem = prevCart.find((item) => item._id === car._id);
//             if (existingItem) {
//                 return prevCart.map((item) =>
//                     item._id === car._id ? { ...item, quantity: (item.quantity || 1) + 1 } : item
//                 );
//             }
//             return [...prevCart, { ...car, quantity: 1 }];
//         });

//         Swal.fire({
//             title: "Added to Cart!",
//             text: `${car.name} has been added.`,
//             icon: "success",
//             toast: true,
//             position: "top-right",
//             timer: 1500,
//             showConfirmButton: false,
//         });
//     };

//     // Increase quantity
//     const increaseQuantity = (_id: string) => {
//         setCart((prevCart) =>
//             prevCart.map((item) =>
//                 item._id === _id ? { ...item, quantity: (item.quantity || 1) + 1 } : item
//             )
//         );
//     };

//     // Decrease quantity
//     const decreaseQuantity = (_id: string) => {
//         setCart((prevCart) =>
//             prevCart.map((item) =>
//                 item._id === _id && item.quantity! > 1
//                     ? { ...item, quantity: item.quantity! - 1 }
//                     : item
//             )
//         );
//     };

//     // Remove from cart
//     const removeFromCart = (_id: string) => {
//         setCart((prevCart) => prevCart.filter((item) => item._id !== _id));
//         Swal.fire({
//             title: "Removed from Cart!",
//             text: "The item has been removed.",
//             icon: "error",
//             toast: true,
//             position: "top-right",
//             timer: 1500,
//             showConfirmButton: false,
//         });
//     };

//     // Calculate total price
//     const totalAmount = cart.reduce((acc, item) => acc + item.quantity! * item.price, 0);

//     return (
//         <cartcontext.Provider
//             value={{ cart, addToCart, increaseQuantity, decreaseQuantity, removeFromCart, totalAmount }}
//         >
//             {children}
//         </cartcontext.Provider>
//     );
// }
// export default cartcontext;

// // Custom Hook
// export function useCart() {
//     return useContext(cartcontext);
// }
"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import Swal from "sweetalert2";

// Define car type
interface Car {
    _id: string;
    name: string;
    price: number;
    quantity?: number;
}

// Define the context type
interface CartContextType {
    cart: Car[];
    addToCart: (car: Car) => void;
    increaseQuantity: (_id: string) => void;
    decreaseQuantity: (_id: string) => void;
    removeFromCart: (_id: string) => void;
    totalAmount: number;
}

// Create Cart Context with proper type
const cartcontext = createContext<CartContextType | null>(null);

export function CartProvider({ children }: { children: React.ReactNode }) {
    const [cart, setCart] = useState<Car[]>([]);

    // Load cart from localStorage when component mounts
    useEffect(() => {
        const savedCart = localStorage.getItem("cart");
        if (savedCart) {
            setCart(JSON.parse(savedCart));
        }
    }, []);

    // Save cart to localStorage whenever cart changes
    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]);

    // Add to Cart function
    const addToCart = (car: Car) => {
        setCart((prevCart) => {
            const existingItem = prevCart.find((item) => item._id === car._id);
            if (existingItem) {
                return prevCart.map((item) =>
                    item._id === car._id ? { ...item, quantity: (item.quantity || 1) + 1 } : item
                );
            }
            return [...prevCart, { ...car, quantity: 1 }];
        });

        Swal.fire({
            title: "Added to Cart!",
            text: `${car.name} has been added.`,
            icon: "success",
            toast: true,
            position: "top-right",
            timer: 1500,
            showConfirmButton: false,
        });
    };

    // Increase quantity
    const increaseQuantity = (_id: string) => {
        setCart((prevCart) =>
            prevCart.map((item) =>
                item._id === _id ? { ...item, quantity: (item.quantity || 1) + 1 } : item
            )
        );
    };

    // Decrease quantity
    const decreaseQuantity = (_id: string) => {
        setCart((prevCart) =>
            prevCart.map((item) =>
                item._id === _id && item.quantity! > 1
                    ? { ...item, quantity: item.quantity! - 1 }
                    : item
            )
        );
    };

    // Remove from cart
    const removeFromCart = (_id: string) => {
        setCart((prevCart) => prevCart.filter((item) => item._id !== _id));
        Swal.fire({
            title: "Removed from Cart!",
            text: "The item has been removed.",
            icon: "error",
            toast: true,
            position: "top-right",
            timer: 1500,
            showConfirmButton: false,
        });
    };

    // Calculate total price
    const totalAmount = cart.reduce((acc, item) => acc + (item.quantity! * item.price), 0);

    return (
        <cartcontext.Provider
            value={{ cart, addToCart, increaseQuantity, decreaseQuantity, removeFromCart, totalAmount }}
        >
            {children}
        </cartcontext.Provider>
    );
}
export default cartcontext;

// Custom Hook
export function useCart() {
    const context = useContext(cartcontext);
    if (!context) {
        throw new Error("useCart must be used within a CartProvider");
    }
    return context;
}
