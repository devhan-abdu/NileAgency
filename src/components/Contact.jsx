import {Mail, Phone, Facebook, Instagram, Twitter } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";

const Contact = () => {
  return (
    <div className="py-12 md:py-16 relative ">
        <div className="absolute inset-0 bg-[#1aa3a3] bg-[size:20px_20px] opacity-10 blur-[100px]"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-6 items-center justify-between  relative">
          <div className="md:col-span-1 lg:col-span-2" >
            <h1 className="text-gray-500 text-3xl md:text-4xl capitalize font-serif font-semibold text-center mb-8">
              <span className="text-gray-300">Got A </span>
              <span className="text-[#1aa3a3]">Project Or A <br />Partnership</span>
              <span> In </span>
              <span className="text-gray-300">Mind?</span>
            </h1>
            <div className="flex items-center justify-center gap-6 ">
              <div className="text-center">
                <div className="bg-primary-500 inline-flex p-2 rounded-full mb-2">
                  <Phone className="text-black " />
                </div>
                <span className="block text-gray-300">+25195234125</span>
                <span className="block text-gray-300">+251743567212</span>
              </div>
              <div className="text-center">
                <div className="bg-primary-500 inline-flex p-2 rounded-full mb-2">
                  <Mail className="text-black " />
                </div>
                <span className="block text-gray-300">nileagency12@gmail.com</span>
                <span className="block text-gray-300">nileagencyhan@gmail.com</span>
              </div>
            </div>
            <div className="flex space-x-4 items-center justify-center mt-8 md:mt-12">
              <Link href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                <Facebook className="text-blue-600 text-2xl hover:text-blue-800 hover:scale-110 duration-300" />
              </Link>
              <Link href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                <Instagram className="text-pink-500 text-2xl hover:text-pink-700 hover:scale-110 duration-300" />
              </Link>
              <Link href="https://www.pinterest.com" target="_blank" rel="noopener noreferrer">
                <Twitter className="text-red-600 text-2xl hover:text-red-800 hover:scale-110 duration-300" />
              </Link>
            </div>
          </div>

          <form action="" className="md:col-span-1 lg:col-span-2 ">
            <div className="grid grid-cols-2 gap-x-4 gap-y-6 w-full">
              <input type="text" className="rounded-md px-3  py-2  border border-gray-300 outline-none text-gray-200 focus:outline-ring-2 focus:outline-ring-gray-300 placeholder:text-gray-500" placeholder="your name" />
              <input type="email" className="rounded-md px-3  py-2  border border-gray-300 outline-none text-gray-200 focus:outline-ring-2 focus:outline-ring-gray-300 placeholder:text-gray-500" placeholder="Email address" />
              <input type="tel" className="rounded-md px-3  py-2  border border-gray-300 outline-none text-gray-200 focus:outline-ring-2 focus:outline-ring-gray-300 placeholder:text-gray-500" placeholder="Phone number" />
              <input type="text" className="rounded-md px-3  py-2  border border-gray-300 outline-none text-gray-200 focus:outline-ring-2 focus:outline-ring-gray-300 placeholder:text-gray-500" placeholder="Subject" />
              <textarea name="" id="" rows={4} className=" px-3 py-2 rounded-md span-col-2 border border-gray-300 outline-none text-gray-200 focus:outline-ring-1 focus:outline-ring-gray-300 placeholder:text-gray-500 col-span-2 min-h-24" placeholder="Message" />
             <Button  variant='outline' className='rounded-full px-6 py-3 cursor-pointer mt-4 w-max'>Send Message</Button>
            </div>
          </form>
        </div>
      </div>
  )
}

export default Contact
