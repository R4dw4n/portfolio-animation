"use client";
import React from "react";
import Cards from "./Cards";
import TitleServices from "./TitleServices";
import TopText from "./TopText";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export const servicesVariants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
    transition: {
      delay: 0.2,
    },
  },
  animate: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      duratinon: 1.5,
      staggerChildren: 0.2,
    },
  },
};
function Services() {
  const { ref, inView } = useInView({
    threshold: 0.2,
  });
  return (
    <>
    <motion.div
      ref={ref}
      variants={servicesVariants}
      initial="initial"
      animate={inView ? "animate" : "initial"}
      className="hidden md:flex flex-col justify-between bg-gradient-to-b from-[var(--dark-background)] to-[#111132] h-full"
    >
      <TopText />
      <TitleServices />
      <Cards />
    </motion.div>

    {/* HIDE THE inView ANIMATION ON SMALL SCREENS */}
    <motion.div
      variants={servicesVariants}
      initial="initial"
      animate="animate"
      className="flex md:hidden flex-col justify-between bg-gradient-to-b from-[var(--dark-background)] to-[#111132] h-full"
    >
      <TopText />
      <TitleServices />
      <Cards />
    </motion.div>
    </>
  );
}

export default Services;
