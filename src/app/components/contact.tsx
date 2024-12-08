// import React from "react";

// const Contact = () => {
//     return (
//         <section className="contact-section max-w-6xl mx-auto my-10 px-4 sm:px-8 py-8 sm:py-16 bg-blue-900 shadow-lg rounded-md">
//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 items-center">
//                 {/* Left Side: Text Section */}
//                 <div className="text-left text-white">
//                     <h2 className="text-4xl font-bold mb-4">Let's Talk!</h2>
//                     <p className="mb-4 text-sm sm:text-base">
//                         Have any questions or feedback? Feel free to reach out to us.
//                         We're here to help and would love to hear from you.
//                     </p>
//                     <p className="mb-6 text-sm sm:text-base">
//                         You can fill out the contact form or reach us directly via
//                         email or phone. Let’s build something amazing together!
//                     </p>
//                     <div>
//                         <p className="font-semibold mb-2">Email:</p>
//                         <a 
//                             href="mailto:contact@example.com" 
//                             className="#ffffff underline"
//                         >
//                             contact@example.com
//                         </a>
//                     </div>
//                     <div className="mt-4">
//                         <p className="font-semibold mb-2">Phone:</p>
//                         <a 
//                             href="tel:+1234567890" 
//                             className="text-blue-300 underline"
//                         >
//                             +123 456 7890
//                         </a>
//                     </div>
//                 </div>

//                 {/* Right Side: Form Section */}
//                 <div className="contact-form bg-white shadow-md rounded-md p-6 sm:p-8">
//                     <h3 className="text-2xl font-bold text-gray-800 mb-4">
//                         Contact Form
//                     </h3>
//                     <form>
//                         {/* Full Name */}
//                         <div className="mb-4">
//                             <label
//                                 htmlFor="name"
//                                 className="block text-sm font-medium text-gray-700 mb-1"
//                             >
//                                 Full Name
//                             </label>
//                             <input
//                                 type="text"
//                                 id="name"
//                                 placeholder="Enter your full name"
//                                 className="w-full px-4 py-2 border border-gray-300 rounded-md text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                                 required
//                             />
//                         </div>

//                         {/* Email Address */}
//                         <div className="mb-4">
//                             <label
//                                 htmlFor="email"
//                                 className="block text-sm font-medium text-gray-700 mb-1"
//                             >
//                                 Email Address
//                             </label>
//                             <input
//                                 type="email"
//                                 id="email"
//                                 placeholder="Enter your email"
//                                 className="w-full px-4 py-2 border border-gray-300 rounded-md text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                                 required
//                             />
//                         </div>

//                         {/* Message */}
//                         <div className="mb-6">
//                             <label
//                                 htmlFor="message"
//                                 className="block text-sm font-medium text-gray-700 mb-1"
//                             >
//                                 Your Message
//                             </label>
//                             <textarea
//                                 id="message"
//                                 placeholder="Write your message here"
//                                 className="w-full px-4 py-2 border border-gray-300 rounded-md text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                                 rows={4}
//                                 required
//                             ></textarea>
//                         </div>

//                         {/* Submit Button */}
//                         <button
//                             type="submit"
//                             className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md font-semibold text-sm sm:text-base transition duration-200"
//                         >
//                             Send Message
//                         </button>
//                     </form>
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default Contact;


"use client"
import '@fontsource/poppins'; 
import { TiLocation } from 'react-icons/ti';
import { FaPhone } from "react-icons/fa6";
import { IoTimeSharp } from "react-icons/io5";


export default function Contact() {
    return (
      <main className='font-poppins'>
         
    <div className="h-screen flex ">
      <div
        className="h-[30%]  w-full bg-cover bg-center"
        style={{ backgroundImage: "url('/bg.jpg')" }}
      >
        </div >
        </div>
        <div className="  flex items-center justify-center ">
    <h1 className="text-4xl  font-semibold mt-[1080px] text-black absolute top-72 font-poppins ">
        Get In Touch With Us
    </h1>
    <p className="text-lg mt-[1080px] text-gray-400 font-normal font-poppins absolute top-[340px] max-w-3xl text-center">
    For More Information About Our Product & Services. Please Feel Free To Drop Us
     An Email Our Staff Always Be There To Help You Out. Do Not Hesitate!
    </p>
        </div>

        <div className="flex flex-col md:flex-row items-center md:space-x-12">
          {/* Contact Info Section */}
          <div className="flex-1 mx-60 -mt-64 ">
            
            <div className="mb-4">
              <TiLocation className="inline-block text-3xl  mr-2 -mx-11" />
              <div>
      <h2 className=" font-bold text-gray-900 text-2xl">Address</h2>
      <p className=" font-medium text-black w-48 mt-1">236 5th Avenue, New York NY10000, United States</p>
    </div>
            </div>
            <div className="mb-4 mt-5">
              <FaPhone className="inline-block text-3xl -mx-11 mr-2" />
              <div>
      <h2 className=" font-bold text-gray-900 text-2xl">Phone</h2>
      <p className=" text-black mt-1 font-medium">Mobile: +(84) 546-6789</p>
      <p className=" text-black mt-1 font-medium">Hotline: +(84) 456-6789</p>
    </div>
            <div className="mb-4 mt-5">
              <IoTimeSharp  className="inline-block  -mx-11 text-3xl mr-2" />
              <div>
      <h2 className=" font-bold text-gray-900 text-2xl">Working Time</h2>
      <p className=" text-black mt-1 font-medium">Monday-Friday: 9:00-
        22:00
      </p>
      <p className=" text-black mt-1 font-medium">Saturday-Sunday: 9:00-21:00</p>
    </div>
            </div>
          </div></div ></ div>

          <div className="flex-1 w-[600px] float-right mr-40 -mt-[430px] ">
            <form
              className="space-y-4"
              
              
            >
              <div>
                <label htmlFor="name" className="block mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  
                  
                  className="w-full p-2 rounded bg-white border border-gray-600 focus:outline-none "
                  placeholder="Enter Your Name"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block mb-2">
                  Email address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  
                  className="w-full p-2 rounded bg-white border border-gray-600 focus:outline-none focus:border-customBlue"
                  placeholder="Enter Your Email"
                  required
                />
              </div>

              <div>
                <label htmlFor="subject" className="block mb-2">
                  Subject
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={2}
                  
                  className="w-full p-2 rounded bg-white border border-gray-600 focus:outline-none focus:border-customBlue"
                  placeholder="Enter Your Message"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={3}
                  
                  className="w-full p-2 rounded bg-white border border-gray-600 focus:outline-none focus:border-customBlue"
                  placeholder="Enter Your Message"
                  required
                />
              </div>
   <div className='py-5'>
              <button 
                type="submit"
                
                className=" text-white h-11 bg-yellow-700 w-36 "
              >Submit
                
              </button></div >
            </form>
          </div>

          <div className="h-screen flex mt-36 ">
      <div
        className="h-[20%]  w-full bg-cover bg-center"
        style={{ backgroundImage: "url('/cool.jpg')" }}
      >
        </div >
        </div>
        
        
  

      </main>
    )
  }
