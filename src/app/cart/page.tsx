// // "use client";

// // import React, { useEffect, useState } from "react";
// // import Swal from "sweetalert2";

// // // Define car type
// // interface Car {
// //     _id: string;
// //     name: string;
// //     price: number;
// //     quantity?: number;
// // }

// // export default function CartPage() {
// //     const [cart, setCart] = useState<Car[]>([]);

// //     // Load cart from localStorage when component mounts
// //     useEffect(() => {
// //         const savedCart = localStorage.getItem("cart");
// //         if (savedCart) {
// //             setCart(JSON.parse(savedCart));
// //         }
// //     }, []);

// //     // Save cart to localStorage when cart changes
// //     useEffect(() => {
// //         localStorage.setItem("cart", JSON.stringify(cart));
// //     }, [cart]);

// //     // Add to Cart function
// //     const addToCart = (car: Car) => {
// //         setCart((prevCart) => {
// //             const existingItem = prevCart.find((item) => item._id === car._id);
// //             if (existingItem) {
// //                 return prevCart.map((item) =>
// //                     item._id === car._id ? { ...item, quantity: (item.quantity || 1) + 1 } : item
// //                 );
// //             }
// //             return [...prevCart, { ...car, quantity: 1 }];
// //         });

// //         Swal.fire({
// //             title: "Added to Cart!",
// //             text: `${car.name} has been added.`,
// //             icon: "success",
// //             toast: true,
// //             position: "top-right",
// //             timer: 1500,
// //             showConfirmButton: false,
// //         });
// //     };

// //     // Increase quantity
// //     const increaseQuantity = (_id: string) => {
// //         setCart((prevCart) =>
// //             prevCart.map((item) =>
// //                 item._id === _id ? { ...item, quantity: (item.quantity || 1) + 1 } : item
// //             )
// //         );
// //     };

// //     // Decrease quantity
// //     const decreaseQuantity = (_id: string) => {
// //         setCart((prevCart) =>
// //             prevCart.map((item) =>
// //                 item._id === _id && item.quantity! > 1
// //                     ? { ...item, quantity: item.quantity! - 1 }
// //                     : item
// //             )
// //         );
// //     };

// //     // Remove item from cart
// //     const removeFromCart = (_id: string) => {
// //         setCart((prevCart) => prevCart.filter((item) => item._id !== _id));

// //         Swal.fire({
// //             title: "Removed from Cart!",
// //             text: "The item has been removed.",
// //             icon: "error",
// //             toast: true,
// //             position: "top-right",
// //             timer: 1500,
// //             showConfirmButton: false,
// //         });
// //     };

// //     // Calculate total amount
// //     const totalAmount = cart.reduce((acc, item) => acc + item.quantity! * item.price, 0);

// //     return (
// //         <div className="p-6">
// //             <h2 className="text-2xl font-bold mb-4">Your Cart</h2>

// //             {cart.length === 0 ? (
// //                 <p>Your cart is empty.</p>
// //             ) : (
// //                 cart.map((item) => (
// //                     <div key={item._id} className="flex justify-between items-center border-b pb-4 mb-4">
// //                         <p className="text-lg">{item.name} - ${item.price}</p>
// //                         <div className="flex gap-2 items-center">
// //                             <button
// //                                 onClick={() => increaseQuantity(item._id)}
// //                                 className="px-2 py-1 bg-green-500 text-white rounded"
// //                             >
// //                                 +
// //                             </button>
// //                             <span>{item.quantity}</span>
// //                             <button
// //                                 onClick={() => decreaseQuantity(item._id)}
// //                                 className="px-2 py-1 bg-red-500 text-white rounded"
// //                             >
// //                                 -
// //                             </button>
// //                             <button
// //                                 onClick={() => removeFromCart(item._id)}
// //                                 className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
// //                             >
// //                                 Remove
// //                             </button>
// //                         </div>
// //                     </div>
// //                 ))
// //             )}

