import { NavLink } from "react-router"
import { useState } from "react"
import { motion } from "motion/react"
const Navbar = () => {
  const [hamburger, setHamburger] = useState(false)
  return (
    <>
      <motion.nav
        initial={{ y: -200, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <ul className="flex gap-4 justify-center items-center text-white rounded-lg bg-[#FF9500] py-3 mt-4 mx-4">
          <li className="text-sm">Free Courses 🌟 Sale Ends Soon, Get It Now</li>
          <li><NavLink to='courses'><img className="h-3 w-auto" src="/arrow-1.png" alt="arrow" /></NavLink></li>
        </ul>
      </motion.nav>
      <motion.nav className="sticky z-20 top-0"
        initial={{ y: -200, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <ul className="bg-[#F7F7F8] w-full blr bg-opacity-30 py-4 transition duration-300 flex justify-between px-32 items-center max-md:px-4">
          <div className="flex justify-evenly items-center text-base gap-1">
            <li><NavLink className="flex items-center mr-10 max-md:mr-0" to='/'><img className="h-10 w-ato" src="logo.png" alt="logo" /></NavLink></li>
            <li className="max-lg:hidden"><NavLink className={(e) => e.isActive ? 'px-4 py-2 bg-[#e6e6e6] rounded-lg' : 'px-4 py-2 rounded-lg hover:bg-[#e6e6e6] transition-all duration-300'} to='/'>Home</NavLink></li>
            <li className="max-lg:hidden"><NavLink className={(e) => e.isActive ? 'px-4 py-2 bg-[#e6e6e6] rounded-lg' : 'px-4 py-2 rounded-lg hover:bg-[#e6e6e6] transition-all duration-300'} to='/courses'>Courses</NavLink></li>
            <li className="max-lg:hidden"><NavLink className={(e) => e.isActive ? 'px-4 py-2 bg-[#e6e6e6] rounded-lg' : 'px-4 py-2 rounded-lg hover:bg-[#e6e6e6] transition-all duration-300'} to='/about'>About Us</NavLink></li>
            <li className="max-lg:hidden"><NavLink className={(e) => e.isActive ? 'px-4 py-2 bg-[#e6e6e6] rounded-lg' : 'px-4 py-2 rounded-lg hover:bg-[#e6e6e6] transition-all duration-300'} to='/pricing'>Pricing</NavLink></li>
            <li className="max-lg:hidden"><NavLink className={(e) => e.isActive ? 'px-4 py-2 bg-[#e6e6e6] rounded-lg' : 'px-4 py-2 rounded-lg hover:bg-[#e6e6e6] transition-all duration-300'} to='/contact'>Contact</NavLink></li>
          </div>
          <li className="flex items-center gap-5">
            <NavLink to={'/signup'}><button className="rounded-lg px-7 transition-all duration-300 py-[10px] hover:bg-[#d1d0d0]">Sign Up</button></NavLink>
            <NavLink to={"/login"}><button className="bg-[#FF9500] transition-all duration-300 text-white px-8 py-[10px] rounded-lg hover:bg-[#e38602]">Login</button></NavLink>
            <div onClick={() => setHamburger(!hamburger)} className="lg:hidden"><img className="h-5 w-auto" src="hamburger.png" alt="" /></div>
          </li>
        </ul>
      </motion.nav>
      <motion.nav>
        <ul className="bg-white gap-10 h-[150vh] w-[60vw] fixed left-[60vw] top-0 z-30 transition-all duration-500 flex flex-col items-start pl-10"
          style={
            { left: hamburger ? '40vw' : '100vw' }
          }
        >
          <li onClick={() => setHamburger(!hamburger)} className="mt-5"><img className="h-5 w-auto" src="hamburger.png" alt="" /></li>
          <li className="mt-10"><NavLink className={(e) => e.isActive ? 'px-4 py-2 bg-[#e6e6e63] rounded-lg' : 'px-4 py-2 rounded-lg hover:bg-[#e6e6e6] transition-all duration-300'} to='/'>Home</NavLink></li>
          <li className=""><NavLink className={(e) => e.isActive ? 'px-4 py-2 bg-[#e6e6e6] rounded-lg' : 'px-4 py-2 rounded-lg hover:bg-[#e6e6e6] transition-all duration-300'} to='/courses'>Courses</NavLink></li>
          <li className=""><NavLink className={(e) => e.isActive ? 'px-4 py-2 bg-[#e6e6e6] rounded-lg' : 'px-4 py-2 rounded-lg hover:bg-[#e6e6e6] transition-all duration-300'} to='/about'>About Us</NavLink></li>
          <li className=""><NavLink className={(e) => e.isActive ? 'px-4 py-2 bg-[#e6e6e6] rounded-lg' : 'px-4 py-2 rounded-lg hover:bg-[#e6e6e6] transition-all duration-300'} to='/pricing'>Pricing</NavLink></li>
          <li className=""><NavLink className={(e) => e.isActive ? 'px-4 py-2 bg-[#e6e6e6] rounded-lg' : 'px-4 py-2 rounded-lg hover:bg-[#e6e6e6] transition-all duration-300'} to='/contact'>Contact</NavLink></li>
        </ul>
      </motion.nav>
    </>
  )
}

export default Navbar
