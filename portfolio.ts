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
  resumeLink: "https://docs.google.com/document/d/1cZnsGD7JtKgKIp7GaJ4AH1gcLqeLiJUUhBfb4njK5nY/edit",
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
    Stack: "Frontend/Design", //Insert stack or technology you have experience in
    progressPercentage: "85", //Insert relative proficiency in percentage
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

// export const experience: ExperienceType[] = [
  
//   {
//     role: "Full Stack Developer",
//     company: "Duseca Software",
//     companyLogo: "/img/icons/common/duseca_software_logo.jpeg",
//     date: "Jan 2022 - Sept 2023",
//     desc: "Crafted robust mobile application backends employing Django, Python, and REST APIs. Leveraged Django REST Framework, PostgreSQL, AWS, Firebase, Stripe, and WebSocket for efficient development. Collaborated across teams to surpass client expectations. Designed intuitive UIs, empowering clients to effortlessly manage their applications with a visually captivating interface.",
//     // descBullets: [
//     // 	"Lorem ipsum dolor sit amet, consdfgectetur adipiscing elit",
//     // 	"Lorem ipsum dolor sit amet, consectetur adipiscing elit",
//     // ],
//   },
//   {
//     role: "Full Stack Developer",
//     company: "ZRTechnologies",
//     companyLogo: "/img/icons/common/zrtech.jpeg",
//     date: "Aug 2022 - Jun 2023",
//     desc: "Crafting diverse web applications, I've elevated functionality and user engagement. Spearheaded Visual Portfolio, leveraging AI for captivating presentations from parsed text. Proficiently set up and optimized applications on Linux servers, guaranteeing smooth scalability and top-notch performance for seamless user experiences.",
//   },
//   {
//     role: "Backend Developer",
//     company: "Bleed-AI",
//     companyLogo: "/img/icons/common/bleedAI.jpg",
//     date: "Sept 2021 - Oct 2021",
//     desc: "As a Django developer at Bleed AI, I integrated a computer vision AI model to process YouTube URLs on a website. I used Django Channels and Websockets to show real-time processing and implemented threading to run multiple instances of the AI model. I also used jQuery for UI rendering and deployed the website on a Heroku server.",
//   },
// ];

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
  // {
  //   name: "Hooligan Culture",
  //   desc: "A Ecommerce Platform, where shopping meets the future! With HandCash BitcoinSV integration, you can authenticate and purchase products with ease and confidence.",
  //   link: "https://hooliganculture.com/",
  // },
];

// export const feedbacks: FeedbackType[] = [
//   {
//     name: "Syed Jamal",
//     role: "Frontend Developer at Meganos Software",
//     feedback:
//       "You were a wonderful addition to our team, alhumdulillah. I'm quite impressed with your abilities and professional practices. You approach problems from a unique perspective and always ask the right question. Finding a good teammate like Hanzla is extremely difficult. He has contributed to the growth of our organization and continues to do so. May Allah bless you with everything you desire.",
//   },
//   {
//     name: "Wajahat Malek",
//     role: "CEO at Duseca Software",
//     feedback:
//       "Hanzla has a deep understanding of web development technologies and is adept at using them to build scalable, robust, and secure web applications. He has worked on various projects, ranging from small-scale to large-scale, and has shown his ability to work collaboratively with others while maintaining a high level of productivity and quality. Hanzla is a pleasure to work with, and I have no doubt that he will be an asset to any team or organization. I highly recommend Hanzla for any Full Stack Django, React.js, or Blockchain development projects, and I wish him all the best in his future endeavors.",
//   },
//   {
//     name: "Zaid Zaffar",
//     role: "CEO at ZR Technologies",
//     feedback:
//       "Very skilled at what he does and has an in depth knowledge of Django and he's always ready to handle any challenges thrown at him. He's been a valuable member of my team and i look forward to working with him in the years to come",
//   },
// ];

// See object prototype on /types/section.ts page
export const seoData: SEODataType = {
  title: "Ritik kumar",
  description: greetings.description,
  author: "Ritik kumar",
  image: "https://avatars.githubusercontent.com/u/59178380?v=4",
  url: "https://developer-portfolio-1hanzla100.vercel.app",
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
