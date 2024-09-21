import React from "react";
import { motion } from "framer-motion";
import CardItem from "./CardItem";
import { servicesVariants } from "./Services";
function Cards() {
  const cardsList = [
    {
      title: "Working with APIs",
      description:
        "Experienced in integrating and working with RESTful APIs to enhance application functionality. Proficient in making API calls, handling responses. Skilled in parsing and manipulating data formats like JSON, ensuring seamless communication between front-end and back-end systems.",
      btnText: "Go!",
    },
    {
      title: "Debugging",
      description:
        "Strong debugging skills with a keen ability to identify, diagnose, and resolve software issues efficiently. Proficient in isolating problems, and implement effective fixes.",
      btnText: "Go!",
    },
    {
      title: "Turning Designs into Pages",
      description:
        "Proficient in translating design mockups into fully functional web pages using HTML, CSS, and JavaScript. Experienced in ensuring pixel-perfect accuracy and responsiveness across various devices and browsers.",
      btnText: "Go!",
    },
    {
      title: "Achieving",
      description:
        "Demonstrates a strong track record of setting and meeting project milestones and deadlines. Proactive in goal setting, time management, and resource allocation to consistently deliver high-quality results. Committed to continuous improvement and learning, ensuring that objectives are met with excellence and efficiency.",
      btnText: "Go!",
    },
  ];
  return (
    <motion.ul variants={servicesVariants} className="flex-[2] flex flex-col flex-wrap md:flex-row w-full h-1/3 md:h-auto lg:w-auto lg:max-w-[65%] m-auto items-center md:items-stretch">
      {cardsList.map((item, ind) => (
        <CardItem key={ind} item={item} />
      ))}
    </motion.ul>
  );
}

export default Cards;
