import React from "react";

const Contact = () => {
    return (
        <div>
        <h1 className="text-bold text-black flex justify-center items-center">Get In Touch With Us</h1>
        <section className="contact-section max-w-6xl mx-auto my-10 px-4 sm:px-8 py-8 sm:py-16 bg-white shadow-lg rounded-md">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 items-center">
                
                {/* Left Side: Text Section */}
                <div className="text-left text-gray-800">
                    <h2 className="text-4xl font-bold mb-4">Address</h2>
                    <p className="mb-4 text-sm sm:text-base">
                        236 5th SE Avenue,New
                         York NY10000,
                          United States
                    </p>
                    
                    <div>
                        <h2 className="font-semibold mb-2">Email:</h2>
                        <p
                            
                            className="text-blacke "
                        >
                            Monday-Friday: 9:00 - 22:00
                            </p>
                            <p>
                            Saturday-Sunday: 9:00 - 21:00
                        </p>
                    </div>
                    <div className="mt-4">
                        <h2 className="font-semibold mb-2">Phone:</h2>
                        <p
                            
                            className="text-black"
                        >
                            Mobile: +(84) 546-6789
                            </p>
                            <p>
                            Hotline: +(84) 456-6789
                        </p>
                    </div>
                </div>

                {/* Right Side: Form Section */}
                <div className="contact-form bg-white shadow-md rounded-md p-6 sm:p-8">
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">
                        Contact Form
                    </h3>
                    <form>
                        {/* Full Name */}
                        <div className="mb-4">
                            <label
                                htmlFor="name"
                                className="block text-sm font-medium text-gray-700 mb-1"
                            >
                                Full Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                placeholder="Enter your full name"
                                className="w-full px-4 py-2 border border-gray-300 rounded-md text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                required
                            />
                        </div>

                        {/* Email Address */}
                        <div className="mb-4">
                            <label
                                htmlFor="email"
                                className="block text-sm font-medium text-gray-700 mb-1"
                            >
                                Email Address
                            </label>
                            <input
                                type="email"
                                id="email"
                                placeholder="Enter your email"
                                className="w-full px-4 py-2 border border-gray-300 rounded-md text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                required
                            />
                        </div>

                        {/* Message */}
                        <div className="mb-6">
                            <label
                                htmlFor="message"
                                className="block text-sm font-medium text-gray-700 mb-1"
                            >
                                Your Message
                            </label>
                            <textarea
                                id="message"
                                placeholder="Write your message here"
                                className="w-full px-4 py-2 border border-gray-300 rounded-md text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                rows={4}
                                required
                            ></textarea>
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="w-full bg-yellow-700 hover:bg-yellow-500 text-white py-55px pt-237px rounded-md font-semibold text-sm sm:text-base transition duration-200"
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
           
        </section>
        </div>
    );
};

export default Contact;
