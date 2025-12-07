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
    "I recently worked at Rightware Oy, Helsinki as a Junior AI Engineer on computer vision and deep learning projects. I’m now completing my Master’s in Artificial Intelligence at the University of Jyväskylä, Finland. I am also a proud recipient of a Gold Medal for my academic excellence."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1Mre7QUf1n9nsBj2VzA6UTqw-OafWIUtZ/view?usp=sharing",
  displayGreeting: true
};


// Social Media Links

const socialMediaLinks = {
  gmail: "hassanmehdi510@gmail.com",
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
  subTitle:
    "I’m a software developer focused on AI, computer vision, and modern ML systems. My main strength is building intelligent applications, and I also work confidently across backend, frontend, and full-stack development.",
  skills: [
    emoji("Develop AI systems, including deep learning, computer vision, generative AI, and LLM-based solutions."),
    emoji("Build backend APIs and services with Python, FastAPI, and Flask."),
    emoji("Create full-stack features using Node.js, TypeScript, and React."),
    emoji("Design and manage SQL databases and implement clean, reliable data pipelines.")
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
  { skillName: "Generative AI / LLMs", fontAwesomeClassname: "fas fa-robot" },

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
    progressPercentage: "95%"
  },
  {
    Stack: "Computer Vision (YOLO, OpenCV, OCR)",
    progressPercentage: "90%"
  },
  {
    Stack: "Generative AI & LLM Development (LangChain, modern AI frameworks)",
    progressPercentage: "85%"
  },
  {
    Stack: "Backend Development (Python, FastAPI, Flask)",
    progressPercentage: "90%"
  },
  {
    Stack: "Full-Stack Development (Node.js, TypeScript, React)",
    progressPercentage: "80%"
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
    duration: "Expected Graduation: June 2026",
    desc: "Pursuing a Master's degree focused on modern AI systems and applied machine learning.",
    descBullets: [
      "Studying advanced topics in Machine Learning, Deep Learning, and Computer Vision.",
      "Working on AI research projects involving ML models, data-driven systems, and real-world applications.",
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
    role: "Junior AI Engineer – Helsinki, Finland",
    company: "Rightware Oy",
    companylogo: require("./assets/images/rightwareLogo.png"),
    date: "April 2024 – August 2024",
    desc: "Worked on AI and computer vision projects for automotive HMI systems at a leading automotive UX software company.",
    descBullets: [
      "Improved YOLO-based object detection models used in automotive interface tooling.",
      "Developed and trained ResNet-based classifiers for font and UI element recognition.",
      "Built diagnostic tools and backend utilities using Flask and FastAPI for model evaluation and debugging.",
      "Designed a UI layout adaptation system using constraint logic to ensure resolution-responsive behavior.",
      "Collaborated with senior engineers to integrate ML features into the Kanzi HMI toolchain."
    ],
    technologies: [
      "Python", "PyTorch", "TensorFlow/Keras", "YOLO", "ResNet", "OpenCV",
      "Flask", "FastAPI", "EasyOCR", "KiwiSolver", "Git"
    ],
    summary:
      "At Rightware, I contributed to improving visual perception models and intelligent layout systems while building tools and workflows to support ML experimentation and integration."
  },

  {
  role: "Backend & AI (Startup) – kyiv ukraine",
  company: "Ri Software",
  companylogo: require("./assets/images/riLogo.jpeg"),
  date: "April 2023 – February 2024",
  desc: "Worked as a Backend and AI Developer in a startup building an integrated business management platform.",
  descBullets: [
    "Developed backend architecture and REST APIs using Python and Flask.",
    "Built AI-driven features, including prediction models, analytics modules, and recommendation systems.",
    "Contributed to frontend development using Node.js and TypeScript for dashboards and user-facing components.",
    "Designed and managed the PostgreSQL database, ensuring efficient queries and smooth integration with backend services.",
  ],
  technologies: [
    "Flask", "Pandas", "NumPy", "SciPy",
    "Node.js", "TypeScript", "React",
    "PostgreSQL", "OpenCV", "Matplotlib", "Git"
  ],
  summary:
    "Worked across AI development, backend engineering, frontend features, and database management to help build a scalable, data-driven platform in a fast-moving startup environment."
}
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
        name: "Certification",
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
  email_address: "hassanmehdi510@gmail.com"
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
