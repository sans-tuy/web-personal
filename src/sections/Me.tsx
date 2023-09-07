import SectionWrapper from "@/components/layouts/SectionWrapper";
import Button from "@/components/reusable/Button";
import { identity, me } from "@/constants/data";
import { ThemeContext } from "@/context/ThemeContext";
import { cardVariants, slideInTransition } from "@/motion/motion";
import { motion } from "framer-motion";
import Image from "next/image";
import { useContext } from "react";
import { HiOutlineDownload } from "react-icons/hi";

export default function Me() {
  const { theme } = useContext(ThemeContext);
  const { profil_image } = identity;
  const { description } = me;
  return (
    <SectionWrapper>
      <motion.section
        viewport={{ once: true }}
        initial="hidden"
        whileInView="show"
        className=" mt-8 lg:mt-10 transition-all duration-300"
        id="about"
      >
        <motion.div className="mt-[7rem] lg:mt-0 col-span-2">
          <motion.div
            variants={slideInTransition("up", "tween", 0.3, 1.5)}
            className="absolute top-20 lg:top-0 opacity-60 left-[10%] lg:left-[35%] mx-auto  bg-clip-text font-extrabold text-7xl bg-gradient-to-t from-transparent to-cyan-200 text-transparent"
          >
            About Me
          </motion.div>
          <motion.h1
            variants={slideInTransition("up", "tween", 0.5, 1.8)}
            className="absolute top-[7rem] lg:top-8 text-cyan-300 bottom-0 left-[20%] lg:left-[40%] mx-auto font-extrabold text-5xl "
          >
            About Me
          </motion.h1>
        </motion.div>
        <motion.div className=" grid lg:grid-cols-2 grid-cols-1 w-full">
          <motion.div className="flex flex-col h-[500px] flex-wrap lg:gap-6 gap-2 lg:max-w-[600px] overflow-y-hidden justify-end ">
            <motion.div
              className={`${
                theme === "light" ? "bg-cyan-600" : "bg-cyan-500"
              }  h-[20%]  flex items-center justify-center lg:h-[35%] rounded-2xl relative bottom-50`}
            >
              <motion.div
                className="absolute bottom-10 rotate-180 bg-white drop-shadow-md border w-[300px] h-[300px] lg:w-[400px] lg:h-[400px] rounded-xl flex items-center justify-center "
                variants={cardVariants}
              >
                <Image
                  src={profil_image}
                  alt="profil-image"
                  width={400}
                  height={400}
                  sizes="400px"
                  className="rounded-xl lg:w-[380px] lg:h-[380px]"
                />
              </motion.div>
            </motion.div>
          </motion.div>
          <motion.div className="mt-[10vh] px-10">
            <motion.div
              variants={slideInTransition("up", "tween", 1.2, 2)}
              className="flex lg:text-3xl text-2xl font-bold lg:justify-start justify-center"
            >
              <p>Hello Iam &nbsp;</p>
              <p
                className={`${
                  theme === "light" ? "text-cyan-600" : "text-cyan-400"
                } `}
              >
                Anwar Sanusi
              </p>
            </motion.div>
            <motion.div
              variants={slideInTransition("up", "tween", 1.2, 2)}
              className="flex lg:text-2xl text-lg lg:justify-start justify-center mt-2 font-semibold"
            >
              <p>as Front-End Developer In &nbsp;</p>
              <p
                className={`${
                  theme === "light" ? "text-cyan-600" : "text-cyan-500"
                } `}
              >
                {" "}
                Indonesia
              </p>
            </motion.div>
            <motion.div
              variants={slideInTransition("up", "tween", 1.4, 2.2)}
              className="mt-5 text-neutral-400 divide-y divide-dashed font-medium lg:text-start text-center"
            >
              {description}
            </motion.div>
            <div className="border border-neutral-300 mt-4" />
            <motion.div className="flex justify-between mt-2">
              <div className="flex flex-col items-center">
                <p
                  className={`${
                    theme === "light" ? "text-cyan-600" : "text-cyan-400"
                  } font-bold text-2xl `}
                >
                  1+
                </p>
                <p className="lg:text-start text-center">
                  work years experience
                </p>
              </div>
              <div className="flex flex-col items-center">
                <p
                  className={`${
                    theme === "light" ? "text-cyan-600" : "text-cyan-400"
                  } font-bold text-2xl `}
                >
                  3+
                </p>
                <p className="lg:text-start text-center">
                  programming language used
                </p>
              </div>
              <div className="flex flex-col items-center">
                <p
                  className={`${
                    theme === "light" ? "text-cyan-600" : "text-cyan-400"
                  } font-bold text-2xl `}
                >
                  2+
                </p>
                <p className="lg:text-start text-center">
                  success work project
                </p>
              </div>
            </motion.div>
            <div className="lg:mt-3 mt-5">
              <Button
                Icon={HiOutlineDownload}
                title="Download CV"
                delay={0.3}
                duration={1}
                iconSize={20}
              />
            </div>
          </motion.div>
        </motion.div>
      </motion.section>
    </SectionWrapper>
  );
}
