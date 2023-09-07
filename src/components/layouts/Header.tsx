import { navbarData } from "@/constants/data";
import { ThemeContext } from "@/context/ThemeContext";
import { slideInTransition, staggerContainer } from "@/motion/motion";
import { motion } from "framer-motion";
import Link from "next/link";
import { useContext, useEffect, useRef, useState } from "react";
import { BsMoon } from "react-icons/bs";
import { CiSun } from "react-icons/ci";
import { RxHamburgerMenu } from "react-icons/rx";
import MobileNavbar from "../reusable/Modal";

export default function Header() {
  const { handleToggleTheme, theme } = useContext(ThemeContext);
  const [activeNav, setActiveNav] = useState("About");
  const [isScroll, setIsScroll] = useState(false);
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const handleDivClick = () => {
    // Trigger the button click when the parent div is clicked
    if (buttonRef.current) {
      buttonRef.current.click();
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 30) setIsScroll(true);
      else setIsScroll(false);
    });
  }, []);

  const handleCLoseModal = () => {
    setIsOpenModal(false);
  };

  return (
    <motion.header
      variants={staggerContainer(0.1, 0.1)}
      viewport={{ once: true, amount: 0.25 }}
      whileInView="show"
      initial="hidden"
      className={`${
        theme === "light"
          ? `${
              isScroll && "shadow-lg lg:bg-glassmorph bg-white"
            } bg-white text-black`
          : ` bg-slate-900 md:shadow-none text-white ${
              isScroll &&
              "lg:bg-glassmorph bg-slate-900 shadow-sm shadow-gray-800 "
            }`
      } lg:px-20 px-0 py-4 h-[80px] backdrop-blur-md backdrop-filter fixed top-[0px] z-[100] w-screen transition-all duration-300`}
    >
      <motion.nav
        variants={slideInTransition("down", "tween", 0.1, 0.7)}
        className="flex justify-between items-center px-4"
      >
        <span>
          <Link
            href="#About"
            className={`${
              theme === "light" ? "text-cyan-600" : "text-cyan-500 "
            } font-semibold  text-lg lg:text-[1.75rem]`}
          >
            Anwar Sanusi
          </Link>
        </span>
        <div className="md:flex gap-8 hidden">
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

        <motion.div
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 1.1 }}
          className={`md:flex hidden ${
            theme === "dark"
              ? "bg-slate-700 border-slate-700"
              : "white border-slate-100 shadow-md"
          } rounded-full p-4 justify-center border-solid border  `}
          role="button" // Indicate that the div is a button-like element
          tabIndex={0}
          onClick={handleDivClick}
        >
          <button ref={buttonRef} onClick={handleToggleTheme}>
            {theme === "light" ? <BsMoon size="20px" /> : <CiSun size="20px" />}
          </button>
        </motion.div>

        {isOpenModal && <MobileNavbar close={handleCLoseModal} />}

        <button
          className="p-2 bg-cyan-600 rounded-md sm:hidden"
          onClick={() => setIsOpenModal(true)}
        >
          <RxHamburgerMenu color="white" />
        </button>
      </motion.nav>
    </motion.header>
  );
}
