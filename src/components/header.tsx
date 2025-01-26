


// import Image from "next/image";
// import Link from "next/link";
// import { MdPersonOutline } from "react-icons/md";
// import { CiSearch } from "react-icons/ci";
// import { GoHeart } from "react-icons/go";
// import { AiOutlineShoppingCart } from "react-icons/ai";
// import { useState } from "react";

// export default function Header() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   return (
//     <div className="navbar flex items-center justify-between px-6 py-4 bg-gray-100 shadow-md">
//       {/* Logo Section */}
//       <div className="logo">
//         <Image
//           src={"/image/Frame 168.png"}
//           width={185}
//           height={41}
//           alt="Logo"
//         />
//       </div>

//       {/* Desktop Navigation Links */}
//       <div className="hidden sm:flex">
//         <ul className="flex space-x-8 text-lg text-gray-700 font-medium">
//           <li>
//             <Link href={"/"}>Home</Link>
//           </li>
//           <li>
//             <Link href={"/shop"}>Shop</Link>
//           </li>
//           <li>
//             <Link href={"/blog"}>Blog</Link>
//           </li>
//           <li>
//             <Link href={"/contact"}>Contact</Link>
//           </li>
//         </ul>
//       </div>

//       {/* Mobile Menu Icon */}
//       <div className="sm:hidden text-2xl cursor-pointer" onClick={() => setIsMenuOpen(!isMenuOpen)}>
//         ☰
//       </div>

//       {/* Mobile Menu */}
//       {isMenuOpen && (
//         <div className="absolute top-16 left-0 w-full bg-gray-100 shadow-md sm:hidden">
//           <ul className="flex flex-col items-center space-y-4 py-4 text-lg text-gray-700 font-medium">
//             <li>
//               <Link href={"/"} onClick={() => setIsMenuOpen(false)}>
//                 Home
//               </Link>
//             </li>
//             <li>
//               <Link href={"/shop"} onClick={() => setIsMenuOpen(false)}>
//                 Shop
//               </Link>
//             </li>
//             <li>
//               <Link href={"/blog"} onClick={() => setIsMenuOpen(false)}>
//                 Blog
//               </Link>
//             </li>
//             <li>
//               <Link href={"/contact"} onClick={() => setIsMenuOpen(false)}>
//                 Contact
//               </Link>
//             </li>
//           </ul>
//         </div>
//       )}

//       {/* Icons Section */}
//       <div className="flex items-center space-x-4 sm:space-x-6 text-2xl text-gray-600">
//         <MdPersonOutline className="cursor-pointer hover:text-gray-800" />
//         <CiSearch className="cursor-pointer hover:text-gray-800" />
//         <GoHeart className="cursor-pointer hover:text-gray-800" />
//         <Link href={"/cart"}>
//           <AiOutlineShoppingCart className="cursor-pointer hover:text-gray-800" />
//         </Link>
//       </div>
//     </div>
//   );
// }

"use client";

import Image from "next/image";
import Link from "next/link";
import { MdPersonOutline } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { GoHeart } from "react-icons/go";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="navbar flex items-center justify-between px-6 py-4 bg-gray-100 shadow-md">
      {/* Logo Section */}
      <div className="logo">
        <Image
          src={"/image/Frame 168.png"}
          width={185}
          height={41}
          alt="Logo"
        />
      </div>

      {/* Desktop Navigation Links */}
      <div className="hidden sm:flex">
        <ul className="flex space-x-8 text-lg text-gray-700 font-medium">
          <li>
            <Link href={"/"}>Home</Link>
          </li>
          <li>
            <Link href={"/shop"}>Shop</Link>
          </li>
          <li>
            <Link href={"/blog"}>Blog</Link>
          </li>
          <li>
            <Link href={"/contact"}>Contact</Link>
          </li>
        </ul>
      </div>

      {/* Mobile Menu Icon */}
      <div
        className="sm:hidden text-2xl cursor-pointer"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        ☰
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-16 left-0 w-full bg-gray-100 shadow-md sm:hidden">
          <ul className="flex flex-col items-center space-y-4 py-4 text-lg text-gray-700 font-medium">
            <li>
              <Link href={"/"} onClick={() => setIsMenuOpen(false)}>
                Home
              </Link>
            </li>
            <li>
              <Link href={"/shop"} onClick={() => setIsMenuOpen(false)}>
                Shop
              </Link>
            </li>
            <li>
              <Link href={"/blog"} onClick={() => setIsMenuOpen(false)}>
                Blog
              </Link>
            </li>
            <li>
              <Link href={"/contact"} onClick={() => setIsMenuOpen(false)}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
      )}

      {/* Icons Section */}
      <div className="flex items-center space-x-4 sm:space-x-6 text-2xl text-gray-600">
        <MdPersonOutline className="cursor-pointer hover:text-gray-800" />
        <CiSearch className="cursor-pointer hover:text-gray-800" />
        <GoHeart className="cursor-pointer hover:text-gray-800" />
        <Link href={"/cart"}>
          <AiOutlineShoppingCart className="cursor-pointer hover:text-gray-800" />
        </Link>
      </div>
    </div>
  );
}
