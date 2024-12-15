import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaCalendar, FaUserLarge } from 'react-icons/fa6';

import { FaTag } from 'react-icons/fa';





function Blog() {
    return (
        <div className="max-w-screen-xl container mx-auto pb-8 px-4">
            {/* Header Section */}
            <div className="bg-[#faf4f4]">
                {/* <Header /> */}
            </div>

            {/* Banner Section */}
            <div className="relative text-black">
                <Image
                    src="/image/Rectangle 1.png" // Replace with the correct image file path
                    alt="Shop Banner"
                    height={400}
                    width={600}
                    className="w-full h-[200px] md:h-auto object-cover"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <h1 className="text-xl md:text-5xl font-semibold">Blog</h1>
                    <div className="mt-4 text-gray-700 text-xs md:text-xl flex items-center">
                        <Link href="/" className="font-bold hover:underline">
                            Home
                        </Link>
                        <span className="font-bold mx-2">{'>'}</span>
                        <Link href="/blog" className="hover:underline">
                            Blog
                        </Link>
                    </div>
                </div>
            </div>

            <div className="flex flex-col lg:flex-row">
  {/* Blog Posts Section */}
  <div className="mt-8 w-full lg:w-3/4 gap-6">
    {/* Single Blog Post */}
    {[
      { image: "/image/blog1.png", title: "Going all-in with millennial design", category: "Crafts", date: "01 Jan 2023" },
      { image: "/image/blog2.png", title: "Exploring new ways of decorating", category: "Design", date: "15 Mar 2023" },
      { image: "/image/blog3.png", title: "Handmade pieces that took time to make", category: "Wood", date: "20 Sep 2023" },
    ].map((post, index) => (
      <div key={index} className="bg-white p-4 rounded-lg transition-shadow">
        <Image
          src={post.image}
          height={300}
          width={500}
          alt={`Image for ${post.title}`}
          className="rounded-t-lg"
        />
        <div className="flex items-center space-x-4 mt-3 text-sm text-gray-600">
          <div className="flex items-center space-x-1">
            <FaUserLarge />
            <p>Admin</p>
          </div>
          <div className="flex items-center space-x-1">
            <FaCalendar />
            <p>{post.date}</p>
          </div>
          <div className="flex items-center space-x-1">
          <FaTag />

            <p>{post.category}</p>
          </div>
        </div>
        <h2 className="text-xl font-semibold mt-4">{post.title}</h2>
        <p className="mt-2 text-gray-700 line-clamp-4">
        Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et 
        dolore magna aliqua Mus mauris vitae ultricies leo integer malesuada nunc In nulla posuere sollicitudin
         aliquam ultrices Morbi blandit cursus risus at ultrices mi tempus imperdiet Libero enim sed faucibus turpis
          in Cursus mattis molestie a iaculis at erat Nibh cras pulvinar mattis nunc sed blandit libero Pellentesque elit 
          ullamcorper dignissim cras tincidunt Pharetra et ultrices neque ornare aenean euismod elementum
        </p>
        <Link
          href={`/blog/post-id-${index + 1}`} // Dynamic link based on post ID
          className="mt-4 block text-primary underline underline-offset-4"
        >
          Read More
        </Link>
      </div>
    ))}
  </div>

  {/* Sidebar Section */}
  <div className="mt-10 w-full lg:w-1/4 p-6 gap-6">
    {/* Categories */}
    <div className="p-6 rounded-lg">
      <h3 className="text-xl font-bold mb-4">Categories</h3>
      <ul className="space-y-8 text-gray-500">
        {[
          { name: 'Crafts', count: 2 },
          { name: 'Design', count: 8 },
          { name: 'Handmade', count: 7 },
          { name: 'Interior', count: 1 },
          { name: 'Wood', count: 6 },
        ].map((category, index) => (
          <li key={index} className="flex justify-between text-sm">
            <span>{category.name}</span>
            <span>{category.count}</span>
          </li>
        ))}
      </ul>
    </div>

    {/* Recent Posts */}
    <div className="p-6 rounded-lg">
      <h3 className="text-xl font-bold mb-4">Recent Posts</h3>
      <div className="space-y-6">
        {[
          { image: '/image/b1.png', title: 'Going all-in with millennial design', date: '03 Aug 2022' },
          { image: '/image/b2.png', title: 'Exploring new ways of decorating', date: '03 Aug 2022' },
          { image: '/image/b3.png', title: 'Handmade pieces that took time to make', date: '03 Aug 2022' },
          { image: '/image/b4.png', title: 'Modern home in Milan', date: '03 Aug 2022' },
          { image: '/image/b5.png', title: 'Colorful office redesign', date: '03 Aug 2022' },
        ].map((post, index) => (
          <div key={index} className="flex space-x-3">
            <Image src={post.image} height={100} width={100} alt="" />
            <div>
              <h4 className="text-lg font-semibold">{post.title}</h4>
              <p>{post.date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
</div>


            <div className='justify-center mx-auto text-center'>

           
            </div>
        </div>
    );
}

export default Blog;