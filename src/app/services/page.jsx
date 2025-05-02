import Link from "next/link"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import Contact from "@/components/Contact";
import { clientLogos, strategySteps, services } from './data'



const Service = () => {
  return (
    <div className="font-poppins text-foreground-500" >
      <section className="px-2 sm:px-0 pt-16 pb-8 md:pt-24  ">
        <div className="text-left md:text-center max-w-[700px] mx-auto ">
          <h1 className="text-4xl lg:text-6xl leading-[1.3] font-bold mb-4 capitalize font-montserrat">
            Elevate Your Business With NileAgency
          </h1>
          <p className="mb-6 text-foreground-500/80 text-sm md:text-base">Empowering businesses with innovative solutions, tailored strategies, and cutting-edge technology to achieve unparalleled success.</p>
          <Link
            href="#service"
            className={cn(
              buttonVariants({ variant: 'default', size: 'lg' }),
              'font-poppins font-semibold text-lg hover:scale-[1.05] transform duration-300 px-6 py-3 relative text-background-500 '

            )}
          >
            Descover our Service
          </Link>
        </div>
      </section>

      <section id="service" className="py-10 md:py-14 ">
      <p className="text-center mb-1">Services</p>    
        <h1 className="text-3xl lg:text-4xl leading-[1.3] font-bold capitalize text-center font-montserrat mb-4">
            Our Service
          </h1>
          <p className="text-foreground-500/80 text-center max-w-[500px] mx-auto text-sm">
          Explore our full range of digital services — crafted to elevate your brand and drive meaningful results.        </p>
        <div className="mt-12 md:mt-16  font-montserrat">

          {services.map((service, index) => (
            <div
              key={index}
              className={`flex flex-col py-8 items-center  ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8`}
            >
              <div className="md:w-1/2 w-full ">
                <div className="flex items-center mb-4 gap-4">
                  {service.icon}
                  <h3 className="text-2xl font-bold  text-gray-200 ">{service.title}</h3>
                </div>
                <p className="mb-4 line-clamp-4 text-foreground-500/80 ">{service.description}</p>

                <ul className="list-disc list-inside text-gray-100 mb-8 ml-4">
                  {service.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className={cn(
                    buttonVariants({ variant: 'default', size: 'lg' }),
                    'font-poppins hover:scale-90 scale-85 text-black rounded-md font-semibold'
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
      </section
      <section className="py-10 md:py-14 ">
      <p className="text-center mb-1 font-montserrat">Strategy</p>
       
        <h1 className="text-3xl lg:text-4xl leading-[1.3] font-bold capitalize text-center font-montserrat mb-4">
            Our proven strategy
          </h1>
        <p className="text-foreground-500/80 text-center max-w-[500px] mx-auto text-sm">
        Our proven strategy combines creativity, expertise, and technology to drive measurable results.       </p>

        <div className="grid grid-cols-1 md:grid-cols-3  gap-6 mt-10 md:mt-16 ">
          {strategySteps.map((step, index) => (
            <div key={index} className="serviceCard  py-6 px-4 max-w-[330px] max-h-[230px] mx-auto  rounded-lg shadow-xl text-center cursor-pointer border border-gray-600 transition transform duration-300">
              <div className="flex justify-center mb-4">{step.icon}</div>
              <h4 className="text-xl font-bold  mb-2 font-montserrat">{step.title}</h4>
              <p className=" text-foreground-500/80 ">{step.description}</p>

            </div>
          ))}
        </div>
      </section>

      <Contact />

    </div>
  )
}

export default Service
