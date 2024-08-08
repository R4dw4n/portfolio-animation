"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
function Parallax({ type }) {
  const backgroundGradient = {
    services: "bg-gradient-to-b from-[#111132] to-[var(--dark-background)]",
    portfolio: "bg-gradient-to-b from-[#111132] to-[#505064]",
  };
  const sunPlanet = {
    services: "bg-[url('/planets.png')]",
    portfolio: "bg-[url('/sun.png')]",
  }

  const ref = useRef(0);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const transformText = useTransform(scrollYProgress, [0, 1], ["0%", "400%"]);
  const transformPlanets = useTransform(scrollYProgress, [0, 1], ["0%", "70%"]);
  const transformStars = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  // console.log(scrollY);
  // console.log(transformText);

  return (
    <div
      ref={ref}
      className={`${backgroundGradient[type]} overflow-hidden flex justify-center items-center w-full h-full relative`}
    >
      <motion.h1 className="text-center text-6xl md:text-8xl" style={{ y: transformText }}>
        {type === "services" ? "What I do?" : "What I did"}
      </motion.h1>

      {/* MOUNTAINS */}
      <motion.div className="absolute z-[3] bg-[url('/mountains.png')] bg-bottom bg-contain bg-no-repeat md:bg-cover w-full h-full"></motion.div>
      {/* PLANETS */}
      <motion.div
        style={{ y: transformPlanets }}
        className={`absolute z-[2] ${sunPlanet[type]} bg-bottom bg-contain bg-no-repeat md:bg-cover w-full h-full`}
      ></motion.div>
      {/* STARS */}
      <motion.div
        style={{ x: transformStars }}
        className="absolute z-[1] bg-[url('/stars.png')] bg-bottom bg-cover w-full h-full"
      ></motion.div>
    </div>
  );
}

export default Parallax;
