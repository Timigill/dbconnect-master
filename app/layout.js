'use client';
import "./globals.css";

import { useState } from 'react';
import React from 'react';
export default function RootLayout({ children }) {
    const [user, setUser ] = useState(null); 

    return (
        <html lang="en">
            <body>
           
                <main>
                    {React.cloneElement(children, { setUser  })} {/* Pass setUser  to children */}
                </main>
            </body>
        </html>
    );
}