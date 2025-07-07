import { links } from "@/config";

export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
] as const;

export const gridItems = [
  {
    id: 1,
    title: "As a software developer, I don't just write code—I build bridges between ideas and execution ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently I am learning backend using java",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
] as const;

export const projects = [
  {
    id: 1,
    title: "Krishi connect-Farmer Digital Support System",
    des: "It provides real-time features like weather forecasts, crop disease detection , agro news — helping farmers make smarter decisions.",
    img: "/krishi.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/nodejs.svg.svg"],
    sourceCode: "https://github.com/Manvi0408/Krishi-connect.git",
  },
  {
    id: 2,
    title: "EcoCart Smart Swapw",
    des: "A modern, eco-friendly e-commerce platform that promotes sustainable shopping by suggesting environmentally friendly alternatives to traditional products.",
    img: "/eco.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
    sourceCode: "https://github.com/Manvi0408/Walmart.git",
  },
  {
    id: 3,
    title: " RakshaAlert - Women Safety Platform",
    des: "A comprehensive personal safety application with real-time emergency alerts and location sharing capabilities.",
    img: "/rak.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
    link: "https://raksha-alert-five.vercel.app/",
    sourceCode: "https://github.com/Manvi0408/RakshaAlert.git",
  },
  {
    id: 4,
    title: "Cricketinfo-webscraper",
    des: "The Cricinfo Web Scraper is a tool built to extract detailed information about cricketers (such as scores, centuries, batting stats, and more",
    img: "/dhoni scores.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    sourceCode: "https://github.com/Manvi0408/CricInfo-WebScraper.git",
  },
] as const;

export const testimonials = [
  {
    quote: `${links.ownerName} transformed our "jugaad" Excel-based inventory into a proper SaaS product. Her use of MongoDB's $bucket aggregation for regional GST calculations saved our CA team 120 hours/month. Who knew tax tech could be this elegant?`,
    name: "Vikram Patel",
    title: "Operations Head, Marwari Traders (Surat)",
    project: "Inventory management system",
    metrics: ["120 hours/month saved", "GST-optimized"],
    tech: ["MERN Stack", "GST API", "Aggregation Pipeline"],
    culturalRef: ["jugaad", "Marwari business"]
  },
  {
    quote: `${links.ownerName} helped migrate our legacy Struts application to Spring Boot. She broke down the monolith into modular services without disrupting our existing IRCTC integration. The new system handles 1/3rd more transactions with the same infrastructure.`,
    name: "Rajesh Iyer",
    title: "Tech Lead, TravelEase (Bangalore)",
    project: "Railway booking system modernization",
    duration: "6 months",
    tech: ["Spring Boot", "Hibernate", "RabbitMQ"],
    outcome: "32% more transactions with same servers"
  },
  {
    quote: `When our Aadhaar-based attendance system failed for 50k Anganwadi workers, ${links.ownerName} fixed the biometric API integration and added offline-first PWA capabilities. Now it works even in Bihar's patchy networks! Her "desi-fication" of error messages ("Server nahi mila? Chai peeke try karo!") reduced support calls by 70%.`,
    name: "Dr. Anjali Mishra",
    title: "Mission Director, AWCS (Govt. Project)",
    project: "Aadhaar-enabled attendance",
    metrics: ["50k users", "70% fewer support calls"],
    tech: ["Aadhaar API", "PWA", "IndexedDB"],
    culturalRef: ["Anganwadi", "desi error messages"]
  },
  {
    quote: `Working with ${links.ownerName} was a game-changer for our e-commerce redesign. Her expertise in React performance optimization helped us achieve a 92+ Lighthouse score, and her attention to accessibility standards made our site inclusive for all users. She thought of technical details we never would have considered.`,
    name: "sofie",
    title: "Head of Digital, LuxeFashion",
    gender: "female",
  },
  {
    quote: `The responsive web app ${links.ownerName} developed exceeded all our expectations. His implementation of WebSockets for real-time features was flawless, and his documentation was so thorough we haven't needed to call for support. Rare find!`,
    name: "Lisa Nguyen",
    title: "Product Manager, TeleHealth Solutions"
  },
] as const;

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
] as const;

export const workExperience = [
  {
    id: 1,
    title: "Frontend Engineer Intern",
    desc: "Assisted in the development of a web-based platform using React.js, enhancing interactivity.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "AI intern",
    desc: "At AICTE, I discovered how AI transforms education policy - from predicting skill gaps to optimizing resource allocation. Working with nationwide datasets taught me the importance of scalable, interpretable models for public good.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Competitive Programmer",
    desc: "Contributed to open-source.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Lead Frontend Developer",
    desc: "Developed and maintained user-facing features using modern frontend technologies.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
] as const;

export const socialMedia = [
  {
    name: "GitHub",
    img: "/git.svg",
    link: "https://github.com/Manvi0408",
  },
  {
    name: "LinkedIn",
    img: "/link.svg",
    link: "www.linkedin.com/in/manvi-yadav-1168462a9",
  },
] as const;

export const techStack = {
  stack1: ["React.js", "java", "JavaScript"],
  stack2: ["node.js", "AWS", "MongoDB"],
} as const;
