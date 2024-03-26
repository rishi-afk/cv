import { GitHubIcon, LinkedInIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Rishikesh Bhakare",
  initials: "RB",
  location: "Mumbai, India, Asia/Kolkata",
  locationLink: "https://www.google.com/maps/place/Mumbai",
  about:
    "Full Stack Engineer focused on building products with extra attention to detail",
  summary:
    "As a Full Stack Engineer, I have successfully taken multiple projects from 0 to 1. Currently, I work mostly with TypeScript, React, Next.js. I have over 4 years of experience in working with projects revolving around the web.",
  avatarUrl:
    "https://media.licdn.com/dms/image/D4D03AQERRm21BMvcNA/profile-displayphoto-shrink_800_800/0/1706459524073?e=1717027200&v=beta&t=otTZUodRlqYMaJZ_-XMlgmgm88pgPBEFUZe4oAWweHE",
  contact: {
    email: "bhakarerishi@gmail.com",
    tel: "+919999999999",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/rishi-afk",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://linkedin.com/in/rsh-afk",
        icon: LinkedInIcon,
      },
    ],
  },
  education: [
    {
      school: "National Institute Of Technology, Tiruchirapalli",
      degree: "Master's Degree in Computer Applications",
      start: "2022",
      end: "2025",
    },
    {
      school: "Ramnarain Ruia Autonomous College, Mumbai",
      degree: "Bachelor's Degree in Computer Science",
      start: "2019",
      end: "2022",
    },
    {
      school: "Atomic Energy Central School, Mumbai",
      degree: "Class XII - PCM",
      start: "2016",
      end: "2018",
    },
  ],
  work: [
    {
      company: "ParallelDots Technology",
      link: "https://www.paralleldots.com/",
      badges: ["Remote"],
      title: "Associate - Backend Developer",
      start: "Nov/2020",
      end: "Feb/2021",
      description:
        "Worked as a full-stack developer in the early stages of development of OogaShop, an AI-based progressive web application simplifying Kirana shopping. Developed the core RESTful services in Python using FastAPI and implemented a custom OTP-based authentication and authorization flow. Collaborated with cross-functional teams to integrate backend services into the NuxtJS application.",
    },
  ],
  skills: [
    "JavaScript",
    "TypeScript",
    "React/Next.js",
    "Node.js",
    "C++",
    "Figma",
    "AWS",
  ],
  projects: [
    {
      title: "QARBA",
      techStack: ["Academic Project", "Python", "Django", "JavaScript"],
      description:
        "QARBA is a QR-based attendance management system that simplifies attendance management at educational institutes.",
    },
    {
      title: "SoundsByAman",
      techStack: [
        "Client Project",
        "TypeScript",
        "Next.js",
        "AWS",
        "VueJS",
        "Node",
      ],
      description:
        "An e-commerce store selling digitally downloadable music sound banks for music producers and artists.",
    },
    {
      title: "Yoma Music",
      techStack: ["Side Project", "Next.js", "Netlify"],
      description:
        "An artist portfolio website showcasing music album releases, services, and information about the artist.",
      link: {
        href: "https://yomamusic.com/",
      },
    },
  ],
} as const;
