"use client";
import React, { useRef } from "react";
import ProjectItem from "./ProjectItem";
import { motion, useScroll, useSpring } from "framer-motion";

const projects = [
  {
    id: 1,
    title: "E-commerce",
    url: "https://nextjs-ecommerce-ivory-five.vercel.app/",
    img: "/e-commerce.png",
    description:
    "A dark themed e-commerce website using nextjs and tailwind-css!",
  },
  {
    id: 2,
    title: "Albishara",
    url: "https://albishara.net/",
    img: "/albishara.png",
    description:
    "A dynamic online platform dedicated to serving churches and individuals seeking to deepen their understanding of the Bible. This website provides a wealth of resources for church communities, including Bible study tools, scripture commentaries, and guides for spiritual growth.!",
  },
  {
    id: 3,
    title: "News App",
    img: "/news.png",
    url: "https://news-app-651d.vercel.app/",
    description:
      "A very humble news app to keep updated with what's going on in the world!",
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
