import Description from "../Components/Description"
import { useState } from "react"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { motion } from 'motion/react';
const Contact = () => {
  const [form, setform] = useState({ fname: "", lname: "", email: "", phone: "", subject: "", message: "" })
  const [animate1, setAnimate1] = useState(false);
  const [animate2, setAnimate2] = useState(false);

  const handlesubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(form);
    setTimeout(() => {
      toast('✅ We will contact you shortly', {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }, 1000);
    setform({ fname: "", lname: "", email: "", phone: "", subject: "", message: "" });
  }

  const handlechange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setform({ ...form, [e.target.name]: e.target.value });
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
        theme="dark"
      />

      <ToastContainer />

      <Description text1="Contact Us" text2="Welcome to SkillBridge's Pricing Plan page, where we offer two comprehensive options to cater to your needs: Free and Pro. We believe in providing flexible and affordable pricing options for our services. Whether you're an individual looking to enhance your skills or a business seeking professional development solutions, we have a plan that suits you. Explore our pricing options below and choose the one that best fits your requirements." />

      <div className="flex mx-32 mb-20 bg-white justify-between p-14 rounded-lg items-center max-md:mx-4 max-md:flex-col max-md:p-4">

        <motion.div className="w-[60%] max-md:w-full"
          initial={animate1 === false ? { opacity: 0, scale: 0.9 } : { opacity: 1, scale: 1 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          onAnimationComplete={() => setAnimate1(true)}
        >
          <form onSubmit={handlesubmit}>
            <div className="flex flex-wrap gap-5">
              <div className="flex flex-col gap-3 w-[48%] max-md:w-full">
                <label className="text-[#262626] font-semibold" htmlFor="fname">First Name</label>
                <input onChange={handlechange} value={form.fname} className="bg-[#FCFCFD] outline-[#FF9500] rounded-lg text-[#656567] border border-[#F1F1F3] pr-5 pl-3 placeholder-[#656567] py-3 w-full" type="text" name="fname" id="fname" placeholder="Enter First Name" />
              </div>
              <div className="flex flex-col gap-3 w-[48%] max-md:w-full">
                <label className="text-[#262626] font-semibold" htmlFor="lname">Last Name</label>
                <input onChange={handlechange} value={form.lname} className="bg-[#FCFCFD] outline-[#FF9500] rounded-lg text-[#656567] border border-[#F1F1F3] pr-5 pl-3 placeholder-[#656567] py-3 w-full" type="text" name="lname" id="lname" placeholder="Enter Last Name" />
              </div>
              <div className="flex flex-col gap-3 w-[48%] max-md:w-full">
                <label className="text-[#262626] font-semibold" htmlFor="email">Email</label>
                <input onChange={handlechange} value={form.email} className="bg-[#FCFCFD] outline-[#FF9500] rounded-lg text-[#656567] border border-[#F1F1F3] pr-5 pl-3 placeholder-[#656567] py-3 w-full" type="email" name="email" id="email" placeholder="Enter your Email" />
              </div>
              <div className="flex flex-col gap-3 w-[48%] max-md:w-full">
                <label className="text-[#262626] font-semibold" htmlFor="phone">Phone</label>
                <input onChange={handlechange} value={form.phone} className="bg-[#FCFCFD] outline-[#FF9500] rounded-lg text-[#656567] border border-[#F1F1F3] pr-5 pl-3 placeholder-[#656567] py-3 w-full" type="tel" name="phone" id="phone" placeholder="Enter Phone Number" />
              </div>
            </div>
            <div className="flex flex-col gap-3 mt-8 w-full">
              <label className="text-[#262626] font-semibold" htmlFor="phone">Subject</label>
              <input onChange={handlechange} value={form.subject} className="bg-[#FCFCFD] outline-[#FF9500] rounded-lg text-[#656567] border border-[#F1F1F3] pr-5 pl-3 placeholder-[#656567] py-3 w-full" type="tel" name="subject" id="subject" placeholder="Enter your Subject" />
            </div>
            <div className="flex flex-col mt-8 gap-3 w-full">
              <label className="text-[#262626] font-semibold" htmlFor="phone">Message</label>
              <textarea onChange={handlechange} value={form.message} className="bg-[#FCFCFD] outline-[#FF9500] resize-none rounded-lg text-[#656567] border border-[#F1F1F3] pr-5 pl-3 placeholder-[#656567] py-3 w-full" name="message" id="message" rows={5} placeholder="Enter your Message here..." />
            </div>
            <div className="flex justify-center mt-10">
              <button type="submit" disabled={!form.fname || !form.lname || !form.email || !form.phone || !form.subject || !form.message} className="bg-[#FF9500] disabled:bg-[#bb8130] transition-all duration-300 text-white px-8 py-[10px] rounded-lg hover:bg-[#e38602]">Send your message</button>
            </div>
          </form>
        </motion.div>
        <motion.div className="w-[30%] flex flex-col gap-10 max-md:w-full max-md:my-10 max-md:items-center"
          initial={animate2 === false ? { opacity: 0, scale: 0.9 } : { opacity: 1, scale: 1 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          onAnimationComplete={() => setAnimate2(true)}
        >

          <div className="flex flex-col items-center bg-[#FCFCFD] border border-[#F1F1F3] rounded-md md:pb-8 md:pt-3 py-3 text-[#59595A] max-md:w-[80%]">
            <a className="flex gap-2 mt-5 bg-[#F7F7F8] items-center p-3 brder border-[#F1F1F3] rounded-lg hover:bg-[#d1d1d1]" href="mailto:hello@skillbridge.com?subject=Hello&body=I%20am%20reaching%20out%20about...">
              <img className="h-4 w-auto" src="/mail.png" alt="mail" />
            </a>
            <a className="flex gap-2 mt-5 items-center" href="mailto:hello@skillbridge.com?subject=Hello&body=I%20am%20reaching%20out%20about...">
              <div>hello@skillbridge.com</div>
            </a>
          </div>

          <div className="flex flex-col gap-5 items-center bg-[#FCFCFD] border border-[#F1F1F3] rounded-md md:pb-8 md:pt-3 py-3 text-[#59595A] max-md:w-[80%]">
            <a className="flex gap-2 bg-[#F7F7F8] border items-center p-3 brder border-[#F1F1F3] rounded-lg hover:bg-[#d1d1d1]" href="tel:+91 91813 23 2309">
              <img className="h-5 w-auto" src="/phone.png" alt="mail" />

            </a>
            <a className="flex gap-2 items-center" href="tel:+91 91813 23 2309">
              <div>+91 91813 23 2309</div>
            </a>
          </div>

          <div className="flex flex-col gap-5 items-center bg-[#FCFCFD] border border-[#F1F1F3] rounded-md md:pb-8 md:pt-3 py-3 text-[#59595A] max-md:w-[80%]">
            <a className="flex gap-2 bg-[#F7F7F8] items-center p-3 brder border-[#F1F1F3] rounded-lg hover:bg-[#d1d1d1]" target="_blank" href="https://googlemaps.com">
              <img className="h-5 w-auto" src="/location.png" alt="mail" />
            </a>
            <a className="flex gap-2 items-center" target="_blank" href="https://googlemaps.com">
              <div>Somewhere in the World</div>
            </a>
          </div>

          <div className="flex flex-col gap-3 items-center bg-[#FCFCFD] border border-[#F1F1F3] rounded-md md:pb-8 md:pt-3 py-3 text-[#59595A] max-md:w-[80%]">
            <div className="flex gap-2">
              <a target="_blank" href="https://facebook.com"><div className="p-3 bg-[#F7F7F8] border border-[#F1F1F3] rounded-lg hover:bg-[#d1d1d1] mt-3"><img className="h-5 w-auto" src="/facebook.png" alt="" /></div></a>
              <a target="_blank" href="https://twitter.com"><div className="p-3 bg-[#F7F7F8] border border-[#F1F1F3] rounded-lg hover:bg-[#d1d1d1] mt-3"><img className="h-5 w-auto" src="/twitter.png" alt="" /></div></a>
              <a target="_blank" href="https://linked.com"><div className="p-3 bg-[#F7F7F8] border border-[#F1F1F3] rounded-lg hover:bg-[#d1d1d1] mt-3"><img className="h-5 w-auto" src="/linkedin.png" alt="" /></div></a>
            </div>
            <div className="text-[#4C4C4D]">Social Profiles</div>
          </div>

        </motion.div>

      </div>

    </>
  )
}

export default Contact