// //             <h3 className="text-xl font-bold mt-4">Total: ${totalAmount.toFixed(2)}</h3>
// //         </div>
// //     );
// // }
// // 'use client';
// // import React from 'react';
// // import { useCart } from './cart-context';
// // import Swal from "sweetalert2";
// // export default function CartPage() {
// //     const { cart, removeFromCart, updateQuantity, getTotalAmount, clearCart } = useCart();

// //     const handleRemove = (carId: number) => {
// //         Swal.fire({
// //             title: 'Remove Car?',
// //             text: 'Are you sure you want to remove this car?',
// //             icon: 'warning',
// //             showCancelButton: true,
// //             confirmButtonColor: '#3085d6',
// //             cancelButtonColor: '#d33',
// //             confirmButtonText: 'Yes, remove it!'
// //         }).then((result) => {
// //             if (result.isConfirmed) {
// //                 removeFromCart(carId);
// //                 Swal.fire(
// //                     'Removed!',
// //                     'Car has been removed from cart.',
// //                     'success'
// //                 );
// //             }
// //         });
// //     };

// //     if (cart.length === 0) {
// //         return <div className="text-center mt-10">Your cart is empty</div>;
// //     }

// //     return (
// //         <div className="container mx-auto p-4">
// //             <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
// //             {cart.map((item) => (
// //                 <div key={item.id} className="flex items-center mb-4 p-4 border rounded">
// //                     <img src={item.image} alt={item.name} className="w-24 h-24 object-cover mr-4" />
// //                     <div className="flex-grow">
// //                         <h2 className="text-xl">{item.name}</h2>
// //                         <p>Price: ${item.price}/day</p>
// //                         <div className="flex items-center mt-2">
// //                             <button
// //                                 onClick={() => updateQuantity(item.id, item.quantity - 1)}
// //                                 className="bg-red-500 text-white px-2 py-1 rounded"
// //                             >
// //                                 -
// //                             </button>
// //                             <span className="mx-4">{item.quantity}</span>
// //                             <button
// //                                 onClick={() => updateQuantity(item.id, item.quantity + 1)}
// //                                 className="bg-green-500 text-white px-2 py-1 rounded"
// //                             >
// //                                 +
// //                             </button>
// //                         </div>
// //                     </div>
// //                     <div>
// //                         <p className="font-bold">Total: ${item.price * item.quantity}</p>
// //                         <button
// //                             onClick={() => handleRemove(item.id)}
// //                             className="bg-red-600 text-white px-4 py-2 rounded mt-2"
// //                         >
// //                             Remove
// //                         </button>
// //                     </div>
// //                 </div>
// //             ))}
// //             <div className="mt-6 flex justify-between items-center">
// //                 <h2 className="text-2xl font-bold">Total Amount: ${getTotalAmount()}</h2>
// //                 <button
// //                     onClick={() => {
// //                         Swal.fire({
// //                             title: 'Checkout',
// //                             text: `Total amount: $${getTotalAmount()}. Proceed to checkout?`,
// //                             icon: 'question',
// //                             showCancelButton: true,
// //                             confirmButtonText: 'Yes, checkout!'
// //                         }).then((result) => {
// //                             if (result.isConfirmed) {
// //                                 clearCart();
// //                                 Swal.fire('Checkout Complete!', 'Thank you for your rental.', 'success');
// //                             }
// //                         });
// //                     }}
// //                     className="bg-blue-600 text-white px-6 py-3 rounded"
// //                 >
// //                     Checkout
// //                 </button>
// //             </div>
// //         </div>
// //     );
// // }
// "use client";

// import React from "react";
// import { useCart } from "./CartContext";
// import Header from "../car-detail/components/Header";
// import Footer from "../car-detail/components/footer";

// const Cart = () => {
//     const { cart, increaseQuantity, decreaseQuantity, removeFromCart } = useCart();

