// app/components/products/ProductDetails.jsx
"use client"
import React from 'react';
import { useRouter } from 'next/router';

const ProductDetails = () => {
    // const router = useRouter();
    // const { id } = router.query; // Get the product ID from the URL

    // Fetch product details based on the ID (you can replace this with your data fetching logic)
    const product = products.find(product => product.id === parseInt(id));

    if (!product) return <div>Loading...</div>; // Handle loading state

    return (
        <div>
            <h2>{product.name}</h2>
            <img src={product.imageUrl} alt={product.name} />
            <p>{product.description}</p>
            <p>Price: ${product.price.toFixed(2)}</p>
            {/* Add more product details as needed */}
        </div>
    );
};

export default ProductDetails;