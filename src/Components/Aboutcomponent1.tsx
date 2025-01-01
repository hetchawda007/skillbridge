import Aboutcomponent2 from "./Aboutcomponent2"
import {motion} from "motion/react"
import { useState } from "react";
interface Aboutcomponent1Props {
    title1: string;
    text1: string;
    title2: string;
    text2: string;
    src1: string;
    title3: string;
    text3: string;
    src2: string;
    title4: string;
    text4: string;
    src3: string;
    title5: string;
    text5: string;
    src4: string;
}

const Aboutcomponent1: React.FC<Aboutcomponent1Props> = ({ src1, text1, text2, title1, title2, src2, src3, src4, text3, text4, text5, title3, title4, title5 }) => {
    const [animate, setAnimate] = useState(false)
    return (
        <div className="px-32 my-20 max-md:px-5 max-md:flex-col max-md:my-10">
            <motion.div className="flex flex-col gap-3 justify-between mb-14"
            initial={animate === false ? { opacity: 0, scale: 0.9 } : { opacity: 1, scale: 1 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            onAnimationComplete={() => setAnimate(true)}
            >
                <div className="text-[#262626] text-4xl font-semibold">{title1}</div>
                <div className="text-[#59595A] leading-5 w-[90%] max-md:w-full">{text1}</div>
            </motion.div>
            <div className="flex gap-5 flex-wrap">
                <Aboutcomponent2 imgsrc={src1} title={title2} text={text2} />
                <Aboutcomponent2 imgsrc={src2} title={title3} text={text3} />
                <Aboutcomponent2 imgsrc={src3} title={title4} text={text4} />
                <Aboutcomponent2 imgsrc={src4} title={title5} text={text5} />
            </div>
        </div>
    )
}

export default Aboutcomponent1
