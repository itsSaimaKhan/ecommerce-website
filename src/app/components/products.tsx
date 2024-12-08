import Image from "next/image";

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
    {
      name: "Sam Wilson",
      price: "Rp 2.500.000",
      age: 28,
      image: "/image/image5.jpg",
      description: "A software engineer specializing in backend systems.",
    },
    {
      name: "Sam Wilson",
      price: "Rp 2.500.000",
      age: 28,
      image: "/image/image6.png",
      description: "A software engineer specializing in backend systems.",
    },
    {
      name: "Sam Wilson",
      price: "Rp 2.500.000",
      age: 28,
      image: "/image/image7.jpg",
      description: "A software engineer specializing in backend systems.",
    },
    {
      name: "Sam Wilson",
      price: "Rp 2.500.000",
      age: 28,
      image: "/image/image8.jpg",
      description: "A software engineer specializing in backend systems.",
    },
  ];

  return (
    <div className="products-container w-full py-[60px] px-[131px]">
      {/* Header */}
      <h2 className="text-center font-bold text-[32px] mb-8">Our Products</h2>

      {/* Cards Container */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {data.map((card, index) => (
          <div
            key={index}
            className="card group shadow-lg rounded-lg overflow-hidden bg-white transition-transform hover:scale-105 hover:shadow-xl"
          >
            {/* Card Image */}
            <Image
              src={card.image}
              alt={card.name}
              width={300} // Width of the image
              height={200} // Height of the image
              className="w-full h-[200px] object-cover group-hover:opacity-90 transition-opacity"
            />
            {/* Card Content */}
            <div className="card-body p-4">
              <h5 className="font-semibold text-lg">{card.name}</h5>
              <p className="text-gray-600 text-sm mt-2">{card.description}</p>
              <h5 className="text-[#B88E2F] font-bold text-lg mt-4">{card.price}</h5>
            </div>
          </div>
        ))}
      </div>

      {/* Button */}
      <div className="text-center mt-8">
        <button className="text-[#B88E2F] px-6 py-3 border-2 border-[#B88E2F] rounded-md hover:bg-[#B88E2F] hover:text-white transition">
          Show More
        </button>
      </div>
    </div>
  );
}
