import React from 'react';
import ProductDetails from '../productdescription/page';

import { useRouter } from 'next/router';

const ProductDetailPage = () => {
    const router = useRouter();
    const { id } = router.query;
    console.log('Router Query:', router.query);
    console.log('Parsed ID:', parseInt(id));
    if (!id) {
        console.log('ID is not available yet.');
        return <div>Loading...</div>;
    }
    if (id && isNaN(id)) {
        console.log('ID is not a number.');
        return <div>Invalid product ID.</div>;
    }
    return <ProductDetails id={parseInt(id)} />;
};

export default ProductDetailPage;
