import React from 'react'

const MedipharmaItem = ({ medipharma }) => {
    return (
        <div className="card">
            <img src={medipharma.img} className="card-img-top" />
            <div className="card-body">
                <h5 className="card-title">{medipharma.title}</h5>
                <p className="card-text">Price: {medipharma.price}VND</p>
                <p className="card-text">Quantity: {medipharma.quantityOfStock} </p>
                <div>
                    <nav>Ngay khoi tao{medipharma.created_at}</nav>
                    <nav>Ngay cap nhat{medipharma.updated_at}</nav>
                </div>
            </div>
        </div>
    );
}

export default MedipharmaItem

