"use client";

export default function LoginBkgd() {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
      <div className="grid grid-cols-3 gap-5 h-full w-full">
        <img
          src="/blobs/Agency Blobs Graphic-02.png"
          className="w-full h-full object-cover"
        />
        <img
          src="/blobs/Agency Blobs Graphic-08.png"
          className="w-full h-full object-cover"
        />
        <img
          src="/blobs/Agency Blobs Graphic-09.png"
          className="w-full h-full object-cover"
        />
        <img
          src="/blobs/Agency Blobs Graphic-03.png"
          className="w-full h-full object-cover rotate-[32deg]"
        />
        <img
          src="/blobs/Agency Blobs Graphic-06.png"
          className="w-full h-full mt-7 object-cover"
        />
        <img
          src="/blobs/Agency Blobs Graphic-04.png"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}