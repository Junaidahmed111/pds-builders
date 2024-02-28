"use client";
import { useState } from "react";
import logo from "@/public/assets/logo.jpg";
import Image from "next/image";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import { RxHamburgerMenu } from "react-icons/rx";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-yellow-400 py-4 px-12 flex justify-between items-center">
      <div className="flex items-center">
        <Image alt="logo" src={logo} width={80} height={80} />
      </div>
      <div className="hidden md:flex items-center space-x-10 text-2xl font-bold">
        <a href="#" className="text-white hover:text-gray-300">
          Home
        </a>
        <a href="#" className="text-white hover:text-gray-300">
          About Us
        </a>
        <a href="#" className="text-white hover:text-gray-300">
          Contact Us
        </a>
        <a href="#" className="text-white hover:text-gray-300">
          Gallery
        </a>
        <a href="#" className="text-white hover:text-gray-300">
          Services
        </a>
      </div>
      <div className="flex md:hidden md:order-non">
        <button className="2xl:hidden z-30" onClick={toggleMenu}>
          {isMenuOpen ? (
            <AiOutlineClose size="30px" color="#fff" />
          ) : (
            <RxHamburgerMenu size="30px" color="#fff" />
          )}
        </button>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-yellow-400">
          <div className=" flex flex-col items-end justify-end  mx-auto px-4 py-2 font-bold text-xl">
            <a href="#" className="block text-white py-2">
              Home
            </a>
            <a href="#" className="block text-white py-2">
              About Us
            </a>
            <a href="#" className="block text-white py-2">
              Contact Us
            </a>
            <a href="#" className="block text-white py-2">
              Gallery
            </a>
            <a href="#" className="block text-white py-2">
              Services
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
