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
    "AI Master's student at the University of Jyväskylä, Finland, with hands-on experience in Computer Vision and Deep Learning. Currently at Rightware Oy as an AI Engineer Trainee, contributing to production-grade smart layout tools, object detection pipelines, and OCR solutions. Awarded a Gold Medal for academic excellence — a testament to both dedication and passion for this field."
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
    "I’m a hands-on Python developer with a focus on AI, computer vision, and smart software systems. I enjoy building intelligent tools that actually work in the real world.",
  skills: [
    emoji("⚡ Build and train deep learning models for tasks like detection, classification, and OCR."),
    emoji("⚡ Improve and deploy YOLO, ResNet, and OCR-based models into real products."),
    emoji("⚡ Develop smart layout engines using constraint solvers like KiwiSolver."),
    emoji("⚡ Create backend services and tools using Flask and FastAPI to serve and debug models."),
    emoji("⚡ Combine AI with UI/UX logic to power adaptive interfaces and HMI systems.")
  ],


  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
  { skillName: "Python", fontAwesomeClassname: "fab fa-python" },
  { skillName: "TensorFlow", fontAwesomeClassname: "fas fa-brain" },
  { skillName: "Keras", fontAwesomeClassname: "fas fa-brain" },
  { skillName: "OpenCV", fontAwesomeClassname: "fas fa-camera" },
  { skillName: "YOLO", fontAwesomeClassname: "fas fa-crosshairs" },
  { skillName: "KiwiSolver", fontAwesomeClassname: "fas fa-cogs" },
  { skillName: "Flask", fontAwesomeClassname: "fas fa-flask" },
  { skillName: "FastAPI", fontAwesomeClassname: "fas fa-bolt" },
  { skillName: "SQL", fontAwesomeClassname: "fas fa-database" },
  { skillName: "Git", fontAwesomeClassname: "fab fa-git" },
  { skillName: "Docker", fontAwesomeClassname: "fab fa-docker" },
  { skillName: "JavaScript", fontAwesomeClassname: "fab fa-js" },
  { skillName: "HTML5", fontAwesomeClassname: "fab fa-html5" },
  { skillName: "CSS3", fontAwesomeClassname: "fab fa-css3-alt" },
  { skillName: "React", fontAwesomeClassname: "fab fa-react" },
  { skillName: "Linux / Bash", fontAwesomeClassname: "fas fa-terminal" }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true,
  experience: [
    {
      Stack: "Python for AI, backend, and automation",
      progressPercentage: "95%"
    },
    {
      Stack: "Machine Learning & Deep Learning (TensorFlow, Keras, scikit-learn)",
      progressPercentage: "90%"
    },
    {
      Stack: "Computer Vision with YOLO, OpenCV, and OCR",
      progressPercentage: "90%"
    },
    {
      Stack: "API & Backend Development (Flask, FastAPI, Django)",
      progressPercentage: "85%"
    },
    {
      Stack: "Smart UI layout systems and constraint solvers",
      progressPercentage: "80%"
    }
  ],
  displayCodersrank: false
};


// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "University of Jyväskylä",
      logo: require("./assets/images/jyuLogo.png"), // Update with the actual logo path
      subHeader: "Master of Science in Artificial Intelligence",
      duration: "Expected Graduation: September 2026",
      desc: "Currently pursuing a Master's degree with a focus on advanced AI techniques and applications.",
      descBullets: [
        "Studying cutting-edge topics in Machine Learning, Deep Learning, and Computer Vision.",
        "Participating in collaborative research projects with faculty and industry experts.",
        "Engaging in practical applications of AI through coursework and hands-on projects."
      ]
    },
    {
      schoolName: "IQRA NATIONAL UNIVERSITY",
      logo: require("./assets/images/inuLogo.png"),
      subHeader: "Bachelor of Science in Computer Science",
      duration: "February 2019 - February 2023",
      desc: "Graduated as the top student in my batch with a CGPA of 3.78 out of 4.0.",
      descBullets: [
        "Focused on core areas such as Artificial Intelligence, Data Mining, and Information Security.",
        "Engaged in hands-on projects in Programming Fundamentals, Object-Oriented Programming, and Software Engineering.",
        "Developed critical skills in Digital Image Processing, Computer Graphics, and Human-Computer Interaction.",
        "Collaborated with industry professionals during workshops and seminars, enhancing my practical knowledge and networking.",
        "Gained proficiency in programming languages including C++, C#, Java, Python, JavaScript, PHP, HTML, CSS, MATLAB, SQL, and GIT."
      ]
    }
  ]
};



// Work experience section

