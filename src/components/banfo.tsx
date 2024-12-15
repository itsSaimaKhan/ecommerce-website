import React from 'react'

import Image from 'next/image'
const Banfo = () => {
  return (

    <div>
        

        <div className='bg-[#FAF3EA]  h-[260px] w-[1440px] top-100px bottom-100px flex flex-col md:flex-row justify-between items-center p-5 md:p-10 my-5 md:my-10 gap-6 md:gap-0'>
        <div className='flex items-center space-x-4'>
            <div>
                <Image src={"/image/trophy 1.png"} width={50} height={50} alt='High Quality' />
            </div>
            <div>
                <h3 className='text-lg md:text-xl font-bold'>High Quality</h3>
                <p className='text-sm md:text-base'>crafted from top materials</p>
            </div>
        </div>

        <div className='flex items-center space-x-4'>
            <div>
                <Image src={"/image/guarantee.png"} width={50} height={50} alt='High Quality' />
            </div>
            <div>
                <h3 className='text-lg md:text-xl font-bold'>Warranty Protection</h3>
                <p className='text-sm md:text-base'>Over 2 years</p>
            </div>
        </div>

        <div className='flex items-center space-x-4'>
            <div>
                <Image src={"/image/shipping.png"} width={50} height={50} alt='High Quality' />
            </div>
            <div>
                <h3 className='text-lg md:text-xl font-bold'>Free Shipping</h3>
                <p className='text-sm md:text-base'>Order over 150 $</p>
            </div>
        </div>

        <div className='flex items-center space-x-4'>
            <div>
                <Image src={"/image/customer-support.png"} width={50} height={50} alt='High Quality' />
            </div>
            <div>
                <h3 className='text-lg md:text-xl font-bold'>24 / 7 Support</h3>
                <p className='text-sm md:text-base'>Dedicated support</p>
            </div>
        </div>
    </div>


    </div>
  )
}

export default Banfo