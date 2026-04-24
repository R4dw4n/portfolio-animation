"use client";
import React, { useRef } from "react";
import ProjectItem from "./ProjectItem";
import { motion, useScroll, useSpring } from "framer-motion";

const projects = [
  {
    id: 1,
    title: "Almanara",
    url: "https://almanaraa.com/en",
    img: "/_almanara-main.png",
    description:
    "A multilingual corporate website that presents shipping services while providing customers with a real-time shipment tracking feature. The platform includes a content management system for managing articles and website content, responsive design for all devices, and SEO optimization to improve search visibility.",
  },
  {
    id: 2,
    title: "Almanara Vendor",
    url: "https://vendor.almanaraa.com",
    img: "/_vendor-dashboard.png",
    description:
    "A comprehensive logistics dashboard for managing international shipment workflows. The system supports shipment creation, tracking, monitoring, and status updates while providing data visualization and filtering tools to help teams oversee logistics operations and improve shipment management efficiency.",
  },
  {
    id: 3,
    title: "Almanara Accounting",
    url: "https://accounting.almanaraa.com",
    img: "/_accounting.png",
    description:
    "A full-featured financial management platform designed to handle accounting workflows such as journal entries, invoice generation, payroll processing, and financial reporting. The system includes detailed reporting tools for account statements, balance sheets, and profit-and-loss analysis with filtering and export capabilities.",
  },
  {
    id: 4,
    title: "Box and Express",
    url: "https://boxandexpress.com",
    img: "/_box-and-express.png",
    description:
    "Box and Express is an international package forwarding service that allows customers outside Turkey to purchase products from Turkish online stores. The platform provides users with a local warehouse address in Turkey that they can use as the shipping address when ordering from Turkish e-commerce websites.",
  },
  {
    id: 5,
    title: "Medical Clinic Management",
    url: "https://clinic.al-sahil.net",
    img: "/al-sahil.png",
    description:
    "Web application designed to streamline clinic operations by managing patient records, visit history, and doctors’ reports. The system includes a scheduling calendar that allows doctors to organize and manage appointments efficiently.",
  },
  {
    id: 6,
    title: "AI Powered Group Chat",
    url: "https://ai-group-chat-homs.vercel.app",
    img: "/ai-group-chat.png",
    description:
    "A real-time messaging platform that enables group communication using WebSocket connections. The application supports media sharing, multilingual interfaces, AI-assisted interactions inside chats, and customizable user profiles, all delivered through a responsive interface with dark mode support. (The backend is unfortunately down for now)",
  },
  {
    id: 7,
    title: "Albishara",
    url: "https://albishara.net/",
    img: "/albishara.png",
    description:
    "A Christian knowledge platform that provides Bible translations and information about churches across the Arab region, including their history and origins. The project involved improving performance and SEO by migrating pages to server-side rendering and optimizing metadata and search engine indexing.",
  },
];

function Portfolio() {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });
  // console.log(scrollYProgress);
  return (
    <motion.div ref={ref} className="relative">
      <div className="z-[1] sticky top-0 left-0 py-6 text-center text-orange text-4xl md:text-5xl">
        <h1 className="p-2">Featured Works!</h1>
        <motion.div
          className="h-2 bg-white"
          style={{ scaleX: scaleX }}
        ></motion.div>
      </div>
      {projects.map((item) => (
        <ProjectItem item={item} key={item.id} />
      ))}
    </motion.div>
  );
}

export default Portfolio;
