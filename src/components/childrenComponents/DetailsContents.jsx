import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import CartContext from '../../context/CartStorage';
import FetchSingleData from "../../data/FetchSingleData";

const DetailsContents = () => {
  const {
    addToCart,
    addToWishlist,
  } = CartContext();

  const id = useLocation().pathname.split("/")[2];
  const { data, loading, error } = FetchSingleData(`https://ecommerce-backend-ecru-sigma.vercel.app/api/product/find/${id}`)
 
  let title = data?.product?.title;
  useEffect(() => {
    document.title = title;
  }, [title]);

  const RatingStar = ({ rating }) => {
    const roundedRating = Math.round(rating);

    return (
      <div style={{ display: 'flex', alignItems: 'center', color: '#FFD700' }}>
        {[1, 2, 3, 4, 5].map((star) => (
          <i
            key={star}
            className={
              star <= roundedRating
                ? "fa fa-star"
                : "fa fa-star-o"
            }
            style={{ marginRight: '4px' }}
          ></i>
        ))}
      </div>
    );
  };

  return (
    <div className="w-full md:w-[80%] h-max md:h-[400px] flex justify-center items-center flex-col md:flex-row shadow gap-4 absolute left-[50%] top-[240px] transform translate-x-[-50%] border-[2px] bg-[white] border-[#9538E2] p-5 rounded-[20px]">
      <img src={data?.product?.image} alt="Loading..." className="w-full md:w-[300px] object-cover h-[200px] md:h-full rounded-[20px]" />
      <div className="flex flex-col justify-between items-start gap-2">
        <div className="w-full">
          <h2 className="font-bold">{data?.product?.title}</h2>
          <p>Price: ${data?.product?.price}</p>
          <button><strong>In Stock</strong>: {data?.product?.availability ? "Yes" : "No"}</button>
          <p>{data?.product?.description}</p>
          <h2 className="font-bold">Specification:</h2>
          <ul>
            {data?.product?.specification?.map((item, index) => (
              <li key={index}>{index + 1} {item}</li>
            ))}
          </ul>
        </div>
        <div className="w-[35%]">
          <p>Rating:</p>
          <RatingStar rating={data?.product?.rating || 0} />
        </div>
        <div className="w-full flex justify-start items-center gap-4 py-1">
          <button className="bg-[#9538E2] hover:bg-[white] hover:text-blue w-[80%] md:w-max border rounded-full py-1 px-3 text-[white] flex justify-center items-center gap-2" onClick={() => addToCart(data?.product)}>Add To Cart <i className="fa fa-cart-arrow-down"></i></button>
          <button onClick={() => addToWishlist(data?.product)}><i className="fa fa-heart text-xl"></i></button>
        </div>
      </div>
    </div>
  );
}

export default DetailsContents;
