import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { Footer } from '../components/Footer';

const NotFound = () => (
    <>
        <Navbar />
        <div className="text-center py-20">
            <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
            <p className="mb-6">Sorry, the page you are looking for does not exist.</p>
            <Link to="/" className="text-blue hover:underline">
                Go back to Home
            </Link>
        </div>
        <Footer />
    </>
);

export default NotFound;
