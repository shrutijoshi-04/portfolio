import { Link } from "react-router-dom";
import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  git,
  figma,
  codeclause,
  absax,
  circle,
  restaurant,
  cpp,
  java,
  mysql,
  dbms,
  github,
  bitbucket,
  vscode,
  postman,
  firebase,
  ts,
  next,
  eclipse,
  jira,
  notion,
  aws2,
  airline,
  anjali,
  anshul,
  anek,
  platform,
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
    id: "certification",
    title: "Certification",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Frontend Developer",
    icon: mobile,
  },
  {
    title: "Data Analyst",
    icon: backend,
  },
  {
    title: "RPA Developer",
    icon: creator,
  },
];

const frontendTechnologies = [
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "Redux",
    icon: redux,
  },

  {
    name: "HTML",
    icon: html,
  },
  {
    name: "CSS",
    icon: css,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Next Js",
    icon: next,
  },
  {
    name: "Typescript",
    icon: ts,
  },
];

const tools = [
  {
    name: "git",
    icon: git,
  },
  {
    name: "github",
    icon: github,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "VS Code",
    icon: vscode,
  },
  {
    name: "Jira",
    icon: jira,
  },

  {
    name: "Postman",
    icon: postman,
  },
  {
    name: "Eclipse",
    icon: eclipse,
  },

  {
    name: "Netbeans",
    icon: notion,
  },
  {
    name: "Bitbucket",
    icon: bitbucket,
  },
];

const otherTechnologies = [
  {
    name: "C++",
    icon: cpp,
  },
  {
    name: "Firebase",
    icon: firebase,
  },
  {
    name: "Java",
    icon: java,
  },
  {
    name: "Mysql",
    icon: mysql,
  },
  {
    name: "SQL",
    icon: dbms,
  },
  {
    name: "AWS",
    icon: aws2,
  },
  {
    name: "DBMS",
    icon: dbms,
  },
];

const experiences = [
  {
    title: "Software Engineer",
    company_name: "Absax Technologies, Noida, India",
    icon: absax,
    iconBg: "#ffffff",
    date: "Feb 2024 - Present",
    points: [
      "Built and enhanced web applications using React.js, ensuring interactive and responsive interfaces.",
      "Designed a basic automation project with UiPath and Automation Anywhere to automate repetitive tasks.",
      "Collaborated with team members to create scalable solutions and craft responsive layouts.",
      "Worked on delivering seamless user experiences across devices and platforms.",
      "Contributed to team discussions and participated in code reviews to improve coding practices.",
    ],
    skills: [
      "JavaScript",
      "ES6",
      "React",
      "Redux",
      "HTML",
      "CSS",
      "Tailwind",
      "Git",
      "Automation Anywhere",
      "UiPath",
      "Microsoft Power Automate",
    ],
  },
  {
    title: "Internship",
    company_name: "Code Clause",
    icon: codeclause,
    iconBg: "#fff",
    date: "Oct 2023 - Nov 2023",
    points: [
      "Developed simple Java projects to gain practical knowledge of core Java concepts and object-oriented programming.",
      "Worked on desktop applications using Java, improving programming and debugging skills.",
      "Learned to design and implement databases with MySQL for managing application data.",
      "Gained hands-on experience with Java libraries and frameworks to enhance coding proficiency.",
    ],
    skills: ["Java", "Swing", "AWT", "JDBC", "MySQL"],
  },
];

const certification = [
  {
    title: "React Development Certificate",
    company_name: "Internshala",
    icon: circle,
    iconBg: "#383E56",
    date: "Nov 2023 - Dec 2023",
    point:
      "Completed training in React.js, mastering key concepts like hooks, state management, and component architecture to build dynamic web applications with responsive UIs.",
  },
  {
    title: "Data Analyst",
    company_name: "Coursera",
    icon: circle,
    iconBg: "#383E56",
    date: "June 2023 - July 2023",
    point:
      "Certified in Data Analysis, specializing in SQL, Python, and data visualization. Developed skills in creating dashboards, analyzing trends, and delivering actionable insights for data-driven decision-making.",
  },
];

const testimonials = [
  {
    testimonial:
      "Knowing Shruti as a friend and professional has been a privilege. Her dedication and problem-solving skills make her stand out. I’m confident her career will be filled with success and achievements.",
    name: "Anjali Shukla",
    designation: "SDE",
    company: "IBM",
    image: anjali,
  },
  {
    testimonial:
      "As a colleague of Shruti, working alongside her has been an incredible experience. Her professionalism, dedication, and teamwork make her an invaluable asset to any team.",
    name: "Anek Chouhan",
    designation: "SDE",
    company: "Absax Technologies",
    image: anek,
  },
  {
    testimonial:
      "I've had the pleasure of knowing Shruti on both a personal and professional level, and I can confidently say that He is one of the most talented person I've ever met.",
    name: "Anshul Pandya",
    designation: "SDE",
    company: "Deepspatial",
    image: anshul,
  },
];

const projects = [
  {
    name: "Airline Website",
    description:
      "The Basic Airline Reservation System is a practice project demonstrating CRUD operations and database integration for flight bookings.",
    tags: [
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
      {
        name: "html",
        color: "white",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: airline,
    source_code_link: "https://github.com/shrutijoshi-04/Airline-Reservation-System",
    project_live_link: "",
  },

  {
    name: "Code Learning Platform",
    description:
      "A user-friendly online code editor for HTML, CSS, and JavaScript. Practice coding and see real-time results. Perfect for learners and developers.",
    tags: [
      {
        name: "HTML",
        color: "pink-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "Javascript",
        color: "white",
      },
    ],
    image: platform,
    source_code_link: "https://github.com/shrutijoshi-04/Interactive-Code-Learning-Platform",
    project_live_link: "https://interactive-code-learning-platform.vercel.app/",
  },
  {
    name: "TastyBites Restaurant",
    description:
      "A modern, responsive website showcasing delicious menu items, customer reviews, and a contact form. Built with Tailwind, it features an engaging user experience.",
    tags: [
      {
        name: "Reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "Tailwind",
        color: "blue",
      },
    ],
    image: restaurant,
    source_code_link: "https://github.com/shrutijoshi-04/Simple-Restaurant-Website",
    project_live_link: "https://simple-restaurant-website-chi.vercel.app/",
  },
];

export {
  services,
  frontendTechnologies,
  otherTechnologies,
  tools,
  experiences,
  testimonials,
  projects,
  certification,
};
