import Image from "next/image";

import SingleProduct from "@/app/shop/[id]/page";

export default function ProductDetails() {
  return (
    <div className="container mx-auto py-10 px-4 md:px-10">
      {/* Tabs Section */}
      <div className="flex space-x-6 border-b border-gray-300 text-gray-600 text-lg font-semibold">
        <button className="text-black pb-2 border-b-2 border-black">
          Description
        </button>
        <button className="hover:text-black hover:border-b-2 border-gray-300 pb-2">
          Additional Information
        </button>
        <button className="hover:text-black hover:border-b-2 border-gray-300 pb-2">
          Reviews [5]
        </button>
      </div>

      {/* Content Section */}
      <div className="mt-8">
        <p className="text-gray-700 leading-relaxed">
          Embodying the raw, wayward spirit of rock ’n’ roll, the Kilburn
          portable active stereo speaker takes the unmistakable look and sound
          of Marshall, unplugs the chords, and takes the show on the road.
        </p>
        <br />
        <p className="text-gray-700 leading-relaxed">
          Weighing in under 7 pounds, the Kilburn is a lightweight piece of
          vintage styled engineering. Setting the bar as one of the loudest
          speakers in its class, the Kilburn is a compact, stout-hearted hero
          with a well-balanced audio which boasts a clear midrange and extended
          highs for a sound that is both articulate and pronounced. The analog
          knobs allow you to fine tune the controls to your personal preferences
          while the guitar-influenced leather strap enables easy and stylish
          travel.
        </p>
      </div>

      {/* Product Images */}
      <div className="flex flex-col md:flex-row justify-center gap-6 mt-10">
        <div className="bg-[#F9F1E7] p-5 rounded-lg flex justify-center items-center">
          <Image
            src="/image/product1.png"
            alt="Product 1"
            width={500}
            height={300}
            className="object-contain"
          />
        </div>
        <div className="bg-[#F9F1E7] p-5 rounded-lg flex justify-center items-center">
          <Image
            src="/image/product2.png"
            alt="Product 2"
            width={500}
            height={300}
            className="object-contain"
          />
          <SingleProduct/>
        </div>
      </div>
    </div>
  );
}
