'use client'
import Link from "next/link"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { useState } from "react";
import Contact from "@/components/Contact";
import { clientLogos, benefits, strategySteps, services } from './data'
import { whyChooseUs } from "@/lib/serviceDate"


const Service = () => {
  return (
    <div className="font-montserrat text-foreground-500" >
      <section className="px-2 sm:px-0 pt-16 pb-8 md:pt-24  ">
        <div className="text-left md:text-center max-w-[700px] mx-auto ">
          <h1 className="text-4xl lg:text-6xl leading-[1.3] font-bold mb-4 capitalize">
            Elevate Your Business With NileAgency
          </h1>
          <p className="mb-6 text-foreground-500/80 text-sm md:text-base">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto, odit autem. Iste laboriosam  odit autem. Iste laboriosam </p>
          <Link
            href="/contact"
            className={cn(
              buttonVariants({ variant: 'default', size: 'lg' }),
              'font-montserrat font-semibold text-lg hover:scale-[1.05] transform duration-300 px-6 py-3 relative text-background-500 '
            )}
          >
            Descover our Service
          </Link>
        </div>
      </section>

      <section id="service" className="py-10 md:py-14 ">    
        <h1 className="text-3xl lg:text-4xl leading-[1.3] font-bold capitalize text-center">
            Our Service
          </h1>
        <div className="mt-12 md:mt-16">
          {services.map((service, index) => (
            <div
              key={index}
              className={`flex flex-col py-8 items-center  ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8`}
            >
              <div className="md:w-1/2 w-full">
                <div className="flex items-center mb-4 gap-4">
                  {service.icon}
                  <h3 className="text-2xl font-bold  text-gray-200 ">{service.title}</h3>
                </div>
                <p className="mb-4 line-clamp-4 text-foreground-500/80">{service.description}</p>
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
                  <img
                    src={service.media}
                    alt={`${service.title} team`}
                    className="rounded-lg shadow-lg  object-cover max-w-md w-full h-[330px] relative "
                    loading="lazy"
                  />
              </div>
            </div>

          ))}
        </div>
      </section>
      <section className="py-10 md:py-14 ">       
        <h1 className="text-3xl lg:text-4xl leading-[1.3] font-bold capitalize text-center">
            Our proven strategy
          </h1>
        <div className="grid grid-cols-1 md:grid-cols-3  gap-6 mt-10 md:mt-16 ">
          {strategySteps.map((step, index) => (
            <div key={index} className="serviceCard  py-6 px-4 max-w-[330px] max-h-[230px] mx-auto  rounded-lg shadow-xl text-center cursor-pointer border border-gray-600 transition transform duration-300">
              <div className="flex justify-center mb-4">{step.icon}</div>
              <h4 className="text-xl font-bold  mb-2 ">{step.title}</h4>
              <p className=" text-foreground-500/80">{step.description}</p>
            </div>
          ))}
        </div>
      </section>
       <section className="py-10 md:py-14 ">
             <h2 className="text-3xl lg:text-4xl leading-[1.1] font-bold mb-4 capitalize text-center">
             Why Choose NileAgency?
             </h2>
             <div className="mt-12 md:mt-20">
               <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-6 items-center justify-center">
                 <div className=" ">
                   <img
                     src={'/about.jpg'}
                     alt={`team`}
                     className={cn('rounded-xl shadow-lg  object-cover w-full  ')}
                     loading="lazy"
                   />
                 </div>
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                   {
                     whyChooseUs.map((item) => (
                       <div key={item.id} className="text-left space-y-2 mb-6">
                         <div>{item.icon}</div>
                         <h3 className="text-lg font-semibold">{item.title}</h3>
                         <p className="text-sm text-foreground-500/80 line-clamp-3">{item.desc}</p>
                       </div>
                     ))
                   }
                 </div>
               </div>
             </div>
           </section>
      <section className="py-12 md:py-16 flex flex-col sm:flex-row justify-center gap-12 md:gap-24 items-center relative">
      <div className="absolute inset-0 -z-10 h-full w-full items-center rounded-xl px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#202020_60%,#328c05_100%)]"></div>

        <h1 className="text-2xl md:text-4xl  leading-[1.2] font-bold capitalize  text-center  ">
          Let’s Turn Ideas into Results
        </h1>
        <Link
          href="#service"
          className={cn(
            buttonVariants({ variant: 'default', size: 'lg' }),
            ' font-semibold text-lg hover:scale-[1.05] transform duration-300 px-6 py-6 text-black b'
          )}
        >
          Request a Quote
        </Link>
      </section>
      <section className="py-8 sm:py-12">
        <div className=" grid grid-cols-3 md:grid-cols-5 gap-4 items-center justify-center mt-12 px-4 py-6 shadow-xl border border-foreground-500/40  rounded-lg relative ">
          {clientLogos.map((logo, index) => (
            <img
              key={index}
              src={logo}
              alt={`Client logo ${index + 1}`}
              className="w-auto max-h-32 mx-auto transition-all duration-300 scale-95 hover:scale-110 cursor-pointer"
              loading="lazy"
            />
          ))}
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-max px-2 bg-black ">
            <h1 className="text-lg sm:text-2xl  leading-[1.2] font-bold capitalize  text-center  ">
            Trusted by leading Company 
             </h1>
          </div>
        </div>
      </section>

      <Contact />

    </div>
  )
}

export default Service
