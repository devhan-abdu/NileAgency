import { buttonVariants } from "@/components/ui/button"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { Dot } from "lucide-react"
import { clientLogos } from "../services/data"

const About = () => {
  return (
    <div className="text-gray-300">
      <section className="pt-16 pb-8 md:pt-24 text-left sm:text-center max-w-[700px] mx-auto">
        <h1 className=" text-4xl sm:text-5xl leading-[1.2] font-bold capitalize   font-serif   mb-4 ">
          <span className="">We Are </span><span className="text-gray-400"></span> <span className="text-primary-500">NileAgency Your </span><span className="text-gray-400"> Degital </span><span>Growth Partner</span>
        </h1>
        <p className="text-base lg:text-lg leading-8 capitalize mb-12 sm:px-24 ">We deliver innovative Ecommerce, Digital Marketing, and UI/UX solutions that drive results, crafted with precision to elevate your brand.</p>
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
      <section className="py-12 md:py-16 space-y-16 ">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 justify-center">
          <h1 className=" text-[32px] sm:text-[42px] text-left leading-[1.2] font-bold capitalize font-serif mb-4 ">
            <span className="">We Are <span className="text-primary-500">Leaders </span></span><span className="text-gray-300">in Transformative </span> <span> Digital Solutions</span>
          </h1>
          <div className="leading-8">
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
            <h1 className=" text-2xl sm:text-3xl leading-[1.2] font-bold capitalize font-serif mb-6 ">
              <span className="">Empowering </span><span className="text-primary-500"> Digital Growth </span><span className="text-gray-400"></span>
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
          <div className="">
            <h1 className=" text-2xl sm:text-3xl leading-[1.2] font-bold capitalize  font-serif mb-6">
              <span className="">How </span><span className="text-primary-500">We Solve </span><span className="text-gray-400"></span><span>Challenges</span>
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

      <section className="py-8 sm:py-12">
        <div className=" grid grid-cols-3 md:grid-cols-5 gap-4 items-center justify-center mt-12 px-4 py-12 sm:py-6 shadow-xl border border-gray-700  rounded-lg relative ">
          {clientLogos.map((logo, index) => (
            <img
              key={index}
              src={logo}
              alt={`Client logo ${index + 1}`}
              className="w-auto max-h-32 mx-auto transition-all duration-300 scale-95 hover:scale-110 cursor-pointer"
              loading="lazy"
            />
          ))}
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-2 bg-black text-gray-200 text-center">
            <p className="text-lg md:text-xl  font-serif ">Trusted by leading Company</p>
          </div>
        </div>
      </section>

      <section class="py-12 md:py-16">
        <h1 className=" text-3xl md:text-4xl capitalize font-serif font-bold text-center">
          <span className="text-gray-300">Solutions</span>
          <span className="text-primary-500"> That Drive Success </span>
        </h1>
        <div class="flex flex-wrap items-stretch place-content-center gap-8 text-gray-300 mt-20  ">
          <div className=" rounded-lg px-4 py-6 shadow-xl border border-gray-500 w-[250px] ">
            <h3 class="text-2xl  font-bold mb-4 text-center">Design and UX</h3>
            <ul class="list-disc pl-5 space-y-2">
              <li>UI/UX Design</li>
              <li>User-Centric Experiences</li>
              <li>Tools: Figma, Adobe XD, Sketch</li>
            </ul>
          </div>
          <div className=" rounded-lg px-4 py-6 shadow-xl border border-gray-500 w-[250px] ">
            <h3 class="text-2xl font-bold mb-4 text-center">Development</h3>
            <ul class="list-disc pl-5 space-y-2">
              <li>Web Development</li>
              <li>App Development</li>
              <li>Ecommerce Solutions</li>
              <li>Technologies: React, Flutter, Shopify, WordPress </li>
            </ul>
          </div>
          <div className=" rounded-lg px-4 py-6 shadow-xl border border-gray-500 w-[250px] ">
            <h3 class="text-2xl  font-bold mb-4 text-center"> Digital Marketing</h3>
            <ul class="list-disc pl-5 space-y-2">
              <li> Digital Marketing</li>
              <li>Engagement & Growtht</li>
              <li>Tools: Google Analytics, SEMrush, HubSpot
              </li>
            </ul>
          </div>
          <div className=" rounded-lg px-4 py-6 shadow-xl border border-gray-500 w-[250px] ">
            <h3 class="text-2xl  font-bold mb-4 text-center">Content Writing</h3>
            <ul class="list-disc pl-5 space-y-2">
              <li>Content Writing</li>
              <li>SEO-Optimized Content</li>
              <li>Tools: Grammarly, Yoast SEO, Google Docs
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className="py-8 sm:py-12">
        <h1 className="text-3xl md:text-4xl capitalize font-serif font-semibold text-center mb-4">
          <span className="">Our </span>
          <span className="text-primary-500">Success </span>
          <span>Story</span>
        </h1>
        <div className="flex flex-col sm:flex-row justify-between items-center gap-8 sm:gap-12 mt-12 p-6 sm:p-8 rounded-lg border border-gray-500 shadow-3xl">
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

      </section>

      <section className="py-12 md:py-16">
        <h1 className=" text-3xl md:text-4xl capitalize font-serif font-semibold text-center">
          <span className="text-gray-300">Our </span>
          <span className="text-primary-500">Innovation </span>
          <span>Architects</span>
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-12 place-content-center mt-20 ">
          <div >
            <div className="size-[260px] md:size-[230px] lg:size-[200px] mx-auto ">
              <img src="/profile.jpg" alt="" className="h-full w-full rounded-full  object-cover object-center" />
            </div>
            <div className="text-gray-200 text-cente mt-2 text-center">
              <p className="text-lg font-semibold ">Hanan Abdulshikur</p>
              <h2>NileAgency CEO</h2>
            </div>
          </div>
          <div >
            <div className="size-[260px] md:size-[230px] lg:size-[200px] mx-auto ">
              <img src="/profile.jpg" alt="" className="h-full h-full  rounded-full bg-red-200 object-cover object-center" />
            </div>
            <div className="text-gray-200 text-cente mt-2 text-center">
              <p className="text-lg font-semibold ">Hanan Abdulshikur</p>
              <h2>NileAgency CEO</h2>
            </div>
          </div>
          <div >
            <div className="size-[260px] md:size-[230px] lg:size-[200px] mx-auto ">
              <img src="/profile.jpg" alt="" className="h-full h-full  rounded-full bg-red-200 object-cover object-center" />
            </div>
            <div className="text-gray-200 text-cente mt-2 text-center">
              <p className="text-lg font-semibold ">Hanan Abdulshikur</p>
              <h2>NileAgency CEO</h2>
            </div>
          </div>
          <div >
            <div className="size-[260px] md:size-[230px] lg:size-[200px] mx-auto ">
              <img src="/profile.jpg" alt="" className="h-full h-full  rounded-full bg-red-200 object-cover object-center" />
            </div>
            <div className="text-gray-200 text-cente mt-2 text-center">
              <p className="text-lg font-semibold ">Hanan Abdulshikur</p>
              <h2>NileAgency CEO</h2>
            </div>
          </div>
          <div >
            <div className="size-[260px] md:size-[230px] lg:size-[200px] mx-auto ">
              <img src="/profile.jpg" alt="" className="h-full w-full rounded-full  object-cover object-center" />
            </div>
            <div className="text-gray-200 text-cente mt-2 text-center">
              <p className="text-lg font-semibold ">Hanan Abdulshikur</p>
              <h2>NileAgency CEO</h2>
            </div>
          </div>
          <div >
            <div className="size-[260px] md:size-[230px] lg:size-[200px] mx-auto ">
              <img src="/profile.jpg" alt="" className="h-full w-full rounded-full  object-cover object-center" />
            </div>
            <div className="text-gray-200 text-cente mt-2 text-center">
              <p className="text-lg font-semibold ">Hanan Abdulshikur</p>
              <h2>NileAgency CEO</h2>
            </div>
          </div>

        </div>
      </section>

      <section className="py-8 md:py-12 mt-12  bg-primary-500  rounded-xl shadow-3xl text-center">
        <h1 className="text-3xl sm:text-4xl leading-[1.2] font-bold capitalize font-serif mb-4 text-black/90">
          <span className="">Transform</span> <span className=""> Your Digital</span>
          <span className=""> Presence now</span>
        </h1>
        <p className="text-black/70 text-base lg:text-lg capitalize mb-8 sm:mb-12 text-center">
          Don't settle for mediocrity. Partner with NileAgency for innovative solutions that drive success.
        </p>
        <Link
          href="#"
          className={cn(
            buttonVariants({ variant: 'default', size: 'lg' }),
            'font-semibold text-lg hover:scale-[1.05] transform duration-300 px-5 py-5 lg:p-5 text-white bg-black'
          )}
        >
          Get Started
        </Link>
      </section>
    </div>
  )
}

export default About
