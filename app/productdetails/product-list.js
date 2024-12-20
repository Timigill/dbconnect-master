'use client';
// app/components/products/ProductList.jsx// Ensure this is a client component
import React from 'react';
import Link from 'next/link'; // Import Link from next/link
import products from '@/app/api/products/page';
import './products.css'; // Import the CSS file

const ProductList = () => {
    return (
        <>
            <h2>Product List</h2>
            <div className="product-list">
                {products.map((product) => (
                    <Link key={product.id} href={`./productdetails/${product.id}`} passHref>
                        <div className="product-item">
                            <img src={product.imageUrl} alt={product.name} />
                            <h3 className="product-name">{product.name}</h3>
                            <p className="product-description">{product.description}</p>
                            <p className="product-price">Price: ${product.price.toFixed(2)}</p>
                         </div>{ /*<div>${product.id} key={product.id} passHref</div> */}
                    </Link>
                ))}
            </div>
        </>
    );
};

export default ProductList;