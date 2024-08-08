import React, { useRef } from "react";
import { motion, useTransform, useScroll } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

function ProjectItem({ item }) {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    // offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [-200, 200]);
  return (
    <motion.section>
      <div className="flex items-center justify-center w-full h-full overflow-hidden">
        <div className="h-full m-auto md:max-w-[75%] flex flex-col md:flex-row justify-center items-center gap-12">
          <motion.div
            ref={ref}
            className="relative overflow-hidden flex-[1] h-1/2 w-full md:w-unset max-h-[300px] md:max-h-none"
          >
            <Link href={item.url || "/"}>
              <Image alt={item.title} src={item.img} width={500} height={500} />
            </Link>
          </motion.div>
          <motion.div className="flex-[1] hidden md:flex flex-col gap-8" style={{ y: y }}>
            <h2 className="text-6xl">{item.title}</h2>
            <p className="text-base text-gray">{item.description}</p>
            <Link href={item.url || "/"} className="bg-orange font-[500] text-black border-none rounded-lg p-2 w-[200px] cursor-pointer text-center">
              Check it out!
            </Link>
          </motion.div>
          {/* REMOVE ANIMATION ON MOBILE SCREENS */}
          <motion.div className="flex-[1] flex md:hidden flex-col gap-8 p-4 items-center">
            <h2 className="text-3xl">{item.title}</h2>
            <p className="text-sm text-gray">{item.description}</p>
            <Link href={item.url || "/"} className="bg-orange font-[500] text-black border-none rounded-lg p-2 w-[200px] cursor-pointer text-center">
              Check it out!
            </Link>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}

export default ProjectItem;
