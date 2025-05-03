import Link from "next/link";
import { cn } from "@/lib/utils";
import { services, whyChooseUs } from "@/lib/serviceDate";
import RecentProject from "@/components/RecentProject";
import { client } from "@/lib/sanity";
import { AnimatedTestimonials } from "@/components/ui/AnimatedTestimonials";
import { buttonVariants } from "@/components/ui/button";
import Contact from "@/components/Contact";
import { fetchProjects } from "@/lib/sanity";
import { testimonialQuery } from "@/lib/queries";
import { clientLogos } from "./services/data";
import { getRecentProjectsQuery } from "@/lib/queries";

export default async function Home() {
  const recentWork = await fetchProjects(getRecentProjectsQuery)
  const ProjectTestimonials = await fetchProjects(testimonialQuery)

  return (
    <div className="font-poppins text-foreground-500" >
      <section className="pt-16 pb-8 md:pt-20 md:pb-24 relative overflow-hidden">
        <div className="text-left sm:text-center">
          <p className="mb-1 font-montserrat">10 years of experience!</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl leading-[1.1] font-bold mb-4 capitalize font-montserrat">
            Smart Strategies <br /> Strong Results
          </h1>
          <p className="mb-6 text-foreground-500/80">
            NileAgency brings the strength and flow of the Nile to your digital presence.
          </p>
          <div className="flex items-center sm:justify-center justify-start gap-6">
            <Link
              href="/contact"
              className={cn(
                buttonVariants({ variant: 'default', size: 'lg' }),
                'font-poppins font-semibold text-lg hover:scale-[1.05] transform duration-300 px-6 py-3 relative text-background-500'
              )}
            >
              Contact Us
            </Link>
            <Link
              href="https://t.me/niletech1"
              className={cn(
                buttonVariants({ variant: 'outline', size: 'lg' }),
                'font-poppins font-semibold text-lg hover:scale-[1.05] transform duration-300 px-6 py-3 relative'
              )}
            >
              Join Us
            </Link>
          </div>
        </div>
        <svg
          viewBox="0 0 1440 820"
          className=" w-full h-[120px] md:h-[220px] z-0 overflow-hidden"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="glow" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#5dd623" stopOpacity="0.2" />
              <stop offset="50%" stopColor="#5dd623" stopOpacity="1" />
              <stop offset="100%" stopColor="#5dd623" stopOpacity="0.2" />
            </linearGradient>
          </defs>
          <path
            d="M0,820 C480,200 960,200 1440,820"
            stroke="url(#glow)"
            strokeWidth="8"
            fill="none"
          />
        </svg>
        <div className="space-y-12">
          <div className='flex items-center justify-center gap-4 max-w-[500px] mx-auto'>
            <hr className='grow hidden sm:block' />
            <p className='font-bold sm:text-xl text-lg '>Trusted By Amazing Brand</p>
            <hr className='grow hidden sm:block' />
          </div>
          <div className="overflow-hidden whitespace-nowrap relative w-full">
            <div className="flex mx-auto w-max space-x-16 animate-scroll">
              {
                clientLogos.map((item , idx) => (
                  <img key={`logo1-${idx}`} src={item} className="mx-8 w-24 lg:w-32 h-auto inline-block" />                ))
              }
               {
                clientLogos.map((item , idx) => (
                  <img key={`logo2-${idx}`} src={item} className="mx-8 w-24 lg:w-32 h-auto inline-block" />                ))
              }
            </div>          
          </div>
          </div>
      </section>


      <section className="py-10 md:py-14 ">
        <p className="text-center mb-1">Services</p>
        <h2 className="text-3xl lg:text-4xl leading-[1.1] font-bold mb-4 capitalize text-center font-montserrat">
          What Services We Are Provide
        </h2>
        <p className="text-foreground-500/80 text-center max-w-[500px] mx-auto text-sm">
          Explore our full range of digital services — crafted to elevate your brand and drive meaningful results.        </p>

        <div className="flex items-center justify-center mt-12 md:mt-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {
              services.map((item) => (
                <div key={item.id} className={cn("serviceCard w-[330px] h-[200px] px-4 py-5 rounded-lg border-[1.5px] border-white/20 transform cursor-pointer transition duration-300 ")} >
                  <div className="space-y-3 ">
                    {item.icon}
                    <h3 className=" text-xl font-semibold mb-2 ">{item.title}</h3>
                    <p className="text-xs leading-4 text-start lowercase mb-2 text-foreground-500/80">{item.desc}</p>

                    <Link href={'/services'} className="cursor-pointer font-semibold text-md "> Learn more &rarr;</Link>

                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </section>

      <section className="py-10 md:py-14 ">
        <p className="text-center mb-1">why choose us</p>
        <h2 className="text-3xl lg:text-4xl leading-[1.1] font-bold mb-4 capitalize text-center font-montserrat">
          Why NileAgency Stands Out
        </h2>
        <p className="text-foreground-500/80 text-center max-w-[500px] mx-auto text-sm">
          NileAgency delivers success with smart strategies, committed to your goals — trusted by over 100 clients.

        </p>

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

      <section className="py-10 md:py-14 ">
        <p className="text-center mb-1 ">Projects</p>
        <h2 className="text-3xl lg:text-4xl leading-[1.1] font-bold mb-4 capitalize text-center font-montserrat">
          Our Success Stories
        </h2>
        <p className="text-foreground-500/80 text-center max-w-[500px] mx-auto text-sm">
          Real projects, real results — see how we've created lasting impact and measurable growth for our clients.
        </p>
        <div className="flex items-center justify-center mt-12 md:mt-20">

          <RecentProject projects={recentWork} />
        </div>
      </section>

      <section className="py-10 md:py-14">
        <p className="text-center mb-1 ">Testimonial</p>
        <h2 className="text-3xl lg:text-4xl leading-[1.1] font-bold mb-4 capitalize text-center font-montserrat">
          What's Our Client Say About Us
        </h2>
        <p className="text-foreground-500/80 text-center max-w-[500px] mx-auto text-sm">
          Hear what our clients say about working with NileAgency — real stories of growth, trust, and success.        </p>
        <AnimatedTestimonials testimonials={ProjectTestimonials} />

      </section>

      <Contact />

    </div>
  );
}