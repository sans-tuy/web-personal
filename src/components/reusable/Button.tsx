import { ThemeContext } from "@/context/ThemeContext";
import { zoomOutTransition } from "@/motion/motion";
import { motion } from "framer-motion";
import { useContext } from "react";
import { IconType } from "react-icons";

interface Props {
  title: string;
  Icon: IconType;
  delay?: number;
  duration?: number;
  iconSize?: number;
}

export default function Button(props: Props) {
  const { theme } = useContext(ThemeContext);
  const { Icon, iconSize = 15, title, delay = 1.7, duration = 2.1 } = props;
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      variants={zoomOutTransition("tween", delay, duration)}
    >
      <motion.button
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 1.1 }}
        className={`flex border ${
          theme === "light" ? "text-cyan-500" : "text-cyan-300"
        } border-cyan-400 lg:w-auto lg:px-5 w-[80%] mx-auto lg:mx-0 items-center justify-center gap-2 py-3 rounded-md mb-8 lg:mb-0`}
      >
        <Icon size={iconSize} />
        {title}
      </motion.button>
    </motion.div>
  );
}
