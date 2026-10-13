const links = {
  email: "rayen.bakali@gmail.com",
  linkedin: "https://www.linkedin.com/in/rayen-bakali-50b987190/",
  github: "https://github.com/rayenbakali",
  behance: "https://www.behance.net/lazerxtv",
  upwork: "https://www.upwork.com/freelancers/~01b3d5087b7fde23b7",
};

const experiences = [
  {
    title: "Software Engineer",
    company: "TOR by Trabotyx",
    companyUrl: "https://tor.ag",
    location: "Utrecht, Netherlands",
    period: "Jan 2024 - Present",
    description:
      "Built the proof of concept for a real-time monitoring and control platform for weeding robots with Python, ROS2, and React. Led the end-to-end UI/UX for farmers, operators, and engineers, integrated ROS2 nodes for robot control and data collection, and built backend services for authentication, persistent storage, and real-time socket communication, tuned for low latency in the field.",
    technologies: ["React", "Python", "Flask", "ROS2", "WebSockets"],
  },
  {
    title: "Full Stack Developer | UI/UX",
    company: "Darido",
    companyUrl: "https://darido.net",
    location: "Munich, Germany",
    period: "Jun 2022 - Dec 2023",
    description:
      "Developed the full-stack e-commerce site with React, Express, Node, and MongoDB, and designed its UI. Drove SEO to #1 search rankings and optimized site speed with Lighthouse, built responsive modular React components, and ran usability testing with the UX team.",
    technologies: ["React", "Express.js", "MongoDB", "Node.js", "SEO", "Lighthouse"],
  },
  {
    title: "Full Stack Developer, Intern",
    company: "National Television Broadcasting Office",
    companyUrl: "https://www.telediffusion.net.tn/",
    location: "Tunis, Tunisia",
    period: "Feb 2021 - Jun 2021",
    description:
      "Developed the ONT website, including a landing page and a custom chatbot API, and engineered a frequency management platform for TV channels and radio stations with map-based views.",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Google Maps API"],
  },
  {
    title: "Freelance Designer & Developer",
    company: "Upwork",
    companyUrl: links.upwork,
    location: "Remote",
    period: "Jan 2020 - Present",
    description:
      "Brand identity, logos, and visual branding; React landing pages with SEO, responsive design, and A/B testing; UI/UX wireframes and usability testing; and Adobe Photoshop tutoring.",
    technologies: ["React", "JavaScript", "Figma", "Photoshop", "Illustrator"],
  },
];

const skills = [
  {
    label: "Languages & frameworks",
    items: ["JavaScript", "Python", "React", "Next.js", "Angular", "Node.js", "Express", "Zustand", "ROS2"],
  },
  {
    label: "Data",
    items: ["MongoDB", "MySQL", "NoSQL"],
  },
  {
    label: "Practices",
    items: ["DevOps", "CI/CD", "Jest", "Unit testing", "OOP", "Git", "SEO"],
  },
  {
    label: "Design",
    items: ["UI/UX", "Graphic design", "Brand identity", "Figma", "Photoshop"],
  },
  {
    label: "Spoken languages",
    items: ["English", "French", "Arabic"],
  },
];

const education = [
  {
    degree: "Software Engineering Degree",
    school: "Private Advanced School of Engineering and Technology",
    location: "Ghazela, Tunis",
    period: "2021 - Present",
    detail: "Major in Web and Internet Technologies",
  },
  {
    degree: "Bachelor in Computer Science",
    school: "University of Science Tunis El Manar",
    location: "Tunis",
    period: "2018 - 2021",
    detail: "Major in Computer Engineering",
  },
];

const achievements = [
  {
    title: "Second prize, best SDG project",
    detail: "Hackathon organized by SSD Team",
    date: "Mar 2023",
  },
  {
    title: "JavaScript Algorithms and Data Structures",
    detail: "freeCodeCamp certification",
    date: "Sep 2023",
    url: "https://www.freecodecamp.org/certification/rayenbakali/javascript-algorithms-and-data-structures",
  },
];

