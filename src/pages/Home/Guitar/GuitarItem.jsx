import React from 'react';

const GuitarItem = ({ product }) => {
    if (!product) {
        return <p>Product not available</p>;
    }

    const { id, title, quantity, price } = product;

    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">ID: {id}</p>
                <p className="card-text">Quantity: {quantity}</p>
                <p className="card-text">Price: ${price}</p>
            </div>
        </div>
    );
};

export default GuitarItem;
