import React, { useState, useEffect } from 'react';
import Sidebar from '../Sidebar';
import Product from './Product';
import useFetch from '../../data/UseFetch';

const Products = () => {
  const { data, error, loading } = useFetch();
  const [filterProducts, setFilterProducts] = useState([]);
  const [active, setActive] = useState("all")

  const sidebarItems = [
    { id: 1, name: 'all' },
    { id: 2, name: 'laptop' },
    { id: 3, name: 'Sympony' },
    { id: 4, name: 'phone' },
    { id: 5, name: 'Accessories' },
    { id: 6, name: 'Smart Watches' },
    { id: 7, name: 'MacBook' },
    { id: 8, name: 'Iphone' },
  ];

  useEffect(() => {
    if (data) {
      setFilterProducts(data);
    }
  }, [data]);

  const handleCat = (cat) => {
    
    if (cat === 'all') {

      setFilterProducts(data);
    } else {
      setFilterProducts(data.filter(item => item.category.toLowerCase() === cat.toLowerCase()));
    }
    setActive(cat);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading products: {error.message}</div>;
  }

  return (
    <div className='mt-[200px]' id='products'>
      <h1 className='text-3xl md:text-4xl text-center font-semibold'>Explore Cutting-Edge Gadgets</h1>
      <div className='w-[98%] flex justify-between items-start gap-4 m-auto my-7 p-4 flex-col md:flex-row'>
        <Sidebar sidebarItems={sidebarItems} handleCat={handleCat} active={active} />

        <div className='flex justify-center items-center w-[100%] md:w-[75%] gap-2 p-4 flex-wrap'>
          {filterProducts.length === 0 ? (
            <div className='text-center text-gray-500 text-lg py-20 w-full  h-[400px]'>
              <p className='font-semibold text-2xl mb-4'>No Products Found</p>
              <p className='text-sm'>Please  try for a different category.</p>
            </div>
          ) : (
            <>
              {filterProducts.map((item) => (
                <Product key={item.product_id} item={item}  />
              ))}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Products;
