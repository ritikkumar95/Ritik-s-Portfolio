import emoji from "react-easy-emoji";
import {
  EducationType,
  ExperienceType,
  FeedbackType,
  ProjectType,
  SkillsSectionType,
  SkillBarsType,
  SEODataType,
  SocialLinksType,
  GreetingsType,
} from "./types/sections";

export const greetings: GreetingsType = {
  name: "Ritik kumar",
  title: "Hi visitor, I'm Ritik",
  description:
    "I'm a passionate computer programmer with experience in developing Full Stack web applications using Node.js, Express.js, React.js, and MongoDB. I am proficient in technologies such as Java, C++, R, SQL, JavaScript, Python, and more. I have a strong interest in learning new technologies and implementing them in my projects. As a self-motivated and hardworking individual, I am always ready to learn and collaborate within a team.",
  resumeLink: "https://docs.google.com/document/d/1cZnsGD7JtKgKIp7GaJ4AH1gcLqeLiJUUhBfb4njK5nY/edit?usp=sharing",
};

export const openSource = {
  githubUserName: "ritikkumar95",
};

export const contact = {};

export const socialLinks: SocialLinksType = {
  email: "mailto:ritikkumar95883@gmail.com",
  linkedin: "https://www.linkedin.com/in/ritikkumar343/",
  github: "https://github.com/ritikkumar95",
};

export const skillsSection: SkillsSectionType = {
  title: "What I do?",
  subTitle: "CRAZY  DEVELOPER WHO WANTS TO EXPLORE MORE TECHNOLOGIES",
  data: [
    {
      title: "Skills",
      lottieAnimationFile: "/lottie/skills/fullstack.json", // Path of Lottie Animation JSON File
      skills: [
        emoji("⚡ Build dynamic website in react js that catches User's eyes and enhance experience"),
        emoji("⚡ Build RESTful APIs in Node and Express "),

        emoji("⚡ Bring solid foundation in many programming language i.e. Java , JavaScipt , Python and C++  "),
        emoji("⚡ Possess excellent hold on databases i.e MySQL , PostgreSQL , MongoDB and Oracle"),
       
      ],
      softwareSkills: [
        {
          skillName: "Python",
          iconifyTag: "logos:python",
        },
        {
          skillName: "Java",
          iconifyTag: "vscode-icons:file-type-java",
        },
        
        {
          skillName: "JavaScript",
          iconifyTag: "logos:javascript",
        },
        {
          skillName: "Reactjs",
          iconifyTag: "vscode-icons:file-type-reactjs",
        },
       
        
        {
          skillName: "Linux",
          iconifyTag: "devicon:linux",
        },
        {
          skillName: "Github",
          iconifyTag: "akar-icons:github-fill",
        },
        {
          skillName: "PostgreSQL",
          iconifyTag: "logos:postgresql",
        },
        {
          skillName: "mySQL",
          iconifyTag: "logos:mysql",
        },
        {
          skillName: "MongoDB",
          iconifyTag: "logos:mongodb",
        },
        {
          skillName: "Bootstrap",
          iconifyTag: "logos:bootstrap",
        },
        {
          skillName: "Tailwind",
          iconifyTag: "devicon:tailwindcss",
        },
      ],
    },
  ],
};

export const SkillBars: SkillBarsType[] = [
  {
    Stack: "Frontend/Design",
    progressPercentage: "85", 
  },
  {
    Stack: "Backend",
    progressPercentage: "90",
  },
  {
    Stack: "Programming",
    progressPercentage: "95",
  },
];

export const educationInfo: EducationType[] = [
  {
    schoolName: "Algonquin College of applied arts and technology",
    subHeader: "Diploma in Computer Programming",
    duration: "September 2023 - August 2025",
    desc: "",
    grade: "Grade 3.8 / 4.0",
    descBullets: [], // Array of Strings
  },
];



export const projects: ProjectType[] = [
  
  {
    name: "Google Gemini clone",
    desc: "A Gemini clone using React JS and the Gemini API! Throughout the development process, I used advanced concepts such as hooks, context APIs, and state management to ensure the best functionality and user experience. One of the highlights of this project was the custom CSS I used from the beginning, which bypassed any CSS framework I would use.",
    github: "https://github.com/ritikkumar95/Gemini-Clone",
    link: "https://gemini-by-ritik.netlify.app/",
  },
  {
    name: "Food-Delivery App",
    desc: "Developed a food delivery application using MERN stack, focusing on seamless user experience. Implemented features such as real-time tracking, order customization, and secure payment processing. Managed the entire project lifecycle from design to deployment, demonstrating strong problem-solving skills and attention to detail.",
    github: "https://github.com/ritikkumar95/Gemini-Clone",
    link: "https://gemini-by-ritik.netlify.app/",
  },
  {
    name: "My-portfolio",
    desc: "Software Developer Portfolio Template built with react.js and  bootstrap that showcase my work and skills as a software developer.",
    github: "https://github.com/1hanzla100/developer-portfolio",
    link: "#",
  },
  
];




export const seoData: SEODataType = {
  title: "Ritik kumar",
  description: greetings.description,
  author: "Ritik kumar",
  image: "https://avatars.githubusercontent.com/ritikkumar95",

  url: "https://main--portfolio-of-ritik.netlify.app/",
  keywords: [
    "Ritik",
    "Ritik kumar",
    "@ritikkumar95",
    "ritikkumar95",
    "Portfolio",
    "Ritik Portfolio ",
    "Ritik Kumar Portfolio",
  ],
};
