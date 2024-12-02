import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import { toast } from 'react-toastify';
import { NavLink, useNavigate } from 'react-router-dom';

function Login() {

    const navigate = useNavigate()
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async(e) => {
        e.preventDefault();
        try{
            const response = await fetch("https://ecommerce-backend-ecru-sigma.vercel.app/api/auth/login",{
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({email, password}),
            })
            const res = await response.json();
            toast.success(res?.message)
            console.log(res?.message);
            if(res){
             localStorage.setItem('token', res.token)
                navigate('/')
            }

        }catch(err){
            toast.error("something went wrong !")
            console.error(err);
        }
        
    };

    return (
        <div className="w-full max-w-md mx-auto mt-16 p-8 bg-white shadow-md rounded-lg">
            <h2 className="text-2xl font-bold text-center mb-6">
                Login
            </h2>

    
                <form className="space-y-4" onSubmit={handleLogin}>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Email</label>
                        <input
                        onChange={(e)=>setEmail(e.target.value)}
                            type="email"
                            placeholder="Enter your email"
                            required
                            className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-[20px] focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Password</label>
                        <input
                        onChange={(e)=>setPassword(e.target.value)}
                            type="password"
                            placeholder="Enter your password"
                            required
                            className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-[20px] focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                        />
                    </div>
                    <button
                        type="submit"
                        className=" w-full bg-[crimson] text-white py-2 rounded-[20px] hover:bg-[white] hover:text-[crimson] hover:border transition duration-200"
                    >
                        Login
                    </button>
                </form>
             

            <NavLink
            to="/register"
                className="mt-4 text-indigo-600 hover:text-indigo-800 underline w-full text-center"
            >
                 Switch to Register
            </NavLink>
        </div>
    );
}

export default Login;
