// import React from 'react'
// import Image from 'next/image'
// import Link from 'next/link'




// const item =
//     [
//         { id: 1, src: '/image/hero3.jpeg', name: 'Trenton modular sofa_3', price: 'Rs. 25,000.00', href: '/hero/3' },
//         { id: 1, src: '/image/hero4.jpeg', name: 'Granite dining table with dining chair', price: 'Rs. 25,000.00', href: '/hero/4' },
//         { id: 1, src: '/image/hero5.jpeg', name: 'Outdoor bar table and stool', price: 'Rs. 25,000.00', href: '/hero/5' },
//         { id: 1, src: '/image/hero6.jpeg', name: 'Plain console with teak', price: 'Rs. 25,000.00', href: '/hero/6' },
//         { id: 1, src: '/image/shop5.jpeg', name: 'Trenton modular sofa_3', price: 'Rs. 25,000.00', href: '/shop/5' },
//         { id: 1, src: '/image/shop6.jpeg', name: 'Granite dining table with dining chair', price: 'Rs. 25,000.00', href: '/shop/6' },
//         { id: 1, src: '/image/shop7.jpeg', name: 'Outdoor bar table and stool', price: 'Rs. 25,000.00', href: '/shop/7' },
//         { id: 1, src: '/image/shop8.jpeg', name: 'Plain console with teak', price: 'Rs. 25,000.00', href: '/shop/8' },
//         { id: 1, src: '/image/shop9.jpeg', name: 'Trenton modular sofa_3', price: 'Rs. 25,000.00', href: '/shop/9' },
//         { id: 1, src: '/image/shop10.jpeg', name: 'Granite dining table with dining chair', price: 'Rs. 25,000.00', href: '/shop/10' },
//         { id: 1, src: '/image/shop11.jpeg', name: 'Outdoor bar table and stool', price: 'Rs. 25,000.00', href: '/shop/11' },
//         { id: 1, src: '/image/shop12.jpeg', name: 'Plain console with teak', price: 'Rs. 25,000.00', href: '/shop/12' },
//         { id: 1, src: '/image/shop13.jpeg', name: 'Trenton modular sofa_3', price: 'Rs. 25,000.00', href: '/shop/13' },
//         { id: 1, src: '/image/shop14.jpeg', name: 'Granite dining table with dining chair', price: 'Rs. 25,000.00', href: '/shop/14' },
//         { id: 1, src: '/image/shop15.jpeg', name: 'Outdoor bar table and stool', price: 'Rs. 25,000.00', href: '/shop/15' },
//         { id: 1, src: '/image/shop16.jpeg', name: 'Plain console with teak', price: 'Rs. 25,000.00', href: '/shop/16' },
//     ]



// function Shop() {
//     return (

//         <div className="max-w-screen-2xl container mx-auto pb-8 px-4">
//             <div className='bg-[#faf4f4]'>
             
//             </div>
//             {/* Banner Section */}
//             <div className="relative text-black">
//                 <Image
//                     src="/image/shop.jpeg" // Replace with the correct image file path
//                     alt="Shop Banner"
//                     height={400}
//                     width={1600}
//                     className="w-full h-40 md:h-auto object-cover"
//                 />
//                 <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-xl md:text-5xl font-semibold ">
//                     Shop
//                 </h1>
//                 {/* Breadcrumb Section */}
//                 <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 mt-14">
//                     <p className="text-gray-700 text-xs md:text-xl flex items-center">
//                         <Link href="/" className="font-bold hover:underline">Home</Link>
//                         <span className="font-bold mx-2">{'>'}</span>
//                         <Link href="/shop" className=" hover:underline">Shop</Link>
//                     </p>
//                 </div>
//             </div>

//             <div className='my-6'>
             
//             </div>

//             <div>
//                 {/* Product List */}
//                 <div className="flex flex-wrap justify-center md:justify-start  gap-6 ">
//                     {/* Product Item */}
//                     {item.map((item) => (
//                     <div key={item.id} className="flex flex-col text-left mx-auto h-[300px] w-[350px]">
//                         {/* <Link href={item.href} passHref> */}
//                             <Image
//                                 src={item.src}
//                                 alt={item.name}
//                                 height={300}
//                                 width={350}
//                                 className="rounded-lg h-[300px] w-[300px] object-cover"
//                             />
//                         {/* </Link> */}
//                         <p className="text-sm font-medium">{item.name}</p>
//                         <h3 className="text-xl font-semibold">{item.price}</h3>
//                     </div>
//                 ))}










// <div className='justify-center mx-auto'>


// </div>

//                 </div>
//             </div>

          

//         </div>
//     )
// }

// export default Shop


import Image from "next/image";
import Link from "next/link";

interface Card {
  name: string;
  age: number;
  description: string;
  image: string;
  price: string;
}

