import { ThemeContext } from "@/context/ThemeContext";
import About from "@/sections/About";
import Me from "@/sections/Me";
import Portofolio from "@/sections/Portofolio";
import Skill from "@/sections/Skill";
import { Inter } from "next/font/google";
import { useContext } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const { theme } = useContext(ThemeContext);

  return (
    <div
      className={`flex flex-col justify-between gap-y-32 bg-[#ffff] px-1 py-8 lg:px-20 ${
        inter.className
      } ${
        theme === "light"
          ? "bg-white text-black drop-shadow-2xl"
          : "bg-slate-900 text-white drop-shadow-2xl"
      } transition-all duration-300`}
    >
      <About />
      <Me />
      <Skill />
      <Portofolio />
    </div>
  );
}
