// Restaurant.js
import React, { useEffect, useState } from 'react';
import RestaurantItem from './RestaurantItem';

const Restaurant = () => {
    const [restaurants, setRestaurants] = useState([]); // Initialize as an empty array
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://foodie-finder-api.onrender.com/api/restaurant');
                const responseData = await response.json();

                if (responseData.status === "success" && responseData.data && Array.isArray(responseData.data.result)) {
                    setRestaurants(responseData.data.result);
                }

                setLoading(false);
            } catch (error) {
                console.error('Error fetching restaurants: ', error);
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
            <h2 className="mb-4 text-center">Restaurants</h2>
            <div className="row mt-5">
                {restaurants.map((restaurant) => (
                    <div key={restaurant._id} className="col-md-3 mb-2">
                        <RestaurantItem restaurant={restaurant} />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Restaurant;
