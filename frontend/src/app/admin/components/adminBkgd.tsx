"use client";

export default function AdminBkgd() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      {/* Base color */}
      <div className="absolute inset-0 bg-[#0F1337]" />

      {/* Blob image overlay */}
      <img
        src="/assets/Admin/Blobs.png"
        alt="background blobs"
        className="
          absolute
          inset-0
          w-full
          h-full
          object-cover
          opacity-70
          pointer-events-none
          select-none
        "
      />
    </div>
  );
}