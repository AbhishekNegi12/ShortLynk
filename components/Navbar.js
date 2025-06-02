import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="h-16 bg-pink-700 flex justify-between px-3 items-center text-white">
      <div className="logo font-bold text-2xl">
        <Link href="/">ShortLynk</Link>
      </div>
      <ul className="flex justify-center items-center gap-4">
        <Link href="/">
          <li>Home</li>
        </Link>
        <li>
          {/* <a href="#about" className="text-gray-800 hover:text-pink-500">About</a> */}
          {/* <a href="/#about" className="text-gray-800 hover:text-pink-500">About</a> */}
          <Link href="/#about" className="text-gray-800 hover:text-pink-500">
            About
          </Link>
        </li>
        <Link href="/shorten">
          <li>Shorten</li>
        </Link>
        <li>
          {/* <a href="#contact" className="text-gray-800 hover:text-pink-500">Contact</a> */}
          {/* <a href="/#contact" className="text-gray-800 hover:text-pink-500">Contact</a> */}
          <Link href="/#contact" className="text-gray-800 hover:text-pink-500">
            Contact
          </Link>
        </li>
        <li className="flex gap-3">
          <Link href="/shorten">
            <button className="bg-pink-500 rounded-lg  p-3 py-1">
              Try Now
            </button>
          </Link>
          {/* <Link href="/github">
            <button className="text-gray-800 bg-pink-500 rounded-lg font-bold p-3 py-1">
              Github
            </button>
          </Link> */}
          <a
            href="https://github.com/AbhishekNegi12/ShortLynk.git"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-800 hover:text-pink-500">
            <button className="text-gray-800 bg-pink-500 rounded-lg p-3 py-1">
              Github
            </button>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
