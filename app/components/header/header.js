import React from 'react';
import "./header.css";
import Link from 'next/link';
import { useCart } from '@/app/context/cartcontext'; // Import the useCart hook

function Header() {
    const { cartNotify } = useCart(); // Access cartNotify from context

    return (
        <header>
            <div className="logo">
                <Link href="/"><img src="/logo.png" alt="Logo" /></Link>
            </div>
            <div className='links'>
<<<<<<< Updated upstream
              
            <Link href="/login"><li className='li'>Login</li></Link>
            <Link href="/signup"><li className='li'>Signup</li></Link>
            <Link href="/cart"><li className='li'>Cart</li></Link>
                    
=======
            <Link href="/"><li className='li'>Home</li></Link>
                <Link href="/login"><li className='li'>Login</li></Link>
                <Link href="/products"><li className='li'>Products</li></Link>
                <Link href="/signup"><li className='li'>Signup</li></Link>
                <Link href="/cart">
                    <li className='li'>
                        <span className="span">{cartNotify}</span>Cart {/* Display cartNotify */}
                    </li>
                </Link>
>>>>>>> Stashed changes
            </div>
        </header>
    );
}

export default Header;