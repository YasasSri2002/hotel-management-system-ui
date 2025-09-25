"use client"; // only if in Next.js App Router

import { useState } from "react";

export default function DropdownMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("Guests"); // default label

  const handleSelect = (value: string) => {
    setSelected(value); // update button label
    setIsOpen(false);   // close dropdown
  };

  return (
    <div className="relative inline-block text-left w-[180px]">
      {/* Trigger button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="inline-flex justify-between w-full rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-100 focus:outline-none "
      >
        {selected}
        <svg
          className="ml-2 -mr-1 h-5 w-5 text-gray-500"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 20 20"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8l5 5 5-5" />
        </svg>
      </button>

      {/* Dropdown menu */}
      <div
        className={`absolute right-0 mt-2 w-[180px] origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transform transition ease-out duration-200 ${
          isOpen ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"
        }`}
      >
        <div className="py-1">
          {["1 Guest", "2 Guests", "3 Guests", "4 Guests", "5+ Guests"].map((option) => (
            <button
              key={option}
              onClick={() => handleSelect(option)}
              className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              {option}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
