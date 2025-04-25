import { Mail, Phone, Facebook, Instagram, Twitter, PhoneCall, Linkedin } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";

const Contact = () => {
  return (
    <div className="py-10 md:py-14  ">
      <p className="text-center mb-1 ">contact us</p>
      <h2 className="text-3xl lg:text-4xl leading-[1.1] font-bold mb-4 capitalize text-center">
       GET IN TOUCH WITH US
      </h2>
        <div className="flex flex-col md:flex-row place-content-center items-start gap-12  mt-12 md:mt-20">
          <form action="" className=" flex flex-col gap-6 md:w-1/2 w-full">
              <input type="text" className=" px-3  py-2  border-b border-gray-500 placeholder:text-foreground-500/80  outline-none" placeholder="your name" />
              <input type="email" className=" px-3  py-2  border-b  outline-none border-gray-500 placeholder:text-foreground-500/80 " placeholder="Email address" />
              <input type="tel" className=" px-3  py-2  border-b  outline-none border-gray-500 placeholder:text-foreground-500/80 " placeholder="Phone number" />
              <input type="text" className=" px-3  py-2  border-b  outline-none border-gray-500 placeholder:text-foreground-500/80 " placeholder="Subject" />
              <textarea name="" id="" rows={4} className="mt-2 px-3 py-2 rounded-md span-col-2 border border-gray-500 placeholder:text-foreground-500/80 outline-none text-gray-200 focus:outline-ring-1 focus:outline-ring-gray-300 placeholder:text-foreground-500/80 col-span-2 min-h-24" placeholder="Message" />
              <Button  className='rounded-md px-6 py-3 cursor-pointer mt-4 w-max text-black font-bold'>Send Message</Button>
          </form>
          <div className="space-y-4 bg-[#202020] rounded-xl shadow-xl px-6 pt-6 pb-3 w-max h-max">
            <h6 className="text-xl capitalize font-bold text-center">Contact Info</h6>
            <div className="space-y-2">
              <div className="inline-flex gap-2 items-center">
                <h6 className="text-md font-semibold">Phone Number</h6>
              </div>
              <p className="ml-8 mb-1 text-sm text-foreground-500/90">+25195234125</p>
              <p className="ml-8 text-sm text-foreground-500/90">+251743567212</p>
            </div>

            <div className="space-y-2">
            <div className="inline-flex gap-2 items-center">
              <h6 className="text-md font-semibold">Email</h6>
            </div>
            <p className="ml-8 mb-1 text-sm text-foreground-500/90">nileagency12@gmail.com</p>
            <p className="ml-8 text-sm text-foreground-500/90">nileagencyhan@gmail.com</p>
            </div>
            <div className="space-y-4 mt-4 ">
            <h6 className="text-md font-semibold">Follow Us</h6>
            <div className="inline-flex gap-3 text-sm/6 items-center ml-8">
              <Linkedin className="hover:scale-105 transition duration-300 size-5" />
              <Facebook className="hover:scale-105 transition duration-300 size-5" />
              <Instagram className="hover:scale-105 transition duration-300 size-5" />
              <Twitter className="hover:scale-105 transition duration-300 size-5" />
            </div>
            </div>          
          </div>
          </div>
      </div>
  )
}

export default Contact
