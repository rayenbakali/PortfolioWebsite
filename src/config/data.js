const links = {
  email: "rayen.bakali@gmail.com",
  phone: "+31627558810",
  phoneDisplay: "+31 6 27 55 88 10",
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
    logo: "/partners/tor.svg",
    location: "Utrecht, Netherlands",
    period: "Jan 2024 - Present",
    current: true,
    description:
      "Engineering the web and robotics platform behind TOR's laser-weeding robots, and leading its end-to-end UI/UX for farmers, operators, and engineers.",
    highlights: [
      {
        label: "Real-time control platform",
        text: "Built and maintained the web and robotics platform that runs agricultural robot operations day to day.",
      },
      {
        label: "ROS2 ↔ web bridge",
        text: "Designed the integration layer that streams live telemetry to the browser and sends commands back to the robots.",
      },
      {
        label: "Operator dashboards",
        text: "Developed field monitoring and control UIs with React, Flask, and WebSockets.",
      },
      {
        label: "Multi-actor sockets",
        text: "Implemented a socket architecture that keeps operators, engineers, and farmers in sync on the same robots.",
      },
      {
        label: "GPS/RTK and sensor streaming",
        text: "Worked across cloud and on-robot systems to stream and visualize positioning and sensor data.",
      },
      {
        label: "Field-grade reliability",
        text: "Cut latency and hardened the system for real-time robotic operations in field conditions.",
      },
    ],
    technologies: ["React", "Python", "Flask", "ROS2", "WebSockets", "GPS/RTK"],
  },
  {
    title: "Full Stack Developer | UI/UX",
    company: "Darido",
    companyUrl: "https://darido.net",
    logo: "/partners/darido.png",
    location: "Munich, Germany",
    period: "Jun 2022 - Dec 2023",
    description:
      "Designed and built Darido's e-commerce experience end to end, from the first wireframe to the production stack.",
    highlights: [
      {
        label: "Full-stack storefront",
        text: "Developed the e-commerce site on React, Express, Node, and MongoDB.",
      },
      {
        label: "#1 search rankings",
        text: "Led SEO work that took the store to the top of search results.",
      },
      {
        label: "Performance",
        text: "Optimized site speed with Lighthouse audits and lean, modular React components.",
      },
      {
        label: "Design-led UX",
        text: "Crafted responsive UIs and ran usability testing alongside the UX designers.",
      },
    ],
    technologies: ["React", "Express.js", "MongoDB", "Node.js", "SEO", "Lighthouse"],
  },
  {
    title: "Full Stack Developer, Intern",
    company: "National Television Broadcasting Office",
    companyUrl: "https://www.telediffusion.net.tn/",
    location: "Tunis, Tunisia",
    period: "Feb 2021 - Jun 2021",
    description:
      "Shipped web tools for Tunisia's national broadcasting office, from its public site to internal frequency planning.",
    highlights: [
      {
        label: "ONT website",
        text: "Developed the public landing page with a custom chatbot API.",
      },
      {
        label: "Frequency management platform",
        text: "Engineered a map-based tool for planning TV and radio frequencies with React, Node, MongoDB, and Google Maps.",
      },
    ],
    technologies: ["React", "Node.js", "Express", "MongoDB", "Google Maps API"],
  },
  {
    title: "Freelance Designer & Developer",
    company: "Upwork",
    companyUrl: links.upwork,
    location: "Remote",
    period: "Jan 2020 - Present",
    current: true,
    description:
      "Independent design and development work for clients on Upwork, from brand identity to production websites.",
    highlights: [
      {
        label: "Brand identity",
        text: "Logos, visual branding, and graphic design that give clients a consistent look.",
      },
      {
        label: "Landing pages",
        text: "Responsive React sites built for search, with A/B testing to improve conversion.",
      },
      {
        label: "UI/UX",
        text: "Wireframes and usability testing that turn ideas into clear interfaces.",
      },
      {
        label: "Photoshop tutoring",
        text: "One-on-one Adobe Photoshop coaching.",
      },
    ],
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
