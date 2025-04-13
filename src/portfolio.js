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
  username: "Mayukh Sinha",
  title: "Hi all, I'm Mayukh",
  subTitle: emoji(
    "A passionate Full Stack Software Developer 🚀 having an experience of building Web and Mobile applications with JavaScript / Reactjs / Nodejs / ASP.NET and cloud technologies like AWS."
  ),
  resumeLink: "/resume.pdf", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/neu-msinha",
  linkedin: "https://www.linkedin.com/in/mayukh99/",
  gmail: "sinha.may@northeastern.edu",
  gitlab: "https://gitlab.com",
  facebook: "https://www.facebook.com",
  medium: "https://medium.com/",
  stackoverflow: "https://stackoverflow.com/",
  instagram: "https://instagram.com/",
  twitter: "https://twitter.com/",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    ),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji(
      "⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "swift",
      fontAwesomeClassname: "fab fa-swift"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Northeastern University",
      logo: require("./assets/images/northeastern-university-logo.jpg"),
      subHeader: "Master of Science in Software Engineering Systems",
      duration: "August 2024 - May 2026",
      desc: ""
      // descBullets: [
      //   "Distributed Operating Systems Principles",
      //   "Database Management Systems",
      //   "Computer Network Security",
      //   "Advanced Data Structures and Algorithms",
      //   "Software Engineering",
      //   "Software Testing and Quality Assurance"
      // ]
    },
    {
      schoolName: "Jaypee Institute of Information Technology",
      logo: require("./assets/images/jiit-logo.jpeg"),
      subHeader: "Bachelor of Science in Electronics and Communication",
      duration: "July 2017 - May 2021",
      desc: ""
      // descBullets: [
      //   "Software Development Fundamentals",
      //   "Data Structures and Algorithms",
      //   "Object Oriented Programming",
      //   "Database Management Systems",
      //   "Operating Systems",
      //   "Computer Networks",
      //   "Web Technologies",
      //   "Software Engineering",
      //   "Web Security",
      //   "Mobile Application Development",
      //   "Artificial Intelligence",
      //   "Machine Learning"
      // ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "DevOps",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Master's Student",
      company: "Northeastern University",
      companylogo: require("./assets/images/northeastern-university-logo.jpg"),
      date: "October 2024 - Present",
      desc: "At Northeastern, I completed coursework in system design, cloud computing, and web UX, and led two major projects: NUConnect—a real-time video and messaging app—and Cloud Infra, where I built CI/CD pipelines and automated infrastructure on AWS and GCP using Terraform and Packer."
      // descBullets: [
      //   "Spearheaded the development and optimization of a React and Django-based educational platform, impacting over 100 students.",
      //   "Enhanced platform efficiency, achieving a 30% reduction in computation on virtual cores using Docker and ALB.",
      //   "Pioneered the use of Flutter applications for real-time health metric sharing, reducing smartwatch battery consumption by 22%."
      // ]
    },
    {
      role: "Software Engineer",
      company: "SOTI Inc",
      companylogo: require("./assets/images/soti.png"),
      date: "Feburary 2021 - August 2024",
      desc: "At SOTI, I engineered backend optimizations for MobiControl using C# and ASP.NET, led a cost-saving device farm initiative, improved CI/CD with DevOps, integrated real-time features, and trained 100+ new hires in .NET and AWS—earning an MVP award for impactful innovation and leadership."
      // descBullets: [
      //   "Led the development of a React-based Monaco editor code editor, resulting in 7 million yearly code submissions.",
      //   "Engineered a JavaScript-based video streaming solution, enhancing user engagement by 50% and reducing instructor load.",
      //   "Optimized JavaScript and Webpack configurations, reducing dashboard load times significantly."
      // ]
    },
    // {
    //   role: "Software Engineer Intern",
    //   company: "Remedico",
    //   companylogo: require("./assets/images/remedico-logo.png"),
    //   date: "May 2020 - August 2020",
    //   desc: "At Remedico, I improved the codebase by developing reusable React components and updating the Doctor's onboarding portal with React Native, focusing on UI enhancements and code efficiency."
    //   // descBullets: [
    //   //   "Developed reusable React components, reducing codebase by 30% and improving code quality.",
    //   //   "Modernized the Doctor's onboarding portal using React Native, enhancing user interface and experience."
    //   // ]
    // }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "Some of my major projects",
  projects: [
    {
      image: require("./assets/images/soti.png"),
      projectName: "SOTI India",
      projectDesc:
        "Created an in House Device Farm for the company to automate and connect multiple mobile devices.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://www.soti.net/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/northeastern-university-logo.jpg"),
      projectName: "NUConnect",
      projectDesc:
        "A transformative educational platform project that helps people connect thorugh chat and call for Northeastern",
      footerLink: [
        {
          name: "Code Link",
          url: "https://github.com/INFO6150-Project/NUConnect"
        }
      ]
    },
    {
      image: require("./assets/images/aws-logo.jpeg"),
      projectName: "Cloud Infra",
      projectDesc:
        "A project to build a CI/CD pipeline and automate the infrastructure using Terraform and Packer.",
      footerLink: [
        {
          name: "Code Link",
          url: "https://github.com/orgs/CSYE6225-NetworkStructures/repositories"
        }
      ]
    }
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
      title: "SOTI MVP 2023",
      subtitle:
        "Selected as MVP for bringing out an original idea that saved 150k per quarter in 2023.",
      image: require("./assets/images/soti.png"),
      imageAlt: "SOTI LOGO",
      footerLink: [
        {
          name: "Company Website",
          url: "https://soti.net/"
        }
      ]
    },
    {
      title: "DSC Lead",
      subtitle:
        "Appointed as DSC Lead for the year 2021-2022 at Jaypee Institute of Information Technology, Noida, India.",
      image: require("./assets/images/dsc-logo.png"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Events",
          url: "https://www.linkedin.com"
        }
      ]
    },
    {
      title: "Hackathon Event Head",
      subtitle:
        "Organised and led several technical events at Hackathon 2019 at JIIT Noida.",
      image: require("./assets/images/jiit-logo.jpeg"),
      imageAlt: "JIIT Logo",
      footerLink: [
        {
          name: "College Website",
          url: "https://www.jiit.ac.in/"
        }
      ]
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
  blogs: [],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    // {
    //   title: "With scale React and React Native Web Apps",
    //   subtitle: "Build and Scale",
    //   event_url:
    //     "https://www.linkedin.com/posts/build-and-scale_webapps-react-reactnative-activity-6640689248817254400-PbJg?utm_source=share&utm_medium=member_desktop"
    // }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: ["https://www.youtube.com/embed/oCMFRl6a9t4"],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+1-(857) 225 5986",
  email_address: "sinha.may@northeastern.edu"
};

// Twitter Section

const twitterDetails = {
  userName: "mayukhsinha", //Replace "twitter" with your twitter username without @
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
