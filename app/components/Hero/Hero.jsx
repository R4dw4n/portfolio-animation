"use client";
import Image from "next/image";
import React from "react";
import hero from "../../../public/hero.png";
import scrollImg from "../../../public/scroll.png";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Link from "next/link";

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
    delay: 0.2,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};
const sliderVariants = {
  initial: {
    x: 2000,
  },
  animate: {
    x: -4500,
    transition: {
      ease: "linear",
      duration: 25,
      repeat: Infinity,
    },
  },
};
const heroVariants = {
  initial: {
    delay: 0.2,
    opacity: 0,
    scale: 0.2,
  },
  animate: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.8,
    },
  },
};

function Hero() {
  const { ref, inView } = useInView({
    threshold: 0.3,
  });

  return (
    <div
      ref={ref}
      className="relative h-100vh_100px overflow-hidden bg-gradient-to-b from-[var(--dark-background)] to-[#111132]"
    >
      <div className="max-w-[65%] h-full m-auto">
        <motion.div
          initial="initial"
          animate={inView ? "animate" : "initial"}
          variants={textVariants}
          className="h-1/2 w-full md:h-full md:w-1/2 flex flex-col text-center md:text-left items-center md:items-stretch justify-center gap-[20px] md:gap-[30px]"
        >
          <motion.h2
            variants={textVariants}
            animate={inView ? "animate" : "initial"}
            className="text-xl md:text-3xl text-[#663399] tracking-[5px]"
          >
            Radwan Al-Kheder
          </motion.h2>
          <motion.h1
            variants={textVariants}
            animate={inView ? "animate" : "initial"}
            className="text-3xl md:text-5xl lg:text-7xl"
          >
            Frontend Web Developer
          </motion.h1>
          <motion.div variants={textVariants}>
            <Link href="#Portfolio">
              <motion.button
                variants={textVariants}
                animate={inView ? "animate" : "initial"}
                className="mr-0 md:mr-4 p-[10px] font-light cursor-pointer border border-white rounded-[10px] bg-transparent text-white"
                >
                See The Latest Work
              </motion.button>
            </Link>
            <Link href="#Contact">
              <motion.button
                variants={textVariants}
                className="p-[10px] font-light cursor-pointer border border-white rounded-[10px] bg-transparent text-white"
              >
                Contact Me
              </motion.button>
            </Link>
          </motion.div>
          <motion.div variants={textVariants} animate="scrollButton">
            <Image src={scrollImg} width={50} alt="scroll" />
          </motion.div>
        </motion.div>
      </div>
      <motion.div
        variants={sliderVariants}
        initial="initial"
        animate="animate"
        className="absolute w-1/2 font-bold text-[50vh] bottom-[-120px] whitespace-nowrap text-[#ffffff09]"
      >
        Experienced Programmer
      </motion.div>
      <motion.div
        className="absolute w-1/2 top-unset bottom-0 lg:top-[-140px] md:bottom-unset right-0 h-1/2 md:h-full lg:h-[150%]"
        variants={heroVariants}
        animate={inView ? "animate" : "initial"}
      >
        <Image src={hero} alt="me" className="w-full h-full"/>
      </motion.div>
    </div>
  );
}

export default Hero;
