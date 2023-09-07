import SectionWrapper from "@/components/layouts/SectionWrapper";
import { identity } from "@/constants/data";
import { ThemeContext } from "@/context/ThemeContext";
import { slideInTransition, staggerContainer } from "@/motion/motion";
import { motion } from "framer-motion";
import Image from "next/image";
import { useContext } from "react";

export default function Portofolio() {
  const { theme } = useContext(ThemeContext);
  const { profil_image } = identity;
  return (
    <SectionWrapper>
      <section className=" mt-8 lg:mt-10" id="skills">
        <motion.div
          variants={staggerContainer(0.1, 0.1)}
          viewport={{ once: true, amount: 0.25 }}
          whileInView="show"
          initial="hidden"
          className="col-span-2 mt-[7rem] lg:mt-0"
        >
          <motion.div
            variants={slideInTransition("up", "tween", 0.3, 1.5)}
            className="absolute left-[10%] top-20 mx-auto bg-gradient-to-t from-transparent to-cyan-200  bg-clip-text text-7xl font-extrabold text-transparent opacity-60 lg:left-[35%] lg:top-0"
          >
            Portofolio
          </motion.div>
          <motion.h1
            variants={slideInTransition("up", "tween", 0.5, 1.8)}
            className="absolute bottom-0 left-[20%] top-[7rem] mx-auto text-5xl font-extrabold text-cyan-300 lg:left-[40%] lg:top-8 "
          >
            Portofolio
          </motion.h1>
        </motion.div>
        <div className=" grid grid-cols-1 items-center lg:grid-cols-4">
          <div
            className={`${
              theme === "light" ? "bg-white text-black" : "bg-gray-800"
            }  grid grid-cols-1 gap-4 rounded-2xl p-2 shadow-md transition-all duration-300 hover:scale-105 hover:shadow-slate-600/40 lg:grid-cols-2 lg:p-8`}
          >
            <Image
              alt="foto profil"
              className="rounded-3xl border object-cover"
              src={profil_image}
              width={450}
              height={450}
            />
          </div>
        </div>
      </section>
    </SectionWrapper>
  );
}
