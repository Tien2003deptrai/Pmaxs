import React from 'react';

const HotelItem = ({ hotel }) => {
    return (
        <div className="card">
            <img src={hotel.photos[0]} className="card-img-top" alt={hotel.name} />
            <div className="card-body">
                <h5 className="card-title">{hotel.name}</h5>
                <p className="card-text">{hotel.desc}</p>
                <p className="card-text">Type: {hotel.type}</p>
                <p className="card-text">Rating: {hotel.rating}</p>
                <p className="card-text">Cheapest Price: {hotel.cheapestPrice}</p>
                <div>
                    <nav>Update: {hotel.updatedAt}</nav>
                </div>
            </div>
        </div>
    );
};

export default HotelItem;
