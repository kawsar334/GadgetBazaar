import React from 'react'
import { Footer } from '../components/Footer'
import DashboardHero from '../components/dashboardComponents/DashboardHero'
import WishlistHeroContents from '../components/dashboardComponents/WishlistHeroContents'
import CartContext from '../context/CartStorage';
import { Link, useLocation } from "react-router-dom";

const Wishlist = () => {
    
  const {
    cart,
    wishlist,
    purchase,
    addToCart,
    addToWishlist,
    addToParchase,
    descendingProductList,
    sortedProduct,
    removeFromWishlist,
    addToCartFromWishlist,

  } = CartContext()

 
  return (
      <div className='w-full'>
          <DashboardHero Contents={WishlistHeroContents}/>
          <div className='flex justify-between items-start md:items-center w-[90%] md:w-[80%] m-auto my-7 flex-col md:flex-row '>
              <h2 className='text-4xl font-bold'>wishlist</h2>
          </div>
          <div className='w-full md:w-[90%] p-7  flex flex-col justify-center items-center gap-4 m-auto'>
            

       { wishlist?.length=== 0 ?
       
        <div className="flex flex-col justify-center items-center gap-3"> 
              <h1 className="text-4xl   py-1 px-4  "> Empty wishlist</h1>
                      <Link to="/" className="text-blue underline">
                          Go back to Home
                      </Link>
          </div>
       :    <>
              {wishlist?.map((i)=>(
                  <div className="w-full md:w-[95%] flex items-center  justify-between p-4 bg-white shadow-md rounded-lg mb-4">
                    <div className="flex items-start md:items-center flex-col md:flex-row  gap-4" key={i?.product_id}>
                        <img
                            src={i?.product_image}
                            alt="Product"
                            className="mr-4 rounded w-[200px] h-[100px] shadow"
                            />
                        <div>
                            <h2 className="text-xl font-semibold text-gray-800">{i?.product_title}</h2>
                            <p className="text-gray-600">{i?.description}</p>
                            <p className="text-gray-800 font-bold">${i?.price}</p>
                              <button className='bg-[#9538E2] w-[80%] md:w-max border rounded-full py-1 px-3 text-[white]  flex justify-center items-center gap-2' onClick={() => addToCart(i)}>Add To Card</button>
          

                        </div>
                    </div>

                      <button className="text-red-600  w-7 h-7 border p-1 flex justify-center items-center rounded-[50%] hover:text-[white] hover:bg-[crimson] hover:border-none " onClick={() => removeFromWishlist(i)}>
                        <i className="fas fa-times   cursor-pointer" aria-hidden="true"></i>
                    </button>
                </div>
            ))}
            </>}

          </div>
      </div>
  )
}

export default Wishlist