const data: Card[] = [
  {
    name: "Syltherine",
    price: "Rp 2.500.000",
    age: 30,
    image: "/image/image1.jpg",
    description: "Stylish cafe chair",
  },
  {
    name: "Jane Smith",
    price: "Rp 2.500.000",
    age: 25,
    image: "/image/image2.jpg",
    description: "A creative designer who loves creating stunning visuals.",
  },
  {
    name: "Sam Wilson",
    price: "Rp 2.500.000",
    age: 28,
    image: "/image/image3.jpg",
    description: "A software engineer specializing in backend systems.",
  },
  {
    name: "Sam Wilson",
    price: "Rp 2.500.000",
    age: 28,
    image: "/image/image4.jpg",
    description: "A software engineer specializing in backend systems.",
  },
  {
    name: "Syltherine",
    price: "Rp 2.500.000",
    age: 30,
    image: "/image/image1.jpg",
    description: "Stylish cafe chair",
  },
  {
    name: "Jane Smith",
    price: "Rp 2.500.000",
    age: 25,
    image: "/image/image2.jpg",
    description: "A creative designer who loves creating stunning visuals.",
  },
  {
    name: "Sam Wilson",
    price: "Rp 2.500.000",
    age: 28,
    image: "/image/image3.jpg",
    description: "A software engineer specializing in backend systems.",
  },
  {
    name: "Sam Wilson",
    price: "Rp 2.500.000",
    age: 28,
    image: "/image/image4.jpg",
    description: "A software engineer specializing in backend systems.",
  },
  {
    name: "Syltherine",
    price: "Rp 2.500.000",
    age: 30,
    image: "/image/image1.jpg",
    description: "Stylish cafe chair",
  },
  {
    name: "Jane Smith",
    price: "Rp 2.500.000",
    age: 25,
    image: "/image/image2.jpg",
    description: "A creative designer who loves creating stunning visuals.",
  },
  {
    name: "Sam Wilson",
    price: "Rp 2.500.000",
    age: 28,
    image: "/image/image3.jpg",
    description: "A software engineer specializing in backend systems.",
  },
  {
    name: "Sam Wilson",
    price: "Rp 2.500.000",
    age: 28,
    image: "/image/image4.jpg",
    description: "A software engineer specializing in backend systems.",
  },
];

export default function Products() {
  return (
    <div className="max-w-screen-2xl container mx-auto pb-8 px-4">
      <div className="bg-[#faf4f4]"></div>
      {/* Banner Section */}
      <div className="relative text-black">
        <Image
          src="/image/Rectangle 1.png"
          alt="Shop Banner"
          height={400}
          width={1600}
          className="w-full h-40 md:h-auto object-cover"
        />
        <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-xl md:text-5xl font-semibold">
          Shop
        </h1>
        {/* Breadcrumb Section */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 mt-14">
          <p className="text-gray-700 text-xs md:text-xl flex items-center">
            <Link href="/" className="font-bold hover:underline">
              Home
            </Link>
            <span className="font-bold mx-2">{'>'}</span>
            <Link href="/shop" className="hover:underline">
              Shop
            </Link>
          </p>
        </div>
      </div>

      {/* Products Section */}
      <div className="products-container w-full py-12 px-8">
        <h2 className="text-center font-bold text-2xl mb-8">Our Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {data.map((card, index) => (
            <div
              key={index}
              className="card group shadow-lg overflow-hidden bg-white relative transition-transform hover:scale-105 hover:shadow-xl w-[285px] h-[446px] mx-auto"
            >
              <div className="relative group-hover:bg-gray-200 transition-all">
                <Image
                  src={card.image}
                  alt={card.name}
                  width={285}
                  height={301}
                  className="w-full h-[301px] object-cover"
                />
                <Link href={`/cart?product=${card.name}`}>
                  <button
                    className="absolute bg-white text-black text-sm font-semibold flex items-center justify-center rounded-md opacity-0 group-hover:opacity-100 transition-opacity"
                    style={{
                      width: "202px",
                      height: "48px",
                      top: "calc(50% - 24px)",
                      left: "calc(50% - 101px)",
                    }}
                  >
                    Add to Cart
                  </button>
                </Link>
              </div>
              <div className="card-body p-4 group-hover:bg-gray-200 transition-all h-[145px]">
                <h5 className="font-semibold text-lg">{card.name}</h5>
                <p className="text-gray-600 text-sm mt-2">{card.description}</p>
                <h5 className="text-[#B88E2F] font-bold text-lg mt-4">
                  {card.price}
                </h5>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <button className="text-[#B88E2F] px-6 py-3 border-2 border-[#B88E2F] rounded-md hover:bg-[#B88E2F] hover:text-white transition">
            Show More
          </button>
        </div>
      </div>
    </div>
  );
}
