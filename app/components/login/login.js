import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import "./login.css"; // Ensure this path is correct

const Login = ({ setUser  }) => {
    const { register, handleSubmit, setError, formState: { errors } } = useForm();
    const [showPassword, setShowPassword] = useState(false); // State to manage password visibility

    const onSubmit = async (data) => {
        data.action = 'login'; 
        try {
            const response = await axios.post('/api/auth', data, {
                headers: { 'Content-Type': 'application/json' },
            });

            setUser (response.data); // Set the logged-in user
        } catch (err) {
            console.log('Login failed:', err.message);
            if (err.response) {
                setError("email", { message: err.response.data.message || 'Login failed. Please try again.' });
            } else {
                setError("email", { message: err.message });
            }
        }
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword); // Toggle the password visibility
    };

    return (
        <div>
            <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
                <h2>Login</h2>
                <input 
                    {...register('email', { required: true })} 
                    className="email-input" 
                    placeholder="Email" 
                    type="email"  required
                />
                {errors.email && <p className="error-message">{errors.email.message}</p>}
                <div className="password-container">
                    <input 
                        {...register('password', { required: true })} 
                        className="password-input" 
                        type={showPassword ? 'text' : 'password'} // Change type based on visibility
                        placeholder="Password"  required
                    />
                    <button 
                        type="button" 
                        onClick={togglePasswordVisibility} 
                        className="toggle-password"
                    >
                       {showPassword ? 'Hide' : 'Show'} {/* Toggle button text */}
                    </button>    
                </div>
                {errors.password && <p className="error-message">{errors.password.message}</p>}
                <div className='tcs'>
                    <input type='checkbox' {...register('terms', { required: false })} />
                    <p>I want to receive Promotional & Marketing Emails</p>
                </div>
                <button  className='loginbutton' type="submit">Login</button>
            </form>
        </div>
    );
};

export default Login;