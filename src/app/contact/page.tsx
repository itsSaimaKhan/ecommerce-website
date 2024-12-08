import React from "react";

const Contact = () => {
    return (
        <section className="contact-section max-w-6xl mx-auto my-10 px-4 sm:px-8 py-8 sm:py-16 bg-white shadow-lg rounded-md">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 items-center">
                {/* Left Side: Text Section */}
                <div className="text-left text-gray-800">
                    <h2 className="text-4xl font-bold mb-4">Address</h2>
                    <p className="mb-4 text-sm sm:text-base">
                        236 5th SE Avenue, New York NY10000, United States
                    </p>
                    <p className="mb-6 text-sm sm:text-base">
                        You can fill out the contact form or reach us directly via
                        email or phone. Let's build something amazing together!
                    </p>
                    <div>
                        <p className="font-semibold mb-2">Email:</p>
                        <a 
                            href="mailto:contact@example.com" 
                            className="text-blue-500 underline"
                        >
                            Monday-Friday: 9:00 - 22:00 
                            Saturday-Sunday: 9:00 - 21:00
                        </a>
                    </div>
                    <div className="mt-4">
                        <p className="font-semibold mb-2">Phone:</p>
                        <a 
                            href="tel:+1234567890" 
                            className="text-blue-500 underline"
                        >
                            Mobile: +(84) 546-6789
                            Hotline: +(84) 456-6789
                        </a>
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
                            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md font-semibold text-sm sm:text-base transition duration-200"
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
