import Coursecomponent from "../Components/Coursecomponent"
import Description from "../Components/Description"

const Courses = () => {
  return (
    <>
      <Description text1="Online Courses on Design and Development" text2="Welcome to our online course page, where you can enhance your skills in design and development. Choose from our carefully curated selection of 10 courses designed to provide you with comprehensive knowledge and practical experience. Explore the courses below and find the perfect fit for your learning journey." />

      <div className="flex flex-col text-[#262626] gap-8 px-32 pb-32 max-md:px-4 max-md:gap-5">

        <Coursecomponent heading="Web Design Fundamentals" description="Learn the fundamentals of web design, including HTML, CSS, and responsive design principles. Develop the skills to create visually appealing and user-friendly websites." link="/courses" src1="web-1.png" src2="web-2.png" src3="web-3.png" time="4 Weeks" level="Beginner" teacher="By John Smith" text1="Introduction to HTML" text2="Styling with CSS" text3="Introduction to Responsive Design" text4="Design Principles for Web" text5="Building a Basic Website" />
        <Coursecomponent heading="UI/UX Design" description="Master the art of creating intuitive user interfaces (UI) and enhancing user experiences (UX). Learn design principles, wireframing, prototyping, and usability testing techniques." link="/courses" src1="ui_ux-1.png" src2="ui_ux-2.png" src3="ui_ux-3.png" time="6 Weeks" level="Intermediate" teacher="By Emily Johnson" text1="Introduction to UI/UX Design" text2="User Research and Personas" text3="Wireframing and Prototyping" text4="Visual Design and Branding" text5="Usability Testing and Iteration" />
        <Coursecomponent heading="Mobile App Development" description="Dive into the world of mobile app development. Learn to build native iOS and Android applications using industry-leading frameworks like Swift and Kotlin." link="/courses" src1="mobile-1.png" src2="mobile-2.png" src3="mobile-3.png" time="8 Weeks" level="Intermediate" teacher="By David Brown" text1="Introduction to Mobile App Development" text2="Fundamentals of Swift Programming (iOS)" text3="Fundamentals of Kotlin Programming (Android)" text4="Building User Interfaces" text5="App Deployment and Testing" />
        <Coursecomponent heading="Graphic Design for Beginners" description="Discover the fundamentals of graphic design, including typography, color theory, layout design, and image manipulation techniques. Create visually stunning designs for print and digital media." link="/courses" src1="graphic-1.png" src2="graphic-2.png" src3="graphic-3.png" time="10 Weeks" level="Beginner" teacher="By Sarah Thompson" text1="Introduction to Graphic Design" text2="Typography and Color Theory" text3="Layout Design and Composition" text4="Image Editing and Manipulation" text5="Designing for Print and Digital Media" />
        <Coursecomponent heading="Front-End Web Development" description="Become proficient in front-end web development. Learn HTML, CSS, JavaScript, and popular frameworks like Bootstrap and React. Build interactive and responsive websites." link="/courses" src1="frontend-1.png" src2="frontend-2.png" src3="frontend-3.png" time="10 Weeks" level="Intermediate" teacher="By Michael Adams" text1="HTML Fundamentals" text2="CSS Styling and Layouts" text3="JavaScript Basics" text4="Building Responsive Websites" text5="Introduction to Bootstrap and React" />

      </div>
    </>
  )
}

export default Courses
