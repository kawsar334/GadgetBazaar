import React, { useContext, useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import { NavLink, Outlet } from "react-router-dom";
import { Footer } from '../components/Footer';
import { Hero } from '../components/Hero';
import Products from '../components/producs/Products';
import HomeContents from '../components/childrenComponents/HomeContents';
import useFetch from '../data/UseFetch';
import { AuthContext } from '../data/AuthProvider';

const Home = () => {
   
    const [showPopup, setShowPopup] = useState(false);


    return (
        <div >
       
            <Hero Contents={HomeContents} />
            <Products />
        </div>
    );
};

export default Home;
