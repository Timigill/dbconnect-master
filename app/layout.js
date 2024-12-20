'use client';
import "./globals.css";
import Header from './components/header/header';
import { useState } from 'react';
import React from 'react';
import { CartProvider } from "./context/CartContext";
export default function RootLayout({ children }) {
    const [user, setUser ] = useState(null); 

    return (
        <html lang="en">
            <head><title>StepHub</title></head>
            <body>
           <CartProvider> <main>
                    <Header></Header>
                    {React.cloneElement(children, { setUser  })} {}
                </main>
                </CartProvider>
               
            </body>
        </html>
    );
}