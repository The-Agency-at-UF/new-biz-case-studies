"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

type NavLinkProps = {
  href: string;
  children: ReactNode;
  /** Example: "group-hover:bg-[#f34d4e]" */
  underlineColor: string;
};

function NavLink({ href, children, underlineColor }: NavLinkProps) {
  return (
    <Link href={href} className="group relative flex items-center px-2 text-white">
      {children}

      <span
        className={[
          "pointer-events-none absolute left-0 -bottom-1 w-full h-[2px]",
          "rounded-full bg-white/70",
          "scale-x-0 origin-left",
          "transition-all duration-300",
          "group-hover:scale-x-100",
          // glow
          "group-hover:shadow-[0_0_14px_rgba(255,255,255,0.65)]",
          // color on hover
          underlineColor,
        ].join(" ")}
      />
    </Link>
  );
}

export default function PortfolioBar() {
  const pathname = usePathname();
  const [show, setShow] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const lastScrollY = useRef(0);
  const [presentationHref, setPresentationHref] = useState<string>("/presentation");
  const [caseStudiesHref, setCaseStudiesHref] = useState<string>("/portfolio");

  const toCamelCase = (name: string) =>
    name
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join("");

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

  useEffect(() => {
    if (typeof window === "undefined") return;

    const url = new URL(window.location.href);
    const params = url.searchParams;
    const path = pathname || window.location.pathname || "/";

    const isAppRoute = path === "/" || path.startsWith("/presentation") || path.startsWith("/portfolio") || path.startsWith("/admin") || path.startsWith("/login");
    const pathSegments = path.split("/").filter(Boolean);

    const companyFromPath = !isAppRoute && pathSegments.length === 1 ? pathSegments[0] : null;
    const companyFromQuery = params.get("company");
    const companySlug = companyFromQuery ?? companyFromPath;

    setPresentationHref(companySlug ? `/${companySlug}` : "/presentation");

    if (!companySlug) {
      setCaseStudiesHref("/portfolio");
      return;
    }

    const controller = new AbortController();

    (async () => {
      try {
        const baseUrl = process.env.NEXT_PUBLIC_API_URL || "";
        const response = await fetch(`${baseUrl}/api/company/${companySlug}/casestudies`, {
          signal: controller.signal,
        });

        if (!response.ok) {
          throw new Error(`HTTP ${response.status}`);
        }

        const data = await response.json();

        if (!Array.isArray(data) || data.length === 0) {
          setCaseStudiesHref("/portfolio");
          return;
        }

        const firstStudy = data[0];
        const studyId = typeof firstStudy?.Name === "string" ? toCamelCase(firstStudy.Name) : null;
        setCaseStudiesHref(
          studyId ? `/portfolio/caseStudies/${studyId}?company=${encodeURIComponent(companySlug)}` : "/portfolio"
        );
      } catch (err) {
        if ((err as Error).name !== "AbortError") {
          console.error("Failed to load company case studies for nav:", err);
        }
        setCaseStudiesHref("/portfolio");
      }
    })();

    return () => controller.abort();
  }, [pathname]);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 backdrop-blur-lg bg-black/55 shadow-[0_8px_30px_rgba(0,0,0,0.35)] transition-transform duration-500 ease-in-out ${
        show ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div>
        <div className="flex items-center justify-between px-[clamp(1rem,4vw,3rem)] py-2 sm:py-3 lg:py-4">
          {/* Logo */}
          <div className="flex flex-col items-start gap-1 min-w-0">
            <Link
              href="/"
              className="relative h-8 sm:h-10 w-[clamp(7rem,12vw,11rem)]"
              onClick={() => setMenuOpen(false)}
            >
              <Image
                src="/logos/Agency_logo.png"
                alt="The Agency Logo"
                fill
                sizes="(max-width: 640px) 7rem, (max-width: 1024px) 9rem, 11rem"
                className="object-contain object-left"
                priority
              />
            </Link>

            <span className="hidden sm:block font-sans text-[14px] uppercase tracking-[0.35em] font-bold text-white select-none pointer-events-none">
              Case Studies
            </span>
          </div>

          {/* Desktop Nav */}
          <ul className="hidden md:flex gap-[clamp(1.5rem,4vw,3rem)] font-sans text-[clamp(0.75rem,1.5vw,0.875rem)] uppercase tracking-[0.2em] lg:tracking-[0.3em] font-bold">
            <li>
              <NavLink href={presentationHref} underlineColor="group-hover:bg-[#f34d4e]">
                Presentation
              </NavLink>
            </li>
            <li>
              <NavLink href={caseStudiesHref} underlineColor="group-hover:bg-[#f6b530]">
                Case Studies
              </NavLink>
            </li>
            <li>
              <NavLink href="/admin" underlineColor="group-hover:bg-[#b053bc]">
                Admin
              </NavLink>
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 hover:bg-white/10 rounded-sm"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            <div className="space-y-1">
              <span className="block w-6 h-[2px] bg-white" />
              <span className="block w-6 h-[2px] bg-white" />
              <span className="block w-6 h-[2px] bg-white" />
            </div>
          </button>
        </div>

        {/* Mobile Dropdown */}
        {menuOpen && (
          <div className="md:hidden px-4 sm:px-6 pb-4">
            <ul className="flex flex-col gap-2 font-sans text-sm uppercase tracking-[0.2em] font-bold">
              <li>
                <Link
                  href={presentationHref}
                  onClick={() => setMenuOpen(false)}
                  className="block py-2 text-white hover:text-[#f34d4e]"
                >
                  Presentation
                </Link>
              </li>
              <li>
                <Link
                  href={caseStudiesHref}
                  onClick={() => setMenuOpen(false)}
                  className="block py-2 text-white hover:text-[#f6b530]"
                >
                  Case Studies
                </Link>
              </li>
              <li>
                <Link
                  href="/admin"
                  onClick={() => setMenuOpen(false)}
                  className="block py-2 text-white hover:text-[#b053bc]"
                >
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
