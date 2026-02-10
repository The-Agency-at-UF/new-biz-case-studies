// // nav bar

"use client"; 

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";

export default function PortfolioBar() {
  const [show, setShow] = useState(true);
  const lastScrollY = useRef(0); 

  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    if (currentScrollY <= 10) {
      setShow(true);
      return;
    }
    if (Math.abs(currentScrollY - lastScrollY.current) < 10) return;
    if (currentScrollY > lastScrollY.current) {
      setShow(false); 
    } else {
      setShow(true);  
    }
    lastScrollY.current = currentScrollY;
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`
        fixed top-0 left-0 w-full z-50
        will-change-transform 
        bg-black/95 backdrop-blur-md text-white
        transition-transform duration-500 ease-in-out
        ${show ? "translate-y-0" : "-translate-y-full"}
      `}
    >
      <div className="flex justify-between items-center px-12 py-7 border-b border-white/10">
        
        <Link href="/" className="relative h-12 w-52">
          <Image 
            src="/Agency_logo.png" 
            alt="The Agency Logo"
            fill
            className="object-contain"
            priority
          />
        </Link>

        <ul className="flex space-x-12 font-sans text-sm uppercase tracking-[0.3em] font-black">
          {/* Each link now has a 'group' class and a hidden 2px white line 
            that becomes visible and scales in on hover.
          */}
          <li>
            <Link 
              href="/" 
              className="group relative py-1 hover:text-[#f34d4e] transition-all duration-300"
            >
              Home
              <span className="absolute left-0 bottom-0 w-full h-[2px] bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
            </Link>
          </li>
          <li>
            <Link 
              href="/about" 
              className="group relative py-1 hover:text-[#b053bc] transition-all duration-300"
            >
              About
              <span className="absolute left-0 bottom-0 w-full h-[2px] bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
            </Link>
          </li>
          <li>
            <Link 
              href="/portfolio" 
              className="group relative py-1 hover:text-[#f6b530] transition-all duration-300"
            >
              Case Studies
              <span className="absolute left-0 bottom-0 w-full h-[2px] bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
            </Link>
          </li>
          <li>
            <Link 
              href="/contact" 
              className="group relative py-1 hover:text-[#f34d4e] transition-all duration-300"
            >
              Contact
              <span className="absolute left-0 bottom-0 w-full h-[2px] bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}