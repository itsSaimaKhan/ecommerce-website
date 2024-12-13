


import Image from "next/image";
import Link from "next/link";
import Banfo from "../components/banfo";

interface Card {
  id: number;
        name: string;
        description: string;
        price: number;
        originalPrice?: number;
        discount?: number;
        image?: string ;
        isNew?: boolean;
      
}

const data: Card[] = [
  {
    id: 1,
    name: 'Slytherine',
    description: 'Stylish cafe chair',
    price: 2500000,
    originalPrice: 3500000,
    discount: 30,
     image: "/image/image1.jpg",
    
  },
  {
    id: 2,
          name: 'Leviosa',
          description: 'Stylish cafe chair',
          price: 2500000,
    image: "/image/image2.jpg",
   
  },
  {
    id: 3,
          name: 'Lolito',
          description: 'Luxury big sofa',
          price: 7000000,
          originalPrice: 14000000,
          discount: 50,
    image: "/image/image3.jpg",
   
  },
  {
    id: 4,
          name: 'Respira',
          description: 'Outdoor bar table and stool',
          price: 500000,
          isNew: true,
    image: "/image/image4.jpg",
   
  },
  {
    id: 5,
          name: 'Lolito',
          description: 'Luxury big sofa',
          price: 7000000,
          originalPrice: 14000000,
          discount: 50,
    image: "/image/image1.jpg",
    
  },
  {
    id: 6,
    name: 'Slytherine',
    description: 'Stylish cafe chair',
    price: 2500000,
    originalPrice: 3500000,
    discount: 30,
    image: "/image/image2.jpg",
   
  },
  {
    id: 7,
            name: 'Leviosa',
            description: 'Stylish cafe chair',
            price: 2500000,
    image: "/image/image3.jpg",
    
  },
  {
    id: 8,
            name: 'Respira',
            description: 'Outdoor bar table and stool',
            price: 500000,
            isNew: true,
    image: "/image/image4.jpg",
    
  },
  {
    id: 9,
    name: 'Slytherine',
    description: 'Stylish cafe chair',
    price: 2500000,
    originalPrice: 3500000,
    discount: 30,
    image: "/image/image1.jpg",
  
  },
  {
    id: 10,
    name: 'Leviosa',
    description: 'Stylish cafe chair',
    price: 2500000,
    image: "/image/image2.jpg",
  },
  {
    id:11,
    name: 'Respira',
    description: 'Outdoor bar table and stool',
    price: 500000,
    isNew: true,
    image: "/image/image3.jpg",
    
  },
  {
    id: 12,
          name: 'Slytherine',
          description: 'Stylish cafe chair',
          price: 2500000,
          originalPrice: 3500000,
          discount: 30,
    image: "/image/image4.jpg",
   
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
      {/* <div className="products-container w-full py-12 px-8">
        <h2 className="text-center font-bold text-2xl mb-8">Our Products</h2> */}

<div className='w-full py-5 bg-[#F9F1E7] flex flex-col md:flex-row justify-between items-center'>
        <div className='w-full md:w-1/2 px-4 md:px-10 flex flex-col md:flex-row gap-5 items-center mb-4 md:mb-0'>
            <div className='flex justify-between space-x-4'>
                <Image src={"/image/icon3.png"} width={15} height={15} className='object-contain' alt='filter'/>
                <p>Filter</p>
                <Image src={"/image/icon2.png"} width={15} height={15} className='object-contain' alt='filter'/>
                <Image src={"/image/icon1.png"} width={15} height={15} className='object-contain' alt='filter'/>
            </div>
            <div className='border-l-2 px-5 hidden md:block'>
                <p>Showing 1 to 16 of 32 result</p>
            </div>
        </div>

        <div className='w-full md:w-1/2 flex flex-col md:flex-row md:justify-end items-center space-y-3 md:space-y-0 md:space-x-5 px-4 md:px-10'>
            <div className='flex space-x-3'>
                <a>Show</a>
                <input type="text" className='w-20' />
            </div>
            <div className='flex space-x-3'>
                <p>Short By</p>
                <input type="text" className='w-32' />
            </div>
        </div>
    </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {data.map((card, index) => (
            <div
              key={index}
              className="card group shadow-lg overflow-hidden bg-white relative transition-transform hover:scale-105 hover:shadow-xl w-[285px] h-[446px] mx-auto"
            >
              {/* <div className="relative group-hover:bg-gray-200 transition-all"> */} 
                 {/* <Image
                  src={card.image}
                  alt={card.name}
                  width={285}
                  height={301}
                  className="w-full h-[301px] object-cover"
                /> */}

 <div className="relative aspect-square"> 
               <Image 
                src={card.image || '/placeholder.jpg'} // Add fallback image
                alt={card.name}
                
                width={285}
                height={301}
                
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                className="w-full h-[301px] object-cover"
              /> 
                <Link href={'/cart'}>
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
          

    

    <div className='flex justify-center space-x-3 md:space-x-6 items-center p-4 md:p-8'>
        <div className='px-3 md:px-4 py-2 cursor-pointer bg-[#FAF3EA] rounded-lg hover:bg-orange-400'>1</div>
        <div className='px-3 md:px-4 py-2 cursor-pointer bg-[#FAF3EA] rounded-lg hover:bg-orange-400'>2</div>
        <div className='px-3 md:px-4 py-2 cursor-pointer bg-[#FAF3EA] rounded-lg hover:bg-orange-400'>3</div>
        <div className='px-3 md:px-4 py-2 cursor-pointer bg-[#FAF3EA] rounded-lg hover:bg-orange-400'>Next</div>
    </div>
        </div>
        <Banfo/>
      </div>
     
    
  );
}
