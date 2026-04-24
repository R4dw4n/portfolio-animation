"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import ToggleButton from "./ToggleButton";
import Links from "./Links";

const variants = {
  initial: {
    width: 0,
  },
  closed: {
    clipPath: "circle(30px at 48px 48px)",
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
const variantsMobile = {
  initial: {
    width: 0,
  },
  closed: {
    clipPath: "circle(25px at 40px 40px)",
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

const SidebarContent = ({ setIsOpen }) => (
  <>
    <motion.div className="fixed left-0 bottom-0 top-0 w-[200px] md:w-[300px] bg-white">
      <Links />
    </motion.div>
    <ToggleButton setIsOpen={setIsOpen} />
  </>
);

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
    <motion.div
      className={`fixed z-50 hidden md:flex flex-col items-center justify-center text-black bg-white`}
      variants={variants}
      animate={isOpen ? "open" : "closed"}
    >
      <SidebarContent setIsOpen={setIsOpen} />
    </motion.div>

    {/* Mobile Sidebar */}
    <motion.div
      className={`fixed z-50 flex md:hidden flex-col items-center justify-center text-black bg-white`}
      variants={variantsMobile}
      animate={isOpen ? "open" : "closed"}
    >
      <SidebarContent setIsOpen={setIsOpen} />
    </motion.div>
    </>
  );
}

export default Sidebar;
