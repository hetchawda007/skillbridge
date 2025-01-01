import { Link } from 'react-router'
import { motion } from "motion/react"
import { useState } from "react";
interface Homecomponent4Props {
  text1: string;
  src: string;
  text2: string;
}

const Homecomponent4: React.FC<Homecomponent4Props> = ({ text1, src, text2 }) => {
  const [animate, setAnimate] = useState(false)
  return (
    <motion.div className='w-[48%] flex flex-col justify-between pt-16 px-10 pb-8 gap-10 rounded-xl bg-white max-md:w-full max-md:px-4 max-md:py-5'
      initial={animate === false ? { opacity: 0, scale: 0.9 } : { opacity: 1, scale: 1 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1 }}
      onAnimationComplete={() => setAnimate(true)}
    >
      <div className='text-[#4C4C4D] text-sm'>{text1}</div>
      <div className='flex font-semibold items-center justify-between'>
        <div className='flex items-center gap-3'>
          <img className='h-12 w-auto' src={src} alt="" />
          <div className='text-base text-[#333333]'>{text2}</div>
        </div>
        <Link target='_blank' to={'https://github.com/hetchawda007'}><button className=' text-sm text-[#262626] bg-[#F7F7F8] hover:bg-[#dadada] py-3 px-5 rounded-lg'>Visit Profile</button></Link>
      </div>
    </motion.div>
  )
}

export default Homecomponent4
