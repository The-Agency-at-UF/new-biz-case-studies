// component coming soon
// component has arrived ;)
"use client";

import Link from "next/link";

const MailIcon = () => (
  <svg width="22" height="16" viewBox="0 0 22 16" fill="none">
    <rect x="1" y="1" width="20" height="14" rx="1.5" stroke="white" strokeWidth="1.8" />
    <path d="M1.5 2L11 9.5L20.5 2" stroke="white" strokeWidth="1.8" strokeLinecap="round" />
  </svg>
);

const InstagramIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
    <rect x="1" y="1" width="18" height="18" rx="5" stroke="white" strokeWidth="1.8" />
    <circle cx="10" cy="10" r="4" stroke="white" strokeWidth="1.8" />
    <circle cx="15" cy="5" r="1.2" fill="white" />
  </svg>
);

const XIcon = () => (
  <svg width="19" height="18" viewBox="0 0 19 18" fill="none">
    <path d="M1 1L18 17M18 1L1 17" stroke="white" strokeWidth="1.8" strokeLinecap="round" />
  </svg>
);

const LinkedInIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
    <rect x="1" y="1" width="18" height="18" rx="3" stroke="white" strokeWidth="1.8" />
    <path d="M5 8V15M5 5.5V5.6" stroke="white" strokeWidth="1.8" strokeLinecap="round" />
    <path d="M9 15V11C9 9.3 10.3 8 12 8C13.6 8 15 9.3 15 11V15" stroke="white" strokeWidth="1.8" strokeLinecap="round" />
  </svg>
);

type Props = {
  phone?: string;
  email?: string;
};

export default function AgencyFooter({
  phone = "(352) 294-3848",
  email = "theagency@jou.ufl.edu",
}: Props) {
  return (
    <footer className="w-full bg-[#12121a] text-white mt-20">
      
      {/* Gradient Bar */}
      <div className="h-[4px] w-full bg-gradient-to-r from-orange-500 via-pink-500 via-purple-500 to-indigo-500" />

      {/* Content */}
      <div className="w-full px-4 sm:px-6 lg:px-12 py-10 flex flex-col md:flex-row items-center md:items-start justify-between gap-10">

        {/* LEFT */}
        <div className="flex flex-col gap-2 text-center md:text-left">
          <span className="text-sm">{phone}</span>
          <a
            href={`mailto:${email}`}
            className="text-sm underline hover:opacity-70 transition"
          >
            {email}
          </a>
        </div>

        {/* CENTER */}
        <div className="flex flex-col items-center gap-6">
          
          {/* Icons */}
          <div className="flex gap-6">
            <a href={`mailto:${email}`} className="hover:-translate-y-1 transition">
              <MailIcon />
            </a>
            <a href="https://www.instagram.com/theagencyatuf/" className="hover:-translate-y-1 transition">
              <InstagramIcon />
            </a>
            <a href="https://x.com/theagencyatuf" className="hover:-translate-y-1 transition">
              <XIcon />
            </a>
            <a href="https://www.linkedin.com/company/the-agency-at-uf/" className="hover:-translate-y-1 transition">
              <LinkedInIcon />
            </a>
          </div>

          {/* CTA */}
          <div className="p-[2px] rounded-full bg-gradient-to-r from-orange-500 via-pink-500 via-purple-500 to-indigo-500">
            <Link
              href="#"
              className="block px-6 py-2 text-xs font-bold uppercase tracking-widest bg-[#12121a] rounded-full hover:bg-transparent hover:text-white transition"
            >
              Contact Us
            </Link>
          </div>
        </div>

        {/* RIGHT */}
        <div className="flex flex-col gap-1 text-center md:text-right text-sm">
          <span>University of Florida</span>
          <span>1000 Weimer Hall</span>
          <span>Gainesville, Florida 32611</span>
        </div>
      </div>
    </footer>
  );
}