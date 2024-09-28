"use client";
import Image from "next/image";
import React from "react";
import linkedin from "../../../public/linkedIn.png";
import instagram from "../../../public/instagram.png";
import github from "../../../public/github.png";
import { motion } from "framer-motion";
import Sidebar from "./Sidebar/Sidebar";
// const Sidebar = lazy(() => import('./Sidebar/Sidebar'));

export const staggerFadeVariant = {
  initial: {
    opacity: 0,
    scale: 0.5,
  },
  animate: (i) => ({
    opacity: 1,
    scale: 1,
    transition: {
      delay: i * 0.15,
    },
  }),
};

function Navbar() {
  const navlinkimages = [
    {
      alt: "linkedin",
      src: linkedin,
      to: "https://www.linkedin.com/in/radwan-al-kheder-64047a297/",
      width: 18,
      className: "",
    },
    {
      alt: "instagram",
      src: instagram,
      to: "https://www.instagram.com/notradw4n/",
      width: 18,
      className: "",
    },
    {
      alt: "github",
      src: github,
      to: "https://github.com/R4dw4n",
      width: 18,
      className: "mb-2",
    },
  ];

  return ( 
    <div className="h-[100px]">
      {/* SIDEBAR */}
      <Sidebar />

      <div className="max-w-[65%] h-full m-auto flex items-center justify-end md:justify-between">
        <motion.span
          className="font-bold hidden md:block"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Radwan Al-Kheder
        </motion.span>
        <motion.ul className="flex gap-[20px]">
          {navlinkimages.map((item, ind) => (
            <motion.li
              key={ind}
              variants={staggerFadeVariant}
              initial="initial"
              animate="animate"
              custom={ind}
            >
              <motion.a href={item.to}>
                <Image height={18} width={item.width} alt={item.alt} src={item.src} priority />
              </motion.a>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </div>
  );
}

export default Navbar;
