import React from "react";

const Contact = () => {
    return (
        <div>
            <section>
                {/* Header Image with specific width, height, and top margin */}
                <div className="flex justify-center mb-2" style={{ marginTop: '50px' }}>
                    <img
                        src="image/Rectangle 1.png" // Replace with your image URL
                        alt="Contact Us"
                        className="max-w-full h-auto rounded-md" // Ensures image is responsive and fits screen
                    />
                </div>

                {/* Updated h1 with bold, width, height, and position */}
                <h1
                    className="text-black flex justify-center items-center font-bold"
                    style={{
                        width: '375px',
                        height: '54px',
                        marginTop: '30px', // Reduced margin-top to bring heading closer to image
                        marginLeft: 'auto', 
                        marginRight: 'auto', // Automatically center the heading
                    }}
                >
                    Get In Touch With Us
                </h1>
                <p className="flex justify-center items-center mt-2">
                    For More Information About Our Product & Services Please Feel Free To Drop Us
                </p>
                <p className="flex justify-center items-center mt-2">
                    An Email Our Staff Always Be There To Help You Out Do Not Hesitate!
                </p>
            </section>

            <section className="contact-section max-w-6xl mx-auto my-6 px-4 sm:px-8 py-6 sm:py-12 bg-white shadow-lg rounded-md">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
                    {/* Left Side: Text Section */}
                    <div className="text-left text-gray-800">
                        <h2 className="text-4xl font-bold mb-2">Address</h2>
                        <p className="mb-2 text-sm sm:text-base">
                            236 5th SE Avenue, New York NY10000, United States
                        </p>

                        <div>
                            <h2 className="font-semibold mb-2">Email:</h2>
                            <p className="text-black">
                                Monday-Friday: 9:00 - 22:00
                            </p>
                            <p>Saturday-Sunday: 9:00 - 21:00</p>
                        </div>
                        <div className="mt-4">
                            <h2 className="font-semibold mb-2">Phone:</h2>
                            <p className="text-black">
                                Mobile: +(84) 546-6789
                            </p>
                            <p>Hotline: +(84) 456-6789</p>
                        </div>
                    </div>

                    {/* Right Side: Form Section */}
                    <div className="contact-form bg-white shadow-md rounded-md p-4 sm:p-6">
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
                                className="w-full bg-yellow-700 hover:bg-yellow-500 text-white py-3 rounded-md font-semibold text-sm sm:text-base transition duration-200"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </section>

            {/* Box above the Footer */}
            <div
    className="box-container flex justify-between items-center gap-8"
    style={{
        width: '1440px',
        height: '270px',
        top: '1560px',
        paddingLeft: '100px',
        paddingRight: '100px',
        paddingBottom: '100px',
        marginBottom: '20px', // optional, to separate box from footer
        backgroundColor: '#faf3ea', // Box background color
    }}
>
    <div className="flex flex-col items-center">
        <p className="font-semibold text-lg">High Quality</p>
    </div>
    <div className="flex flex-col items-center">
        <p className="font-semibold text-lg">Warranty Protection</p>
    </div>
    <div className="flex flex-col items-center">
        <p className="font-semibold text-lg">Free Shipping</p>
    </div>
    <div className="flex flex-col items-center">
        <p className="font-semibold ">24 / 7 Support</p>
    </div>
    <div className="flex flex-col items-center">
        <p className="font-semibold text-lg">Crafted from Top Materials</p>
    </div>
    <div className="flex flex-col items-center">
        <p className="font-semibold text-lg">Over 2 Years</p>
    </div>
    <div className="flex flex-col items-center">
        <p className="font-semibold text-lg">Order over 150 $</p>
    </div>
    <div className="flex flex-col items-center">
        <p className="font-semibold text-lg">Dedicated Support</p>
    </div>
</div>
</div>

    );
};

export default Contact;
