// NavBar
import React from "react";
import Image from "next/image";
import Link from 'next/link'

export default function CustomNavbar() {
  return (
    <>
      <nav className="flex items-center  justify-left flex-wrap  p-5 w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-[15px] drop-shadow-lg ">
        <ul className="flex items-center  justify-left flex-wrap text-base">
          <li className="hover:underline hover:underline-offset-8 hover:decoration-4 px-5 cursor-pointer">
            
            <Link href="">Home</Link>
          </li>
          <li className="hover:underline hover:underline-offset-8 hover:decoration-4 px-5 cursor-pointer">
          <Link href="/about">About</Link>
          </li>
          <li className="hover:underline hover:decoration-4  hover:underline-offset-8 px-5 cursor-pointer">
          <Link href="/gallery">Gallery</Link>
          </li>
        </ul>
        <div className="absolute top-0 right-0 p-5">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="#"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            <Image
              src="../images/DevCon.svg"
              alt="Dev Con Logo"
              className="white:invert"
              width={80}
              height={24}
              priority
            />
          </a>
        </div>
      </nav>
    </>
  );
}
