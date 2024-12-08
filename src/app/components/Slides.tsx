import Image from "next/image";

export default function SlideSection() {
  return (
    <div className="slideSection bg-[#FCF8F3] relative h-[670px] w-[1440px] top-2763px">

      {/* Text Section */}
      <div className="slideText pt-9 text-center">
        <h4 className="font-extrabold h-[96px] w-[422px]  top-2986px left-100px text-[2rem]">50+ Beautiful Rooms Inspiration</h4>
        <p className="mt-2">
          Our designer already made a lot of beautiful prototypes of rooms that
          inspire you.
        </p>
        <button className="bg-[#B88E2F] p-2 mt-4 text-white rounded-md">
          Explore More
        </button>
      </div>

      {/* Images Section */}
      <div className="relative">
        {/* First Image */}
        <div
          className="absolute"
          style={{
            width: "404px",
            height: "582px",
            top: "100px", // Adjusted top value for visibility
            left: "50px", // Adjusted left value for visibility
          }}
        >
          <Image
            src="/image/slider1.png" // Ensure the image is inside the public folder
            width={404}
            height={582}
            alt="Beautiful room inspiration 1"
            className="object-cover rounded-lg"
          />
        </div>

        {/* Second Image */}
        <div
          className="absolute"
          style={{
            width: "372px",
            height: "486px",
            top: "100px", // Adjusted top value for visibility
            left: "450px", // Adjusted left value for visibility
          }}
        >
          <Image
            src="/image/slider2.png" // Ensure the image is inside the public folder
            width={372}
            height={486}
            alt="Beautiful room inspiration 2"
            className="object-cover rounded-lg"
          />
        </div>
      </div>
    </div>
  );
}
