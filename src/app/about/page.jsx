import { buttonVariants } from "@/components/ui/button"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { Dot } from "lucide-react"
import { clientLogos, solutions } from "../services/data"

const About = () => {
  return (
    <div className="font-montserrat text-foreground-500" >
      <section className="px-2 sm:px-0 pt-16 pb-8 md:pt-24  ">
        <div className="text-left md:text-center max-w-[700px] mx-auto ">
          <h1 className="text-4xl lg:text-6xl leading-[1.3] font-bold mb-4 capitalize">
            We Are NileAgency Your Digital Partner
          </h1>
          <p className="mb-6 text-base">We deliver innovative Ecommerce, Digital Marketing, and UI/UX solutions that drive results, crafted with precision to elevate your brand</p>
          <Link
            href="/contact"
            className={cn(
              buttonVariants({ variant: 'default', size: 'lg' }),
              'font-montserrat font-semibold text-lg hover:scale-[1.05] transform duration-300 px-6 py-3 relative text-background-500 '
            )}
          >
            Start Your Journey
          </Link>
        </div>
      </section>
      <section className="py-12 md:py-16 space-y-16 ">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 justify-center">

          <h1 className="text-4xl lg:text-5xl leading-[1.3] font-bold mb-4 capitalize">
            We Are Leaders in Transformative Digital Solutions
          </h1>
          <div className="leading-8 t">
            <p>NileAgency , founded in 2015, is a digital powerhouse delivering inovative solution in UI/UX Design , Web Development ,App Develpment , Content Writing , Digital Marketing and Ecommerce</p><br />
            <p>Our mission is empowering businesses with cutting-edge digital solutions that drive growth and engagement effortlessly</p>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 items-center justify-center gap-4 ">
          <div >
            <img
              src='/solution2.jpg'
              alt={` team`}
              className="rounded-lg shadow-lg  object-cover max-w-md w-full h-[330px] relative "
              loading="lazy"
            />
          </div>
          <div >
            <img
              src='/solution2.jpg'
              alt={` team`}
              className="rounded-lg shadow-lg  object-cover max-w-md w-full h-[330px] relative "
              loading="lazy"
            />
          </div>
          <div >
            <img
              src='/solution2.jpg'
              alt={` team`}
              className="rounded-lg shadow-lg  object-cover max-w-md w-full h-[330px] relative "
              loading="lazy"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 px-4 justify-between gap-8">
          <div className="">
            <h1 className="text-2xl sm:text-3xl leading-[1.3] font-bold mb-4 capitalize">
              Empowering Digital Growth
            </h1>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span class="text-primary-500 "><Dot /></span>
                <span className="leading-8"><strong >Delivering Innovative Solutions Across All Digital Touchpoints :</strong> We create seamless experiences in Ecommerce, UI/UX Design, and Web Development that drive engagement and growth.</span>
              </li>
              <li className="flex items-start">
                <span class="text-primary-500"><Dot /></span>
                <span className="leading-8"><strong>Maximizing Impact with Tailored Strategies and Precision :</strong> Our expertise in Digital Marketing and App Development ensures measurable results that elevate your brand.</span>
              </li>
            </ul>
          </div>
          <div className="">
            <h1 className="text-2xl sm:text-3xl leading-[1.3] font-bold mb-4 capitalize">
              How We Solve Challenges
            </h1>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span class="text-primary-500 "><Dot /></span>
                <span className="leading-8"><strong>Boost Engagement:</strong> Targeted Digital Marketing and Content Writing to connect with your audience.</span>
              </li>
              <li className="flex items-start">
                <span class="text-primary-500"><Dot /></span>
                <span className="leading-8"><strong>Enhance User Experience:</strong> Intuitive UI/UX Design for seamless, engaging interactions.</span>
              </li>
              <li className="flex items-start">
                <span class="text-primary-500 "><Dot /></span>
                <span className="leading-8"><strong>Optimize Performance:</strong> High-performance Web Development with modern frameworks.</span>         </li>
              <li className="flex items-start">
                <span class="text-primary-500"><Dot /></span>
                <span className="leading-8"><strong>Drive Sales:</strong> Optimized Ecommerce platforms with strategic UX design.</span>
              </li>
            </ul>
          </div>
        </div>

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

      <section class="py-12 md:py-16">
        <h1 className="text-3xl sm:text-4xl leading-[1.3] font-bold mb-4 capitalize text-center">
          Solutions That Drive Success
        </h1>
        <div className="flex items-center justify-center mt-12 md:mt-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {
              solutions.map((item ,index) => (
                <div key={index} className={cn("serviceCard w-[300px] h-[230px] px-4 py-5 rounded-lg border-[1.5px] border-white/20 transform cursor-pointer transition duration-300 ")} >
                  <h3 class="text-2xl  font-bold mb-4 text-center">{item.title}</h3>
                  <ul class="list-disc pl-5 space-y-2">
                    {
                      item.description.map((desc, index) => (
                        <li key={index}>{desc}</li>
                      ))
                    }
                  </ul>
                </div>
              ))
            }
          </div>
        </div>    
      </section>
      <section className="">
        <h1 className="text-3xl sm:text-4xl leading-[1.3] font-bold mb-4 capitalize text-center">
          Our Success Story
        </h1>
        <div className="flex items-center justify-center">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-8 sm:gap-12 mt-12 p-6 sm:p-8">
          <div className="text-center space-y-1 ">
            <p className="text-5xl font-bold text-white/90">150+</p>
            <p className="text-white/80 capitaize font-semibold text-lg">Projects Delivered</p>
          </div>
          <div className="text-center space-y-1 bg-linear-to-b  ">
            <p className="text-5xl font-bold text-white/90">95%</p>
            <p className="text-white/80 capitalize font-semibold text-lg">Client Satisfaction</p>
          </div>
          <div className="text-center space-y-1  ">
            <p className="text-5xl font-bold text-white/90">10+</p>
            <p className="text-white/80 capitalize font-semibold text-lg">Years of Experience</p>
          </div>
          <div className="text-center space-y-1  ">
            <p className="text-5xl font-bold text-white/90">30%</p>
            <p className="text-white/80 capitalize font-semibold text-lg">Avg Revenue Growth</p>
          </div>
        </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <h1 className="text-3xl sm:text-4xl leading-[1.3] font-bold mb-4 capitalize text-center">
          Our Innovation Architects
        </h1>
    
        <div className="flex items-center justify-center mt-12 md:mt-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-12">
        {
          [1,2,3,4,5,6].map((item) =>(
            <div >
            <div className="size-[260px] md:size-[230px] lg:size-[200px] mx-auto ">
              <img src="/profile.jpg" alt="" className="h-full w-full rounded-full  object-cover object-center" />
            </div>
            <div className="text-gray-200 text-cente mt-2 text-center">
              <p className="text-lg font-semibold ">Hanan Abdulshikur</p>
              <h2>NileAgency CEO</h2>
            </div>
          </div>
          ))
        }         
        </div>
        </div>
      </section>
      <section className="py-12 md:py-16 flex flex-col  justify-center gap-4 items-center text-center relative">
      <div className="absolute inset-0 -z-10 h-full w-full items-center rounded-xl px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#202020_60%,#328c05_100%)]"></div>

        <h1 className="text-2xl md:text-4xl  leading-[1.2] font-bold capitalize  text-center  ">
          Transform Your Ideas into Reality
        </h1>
        <p className="mb-2 text-sm md:text-base">Don't settle for mediocrity. Partner with NileAgency for <br/> innovative solutions that drive success.
        </p>
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
    </div>
  )
}

export default About
