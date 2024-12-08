import Image from "next/image";

export default function Funiture() {
  return (
    <div className="w-full pt-[30px] md:pt-[67px] pb-[50px] bg-lightBG relative">
      {/* Text Section */}
      <div className="text-center relative w-full md:top-5 top-0">
        <h3 className="text-[14px] md:text-[20px] font-semibold text-Gray2">
          Share your setup with
        </h3>
        <h2 className="text-[30px] md:text-[40px] font-bold text-Gray1">
          #FuniroFurniture
        </h2>
      </div>

      {/* Image Section */}
      <div className="relative w-full h-[1000px]">
        {/* First Image */}
        <div
          className="absolute"
          style={{
            top: "3957px",
            left: -"196px",
          }}
        >
          <Image
            src="/image/Rectangle 37.png"
            width={381 }
            height={323}
            alt="First Image"
          />
        </div>

        {/* Second Image */}
        <div
          className="absolute"
          style={{
            top: "200px",
            left: "400px",
          }}
        >
          <Image
            src="/image/Rectangle 38.png"
            width={344}
            height={312}
            alt="Second Image"
          />
        </div>

        {/* Third Image */}
        <div
          className="absolute"
          style={{
            top: "450px",
            left: "100px",
          }}
        >
          <Image
            src="/image/Rectangle 39.png"
            width={451}
            height={312}
            alt="Third Image"
          />
           <div
          className="absolute"
          style={{
            top: "3559px",
            left: "-196px",
          }}
          >

<Image
            src="/image/Rectangle 36.png"
            width={ 274}
            height={382}
            alt="Third Image"
          />
          </div>


        </div>
      </div>
    </div>
  );
}
