// app/page.js
'use client';
import { useState } from 'react';
import Login from '@/app/components/login/login';
import Signup from '@/app/components/signup/signup';
import Dashboard from './components/dashboard/dashboard';

export default function Home() {
    const [user, setUser ] = useState(null);

    return (
        <div className='body'>
            <div className='box'>
                <h1 className='auth'>Authentication</h1>
                {!user ? (
                    <>
                        <div className='container1'>
                            <div className='login-form1'>  
                                <Login setUser ={setUser } />
                            </div> 
                            <div className='signup-form1'> 
                                <Signup setUser ={setUser } />
                            </div>
                        </div>
                    </>
                ) : (
                    <>
                        <h2>Welcome, {user.fullName}!</h2>
                        <Dashboard setUser ={setUser } /> {/* Pass setUser  to Dashboard */}
                    </>
                )}
            </div>
        </div>
    );
}