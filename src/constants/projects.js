import { musicplayer, dashboard, youtube } from "../assets";

// projects

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

  export {projects};