//     return (
//         <div>
//             <Header />
//             <div className="max-w-7xl mx-auto px-4 py-16">
//                 <h1 className="text-3xl font-bold mb-36 mt-2 ">Your Cart</h1>
//                 {cart.map((item) => (
//                     <div key={item._id} className="flex justify-between items-center mb-4">
//                         <p>{item.name}</p>
//                         <div className="flex items-center gap-2">
//                             <button onClick={() => increaseQuantity(item._id)} className="bg-black px-2 py-1 text-white">
//                                 +
//                             </button>
//                             <span>{item.quantity}</span>
//                             <button onClick={() => decreaseQuantity(item._id)} className="bg-green-600 px-2 py-1 text-white">
//                                 -
//                             </button>
//                             <button onClick={() => removeFromCart(item._id)} className="bg-red-600 px-4 py-1 text-white">
//                                 Remove
//                             </button>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//             <Footer />
//         </div>
//     );
// };

// export default Cart;
"use client";

import { useCart } from "./CartContext";
import  Header  from "../category/components/Header";
import Footer from "../car-detail/components/footer"
import Swal from "sweetalert2";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { useRouter } from "next/navigation";
import { Car } from "../../../types/car";



const CartPage = () => {
    const { cart, removeFromCart, increaseQuantity, decreaseQuantity, getTotalAmount } = useCart();

    const router = useRouter();

    const handleProceed = () => {
        // alert("Proceeding to checkout! Total amount: $" + getTotalAmount());
        Swal.fire({
            title: "Processing your order...",
            text: "Please wait a moment.",
            icon: "info",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Proceed",
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire(
                    "Success!",
                    "Your order has been successfully processed!",
                    "success"
                );
                router.push ("/checkout")
                // Clear the cart after proceeding (optional)
                setCartItems([]);
            }
        });
    };
        return (
            <div>
                <Header />
                <div className="max-w-7xl mx-auto p-4 bg-gray-100 min-h-screen">
                    <h1 className="text-3xl font-bold mb-6 mt-2 text-center">Your Cart</h1>
                    {cart.length === 0 ? (
                        <p className="text-center">Your cart is empty!</p>
                    ) : (
                        <>
                            <div className="space-y-4">
                                {cart.map((item) => (
                                    <div
                                        key={item._id}
                                        className="flex flex-col sm:flex-row items-center justify-between bg-white p-4 rounded-lg shadow-md"
                                    >
                                        {/* Thumbnail Image */}
                                        <div className="flex items-center gap-4">
                                            {item.image && (
                                                <Image
                                                    src={urlFor(item.image).url()} // Add a placeholder image path if no image is available
                                                    alt="image"
                                                    width={60}
                                                    height={60}
                                                    className="rounded-lg border border-gray-300"
                                                />
                                            )}
                                            <div>
                                                <p className="font-bold text-center sm:text-left">{item.name}</p>
                                                <p className="text-sm text-gray-500 text-center sm:text-left">Price: ${item.pricePerDay} | Day</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-2 mt-4 sm:mt-0">
                                            <button
                                                onClick={() => increaseQuantity(item._id)}
                                                className="bg-black text-white px-2 py-1 rounded"
                                            >
                                                +
                                            </button>
                                            <span>{item.quantity || 1}</span>
                                            <button
                                                onClick={() => decreaseQuantity(item._id)}
                                                className="bg-green-600 text-white px-2 py-1 rounded"
                                            >
                                                -
                                            </button>
                                            <button
                                                onClick={() => removeFromCart(item._id)}
                                                className="bg-red-600 text-white px-4 py-2 rounded"
                                            >
                                                Remove
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="mt-6 text-center">
                                <h2 className="text-xl font-bold">Total: ${getTotalAmount()}</h2>
                                <button
                                    onClick={handleProceed}
                                    className="mt-4 w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                                >
                                    Proceed to Checkout
                                </button>
                            </div>
                        </>
                    )}
                </div>
                <Footer />
            </div>
        );
    };

    export default CartPage;
    
const setCartItems = (items: Car[]) => {
    localStorage.setItem("cart", JSON.stringify(items));
};




