import {
  NavLinksType,
  SkillsLogoType,
  SocialLinksType,
} from "@/app/types/constantsTypes";
import { FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FiGithub, FiLinkedin } from "react-icons/fi";

export const nav_links: NavLinksType[] = [
  { url: "/", title: "Home" },
  { url: "/projects", title: "Projects" },
  { url: "/contact", title: "Contact" },
];

export const social_links: SocialLinksType[] = [
  {
    url: "https://github.com/Oba1d-Khan",
    title: "Github",
    icon: FiGithub,
  },
  {
    url: "https://www.linkedin.com/in/oba1d-khan-4b9698214/",
    title: "LinkedIn",
    icon: FiLinkedin,
  },
  {
    url: "https://twitter.com/Obaid_Talks",
    title: "X",
    icon: FaXTwitter,
  },
  {
    url: "https://web.whatsapp.com/",
    title: "Whatsapp",
    icon: FaWhatsapp,
  },
];

export const SkillsLanguages: SkillsLogoType[] = [
  { id: 1, title: "HTML-5", src: "./images/html.svg" },
  { id: 2, title: "CSS-3", src: "./images/css.svg" },
  { id: 3, title: "JavaScript ES6", src: "./images/javascript.svg" },
  { id: 4, title: "TypeScript", src: "./images/typescript.svg" },
  { id: 5, title: "NodeJs", src: "./images/nodejs.svg" },
  { id: 6, title: "Vite", src: "./images/vitejs.svg" },
  { id: 7, title: "Git", src: "./images/git.svg" },
  { id: 8, title: "NPM", src: "./images/npm.svg" },
  // { id: 9, title: "Docker", src: "./images/docker.svg" },
  // { id: 10, title: "Kubernetes", src: "./images/kubernetes.svg" },
  // { id: 11, title: "Linux Ubuntu", src: "./images/ubuntu.svg" },
];
export const SkillsLibraries: SkillsLogoType[] = [
  { title: "ReactJS", src: "./images/react.svg" },
  { title: "Redux", src: "./images/redux.svg" },
  { title: "NextJS", src: "./images/next-js.svg" },
  { title: "Tailwind Css", src: "./images/tailwind.svg" },
  { title: "Shadcn UI", src: "/images/shadcn-ui.png" },
  { title: "Material UI", src: "/images/mui.png" },
  { title: "Framer Motion", src: "./images/framer-motion.svg" },
];

export const SkillsOthers: SkillsLogoType[] = [
  { title: "MongoDB", src: "./images/mongoDB.svg" },
  { title: "Mongoose", src: "/images/mongoose.png" },
  { title: "Prisma", src: "./images/prisma.svg" },
  { title: "Zod", src: "./images/zod.svg" },
];

export const projectListing = [
  {
    title: "Fashion Store",
    src: "/images/redux-store.png",
    link: "https://redux-shopping-store-xi.vercel.app/",
    githubLink: "https://github.com/Oba1d-Khan/Redux-Shopping-Store",
  },
  {
    title: "Digital Store Landing Page",
    src: "/images/mini-store.png",
    link: "https://mini-store-mu.vercel.app/",
    githubLink: "https://github.com/Oba1d-Khan/MiniStore-",
  },
  {
    title: "FoodByte | Restaurant Dashboard",
    src: "/images/foodbyte.png",
    link: "https://foodbyte-pi.vercel.app/",
    githubLink: "https://github.com/Oba1d-Khan/foodbyte-restaurant-dashboard",
  },
  {
    title: "Albino Saas Landing Page",
    src: "/images/albino.png",
    link: "https://albino-saas-landing-page.vercel.app/ ",
    githubLink: "https://github.com/Oba1d-Khan/Albino.io-landing-page",
  },

  {
    title: "Fenet Agency Landing Page",
    src: "/images/fenet.png",
    link: "https://agency-landing-page-fenet.vercel.app/",
    githubLink: "https://github.com/Oba1d-Khan/Agency-Landing-Page",
  },
  {
    title: "EZ TO-DO",
    src: "/images/todo-app.png",
    link: "https://my-todo-appz.vercel.app/",
    githubLink: "https://github.com/Oba1d-Khan/TODO-app-using-ContextAPI",
  },
  {
    title: "Forecast Wizard",
    src: "/images/weather-app.png",
    link: "https://forecast-wizard.vercel.app/",
    githubLink: "https://github.com/Oba1d-Khan/Forecast_Wizard",
  },
  {
    title: "Random Advice App",
    src: "/images/quote-app.png",
    link: "https://advicebuddy.vercel.app/",
    githubLink: "https://github.com/Oba1d-Khan/AdviceMe-App",
  },
];
