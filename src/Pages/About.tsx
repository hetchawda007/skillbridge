import Aboutcomponent1 from "../Components/Aboutcomponent1"
import Description from "../Components/Description"
import { motion } from "motion/react"
import { useState } from "react";
import { Link } from "react-router"
const About = () => {
  const [animate, setAnimate] = useState(false)
  return (
    <>
      <Description text1="About Skillbridge" text2="Welcome to our platform, where we are passionate about empowering individuals to master the world of design and development. We offer a wide range of online courses designed to equip learners with the skills and knowledge needed to succeed in the ever-evolving digital landscape." />

      <div>

        <Aboutcomponent1 title1="Achievements" text1="Our commitment to excellence has led us to achieve significant milestones along our journey. Here are some of our notable achievements" src1="image-14.png" title2="Trusted by Thousands" text2="We have successfully served thousands of students, helping them unlock their potential and achieve their career goals." src2="image-15.png" title3="Award-Winning Courses" text3="Our courses have received recognition and accolades in the industry for their quality, depth of content, and effective teaching methodologies." src3="image-16.png" title4="Positive Student Feedback" text4="We take pride in the positive feedback we receive from our students, who appreciate the practicality and relevance of our course materials." src4="image-17.png" title5="Industry Partnerships" text5="We have established strong partnerships with industry leaders, enabling us to provide our students with access to the latest tools and technologies" />

        <Aboutcomponent1 src1="image-18.png" src2="image-19.png" src3="image-20.png" src4="image-21.png" text1="At SkillBridge, our goal is to empower individuals from all backgrounds to thrive in the world of design and development. We believe that education should be accessible and transformative, enabling learners to pursue their passions and make a meaningful impact. Through our carefully crafted courses, we aim to" text2="We focus on delivering practical skills that are relevant to the current industry demands. Our courses are designed to equip learners with the knowledge and tools needed to excel in their chosen field." text3="We encourage creative thinking and problem-solving abilities, allowing our students to tackle real-world challenges with confidence and innovation." text4="We believe in the power of collaboration and peer learning. Our platform fosters a supportive and inclusive community where learners can connect, share insights, and grow together." text5="The digital landscape is constantly evolving, and we strive to stay at the forefront of industry trends. We regularly update our course content to ensure our students receive the latest knowledge and skills." title1="Our Goals" title2="Provide Practical Skills" title3="Foster Creative Problem-Solving" title4="Promote Collaboration and Community" title5="Stay Ahead of the Curve" />

      </div>

      <motion.div className="flex px-14 mx-32 mb-20 py-16 justify-around rounded-lg bg-white items-center max-md:flex-col max-md:mx-4 max-md:px-4 max-md:gap-5"
        initial={animate === false ? { opacity: 0, scale: 0.9 } : { opacity: 1, scale: 1 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        onAnimationComplete={() => setAnimate(true)}
      >
        <div className="flex flex-col gap-3 w-[60%] max-md:w-full z-10">
          <div className="text-[#262626] text-3xl font-semibold"><span className="text-[#FF9500] font-semibold text-4xl">Together</span>, let's shape the future of digital innovation</div>
          <div className="text-sm text-[#4C4C4D]">Join us on this exciting learning journey and unlock your potential in design and development.</div>
        </div>
        <div className="h-0 relative top-0 self-start max-md:self-center"><img className="relative bottom-16 self-start h-60 w-auto" src="image-22.png" alt="logo" /></div>
        <div className="z-10"><Link to={'/signup'}><button className="bg-[#FF9500] text-white font-semibold px-5 py-3 rounded-lg hover:bg-[#e38602]">Join Now</button></Link></div>
      </motion.div>

    </>
  )
}

export default About
