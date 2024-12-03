


import React from "react";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useFetchAdminPnnel from "./data/useFetchAdmin";

const AdminDashboard = () => {

    



    const { data, loading, error } = useFetchAdminPnnel('https://ecommerce-backend-ecru-sigma.vercel.app/api/cart/')
    console.log(data?.data, loading, error)
    const totalPrice = data?.data.reduce((acc, item) => {
        return acc + item.totalPrice ;
    }, 0);
    console.log(totalPrice)
    // Sample data
    const [dashboardStats] = useState({
        totalRevenue: totalPrice,
        totalOrders: 120,
        totalUsers: 450,
        lowStockProducts: 5,
    });

    const [recentOrders, setRecentOrders] = useState([
        { id: 1, customer: "John Doe", status: "Pending", amount: "$50" },
        { id: 2, customer: "Jane Smith", status: "Shipped", amount: "$120" },
        { id: 3, customer: "Mark Lee", status: "Delivered", amount: "$75" },
    ]);

    const notify = () => {
        toast.success("Welcome to the Admin Panel!");
    };

    return (
        <div className="min-h-screen bg-gray-100 p-6">
            {/* Toast Notifications */}
            <ToastContainer />
            <div className="mb-6">
                <button
                    onClick={notify}
                    className="bg-blue-500 text-white px-4 py-2 rounded shadow hover:bg-blue-600"
                >
                    Show Welcome Toast
                </button>
            </div>

            {/* Overview Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="bg-white shadow-md rounded-lg p-6">
                    <h3 className="text-xl font-bold">Total Revenue</h3>
                    <p className="text-2xl text-green-600">${totalPrice}</p>
                </div>
                <div className="bg-white shadow-md rounded-lg p-6">
                    <h3 className="text-xl font-bold">Total Orders</h3>
                    <p className="text-2xl">{dashboardStats.totalOrders}</p>
                </div>
                <div className="bg-white shadow-md rounded-lg p-6">
                    <h3 className="text-xl font-bold">Total Users</h3>
                    <p className="text-2xl">{dashboardStats.totalUsers}</p>
                </div>
                <div className="bg-white shadow-md rounded-lg p-6">
                    <h3 className="text-xl font-bold">Low Stock Products</h3>
                    <p className="text-2xl text-red-600">{dashboardStats.lowStockProducts}</p>
                </div>
            </div>

            {/* Recent Orders */}
            <div className="mt-8 bg-white shadow-md rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4">Recent Orders</h3>
                <table className="w-full border-collapse border border-gray-300">
                    <thead>
                        <tr>
                            <th className="border border-gray-300 px-4 py-2 text-left">Order ID</th>
                            <th className="border border-gray-300 px-4 py-2 text-left">Customer_id</th>
                            {/* <th className="border border-gray-300 px-4 py-2 text-left">Status</th> */}
                            <th className="border border-gray-300 px-4 py-2 text-left">Amount</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data?.data?.map((order) => (
                            <tr key={order._id}>
                                <td className="border border-gray-300 px-4 py-2">{order?._id}</td>
                                <td className="border border-gray-300 px-4 py-2">{order?.userId}</td>
                                {/* <td
                                    className={`border border-gray-300 px-4 py-2 ${order.status === "Pending"
                                            ? "text-yellow-600"
                                            : order.status === "Shipped"
                                                ? "text-blue-600"
                                                : "text-green-600"
                                        }`}
                                >
                                    {order.status}
                                </td> */}
                                <td className="border border-gray-300 px-4 py-2">${order?.totalPrice}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AdminDashboard;

