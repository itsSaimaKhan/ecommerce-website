import React from "react";
import Image from "next/image";

const Banfo = () => {
  return (
    <div>
      <div className="bg-[#FAF3EA] h-[270px] w-[1440px] flex flex-col md:flex-row justify-between items-center px-5 md:px-10 py-[100px] my-5 md:my-10 gap-6 md:gap-0">
        {/* First Feature */}
        <div className="flex items-center space-x-4">
          <div>
            <Image
              src="/image/trophy 1.png"
              width={60}
              height={60}
              alt="High Quality"
            />
          </div>
          <div
            className="w-[258px] h-[38px] flex flex-col justify-center"
            style={{ gap: "0px", opacity: "1" }}
          >
            <h3 className="text-lg md:text-xl font-bold">High Quality</h3>
            <p className="text-sm md:text-base">crafted from top materials</p>
          </div>
        </div>

        {/* Second Feature */}
        <div className="flex items-center space-x-4">
          <div>
            <Image
              src="/image/guarantee.png"
              width={60}
              height={60}
              alt="Warranty Protection"
            />
          </div>
          <div
            className="w-[258px] h-[38px] flex flex-col justify-center"
            style={{ gap: "0px", opacity: "1" }}
          >
            <h3 className="text-lg md:text-xl font-bold">Warranty Protection</h3>
            <p className="text-sm md:text-base">Over 2 years</p>
          </div>
        </div>

        {/* Third Feature */}
        <div className="flex items-center space-x-4">
          <div>
            <Image
              src="/image/shipping.png"
              width={60}
              height={60}
              alt="Free Shipping"
            />
          </div>
          <div
            className="w-[258px] h-[38px] flex flex-col justify-center"
            style={{ gap: "0px", opacity: "1" }}
          >
            <h3 className="text-lg md:text-xl font-bold">Free Shipping</h3>
            <p className="text-sm md:text-base">Order over 150 $</p>
          </div>
        </div>

        {/* Fourth Feature */}
        <div className="flex items-center space-x-4">
          <div>
            <Image
              src="/image/customer-support.png"
              width={60}
              height={60}
              alt="24/7 Support"
            />
          </div>
          <div
            className="w-[258px] h-[38px] flex flex-col justify-center"
            style={{ gap: "0px", opacity: "1" }}
          >
            <h3 className="text-lg md:text-xl font-bold">24 / 7 Support</h3>
            <p className="text-sm md:text-base">Dedicated support</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banfo;
