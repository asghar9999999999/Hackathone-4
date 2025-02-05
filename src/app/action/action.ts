// // import { Car } from "../../../types/car";


// // export const addToCart = (car: Car) => {
// //     const cart: Car[] = JSON.parse(localStorage.getItem("cart") || "[]");
// //     const existingCarIndex = cart.findIndex((item) => item._id === car._id);

// //     if (existingCarIndex > -1) {
// //         cart[existingCarIndex].inventory += 1;
// //     } else {
// //         cart.push({ ...car, inventory: 1 });
// //     }

// //     // Save updated cart back to localStorage
// //     localStorage.setItem("cart", JSON.stringify(cart));
// // };


// // export const removeFromCart = (carId: string) => {
// //     let cart: Car[] = JSON.parse(localStorage.getItem('cart') || '[]')
// //     cart = cart.filter(item => item._id !== carId)
// //     localStorage.setItem('cart', JSON.stringify(cart))
// // }

// // export const updateCartQuantity = (carId: string, quantity: number) => {
// //     const cart: Car[] = JSON.parse(localStorage.getItem('cart') || '[]')
// //     const carIndex = cart.findIndex(item => item._id === carId)

// //     if (carIndex > -1) {
// //         cart[carIndex].inventory = quantity;
// //         localStorage.setItem('cart', JSON.stringify(cart))
// //     }
// // }

// // export const getCartItems = (): Car[] => {
// //     return JSON.parse(localStorage.getItem('cart') || '[]')
// // }
// // actions/actions.ts
// import { Car } from "../../../types/car";


// export const addToWishlist = (product: Car) => {
//     const wishlist: Car[] = JSON.parse(localStorage.getItem('wishlist') || '[]');
//     const existingProductIndex = wishlist.findIndex(item => item._id === product._id);

//     if (existingProductIndex === -1) {
//         wishlist.push(product);
//         localStorage.setItem('wishlist', JSON.stringify(wishlist));
//     }
// };

// export const removeFromWishlist = (productId: string) => {
//     let wishlist: Car[] = JSON.parse(localStorage.getItem('wishlist') || '[]');
//     wishlist = wishlist.filter(item => item._id !== productId);
//     localStorage.setItem('wishlist', JSON.stringify(wishlist));
// };

// export const getWishlistItems = (): Car[] => {
//     return JSON.parse(localStorage.getItem('wishlist') || '[]');
// };

// export const moveAllToCart = () => {
//     const wishlist: Car[] = getWishlistItems();
//     const cart: Car[] = JSON.parse(localStorage.getItem('cart') || '[]');

//     wishlist.forEach(product => {
//         const existingProductIndex = cart.findIndex(item => item._id === product._id);
//         if (existingProductIndex > -1) {
//             cart[existingProductIndex].quantity += 1;
//         } else {
//             cart.push({ ...product, quantity: 1 });
//         }
//     });

//     localStorage.setItem('cart', JSON.stringify(cart));
//     localStorage.setItem('wishlist', '[]');
// };


// export const addToCart = (product: Car) => {
//     const cart: Car[] = JSON.parse(localStorage.getItem('cart') || '[]');
//     const existingProductIndex = cart.findIndex(item => item._id === product._id);

//     if (existingProductIndex > -1) {
//         cart[existingProductIndex].quantity += 1;
//     } else {
//         cart.push({ ...product, quantity: 1 });
//     }

//     localStorage.setItem('cart', JSON.stringify(cart));
// };

// export const removeFromCart = (productId: string) => {
//     let cart: Car[] = JSON.parse(localStorage.getItem('cart') || '[]');
//     cart = cart.filter(item => item._id !== productId);
//     localStorage.setItem('cart', JSON.stringify(cart));
// };

// export const updateCartQuantity = (productId: string, quantity: number) => {
//     const cart: Car[] = JSON.parse(localStorage.getItem('cart') || '[]');
//     const productIndex = cart.findIndex(item => item._id === productId);

//     if (productIndex > -1) {
//         cart[productIndex].quantity = quantity;
//         localStorage.setItem('cart', JSON.stringify(cart));
//     }
// };

// export const getCartItems = (): Car[] => {
//     return JSON.parse(localStorage.getItem('cart') || '[]');
// };
// import { Car } from "../../../types/car";

// export const getCartItems = (): Car[] => {
//     return JSON.parse(localStorage.getItem("cart") || "[]");
// };

// export const setCartItems = (cart: Car[]) => {
//     localStorage.setItem("cart", JSON.stringify(cart));
// };

// export const addToCart = (product: Car, setCart: (cart: Car[]) => void) => {
//     const cart = getCartItems();
//     const existingProductIndex = cart.findIndex((item) => item._id === product._id);

//     if (existingProductIndex > -1) {
//         cart[existingProductIndex].quantity = (cart[existingProductIndex].quantity || 1) + 1;
//     } else {
//         cart.push({ ...product, quantity: 1 });
//     }

//     setCart([...cart]); // Update state immediately
//     setCartItems(cart);
// };



// export const removeFromCart = (productId: string, setCart: (cart: Car[]) => void) => {
//     const cart = getCartItems().filter((item) => item._id !== productId);
//     setCart(cart);
//     setCartItems(cart);
// };

// export const updateCartQuantity = (productId: string, quantity: number, setCart: (cart: Car[]) => void) => {
//     const cart = getCartItems().map((item) =>
//         item._id === productId ? { ...item, quantity: Math.max(1, quantity) } : item
//     );
//     setCart(cart);
//     setCartItems(cart);
// };

// export const handleIncrease = (_id: string, setCart: (cart: Car[]) => void) => {
//     const cart = getCartItems().map((item) =>
//         item._id === _id ? { ...item, quantity: (item.quantity || 1) + 1 } : item
//     );
//     setCart(cart);
//     setCartItems(cart);
// };

// export const handleDecrease = (_id: string, setCart: (cart: Car []) => void) => {
//     const cart = getCartItems().map((item) =>
//         item._id === _id && item.quantity! > 1 ? { ...item, quantity: item.quantity! - 1 } : item
//     );
//     setCart(cart);
//     setCartItems(cart);
// };
