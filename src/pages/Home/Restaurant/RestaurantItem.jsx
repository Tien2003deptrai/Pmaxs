import React from 'react';

const RestaurantItem = ({ restaurant }) => {
    return (
        <div className="card">
            <img src={restaurant.image} className="card-img-top" alt={restaurant.resname} />
            <div className="card-body">
                <h5 className="card-title">{restaurant.resname}</h5>
                <p className="card-text">Address: {restaurant.address.street}, {restaurant.address.district}, {restaurant.address.city}</p>
                <p className="card-text">Type: {restaurant.typeOfRes}</p>
                <p className="card-text">Average Price: {restaurant.averagePrice} VND</p>
                <p className="card-text">Status: {restaurant.status}</p>
                <p className="card-text">Start: {restaurant.timeOpen}</p>
                <p className="card-text">End: {restaurant.timeClose}</p>
            </div>
        </div>
    );
};

export default RestaurantItem;
