import React from 'react'
import { motion } from 'framer-motion'
import { servicesVariants } from './Services'

function TopText() {
  return (
    <motion.div variants={servicesVariants} className='flex flex-col md:flex-row items-center gap-[20px] flex-[1] text-center self-center md:self-end'>
      <motion.p className='font-[200] text-base text-gray text-right'>
        focus on growing your company
        <br /> and move forward!
      </motion.p>
      <hr className='w-72 md:w-96 border-t-[0.5px] border-gray'/>
    </motion.div>
  )
}

export default TopText