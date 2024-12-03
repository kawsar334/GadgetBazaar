import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from '../components/Navbar'
import { Footer } from '../components/Footer';
import  Modal  from '../components/Modal';

import DashboardHero from '../components/dashboardComponents/DashboardHero'
import CartHeroContents from '../components/dashboardComponents/CartHeroContents'
import CartContext from '../context/CartStorage';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const CartPage = () => {
      const [openModal, setOpenModal] = useState(false)

  const {
    cart,
   
    descendingProductList,
    sortedProduct,
    removeFromCart,
  
    totalPrice,
  } = CartContext()

  const [filterProduct, setFIlterProduct] = useState(cart)
const navigate= useNavigate()
  const sendCartToBackend = async () => {
    const user = JSON.parse(localStorage.getItem('user')); // Get logged-in user data
    if (!user) {
      toast.error('You need to log in to complete your purchase.');
      navigate('/login');
      return;
    }

    try {
      const response = await fetch('http://localhost:4040/api/cart', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userId:user,
          products:cart,
          totalPrice,
        }),
      });
      const data = await response.json();
      if (response.ok) {
        toast.success('Purchase completed successfully!');
        setTimeout(() => {
          navigate('/'); // Redirect to home page
        }, 2000);
      } else {
        toast.error(data.error || 'Failed to complete purchase.');
      }
    } catch (error) {
      console.error('Error saving cart:', error);
      toast.error('An error occurred while completing your purchase.');
    }
  };

  // 
  const handlPurchase = ()=>{
    if (totalPrice === 0 || cart?.length === 0) {
      toast.error("please  purchase your products go to home page")
      setTimeout(()=>{
        navigate("/")

      },2000)
      return;
    } else {
      setOpenModal(!openModal)
    }

}



  return (
    <div className='w-full'>
      <DashboardHero Contents={CartHeroContents} />
      {openModal && <Modal setOpenModal={setOpenModal} totalPrice={totalPrice} cart={cart}/>}
   
      <div className='flex justify-between items-start md:items-center w-[90%] md:w-[80%] m-auto my-7 flex-col md:flex-row '>
        <h2 className='text-2xl font-bold'>Cart</h2>
        <div className='flex justify-center items-start md:items-center gap-3  p-1 flex-col md:flex-row '>
          <h2 className='font-bold'>Total cost :{totalPrice}</h2>
          <div className='flex gap-1'>
            <button className='border rounded-full py-1 px-3 bg-blue text-[white]' onClick={descendingProductList}>Sorted By price</button>
            <button className='border rounded-full py-1 px-3 ' onClick={handlPurchase}>Purchase</button>
          </div>

        </div>
      </div>
      <div className='w-full md:w-[90%] p-7  flex flex-col justify-center items-center gap-4 m-auto'>


        {

          cart?.length ===0 ? <div className="flex flex-col gap-3"> 
              <h1 className="text-3xl text-[crimson] font-bold "> Empty Cart List</h1>
            <Link to="/" className="text-blue underline">
              Go back to Home
            </Link>
          </div>:
<>{
              cart?.map((i)=>(
            <div className="w-full md:w-[95%] flex items-center  justify-between p-4 bg-white shadow-md rounded-lg mb-4">
              <div className="flex items-start md:items-center flex-col md:flex-row  gap-4" key={i?._id}>
                <img
                  src={i?.image}
                  alt="Product"
                  className="mr-4 rounded w-[200px] h-[100px] shadow"
                />
                <div>
                  <h2 className="text-xl font-semibold text-gray-800">{i?.title}</h2>
                  <p className="text-gray-600">{i?.description}</p>
                  <p className="text-gray-800 font-bold">${i?.price}</p>
                </div>
              </div>

              <button className="text-red-600  w-7 h-7 border p-1 flex justify-center items-center rounded-[50%] hover:text-[white] hover:bg-[crimson] hover:border-none " onClick={()=>removeFromCart(i)}>
                <i className="fas fa-times   cursor-pointer" aria-hidden="true"></i>
              </button>
            </div>
          ))}
          </>
        }
      </div>
    </div>
  )
}

export default CartPage