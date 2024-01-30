import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

const ProductDetail = () => {

    const { id } = useParams();
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`https://dummyjson.com/products/${id}`);
                const productsData = await response.json();
                console.log('products', productsData);
                setProduct(productsData);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching products: ', error);
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    return (
        <>
            <div className="row d-flex justify-content-center py-5">
                {product && (
                    <div className="col-md-12">
                        <Link className="text-decoration-none text-dark" to={`/`}>
                            <div className="d-flex align-items-center m-3">
                                <i className="fa fa-long-arrow-left"></i>
                                <span className="ml-1">&nbsp;Back</span>
                            </div>
                        </Link>
                        <div>
                            <div className="row">
                                {product && product.images && product.images.length > 0 && (
                                    <div className="col-md-6">
                                        <div className="images p-3">
                                            <div className="text-center p-4">
                                                <img id="main-image" alt="product" src={product.images[0]} width="250" />
                                            </div>
                                        </div>
                                    </div>
                                )}
                                <div className="col-md-6">
                                    <div className="border p-4">
                                        <div className="mt-4 mb-3">

                                            <span className="text-muted text-capitalize">{product.category}</span>

                                            <h5 className="text-uppercase">
                                                {product.title}
                                            </h5>

                                            Rating {product.rating}
                                            <i className="fa fa-star text-warning"></i>

                                            <div className="price d-flex flex-row align-items-center">
                                                <big className="display-6"><b>${product.price}</b></big>
                                            </div>
                                        </div>
                                        <p className="text-muted">{product.description}</p>
                                        <div className="cart mt-4 align-items-center">
                                            <button className="btn btn-outline-danger text-uppercase mr-2 px-4">
                                                Buy Now
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </>
    )
}

export default ProductDetail
