import React, { useState } from 'react'; // Import useState
import { useForm } from 'react-hook-form';
import axios from 'axios';
import "./signup.css"; // Ensure this path is correct

const Signup = ({ setUser  }) => {
    const { register, handleSubmit, setError, formState: { errors } } = useForm();
    const [showPassword, setShowPassword] = useState(false); // State to manage password visibility

    const onSubmit = async (data) => {
        data.action = 'signup'; 
        try {
            const response = await axios.post('/api/auth', data, {
                headers: { 'Content-Type': 'application/json' },
            });

            setUser (response.data); 
        } catch (err) {
            console.log('Signup failed:', err.message);
            if (err.response) {
                setError("email", { message: err.response.data.message || 'Signup failed. Please try again.' });
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
            <form className="signup-form" onSubmit={handleSubmit(onSubmit)}>
                <h2>Sign Up</h2>
                <input 
                    {...register('fullName', { required: true })} 
                    className="fullName-input" 
                    placeholder="Full Name" 
                    type="text" 
                />
                {errors.fullName && <p className="error-message">{errors.fullName.message}</p>}

                <input 
                    {...register('email', { required: true })} 
                    className="email-input" 
                    placeholder="Email" 
                    type="email" 
                />
                {errors.email && <p className="error-message">{errors.email.message}</p>}

                <div className="password-container">
                    <input 
                        {...register('password', { required: true })} 
                        className="password-input" 
                        type={showPassword ? 'text' : 'password'} // Change type based on visibility
                        placeholder="Password" 
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
                    <input type='checkbox' {...register('terms', { required: true })}/>  
                    <p>I have read and acknowledged the T&Cs</p>
                </div>
                <button className='signupbutton' type="submit">Sign Up</button>
            </form>
        </div>
    );
};

export default Signup;