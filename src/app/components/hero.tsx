import Image from "next/image";

export default function Hero() {
    return(
        <div className="overflow-x-hidden relative">
            {/* Container for the image */}
            <div className="relative w-full">
                {/* Rsponsive image */}
                <Image 
                src={"/image/herosection.png"}
                alt="Picture of the author"
                width={1440}
                height={100}
                priority
                className="w-full h-auto"/>
                {/* Hero text section */}
                <div className="heroText bg-[#fff3e3] hidden md:block w-[34rem] absolute top-[25%] left-[50%] rounded-[6px] p-[4rem]">
                    <h6 className="font-bold">New Arrival</h6>
                    <h3 className="text-[#888E2F] font-poppins font-extrabold text-[3.25rem]">Discover Our <br/> New Collection</h3>
                    <p className="leading-loose font-poppins font-medium text-[1rem] mb-3">

                    </p>
                    <button className="bg-[#888E2F] pt-4 pr-12 pb-4 pl-12 text-white">Buy Now</button>
                </div>
            </div>
        </div>
    )
}


