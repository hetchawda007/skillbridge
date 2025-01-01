import Questions from "./Questions"
import { motion } from "motion/react"
import { useState } from "react";
const Faqs = () => {
    const [animate, setAnimate] = useState(false)
    return (
        <div className="bg-white rounded-lg my-32 py-20 px-16 flex max-md:flex-col max-md:px-0 max-md:py-10 max-md:gap-5 max-md:items-center max-md:justify-center max-md:my-16">

            <motion.div className="w-[40%] flex flex-col gap-2 max-md:w-full max-md:gap-5"
                initial={animate === false ? { opacity: 0, scale: 0.9 } : { opacity: 1, scale: 1 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 2 }}
                onAnimationComplete={() => setAnimate(true)}
            >
                <div className="text-4xl font-bold w-[60%] max-md:w-[85%]">Frequently Asked Questions</div>
                <div className="text-[#333333] w-[60%] max-md:w-[85%]">Still you have any questions? Contact our Team via support@skillbridge.com</div>
            </motion.div>

            <div className="w-[60%] px-20 flex flex-col items-center justify-center gap-5 max-md:w-full max-md:px-0">

                <Questions text1="Can I enroll in multiple courses at once?" text2="Absolutely! You can enroll in multiple courses simultaneously and access them at your convenience." />
                <Questions text1="What kind of support can I expect from instructors?" text2="Our instructors are available to answer your questions, provide feedback, and help you through any challenges you may encounter." />
                <Questions text1="Are the courses self-paced or do they have specific start and end dates?" text2="Our courses are self-paced, so you can start and finish them at your convenience. There are no specific start and end dates." />
                <Questions text1="Are there any prerequisites for the courses?" text2="Each course has its own prerequisites, which are listed on the course page. Be sure to review the prerequisites before enrolling in a course." />
                <Questions text1="Can I download the course materials for offline access?" text2="Yes, you can download the course materials for offline access. Simply click the download button next to the material you want to download." />
                <Questions text1="How long do I have access to the course materials?" text2="You have lifetime access to the course materials, so you can review them as many times as you like." />
                <Questions text1="Can I get a refund if I'm not satisfied with a course?" text2="Yes, we offer a 30-day money-back guarantee. If you're not satisfied with a course, simply contact us within 30 days of purchase for a full refund." />


            </div>

        </div>
    )
}

export default Faqs
