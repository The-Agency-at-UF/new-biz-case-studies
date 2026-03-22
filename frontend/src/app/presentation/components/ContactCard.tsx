// to be built out
// by me hehe ;)

"use client";

import { ChevronDown } from "lucide-react";

export default function ContactCard() {
  return (
    <div className="w-full h-screen flex items-center justify-center bg-black">
      <div
        className="
          w-[360px]
          rounded-[28px]
          bg-[#f3f3f3]
          p-6
          shadow-xl
        "
      >
        {/* Title */}
        <h2 className="text-[18px] font-medium text-black mb-6 text-center">
          Your Brand. Our Expertise.
        </h2>

        {/* Form */}
        <form className="flex flex-col gap-5">
          
          {/* Name */}
          <div>
            <label className="text-xs text-gray-600 block mb-1">
              Name
            </label>
            <input
              type="text"
              placeholder="Your Full Name"
              className="w-full bg-transparent border-b border-gray-400 focus:outline-none focus:border-black text-sm py-1"
            />
          </div>

          {/* Email */}
          <div>
            <label className="text-xs text-gray-600 block mb-1">
              Email
            </label>
            <input
              type="email"
              placeholder="Your Work Email"
              className="w-full bg-transparent border-b border-gray-400 focus:outline-none focus:border-black text-sm py-1"
            />
          </div>

          {/* Role Dropdown */}
          <div className="relative">
            <label className="text-xs text-gray-600 block mb-1">
              Role
            </label>
            <select
              className="
                w-full
                appearance-none
                bg-transparent
                border-b border-gray-400
                focus:outline-none focus:border-black
                text-sm py-1 pr-6
              "
            >
              <option>Select One</option>
              <option>Founder</option>
              <option>Manager</option>
              <option>Designer</option>
            </select>

            <ChevronDown
              size={16}
              className="absolute right-0 bottom-2 text-gray-500 pointer-events-none"
            />
          </div>

          {/* Type Dropdown */}
          <div className="relative">
            <label className="text-xs text-gray-600 block mb-1">
              Type
            </label>
            <select
              className="
                w-full
                appearance-none
                bg-transparent
                border-b border-gray-400
                focus:outline-none focus:border-black
                text-sm py-1 pr-6
              "
            >
              <option>Select Organization Type</option>
              <option>Startup</option>
              <option>Enterprise</option>
              <option>Agency</option>
            </select>

            <ChevronDown
              size={16}
              className="absolute right-0 bottom-2 text-gray-500 pointer-events-none"
            />
          </div>

          {/* Button */}
          <div className="flex justify-center mt-4">
            <button
              type="submit"
              className="
                bg-black text-white text-xs
                px-5 py-2 rounded-full
                hover:bg-gray-800 transition
              "
            >
              Contact Us
            </button>
          </div>

        </form>
      </div>
    </div>
  );
}