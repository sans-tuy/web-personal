import { navbarData } from "@/constants/data";
import { ThemeContext } from "@/context/ThemeContext";
import { motion } from "framer-motion";
import Link from "next/link";
import { useContext, useRef, useState } from "react";

export default function Header() {
  const { handleToggleTheme, theme } = useContext(ThemeContext);
  const [activeNav, setActiveNav] = useState("About");
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const handleDivClick = () => {
    // Trigger the button click when the parent div is clicked
    if (buttonRef.current) {
      buttonRef.current.click();
    }
  };
  return (
    <motion.header
      className={`${
        theme === "light"
          ? "bg-white drop-shadow-2xl text-black"
          : "bg-slate-900 text-white drop-shadow-2xl"
      } px-8 py-6 sticky top-[0px] z-[100]  w-screen`}
    >
      <nav className="flex justify-between top-0">
        <a href="sa">Anwar Sanusi</a>
        <div className="flex gap-8">
          {navbarData.map((val, idx) => (
            <Link
              href={val.href}
              key={`list-nav-${idx}`}
              className={`border-b-2 p-0 m-0 h-[30px] ${
                activeNav === val.title
                  ? "border-cyan-500"
                  : "border-transparent"
              }`}
              onClick={() => setActiveNav(val.title)}
            >
              {val.title}
            </Link>
          ))}
        </div>
        <div
          className={`flex ${
            theme === "dark"
              ? "bg-slate-800 border-slate-700"
              : "white border-slate-100"
          } p-4 rounded-full w-16 h-16 justify-center border-solid border  `}
          role="button" // Indicate that the div is a button-like element
          tabIndex={0}
          onClick={handleDivClick}
        >
          <button ref={buttonRef} onClick={handleToggleTheme}>
            {theme}
          </button>
        </div>
      </nav>
    </motion.header>
  );
}
