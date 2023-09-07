import { sosmed } from "@/constants/data";
import { ThemeContext } from "@/context/ThemeContext";
import { motion } from "framer-motion";
import { PropsWithChildren, useContext } from "react";

export default function SectionWrapper(MainSection: PropsWithChildren) {
  const { children } = MainSection;

  const { theme } = useContext(ThemeContext);

  return (
    <div className="relative transition-all duration-300 lg:p-4">
      <div className="absolute -left-14 bottom-0 hidden flex-col gap-4 lg:flex">
        {sosmed.map((val, idx) => (
          <motion.div
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 1.1 }}
            className={`${
              theme === "light" ? "bg-white" : "bg-slate-600"
            } rounded-full p-2 shadow-md `}
            key={idx}
          >
            <val.icon color={val.color} />
          </motion.div>
        ))}
      </div>
      <div>{children}</div>
    </div>
  );
}
