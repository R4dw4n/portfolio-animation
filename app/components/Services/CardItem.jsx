import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
function CardItem({ item }) {
  return (
    <li className="h-full">
      <motion.div
        whileHover={{ background: "lightgray", color: "black" }}
        className="p-2 px-6 md:p-6 h-full sm:h-1/2 md:h-full border-none md:border-[0.5px] md:border-solid border-gray flex sm:flex-col items-center justify-between gap-4 md:items-stretch"
      >
        <h2 className="font-bold text-sm md:text-[14px] lg:text-2xl">{item.title}</h2>
        <p className="hidden text-[8px] md:text-xs md:inline">{item.description}</p>
        <Link href="#Contact">
          <button className="p-2 text-black bg-orange border-none cursor-pointer w-16 md:w-full rounded md:rounded-none">
            {item.btnText}
          </button>
        </Link>
      </motion.div>
    </li>
  );
}

export default CardItem;
