import React, { useEffect, useState } from 'react';
import Navbar from '../../components/Navbar';
import { Outlet, useLocation } from "react-router-dom";
import { Footer } from '../../components/Footer';
import { Hero } from '../../components/Hero';
import Products from '../../components/producs/Products';
import CartContext from '../../context/CartStorage';

const Layout = () => {
    const {cartData,} = CartContext()
    

    return (
        <div >
            <Navbar cartData={cartData}/>
        
            <Outlet />

            <Footer />
        </div>
    );
};

export default Layout;
