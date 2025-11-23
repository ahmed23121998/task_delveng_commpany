"use client";

import { SearchIcon } from "lucide-react";
import { Button } from "../../../../components/ui/button";
import { useState } from "react";

const navigationItems = [
  { label: "Home", active: false },
  { label: "Courses", active: true },
  { label: "About", active: false },
  { label: "Pricing", active: false },
  { label: "Careers", active: false },
];

export const NavigationSection = (): JSX.Element => {
  const [open, setOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <nav
      role="navigation"
      aria-label="Main navigation"
      className="fixed top-0 left-0 w-full z-50 bg-white shadow-sm border-b border-gray-200"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 md:px-6 h-20">
        <div className="flex items-center gap-4 md:gap-6">
          <img
            className="w-[110px] md:w-[130px] lg:w-[168px] h-[35px] md:h-[40px] lg:h-[50px] cursor-pointer"
            alt="Logo"
            src="/logo--2--3.png"
          />

          <div className="hidden md:flex w-[180px] md:w-[220px] lg:w-[300px]">
            <div className="relative w-full h-10 md:h-11 rounded-full overflow-hidden border border-gray-300 flex items-center">
              <SearchIcon className="w-4 h-4 md:w-5 md:h-5 text-gray-400 ml-4" />
              <input
                type="text"
                placeholder="What do you want learn..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-1 h-full px-3 md:px-4 bg-transparent text-sm md:text-base placeholder-gray-400 focus:outline-none"
              />
            </div>
          </div>
        </div>

        <div className="hidden lg:flex items-center gap-2">
          {navigationItems.map((item, index) => (
            <button
              key={index}
              aria-current={item.active ? "page" : undefined}
              className={`px-3 py-2 border-b-2 transition ${
                item.active
                  ? "border-[#ff7f24] text-primary-colorprimary"
                  : "border-transparent text-black-400 hover:text-black"
              }`}
            >
              <span className="font-semibold text-sm">{item.label}</span>
            </button>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <Button
            variant="outline"
            className="hidden md:flex px-4 lg:px-5 h-10 rounded-full border border-black"
          >
            <span className="font-semibold text-xs md:text-sm">Register</span>
          </Button>

          <Button className="px-4 lg:px-5 h-10 rounded-full bg-primary-colorprimary text-white text-xs md:text-sm">
            Join For Free
          </Button>

          <button
            className="lg:hidden flex flex-col gap-1.5 w-6 h-6 justify-center items-center"
            onClick={() => setOpen(!open)}
            aria-label="Toggle mobile menu"
          >
            <span
              className={`block w-6 h-0.5 bg-black transform transition duration-300 ${
                open ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-black transition duration-300 ${
                open ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-black transform transition duration-300 ${
                open ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>
        </div>
      </div>

      <div
        className={`fixed inset-0 z-50 flex ${
          open ? "pointer-events-auto" : "pointer-events-none"
        }`}
      >
        <div
          className={`fixed inset-0 bg-black/40 backdrop-blur-sm transition-opacity duration-300 ${
            open ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setOpen(false)}
        />

        <div
          className={`absolute left-0 top-0 h-full w-64 bg-white shadow-lg p-6 flex flex-col gap-6 transform transition-transform duration-300 ${
            open ? "translate-x-0" : "-translate-x-full"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <button
            className="self-end mb-4 text-xl font-bold"
            onClick={() => setOpen(false)}
            aria-label="Close menu"
          >
            ✕
          </button>

          {navigationItems.map((item, index) => (
            <button
              key={index}
              className={`text-lg font-semibold text-left ${
                item.active ? "text-primary-colorprimary" : "text-gray-700"
              }`}
            >
              {item.label}
            </button>
          ))}

          <div className="flex flex-col gap-3 mt-4">
            <Button
              variant="outline"
              className="w-full h-11 border border-black rounded-full"
            >
              Register
            </Button>
            <Button className="w-full h-11 bg-primary-colorprimary text-white rounded-full">
              Join For Free
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};
