/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Hassan Mehdi",
  title: "Hi, I'm Hassan",
  subTitle: [
    "I train AI models, and implement AI features into production environments. These days I code with AI tools like Claude Code.",
    "Right now, I am fine-tuning a deep learning foundation & Large Language models for the AI4HOPE project on the CSC Puhti & Roihu supercomputers. Before that I was at Rightware in Helsinki, shipping computer vision and LLM features into Kanzi.",
    "When I step away from the screen I am usually on a mountain bike, in a pool, or emersed in a single player video game. Sometimes all three in the same day."
  ],
  resumeLink:
    "https://drive.google.com/file/d/1-fUHrLwS6nTkc7pSEJtakGtNiHziDfeN/view?usp=sharing",
  displayGreeting: true
};

// Skills Section

const skillsSection = {
  title: "What I Build",
  subTitle:
    "I train models and ship AI features into softwares. My work covers machine learning, computer vision, LLM integration, and full-stack Python development.",
  skills: [
    emoji("Computer vision and object detection. I have shipped these into live automotive software."),
    emoji("LLM integration and foundation model fine-tuning. I have built LLM features that ran in production."),
    emoji("Backend APIs and data pipelines in Python, FastAPI, Flask, and PostgreSQL."),
    emoji("I work Full-stack when the project needs it. React, TypeScript, and Node.js.")
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
  https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    // AI / ML / CV
    { skillName: "Python", fontAwesomeClassname: "fab fa-python" },
    { skillName: "PyTorch", fontAwesomeClassname: "fas fa-fire" },
    { skillName: "TensorFlow", fontAwesomeClassname: "fas fa-brain" },
    { skillName: "OpenCV", fontAwesomeClassname: "fas fa-camera" },
    { skillName: "YOLO", fontAwesomeClassname: "fas fa-crosshairs" },
    { skillName: "scikit-learn", fontAwesomeClassname: "fas fa-robot" },
    { skillName: "HuggingFace", fontAwesomeClassname: "fas fa-smile" },
    { skillName: "Ollama", fontAwesomeClassname: "fas fa-server" },
    { skillName: "Fine-Tuning", fontAwesomeClassname: "fas fa-sliders-h" },
    { skillName: "SHAP", fontAwesomeClassname: "fas fa-chart-bar" },
    { skillName: "SLURM", fontAwesomeClassname: "fas fa-server" },
    { skillName: "HPC", fontAwesomeClassname: "fas fa-microchip" },

    // Backend
    { skillName: "FastAPI", fontAwesomeClassname: "fas fa-bolt" },
    { skillName: "Flask", fontAwesomeClassname: "fas fa-flask" },
    { skillName: "SQL", fontAwesomeClassname: "fas fa-database" },

    // Full Stack / Frontend
    { skillName: "Node.js", fontAwesomeClassname: "fab fa-node-js" },
    { skillName: "TypeScript", fontAwesomeClassname: "fas fa-code" },
    { skillName: "React", fontAwesomeClassname: "fab fa-react" },
    { skillName: "JavaScript", fontAwesomeClassname: "fab fa-js" },

    // Tools & Environments
    { skillName: "Docker", fontAwesomeClassname: "fab fa-docker" },
    { skillName: "Git", fontAwesomeClassname: "fab fa-git-alt" },
    { skillName: "Linux / Bash", fontAwesomeClassname: "fas fa-terminal" }
  ],
  display: true
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true,
  experience: [
    {
      Stack: "Computer Vision & Deep Learning",
      progressPercentage: "88%"
    },
    {
      Stack: "Machine Learning & MLOps",
      progressPercentage: "83%"
    },
    {
      Stack: "LLM Integration & Fine-Tuning",
      progressPercentage: "60%"
    },
    {
      Stack: "Backend & Full-Stack Development",
      progressPercentage: "78%"
    }
  ],
  displayCodersrank: false
};

// Work experience section

