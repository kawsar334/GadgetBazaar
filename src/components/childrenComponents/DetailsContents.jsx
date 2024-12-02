import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import CartContext from '../../context/CartStorage';

const DetailsContents = () => {
  const {
    addToCart,
    addToWishlist,
  } = CartContext();

  const id = useLocation().pathname.split("/")[2];
  const [product, setProduct] = useState({});
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("../../product.json");
        const result = await response.json();
        setData(result);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (data) {
      const product = data.find(item => item.product_id === id);
      setProduct(product);
    }
  }, [id, data]);

  let title = product?.product_title;
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
      <img src={product?.product_image} alt="Loading..." className="w-full md:w-[300px] object-cover h-[200px] md:h-full rounded-[20px]" />
      <div className="flex flex-col justify-between items-start gap-2">
        <div className="w-full">
          <h2 className="font-bold">{product?.product_title}</h2>
          <p>Price: ${product?.price}</p>
          <button><strong>In Stock</strong>: {product?.availability ? "Yes" : "No"}</button>
          <p>{product?.description}</p>
          <h2 className="font-bold">Specification:</h2>
          <ul>
            {product?.specification?.map((item, index) => (
              <li key={index}>{index + 1} {item}</li>
            ))}
          </ul>
        </div>
        <div className="w-[35%]">
          <p>Rating:</p>
          <RatingStar rating={product?.rating || 0} />
        </div>
        <div className="w-full flex justify-start items-center gap-4 py-1">
          <button className="bg-[#9538E2] hover:bg-[white] hover:text-blue w-[80%] md:w-max border rounded-full py-1 px-3 text-[white] flex justify-center items-center gap-2" onClick={() => addToCart(product)}>Add To Cart <i className="fa fa-cart-arrow-down"></i></button>
          <button onClick={() => addToWishlist(product)}><i className="fa fa-heart text-xl"></i></button>
        </div>
      </div>
    </div>
  );
}

export default DetailsContents;
