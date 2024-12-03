import { useNavigate } from "react-router-dom"
import done from "../assets/Group.png"
import { toast } from "react-toastify"
import CartContext from "../context/CartStorage"

const Modal = ({ setOpenModal, totalPrice, cart })=>{


  const navigate = useNavigate();
 

  const closeModal = async()=>{
    const user = JSON.parse(localStorage.getItem('user')); 
    if (!user) {
      toast.error('You need to log in to complete your purchase.');
      navigate('/login');
      return;
    }

    try {
      const response = await fetch('https://ecommerce-backend-ecru-sigma.vercel.app/api/cart/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userId: user,
          products: cart,
          totalPrice,
        }),
      });
      const data = await response.json();
      if (response.ok) {
        toast.success('Purchase completed successfully!');
        setTimeout(() => {
          setOpenModal(false)
          localStorage.removeItem("cart");
          localStorage.removeItem("wislist");
          navigate('/'); // Redirect to home page
        }, 2000);
      } else {
        toast.error(data.error || 'Failed to complete purchase.');
      }
    } catch (error) {
      console.error('Error saving cart:', error);
      toast.error('An error occurred while completing your purchase.');
    }
      
    // setOpenModal(false)
    // localStorage.removeItem("cart");
    // localStorage.removeItem("wislist");
    // navigate('/');
    // toast.success('Payment Successful!')

  }

    return(

           <div className="fixed w-full h-screen bg-[rgba(0,0,0,0.7)] top-[-0px] z-[50] flex justify-center items-center"> 
        <div className="card bg-base-100 w-96 shadow-xl">
  <div className="card-body">
    <div className="w-full  text-center flex justify-center items-center flex-col">
        <img src={done}  className="w-6 h-6 "/>
    <h2 className="card-title">Payment Successfully </h2>
              <p>Thnak you for purchasing  <b>Total </b>: ${totalPrice} </p>
    </div>
    <div className="card-actions justify-end w-full my-1">
              <button className=" w-full border rounded-full px-6 py-1 bg-[lightgray] text-black" onClick={closeModal}>Close </button>
    </div>
  </div>
</div>
      </div>
    )
}


export default Modal