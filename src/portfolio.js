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
  subTitle: emoji(
    "I'm an AI Engineer focusing on computer vision, deep learning, and backend development. I'm completing my MSc in Artificial Intelligence at the University of Jyväskylä, with my thesis on sleep data harmonization as part of the AI4Hope project. Previously at Rightware Oy in Helsinki, I improved object detection accuracy from 64% to 83% and shipped production-level AI features for Kanzi. I'm a published IEEE researcher and actively looking for AI and ML roles in Finland."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1cEe_pp0G07tnOVEU622JAqqqSYrPkL-t/view?usp=sharing",
  displayGreeting: true
};


// Social Media Links

const socialMediaLinks = {
  gmail: "itshmehdi@gmail.com",
  github: "https://github.com/DevHassanMehdi",
  linkedin: "https://www.linkedin.com/in/devhassanmehdi/",
  facebook: "https://www.facebook.com/devhassanmehdi/",
  instagram: "https://www.instagram.com/devhassanmehdi/",
  kaggle: "https://www.kaggle.com/devhassan",
  // medium: "https://medium.com/@saadpasta",
  // stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I Do",
  subTitle: "I build AI systems that ship. My focus is computer vision and deep learning, and I back it up with solid backend development and clean data pipelines.",
  skills: [
    emoji("Train and deploy computer vision models for real production environments, including object detection, image classification, and OCR pipelines."),
    emoji("Build and ship backend APIs and services using Python, FastAPI, and Flask."),
    emoji("Design data pipelines and manage SQL databases to support ML workflows and analytics."),
    emoji("Contribute across the full stack using Node.js, TypeScript, and React when the project needs it.")
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
  display: true // Set false to hide this section, defaults to true
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true,
  experience: [
  {
    Stack: "AI, Machine Learning & Deep Learning (PyTorch, TensorFlow, scikit-learn)",
    progressPercentage: "82%"
  },
  {
    Stack: "Computer Vision (YOLO, OpenCV, OCR)",
    progressPercentage: "88%"
  },
  {
    Stack: "Backend Development (Python, FastAPI, Flask)",
    progressPercentage: "78%"
  },
  {
    Stack: "Full-Stack Development (Node.js, TypeScript, React)",
    progressPercentage: "60%"
  }
]
,
  displayCodersrank: false
};


// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
  {
    schoolName: "University of Jyväskylä",
    logo: require("./assets/images/jyuLogo.png"),
    subHeader: "Master of Science in Artificial Intelligence",
    duration: "Expected Graduation: July 2026",
    desc: "Pursuing a Master's degree focused on modern AI systems and applied machine learning.",
    descBullets: [
      "Conducting thesis research on sleep data harmonization and ML model evaluation as part of the AI4Hope project, in collaboration with the University of Turku.",
      "Studying advanced topics in Machine Learning, Deep Learning, and Computer Vision.",
      "Building practical AI solutions through coursework, team projects, and industry collaborations."
    ]
  },
  {
    schoolName: "IQRA National University",
    logo: require("./assets/images/inuLogo.png"),
    subHeader: "Bachelor of Science in Computer Science",
    duration: "February 2019 - February 2023",
    desc: "Graduated as the top student in my batch with a CGPA of 3.78/4.0 (Gold Medal).",
    descBullets: [
      "Focused on core CS subjects such as AI, Data Mining, and Software Engineering.",
      "Completed hands-on projects across algorithms, programming fundamentals, and system design.",
      "Developed foundational skills in image processing, computer graphics, and human–computer interaction."
    ]
  }
]
};



// Work experience section

