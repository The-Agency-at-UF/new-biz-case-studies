"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function PortfolioBar() {
  const [show, setShow] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const lastScrollY = useRef(0);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY <= 10) {
      setShow(true);
      return;
    }

    if (Math.abs(currentScrollY - lastScrollY.current) < 10) return;

    if (menuOpen) {
      setShow(true);
      lastScrollY.current = currentScrollY;
      return;
    }

    setShow(currentScrollY < lastScrollY.current);
    lastScrollY.current = currentScrollY;
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [menuOpen]);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setMenuOpen(false);
    };
    window.addEventListener("resize", onResize, { passive: true });
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <nav
      className={`
      fixed top-0 left-0 w-full z-50
      backdrop-blur-lg
      bg-black/55
      shadow-[0_8px_30px_rgba(0,0,0,0.35)]
      transition-transform duration-500 ease-in-out
      ${show ? "translate-y-0" : "-translate-y-full"}
    `}
    >
      <div className="">
        <div className="flex items-center justify-between px-4 sm:px-6 lg:px-12 py-2 sm:py-3 lg:py-4">
          {/* Logo section */}
          <div className="flex flex-col items-start gap-1 min-w-0">
            <Link
              href="/"
              className="relative h-8 sm:h-10 w-28 sm:w-40 md:w-44"
              onClick={() => setMenuOpen(false)}
            >
              <Image
                src="/Agency_logo.png"
                alt="The Agency Logo"
                fill
                className="object-contain object-left"
                priority
              />
            </Link>

            {/* Hidden on mobile */}
            <span className="hidden sm:block font-sans text-[14px] uppercase tracking-[0.35em] font-bold select-none pointer-events-none">
              Case Studies
            </span>
          </div>

          {/* Desktop navigation */}
          <ul className="hidden md:flex gap-6 lg:gap-12 font-sans text-sm uppercase tracking-[0.2em] lg:tracking-[0.3em] font-bold">
            <li>
              <Link href="/" className="hover:text-[#f34d4e] transition-colors">
                Presentation
              </Link>
            </li>
            <li>
              <Link href="/portfolio" className="hover:text-[#f6b530] transition-colors">
                Case Studies
              </Link>
            </li>
            <li>
              <Link href="/admin" className="hover:text-[#f34d4e] transition-colors">
                Admin
              </Link>
            </li>
          </ul>

          {/* Mobile button */}
          <button
            className="md:hidden p-2 hover:bg-white/10 rounded-sm"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            <div className="space-y-1">
              <span className="block w-6 h-[2px] bg-white"></span>
              <span className="block w-6 h-[2px] bg-white"></span>
              <span className="block w-6 h-[2px] bg-white"></span>
            </div>
          </button>
        </div>

        {/* Mobile dropdown */}
        {menuOpen && (
          <div className="md:hidden px-4 sm:px-6 pb-4">
            <ul className="flex flex-col gap-2 font-sans text-sm uppercase tracking-[0.2em] font-bold">
              <li>
                <Link href="/" onClick={() => setMenuOpen(false)} className="block py-2 hover:text-[#f34d4e]">
                  Presentation
                </Link>
              </li>
              <li>
                <Link href="/portfolio" onClick={() => setMenuOpen(false)} className="block py-2 hover:text-[#f6b530]">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link href="/admin" onClick={() => setMenuOpen(false)} className="block py-2 hover:text-[#f34d4e]">
                  Admin
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}
