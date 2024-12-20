import React from 'react'
import Image from 'next/image'
import "./header.css"
import Link from 'next/link'
// import Login from "../../app/login/page";

function Header() {
    return (
        <header>
            <div className="logo">
            <Link href="/"><img src="/logo.png" alt="Logo" /></Link>
            </div>
            <div className='links'>
              
            <Link href="/login"><li className='li'>Login</li></Link>
            <Link href="/signup"><li className='li'>Signup</li></Link>
            <Link href="/cart"><li className='li'>Cart</li></Link>
                    
            </div>
        </header>
    )
}

export default Header
