// nav bar
"use client"; 

import { useState, useEffect } from "react";
import Link from "next/link";

export default function PortfolioBar() {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // handle scroll logic
  const handleScroll = () => {
    if (window.scrollY > lastScrollY) {
      // scrolling down will hide navbar
      setShow(false);
    } else {
      // scrolling up will show navbar
      setShow(true);
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <nav
      className={`
        fixed top-0 left-0 w-full z-50
        bg-black/80 backdrop-blur-md text-white
        transition-transform duration-500 ease-in-out
        ${show ? "translate-y-0" : "-translate-y-full"}
      `}
    >
      <div className="flex justify-between items-center px-12 py-9">
        {/* Title */}
        <h1 className="text-4xl text-white font-[Times_New_Roman] tracking-wide">
          The Agency Case Studies
        </h1>

        {/* Nav buttons */}
        <ul className="flex space-x-8 font-[Times_New_Roman] text-xl tracking-wide">
          <li>
            <Link
              href="/"
              className="text-white font-medium hover:text-[#f34d4e] transition-colors duration-300 ease-in-out hover:scale-110 transform"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className="text-white font-medium hover:text-[#b053bc] transition-colors duration-300 ease-in-out hover:scale-110 transform"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/portfolio"
              className="text-white font-medium hover:text-[#f6b530] transition-colors duration-300 ease-in-out hover:scale-110 transform"
            >
              Case Studies
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="text-white font-medium hover:text-[#f34d4e] transition-colors duration-300 ease-in-out hover:scale-110 transform"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
