'use client';
import "./globals.css";
import Header from './components/header/header';
import { useState } from 'react';
import React from 'react';
export default function RootLayout({ children }) {
    const [user, setUser ] = useState(null); 

    return (
        <html lang="en">
            <head><title>StepHub</title></head>
            <body>
           
                <main>
                    <Header></Header>
                    {React.cloneElement(children, { setUser  })} {}
                </main>
            </body>
        </html>
    );
}