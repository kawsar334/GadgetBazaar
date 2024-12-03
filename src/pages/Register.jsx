import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { NavLink, useNavigate } from 'react-router-dom';

function Register() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [loading, setLoading] = useState(false);
    
    const validateInputs = () => {
        if (!name.trim()) {
            toast.error("Name is required!");
            return false;
        }
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            toast.error("Please enter a valid email!");
            return false;
        }
        if (password.length < 6) {
            toast.error("Password must be at least 6 characters long!");
            return false;
        }
        return true;
    };

    const handleRegister = async (e) => {
        e.preventDefault();
        if (!validateInputs()) return;
        setLoading(true);

        try {
            const response = await fetch("https://ecommerce-backend-ecru-sigma.vercel.app/api/auth/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email, password, name }),
            });
            const res = await response.json();
            if (res.success){
                setTimeout(() => {
                    setLoading(false);
                    toast.success(res?.message || "Registration successful!");
                    navigate("/login");
                }, 2000);
            }else{
                toast.error(res?.message || "Registration failed plese try Again!");
                navigate("/register");
            }
        } catch (err) {
            toast.error("Something went wrong!");
    
        }
    };

    return (
       <>
            {loading ? <div className='w-full h-screen  flex justify-center items-center flex-col '>
                <h1>
                    <h1 className="text-2xl text-center font-bold text-gray-700">Loading Please wait...</h1>
                </h1>
                <div>

                    <span className="loading loading-ring loading-xs"></span>
                    <span className="loading loading-ring loading-sm"></span>
                    <span className="loading loading-ring loading-md"></span>
                    <span className="loading loading-ring loading-lg"></span>
                </div>
            </div> :
            <div className="w-full max-w-md mx-auto mt-16 p-8 bg-white shadow-md rounded-lg">
                <h2 className="text-2xl font-bold text-center mb-6">Register</h2>
                <form className="space-y-4" onSubmit={handleRegister}>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Name</label>
                        <input
                            onChange={(e) => setName(e.target.value)}
                            type="text"
                            placeholder="Enter your name"
                            required
                            className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-[20px] focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Email</label>
                        <input
                            onChange={(e) => setEmail(e.target.value)}
                            type="email"
                            placeholder="Enter your email"
                            required
                            className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-[20px] focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Password</label>
                        <input
                            onChange={(e) => setPassword(e.target.value)}
                            type="password"
                            placeholder="Enter your password"
                            required
                            className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-[20px] focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-[crimson] text-white py-2 rounded-[20px] hover:bg-[white] hover:text-[crimson] hover:border transition duration-200"
                    >
                        Register
                    </button>
                </form>
                <NavLink
                    to="/login"
                    className="mt-4 text-indigo-600 hover:text-indigo-800 underline w-full text-center"
                >
                    Switch to Login
                </NavLink>
            </div>}
       </>
    );
}

export default Register;

