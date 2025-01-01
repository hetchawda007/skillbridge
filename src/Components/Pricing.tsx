import Features from "./Features"
import { Link } from "react-router"
import { motion } from "motion/react"
import { useState } from "react";
const Pricing = () => {
    const [animate1, setAnimate1] = useState(false)
    const [animate2, setAnimate2] = useState(false)
    return (
        <div className="bg-white p-10 px-16 pb-8 gap-5 flex w-full max-md:flex-col max-md:px-0">
            <motion.div className="bg-[#FCFCFD] px-5 py-10 flex flex-col gap-10 border w-[48%] justify-center rounded-lg border-[#F1F1F3] max-md:w-full max-md:px-4"
                initial={animate1 === false ? { opacity: 0, scale: 0.9 } : { opacity: 1, scale: 1 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 2 }}
                onAnimationComplete={() => setAnimate1(true)}
            >

                <div className="bg-[#FFF9F0] font-semibold rounded-sm py-3 w-full border text-center border-[#FFEACC]">Free Plan</div>
                <div className="flex justify-center items-end">
                    <div className="text-6xl font-bold">$0</div>
                    <div className="text-[#4C4C4D]">/month</div>
                </div>
                <div>

                    <div className="bg-white border border-[#F1F1F3] flex flex-col gap-5 p-10 max-md:p-4">
                        <div className="text-xl font-semibold text-center">Available Features</div>
                        <Features color="#FFF4E5" text="Access to selected free courses." src="/image-10.png" />
                        <Features color="#FFF4E5" text="Limited course materials and resources." src="/image-10.png" />
                        <Features color="#FFF4E5" text="Basic community support." src="/image-10.png" />
                        <Features color="#FFF4E5" text="No certification upon completion." src="/image-10.png" />
                        <Features color="#FFF4E5" text="Ad-supported platform." src="/image-10.png" />
                        <Features color="#F1F1F3" text="Access to exclusive Pro Plan community forums." src="/image-11.png" />
                        <Features color="#F1F1F3" text="Early access to new courses and updates." src="/image-11.png" />
                    </div>
                    <Link to={'/'}></Link><button className="w-full bg-[#FF9500] text-white py-3 rounded-b-lg font-semibold hover:bg-[#e38602]">Get Started</button>
                </div>

            </motion.div>

            <motion.div className="bg-[#FCFCFD] px-5 py-10 flex flex-col gap-10 border w-[48%] justify-center rounded-lg border-[#F1F1F3] max-md:w-full max-md:px-4"
                initial={animate2 === false ? { opacity: 0, scale: 0.9 } : { opacity: 1, scale: 1 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 2 }}
                onAnimationComplete={() => setAnimate2(true)}
            >

                <div className="bg-[#FFF9F0] font-semibold rounded-sm py-3 w-full border text-center border-[#FFEACC]">Pro Plan</div>
                <div className="flex justify-center items-end">
                    <div className="text-6xl font-bold">$79</div>
                    <div className="text-[#4C4C4D]">/month</div>
                </div>
                <div>

                    <div className="bg-white border border-[#F1F1F3] flex flex-col gap-5 p-10 max-md:p-4">
                        <div className="text-xl font-semibold text-center">Available Features</div>
                        <Features color="#FFF4E5" text="Unlimited access to all courses." src="/image-10.png" />
                        <Features color="#FFF4E5" text="Unlimited course materials and resources." src="/image-10.png" />
                        <Features color="#FFF4E5" text="Priority support from instructors." src="/image-10.png" />
                        <Features color="#FFF4E5" text="Course completion certificates." src="/image-10.png" />
                        <Features color="#FFF4E5" text="Ad-free experience." src="/image-10.png" />
                        <Features color="#FFF4E5" text="Access to exclusive Pro Plan community forums." src="/image-10.png" />
                        <Features color="#FFF4E5" text="Early access to new courses and updates." src="/image-10.png" />
                    </div>
                    <Link to={'/'}></Link><button className="w-full bg-[#FF9500] text-white py-3 rounded-b-lg font-semibold hover:bg-[#e38602]">Get Started</button>
                </div>

            </motion.div>
        </div>
    )
}

export default Pricing