const workExperiences = {
  display: true, // Set it to true to show workExperiences Section
  experience: [
  {
    role: "AI Engineer Trainee – Helsinki, Finland",
    company: "Rightware Oy",
    companylogo: require("./assets/images/rightwareLogo.png"),
    date: "April 2025 – August 2025",
    desc: "I worked on production-level AI and computer vision systems for Kanzi, one of the world's leading automotive HMI tools, used by major car manufacturers globally.",
    descBullets: [
      "Object Detection: Improved object detection accuracy from 64% to 83% by migrating from YOLOv7-small to YOLOX-medium and introducing custom dataset augmentation, while maintaining real-time inference at ~30fps. The migration also resolved a licensing conflict, making the feature commercially viable for Rightware's clients.",
      "Font Recognition: Built a font classification pipeline trained on 30,000 synthetic images from Google's top 500 font library. Modified ResNet50 architecture to accept greyscale inputs, achieving 68% accuracy on ~1,000 real-world gauge cluster images — the first automated font recognition feature of its kind at Rightware.",
      "Layout Adaptation: Designed a resolution adaptation tool using Kiwisolver that recursively parsed and adjusted all UI elements in Kanzi .ka project files, reducing what previously required a full day of manual redesign to approximately 3 seconds.",
      "Toolchain & Collaboration: Collaborated with 2 senior engineers to deliver a core commercial feature spanning 55+ UI element types. Developed shared visualisation and debugging scripts using Matplotlib and OpenCV, adopted across the development team.",
      "Stakeholder Demos: Demoed features live to internal teams and client stakeholders in biweekly showcases alongside the CEO, presenting production-ready AI tooling to potential clients."
    ],
    technologies: [
      "Python", "PyTorch", "TensorFlow/Keras", "YOLO", "ResNet", "OpenCV",
      "Flask", "FastAPI", "EasyOCR", "KiwiSolver", "Git"
    ],
    summary:
      "I shipped production AI features for automotive clients and presented them directly to stakeholders alongside our CEO."
  },
  {
    role: "Backend & AI Engineer – Remote, Ukraine",
    company: "Ri Software (Startup)",
    companylogo: require("./assets/images/riLogo.jpeg"),
    date: "April 2023 – February 2024",
    desc: "I worked as a Backend and AI Engineer at an early-stage startup building an AI-driven business management platform designed to replace expensive data analyst roles for small businesses, covering sales forecasting, inventory management, HR automation, and ROI tracking.",
    descBullets: [
      "Platform Development: Built backend architecture and REST APIs using Python and Flask, serving 50 beta clients across sales, inventory, HR automation, and ROI tracking features.",
      "ML Integration: Integrated ML and deep learning models for monthly and seasonal sales forecasting, inventory demand planning, employee productivity scoring, and per-employee revenue analytics.",
      "Data Pipelines: Built data processing pipelines using Pandas, NumPy, and SciPy; designed and maintained PostgreSQL schemas to support multi-tenant business data across beta clients.",
      "Frontend Collaboration: Integrated backend features into the React and TypeScript frontend alongside a team of 20+, including new sales analytics dashboards and real-time messaging sections.",
    ],
    technologies: [
      "Python", "Flask", "FastAPI", "PostgreSQL",
      "Pandas", "NumPy", "SciPy",
      "Node.js", "TypeScript", "React", "Git"
    ],
    summary:
      "At Ri Software, I worked across the full stack, backend APIs, ML model integration, data pipelines, and frontend features, helping build a scalable AI platform that brought data science capabilities to small businesses that could not otherwise afford them."
  },

]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Recent Projects",
subtitle: "A selection of my most impactful AI & computer-vision projects.",
projects: [
  {
    // image: require("./assets/images/imageupliftLogo.png"),
    projectName: "ImageUpLift – AI Image Enhancer & Converter",
    projectDesc:
      "An AI-powered image enhancement and conversion web tool. Users can upload images, choose modes (enhance, vectorize, outline), preview results, track conversion history and view analytics. Built with FastAPI backend, AI pipelines (using CLIP / ESRGAN / OpenCV), and React-based frontend.",
    // projectHighlights: [
    //   "Enhance, vectorize, and outline modes with preview and history tracking.",
    //   "FastAPI backend orchestrating CLIP / ESRGAN / OpenCV pipelines.",
    //   "Frontend built with React; includes conversion analytics and session controls."
    // ],
    techStack: ["FastAPI", "ESRGAN", "OpenCV", "CLIP", "React", "Docker"],
    footerLink: [
      {
        name: "GitHub Repository",
        url: "https://github.com/DevHassanMehdi/ImageUpLift"
      }
    ]
  },
  {
    // image: require("./assets/images/dndsLogo.png"),
    projectName: "Driving Negligence Dissuader System (DNDS)",
    projectDesc:
      "A real-time computer-vision system for detecting driver drowsiness, lane deviation, and nearby objects (vehicles, animals, pedestrians). Built with OpenCV and YOLO, the system alerts drivers to improve road safety.",
    // projectHighlights: [
    //   "YOLO-based detection for lanes, vehicles, pedestrians, and obstacles.",
    //   "Drowsiness detection via facial landmarks and eye-aspect ratio monitoring.",
    //   "Real-time alerting pipeline with configurable sensitivity for road safety."
    // ],
    techStack: ["YOLO", "OpenCV", "Python", "TensorFlow", "Raspberry Pi"],
    footerLink: [
      {
        name: "GitHub Repository",
        url: "https://github.com/DevHassanMehdi/Driving_Negligence_Dissuader_System"
      }
    ]
  },
],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Recognitions and Accomplishments 🏆📜"),
subtitle:
  "A curated collection of my key awards, publications, and certifications.",

achievementsCards: [
  {
    title: "Gold Medal Award",
    subtitle: "Highest CGPA in the Bachelor’s Program – Iqra National University",
    image: require("./assets/images/goldmedalLogo.png"),
    imageAlt: "Gold Medal Logo",
    footerLink: [
      {
        name: "Certificate",
        url: "https://drive.google.com/file/d/1IZjJ9BccqxCm_dp_mNp8mLxok8LDVL3W/view?usp=sharing"
      }
    ],
    desc: "Awarded for securing the highest CGPA in my Computer Science cohort. This achievement highlights my consistency, academic commitment, and passion for learning."
  },
  {
    title: "JYU Scholarship Award",
    subtitle: "Merit-based Scholarship – University of Jyväskylä, Finland",
    image: require("./assets/images/jyuLogo.png"),
    imageAlt: "JYU Scholarship Logo",
    footerLink: [
      {
        name: "Certificate",
        url: "https://drive.google.com/file/d/1pdotUcegOjTFgrutM_838y84hTkvPJsD/view?usp=sharing"
      }
    ],
    desc: "Received a 50% tuition scholarship for strong academic performance and potential in the Master’s program in Artificial Intelligence."
  },
  {
    title: "Research Publication – MRI Brain Tumor Detection",
    subtitle: "IEEE Conference Paper on AI-based Medical Imaging",
    image: require("./assets/images/ieeeLogo.png"),
    imageAlt: "IEEE Logo",
    footerLink: [
      {
        name: "Certificate",
        url: "https://drive.google.com/file/d/1KArmJBinwXFHftl39TW8eEVObLjmnu5X/view?usp=sharing"
      }
    ],
    desc: "Co-authored a research paper introducing a Fuzzy Atrous Convolution model for tumor detection in MRI scans. Contributed to model architecture, experimentation, and analysis. Presented at an IEEE conference."
  },
  {
    title: "Degree Tutor – University of Jyväskylä",
    subtitle: "Mentor for International Students",
    image: require("./assets/images/jyyLogo.png"),
    imageAlt: "University of Jyväskylä Logo",
    footerLink: [
      {
        name: "Certificate",
        url: "https://drive.google.com/file/d/1yuB4AV57TvEVZmWnvMf4oCDZ-vxqWIPK/view?usp=sharing"
      }
    ],
    desc: "Served as a degree tutor, guiding new international students and supporting their academic and social integration. Completed official training on group leadership and intercultural communication."
  },
  {
    title: "Microsoft Azure Developer Associate",
    subtitle: "Digital Skills & Global Certification Program",
    image: require("./assets/images/azureLogo.png"),
    imageAlt: "Azure Certification Logo",
    footerLink: [
      {
        name: "Certificate",
        url: "https://drive.google.com/file/d/1gH1zb16ms7QoS4glPHcJ24xLV8L5Rhy0/view?usp=sharing"
      }
    ],
    desc: "Earned certification demonstrating proficiency in Azure cloud services, app development, deployment workflows, and CI/CD pipelines."
  }
],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
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
  display: false // Set false to hide this section, defaults to true
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
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Get in Touch 📬"),
  subtitle:
    "Whether you have an opportunity, a challenge, or just want to connect, feel free to reach out!",
//  number: "+358-417422471",
  email_address: "itshmehdi@gmail.com"
};


// Twitter Section

const twitterDetails = {
  userName: "devhassanmehdi", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

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
