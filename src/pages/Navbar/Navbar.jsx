import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <>
            <div>
                <nav className="navbar navbar-expand-sm bg-light navbar-light">
                    <div className="container-fluid">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link to={'/'} className="nav-link active" href="#">Trang chủ</Link>
                            </li>
                            <li className="nav-item">
                                <Link to={'/clothing'} className="nav-link" href="#">Clothing</Link>
                            </li>
                            <li className="nav-item">
                                <Link to={'/cellphone'} className="nav-link" href="#">CellPhone</Link>
                            </li>
                            <li className="nav-item">
                                <Link to={'/guitar'} className="nav-link" href="#">Guitar</Link>
                            </li>
                            <li className="nav-item">
                                <Link to={'/hotel'} className="nav-link" href="#">Hotel</Link>
                            </li>
                            <li className="nav-item">
                                <Link to={'/restaurant'} className="nav-link" href="#">Restaurant</Link>
                            </li>
                            <li className="nav-item">
                                <Link to={'/medipharma'} className="nav-link" href="#">Medipharma</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>

        </>
    )
}

export default Navbar
