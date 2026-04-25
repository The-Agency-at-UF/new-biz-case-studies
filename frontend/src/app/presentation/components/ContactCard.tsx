// to be built out
// by me hehe ;)

"use client";

import { useState, useEffect } from "react";
import { ChevronDown } from "lucide-react";

export default function ContactCard() {
  const [name, setName] = useState("");
  const [organization, setOrganization] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [type, setType] = useState("");

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    if (success) {
      const timer = setTimeout(() => {
        setSuccess(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [success]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
        const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          organization,
          email,
          role,
          type,
        }),
      });

      if (!res.ok) throw new Error("Failed");

      setSuccess(true);

      setName("");
      setOrganization("");
      setEmail("");
      setRole("");
      setType("");
    } catch (err) {
      console.error(err);
      alert("Something went wrong.");
    }

    setLoading(false);
  };

  return (
    <div className="flex items-center justify-center">

      {/* Sucess Toast */}
      {success && (
        <div className="
          fixed top-6 left-1/2 -translate-x-1/2
          bg-black text-white text-sm
          px-6 py-3 rounded-full
          shadow-lg z-[9999]
          opacity-100
        ">
          Submitted successfully!
        </div>
      )}

      {/* Card */}
      <div className="w-[360px] rounded-[28px] bg-[#f3f3f3] p-6 shadow-xl">

        {/* Title */}
        <h2 className="text-[18px] font-medium text-black mb-6 text-center">
          Your Brand. Our Expertise.
        </h2>

        {/* Form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">

          {/* Name */}
          <div>
            <label className="text-xs text-gray-600 block mb-1">Name</label>
            <input
              type="text"
              placeholder="Your Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full bg-transparent border-b border-gray-400 focus:outline-none focus:border-black text-sm py-1"
            />
          </div>

          {/* Organization */}
          <div>
            <label className="text-xs text-gray-600 block mb-1">Organization</label>
            <input
              type="text"
              placeholder="Your Company Name"
              value={organization}
              onChange={(e) => setOrganization(e.target.value)}
              className="w-full bg-transparent border-b border-gray-400 focus:outline-none focus:border-black text-sm py-1"
            />
          </div>

          {/* Email */}
          <div>
            <label className="text-xs text-gray-600 block mb-1">Email</label>
            <input
              type="email"
              placeholder="Your Work Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-transparent border-b border-gray-400 focus:outline-none focus:border-black text-sm py-1"
            />
          </div>

          {/* Role */}
          <div className="relative">
            <label className="text-xs text-gray-600 block mb-1">Role</label>
            <select
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="w-full appearance-none bg-transparent border-b border-gray-400 focus:outline-none focus:border-black text-sm py-1 pr-6"
            >
              <option value="">Select One</option>
              <option>Founder</option>
              <option>Manager</option>
              <option>Designer</option>
            </select>
            <ChevronDown className="absolute right-0 bottom-2 text-gray-500" size={16} />
          </div>

          {/* Type */}
          <div className="relative">
            <label className="text-xs text-gray-600 block mb-1">Type</label>
            <select
              value={type}
              onChange={(e) => setType(e.target.value)}
              className="w-full appearance-none bg-transparent border-b border-gray-400 focus:outline-none focus:border-black text-sm py-1 pr-6"
            >
              <option value="">Select Organization Type</option>
              <option>Startup</option>
              <option>Enterprise</option>
              <option>Agency</option>
            </select>
            <ChevronDown className="absolute right-0 bottom-2 text-gray-500" size={16} />
          </div>

          {/* Button */}
          <div className="flex justify-center mt-4">
            <button
              type="submit"
              disabled={loading}
              className="bg-black text-white text-xs px-5 py-2 rounded-full hover:bg-gray-800 transition disabled:opacity-50"
            >
              {loading ? "Sending..." : "Contact Us"}
            </button>
          </div>

        </form>
      </div>
    </div>
  );
}