import './App.css'
import Marquee from "react-fast-marquee"
import { motion } from "motion/react"
import { Link } from 'react-router'
import { useState } from 'react'
import Homecomponent1 from './Components/Homecomponent1'
import Homecomponent2 from './Components/Homecomponent2'
import Homecomponent3 from './Components/Homecomponent3'
import Homecomponent4 from './Components/Homecomponent4'
import Faqs from './Components/Faqs'
import Pricing from './Components/Pricing'
function App() {
  const [animate, setAnimate] = useState(false)
  return (
    <>
      <div className='container px-24 mx-auto flex flex-col max-md:px-4'>

        <motion.div className='relative flex flex-col gap-5 w-[50%] mx-auto items-center mt-10 justify-center max-xl:w-[90%] max-md:w-full'
          initial={{ opacity: 0, scale: 0.2 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 1.5, type: 'spring', stiffness: 100, damping: 10, bounce: 1 }}
        >
          <div className='h-0 self-start pl-16 max-lg:pl-0 max-md:pr-4'>
            <img className='w-auto h-7 relative' src="/image-1.png" alt="" />
          </div>
          <div className='flex gap-2 text-3xl font-semibold items-center bg-[#FCFCFD] w-fit px-5 py-3 max-md:text-lg max-md:gap-1'>
            <img className='h-10 w-auto' src="/image-2.png" alt="" />
            <div className='text-[#FF9500]'>Unlock</div>
            <div>Your Creative Potential</div>
          </div>
          <div>
            <div className='flex flex-col gap-3 items-center'>
              <div className='text-2xl font-semibold max-md:text-lg max-md:w-[85%] text-center'>with Online Design and Development Courses.</div>
              <div className='text-sm max-md:w-[85%] text-center'>Learn from Industry Experts and Enhance Your Skills.</div>
            </div>
          </div>
          <div className='flex gap-5 justify-center items-center mt-5'>
            <Link to={'/courses'}><button className='bg-[#FF9500] text-white rounded-lg px-5 py-3 hover:bg-[#e38602]'>Explore Courses</button></Link>
            <Link to={'/pricing'}><button className='bg-white rounded-lg px-5 py-3 hover:bg-[#d1d0d0]'>View Pricing</button></Link>
          </div>
        </motion.div>

        <motion.div className='max-lg:hidden my-20'
          initial={{ opacity: 0, y: 200 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 2, type: 'spring', stiffness: 100, damping: 10, bounce: 1 }}
        >
          <Marquee gradient gradientColor='#F7F7F8' className='flex py-10 w-screen items-center'>
            <div className='mx-10 cursor-pointer'>
              <img src="/zapier.png" alt="company" />
            </div>
            <div className='mx-10 cursor-pointer'>
              <img src="/spotify.png" alt="company" />
            </div>
            <div className='mx-10 cursor-pointer'>
              <img src="/zoom.png" alt="company" />
            </div>
            <div className='mx-10 cursor-pointer'>
              <img src="/amazon.png" alt="company" />
            </div>
            <div className='mx-10 cursor-pointer'>
              <img src="/adobe.png" alt="company" />
            </div>
            <div className='mx-10 cursor-pointer'>
              <img src="/notion.png" alt="company" />
            </div>
            <div className='mx-10 cursor-pointer'>
              <img src="/netflix.png" alt="company" />
            </div>
          </Marquee>
        </motion.div>
        <motion.div className='lg:hidden flex flex-wrap justify-evenly bg-[#FCFCFD] border border-[#F1F1F3] p-5 rounded-lg items-center gap-3 my-20'>
          <div className='mx-10 cursor-pointer max-lg:mx-0'>
            <img className='w-28 h-auto max-md:w-20' src="/zapier.png" alt="company" />
          </div>
          <div className='mx-10 cursor-pointer max-lg:mx-0'>
            <img className='w-32 h-auto max-md:w-24' src="/spotify.png" alt="company" />
          </div>
          <div className='mx-10 cursor-pointer max-lg:mx-0'>
            <img className='w-28 h-auto max-md:w-20' src="/zoom.png" alt="company" />
          </div>
        </motion.div>

        <motion.div className="flex justify-center bg-[url('/image-3.png')] rounded-xl h-[80vh] bg-center mx-auto w-[69vw] max-md:h-[40vh] max-md:w-full"
          initial={{ opacity: 0, scale: 0.2 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 2.5, type: 'spring', stiffness: 100, damping: 10 }}
        >
        </motion.div>

        <Homecomponent2 text1='Benefits' text2="Gain access to courses 24/7 from the comfort of your home or on the go. Learn at your own pace, whether you're an early bird or a night owl. Our courses are designed to accommodate your schedule and lifestyle." />

        <div className='flex flex-wrap gap-5'>

          <Homecomponent1 text1='01' text2='Flexible Learning Schedule' text3='Fit your coursework around your existing commitments and obligations.' />
          <Homecomponent1 text1='02' text2='Expert Instruction' text3='Learn from industry experts who have hands-on experience in design and development.' />
          <Homecomponent1 text1='03' text2='Diverse Course Offerings' text3='Explore a wide range of design and development courses covering various topics.' />
          <Homecomponent1 text1='04' text2='Updated Curriculum' text3='Access courses with up-to-date content reflecting the latest trends and industry practices.' />
          <Homecomponent1 text1='05' text2='Practical Projects and Assignments' text3='Develop a portfolio showcasing your skills and abilities to potential employers.' />
          <Homecomponent1 text1='06' text2='Interactive Learning Environment' text3='Collaborate with fellow learners, exchanging ideas and feedback to enhance your understanding.' />

        </div>

        <Homecomponent2 text1='Our Courses' text2='Choose from a wide range of design and development courses tailored to your interests and career goals. Whether you are a beginner or an experienced professional, we have courses to help you enhance your skills and advance your career.' />

        <div className='flex flex-wrap justify-center gap-10'>

          <Homecomponent3 imgsrc='/image-4.png' text1='4 Weeks' text2='Beginner' text3='By John Smith' text4='Web Design Fundamentals' text5='Learn the fundamentals of web design, including HTML, CSS, and responsive design principles. Develop the skills to create visually appealing and user-friendly websites.' redirectsrc='/' />
          <Homecomponent3 imgsrc='/image-5.png' text1='6 Weeks' text2='Intermediate' text3='By Emily Johnson' text4='UI/UX Design' text5='Master the art of creating intuitive user interfaces (UI) and enhancing user experiences (UX). Learn design principles, wireframing, prototyping, and usability testing techniques.' redirectsrc='/' />
          <Homecomponent3 imgsrc='/image-6.png' text1='8 Weeks' text2='Intermediate' text3='By David Brown' text4='Mobile App Development' text5='Dive into the world of mobile app development. Learn to build native iOS and Android applications using industry-leading frameworks like Swift and Kotlin.' redirectsrc='/' />
          <Homecomponent3 imgsrc='/image-7.png' text1='10 Weeks' text2='Beginner' text3='By Sarah Thompson' text4='Graphic Design for Beginners' text5='Discover the fundamentals of graphic design, including typography, color theory, layout design, and image manipulation techniques. Create visually stunning designs for print and digital media.' redirectsrc='/' />
          <Homecomponent3 imgsrc='/image-8.png' text1='10 Weeks' text2='Intermediate' text3='By Michael Adams' text4='Front-End Web Development' text5='Become proficient in front-end web development. Learn HTML, CSS, JavaScript, and popular frameworks like Bootstrap and React. Build interactive and responsive websites.' redirectsrc='/' />
          <Homecomponent3 imgsrc='/image-9.png' text1='6 Weeks' text2='Advance' text3='By Jennifer Wilson' text4='Advanced JavaScript' text5='Take your JavaScript skills to the next level. Explore advanced concepts like closures, prototypes, asynchronous programming, and ES6 features. Build complex applications with confidence.' redirectsrc='/' />

        </div>

        <Homecomponent2 text1='Our Testimonials' text2='Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum eget habitasse in velit fringilla feugiat senectus in.' />

        <div className='flex flex-wrap justify-center gap-10'>

          <Homecomponent4 text1='The web design course provided a solid foundation for me. The instructors were knowledgeable and supportive, and the interactive learning environment was engaging. I highly recommend it!' src='/profile-1.png' text2='Sarah L' />
          <Homecomponent4 text1="The UI/UX design course exceeded my expectations. The instructor's expertise and practical assignments helped me improve my design skills. I feel more confident in my career now. Thank you!" src='/profile-2.png' text2='Jason M' />
          <Homecomponent4 text1="The mobile app development course was fantastic! The step-by-step tutorials and hands-on projects helped me grasp the concepts easily. I'm now building my own app. Great course!" src='/profile-3.png' text2='Emily R' />
          <Homecomponent4 text1="I enrolled in the graphic design course as a beginner, and it was the perfect starting point. The instructor's guidance and feedback improved my design abilities significantly. I'm grateful for this course!" src='/profile-4.png' text2='Michael K' />

        </div>

        <motion.div className='flex flex-col gap-3 my-20'
          initial={animate === false ? { opacity: 0, scale: 0.9 } : { opacity: 1, scale: 1 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2 }}
          onAnimationComplete={() => setAnimate(true)}
        >
          <div className='text-4xl font-semibold'>Our Pricing</div>
          <div className='flex justify-between max-md:flex-col gap-5'>
            <div className='w-[70%] flex items-center text-sm text-[#59595A] max-md:w-full'>
              Choose from our flexible pricing plans to access our courses and unlock your creative potential. Whether you're a beginner or an experienced professional, we have a plan that suits your needs. Enroll today and start learning!</div>
            <div className='p-2 bg-white flex gap-3 rounded-lg max-md:w-fit max-md:self-center'>
              <button className='bg-[#FF9500] rounded-lg text-sm px-6 py-3 text-white hover:bg-[#e38602]'>Monthly</button>
              <button className='bg-white rounded-lg text-sm px-4 py-2 hover:bg-[#d1d0d0] text-[#4C4C4D]'>Yearly</button>
            </div>
          </div>
        </motion.div>

        <Pricing />
        <Faqs />

      </div>
    </>
  )
}

export default App