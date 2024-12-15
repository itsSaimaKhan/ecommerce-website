import Image from "next/image";
import Link from "next/link";
import { MdPersonOutline } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { GoHeart } from "react-icons/go";
import { AiOutlineShoppingCart } from "react-icons/ai";

export default function Header() {
  return (
    <>
      <div className="navbar flex items-center justify-between px-6 py-4 bg-gray-100 shadow-md">
        {/* Logo Section */}
        <div className="logo">
          <Image
            src={"/image/Frame 168.png"}
            width={185}
            height={41}
            alt="Picture of the author"
          />
        </div>

        {/* Navigation Links */}
        <div>
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

        Icons Section
        <div className="flex items-center space-x-6 text-2xl text-gray-600">
          <MdPersonOutline className="cursor-pointer hover:text-gray-800" />
          <CiSearch className="cursor-pointer hover:text-gray-800" />
          <GoHeart className="cursor-pointer hover:text-gray-800" />
          <Link href={'/cart'}>
          <AiOutlineShoppingCart className="cursor-pointer hover:text-gray-800" />
          </Link>
        </div>
      </div>
    </>
  );
}