const workExperiences = {
  display: true, // Set it to true to show workExperiences Section
  experience: [
    {
  role: "AI Engineer Trainee – Automotive HMI & Deep Learning",
  company: "Rightware Oy",
  companylogo: require("./assets/images/rightwareLogo.png"),
  date: "March 2024 – August 2025",
  desc: "Rightware Oy is a Helsinki-based pioneer in automotive HMI software tools. During my 4-month fixed-term traineeship, I focused on AI initiatives that strengthened layout intelligence and visual perception models.",
  descBullets: [
    "Improved and retrained object detection models, significantly enhancing accuracy and stability for in-house use.",
    "Trained and evaluated custom ResNet-18 and ResNet-50 models for font classification using large-scale synthetic datasets tailored for UI needs.",
    "Developed multiple Flask-based diagnostic APIs and tools to analyze training performance, detect overfitting, and support debugging during model iteration cycles.",
    "Conducted deep error analysis and model introspection to guide architectural and data refinement decisions across model training pipelines.",
    "Designed and implemented a UI layout adaptation engine, ensuring resolution-aware UI behavior.",
    "Contributed to production-integrated HMI features in collaboration with senior engineers and UI toolchain architects."
  ],
  technologies: [
    "YOLOv5/YOLOX",
    "ResNet18/ResNet50 with TensorFlow/Keras",
    "Flask-based APIs for diagnostics and introspection",
    "Customized OCR modules using EasyOCR",
    "Constraint-based logic systems for UI scaling",
    "FastAPI, JSON parsing utilities, Git, and project configuration tools"
  ],
  mainFeatures: [
    "Seamless integration of AI-enhanced detection models into the HMI toolchain.",
    "Synthetic data-driven font classification framework with transfer learning backbone.",
    "Interactive diagnostic interfaces to inspect training outputs and dataset distributions.",
    "Robust UI layout scaling system powered by constraints and heuristics.",
    "Improved tooling to support AI experimentation and embedding into HMI workflows."
  ],
  summary:
    "At Rightware Oy, I focused on training, evaluating, and deploying AI models for object detection and font recognition within the Kanzi platform. My work helped teams transition to stronger, production-ready ML models while enabling UI layout adaptation. I developed tools, fine-tuned architectures, and solved complex AI pipeline challenges in a fast-paced environment."
},
    {
      role: "Team Lead - Backend / Data Science",
      company: "Ri Software",
      companylogo: require("./assets/images/riLogo.jpeg"),
      date: "April 2023 – February 2024",
      desc: "At Ri Software, a Ukrainian-based software company, I led a dedicated team of backend developers and data scientists in the creation of innovative custom software solutions aimed at driving business growth.",
      descBullets: [
        "Collaborated closely with stakeholders to guarantee timely delivery of high-quality products.",
        "Managed regular code deployments while maintaining system uptime and reliability.",
        "Conducted thorough code reviews, providing constructive feedback to enhance team performance.",
        "Designed and implemented efficient backend components to optimize application performance.",
        "Integrated advanced machine learning and deep learning algorithms into our software offerings.",
        "Analyzed data to identify opportunities for improvement and innovation.",
        "Developed robust APIs that support seamless functionality for mobile and desktop applications.",
        "Worked alongside cross-functional teams to establish clear project goals and deliverables."
      ],
      technologies: [
        "Python for back-end and Data Science Algorithms.",
        "TypeScript with React for front-end development.",
        "Flask for API development.",
        "Pandas, NumPy, SciPy for data processing.",
        "PyQt, PyTest, OpenCv, Matplotlib for data visualization.",
        "Postgres Database."
      ],
      mainFeatures: [
        "Hierarchical structure and employee statistics.",
        "Turnover rates, ratings, diversity data, and predictive analysis.",
        "Project tasks and statistics.",
        "Cost analysis, workforce planning, and productivity insights.",
        "Providers and purchase orders.",
        "Product spending analysis and forecasting.",
        "Customers, sale orders, products, and services.",
        "Performance metrics, sales forecasting, and growth insights.",
        "Accounts, transactions, bills, budgets, reports.",
        "Accounting details and cost allocation forecasting.",
        "Warehouses, inventory, shipments.",
        "Warehouse statistics and forecasting.",
        "NLP-based advanced searching.",
        "Custom machine learning recommendation system.",
        "Employee-task assignment recommendations.",
        "Chat functionality for seamless communication."
      ],
      summary:
        "This innovative software integrated advanced technologies like artificial intelligence, machine learning, and deep learning to offer functionalities such as efficient project management, streamlined purchasing processes, optimized sales strategies, robust financial management, and effective warehouse management. By leveraging these cutting-edge features, the application sought to equip small businesses with the tools needed to make informed decisions, improve productivity, and drive success in a competitive market landscape."
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
  title: "Big Projects",
  subtitle: "AS A DILIGENT COMPUTER SCIENTIST, I HAVE BEEN INVOLVED IN SEVERAL IMPACTFUL PROJECTS, INCLUDING",
  projects: [
    {
  image: require("./assets/images/rightwareLogo.png"),
  projectName: "AI Model Training for HMI Tools – Rightware",
  projectDesc:
    "As part of my fixed-term role at Rightware Oy, I retrained and deployed improved YOLO-based object detectors, built a font classification pipeline using ResNet models, and created smart layout systems for automotive UI screens using constraint solvers.",
  footerLink: [
    {
      name: "Company Website",
      url: "https://www.rightware.com"
    }
  ]
    },
    {
      image: require("./assets/images/riLogo.jpeg"),
      projectName: "Ri Software",
      projectDesc: "RI Software is an innovative business management solution that enables small businesses to not only showcase and sell their products and services but also gain valuable insights through integrated AI algorithms, fostering growth and success",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://ri-software.com.ua"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/dndsLogo.png"),
      projectName: "Driving Negligence Dissuager System",
      projectDesc: "DNDS is a vehicle safety recommendation system that can be fitted in all kinds of vehicles. The system detects drivers' drowsiness, lane lines, lane deviation, and objetcs like other vehicles, animals and pedestrians etc. The system alerts the driver if necessory to get them to focus on the raod and avoid mishaps",
      footerLink: [
        {
          name: "Visit Project Repository",
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
    "A SUMMARY OF MY ACHIEVEMENTS, PUBLICATIONS, AND CERTIFICATIONS!",

  achievementsCards: [
    {
      title: "Gold Medal Award",
      subtitle: "Awarded for securing the highest CGPA in my Bachelor's degree in Computer Science at Iqra National University.",
      image: require("./assets/images/goldmedalLogo.png"), // Update with the actual logo or relevant image
      imageAlt: "Gold Medal Logo",
      footerLink: [
         {
           name: "Certificate",
           url: "https://drive.google.com/file/d/1IZjJ9BccqxCm_dp_mNp8mLxok8LDVL3W/view?usp=sharing"
         }
      ],
      desc: "Received in recognition of my academic excellence and top-ranking performance throughout my Bachelor's studies. This award reflects my discipline, curiosity, and long-standing passion for computer science."
    },
    {
      title: "Fuzzy-Based Atrous Convolution for Brain Tumor Detection Using MRI",
      subtitle: "Co-authored research paper submitted to IEEE journal on AI-based medical imaging.",
      image: require("./assets/images/ieeeLogo.png"), // Update with the actual logo or relevant image
      imageAlt: "IEEE Journal Logo",
      footerLink: [
         {
           name: "Certificate",
           url: "https://drive.google.com/file/d/1KArmJBinwXFHftl39TW8eEVObLjmnu5X/view?usp=sharing"
         }
      ],
      desc: "This study proposes a novel Fuzzy Atrous Convolution model to improve tumor detection accuracy in MRI scans while reducing model complexity. I contributed to the architecture and experimental analysis. The paper is currently under review by an IEEE journal."
    },
    {
      title: "JYU Scholarship Award",
      subtitle: "Granted by the University of Jyväskylä, Finland, for academic excellence in the AI Master's program.",
      image: require("./assets/images/jyuLogo.png"), // Update with the actual logo or relevant image
      imageAlt: "JYU Scholarship Logo",
      footerLink: [
         {
           name: "Certificate",
           url: "https://drive.google.com/file/d/1pdotUcegOjTFgrutM_838y84hTkvPJsD/view?usp=sharing"
         }
      ],
      desc: "This merit-based scholarship covered 50% of my tuition fees and recognized my academic strength and potential in the field of Artificial Intelligence during my Master's studies in Finland."
    },
    {
      title: "Degree Tutor – University of Jyväskylä",
      subtitle: "Guided new international degree students during autumn 2025.",
      image: require("./assets/images/jyyLogo.png"), // Replace with the actual University of Jyväskylä logo or relevant image
      imageAlt: "University of Jyväskylä Logo",
      footerLink: [
         {
           name: "Certificate",
           url: "https://drive.google.com/file/d/1yuB4AV57TvEVZmWnvMf4oCDZ-vxqWIPK/view?usp=sharing"
         }
      ],
      desc: "Acted as a degree tutor in a group leading role for new students at the University of Jyväskylä. The role involved mentoring up to 10 students, providing academic and social guidance, and supporting their transition into university life. Completed official tutor training focused on group dynamics, leadership, and intercultural communication."
    },
    {
      title: "Azure Developer Associate",
      subtitle:
        "Earned via the Digital Skills and Global Certification Program by Gen Web Services.",
      image: require("./assets/images/azureLogo.png"),
      imageAlt: "Azure Certification Logo",
      footerLink: [
         {
           name: "Certification",
           url: "https://drive.google.com/file/d/1gH1zb16ms7QoS4glPHcJ24xLV8L5Rhy0/view?usp=sharing"
         },
        // {
        //   name: "Award Letter",
        //   url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        // },
        // {
        //   name: "Google Code-in Blog",
        //   url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        // }
      ],
      desc: "This certification validated my foundational cloud computing skills using Microsoft Azure, including hands-on experience with app services, functions, and CI/CD tools in real-world development scenarios."
    },
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
    "Whether you have an opportunity, a challenge, or just want to connect — feel free to reach out!",
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
