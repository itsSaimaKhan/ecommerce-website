import Image from "next/image";
import Link from "next/link";
import Banfo from "../../components/banfo";
import Carts from "@/components/carts";

const page = () => {
  interface Product {
    id: number;
    name: string;
    description: string;
    price: number;
    originalPrice?: number;
    discount?: number;
    image?: string;
    isNew?: boolean;
  }

  const products: Product[] = [
    {
      id: 1,
      name: "Slytherine",
      description: "Stylish cafe chair",
      price: 2500000,
      originalPrice: 3500000,
      discount: 30,
      image: "/image/image1.jpg",
    },
    {
      id: 2,
      name: "Leviosa",
      description: "Stylish cafe chair",
      price: 2500000,
      image: "/image/image2.jpg",
    },
    {
      id: 3,
      name: "Lolito",
      description: "Luxury big sofa",
      price: 7000000,
      originalPrice: 14000000,
      discount: 50,
      image: "/image/image3.jpg",
    },
    {
      id: 4,
      name: "Respira",
      description: "Outdoor bar table and stool",
      price: 500000,
      isNew: true,
      image: "/image/image4.jpg",
    },

    {
      id: 5,
      name: "Lolito",
      description: "Luxury big sofa",
      price: 7000000,
      originalPrice: 14000000,
      discount: 50,
      image: "/image/image1.jpg",
    },
    {
      id: 6,
      name: "Slytherine",
      description: "Stylish cafe chair",
      price: 2500000,
      originalPrice: 3500000,

      image: "/image/image2.jpg",
    },
    {
      id: 7,
      name: "Leviosa",
      description: "Stylish cafe chair",
      price: 2500000,
      discount: 50,
      image: "/image/image3.jpg",
    },
    {
      id: 8,
      name: "Respira",
      description: "Outdoor bar table and stool",
      price: 500000,
      isNew: true,
      image: "/image/image4.jpg",
    },
    {
      id: 9,
      name: "Slytherine",
      description: "Stylish cafe chair",
      price: 2500000,
      originalPrice: 3500000,
      discount: 30,
      image: "/image/image1.jpg",
    },
    {
      id: 10,
      name: "Leviosa",
      description: "Stylish cafe chair",
      price: 2500000,
      image: "/image/image2.jpg",
    },
    {
      id: 11,
      name: "Respira",
      description: "Outdoor bar table and stool",
      price: 500000,
      discount: 50,
      image: "/image/image3.jpg",
    },
    {
      id: 12,
      name: "Slytherine",
      description: "Stylish cafe chair",
      price: 2500000,
      originalPrice: 3500000,
      isNew: true,
      image: "/image/image4.jpg",
    },
    {
      id: 13,
      name: "Leviosa",
      description: "Stylish cafe chair",
      price: 2500000,
      discount: 50,
      image: "/image/image1.jpg",
    },
    {
      id: 14,
      name: "Respira",
      description: "Outdoor bar table and stool",
      price: 500000,

      image: "/image/image2.jpg",
    },
    {
      id: 15,
      name: "Respira",
      description: "Outdoor bar table and stool",
      price: 500000,
      discount: 50,
      image: "/image/image3.jpg",
    },
    {
      id: 16,
      name: "Respira",
      description: "Outdoor bar table and stool",
      price: 500000,
      isNew: true,
      image: "/image/image4.jpg",
    },
  ];

  return (
    <>
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
          />{" "}
          <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-xl md:text-5xl font-semibold">
            {" "}
            Shop
          </h1>
          {/* Breadcrumb Section */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 mt-14">
            <p className="text-gray-700 text-xs md:text-xl flex items-center">
              <Link href="/" className="font-bold hover:underline">
                Home
              </Link>
              <span className="font-bold mx-2">{">"}</span>
              <Link href="/shop" className="hover:underline">
                Shop
              </Link>
            </p>
          </div>
        </div>

        <div className="w-full py-5 bg-[#F9F1E7] flex flex-col md:flex-row justify-between items-center">
          <div className="w-full md:w-1/2 px-4 md:px-10 flex flex-col md:flex-row gap-5 items-center mb-4 md:mb-0">
            <div className="flex justify-between space-x-4">
              <Image
                src={"/image/icon3.png"}
                width={15}
                height={15}
                className="object-contain"
                alt="filter"
              />
              <p>Filter</p>
              <Image
                src={"/image/icon2.png"}
                width={15}
                height={15}
                className="object-contain"
                alt="filter"
              />
              <Image
                src={"/image/icon1.png"}
                width={15}
                height={15}
                className="object-contain"
                alt="filter"
              />
            </div>
            <div className="border-l-2 px-5 hidden md:block">
              <p>Showing 1 to 16 of 32 result</p>
            </div>
          </div>

          <div className="w-full md:w-1/2 flex flex-col md:flex-row md:justify-end items-center space-y-3 md:space-y-0 md:space-x-5 px-4 md:px-10">
            <div className="flex space-x-3">
              <a>Show</a>
              <input type="text" className="w-20" />
            </div>
            <div className="flex space-x-3">
              <p>Short By</p>
              <input type="text" className="w-32" />
            </div>
          </div>
        </div>
      </div>

      <Carts products={products} />

      <div className="flex justify-center space-x-3 md:space-x-6 items-center p-4 md:p-8">
        <div className="px-3 md:px-4 py-2 cursor-pointer bg-[#FAF3EA] rounded-lg hover:bg-orange-400">
          1
        </div>
        <div className="px-3 md:px-4 py-2 cursor-pointer bg-[#FAF3EA] rounded-lg hover:bg-orange-400">
          2
        </div>
        <div className="px-3 md:px-4 py-2 cursor-pointer bg-[#FAF3EA] rounded-lg hover:bg-orange-400">
          3
        </div>
        <div className="px-3 md:px-4 py-2 cursor-pointer bg-[#FAF3EA] rounded-lg hover:bg-orange-400">
          Next
        </div>
      </div>
      <Banfo />
    </>
  );
};
export default page;
