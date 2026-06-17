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
    "Right now, I am fine-tuning a deep learning foundation model for the AI4Hope project on the CSC Puhti supercomputer. Before that I was at Rightware in Helsinki, shipping computer vision and LLM features into Kanzi.",
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
      desc: "I am continuing my MSc thesis research as part of the AI4Hope project at the University of Turku. My work focuses on fine-tuning SleepFM, a deep learning foundation model, on MESA polysomnography data for automated sleep staging. I run training jobs on the CSC Puhti supercomputer, managing SLURM compute nodes via SSH and evaluating how the model adapts to clinical sleep data."
    },
    {
      role: "AI Engineer Trainee – Helsinki, Finland",
      company: "Rightware Oy",
      companylogo: require("./assets/images/rightwareLogo.png"),
      date: "April 2025 – August 2025",
      desc: "Kanzi is an automotive HMI platform used in production vehicles by major car manufacturers globally. I spent the summer shipping AI features directly into that product. I improved object detection accuracy from 64% to 83%, built an LLM interface using Ollama that let designers make project changes in plain English, created a font recognition pipeline trained on 30,000 synthetic images, and designed a layout adaptation tool that reduced hours of manual work to seconds."
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
      desc: "I completed my MSc in Artificial Intelligence on a merit-based JYU scholarship and graduated in June 2026. My thesis evaluated ML model performance across clinical PSG and wearable sleep data using TSFEL feature extraction and SHAP analysis. The research was part of the AI4Hope project in collaboration with the University of Turku, and received funding from the Shanghai Sci-tech Co-research Program."
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
      projectName: "MSc Thesis, Sleep Staging Research (AI4Hope Project)",
      projectDesc:
        "My MSc thesis was part of the AI4Hope project, running in collaboration with the University of Turku and funded by the Shanghai Sci-tech Co-research Program. The goal was to evaluate how well ML models perform when trained on clinical sleep data and tested on wearable device data, and whether feature reduction and harmonization could bridge that gap.",
      projectHighlights: [
        "Built a four-class sleep staging pipeline (AWAKE, LIGHT, DEEP, REM) using MESA and TIHM datasets.",
        "Used TSFEL for time-series feature extraction across multiple physiological signal channels.",
        "Applied SHAP interpretability analysis to identify which features actually drove model decisions across datasets.",
        "Evaluated model generalization across clinical PSG and wearable IoT data, two very different data environments."
      ],
      techStack: ["Python", "TSFEL", "scikit-learn", "SHAP", "Pandas", "NumPy", "Matplotlib"],
      footerLink: []
    },
    {
      projectName: "ImageUpLift, AI Image Enhancer and Converter",
      projectDesc:
        "A personal project I built to solve a real problem, turning low-quality sketches and images into clean, high-resolution or vector outputs. Users can upload an image, pick a mode (enhance, vectorize, or outline), preview the result, and track their conversion history.",
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
        "My Bachelor's thesis project, which received a 4/4 grade. A real-time computer vision system that monitors driver drowsiness through facial landmark tracking, detects lane deviation, and identifies nearby vehicles, animals, and pedestrians using YOLO. When risk is detected, the system alerts the driver immediately.",
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
      desc: "I co-authored this paper with researchers from the University of Turku the University of Sydney. We proposed a custom neural architecture combining fuzzy logic with dilated convolutions to extract features from MRI scans. The model achieved 98.8 to 99.7% classification accuracy while reducing trainable parameters. Published at IEEE PIC 2024."
    },
    {
      title: "International Research Funding",
      subtitle: "Shanghai Sci-tech Co-research Program, Project No. 25HB2703300",
      image: require("./assets/images/jyuLogo.png"),
      imageAlt: "JYU Logo",
      footerLink: [],
      desc: "My MSc thesis received external funding from the Shanghai Sci-tech Co-research Program as part of the AI4Hope project. The funding supported my research on ML model evaluation across clinical and wearable sleep data, in collaboration with the University of Turku."
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
      desc: "I received a scholarship from the University of Jyväskylä for strong academic performance and demonstrated potential in the MSc Artificial Intelligence program. Competitive award granted to a small number of incoming students each year."
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
      desc: "I was awarded a Gold Medal for securing the highest CGPA of 3.78/4.0 across my entire Computer Science graduating cohort. Four years of consistent academic performance across every subject in the program."
    },
    {
      title: "Microsoft Azure Developer Associate",
      subtitle: "Cloud Certification, Microsoft",
      image: require("./assets/images/azureLogo.png"),
      imageAlt: "Azure Certification Logo",
      footerLink: [
        {
          name: "Certificate",
          url: "https://drive.google.com/file/d/10p_s1MwviKY-Kq56oiLldFVFOyCrSkrp/view?usp=sharing"
        }
      ],
      desc: "I am also certified in Azure cloud services covering app development, deployment workflows, and CI/CD pipelines. Relevant to ML model deployment and cloud-based backend development, which I have applied in production projects."
    },
    {
      title: "Degree Tutor, University of Jyväskylä",
      subtitle: "Mentor for International Students",
      image: require("./assets/images/jyyLogo.png"),
      imageAlt: "University of Jyväskylä Logo",
      footerLink: [
        {
          name: "Certificate",
          url: "https://drive.google.com/file/d/1-iDC8Yv75cECDf12T8q47CSuSwBq9arr/view?usp=sharing"
        }
      ],
      desc: "I was selected to serve as a degree tutor for incoming international students at JYU, to support their academic and social integration. This experience gave me training on group leadership and intercultural communication."
    }
  ],
  display: true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true",
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),
  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false
};

const contactInfo = {
  title: emoji("Get in Touch 📬"),
  subtitle:
    "I am currently looking for AI and ML engineering roles in Finland. If you have an opportunity or just want to connect, my inbox is open.",
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

// Twitter Section

const twitterDetails = {
  userName: "devhassanmehdi",
  display: false
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
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable
};
