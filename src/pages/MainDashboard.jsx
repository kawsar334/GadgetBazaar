import React from 'react';

function Statistics() {
    return (
        <section className="bg-gray-50 py-8">
            <div className="container mx-auto px-4">
                <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Dashboard Statistics</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

                    {/* Total Sales */}
                    <div className="bg-white shadow-md rounded-lg p-6 flex items-center">
                        <div className="p-4 bg-indigo-100 rounded-full text-indigo-600">
                            <i className="fas fa-dollar-sign text-2xl"></i>
                        </div>
                        <div className="ml-4">
                            <h3 className="text-xl font-semibold text-gray-800">Total Sales</h3>
                            <p className="text-gray-600 text-lg">$12,500</p>
                        </div>
                    </div>

                    {/* New Customers */}
                    <div className="bg-white shadow-md rounded-lg p-6 flex items-center">
                        <div className="p-4 bg-green-100 rounded-full text-green-600">
                            <i className="fas fa-user-plus text-2xl"></i>
                        </div>
                        <div className="ml-4">
                            <h3 className="text-xl font-semibold text-gray-800">New Customers</h3>
                            <p className="text-gray-600 text-lg">1,200</p>
                        </div>
                    </div>

                    {/* Orders */}
                    <div className="bg-white shadow-md rounded-lg p-6 flex items-center">
                        <div className="p-4 bg-yellow-100 rounded-full text-yellow-600">
                            <i className="fas fa-box text-2xl"></i>
                        </div>
                        <div className="ml-4">
                            <h3 className="text-xl font-semibold text-gray-800">Orders</h3>
                            <p className="text-gray-600 text-lg">830</p>
                        </div>
                    </div>

                    {/* Revenue */}
                    <div className="bg-white shadow-md rounded-lg p-6 flex items-center">
                        <div className="p-4 bg-red-100 rounded-full text-red-600">
                            <i className="fas fa-chart-line text-2xl"></i>
                        </div>
                        <div className="ml-4">
                            <h3 className="text-xl font-semibold text-gray-800">Revenue</h3>
                            <p className="text-gray-600 text-lg">$18,000</p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default Statistics;
