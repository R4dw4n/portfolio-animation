import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const ulVariants = {
  closed: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
  open: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  closed: {
    y: 50,
    opacity: 0,
  },
  open: {
    y: 0,
    opacity: 1,
  },
};

function Links() {
  const linkItems = [
    {
      title: "Homepage",
      to: "#Homepage",
    },
    {
      title: "Services",
      to: "#Services",
    },
    {
      title: "Portfolio",
      to: "#Portfolio",
    },
    {
      title: "Contact",
      to: "#Contact",
    },
  ];
  return (
    <motion.ul
      className="w-full h-full flex flex-col gap-[20px] items-center justify-center"
      variants={ulVariants}
    >
      {linkItems.map((item, ind) => {
        return (
          <motion.li
            key={ind}
            variants={itemVariants}
            custom={ind}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link href={item.to} className="text-xl md:text-3xl">
              {item.title}
            </Link>
          </motion.li>
        );
      })}
    </motion.ul>
  );
}

export default Links;
