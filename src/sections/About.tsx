import SectionWrapper from "@/components/layouts/SectionWrapper";
import Button from "@/components/reusable/Button";
import { identity } from "@/constants/data";
import { ThemeContext } from "@/context/ThemeContext";
import { slideInTransition } from "@/motion/motion";
import { motion } from "framer-motion";
import Image from "next/image";
import { useContext } from "react";
import { BsArrowDownCircle, BsWhatsapp } from "react-icons/bs";
import Typewriter from "typewriter-effect";

export default function About() {
  const { theme } = useContext(ThemeContext);
  const { jobs, name, profil_image, description } = identity;
  return (
    <SectionWrapper>
      <motion.section
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className=" grid lg:grid-cols-2 grid-cols-1 mt-20 transition-all duration-300"
        id="about"
      >
        <div className="flex flex-col flex-wrap lg:gap-6 gap-2 lg:max-w-[600px]">
          <motion.div
            variants={slideInTransition("up", "tween", 1.3, 2)}
            className={`text-base font-semibold ${
              theme === "light" ? "text-neutral-500" : "text-neutral-400"
            } text-center lg:text-start`}
          >
            Hello Iam
          </motion.div>
          <motion.div
            variants={slideInTransition("up", "tween", 1.4, 2)}
            className="text-cyan-500 font-bold text-5xl lg:text-7xl text-center lg:text-start lg:uppercase"
          >
            {name}
          </motion.div>
          <motion.div
            variants={slideInTransition("up", "tween", 1.6, 2)}
            className="font-semibold text-center lg:text-start text-2xl "
          >
            <Typewriter
              options={{ strings: jobs, autoStart: true, loop: true }}
            />
          </motion.div>
          <motion.p
            variants={slideInTransition("up", "tween", 1.7, 2.1)}
            className="text-neutral-500 p-8 lg:p-0 text-center lg:text-start"
          >
            {description}
          </motion.p>
          <Button title="Text Me" Icon={BsWhatsapp} />
        </div>
        <motion.div
          variants={slideInTransition("right", "tween", 0.8, 1.3)}
          className="w-full flex items-center justify-center h-full p-8 lg:p-0"
        >
          <Image
            alt="foto profil"
            className="rounded-3xl border object-cover"
            src={profil_image}
            width={450}
            height={450}
          />
        </motion.div>
        <motion.div
          variants={slideInTransition("down", "tween", 2, 2.5)}
          className="animate-bounce lg:col-span-2 mt-8 flex items-center gap-4 mx-auto font-semibold text-2xl"
        >
          scroll down <BsArrowDownCircle />
        </motion.div>
      </motion.section>
    </SectionWrapper>
  );
}
