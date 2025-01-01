import { motion } from "motion/react"
import { useState } from "react";

interface DescriptionProps {
    text1: string;
    text2: string;
}

const Description: React.FC<DescriptionProps> = ({ text1, text2 }) => {
    const [animate, setAnimate] = useState(false)
    return (
        <motion.div className="flex px-32 my-20 justify-between max-md:flex-col max-md:px-4 max-md:gap-5"
            initial={animate === false ? { opacity: 0, scale: 0.9 } : { opacity: 1, scale: 1 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            onAnimationComplete={() => setAnimate(true)}
        >
            <div className="text-[#262626] text-4xl font-bold w-[50%] max-md:w-full max-md:text-3xl">{text1}</div>
            <div className="text-[#59595A] leading-5 w-[50%] max-md:w-full">{text2}</div>
        </motion.div>
    )
}

export default Description
