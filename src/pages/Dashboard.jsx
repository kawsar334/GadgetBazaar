import React from 'react'
import Navbar from '../components/Navbar'
import { Footer } from '../components/Footer'
import { Outlet } from 'react-router-dom'
import DashboardHero from '../components/dashboardComponents/DashboardHero'
import CartContext from '../context/CartStorage'

const Dashboard = () => {
    const { cartData, } = CartContext()

    return (
        <div>
            <Navbar cartData={cartData}/>
            <Outlet />
            <Footer />

        </div>
    )
}

export default Dashboard