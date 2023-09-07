import { sosmed } from "@/constants/data";
import { ThemeContext } from "@/context/ThemeContext";
import { useContext, Fragment } from "react";

export default function Footer() {
  const { theme } = useContext(ThemeContext);
  return (
    <footer
      className={`${
        theme === "light" ? "bg-cyan-700" : "bg-cyan-500"
      } flex h-60 flex-col items-center justify-around px-10 pt-10 transition-all duration-300 lg:px-20`}
    >
      <div className="flex w-full justify-around">
        {sosmed.map((val, idx) => {
          const { colorFooter, icon: Icon } = val;
          return (
            <Fragment key={`sosmed-${idx}`}>
              {idx !== 0 && (
                <span className="h-[120%] rotate-45 border border-white" />
              )}
              <div
                className={`flex items-center hover:${colorFooter} ${
                  theme === "light" ? "text-white" : "text-black"
                } gap-6`}
              >
                <Icon size={30} />
              </div>
            </Fragment>
          );
        })}
      </div>
      <span className={`${theme === "light" ? "text-white" : "text-black"}`}>
        &#169; created with love 😘 by anwar sanusi
      </span>
    </footer>
  );
}
