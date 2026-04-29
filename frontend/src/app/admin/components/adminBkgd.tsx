"use client";

export default function AdminBkgd() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Base color */}
      <div className="absolute inset-0 bg-[#0F1337]" />

      {/* Blob image overlay */}
      <img
        src="/assets/admin/Blobs.png"
        alt=""
        aria-hidden="true"
        className="
          absolute
          inset-0
          h-full
          w-full
          object-cover
          object-center
          opacity-70
          pointer-events-none
          select-none
        "
      />
    </div>
  );
}