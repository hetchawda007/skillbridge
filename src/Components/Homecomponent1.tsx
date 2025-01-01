import { Link } from "react-router";
import { motion } from "motion/react"
import { useState } from "react";
interface Homecomponent1Props {
    text1: string;
    text2: string;
    text3: string;
}

const Homecomponent1: React.FC<Homecomponent1Props> = ({ text1, text2, text3 }) => {
    const [animate, setAnimate] = useState(false)
    return (
        <motion.div className='bg-white flex flex-col gap-7 rounded-xl py-5 px-10 w-[31%] max-md:w-full max-md:px-4'
            initial={animate === false ? { opacity: 0 , scale: 0.9} : { opacity: 1, scale: 1 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1    }}
            onAnimationComplete={() => setAnimate(true)}
        >
            <div className='self-end text-6xl be-vietnam-pro-bold'>{text1}</div>
            <div className='self-start flex flex-col gap-3 w-[95%]'>
                <div className='text-2xl font-semibold'>{text2}</div>
                <div className='text-[#4C4C4D]'>{text3}</div>
            </div>
            <Link className="self-end" to={'/courses'}><div className='hover:bg-[#F1F1F3] bg-[#FCFCFD] p-5 w-fit rounded-lg'><img className='h-4 w-auto' src="/arrow-2.png" alt="" /></div></Link>
        </motion.div>
    )
}

export default Homecomponent1
