import Link from "next/link";
import { cn } from "@/lib/utils";
import { services, whyChooseUs,testimonials } from "@/lib/serviceDate";
import RecentProject from "@/components/RecentProject";
import { recentProject } from "@/lib/serviceDate";
import { AnimatedTestimonials } from "@/components/ui/AnimatedTestimonials";
import { buttonVariants } from "@/components/ui/button";
import Contact from "@/components/Contact";

export default function Home() {
  const recentWork = recentProject.slice(0, 4);
 
  return (
    <div className="font-montserrat text-foreground-500" >

      <section className="pt-16 pb-8 md:pt-24 md:pb-24 grid grid-cols-1 md:grid-cols-2 items-center gap-y-16 gap-x-4">
        <div className="text-left  ">
          <p className="mb-1" >10 years of experiance !</p>
          <h1 className="text-4xl lg:text-5xl leading-[1.1] font-bold mb-4 capitalize">
            Best Digital<br /> Creative Agency<br /> for your Brand
          </h1>
          <p className="mb-6 text-foreground-500/80">NileAgency brings the strength and flow of the Nile to your digital presence. We specialize in web development, app innovation, and user-centric UI/UX design.</p>
          <Link
            href="/contact"
            className={cn(
              buttonVariants({ variant: 'default', size: 'lg' }),
              'font-montserrat font-semibold text-lg hover:scale-[1.05] transform duration-300 px-6 py-3 relative text-background-500 '
            )}
          >
            Contact Us
          </Link>
        </div>
        <div className="relative mx-auto">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-primary-500/20 from-10% via-transparent via-30% to-primary-500/20 to-90% blur-[150px]"></div>
          <div
            className="relative w-full max-w-[300px] xs:max-w-[320px] sm:w-[400px] lg:max-w-[650px]  backdrop-blur">
            <div className="absolute inset-0  -top-6 -bottom-6 bg-gradient-to-br from-[#4ADE80]/10 to-[#3B82F6]/10 rounded-2xl sm:rounded-3xl transform rotate-3"></div>
            <div className="absolute inset-0 -z-3 -top-6 -bottom-6 bg-gradient-to-br from-[#FF8C00]/10 to-[#4ADE80]/10 rounded-2xl sm:rounded-3xl transform -rotate-3"></div>
            <div className="relative aspect-square rounded-xl sm:rounded-2xl  overflow-hidden">
              <img alt="nileagency" className="w-full h-full object-contain  transform hover:scale-105 transition-transform duration-500 " src="/nileagency.png" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1E293B]/60 via-[#1E293B]/20 to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 md:py-14 ">
        <p className="text-center mb-1">Services</p>
        <h2 className="text-3xl lg:text-4xl leading-[1.1] font-bold mb-4 capitalize text-center">
          What Services We Are Provide
        </h2>
        <div className="flex items-center justify-center mt-12 md:mt-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {
              services.map((item) => (
                <div key={item.id} className={cn("serviceCard w-[330px] h-[200px] px-4 py-5 rounded-lg border-[1.5px] border-white/20 transform cursor-pointer transition duration-300 ")} >
                  <div className="space-y-3 ">
                    {item.icon}
                    <h3 className=" text-xl font-semibold mb-2 ">{item.title}</h3>
                    <p className="text-xs leading-4 text-start lowercase mb-2 text-foreground-500/80">{item.desc}</p>
                    <button className="cursor-pointer font-semibold text-md "> Learn more &rarr;</button>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </section>

      <section className="py-10 md:py-14 ">
        <p className="text-center mb-1">why choose us</p>
        <h2 className="text-3xl lg:text-4xl leading-[1.1] font-bold mb-4 capitalize text-center">
          Why NileAgency Stands Out
        </h2>
        <p className="text-foreground-500/80 text-center max-w-[500px] mx-auto text-sm">
          NileAgency delivers success with innovative strategies and a commitment
          to your goals. Join 100+ clients who trust us.
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
        <h2 className="text-3xl lg:text-4xl leading-[1.1] font-bold mb-4 capitalize text-center">
          Our Success Stories
        </h2>    
        <p className="text-foreground-500/80 text-center max-w-[500px] mx-auto text-sm">
        Real projects, real results. Discover how we’ve made a difference for our clients.
        </p>
        <div className="flex items-center justify-center mt-12 md:mt-20">

        <RecentProject projects={recentWork}/>
        </div>
      </section>

      <section className="py-10 md:py-14">
        <p className="text-center mb-1 ">Testimonial</p>
        <h2 className="text-3xl lg:text-4xl leading-[1.1] font-bold mb-4 capitalize text-center">
        What's Our Client Say About Us
        </h2>  
      <AnimatedTestimonials testimonials={testimonials} />

      </section>

      <Contact />

      <section className="py-10 md:py-14 relative">
        <div className=" flex flex-col items-center justify-center relative  py-16 rounded-xl ">
        <div className="absolute inset-0 -z-10 h-full w-full items-center rounded-xl px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#202020_60%,#328c05_100%)]"></div>

          <p className=" text-sm mb-1">Join Our Community</p>
          <h1 className="text-3xl md:text-4xl capitalize  font-semibold text-center mb-4">
            Stay in the loop
          </h1>
          <p className="text-lg">No spam. Just smart ideas</p>
          <div className="flex  border border-forground-500/50 placholder:text-black  rounded-full mt-12">
            <input type="email" placeholder="Enter Your Email" className="outline-none focus:outline-none px-4 md:px-6 py-2.5 rounded-l-full" />
            <button className="rounded-r-full text-black bg-foreground-500 px-4 font-semibold">Get Started</button>
          </div>
        </div>
      </section>

    </div>
  );
}