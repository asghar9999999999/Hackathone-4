// // "use client";

// // import React, { createContext, useContext, useState, ReactNode } from "react";
// // import Swal from "sweetalert2";

// // interface Car {
// //     _id: string;
// //     name: string;
// //     pricePerDay: number;
// //     quantity?: number;
// // }

// // interface CartContextProps {
// //     cart: Car[];
// //     addToCart: (car: Car) => void;
// //     removeFromCart: (carId: string) => void;
// //     increaseQuantity: (carId: string) => void;
// //     decreaseQuantity: (carId: string) => void;

// // }

// // const CartContext = createContext<CartContextProps | undefined>(undefined);

// // export const CartProvider = ({ children }: { children: ReactNode }) => {
// //     const [cart, setCart] = useState<Car[]>([]);

// //     const addToCart = (car: Car) => {
// //         setCart((prevCart) => {
// //             const existingCar = prevCart.find((item) => item._id === car._id);
// //             if (existingCar) {
// //                 return prevCart.map((item) =>
// //                     item._id === car._id
// //                         ? { ...item, quantity: (item.quantity || 1) + 1 }
// //                         : item
// //                 );
// //             }
// //             return [...prevCart, { ...car, quantity: 1 }];
// //         });

// //         Swal.fire({
// //             title: "Added to Cart!",
// //             text: `${car.name} has been added successfully.`,
// //             icon: "success",
// //             timer: 1200,
// //             showConfirmButton: false,
// //         });
// //     };

// //     const removeFromCart = (carId: string) => {
// //         setCart((prevCart) => prevCart.filter((item) => item._id !== carId));
// //     };

// //     const increaseQuantity = (carId: string) => {
// //         setCart((prevCart) =>
// //             prevCart.map((item) =>
// //                 item._id === carId ? { ...item, quantity: (item.quantity || 1) + 1 } : item
// //             )
// //         );
// //     };

// //     const decreaseQuantity = (carId: string) => {
// //         setCart((prevCart) =>
// //             prevCart.map((item) =>
// //                 item._id === carId && item.quantity! > 1
// //                     ? { ...item, quantity: item.quantity! - 1 }
// //                     : item
// //             )
// //         );


       
// //     };

// //     return (
// //         <CartContext.Provider
// //             value={{ cart, addToCart, removeFromCart, increaseQuantity, decreaseQuantity,  }}
// //         >
// //             {children}
// //         </CartContext.Provider>
// //     );
// // };

// // export const useCart = () => {
// //     const context = useContext(CartContext);
// //     if (!context) {
// //         throw new Error("useCart must be used within a CartProvider");
// //     }
// //     return context;
// // };
// "use client";

// import React, { createContext, useContext, useState, ReactNode } from "react";
// import Swal from "sweetalert2";

// interface Car {
//     image: React.JSX.Element;
//     _id: string;
//     name: string;
//     pricePerDay: number;
//     quantity?: number;
// }

// interface CartContextProps {
//     cart: Car[];
//     addToCart: (car: Car) => void;
//     removeFromCart: (carId: string) => void;
//     increaseQuantity: (carId: string) => void;
//     decreaseQuantity: (carId: string) => void;
//     getTotalAmount: () => number; // New method for total amount calculation
// }

// const CartContext = createContext<CartContextProps | undefined>(undefined);

// export const CartProvider = ({ children }: { children: ReactNode }) => {
//     const [cart, setCart] = useState<Car[]>([]);

//     const addToCart = (car: Car) => {
//         setCart((prevCart) => {
//             const existingCar = prevCart.find((item) => item._id === car._id);
//             if (existingCar) {
//                 return prevCart.map((item) =>
//                     item._id === car._id
//                         ? { ...item, quantity: (item.quantity || 1) + 1 }
//                         : item
//                 );
//             }
//             return [...prevCart, { ...car, quantity: 1 }];
//         });

//         Swal.fire({
//             title: "Added to Cart!",
//             text: `${car.name} has been added successfully.`,
//             icon: "success",
//             timer: 1500,
//             showConfirmButton: false,
//         });
//     };

//     const removeFromCart = (carId: string) => {
//         setCart((prevCart) => prevCart.filter((item) => item._id !== carId));
//     };

//     const increaseQuantity = (carId: string) => {
//         setCart((prevCart) =>
//             prevCart.map((item) =>
//                 item._id === carId ? { ...item, quantity: (item.quantity || 1) + 1 } : item
//             )
//         );
//     };

//     const decreaseQuantity = (carId: string) => {
//         setCart((prevCart) =>
//             prevCart.map((item) =>
//                 item._id === carId && item.quantity! > 1
//                     ? { ...item, quantity: item.quantity! - 1 }
//                     : item
//             )
//         );
//     };

//     const getTotalAmount = () => {
//         return cart.reduce((total, item) => total + item.pricePerDay * (item.quantity || 1), 0);
//     };

//     return (
//         <CartContext.Provider value={{ cart, addToCart, removeFromCart, increaseQuantity, decreaseQuantity, getTotalAmount }}>

//             {children}
//         </CartContext.Provider>
//     );
// };

// export const useCart = () => {
//     const context = useContext(CartContext);
//     if (!context) {
//         throw new Error("useCart must be used within a CartProvider");
//     }
//     return context;
// };
