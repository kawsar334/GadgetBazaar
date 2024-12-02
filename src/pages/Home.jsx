import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import { NavLink, Outlet } from "react-router-dom";
import { Footer } from '../components/Footer';
import { Hero } from '../components/Hero';
import Products from '../components/producs/Products';
import HomeContents from '../components/childrenComponents/HomeContents';
import useFetch from '../data/UseFetch';

const Home = () => {
    const [loading, setLoading] = useState(true);
    const [showPopup, setShowPopup] = useState(false);
    const [users, setUsers] = useState([]);
    const [products, setProducts] = useState([]);


    useEffect(() => {

        const getUsers = async () => {
            try {
                const response = await fetch('https://ecommerce-backend-ecru-sigma.vercel.app/api/product/');
                const data = await response.json();
                console.log('product fetched successfully', data?.products);
                setProducts(data?.products)
                setLoading(false);

            } catch (err) {
                console.error('Error fetching users', err);
            }
        }
        getUsers();

    }, [])


 


    return (
        <div >
            <h1 className='text-6xl'>product fetch from database </h1>
            <div className=' flex justify-center items-center gap-2 my-6'>
                {products?.map((item) => (
                    <div className="card bg-base-100 w-[100%] md:w-[45%] lg:w-[30%] shadow-xl p-3  " key={item?.product_id}>
                        <figure className=" my-1 pt-1">
                            <img
                                src={item?.image || "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkA6AqvKiCfu8HTMpbCSpa-W2uKiehcy66Pg&s"}
                                alt="Shoes"
                                className="rounded-xl h-[150px]  w-full border" />
                        </figure>
                        <div className="">
                            <h2 className="card-title">{item?.title.slice(0, 15)}...</h2>
                            <p>Price:{item?.price}</p>
                            <div className="card-actions flex justify-start items-center mt-3">
                                <NavLink to={`/details/${item?._id}`} className="border-blue border-[1px] rounded-[20px] px-5 py-1 my-1 hover:bg-blue hover:text-[white]">View Details</NavLink >
                                <div className='flex justify-center items-center gap-3'>
                                    <button className=' w-[80%]  text-blue ' onClick={() => addToCart(item)}>  <i className="fa-solid fa-cart-arrow-down "></i></button>
                                    <button onClick={() => addToWishlist(item)}> <i className="fa-regular fa-heart text-xl  hover:text-[crimson]"></i></button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <Hero Contents={HomeContents} />
            <Products />
        </div>
    );
};

export default Home;
