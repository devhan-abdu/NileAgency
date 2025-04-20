'use client'
import Link from "next/link"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { useState } from "react";
import Contact from "@/components/Contact";
import {clientLogos ,benefits ,strategySteps ,services} from './data'


const Service = () => {
  const [benfit, setBenfit] = useState({ index: 0, image: benefits[0].image })
  const [isFading, setIsFading] = useState(false)

  const handleImageChange = (index, image) => {
    setIsFading(true);
    setTimeout(() => {
      setBenfit({ index, image });
      setIsFading(false)
    }, 300)
  }
  return (
    <>
      <section className="px-2 sm:px-0 pt-16 pb-8 md:pt-24 text-gray-20 relative text-left sm:text-center">
      <div className="absolute inset-0 bg-[#1aa3a3] bg-[size:20px_20px] opacity-10 blur-[100px]"></div>
        <h1 className=" text-4xl sm:text-5xl leading-[1.2] font-bold capitalize text-gray-300  font-serif max-w-[700px] mx-auto  mb-4 ">
          <span className="">Elevate Your </span><span className="text-gray-400">Business With</span> <span className="text-[#1aa3a3]">NileAgency’s Digital </span> <br /><span className="text-gray-400">Soluti</span><span>ons</span>
        </h1>
        <p className="text-gray-300 text-base lg:text-lg capitalize mb-12 ">From UI/UX to E-commerce, we deliver tailored solutions for growth.</p>
        <Link
          href="#service"
          className={cn(
            buttonVariants({ variant: 'default', size: 'lg' }),
            ' font-semibold text-lg hover:scale-[1.05] transform duration-300 px-6 py-6 text-black '
          )}
        >
          Descover our Service
        </Link>
      </section>

      <section id="service" className="py-12 md:py-16">
        <h1 className="text-gray-500 text-3xl md:text-4xl capitalize font-serif font-semibold text-center mb-4">
          <span className="text-gray-300">Our </span>
          <span className="text-[#1aa3a3]">Services</span>
        </h1>
        <div className="space-y-8 mt-12">
          {services.map((service, index) => (
            <div
              key={index}
              className={`flex flex-col text-gray-300 py-8 items-center  ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8`}
            >
              <div className="md:w-1/2 w-full">
                <div className="flex items-center mb-4 gap-4">
                  {service.icon}
                  <h3 className="text-3xl font-bold  text-gray-200 ">{service.title}</h3>
                </div>
                <p className="mb-4 line-clamp-4 ">{service.description}</p>
                <ul className="list-disc list-inside text-gray-100 mb-8 ml-4">
                  {service.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className={cn(
                    buttonVariants({ variant: 'default', size: 'lg' }),
                    ' hover:scale-90 scale-85 text-black rounded-md font-serif'
                  )}
                >
                  Work With Us
                </Link>
              </div>
              <div className="md:w-1/2 w-full relative  ">
                <div className={`w-full flex items-center justify-center`}>
                  <div className={`absolute w-full sm:w-3/4 h-3/4 -bottom-6 rounded-lg bg-[radial-gradient(circle,_#1AA3A3_50%,_#68EFA3_100%)] ${index % 2 === 0 ? 'right-4 sm:right-6' : 'left-4 sm:left-6'}`} />
                  <img
                    src={service.media}
                    alt={`${service.title} team`}
                    className="rounded-lg shadow-lg  object-cover max-w-md w-full h-[330px] relative "
                    loading="lazy"
                  />
                </div>
              </div>
            </div>

          ))}
        </div>
      </section>
      <section className="py-12 md:py-16 ">
        <h1 className=" text-4xl sm:text-4xl leading-[1.2] font-bold capitalize text-gray-300  font-serif max-w-[700px] mx-auto  mb-4 text-center">
          <span className="">Our</span> <span className="text-[#1aa3a3]">Proven Strategy</span> <br /><span className="text-gray-400">  for Every </span><span>Service</span>
        </h1>
        <p className="text-gray-300 text-base lg:text-lg capitalize mb-16 text-center max-w-[500px] mx-auto">At NileAgency, we follow a consistent, results-driven process to ensure success across all services.</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {strategySteps.map((step, index) => (
            <div key={index} className="serviceCard bg-linear-to-b from-[#2f3332] to-[#14181c] bg-opacity-30 p-6 rounded-lg shadow-lg  transition text-center cursor-pointer border border-gray-600 transform duration-300">
              <div className="flex justify-center mb-4">{step.icon}</div>
              <h4 className="text-xl font-bold  mb-2 text-gray-300">{step.title}</h4>
              <p className=" text-gray-400">{step.description}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="container mx-auto px-4 py-12">
        <h1 className=" text-4xl sm:text-4xl leading-[1.2] font-bold capitalize text-gray-300  font-serif max-w-[700px] mx-auto  mb-4 text-center">
          <span className="">Why Choose</span> <span className="text-[#1aa3a3]">NileAgency </span><span>?</span>
        </h1>
        <p className="text-gray-300 text-base lg:text-lg capitalize mb-16 text-center max-w-[500px] mx-auto">We’re committed to delivering exceptional results for your business.</p>


        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
          <div className=" w-full hidden md:block">
            <img
              src={benfit.image}
              alt={`team`}
              className={cn('rounded-lg shadow-lg  object-cover w-full h-[500px] transition-opacity duration-300', isFading ? 'opacity-0' : 'opacity-100')}
              loading="lazy"
            />
          </div>
          <div>
            {benefits.map((benefit, index) => (
              <div className={`border-l-4 cursor-pointer px-4 py-2 transition duration-500  ${benfit.index === index ? 'border-[#1AA3A3]' : 'border-gray-400'}`} onClick={() => handleImageChange(index, benefit.image)}>
                <div key={index} className={`p-6 rounded-lg shadow-xl text-center border  hover:border-[#1AA3A3] transition-all ease-in  hover:scale-95 duration-500  bg-linear-to-b from-[#2f3332] to-[#14181c] text-gray-300 ${benfit.index === index ? ' scale-95 border-[#1AA3A3]' : 'scale-90 border-gray-400'}`}>
                  <h4 className="text-xl font-bold">{benefit.title}</h4>
                  <p className=" mt-2">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-12 md:py-16 flex flex-col sm:flex-row justify-center gap-12 md:gap-24 items-center">
        <h1 className=" text-4xl  leading-[1.2] font-bold capitalize text-gray-300 text-center font-serif ">
          Let’s Turn Ideas into Results
        </h1>
        <Link
          href="#service"
          className={cn(
            buttonVariants({ variant: 'default', size: 'lg' }),
            ' font-semibold text-lg hover:scale-[1.05] transform duration-300 px-6 py-6 text-black'
          )}
        >
          Request a Quote
        </Link>
      </section>
      <section className="py-12 md:py-16">
        <h1 className=" text-4xl sm:text-4xl leading-[1.2] font-bold capitalize text-gray-300  font-serif max-w-[700px] mx-auto  mb-4 text-center">
          <span className="">Trusted by</span> <span className="text-[#1aa3a3]">Leading Brands </span>
        </h1>
        <div className="grid grid-cols-3 md:grid-cols-5 gap-4 items-center justify-center mt-12">
          {clientLogos.map((logo, index) => (
            <img
              key={index}
              src={logo}
              alt={`Client logo ${index + 1}`}
              className="w-auto max-h-32 mx-auto transition-all duration-300 scale-95 hover:scale-110 cursor-pointer"
              loading="lazy"
            />
          ))}
        </div>
      </section>
      
      <Contact />

    </>
  )
}

export default Service