const workExperiences = {
  display: true,
  experience: [
    {
      role: "Project Researcher – Turku, Finland",
      company: "University of Turku",
      companylogo: require("./assets/images/utuLogo.jpg"),
      date: "June 2026 – August 2026",
      desc: "I am continuing my thesis research as a Project Researcher at the University of Turku. I benchmark and implement deep learning foundation models for sleep staging on MESA polysomnography data, running jobs on the CSC Puhti & Roihu supercomputers via SLURM. Right now I am implementing Hypnos, an Oxford paper that applies next-token prediction to physiological signals the same way LLMs process language. It is hands-on work at the boundary of LLM architecture and clinical data."
    },
    {
      role: "AI Engineer Trainee – Helsinki, Finland",
      company: "Rightware Oy",
      companylogo: require("./assets/images/rightwareLogo.png"),
      date: "April 2025 – August 2025",
      desc: "Kanzi is an automotive HMI platform used in production vehicles by major car manufacturers globally. I spent the summer shipping AI features directly into that product. I improved object detection accuracy from 64% to 83%, built an LLM interface using Ollama that let designers make project changes in plain English, handling the prompt design and orchestration myself, created a font recognition pipeline trained on 30,000 synthetic images, and designed a layout adaptation tool that reduced hours of manual work to seconds."
    },
    {
      role: "Backend & AI Engineer – Remote, Ukraine",
      company: "Ri Software (Startup)",
      companylogo: require("./assets/images/riLogo.jpeg"),
      date: "April 2023 – February 2024",
      desc: "Ri-Software was a startup building an AI-driven business management platform for small businesses. I built the backend architecture and REST APIs in Python and Flask, trained ML models for sales forecasting and inventory planning, and built data pipelines using Pandas and PostgreSQL. I also contributed to the React and TypeScript frontend alongside a team of 20 engineers."
    }
  ]
};

// Education Section

