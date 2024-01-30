import React from 'react'
import { Routes, Route, Outlet } from 'react-router-dom'
import Product from "./pages/PublicHome/Public";
import Home from './pages/Home/Home';
import ProductDetail from './pages/ProductDetail/ProductDetail';
import CellPhone from './pages/Home/CellPhone/CellPhone';
import Clothing from './pages/Home/Clothing/Clothing';
import Guitar from './pages/Home/Guitar/Guitar';
import Navbar from './pages/Navbar/Navbar';
import Hotel from './pages/Home/Hotel/Hotel';
import Restaurant from './pages/Home/Restaurant/Restaurant';
import Medipharma from './pages/Home/Medipharma/Medipharma';

const router = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={
                    <>
                        <Navbar />
                        <Outlet />
                    </>
                }>
                    <Route path='/' exact element={<Home />} />
                    <Route path='/products' element={<Product />} />
                    <Route path='/products/:id' element={<ProductDetail />} />
                    <Route path='/cellphone' element={<CellPhone />} />
                    <Route path='/clothing' element={<Clothing />} />
                    <Route path='/guitar' element={<Guitar />} />
                    <Route path='/hotel' element={<Hotel />} />
                    <Route path='/restaurant' element={<Restaurant />} />
                    <Route path='/medipharma' element={<Medipharma />} />
                </Route>
            </Routes>
        </>
    )
}

export default router
