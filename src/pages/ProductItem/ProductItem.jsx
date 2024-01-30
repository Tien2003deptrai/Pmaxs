import React from 'react'
import { Link } from 'react-router-dom'

const ProductItem = ({ product }) => {
    return (
        <>
            <div className="card text-center">
                <img className="card-img-top" src={product.images[0]} alt="Title" height={200} />
                <div className="card-body">
                    <h4 className="card-title">{product.title}</h4>
                    <p className="card-text">{product.description}</p>
                    <Link to={`/products/${product.id}`} className='btn btn-danger'>Buy now</Link>
                    <div>
                        <nav>Update: {product.updatedAt}</nav>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductItem

