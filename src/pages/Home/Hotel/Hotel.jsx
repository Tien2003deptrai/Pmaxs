import React, { useEffect, useState } from 'react';
import HotelItem from './HotelItem';

const Hotel = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://services-api-cdb2.onrender.com/api/hotels');
                const responseData = await response.json();

                console.log('responseData', responseData);

                // Set products directly from responseData
                setProducts(responseData);

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
            <h2 className="mb-4 text-center">Hotel</h2>
            <div className="row mt-5">
                {products.map((product) => (
                    <div key={product._id} className="col-md-3 mb-2">
                        <HotelItem hotel={product} />
                    </div>
                ))}
            </div>
        </div>
    );

}

export default Hotel
