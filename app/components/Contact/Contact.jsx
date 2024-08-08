"use client";
import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import emailjs from "@emailjs/browser"
import PhoneSVG from "./PhoneSVG";

const contactVariants = {
  initial: {
    y: 500,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1,
    },
  },
};

const formVariants = {
  initial: {
    opacity: 0,
    x: "-200vw",
    transition: {
      duration: 0.1,
      delay: 0,
    }
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      delay: 4,
      duration: 1.5,
      x: {
        duration: 0,
      }
    }
  }
};

const svgDivVariants = {
  initial: {
    opacity: 1,
    transition: {
      duration: 0.2,
      delay: 0,
      x: 0,
    }
  },
  animate: {
    opacity: 0,
    x: "-200vw",
    transition: {
      delay: 3,
      duration: 1,
      x: {
        delay: 4.1,
        duration: 0,
      }
    }
  }
};

function Contact() {
  const { ref, inView } = useInView({
    threshold: 0.3,
  });

  const formRef = useRef();
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
    .sendForm('service_20hgmrx', 'template_mlutx9l', formRef.current, {
      publicKey: '-A9u4K5du7gdGW_qN',
    })
    .then(
      () => {
          formRef.current.reset();
          setError(false);
          setSuccess(true);
          setTimeout(() => {
            setSuccess(false);
          }, 5000);
        },
        (error) => {
          setSuccess(false);
          setError(true);
        },
      );
  };

  return (
    <motion.div
      ref={ref}
      variants={contactVariants}
      initial="initial"
      animate={inView ? "animate" : "initial"}
      className="h-full w-full p-4 md:p-0 md:max-w-[65%] m-auto flex flex-col md:flex-row items-center gap-5 md:gap-12"
    >
      <motion.div className="flex-[1] flex flex-col gap-5 md:gap-10 text-center md:text-left items-center md:items-stretch">
        <motion.h1 variants={contactVariants} className="text-4xl md:text-8xl">
          Let's Work Together!
        </motion.h1>
        <motion.div variants={contactVariants}>
          <h2 className="text-xl md:text-3xl">E-mail</h2>
          <span className="font-[300]">radwan.basket@gmail.com</span>
        </motion.div>

        <motion.div variants={contactVariants}>
          <h2 className="text-xl md:text-3xl">Address</h2>
          <span className="font-[300]">Homs, Syria</span>
        </motion.div>

        <motion.div variants={contactVariants}>
          <h2 className="text-xl md:text-3xl">Phone Number</h2>
          <span className="font-[300]">+963 954 013 609</span>
          <br />
          <span className="font-[300]">+963 992 868 712</span>
        </motion.div>
      </motion.div>

      <motion.div className="flex-[2] md:flex-[1] overflow-x-hidden w-full md:w-auto" variants={contactVariants}>
        <motion.div
          className="absolute hidden md:block m-auto stroke-orange"
          variants={svgDivVariants}
          initial="initial"
          animate={inView ? "animate" : "initial"}
        >
          <PhoneSVG inView={inView} width="450px" height="450px"/>
        </motion.div>
        {/* MAKE THE SVG SMALLER ON MOBLIE SCREENS */}
        <motion.div
          className="absolute block md:hidden m-auto stroke-orange"
          variants={svgDivVariants}
          initial="initial"
          animate={inView ? "animate" : "initial"}
        >
          <PhoneSVG inView={inView} width="300px" height="300px"/>
        </motion.div>
        <motion.form
          ref={formRef}
          onSubmit={sendEmail}
          className="flex flex-col gap-4"
          variants={formVariants}
          initial="initial"
          animate={inView ? "animate" : "initial"}
        >
          <input
            name="from_name"
            className="p-3 md:p-6 bg-transparent outline-none border border-white text-white rounded"
            type="text"
            placeholder="Name"
            required
          />
          <input
            name="email"
            className="p-3 md:p-6 bg-transparent outline-none border border-white text-white rounded"
            type="email"
            placeholder="E-mail"
            required
          />
          <textarea
            name="message"
            className="p-3 md:p-6 bg-transparent outline-none border border-white text-white rounded"
            rows={8}
            placeholder="Message"
            required
          />
          <button className="p-3 md:p-6 bg-orange text-black border-none cursor-pointer font-[500]">
            Submit
          </button>
          {success && "E-mail Sent Successfully!"}
          {error && "Connection Error!"}
        </motion.form>
      </motion.div>
    </motion.div>
  );
}

export default Contact;
