'use client'
import React, { useState } from "react";
import { motion } from "framer-motion";
import ToggleButton from "./ToggleButton";
import Links from "./Links";

const variants = {
  initial: {
    width: 0,
  },
  closed: {
    clipPath: "circle(30px at 50px 50px)",
    transition: {
      delay: 0.2,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
  open: {
    clipPath: "circle(1200px at 50px 50px)",
    transition: {
      type: "spring",
      stiffness: 20,
    },
  },
};

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <motion.div
      className={`fixed z-50 flex flex-col items-center justify-center text-black bg-white`}
      variants={variants}
      animate={isOpen ? "open" : "closed"}
    >
      <motion.div
        className="fixed left-0 bottom-0 top-0 w-[200px] md:w-[300px] bg-white"
      >
        <Links />
      </motion.div>
      <ToggleButton setIsOpen={setIsOpen} />
    </motion.div>
  );
}

export default Sidebar;
