

import React from "react";
import Image from "next/image";

const FuniroFurniture = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      <div className="text-center mb-10">
        <p className="text-gray-600">Share your setup with</p>
        <h2 className="text-3xl font-bold">#FuniroFurniture</h2>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-3 grid-rows-3 gap-4 relative">
        {/* First Row */}
        <div className="relative h-[250px] col-span-1 row-span-2">
          <Image
            src="/image/Rectangle 36.png"
            alt="Workspace"
            fill
            className="object-cover rounded-lg"
          />
        </div>
        <div className="relative h-[250px] col-span-1 row-span-1">
          <Image
            src="/image/Rectangle 38.png"
            alt="Vintage radio"
            fill
            className="object-cover rounded-lg"
          />
        </div>
        <div className="relative h-[250px] col-span-1 row-span-1">
          <Image
            src="/image/Rectangle 37.png"
            alt="Dining room"
            fill
            className="object-cover rounded-lg"
          />
        </div>

        {/* Second Row */}
        <div className="relative h-[200px] col-span-1 row-span-1">
          <Image
            src="/image/Rectangle 39.png"
            alt="Bedroom setup"
            fill
            className="object-cover rounded-lg"
          />
        </div>

        {/* Third Row */}
        <div className="relative h-[250px] col-span-1 row-span-1">
          <Image
            src="/image/Rectangle 40.png"
            alt="Vintage chair"
            fill
            className="object-cover rounded-lg"
          />
        </div>
        <div className="relative h-[200px] col-span-1 row-span-1">
          <Image
            src="/image/Rectangle 41.png"
            alt="Home decor"
            fill
            className="object-cover rounded-lg"
          />
        </div>
        <div className="relative h-[250px] col-span-1 row-span-2">
          <Image
            src="/image/Rectangle 43.png"
            alt="Kitchen area"
            fill
            className="object-cover rounded-lg"
          />
        </div>
        <div className="relative h-[250px] col-span-1 row-span-2">
          <Image
            src="/image/Rectangle 44.png"
            alt="Kitchen area"
            fill
            className="object-cover rounded-lg"
          />
        </div>
        <div className="relative h-[250px] col-span-1 row-span-2">
          <Image
            src="/image/Rectangle 45.png"
            alt="Kitchen area"
            fill
            className="object-cover rounded-lg"
          />
        </div>
       
      </div>
    </section>
  );
};

export default FuniroFurniture;

