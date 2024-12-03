import React, { useContext, useEffect, useState } from 'react';
import { Link, useLocation } from "react-router-dom";
import CartContext from '../context/CartStorage';
import { AuthContext } from '../data/AuthProvider';
import FetchSingleData from '../data/FetchSingleData';

const Navbar = () => {
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const {
    user,
    isAuthenticated,
  } = useContext(AuthContext);

  const {
    cart,
    wishlist,
    totalPrice,
    
  } = CartContext();
  
  const { data, loading, error } = FetchSingleData(`https://ecommerce-backend-ecru-sigma.vercel.app/api/user/find/${user}`);
 

  const getActiveClass = (path) =>
    location.pathname === path ? 'bg-blue-500 bg-[purple] rounded-full' : '';


  const handleLogout=(e)=>{
    e.preventDefault();   
    if (window.confirm("Are You sure Logout")){
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      window.location.href="/";
    }
  }


  const Links = ()=>{
    return(
      <>
     {user?<>
          <li><Link to="/" className={getActiveClass('/')}>Home</Link></li>
          <li><Link to="/dashboard/statistics" className={getActiveClass('/dashboard/statistics')}>Statistics</Link></li>
          <li><Link to="/dashboard/cart" className={getActiveClass('/dashboard/cart')}>Dashboard</Link></li>
          <li><Link to="/about" className={getActiveClass('/about')}>About</Link></li>
          <li onClick={handleLogout}><Link to="#" >Logout</Link></li>
          <li ><Link to="/admin"  >Admin Pnnel</Link></li>

          { <li ><Link to="#" >{data?.user?.name}</Link></li>}
     </>: <>
        <li><Link to="/" className={getActiveClass('/')}>Home</Link></li>
        <li><Link to="/dashboard/statistics" className={getActiveClass('/dashboard/statistics')}>Statistics</Link></li>
        <li><Link to="/dashboard/cart" className={getActiveClass('/dashboard/cart')}>Dashboard</Link></li>
        <li><Link to="/about" className={getActiveClass('/about')}>About</Link></li>
        <li><Link to="/login" className={getActiveClass('/login')}>Login</Link></li>
            <li ><Link to="/admin"  >Admin Pnnel</Link></li>

      </>}
      </>
    )
  }
  

  return (
    <div className={`${location.pathname === "/" ? "navbar bg-blue text-[white] sticky top-0 left-0 z-30" : "navbar bg-[white] text-[black] sticky top-0 left-0 z-30"} `}>
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-blue border rounded-box z-[1] mt-3 w-52 p-2 shadow">
       <Links/>
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost text-xl">GadgetBazaar</Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <Links />
        </ul>
      </div>
      <div className="navbar-end flex justify-center items-center gap-3">
        <Link to="/dashboard/cart" className="relative mr-2">
          <i className="fa-solid fa-cart-arrow-down text-xl"></i>
          <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center">
            {cart.length}
          </span>
        </Link>

        <button className="relative" onClick={() => setOpen(!open)}>
          <i className="fa-regular fa-heart text-xl"></i>
          <span className="absolute -top-2 -right-2 bg-red-500 rounded-full text-xs w-5 h-5 flex items-center justify-center">
            {wishlist?.length}
          </span>
          {open && (
            <div className={`${location.pathname === "/" ? 'absolute top-[40px] md:top-[24px] lg:top-[40px] bg-white border rounded p-3 left-[-100px] md:left-[10px] lg:left-[0px] w-[200px] h-max' : 'absolute top-[40px] md:top-[24px] lg:top-[40px] bg-blue border rounded p-3 left-[-100px] md:left-[10px] lg:left-[0px] w-[200px] h-max'}`}>
              <p className={`${location.pathname === "/" ? 'text-blue font-bold w-full text-left mb-1 text-[14px]' : 'text-white font-bold w-full text-left mb-1 text-[14px]'}`}>you added <span className='text-red-500'>{wishlist?.length}</span> item  wislist </p>
              <p className={`${location.pathname === "/" ? 'text-blue font-bold w-full text-left mb-1 text-[14px]' : 
                'text-white font-bold w-full text-left mb-1 text-[14px]'}`}>Added to cart: <span className='text-red-500'>{cart.length}</span></p>
              <p className={`${location.pathname === "/" ? 'text-blue font-bold w-full text-left mb-1 text-[14px]' : 'text-white font-bold w-full text-left mb-1 text-[14px]'}`}>Total Amount: <span className='text-red-500' >${totalPrice}</span></p>
            </div>
          )}
        </button>
      </div>
    </div>
  );
}

export default Navbar;
