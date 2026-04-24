import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import people from "../../../public/people.webp";
import { servicesVariants } from "./Services";
function TitleServices() {
  return (
    <motion.div
      variants={servicesVariants}
      className="flex-[2] flex items-center flex-col w-full md:w-auto"
    >
      <div className="flex flex-col md:flex-row text-center items-center gap-5 md:gap-9">
        <Image
          className="h-[50px] w-[200px] lg:h-[75px] lg:w-[250px] xl:h-[100px] xl:w-[300px] rounded-[50px] object-cover"
          alt="people"
          src={people}
        />
        <h1 className="text-4xl lg:text-6xl xl:text-8xl font-[100]">
          <motion.b whileHover={{ color: "orange" }} className="font-bold">
            Unique
          </motion.b>{" "}
          Ideas
        </h1>
      </div>

      <div className="flex flex-col md:flex-row text-center items-center gap-5 md:gap-9">
        <h1 className="text-4xl lg:text-6xl xl:text-8xl font-[100]">
          <motion.b whileHover={{ color: "orange" }} className="font-bold">
            For your
          </motion.b>{" "}
          Bussiness
        </h1>
        <button className="h-[50px] w-[150px] lg:h-[75px] lg:w-[250px] xl:w-[300px] xl:h-[100px] font-[500]  rounded-[50px] bg-orange border-none text-base md:text-xl cursor-pointer text-black">
          WHAT WE DO?
        </button>
      </div>
    </motion.div>
  );
}

export default TitleServices;
