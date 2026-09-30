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
    "I train AI models and build them into real software. These days I also code with AI tools like Claude Code.",
    "Right now I am a Project Researcher at the University of Turku. I benchmark sleep foundation models on the CSC Roihu supercomputer, and I submitted a first-author paper on this work to BNAIC/BeNeLearn 2026. Before that I was at Rightware in Helsinki, shipping computer vision and LLM features into Kanzi.",
    "When I step away from the screen I am usually on a mountain bike, cooking, or socializing with friends. Sometimes all three in the same day."
  ],
  resumeLink: "PASTE_NEW_CV_LINK_HERE",
  displayGreeting: true
};

// Skills Section

const skillsSection = {
  title: "What I Build",
  subTitle:
    "I train models and ship AI features into software. Here is what I have actually worked on.",
  skills: [
    emoji("Computer vision and object detection. I shipped these into Rightware's Kanzi platform, which runs in production cars."),
    emoji("Sleep staging from EEG and ECG signals. I benchmark foundation models on 2,056 subjects on the CSC Roihu supercomputer."),
    emoji("LLM features for real users. At Rightware I built an Ollama interface that let designers edit projects in plain English."),
    emoji("Backend APIs and data pipelines in Python, FastAPI, Flask, and PostgreSQL."),
    emoji("I also work full-stack with React, TypeScript, and Node.js when a project needs it.")
  ],

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

    // Biosignals
    { skillName: "EEG / ECG", fontAwesomeClassname: "fas fa-heartbeat" },
    { skillName: "Sleep Staging", fontAwesomeClassname: "fas fa-bed" },

    // HPC
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
    { skillName: "Linux / Bash", fontAwesomeClassname: "fas fa-terminal" },
    { skillName: "Azure", fontAwesomeClassname: "fab fa-microsoft" }
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
      role: "Project Researcher, Turku, Finland",
      company: "University of Turku",
      companylogo: require("./assets/images/utuLogo.jpg"),
      date: "June 2026 – Present",
      desc: "I benchmark foundation models for automatic sleep staging on MESA polysomnography data. The main question is how well they work with fewer sensors, like the ECG signal that wearables can record. I submitted a first-author paper on this to BNAIC/BeNeLearn 2026. Now I run the full 2,056-subject benchmark on the CSC Roihu supercomputer, with 90 fine-tuning runs across six models. Before scaling up, I found and fixed a label bug that was lowering results across most of the dataset."
    },
    {
      role: "AI Engineer Trainee, Helsinki, Finland",
      company: "Rightware Oy",
      companylogo: require("./assets/images/rightwareLogo.png"),
      date: "April 2025 – August 2025",
      desc: "I built production AI features for Kanzi, Rightware's automotive UI platform. My main project was moving object detection from YOLOv7 to YOLOX, which raised accuracy from 64% to 83% and fixed a licensing conflict. I created the company's first font recognition feature with a ResNet50 trained on 30,000 synthetic images. I also shipped a local LLM interface with Ollama that let designers edit projects in plain English, and a layout tool that cut hours of manual work to seconds."
    },
    {
      role: "Backend & AI Engineer, Remote",
      company: "Ri Software (Startup)",
      companylogo: require("./assets/images/riLogo.jpeg"),
      date: "April 2023 – February 2024",
      desc: "I built the Python backend and REST APIs for a business management platform with 50 beta clients. I also trained ML models for sales forecasting and demand planning, and worked on the React frontend alongside a team of 20 engineers."
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
      desc: "I completed my MSc on a merit-based JYU scholarship and graduated with a grade of 4/5. My thesis compared ML models on clinical PSG and wearable sleep data, using TSFEL for feature extraction and SHAP to explain the results. It was part of the AI4HOPE project with the University of Turku, and the Shanghai Sci-tech Co-research Program also funded it."
    },
    {
      schoolName: "IQRA National University",
      logo: require("./assets/images/inuLogo.png"),
      subHeader: "Bachelor of Science in Computer Science",
      duration: "February 2019 – February 2023",
      desc: "I graduated with a CGPA of 3.78/4.0 and a Gold Medal for the highest grades in my batch. For my thesis I built a real-time system with YOLO and OpenCV that detected driver drowsiness and lane deviation."
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
        "This started as my MSc thesis. I built a four-class sleep staging pipeline on the MESA and TIHM datasets, with TSFEL for feature extraction and SHAP to see which features drove the model. As a Project Researcher at UTU, I now benchmark foundation models like SleepFM, BIOT and LaBraM on EEG and ECG signals. I submitted a first-author paper on this work to BNAIC/BeNeLearn 2026.",
      techStack: ["Python", "PyTorch", "TSFEL", "scikit-learn", "SHAP", "SLURM", "CSC Roihu"],
      footerLink: [
        {
          name: "Read the Paper",
          url: "https://openreview.net/forum?id=jhKtNcPheq"
        }
      ]
    },
    {
      projectName: "ImageUpLift: AI Image Enhancer and Converter",
      projectDesc:
        "An AI web app that turns a low-quality sketch or image into a clean, enhanced, or vectorized version. I built it for designers who need to go from a rough scan to a production-ready file quickly. It has a FastAPI backend with ESRGAN and OpenCV pipelines, and a React frontend.",
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
        "My BSc thesis. A real-time computer vision system that watches drivers for drowsiness and unsafe driving. It tracks eye closure through facial landmarks, detects lane deviation, and uses YOLO to spot nearby vehicles, animals, and pedestrians. When it detects a risk, it alerts the driver right away.",
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
  subtitle: "Publications, awards, and certifications I have earned so far.",

  achievementsCards: [
    {
      title: "Research Paper, BNAIC/BeNeLearn 2026 (Under Review)",
      subtitle: "Comparative Analysis of State-of-the-Art Foundation Models for Sleep Analysis Under Channel Reduction",
      image: require("./assets/images/utuLogo.jpg"),
      imageAlt: "University of Turku Logo",
      footerLink: [
        { name: "View Paper", url: "https://openreview.net/forum?id=jhKtNcPheq" },
        { name: "arXiv Preprint", url: "https://arxiv.org/abs/2609.22105" }
      ],
      desc: "We benchmarked six sleep staging models, including SleepFM, BIOT and LaBraM, on the MESA sleep dataset. We trained and tested each one on EEG only, ECG only, and both together, to measure how much accuracy you lose with the ECG signal that wearables record. EEG gave the best results, and switching to ECG cost 0.35 macro F1 on average."
    },
    {
      title: "Research Paper, IEEE PIC 2024",
      subtitle: "Fuzzy-Based Atrous Convolution for Brain Tumor Detection Using MRI",
      image: require("./assets/images/ieeeLogo.png"),
      imageAlt: "IEEE Logo",
      footerLink: [
        { name: "View Paper", url: "https://ieeexplore.ieee.org/document/10892686" }
      ],
      desc: "I co-authored this paper with researchers from the University of Turku and the University of Sydney. We combined fuzzy logic with dilated convolutions to classify brain tumors in MRI scans. The model reached 98.8 to 99.7% accuracy with fewer trainable parameters."
    },
    {
      title: "Microsoft Certified: Azure Developer Associate",
      subtitle: "Microsoft",
      image: require("./assets/images/azureLogo.png"),
      imageAlt: "Microsoft Azure Logo",
      footerLink: [
        { name: "Credential", url: "PASTE_CREDENTIAL_LINK_HERE" }
      ],
      desc: "I passed the Azure Developer Associate exam, which covers building, deploying, and securing apps on Microsoft Azure."
    },
    {
      title: "Gold Medal, Top Graduate",
      subtitle: "Highest CGPA in the Bachelor's Program, Iqra National University",
      image: require("./assets/images/goldmedalLogo.png"),
      imageAlt: "Gold Medal Logo",
      footerLink: [
        { name: "Certificate", url: "https://drive.google.com/file/d/1XFVrFFSS-6blyILIBnymOHd0VFm1crjv/view?usp=sharing" }
      ],
      desc: "I graduated with the highest CGPA in my Computer Science cohort, 3.78/4.0, and received the university's Gold Medal."
    },
    {
      title: "JYU Scholarship Award",
      subtitle: "Merit-based Scholarship, University of Jyväskylä, Finland",
      image: require("./assets/images/jyuLogo.png"),
      imageAlt: "JYU Scholarship Logo",
      footerLink: [
        { name: "Certificate", url: "https://drive.google.com/file/d/1ZfY1qLExQw9dSYjVwY3KRw9PKCKwYyN-/view?usp=sharing" }
      ],
      desc: "The University of Jyväskylä awarded me a merit-based scholarship for my MSc in Artificial Intelligence."
    },
    {
      title: "International Research Funding",
      subtitle: "Shanghai Sci-tech Co-research Program, Project No. 25HB2703300",
      image: require("./assets/images/jyuLogo.png"),
      imageAlt: "JYU Logo",
      footerLink: [],
      desc: "The Shanghai Sci-tech Co-research Program funded my MSc thesis research as part of the AI4HOPE project."
    },
    {
      title: "Certificate of Honor, University of Jyväskylä",
      subtitle: "Stipend for completing MSc studies within the target time frame, 2026",
      image: require("./assets/images/jyuLogo.png"),
      imageAlt: "JYU Logo",
      footerLink: [
        { name: "Certificate", url: "https://drive.google.com/file/d/1qa39S12ZhhZ3WOnEJyA06D773ipPuhHU/view?usp=drive_link" }
      ],
      desc: "The University of Jyväskylä awarded me a stipend for finishing my MSc within the target time."
    },
    {
      title: "Talent Sprint Challenge, JAMK",
      subtitle: "Entrepreneurship Program, April to May 2026",
      image: require("./assets/images/jamkLogo.jpg"),
      imageAlt: "JAMK Logo",
      footerLink: [
        { name: "Certificate", url: "https://drive.google.com/file/d/11K0ukgqvEvZ8eIqYgCG9KZNKpTmQziXP/view?usp=drive_link" }
      ],
      desc: "I took part in the Talent Sprint Challenge run by JAMK Talent Boost in Jyväskylä. I worked with CEOs of local tech startups on real business problems their companies were facing."
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
