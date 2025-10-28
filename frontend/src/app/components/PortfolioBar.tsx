import Link from "next/link";

export default function PortfolioBar() {
  return (
    <nav
      className="
        fixed top-0 left-0 w-full z-50
        bg-[var(--background)] text-[var(--foreground)]
        shadow-md border-b border-gray-200 dark:border-gray-800
      "
    >
      {/* Full-width container */}
      <div className="flex justify-between items-center px-10 py-3">
        {/* Left side (title) */}
        <h1 className="text-2xl font-bold">The Agency Case Studies</h1>
        
        {/* Right side (navigation) */}
        {/* Use Link for other nav links once pages are added. Provides faster navigation for internal routes */}
        <ul className="flex space-x-8 text-[var(--foreground)]">
          <li>
            <Link href="/" className="hover:text-[#f34d4e] transition-colors">
              Home
            </Link>
          </li>
          <li>
            <a href="#projects" className="hover:text-[#b053bc] transition-colors">
              About
            </a>
          </li>
          <li>
            <Link href="/portfolio" className="hover:text-[#f6b530] transition-colors">
              Case Studies
            </Link>
          </li>
          <li>
            <a href="#contact" className="hover:text-[#f34d4e] transition-colors">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
