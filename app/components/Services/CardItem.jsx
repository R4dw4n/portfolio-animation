import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
function CardItem({ item }) {
  return (
    <li className="w-1/4">
      <motion.div
        whileHover={{ background: "lightgray", color: "black" }}
        className="p-6 h-full border-none md:border-[0.5px] md:border-solid border-gray flex flex-col items-center lg:justify-between gap-4 md:items-stretch"
      >
        <h2 className="font-bold text-sm md:text-[14px] lg:text-2xl">{item.title}</h2>
        <p className="hidden text-[8px] md:text-xs md:inline">{item.description}</p>
        <Link href="#Contact">
          <button className="p-2 text-black bg-orange border-none cursor-pointer md:w-full rounded md:rounded-none">
            {item.btnText}
          </button>
        </Link>
      </motion.div>
    </li>
  );
}

export default CardItem;
