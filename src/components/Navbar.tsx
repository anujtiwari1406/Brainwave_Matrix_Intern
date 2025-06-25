import { JSX } from "react";

export default function Navbar(): JSX.Element {
  return (
    <header className="sticky top-0 w-full bg-white px-4 md:px-10 flex justify-between items-center shadow-md z-50 backdrop-blur-md bg-opacity-80 h-20 animate-fadeInDown">
      <div className="font-bold text-2xl text-slate-900 hover:text-blue-500 transition duration-300 cursor-pointer">
        Intellinex
      </div>
      <nav className="hidden md:flex gap-8">
        {["Home", "Features", "How it Works", "Tech Stack"].map(
          (link, index) => (
            <a
              key={index}
              href={
                link === "Home"
                  ? "#"
                  : `#${link.toLowerCase().replace(/\s+/g, "")}`
              }
              className="relative group text-slate-900 hover:text-blue-500 transition duration-300"
            >
              {link}
              <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-blue-500 transition-all group-hover:w-full" />
            </a>
          )
        )}
      </nav>
      <div className="flex gap-2">
        <button className="px-4 py-2 border border-slate-900 rounded-md hover:bg-slate-900 hover:text-white transition duration-300 hover:scale-105">
          Login
        </button>
        <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700 transition duration-300 hover:scale-105 shadow-md">
          Sign Up
        </button>
      </div>
    </header>
  );
}
