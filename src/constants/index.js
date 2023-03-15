import {
  backend,
  creator,
  web,
  javascript,
  html,
  nextjs,
  express,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  abilisense,
  musicplayer,
  dashboard,
  youtube,
  threejs,
  vite,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Frontend Developer",
    icon: creator,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Full Stack Developer",
    icon: web,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Next JS",
    icon: nextjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Express JS",
    icon: express,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Vite",
    icon: vite,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
];

const experiences = [
  {
    title: "Full Stack Developer",
    company_name: "Abilisense",
    icon: abilisense,
    iconBg: "#ffffff",
    date: "2022 - Present",
    points: [
      "Web application design and development using Next.js.",
      "Collaboration with the web application development team.",
    ],
  },
];

const projects = [
  {
    name: "Music Player",
    description:
      "A music application that includes an extensive collection of songs played by leading artists in various genres. You can easily discover and listen to the latest hits.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Redux",
        color: "green-text-gradient",
      },
      {
        name: "TailwindCSS",
        color: "pink-text-gradient",
      },
    ],
    image: musicplayer,
    source_code_link: "https://github.com/mishaelkeidar/music-player",
  },
  {
    name: "Dashboard",
    description:
      "This dashboard provides administrators with a user-friendly interface to manage various aspects. Has a responsive design for a variety of devices.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "JavaScript",
        color: "green-text-gradient",
      },
      {
        name: "TailwindCSS",
        color: "pink-text-gradient",
      },
    ],
    image: dashboard,
    source_code_link: "https://github.com/mishaelkeidar/dashboard",
  },
  {
    name: "You Tube",
    description:
      "An app that offers access to a huge collection of videos and music. With the help of the application you can enjoy a variety of diverse content.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "JavaScript",
        color: "green-text-gradient",
      },
      {
        name: "CSS",
        color: "pink-text-gradient",
      },
    ],
    image: youtube,
    source_code_link: "https://github.com/mishaelkeidar/YouTube",
  },
];

export { services, technologies, experiences, projects };
