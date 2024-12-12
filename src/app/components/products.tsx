import Image from "next/image";
import Link from "next/link";


export default function Products() {
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
  ];

  return (
    <div className="products-container w-full py-12 px-8">
      {/* Header */}
      <h2 className="text-center font-bold text-2xl mb-8">Our Products</h2>

      {/* Cards Container */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {data.map((card, index) => (
          <div
            key={index}
            className="card group shadow-lg overflow-hidden bg-white relative transition-transform hover:scale-105 hover:shadow-xl w-[285px] h-[446px] mx-auto"
          >
            {/* Card Content */}
            <div className="relative group-hover:bg-gray-200 transition-all">
              {/* Card Image */}
              <Image
                src={card.image}
                alt={card.name}
                width={285}
                height={301}
                className="w-full h-[301px] object-cover"
              />
              {/* Add to Cart Button */}
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
            

            {/* Share, Compare, Like */}
            <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 flex justify-between items-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity w-[202px]">
              <span
                className="text-white text-center"
                style={{ width: "32px", height: "24px", fontSize: "12px", lineHeight: "24px" }}
              >
                Share
              </span>
              <span
                className="text-white text-center"
                style={{ width: "32px", height: "24px", fontSize: "12px", lineHeight: "24px" }}
              >
                Compare
              </span>
              <span
                className="text-white text-center"
                style={{ width: "32px", height: "24px", fontSize: "12px", lineHeight: "24px" }}
              >
                Like
              </span>
            </div>

            {/* Card Description */}
            <div className="card-body p-4 group-hover:bg-gray-200 transition-all h-[145px]">
              <h5 className="font-semibold text-lg">{card.name}</h5>
              <p className="text-gray-600 text-sm mt-2">{card.description}</p>
              <h5 className="text-[#B88E2F] font-bold text-lg mt-4">{card.price}</h5>
            </div>
          </div>
        ))}
      </div>

      {/* Show More Button */}
      <div className="text-center mt-8">
        <button className="text-[#B88E2F] px-6 py-3 border-2 border-[#B88E2F] rounded-md hover:bg-[#B88E2F] hover:text-white transition">
          Show More
        </button>
      </div>
    </div>
  );
}
