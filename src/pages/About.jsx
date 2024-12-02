import React from 'react';

function AboutUs() {
    return (
        <section className="bg-blue  py-16">
            <div className="container mx-auto px-6 md:px-12 lg:px-24 text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-[lightgray] mb-6">
                    About Us
                </h2>
                <p className="text-lg text-[lightgray] mb-8 max-w-2xl mx-auto">
                    Welcome to <span className="font-semibold">YourShop</span>, where we believe in delivering high-quality products with exceptional customer service. We’re passionate about providing you with a seamless shopping experience.
                </p>

                <div className="flex flex-col md:flex-row justify-center items-start gap-12">
                  
                    <div className="bg-white shadow-md p-6 rounded-lg max-w-md text-left">
                        <h3 className="text-2xl font-semibold text-gray-800 mb-3">
                            Our Mission
                        </h3>
                        <p className="text-gray-600">
                            Our mission is to offer top-notch products that add value to your daily life. From carefully selected items to unbeatable prices, we strive to bring you the best.
                        </p>
                    </div>

                   
                    <div className="bg-white shadow-md p-6 rounded-lg max-w-md text-left">
                        <h3 className="text-2xl font-semibold text-gray-800 mb-3">
                            Our Values
                        </h3>
                        <p className="text-gray-600">
                            We prioritize quality, integrity, and customer satisfaction. We are committed to ethical practices and believe in building a long-lasting relationship with our customers.
                        </p>
                    </div>

           
                    <div className="bg-white shadow-md p-6 rounded-lg max-w-md text-left">
                        <h3 className="text-2xl font-semibold text-gray-800 mb-3">
                            What Sets Us Apart
                        </h3>
                        <p className="text-gray-600">
                            We stand out with our curated selection of products, fast delivery, and a dedicated support team ready to help you at every step of your journey with us.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AboutUs;
