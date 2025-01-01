import { useState } from "react"
import { Link } from "react-router"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { motion } from 'motion/react'
const Login = () => {
  const [form, setform] = useState({ email: "", password: "" })
  const [eye, setEye] = useState(false)
  const [animate, setAnimate] = useState(false)
  const handlechanghe = (e: React.ChangeEvent<HTMLInputElement>) => {
    setform({ ...form, [e.target.name]: e.target.value });
  }
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log(form)
    setTimeout(() => {
      toast('Login Successful', {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }, 1000);
    setform({ email: "", password: "" })
  }
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <ToastContainer />

      <motion.div className="flex flex-col my-10 rounded-xl items-center mx-auto w-1/2 bg-white px-8 py-10 max-md:px-4 max-md:w-full"
        initial={animate === false ? { opacity: 0, scale: 0.9 } : { opacity: 1, scale: 1 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        onAnimationComplete={() => setAnimate(true)}
      >
        <div className="flex flex-col items-center gap-3">
          <div className="text-4xl font-semibold text-[#262626]">Login</div>
          <div className="text-[#4C4C4D] max-md:text-center">Welcome back! Please log in to access your account.</div>
        </div>
        <form className="self-start flex flex-col gap-4 w-full mt-10" onSubmit={handleSubmit}>
          <div className="flex flex-col gap-3 w-full">
            <label className="text-[#262626] font-semibold" htmlFor="name">Email</label>
            <input onChange={handlechanghe} value={form.email} className="placeholder:text-[#656567] text-[#656567] p-3 outline-[#FF9500] rounded-lg w-full bg-[#FCFCFD] border border-[#F1F1F3]" type="email" name="email" id="email" placeholder="Enter your Email" px-5 py-3 />
          </div>
          <div className="flex flex-col gap-3 w-full">
            <label className="text-[#262626] font-semibold" htmlFor="name">Password</label>
            <input onChange={handlechanghe} value={form.password} className="placeholder:text-[#656567] text-[#656567] p-3 outline-[#FF9500] rounded-lg w-full bg-[#FCFCFD] border border-[#F1F1F3]" type={eye ? "text" : "password"} name="password" id="name" placeholder="Enter your Password" px-5 py-3 />
            <div className="h-0 relative bottom-[46px] self-end right-4">
              {eye === true ? <img className="h-5 w-auto cursor-pointer" onClick={() => setEye(!eye)} src="/eye.png" alt="eye" />
                : <img className="h-5 w-auto cursor-pointer" onClick={() => setEye(!eye)} src="/hidden.png" alt="eye" />}
            </div>
            <div className="self-end hover:underline cursor-pointer  text-[#4C4C4D] mb-4">Forgot Password?</div>
          </div>
            <button 
            className="bg-[#FF9500] transition-all duration-300 text-white py-[10px] disabled:bg-[#bb8130] rounded-lg hover:bg-[#e38602]" 
            type="submit" 
            disabled={!form.email || !form.password}
            >
            Login
            </button>
        </form>
        <div className="w-full items-center my-8 flex gap-2">
          <div className="h-[2px] w-full bg-[#E4E4E7]"></div>
          <div className="text-[#98989A]">OR</div>
          <div className="h-[2px] w-full bg-[#E4E4E7]"></div>
        </div>
        <div className="flex items-center gap-2 my-5">
          <div>Don’t have an account?</div>
          <Link className="flex gap-2 items-center" to={'/signup'}><div className="underline">Sign Up</div><img className="h-3 w-auto" src="arrow-3.png" alt="arrow" /></Link>
        </div>
      </motion.div>
    </>
  )
}

export default Login