const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "University of Jyväskylä",
      logo: require("./assets/images/jyuLogo.png"),
      subHeader: "Master of Science in Artificial Intelligence",
      duration: "September 2024 – June 2026",
      desc: "I completed my MSc in Artificial Intelligence on a merit-based JYU scholarship and graduated in June 2026. My thesis evaluated ML model performance across clinical PSG and wearable sleep data using TSFEL feature extraction and SHAP analysis. The research was part of the AI4HOPE project in collaboration with the University of Turku, and received funding from the Shanghai Sci-tech Co-research Program."
    },
    {
      schoolName: "IQRA National University",
      logo: require("./assets/images/inuLogo.png"),
      subHeader: "Bachelor of Science in Computer Science",
      duration: "February 2019 – February 2023",
      desc: "I graduated top of my cohort with a CGPA of 3.78 out of 4.0 and was awarded a Gold Medal for the highest academic performance across the entire graduating batch. My thesis was a real-time driver drowsiness and lane deviation detection system built with YOLO and OpenCV."
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "false",
  display: true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "Things I built that I am proud of.",
  projects: [
    {
      projectName: "Sleep Staging Research (AI4HOPE Project)",
      projectDesc:
        "My MSc thesis was part of the AI4HOPE project, in collaboration with the University of Turku and was funded by the Shanghai Sci-tech Co-research Program. I built a four-class sleep staging pipeline using MESA and TIHM datasets, applied TSFEL for time-series feature extraction, and used SHAP analysis to understand which features drove model decisions across clinical and wearable data environments. The work continues. I am now a Project Researcher at UTU, fine-tuning a deep learning foundation model on the same data.",
      techStack: ["Python", "TSFEL", "scikit-learn", "SHAP", "Pandas", "NumPy", "Matplotlib"],
      footerLink: []
    },
    {
      projectName: "ImageUpLift — AI Image Enhancer and Converter",
      projectDesc:
        "An AI web app that takes a low quality sketch or image and turns it into a clean, enhanced, or vectorized version. Built for designers who need to go from a rough scan to a production ready file fast. FastAPI backend with ESRGAN and OpenCV pipelines, React frontend.",
      techStack: ["FastAPI", "ESRGAN", "OpenCV", "CLIP", "React", "Docker"],
      footerLink: [
        {
          name: "GitHub Repository",
          url: "https://github.com/DevHassanMehdi/ImageUpLift"
        }
      ]
    },
    {
      projectName: "Driving Negligence Dissuader System (DNDS)",
      projectDesc:
        "A real-time computer vision system that monitors drivers for drowsiness and unsafe behavior. It tracks eye closure through facial landmarks, detects lane deviation, and identifies nearby vehicles, animals, and pedestrians using YOLO. When risk is detected, the system alerts the driver immediately. Runs continuously on a live camera feed.",
      techStack: ["Python", "YOLO", "OpenCV", "TensorFlow", "DLib", "Haar Cascades", "Raspberry Pi"],
      footerLink: [
        {
          name: "GitHub Repository",
          url: "https://github.com/DevHassanMehdi/Driving_Negligence_Dissuader_System"
        }
      ]
    }
  ],
  display: true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Recognitions and Accomplishments"),
  subtitle: "A curated collection of my key awards, publications, and certifications.",

  achievementsCards: [
    {
      title: "Research Publication, IEEE PIC 2024",
      subtitle: "Fuzzy-Based Atrous Convolution for Brain Tumor Detection Using MRI",
      image: require("./assets/images/ieeeLogo.png"),
      imageAlt: "IEEE Logo",
      footerLink: [
        {
          name: "View Paper",
          url: "https://ieeexplore.ieee.org/document/10892686"
        }
      ],
      desc: "My most notable research contribution is this IEEE paper, co-authored with researchers from the University of Turku and the University of Sydney. We built a custom neural architecture combining fuzzy logic with dilated convolutions for MRI-based brain tumor detection, hitting 98.8 to 99.7% classification accuracy."
    },
    {
      title: "Gold Medal, Top Graduate",
      subtitle: "Highest CGPA in the Bachelor's Program, Iqra National University",
      image: require("./assets/images/goldmedalLogo.png"),
      imageAlt: "Gold Medal Logo",
      footerLink: [
        {
          name: "Certificate",
          url: "https://drive.google.com/file/d/1XFVrFFSS-6blyILIBnymOHd0VFm1crjv/view?usp=sharing"
        }
      ],
      desc: "My most notable academic achievement is my Gold Medal from Iqra National University. I graduated with the highest CGPA of 3.78/4.0 across my entire Computer Science cohort. Four years, every subject, top of the batch."
    },
    {
      title: "International Research Funding",
      subtitle: "Shanghai Sci-tech Co-research Program, Project No. 25HB2703300",
      image: require("./assets/images/jyuLogo.png"),
      imageAlt: "JYU Logo",
      footerLink: [],
      desc: "My MSc thesis received external funding from the Shanghai Sci-tech Co-research Program. That kind of funding does not go to every student. It went to this project because the research was worth backing."
    },
    {
      title: "JYU Scholarship Award",
      subtitle: "Merit-based Scholarship, University of Jyväskylä, Finland",
      image: require("./assets/images/jyuLogo.png"),
      imageAlt: "JYU Scholarship Logo",
      footerLink: [
        {
          name: "Certificate",
          url: "https://drive.google.com/file/d/1ZfY1qLExQw9dSYjVwY3KRw9PKCKwYyN-/view?usp=sharing"
        }
      ],
      desc: "I was awarded a merit-based scholarship by the University of Jyväskylä to study MSc Artificial Intelligence. It was competitive and granted to a small number of incoming students each year."
    },
    {
      title: "Certificate of Honor, University of Jyväskylä",
      subtitle: "Stipend for completing MSc studies within the target time frame, 2026",
      image: require("./assets/images/jyuLogo.png"),
      imageAlt: "JYU Logo",
      footerLink: [],
      desc: "I was awarded a stipend by the University of Jyväskylä for completing my MSc within the target time frame."
    },
    {
      title: "Talent Sprint Challenge, JAMK",
      subtitle: "Entrepreneurship Program, April to May 2026",
      image: require("./assets/images/jyyLogo.png"),
      imageAlt: "JAMK Logo",
      footerLink: [],
      desc: "Most recently I completed the Talent Sprint Challenge run by JAMK Talent Boost in Jyväskylä. I worked with CEOs of local tech startups on their core business problems, applying analytical and strategic thinking to real company challenges."
    }
  ],
  display: true
};

const contactInfo = {
  title: emoji("Get in Touch 📬"),
  subtitle: "Looking for AI and ML roles in Finland. My inbox is open.",
  email_address: "itshmehdi@gmail.com"
};
// Social Media Links

const socialMediaLinks = {
  gmail: "itshmehdi@gmail.com",
  github: "https://github.com/DevHassanMehdi",
  linkedin: "https://www.linkedin.com/in/devhassanmehdi/",
  kaggle: "https://www.kaggle.com/devhassan",
  display: true
};

const isHireable = true;

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  contactInfo,
  isHireable
};
