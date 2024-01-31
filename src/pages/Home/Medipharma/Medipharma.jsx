import React, { useEffect, useState } from 'react'
import MedipharmaItem from './MedipharmaItem';

const Medipharma = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://gateway-restapi.onrender.com/products/medi');
                const productsData = await response.json();
                console.log('products', productsData.data);
                setProducts(productsData.data);
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
            <h2 className="mb-4 text-center">Medipharma</h2>
            <div className="row mt-5">
                {products.map((product) => (
                    <div key={product.id} className="col-md-3 mb-2">
                        <MedipharmaItem medipharma={product} />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Medipharma
