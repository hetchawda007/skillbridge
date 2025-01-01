import {motion} from "motion/react"
import { Link } from "react-router";
import { useState } from "react";
interface Homecomponent2Props {
    text1: string;
    text2: string;
}

const Homecomponent2: React.FC<Homecomponent2Props> = ({ text1, text2 }) => {
    const [animate, setAnimate] = useState(false)

    return (
        <motion.div className='flex flex-col gap-3 my-20'
            initial={animate===false ? { opacity: 0, scale: 0.9 }: { opacity: 1, scale: 1 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            onAnimationComplete={() => setAnimate(true)}
        >
            <div className='text-4xl font-semibold'>{text1}</div>
            <div className='flex justify-between max-md:flex-col max-md:gap-3'>
                <div className='w-[70%] text-sm text-[#59595A] max-md:w-full'>{text2}</div>
             <Link to={'/courses'}>   <button className='bg-white rounded-lg text-sm px-4 py-2 hover:bg-[#d1d0d0] max-md:w-fit'>View All</button></Link>
            </div>
        </motion.div>
    )
}

export default Homecomponent2
