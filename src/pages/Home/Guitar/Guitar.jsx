import React, { useEffect, useState } from 'react';
import ProductItem from '../../ProductItem/ProductItem';
import GuitarItem from './GuitarItem';

const Guitar = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://shop-guitar.onrender.com/app/products');
                const responseData = await response.json();
                console.log('products', responseData.products);
                setProducts(responseData.products);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching products: ', error);
                setLoading(false);
            }
        };


        fetchData();
    }, []);

    if (loading) {
        return <p>Loading...</p>;
    }

    return (
        <div className="container mt-5">
            <h2 className="mb-4 text-center">Cheap Clothing</h2>
            <div className="row mt-5">
                {products.map((product) => (
                    <div key={product.id} className="col-md-3 mb-2">
                        <GuitarItem product={product} />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Guitar
