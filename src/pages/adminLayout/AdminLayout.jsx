import React, { useEffect, useState } from 'react';

import { Outlet, useLocation } from "react-router-dom";
import Navbar from '../../components/Navbar';
import { Footer } from '../../components/Footer';
import AdminNavbar from './adminComponents/AdminNavbar';



const AdminLayout = () => {
  
    return (
        <div >

            <AdminNavbar/>
            

            <Outlet />

            <Footer />
        </div>
    );
};

export default AdminLayout;
