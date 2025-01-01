import { Link } from "react-router"
import {motion} from "motion/react"
import { useState } from "react";

interface Props {
    text1: string;
    text2: string;
    text3: string;
    text4: string;
    text5: string;
    imgsrc: string;
    redirectsrc: string;
}

const Homecomponent3: React.FC<Props> = ({ text1, text2, text3, text4, text5, imgsrc, redirectsrc }) => {
    const [animate, setAnimate] = useState(false)
    return (
        <motion.div className='flex flex-col justify-center rounded-lg gap-5 p-10 bg-white border w-[48%] border-[#F1F1F3] max-md:w-full max-md:p-4'
            initial={animate === false ? { opacity: 0, scale: 0.9 } : { opacity: 1, scale: 1 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            onAnimationComplete={() => setAnimate(true)}
        >
            <div><img className='w-full rounded-lg h-80 object-cover max-md:h-44' src={imgsrc} alt="" /></div>
            <div className='flex justify-between items-center max-md:flex-col max-md:items-start max-md:gap-5'>
                <div className='flex gap-2'>
                    <div className='border border-[#F1F1F3] py-1 px-3 rounded-lg'>{text1}</div>
                    <div className='border border-[#F1F1F3] py-1 px-3 rounded-lg'>{text2}</div>
                </div>
                <div className='text-xl font-semibold max-md:text-lg'>{text3}</div>
            </div>
            <div className='text-2xl font-semibold'>{text4}</div>
            <div className='text-[#4C4C4D]'>{text5}</div>
            <Link to={redirectsrc}><button className='bg-[#F7F7F8] border border-[#F1F1F3] w-full py-3 rounded-lg hover:bg-[#d3d3d3] font-semibold'>Get it Now</button></Link>
        </motion.div>
    )
}

export default Homecomponent3
