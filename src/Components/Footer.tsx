import { Link } from "react-router"
import { motion } from "motion/react"
import { useState } from "react";
const Footer = () => {
    const [animate, setAnimate] = useState(false)
    return (
        <motion.footer className="bg-white px-32 pt-24 max-md:px-4 max-md:pt-10"
            initial={animate === false ? { opacity: 0, scale: 0.9 } : { opacity: 1, scale: 1 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 2 }}
            onAnimationComplete={() => setAnimate(true)}
        >
            <div className="flex justify-between max-md:flex-col max-md:gap-5">

                <div className="flex flex-col gap-3">
                    <div><img className="h-10 w-auto" src="/logo.png" alt="logo" /></div>
                    <a className="flex gap-2 mt-5 items-center" href="mailto:hello@skillbridge.com?subject=Hello&body=I%20am%20reaching%20out%20about...">
                        <img className="h-4 w-auto" src="/mail.png" alt="mail" />
                        <div>hello@skillbridge.com</div>
                    </a>
                    <a className="flex gap-2 items-center" href="tel:+91 91813 23 2309">
                        <img className="h-5 w-auto" src="/phone.png" alt="mail" />
                        <div>+91 91813 23 2309</div>
                    </a>
                    <a className="flex gap-2 items-center" target="_blank" href="https://googlemaps.com">
                        <img className="h-5 w-auto" src="/location.png" alt="mail" />
                        <div>Somewhere in the World</div>
                    </a>

                </div>

                <div className="flex gap-20 flex-wrap max-md:gap-5">

                    <div className="flex flex-col text-[#59595A]">
                        <div className="font-semibold text-lg text-[#262626]">Home</div>
                        <Link to={'/courses'}><div className="mt-3 hover:text-black">Our Courses</div></Link>
                        <Link to={'/contact'}><div className="hover:text-black">Our Testimonials</div></Link>
                        <Link to={'/contact'}><div className="hover:text-black">Our FAQ</div></Link>
                    </div>

                    <div className="flex flex-col text-[#59595A] max-md:ml-5">
                        <div className="font-semibold text-lg text-[#262626]">About Us</div>
                        <Link to={'/courses'}><div className="mt-3 hover:text-black">Company</div></Link>
                        <Link to={'/contact'}><div className="hover:text-black">Achievements</div></Link>
                        <Link to={'/contact'}><div className="hover:text-black">Our Goals</div></Link>
                    </div>

                    <div className="flex flex-col text-[#59595A]">
                        <div className="font-semibold text-lg text-[#262626]">Social Profiles</div>
                        <div className="flex gap-2">
                            <a target="_blank" href="https://facebook.com"><div className="p-3 bg-[#F7F7F8] border border-[#F1F1F3] rounded-lg hover:bg-[#d1d1d1] mt-3"><img className="h-5 w-auto" src="/facebook.png" alt="" /></div></a>
                            <a target="_blank" href="https://twitter.com"><div className="p-3 bg-[#F7F7F8] border border-[#F1F1F3] rounded-lg hover:bg-[#d1d1d1] mt-3"><img className="h-5 w-auto" src="/twitter.png" alt="" /></div></a>
                            <a target="_blank" href="https://linked.com"><div className="p-3 bg-[#F7F7F8] border border-[#F1F1F3] rounded-lg hover:bg-[#d1d1d1] mt-3"><img className="h-5 w-auto" src="/linkedin.png" alt="" /></div></a>
                        </div>
                    </div>

                </div>
            </div>
            <div className="bg-[#F1F1F3] h-[2px] w-full mt-14 max-md:mt-10"></div>
            <div className="text-[#656567] py-8 text-base text-center">© 2023 Skillbridge. All rights reserved.</div>
        </motion.footer>
    )
}

export default Footer
