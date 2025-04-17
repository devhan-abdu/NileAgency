import Link from "next/link";
import { cn } from "@/lib/utils";
import { services } from "@/lib/serviceDate";
import { Star, Lightbulb, Heart, Users, CheckCircle, Layout, Mail, Phone, Facebook, Instagram, Twitch, Twitter } from "lucide-react";
import RecentProject from "@/components/RecentProject";
import { Quote } from "lucide-react";
import { Heading } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
export default function Home() {
  return (
    < >
      <section className=" mx-auto px-12 py-16   flex  justify-between items-center flex-col md:flex-row gap-24 max-w-6xl">

        <div className="w-full md:w-1/2 text-left space-y-16">
          <div className="space-y-6">
            <div className="space-y-1">
              <p className="text-body text-gray-200 text-normal md:text-lg">10 years of experiance !</p>
              <p className="text-body  text-5xl md:text-4xl lg:text-5xl leading-[1.1] font-bold capitalize  text-gray-300 font-serif">
                <span className="">Best</span> <span className="text-gray-400">Digital</span><br /> <span className="text-primary-500">Creative Agency</span><br />  <span className="text-gray-400">for your </span> <span className="">Brand</span>
              </p>
            </div>
            <p className="text-gray-300  text-md capitalize ">NileAgency brings the strength and flow of the Nile to your digital presence. We specialize in web development, app innovation, and user-centric UI/UX design to help you dominate the competition</p>
          </div>
          <Link
            href="/contact"
            className={cn(
              buttonVariants({ variant: 'default', size: 'lg' }),
              'font-serif font-semibold text-lg relative hover:scale-[1.05] transform duration-300 '
            )}
          >
            <span className="absolute inset-0 bg-primary-500/40 -z-2 blur-lg rounded-full "></span>
            Contact Us
          </Link>



        </div>

        <div className="w-full md:w-1/2 h-full relative flex items-center justify-center">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-primary-500/40 from-10% via-transparent via-30% to-primary-500/60 to-90% blur-[150px]"></div>
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

      <section className="w-full ">
        <div className="px-[8%] py-24">
          <div className="flex flex-col justify-center items-center gap-4">
            <div className="space-y-1 text-center">
              <p className=" font-serif leading-10 text-gray-200">Services</p>
              <p className="text-gray-500 text-4xl capitalize font-serif font-semibold    ">
                <span className="text-gray-300">What</span> <span className="text-primary-500">Services </span>
                <span>We Are Provi</span><span className="text-gray-300">de</span>
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-24 sm:mt-12 ">
              {
                services.map((item) => (
                  <div key={item.id} className={cn("serviceCard w-[330px] h-[250px] px-4 py-6 cursor-pointer transition justify-self-center duration-300 backdrop-blur-md rounded-lg border-[0.5px] border-gray-600 transform duration-300 ", item.id === 1 ? "bg-primary-500    md:-rotate-3 " : "bg-linear-to-b from-[#2f3332] to-[#14181c] bg-opacity-30")} >
                    <div className={cn("content space-y-4  text-gray-300 ", item.id === 1 ? 'text-black' : 'text-gray-300')}>
                      {item.icon}
                      <h3 className=" font-semibold font-serif text-xl font-bold">{item.title}</h3>
                      <p className={cn("text-xs leading-4 text-start lowercase", item.id === 1 ? 'text-black/70' : 'text-gray-400')}>{item.desc}</p>
                      <button className={cn("cursor-pointer font-bold leading-none mt-3 ")}> Learn more &rarr;</button>
                    </div>
                  </div>
                ))
              }
            </div>
          </div>
        </div>
      </section>



      <section className=" w-full px-[8%] pb-24 md:pt-12 relative ">

        <div className="flex flex-col items-center justify-center gap-12 relative">
          <div className="absolute inset-0 bg-primary-500 bg-[size:20px_20px] opacity-10 blur-[100px]"></div>


          <div className="relative space-y-4">
            <p className="text-gray-500 text-4xl capitalize font-serif font-semibold text-center">
              <span className="text-gray-300">Why</span>{" "}
              <span className="text-primary-500">NileAgency </span>
              <span>Stands </span>
              <span className="text-gray-300">Out</span>
            </p>
            <p className="text-gray-200 text-center max-w-[500px]">
              NileAgency delivers success with innovative strategies and a commitment
              to your goals. Join 100+ clients who trust us for results that matter
            </p>
          </div>

          <div className="relative grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-6 lg:gap-12 mt-6 md:mt-12">

            <div className="flex md:flex-col justify-between gap-12 md:gap-6 ">
              <div className="text-gray-200 flex flex-col items-center gap-2">
                <Star className="text-primary-500" />
                <p className="text-center text-sm">
                  Proven Expertise – Over 10 years of delivering exceptional results
                  across industries.
                </p>
              </div>
              <div className="text-gray-200 flex flex-col items-center gap-2">
                <Lightbulb className="text-primary-500" />
                <p className="text-center text-sm">
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
                <p className="text-center text-sm">
                  Client-Centric Approach – Your success is our priority, with
                  personalized support every step of the way
                </p>
              </div>
              <div className="text-gray-200 flex flex-col items-center gap-2">
                <Users className="text-primary-500" />
                <p className="text-center text-sm">
                  Trusted by 100+ Clients – We’ve built lasting partnerships through
                  reliability and transparency
                </p>
              </div>
            </div>

          </div>


          <div className="text-gray-200 flex flex-col items-center gap-2 max-w-[300px] mt-2 md:mt-6">
            <CheckCircle className="text-primary-500 " />
            <p className="text-center text-sm">
              Results-Driven Performance – We track, measure, and optimize every
              campaign for maximum ROI.
            </p>
          </div>

          <Link
            href={"/about"}
            className=" border border-primary-500 text-primary-500 text-lg px-6 py-2 font-serif  font-bold rounded-full hover:text-black hover:bg-primary-500 hover:border-none transtion duration-300"
          >
            About Us
          </Link>
        </div>
      </section>

      <section className=" w-full  px-[8%] mb-12 ">
        <div className="flex flex-col items-center justify-center ">

          <div className="space-y-4">
            <h1 className="text-gray-500 text-4xl capitalize font-serif font-semibold text-center">
              <span className="text-gray-300">Our </span>
              <span className="text-primary-500">Success </span>
              <span>Stor</span>
              <span className="text-gray-300">ies</span>
            </h1>
            <p className="text-gray-200 text-center max-w-[500px] mx-auto">
              Real projects, real results. Discover how we’ve made a difference for our clients.
            </p>
          </div>

          <RecentProject />

        </div>
      </section>


      <section className=" w-full  lg:px-[8%] px-12 mb-12  ">
        <div className="flex flex-col items-center justify-center md:gap-12">
          <h1 className="text-gray-500 text-4xl capitalize font-serif font-semibold text-center">
            <span className="text-gray-300">What's </span>
            <span className="text-primary-500">Our Client </span>
            <span>Say About </span>
            <span className="text-gray-300"> Us</span>
          </h1>
          {
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-24 sm:mt-12 ">
              {
                [1, 2, 3].map((item) => (
                  <div key={item} className={cn("serviceCard w-[400px] md:w-[330px] h-[270px] px-4 py-6 cursor-pointer transition justify-self-center duration-300 backdrop-blur-md rounded-lg border-[0.5px] border-gray-600 transform duration-300    md:-rotate-3", item === 2 ? "bg-primary-500   " : "bg-linear-to-b from-[#2f3332] to-[#14181c] bg-opacity-30")} >
                    <div className={cn("content space-y-4  text-gray-300 ", item === 2 ? 'text-black ' : 'text-gray-300')}>
                      <h2 className="text-2xl font-bold">Stripe</h2>
                      <p className="line-clamp-4">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore, vitae placeat rem nostrum delectus eaque eos officia aut saepe ad repellendus doloremque! Rerum vero accusamus ut veritatis sed reiciendis quos.</p>
                      <div className="flex justify-between items-center gap-2">
                        <div className="flex gap-4 items-center my-2">
                          <div className="rounded-full w-12 h-12 bg-white text-black flex items-center justify-center">H</div>
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


        </div>
      </section>

      <section className="  mx-12   mb-12 mt-24 px-12 py-14 rounded-lg relative">
        <div className="absolute inset-0 bg-primary-500 bg-[size:20px_20px] opacity-10 blur-[100px]"></div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-12 relative">
          <div className="md:w-[40%] space-y-10 text-center" >
            <h1 className="text-gray-500 text-4xl capitalize font-serif font-semibold text-center mb-12">
              <span className="text-gray-300">Got A </span>
              <span className="text-primary-500">Project Or A <br />Partnership</span>
              <span> In </span>
              <span className="text-gray-300">Mind?</span>
            </h1>

            <div className="flex items-center justify-between gap-2 ">
              <div>
                <div className="bg-primary-500 inline-flex p-2 rounded-full mb-2">
                  <Phone className="text-black " />
                </div>
                <span className="block text-gray-300">+25195234125</span>
                <span className="block text-gray-300">+251743567212</span>
              </div>
              <div className="">
                <div className="bg-primary-500 inline-flex p-2 rounded-full mb-2">
                  <Mail className="text-black " />
                </div>
                <span className="block text-gray-300">nileagency12@gmail.com</span>
                <span className="block text-gray-300">nileagencyhan@gmail.com</span>
              </div>
            </div>

            <div className="flex space-x-4 items-center justify-center">
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

          <form action="" className="md:w-[60%]">
            <div className="grid grid-cols-2 gap-x-4 gap-y-6 w-full">

              <input type="text" className="rounded-md px-3  py-2  border border-gray-300 outline-none text-gray-200 focus:outline-ring-2 focus:outline-ring-gray-300 placeholder:text-gray-500" placeholder="your name" />
              <input type="email" className="rounded-md px-3  py-2  border border-gray-300 outline-none text-gray-200 focus:outline-ring-2 focus:outline-ring-gray-300 placeholder:text-gray-500" placeholder="Email address" />
              <input type="tel" className="rounded-md px-3  py-2  border border-gray-300 outline-none text-gray-200 focus:outline-ring-2 focus:outline-ring-gray-300 placeholder:text-gray-500" placeholder="Phone number" />
              <input type="text" className="rounded-md px-3  py-2  border border-gray-300 outline-none text-gray-200 focus:outline-ring-2 focus:outline-ring-gray-300 placeholder:text-gray-500" placeholder="Subject" />
              <textarea name="" id="" rows={4} className=" px-3 py-2 rounded-md span-col-2 border border-gray-300 outline-none text-gray-200 focus:outline-ring-1 focus:outline-ring-gray-300 placeholder:text-gray-500 col-span-2 min-h-24" placeholder="Message" />
              <button className="px-4 py-2 hover:bg-primary-500  hover:text-black text-primary-500 border border-primary-500 rounded-full w-max mt-4 cursor-pointer duration-300">Send Message</button>
            </div>

          </form>
        </div>
      </section>

      <section className="h-[40vh] md:h-[70vh] px-[8%]  mb-12 ">
        <div className="rounded-xl flex flex-col items-center justify-center bg-primary-500 gap-2 h-full ">
          <p className="">Join Our Community</p>
          <h1 className="text-3xl md:text-4xl capitalize font-serif font-semibold text-center ">
            <span className="">Stay </span>
            <span className="">in the loop</span>
            <span></span>
            <span className=""></span>
          </h1>
          <p className="text-lg">No spam. Just smart ideas</p>
          <div className="flex  border border-black placholder:text-black  rounded-full mt-12">
            <input type="email" placeholder="Enter Your Email" className="outline-none focus:outline-none px-4 md:px-6 py-2.5 rounded-l-full" />
            <button className="text-black  rounded-r-full text-primary-500 bg-black px-4 font-bold">Get Started</button>
          </div>
        </div>
      </section>

    </>
  );
}



