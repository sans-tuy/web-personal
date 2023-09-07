import SectionWrapper from "@/components/layouts/SectionWrapper";
import { educations, skills, works } from "@/constants/data";
import { ThemeContext } from "@/context/ThemeContext";
import { slideInTransition, staggerContainer } from "@/motion/motion";
import { motion } from "framer-motion";
import { IoSchool } from "react-icons/io5";
import { MdWorkHistory } from "react-icons/md";
import { useContext } from "react";

export default function Skill() {
  const { theme } = useContext(ThemeContext);
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
            Expertise
          </motion.div>
          <motion.h1
            variants={slideInTransition("up", "tween", 0.5, 1.8)}
            className="absolute bottom-0 left-[20%] top-[7rem] mx-auto text-5xl font-extrabold text-cyan-300 lg:left-[40%] lg:top-8 "
          >
            Expertise
          </motion.h1>
        </motion.div>
        <div className=" grid grid-cols-1 items-center lg:grid-cols-3">
          <div className="order-1 col-span-1 mt-20 px-10 lg:order-first lg:col-span-2 lg:max-w-[1000px] ">
            <div
              className={`${
                theme === "light" ? "bg-white text-black" : "bg-gray-800"
              }  grid grid-cols-2 gap-4 rounded-2xl p-2 shadow-md transition-all duration-300 hover:scale-105 hover:shadow-slate-600/40 lg:grid-cols-4 lg:p-8`}
            >
              {skills.map(({ icon: Icon, level, title }, idx) => (
                <div
                  key={`list-skill-${idx}`}
                  className="group flex cursor-pointer flex-col items-center justify-center gap-2 "
                >
                  <div
                    className={`${
                      theme === "light" ? "white" : "bg-slate-700"
                    } z-[2] flex items-center justify-center rounded-full p-4 shadow-md transition-all duration-300 group-hover:-translate-y-2`}
                  >
                    <Icon
                      size={30}
                      className={`${
                        theme === "light" ? "text-cyan-500" : "text-cyan-400"
                      }`}
                    />
                  </div>
                  <span className="font-bold ">{title}</span>
                  <span className="text-neutral-500">{level}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-[10vh] px-10 ">
            <motion.div
              variants={slideInTransition("up", "tween", 1.2, 2)}
              className="flex flex-col items-center justify-center text-2xl font-bold lg:items-end lg:text-3xl"
            >
              <p
                className={`${
                  theme === "light" ? "text-cyan-600" : "text-cyan-400"
                } `}
              >
                Skills & Tech
              </p>
              <p
                className={`${
                  theme === "light" ? "text-cyan-600" : "text-cyan-400"
                } `}
              >
                Stack
              </p>
            </motion.div>
            <motion.p
              variants={slideInTransition("up", "tween", 1.2, 2)}
              className={`${
                theme === "light" ? "text-neutral-500" : "text-neutral-300"
              } mt-2 text-center lg:text-end`}
            >
              There is some skills and tech stack that i have learned and
              experience
            </motion.p>
          </div>
        </div>
        <div className=" grid grid-cols-1 lg:grid-cols-3">
          <div className="order-2 col-span-1 mt-20 px-10 lg:order-last lg:col-span-2 ">
            <div
              className={`${
                theme === "light" ? "bg-white text-black" : "bg-gray-800"
              }  grid grid-cols-1 gap-4 rounded-2xl p-2 shadow-md transition-all duration-300 hover:scale-105 hover:shadow-slate-600/40 lg:grid-cols-2 lg:p-8`}
            >
              <div className="flex flex-col items-center gap-8 lg:items-start">
                <div className="flex w-fit cursor-pointer items-center gap-2 rounded-lg bg-cyan-600 p-2 text-white transition-all duration-300 hover:-translate-y-2">
                  <IoSchool className="text-sm" />
                  <h3 className="font-bold ">Educations</h3>
                </div>
                <div className="flex flex-col gap-6 text-center lg:text-start">
                  {educations.map((val, idx) => (
                    <div
                      className="flex flex-col gap-2"
                      key={`list-education-${idx}`}
                    >
                      <p className="text-base font-semibold">{val.title}</p>
                      <p>{val.level}</p>
                      <p className=" text-neutral-400">{val.year}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex flex-col items-center gap-8 lg:items-start">
                <div className="flex w-fit cursor-pointer items-center gap-2 rounded-lg bg-cyan-600 p-2 text-white transition-all duration-300 hover:-translate-y-2">
                  <MdWorkHistory className="text-md" />
                  <h3 className="font-bold ">Works / interns</h3>
                </div>
                <div className="flex flex-col gap-6 text-center lg:text-start">
                  {works.map((val, idx) => (
                    <div
                      className="flex flex-col gap-2"
                      key={`list-education-${idx}`}
                    >
                      <p className="text-base font-semibold">{val.title}</p>
                      <p>{val.level}</p>
                      <p className=" text-neutral-400">{val.year}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="mt-[10vh] flex flex-col justify-center px-10 ">
            <motion.div
              variants={slideInTransition("up", "tween", 1.2, 2)}
              className="flex flex-col items-center justify-center text-2xl font-bold lg:items-start lg:text-3xl"
            >
              <p
                className={`${
                  theme === "light" ? "text-cyan-600" : "text-cyan-400"
                } `}
              >
                Works & Interns
              </p>
              <p
                className={`${
                  theme === "light" ? "text-cyan-600" : "text-cyan-400"
                } `}
              >
                Educations
              </p>
            </motion.div>
            <motion.p
              variants={slideInTransition("up", "tween", 1.2, 2)}
              className={`${
                theme === "light" ? "text-neutral-500" : "text-neutral-300"
              } mt-2 text-center lg:text-start`}
            >
              There is some formal education i have reached and some work and
              intern experience
            </motion.p>
          </div>
        </div>
      </section>
    </SectionWrapper>
  );
}
