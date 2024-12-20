import React, { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    // Initialize cart state from sessionStorage
    const [cart, setCart] = useState(() => {
        if (typeof window !== "undefined") {
            const storedCart = sessionStorage.getItem('cart');
            return storedCart ? JSON.parse(storedCart) : [];
        }
        return [];
    });

    // Update sessionStorage whenever the cart changes
    useEffect(() => {
        if (typeof window !== "undefined") {
            sessionStorage.setItem('cart', JSON.stringify(cart));
        }
    }, [cart]);

    const addToCart = (product) => {
        const exists = cart.find((item) => item.id === product.id);
        if (exists) {
            alert(`${product.name} is already in your cart!`);
            return;
        }

        setCart((prevCart) => {
            alert(`${product.name} has been added to your cart!`);
            return [...prevCart, product];
        });
    };

    const removeFromCart = (productId) => {
        setCart((prevCart) => {
            const updatedCart = prevCart.filter((item) => item.id !== productId);
            alert(`Product removed from your cart!`);
            return updatedCart;
        });
    };

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => useContext(CartContext);
