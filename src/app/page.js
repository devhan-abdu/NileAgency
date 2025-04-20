import Link from "next/link";
import { cn } from "@/lib/utils";
import { services } from "@/lib/serviceDate";
import { Star, Lightbulb, Heart, Users, CheckCircle, Mail, Phone, Facebook, Instagram, Twitter } from "lucide-react";
import RecentProject from "@/components/RecentProject";
import { Quote } from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/button";
import Contact from "@/components/Contact";
export default function Home() {
  return (
    < >
      <section className="pt-16 pb-8 md:pt-24 md:pb-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-center  gap-y-16 gap-x-4">
        <div className="text-left md:col-span-1 lg:col-span-2">
          <p className=" text-gray-200 text-base mb-2">10 years of experiance !</p>
          <h1 className="text-4xl lg:text-5xl leading-[1.1] font-bold capitalize text-gray-300 mb-6 font-serif">
            <span className="">Best</span> <span className="text-gray-400">Digital</span><br /> <span className="text-[#1aa3a3]">Creative Agency</span><br />  <span className="text-gray-400">for your </span> <span className="">Brand</span>
          </h1>
          <p className="text-gray-300 text-base lg:text-lg capitalize mb-12">NileAgency brings the strength and flow of the Nile to your digital presence. We specialize in web development, app innovation, and user-centric UI/UX design to help you dominate the competition</p>
          <Link
            href="/contact"
            className={cn(
              buttonVariants({ variant: 'default', size: 'lg' }),
              'font-serif font-semibold text-lg hover:scale-[1.05] transform duration-300 px-6 py-3 relative'
            )}
          >
            <span className="absolute inset-0 bg-primary-500 -z-2 blur-lg rounded-full "></span>
            Contact Us
          </Link>
        </div>


        <div className="relative md:col-span-1 lg:col-span-2 mx-auto">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-[#1aa3a3]/80 from-10% via-transparent via-30% to-primary-500/60 to-90% blur-[150px]"></div>
          <div
            className="relative w-full max-w-[300px] xs:max-w-[320px] sm:w-[400px] lg:max-w-[650px]  backdrop-blur"
          >
            <div className="absolute inset-0  -top-6 -bottom-6 bg-gradient-to-br from-[#4ADE80]/10 to-[#3B82F6]/10 rounded-2xl sm:rounded-3xl transform rotate-3"></div>
            <div className="absolute inset-0 -z-3 -top-6 -bottom-6 bg-gradient-to-br from-[#FF8C00]/10 to-[#4ADE80]/10 rounded-2xl sm:rounded-3xl transform -rotate-3"></div>
            <div className="relative aspect-square rounded-xl sm:rounded-2xl  overflow-hidden">
              <img alt="nileagency" className="w-full h-full object-contain  transform hover:scale-105 transition-transform duration-500 " src="/nileagency.png" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1E293B]/60 via-[#1E293B]/20 to-transparent"></div>
            </div>
            <div className="absolute -top-4 sm:-top-6 -left-4 sm:-left-6 w-8 h-8 sm:w-12 sm:h-12 bg-[#4ADE80]/30 rounded-full blur-lg sm:blur-xl"></div>
            <div className="absolute -bottom-4 sm:-bottom-6 -right-4 sm:-right-6 w-8 h-8 sm:w-12 sm:h-12 bg-[#3B82F6]/30 rounded-full blur-lg sm:blur-xl"></div>
            <div className="absolute top-1/2 -right-4 sm:-right-6 w-8 h-8 sm:w-12 sm:h-12 bg-[#FF8C00]/30 rounded-full blur-lg sm:blur-xl">
            </div>
          </div>
        </div>
      </section>
<section className="py-12 md:py-16 ">
        <p className="font-serif leading-10 text-gray-200 text-center text-base mb-1">Services</p>
        <p className="text-gray-500 text-3xl md:text-4xl capitalize font-serif font-semibold text-center mb-8 font-serif">
          <span className="text-gray-300">What</span> <span className="text-[#1aa3a3]">Services </span>
          <span>We Are Provi</span><span className="text-gray-300">de</span>
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16 md:mt-24">
          {
            services.map((item) => (
              <div key={item.id} className={cn("serviceCard shrink-1 w-[330px] h-[250px] p-6 cursor-pointer transition justify-self-center duration-300 backdrop-blur-md rounded-lg border-[0.5px] border-gray-600 transform duration-300 bg-linear-to-b from-[#2f3332] to-[#14181c] bg-opacity-30")} >
                <div className="space-y-3 text-gray-300">
                  {item.icon}
                  <h3 className=" font-semibold font-serif text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-xs leading-4 text-start lowercase mb-4 text-gray-400">{item.desc}</p>
                  <button className="cursor-pointer font-bold leading-none mt-3"> Learn more &rarr;</button>
                </div>
              </div>
            ))
          }
        </div>
      </section>

      <section className="py-12 md:py-16 relative space-y-12">
        <div className="absolute inset-0 bg-[#1aa3a3] bg-[size:20px_20px] opacity-10 blur-[100px]"></div>
        <p className="text-gray-500 text-3xl md:text-4xl  capitalize font-serif font-semibold text-center mb-4">
          <span className="text-gray-300">Why</span>{" "}
          <span className="text-[#1aa3a3]">NileAgency </span>
          <span>Stands </span>
          <span className="text-gray-300">Out</span>
        </p>
        <p className="text-gray-200 text-center max-w-[500px] mx-auto text-base">
          NileAgency delivers success with innovative strategies and a commitment
          to your goals. Join 100+ clients who trust us for results that matter
        </p>

        <div className="relative grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-6 lg:gap-12 mt-16 md:mt-24">
          <div className="flex md:flex-col justify-between gap-12 md:gap-6 ">
            <div className="text-gray-200 flex flex-col items-center gap-2">
              <Star className="text-primary-500" />
              <p className="text-center text-xs md:text-sm">
                Proven Expertise – Over 10 years of delivering exceptional results
                across industries.
              </p>
            </div>
            <div className="text-gray-200 flex flex-col items-center gap-2">
              <Lightbulb className="text-primary-500" />
              <p className="text-center text-xs md:text-sm">
                Innovative Solutions – We use cutting-edge strategies to keep you
                ahead of the competition.
              </p>
            </div>
          </div>

          <div className="w-full md:col-span-2 px-6 self-center -order-1 md:order-0 ">
            <img src="/about2.jpg" alt="" className="w-full rounded-lg" />
          </div>

<div className="flex md:flex-col justify-between gap-12 md:gap-6 ">
            <div className="text-gray-200 flex flex-col items-center gap-2 text-center">
              <Heart className="text-primary-500" />
              <p className="text-center text-xs md:text-sm">
                Client-Centric Approach – Your success is our priority, with
                personalized support every step of the way
              </p>
            </div>
            <div className="text-gray-200 flex flex-col items-center gap-2">
              <Users className="text-primary-500" />
              <p className="text-center text-xs md:text-sm">
                Trusted by 100+ Clients – We’ve built lasting partnerships through
                reliability and transparency
              </p>
            </div>
          </div>
        </div>

        <div className="text-gray-200 flex flex-col items-center gap-2 max-w-[300px] mx-auto mt-2 md:mt-6 relative">
          <CheckCircle className="text-primary-500 " />
          <p className="text-center text-sm">
            Results-Driven Performance – We track, measure, and optimize every
            campaign for maximum ROI.
          </p>
        <Link
            href="/about"
            className={cn(
              buttonVariants({ variant: 'outline', size:'lg' }),
              ' rounded-full px-6 py-3 cursor-pointer mt-6'
            )}
          >
            About Us </Link>
        </div>    
      </section>

      <section className="py-12 md:py-16 ">
      <p className="font-serif leading-10 text-gray-200 text-center text-base mb-1">Projects</p>
            <h1 className="text-gray-500 text-3xl md:text-4xl capitalize font-serif font-semibold text-center mb-4">
              <span className="text-gray-300">Our </span>
              <span className="text-[#1aa3a3]">Success </span>
              <span>Stor</span>
              <span className="text-gray-300">ies</span>
            </h1>
            <p className="text-gray-200 text-center max-w-[500px] mx-auto">
              Real projects, real results. Discover how we’ve made a difference for our clients.
            </p>
          <RecentProject />
      </section>

<section className="py-12 md:py-16">
      
      <p className="font-serif leading-10 text-gray-200 text-center text-base mb-1">Testimonial</p>
          <h1 className="text-gray-500 text-3xl md:text-4xl capitalize font-serif font-semibold text-center">
            <span className="text-gray-300">What's </span>
            <span className="text-[#1aa3a3]">Our Client </span>
            <span>Say About </span>
            <span className="text-gray-300"> Us</span>
          </h1>
          {
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-16 sm:mt-24 ">
              {
                [1, 2, 3].map((item) => (
                  <div key={item} className={cn("serviceCard shrink-1 w-[330pxpx] h-[270px] p-6 cursor-pointer transition justify-self-center duration-300 backdrop-blur-md rounded-lg border-[0.5px] border-gray-600 transform duration-300 bg-linear-to-b from-[#2f3332] to-[#14181c] bg-opacity-30")} >
                    <div className="content text-gray-300">
                      <h2 className="text-2xl font-bold mb-4">Stripe</h2>
                      <p className="line-clamp-4 mb-6">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore, vitae placeat rem nostrum delectus eaque eos officia aut saepe ad repellendus doloremque! Rerum vero accusamus ut veritatis sed reiciendis quos.</p>
                      <div className="flex justify-between items-center">
                        <div className="flex gap-3 items-center ">
                          <div className="rounded-full w-10 h-10 bg-white text-black flex items-center justify-center">H</div>
                          <div>
                            <h6 className="font-semibold text-lg">Hanan Abdu</h6>
                            <p className="text-gray-400">UX Designer</p>
                          </div>
                        </div>
                        <Quote />
                      </div>
                    </div>
                  </div>
                ))
              }
            </div>
          }

      </section>

    <Contact/>

<section className="py-12 md:py-16">
        <div className="rounded-xl flex flex-col items-center justify-center bg-linear-to-b from-[#2f3332] to-[#14181c] bg-opacity-30 py-16 text-gray-300">
          <p className="text-gray-300 text-sm mb-1">Join Our Community</p>
          <h1 className="text-gray-500 text-3xl md:text-4xl capitalize font-serif font-semibold text-center mb-4">
              <span className="text-gray-300">Stay </span>
              <span className="text-[#1aa3a3]">in the loop</span>             
            </h1>
          <p className="text-lg">No spam. Just smart ideas</p>
          <div className="flex  border border-gray-200 placholder:text-gray-300  rounded-full mt-12">
            <input type="email" placeholder="Enter Your Email" className="outline-none focus:outline-none px-4 md:px-6 py-2.5 rounded-l-full" />
            <button className="rounded-r-full text-gray-900 bg-primary-500 px-4 font-semibold">Get Started</button>
          </div>
        </div>
      </section>

    </>
  );
}