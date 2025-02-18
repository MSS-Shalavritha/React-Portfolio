import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `I am a results-driven Full Stack Developer, QA Engineer, and Machine Learning enthusiast with expertise in building scalable web applications and ensuring software quality through automation. With 5 years of experience, I have developed robust solutions using React, Node.js, PostgreSQL, and cloud platforms like AWS and GCP. Additionally, I have worked on machine learning projects, applying classification, regression, and reinforcement learning techniques to solve real-world problems. My passion lies in leveraging technology to drive business growth and deliver high-quality software solutions.`;

export const ABOUT_TEXT = `I am a versatile Full Stack Developer, QA Engineer, and Machine Learning practitioner with a strong foundation in software development, automation, and data-driven insights. I hold a Master's degree in Computer Science from California State University - Chico and a Bachelor's degree in Computer Science from Jawaharlal Nehru Technological University. With 5 years of professional experience, I have worked on a range of projects, from building high-performance web applications with React, Node.js, and PostgreSQL to automating test cases using Selenium and Python. Additionally, my work in machine learning includes projects such as sales data analysis, Titanic survivability prediction, wine quality classification, and reinforcement learning applications. These projects have allowed me to develop predictive models, optimize algorithms, and extract meaningful insights from complex datasets.  
My ability to analyze system performance, implement CI/CD pipelines, and ensure application reliability has helped teams optimize efficiency and reduce deployment times. I thrive in collaborative environments, enjoy solving challenging problems, and continuously explore emerging technologies. Outside of work, I contribute to research projects, stay engaged with the developer and ML community, and explore innovative tech solutions.`;

export const EXPERIENCES = [
  {
    year: "2024 - Present",
    role: "Research Assistant",
    company: "California State University - Chico",
    description: `Analyzed GitHub metrics to study team collaboration and individual contributions. Applied data modeling techniques to evaluate team dynamics and ensure system scalability.`,
    technologies: ["Data Modeling", "GitHub", "Scalability"],
  },
  {
    year: "Dec 2023 - May 2024",
    role: "Full Stack Web Assistant - Lead",
    company: "Chico State Enterprises",
    description: `Enhanced system scalability and performance by 35% using ReactJS and TailwindCSS. Implemented CI/CD pipelines with Jenkins to reduce deployment times by 25%, achieving a 99.8% service uptime.`,
    technologies: ["ReactJS", "TailwindCSS", "CI/CD", "Jenkins"],
  },
  {
    year: "June 2019 - Aug 2022",
    role: "Software Engineer & QA",
    company: "ValueMomentum Software Services",
    description: `Led the development of scalable web applications using ReactJS, Node.js, and PostgreSQL for U.S. clients (Geico, Pekin Insurance). Optimized API response times by 30% and reduced system downtime by 40%. Developed comprehensive test cases for both manual and automated testing, automating over 1,500 test cases with Selenium and streamlining bug tracking with Azure DevOps, which reduced post-release defects by 20%. Collaborated closely with cross-functional teams to ensure quality and on-time delivery of software solutions.`,
    technologies: ["ReactJS", "Node.js", "PostgreSQL", "Selenium", "Automation Testing", "Azure DevOps", "Agile"],
  },  
];

export const PROJECTS = [
  {
    title: "Selenium Research Project",
    image: project1,
    link: "https://docs.google.com/document/d/1Yp0E4V-8EAlt1DmwBDdzdY23D3TDXwjBON2GQzyPvXI/edit?usp=sharing",
    description:
      "Automated data extraction using Selenium with Python for a research project on geographical analysis of computer science research. This project ensured thorough data accuracy and comprehensive reporting.",
    technologies: ["Python", "Selenium", "Data Analysis"],
  },
  {
    title: "Restaurant Finder - Yelp Clone",
    image: project2,
    link: "https://github.com/MSS-Shalavritha/PERN-Stack-Yelp-Clone",
    description:
      "Designed and developed a full-stack website for discovering nearby restaurants. Users can add, edit, or delete restaurants and reviews, with robust API testing performed via Postman.",
    technologies: ["PostgreSQL", "ExpressJS", "NodeJS", "ReactJS"],
  },
  {
    title: "Food Delivery & Chat App",
    image: project3,
    link: "https://docs.google.com/document/d/1jyqgA86SeaCbq3s_102FKfdQ65C9EufHmr477oPJW-c/edit?usp=sharing",
    description:
      "Developed a Food Delivery Android app using Flutter and Firebase, alongside an iOS Chat App built with SwiftUI and Firebase, showcasing strong cross-platform mobile development skills.",
    technologies: ["Flutter", "Firebase", "SwiftUI"],
  },
  {
    title: "Machine Learning Projects",
    image: project4,
    link: "https://colab.research.google.com/drive/1Rcm4BSbhVUuT3eMBpKC8l3r0eRQ4gzf7?usp=sharing",
    description:
      "Executed multiple ML projects including Titanic Survivability Prediction, Wine Quality Prediction, Mushroom Classification, and Housing Price Prediction. Utilized various models like Naive Bayes, Ridge Regression, Decision Trees, and ANN to achieve high accuracy and performance.",
    technologies: [
      "Python",
      "Scikit-Learn",
      "Naive Bayes",
      "Ridge Regression",
      "Decision Trees",
      "ANN",
    ],
  },
];

export const CONTACT = {
  State: "Sacramento, California, USA",
  phoneNo: "+1 (530) 591-0510",
  email: "shalavritha@gmail.com",
};