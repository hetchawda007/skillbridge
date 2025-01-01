import { motion } from "motion/react"
import { useState } from "react";
interface Aboutcomponent2Props {
  imgsrc: string;
  title: string;
  text: string;
}

const Aboutcomponent2: React.FC<Aboutcomponent2Props> = ({ imgsrc, text, title }) => {
  const [animate, setAnimate] = useState(false)
  return (
    <motion.div className="bg-white flex flex-col p-10 rounded-lg w-[49%] gap-3 max-md:w-full max-md:p-5"
      initial={animate === false ? { opacity: 0, scale: 0.9 } : { opacity: 1, scale: 1 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1 }}
      onAnimationComplete={() => setAnimate(true)}
    >
      <div className="p-3 bg-[#FFF9F0] w-fit rounded-md border border-[#FFEACC] hover:bg-[#ffe9c8] cursor-pointer"><img className="h-6 w-6" src={imgsrc} alt="" /></div>
      <div className="text-[#262626] text-lg font-semibold">{title}</div>
      <div className="text-[#59595A]">{text}</div>
    </motion.div>
  )
}

export default Aboutcomponent2
