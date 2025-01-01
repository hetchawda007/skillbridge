import { useState } from "react"
import { motion, AnimatePresence } from "motion/react"
type QuestionsProps = {
    text1: string
    text2: string
}
const Questions: React.FC<QuestionsProps> = ({ text1, text2 }) => {
    const [counter, setCounter] = useState(false)
    const [animate, setAnimate] = useState(false)
    return (

        <motion.div layout className="border flex flex-col gap-2 rounded-lg w-full py-5 px-8 border-[#F1F1F3] max-md:w-full max-md:px-5"
            initial={animate === false ? { opacity: 0, scale: 0.9 } : { opacity: 1, scale: 1 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 2 }}
            onAnimationComplete={() => setAnimate(true)}
        >
            <div className="flex w-full justify-around items-center max-md:gap-2">
                <div className="w-[90%] max-md:w-full">{text1}</div>
                <div className=" p-3 rounded-md cursor-pointer hover:bg-[#ffe5c0] bg-[#FFF4E5]" onClick={() => setCounter(!counter)}>
                    {counter ? <img className="h-3 w-auto" src={"/image-12.png"} alt="" /> : <img className="h-3 w-auto" src={"/image-13.png"} alt="" />}
                </div>
            </div>
            <AnimatePresence>
                {counter && <motion.div className="text-[#4C4C4D] text-sm w-[90%] max-md:w-full"
                    initial={{ y: -20 }}
                    animate={{ y: 0 }}
                    exit={{ y: -20 }}
                    transition={{ duration: 0.5 }}
                >{text2}</motion.div>}
            </AnimatePresence>
        </motion.div>
    )
}

export default Questions
