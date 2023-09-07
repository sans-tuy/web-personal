import { BsWhatsapp, BsLinkedin, BsGithub, BsInstagram } from "react-icons/bs";
import { PiGitlabLogoFill } from "react-icons/pi";
import { FaHtml5, FaReact, FaNodeJs, FaCss3 } from "react-icons/fa";
import { TbBrandReactNative } from "react-icons/tb";
import {
  SiNextdotjs,
  SiJavascript,
  SiTypescript,
  SiTailwindcss,
  SiChakraui,
} from "react-icons/si";

export const navbarData = [
  { title: "About", href: "#about" },
  { title: "Skills", href: "#skills" },
  { title: "Educations", href: "#" },
  { title: "Experiences", href: "#" },
  { title: "Portofolio", href: "#" },
  { title: "Contact", href: "#" },
];

export const sosmed = [
  { icon: BsWhatsapp, colorFooter: "text-green-500", color: "green" },
  { icon: BsLinkedin, colorFooter: "text-blue-500", color: "blue" },
  { icon: BsGithub, colorFooter: "text-black", color: "black" },
  { icon: PiGitlabLogoFill, colorFooter: "text-red-500", color: "red" },
  { icon: BsInstagram, colorFooter: "text-red-500", color: "red" },
];

export const educations = [
  {
    title: "Binar Academy",
    level: "Mobile developer",
    year: "February - July 2022",
  },
  {
    title: 'Universitas Pembangunan Nasional "veteran" Jawa TImur',
    level: "S1 Informatic ",
    year: "2019 - 2023",
  },
];

export const works = [
  { title: "PT. Central AI", level: "Mobile Developer", year: "2022 - 2023" },
  {
    title: "PT. Aksamedia Mulia DIgital",
    level: "Front-end Developer",
    year: "2022 - 2023",
  },
];

export const skills = [
  { icon: FaHtml5, title: "HTML", level: "Advanced" },
  { icon: FaCss3, title: "CSS", level: "Advanced" },
  { icon: SiJavascript, title: "Javascript", level: "Intermediate" },
  { icon: SiTypescript, title: "Typescript", level: "Intermediate" },
  { icon: FaNodeJs, title: "Node JS", level: "basic" },
  { icon: FaReact, title: "React JS", level: "Intermediate" },
  { icon: TbBrandReactNative, title: "React Native", level: "Intermediate" },
  { icon: SiNextdotjs, title: "Next JS", level: "Basic" },
  { icon: SiTailwindcss, title: "Tailwind CSS", level: "Intermediate" },
  { icon: SiChakraui, title: "Chakra UI", level: "Intermediate" },
];

export const identity = {
  name: "Anwar Sanusi",
  jobs: ["Web Developer", "Front-End Developer", "Mobile Developer"],
  description:
    "I have expertise that focuses on React technology and its implementation in both mobile applications and websites. I have 6 months of internship experience as a React Native mobile developer at PT Central AI, and currently, I have been working as a web developer at PT Aksamedia since September until now.",
  profil_image: "/images/profil.jpeg",
};

export const me = {
  description: `Hi, I'm Anwar Sanusi, a passionate junior web developer with a strong foundation in front-end and back-end web development. My journey into the world of coding began when I realized the power of transforming creative ideas into functional websites and web applications. I thrive on problem-solving and enjoy the process of turning complex challenges into elegant solutions. I have experience with a variety of web technologies, including HTML, CSS, JavaScript, and popular libraries and frameworks like React and Node.js. I'm always eager to expand my skill set and stay up-to-date with the latest industry trends and best practices.`,
};
