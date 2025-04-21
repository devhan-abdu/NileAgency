import { buttonVariants } from "@/components/ui/button"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { Dot } from "lucide-react"
import { clientLogos } from "../services/data"

const About = () => {
  return (
    <>
      <section className="px-2 sm:px-0 pt-16 pb-8 md:pt-24 text-gray-20 relative text-left sm:text-center">
        <div className="absolute inset-0 bg-[#1aa3a3] bg-[size:20px_20px] opacity-10 blur-[100px]"></div>
        <h1 className=" text-4xl sm:text-5xl leading-[1.2] font-bold capitalize text-gray-300  font-serif max-w-[700px] mx-auto  mb-4 ">
          <span className="">We Are </span><span className="text-gray-400"></span> <span className="text-[#1aa3a3]">NileAgency Your </span> <br /><span className="text-gray-400"> Degital </span><span>Growth Partner</span>
        </h1>
        <p className="text-gray-300 text-base lg:text-lg capitalize mb-12 ">We deliver innovative Ecommerce, Digital Marketing, and UI/UX solutions that drive results, crafted with precision to elevate your brand.</p>
        <Link
          href="#service"
          className={cn(
            buttonVariants({ variant: 'default', size: 'lg' }),
            ' font-semibold text-lg hover:scale-[1.05] transform duration-300 px-5 py-5 lg:p-5 text-black '
          )}
        >
          Start Your Journey
        </Link>
      </section>
      <section className="py-12 md:py-16 space-y-12">
        <div className="flex gap-4  justify-center">
          <h1 className="w-1/2 text-[32px] sm:text-[42px] leading-[1.2] font-bold capitalize text-gray-300  font-serif  mx-auto  mb-4 ">
            <span className="">We Are <span className="text-primary-500">Leaders</span><br /> in Transformative </span> <br /><span className="text-gray-400"> Digital</span><span> Solutions</span>
          </h1>
          <div className="text-gray-300 w-1/2 ">
            <p className="leading-8" >NileAgency , founded in 2015, is a digital powerhouse delivering inovative solution in UI/UX Design , Web Development ,App Develpment , Content Writing , Digital Marketing and Ecommerce</p><br />
            <p className="leading-8" >Our mission is empowering businesses with cutting-edge digital solutions that drive growth and engagement effortlessly</p>
          </div>
        </div>
        <div className="flex items-center justify-center gap-4 ">
          <div className=" relative  ">
            <img
              src='/solution2.jpg'
              alt={` team`}
              className="rounded-lg shadow-lg  object-cover max-w-md w-full h-[330px] relative "
              loading="lazy"
            />
          </div>
          <div className=" relative  ">
            <img
              src='/solution2.jpg'
              alt={` team`}
              className="rounded-lg shadow-lg  object-cover max-w-md w-full h-[330px] relative "
              loading="lazy"
            />
          </div>
          <div className=" relative  ">
            <img
              src='/solution2.jpg'
              alt={` team`}
              className="rounded-lg shadow-lg  object-cover max-w-md w-full h-[330px] relative "
              loading="lazy"
            />
          </div>
        </div>
        <div className="flex px-4 justify-between gap-8 text-gray-200">
          <div className="w-1/2">
            <h1 className=" text-2xl sm:text-3xl leading-[1.2] font-bold capitalize text-gray-300  font-serif max-w-[700px] mx-auto  mb-4 ">
              <span className="">Empowering </span><span className="text-[#1aa3a3]"> Digital Growth </span><span className="text-gray-400"></span><span>      Effortlessly
              </span>
            </h1>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span class="text-primary-500 "><Dot /></span>
                <span><strong >Delivering Innovative Solutions Across All Digital Touchpoints :</strong> We create seamless experiences in Ecommerce, UI/UX Design, and Web Development that drive engagement and growth.</span>
              </li>
              <li className="flex items-start">
                <span class="text-primary-500"><Dot /></span>
                <span><strong>Maximizing Impact with Tailored Strategies and Precision :</strong> Our expertise in Digital Marketing and App Development ensures measurable results that elevate your brand.</span>
              </li>
            </ul>
          </div>
          <div className="w-1/2 ">
            <h1 className=" text-2xl sm:text-3xl leading-[1.2] font-bold capitalize text-gray-300  font-serif max-w-[700px] mx-auto  mb-4 ">
              <span className="">How </span><span className="text-[#1aa3a3]">We Solve </span><span className="text-gray-400"></span><span>Challenges</span>
            </h1>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span class="text-primary-500 "><Dot /></span>
                <span><strong>Boost Engagement:</strong> Targeted Digital Marketing and Content Writing to connect with your audience.</span>
              </li>
              <li className="flex items-start">
                <span class="text-primary-500"><Dot /></span>
                <span><strong>Enhance User Experience:</strong> Intuitive UI/UX Design for seamless, engaging interactions.</span>
              </li>
              <li className="flex items-start">
                <span class="text-primary-500 "><Dot /></span>
                <span><strong>Optimize Performance:</strong> High-performance Web Development with modern frameworks.</span>         </li>
              <li className="flex items-start">
                <span class="text-primary-500"><Dot /></span>
                <span><strong>Drive Sales:</strong> Optimized Ecommerce platforms with strategic UX design.</span>
              </li>
            </ul>
          </div>
        </div>

      </section>

      <section class="py-12 md:py-16">
        <h1 className="text-gray-500 text-3xl md:text-4xl capitalize font-serif font-semibold text-center mb-4">
          <span className="text-gray-300">Our </span>
          <span className="text-[#1aa3a3]">Services</span>
        </h1>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 text-gray-300 mt-12">
          <div className="bg-red-200 rounded-lg p-4 shadow-lg bg-linear-to-b from-[#2f3332] to-[#14181c] bg-opacity-30">
            <h3 class="text-xl  text-primary-500 mb-4 text-center">Design</h3>
            <ul class="list-disc pl-5 space-y-2">
              <li>UI/UX Design: Intuitive, user-centric interfaces.</li>
              <li>Content Writing: Engaging, SEO-optimized content.</li>
            </ul>
          </div>
          <div className="bg-red-200 rounded-lg p-4 shadow-lg bg-linear-to-b from-[#2f3332] to-[#14181c] bg-opacity-30">
            <h3 class="text-xl text-primary-500 mb-4 text-center">Development</h3>
            <ul class="list-disc pl-5 space-y-2">
              <li>Web Development: Fast, responsive websites.</li>
              <li>App Development: Cross-platform mobile apps.</li>
            </ul>
          </div>
          <div className="bg-red-200 rounded-lg p-4 shadow-lg bg-linear-to-b from-[#2f3332] to-[#14181c] bg-opacity-30">
            <h3 class="text-xl  text-primary-500 mb-4 text-center">Optimization</h3>
            <ul class="list-disc pl-5 space-y-2">
              <li>Digital Marketing: SEO, PPC, and social media.</li>
              <li>Ecommerce: Conversion-driven online stores.</li>
            </ul>
          </div>
        </div>

        <div className="">
          <div className="grid grid-cols-3 md:grid-cols-5 gap-4 items-center justify-center mt-12 py-4 shadow-xl border border-gray-200">
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

        </div>
      </section>
    </>
  )
}

export default About
