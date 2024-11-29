"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);

  const toggleNav = () => {
    setToggleMenu(!toggleMenu);
  };

  return (
    <nav className="flex justify-between items-center p-5 relative h-[20dvh]">
      <Image src={"assets/mc_logo.svg"} width={96} height={96} alt="logo" />

      {/* Hamburger Menu for mobile */}
      <label className="block sm:hidden hamburger nav-hamburger">
        <input type="checkbox" onClick={toggleNav} />
        <svg viewBox="0 0 32 32" className="menu-svg">
          <path
            className="line line-top-bottom"
            d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"
          ></path>
          <path className="line" d="M7 16 27 16"></path>
        </svg>
      </label>

      {/* Desktop nav */}
      <div className="hidden sm:flex gap-5">
        <Link href="#home" className="link">
          Home
        </Link>
        <Link href="#about" className="link">
          About
        </Link>
        <Link href="#skills" className="link">
          Skills
        </Link>
        <Link href="#projects" className="link">
          Projects
        </Link>
      </div>

      <Link
        href="#contactme"
        className="hidden sm:flex items-center justify-center gap-2 font-medium tracking-wider text-lg border border-[--main-fucsia] pr-4 pl-4 pt-3 pb-3 rounded-xl box-shadow bg-gradient-to-b from-[--main-fucsia] to-[--main-blue] text-[--background] hover:text-[--foreground] transition-colors"
      >
        <Image
          src="assets/contact.png"
          alt="contact"
          className="w-5 h-5 aspect-square"
          width={20}
          height={20}
        />{" "}
        Contact me
      </Link>

      {/* Mobile nav */}
      {toggleMenu && (
        <div className="sm:hidden absolute top-full right-0 items-end flex flex-col rounded-lg p-10 bg-[--glass-bg] backdrop-blur-sm">
          <Link href="#home" className="link">
            Home
          </Link>
          <Link href="#about" className="link">
            About
          </Link>
          <Link href="#skills" className="link">
            Skills
          </Link>
          <Link href="#projects" className="link">
            Projects
          </Link>
          <Link
            href="#contactme"
            className="flex gap-2 font-medium tracking-wider text-lg border border-[--main-fucsia] pr-4 pl-4 pt-3 pb-3 rounded-xl box-shadow bg-gradient-to-b from-[--main-fucsia] to-[--main-blue] text-[--background] hover:text-[--foreground] transition-colors"
          >
            <Image
              src="assets/contact.png"
              width={24}
              height={24}
              alt="contact"
              className="w-6 h-6 aspect-square hidden vsm:block"
            />{" "}
            Contact me
          </Link>
        </div>
      )}
    </nav>
  );
}
