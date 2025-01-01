import { Link } from "react-router"
import { motion } from "motion/react"
import { useState } from "react";

interface CoursecomponentProps {
    heading: string;
    description: string;
    link: string;
    src1: string;
    src2: string;
    src3: string;
    time: string;
    level: string;
    teacher: string;
    text1: string;
    text2: string;
    text3: string;
    text4: string;
    text5: string;
}

const Coursecomponent: React.FC<CoursecomponentProps> = ({ heading, description, link, src1, src2, src3, time, level, teacher, text1, text2, text3, text4, text5 }) => {
    const [animate, setAnimate] = useState(false)
    return (
        <motion.div className="bg-white rounded-lg p-10 max-md:px-2 max-md:py-5"
            initial={animate === false ? { opacity: 0, scale: 0.9 } : { opacity: 1, scale: 1 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            onAnimationComplete={() => setAnimate(true)}
        >
            <div className="flex justify-between items-center max-md:flex-col max-md:gap-5 max-md:items-start max-md:pl-2">
                <div className="flex flex-col w-[85%] gap-3">
                    <div className="text-2xl font-semibold">{heading}</div>
                    <div className="text-[#59595A]">{description}</div>
                </div>
                <Link to={link}>
                    <button className="px-5 py-3 bg-[#FCFCFD] rounded-xl border border-[#F1F1F3] hover:bg-[#dad9d9]">View Course</button>
                </Link>
            </div>

            <div className="flex gap-5 mt-8">
                <div><img className="h-[350px] w-96 object-cover rounded-lg max-md:size-28" src={src1} alt="web" /></div>
                <div><img className="h-[350px] w-96 object-cover rounded-lg max-md:size-28" src={src2} alt="web" /></div>
                <div><img className="h-[350px] w-96 object-cover rounded-lg max-md:size-28" src={src3} alt="web" /></div>
            </div>

            <div className="flex justify-between items-center mt-8">
                <div className="flex items-center justify-center text-[#59595A] gap-2">
                    <div className="border cursor-default border-[#F1F1F3] hover:bg-[#dad9d9] rounded-md bg-white py-1 px-3">{time}</div>
                    <div className="border cursor-default border-[#F1F1F3] hover:bg-[#dad9d9] rounded-md bg-white py-1 px-3">{level}</div>
                </div>
                <div className="font-semibold">{teacher}</div>
            </div>

            <div className="border border-[#F1F1F3] mt-10 rounded-lg">
                <div className="font-semibold text-xl p-5 border-b border-[#F1F1F3]">Curriculum</div>
                <div className="flex px-14 pt-5 pb-10 gap-8 max-md:flex-col max-md:px-4">
                    <div className="flex flex-col gap-3 w-[18%] max-md:w-full">
                        <div className="font-bold text-5xl">01</div>
                        <div className="font-semibold">{text1}</div>
                    </div>
                    <div className="min-h-full w-[1px] bg-[#F1F1F3]"></div>
                    <div className="flex flex-col gap-3 w-[18%] max-md:w-full">
                        <div className="font-bold text-5xl">02</div>
                        <div className="font-semibold">{text2}</div>
                    </div>
                    <div className="min-h-full w-[1px] bg-[#F1F1F3]"></div>
                    <div className="flex flex-col gap-3 w-[18%] max-md:w-full">
                        <div className="font-bold text-5xl">03</div>
                        <div className="font-semibold">{text3}</div>
                    </div>
                    <div className="min-h-full w-[1px] bg-[#F1F1F3]"></div>
                    <div className="flex flex-col gap-3 w-[18%] max-md:w-full">
                        <div className="font-bold text-5xl">04</div>
                        <div className="font-semibold">{text4}</div>
                    </div>
                    <div className="min-h-full w-[1px] bg-[#F1F1F3]"></div>
                    <div className="flex flex-col gap-3 w-[18%] max-md:w-full">
                        <div className="font-bold text-5xl">05</div>
                        <div className="font-semibold">{text5}</div>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default Coursecomponent
