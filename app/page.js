
'use client';
import { useState , useEffect} from 'react';
import Login from '@/app/components/login/login';
import { SpeedInsights } from "@vercel/speed-insights/next"

import Signup from '@/app/components/signup/signup';


import Dashboard from './components/dashboard/dashboard';


      export default function Home() {
    const [user, setUser ] = useState(null);

    useEffect(() => {
        const storedUser  = localStorage.getItem('user');
        if (storedUser ) {
            setUser (JSON.parse(storedUser )); 
        }
    }, []);

    return (
        <div className='body'>
            <div className='box'>
                <h1 className='auth'>Authentication</h1>
                {!user ? (
                    <>
                       <SpeedInsights/> <div className='container1'>
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
                        <Dashboard setUser ={setUser } /> {/* fddh*/}
                    </>
                )}
            </div>
        </div>
    );
}