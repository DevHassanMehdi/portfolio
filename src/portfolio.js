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
    "I am a Master's student specializing in Artificial Intelligence at the University of Jyväskylä, Finland. My work focuses on innovative solutions in machine learning, computer vision, and backend development. I am proud to be the recipient of a gold medal for outstanding academic performance during my Bachelor’s degree in Computer Science. Through this portfolio, I showcase my projects and contributions that reflect my passion for technology and problem-solving."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1Mre7QUf1n9nsBj2VzA6UTqw-OafWIUtZ/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
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
  title: "Core Competencies",
  subTitle:
    "A VERSATILE PYTHON DEVELOPER WITH A DIVERSE SKILLSET IN ARTIFICIAL INTELLIGENCE, MACHINE LEARNING, AND SOFTWARE DEVELOPMENT.",
  skills: [
    emoji("⚡ Develop AI models leveraging machine learning and deep learning principles."),
    emoji("⚡ Create AI and computer vision applications tailored to specific business needs."),
    emoji("⚡ Integrate AI capabilities into custom software solutions and APIs."),
    emoji("⚡ Design robust APIs that ensure seamless functionality for mobile and desktop applications.")
  ],


  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "php",
      fontAwesomeClassname: "fab fa-php"
    },
    {
      skillName: "git",
      fontAwesomeClassname: "fab fa-git"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, // Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Python Programming",
      progressPercentage: "95%"
    },
    {
      Stack: "Computer Vision, Machine Learning & Deep Learning",
      progressPercentage: "90%"
    },
    {
      Stack: "Backend Development (Flask, Django)",
      progressPercentage: "90%"
    },
    {
      Stack: "Data Science and Analytics (Pandas, NumPy, Scikit-learn)",
      progressPercentage: "85%"
    },
    {
      Stack: "Frontend Development (HTML, CSS, JavaScript, React)",
      progressPercentage: "80%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section; change your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
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
      role: "Team Lead - Backend / Data Science",
      company: "Ri Software",
      companylogo: require("./assets/images/riLogo.jpeg"),
      date: "April 2023 – February 2024",
      desc: "At Ri Software, a Ukrainian-based software company, I led a dedicated team of backend developers and data scientists in the creation of innovative custom software solutions aimed at driving business growth. My leadership focused on fostering collaboration and ensuring high-quality deliverables.",
      descBullets: [
        "Collaborated closely with stakeholders to guarantee timely delivery of high-quality products.",
        "Managed regular code deployments while maintaining system uptime and reliability.",
        "Conducted thorough code reviews, providing constructive feedback to enhance team performance.",
        "Designed and implemented efficient backend components to optimize application performance.",
        "Integrated advanced machine learning and deep learning algorithms into our software offerings.",
        "Analyzed data to identify opportunities for improvement and innovation.",
        "Developed robust APIs that support seamless functionality for mobile and desktop applications.",
        "Worked alongside cross-functional teams to establish clear project goals and deliverables."
      ]
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
  title: "Big Projects",
  subtitle: "AS A DILIGENT COMPUTER SCIENTIST, I HAVE BEEN INVOLVED IN SEVERAL IMPACTFUL PROJECTS, INCLUDING",
  projects: [
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
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "JYU Scholarship Award",
      subtitle: "Awarded the JYU Scholarship for my academic excellence in the Master's program at the University of Jyväskylä.",
      image: require("./assets/images/jyuLogo.png"), // Update with the actual logo or relevant image
      imageAlt: "JYU Scholarship Logo",
      footerLink: [
        // {
        //   name: "Scholarship Details",
        //   url: "https://"
        // }
      ],
      desc: "The JYU Scholarship covers 50% of my tuition fees for the Master's program, recognizing my commitment to academic excellence and progress in my studies. This scholarship not only alleviates financial burdens but also motivates me to continue striving for high performance in my academic pursuits."
    },
    {
      title: "Fuzzy-Based Atrous Convolution for Brain Tumor Detection Using MRI",
      subtitle: "Co-author of a research paper submitted to an IEEE journal, focusing on innovative AI techniques for medical imaging.",
      image: require("./assets/images/ieeeLogo.png"), // Update with the actual logo or relevant image
      imageAlt: "IEEE Journal Logo",
      footerLink: [
        // {
        //   name: "Under Review",
        //   url: "https://"
        // }
      ],
      desc: "This research introduces the Fuzzy Atrous Convolution (FAC) model, enhancing brain tumor detection accuracy using MRI scans while significantly reducing the number of trainable parameters. The study demonstrates high classification accuracies across multiple datasets, showcasing the potential of fuzzy logic in improving AI adaptability and robustness in medical applications. As a co-author, I contributed to the development of the methodology and analysis of results, collaborating with a team of experts in the field."
    },
    {
      title: "Azure Developer Associate",
      subtitle:
        "I was a part of the Digital Skills and Global Certification Program conducted by the Gen Web Services.",
      image: require("./assets/images/azureLogo.png"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        // {
        //   name: "Certification",
        //   url: "https://drive.google.com/file/d/1hdsLsFOwwQ5tORiQsCcOabDUjnt_WgIm/view?usp=sharing"
        // },
        // {
        //   name: "Award Letter",
        //   url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        // },
        // {
        //   name: "Google Code-in Blog",
        //   url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        // }
      ]
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
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+358-417422471",
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
