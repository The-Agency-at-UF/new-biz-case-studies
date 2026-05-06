"use client";

import { useRouter } from "next/navigation";

export default function BackButton() {
  const router = useRouter();

  return (
    <button
      type="button"
      onClick={() => router.back()}
      className="
        fixed bottom-[2rem] right-[2rem] z-[1000]
        rounded-full px-6 py-3
        bg-gradient-to-r from-[#f34d4e] via-[#f6b530] to-[#b053bc]
        text-white text-lg font-bold uppercase tracking-widest
        shadow-[0_0_20px_rgba(246,181,48,0.45)]
        hover:shadow-[0_0_28px_rgba(176,83,188,0.65)]
        hover:scale-105 active:scale-95
        transition-all duration-200
        "
    >
      Presentation
    </button>
  );
}