const projects = [
  {
    title: "Navero AI hiring platform",
    description:
      "All-in-one hiring platform that scores CVs, runs video screening, verifies skills, and structures interviews, taking teams from job post to shortlist in about three days.",
    image: "/projects/navero.jpg",
    technologies: ["Next.js", "React", "Tailwind CSS", "AI"],
    liveUrl: "https://www.navero.me",
    githubUrl: "",
  },
  {
    title: "Agricultural robotics console",
    description:
      "Operations dashboard for field robots: live telemetry, mission control, and alerts. Flask and ROS2 on the backend with a React front end tuned for low-latency updates.",
    image: "",
    technologies: ["React", "Flask", "ROS2", "WebSockets", "Python"],
    liveUrl: "https://tor.ag",
    githubUrl: "",
  },
  {
    title: "Makni Studio photography portfolio",
    description:
      "Portfolio site for photographer Ibrahim Makni: full-bleed hero slider, event gallery, and a contact form wired to email through Nodemailer.",
    image: "/projects/makni-studio.jpg",
    technologies: ["HTML", "CSS", "JavaScript", "Node.js", "Nodemailer"],
    liveUrl: "https://makni-gallery-website2.vercel.app",
    githubUrl: "",
  },
  {
    title: "Hassine Sioud key grip portfolio",
    description:
      "Personal site for a Tunisian film key grip: project credits, on-set galleries, light/dark theme, and an EmailJS contact form, with SEO meta via React Helmet.",
    image: "/projects/hassine-sioud.jpg",
    technologies: ["React", "React Bootstrap", "EmailJS", "React Helmet"],
    liveUrl: "https://hassin-sioud.vercel.app",
    githubUrl: "",
  },
  {
    title: "MERN e-commerce storefront",
    description:
      "Full-stack shop with product catalog, checkout flows, and admin tools. Focus on SEO, performance budgets, and reusable UI primitives shared across marketing and app surfaces.",
    image: "",
    technologies: ["React", "Express.js", "MongoDB", "Node.js", "Stripe"],
    liveUrl: "https://darido.net",
    githubUrl: "https://github.com/rayenbakali/MernEcommerce",
  },
  {
    title: "Broadcast operations toolkit",
    description:
      "Internal tools for scheduling and frequency coordination, including map-based views for transmitters. React and Node services with role-aware access for staff workflows.",
    image: "",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Google Maps API"],
    liveUrl: "",
    githubUrl: "",
  },
];

const services = [
  {
    title: "Full-stack web development",
    description:
      "Product-ready apps with React, Node, and pragmatic API design—auth, real-time channels, and deployment pipelines when you need them.",
  },
  {
    title: "Robotics & ROS integration",
    description:
      "Bridging ROS2 systems with web UIs: telemetry, control surfaces, and operator workflows that stay reliable in the field.",
  },
  {
    title: "UX, UI & graphic design",
    description:
      "Brand systems, marketing pages, and interface polish—from Figma to production—with an eye for clarity and conversion.",
  },
];

const partners = [
  {
    name: "TOR by Trabotyx",
    logo: "/partners/tor.svg",
    url: "https://tor.ag",
  },
  {
    name: "Darido",
    logo: "/partners/darido.png",
    url: "https://darido.net",
  },
  {
    name: "Binflow",
    logo: "/partners/binflow.png",
    url: "https://binflow.com",
  },
  {
    name: "A41 Studio",
    logo: "/partners/a41-studio.jpg",
    url: "https://www.instagram.com/a41.studio.tn/",
  },
];

const partnershipHighlights = [
  {
    label: "Product teams",
    detail: "Embedded with engineers and PMs to ship features on tight timelines.",
  },
  {
    label: "Agencies & startups",
    detail: "Landing pages, design systems, and handoff that developers can run with.",
  },
  {
    label: "Open collaboration",
    detail: "Available for retainers, milestones, or scoped sprints—remote-first.",
  },
];

export {
  links,
  experiences,
  skills,
  education,
  achievements,
  projects,
  services,
  partners,
  partnershipHighlights,
};
