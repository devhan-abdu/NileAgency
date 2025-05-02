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

export default async function Home() {
    const recentWork = (await fetchProjects()).slice(0,4)
    const ProjectTestimonials = (await client.fetch(testimonialQuery)).slice(0,6);
    
    
 
  return (
    <div className="font-poppins text-foreground-500" >

      <section className="pt-16 pb-8 md:pt-24 md:pb-24 grid grid-cols-1 md:grid-cols-2 items-center gap-y-16 gap-x-4">
        <div className="text-left  ">
          <p className="mb-1 font-montserrat" >10 years of experiance !</p>
          <h1 className="text-5xl lg:text-[54px] leading-[1.1] font-bold mb-4 capitalize font-montserrat">
          Smart Strategies Stunning Designs Strong Results              </h1>

          <p className="mb-6 text-foreground-500/80">NileAgency brings the strength and flow of the Nile to your digital presence. We specialize in web development, app innovation, and user-centric UI/UX design.</p>
          <Link
            href="/contact"
            className={cn(
              buttonVariants({ variant: 'default', size: 'lg' }),
              'font-poppins font-semibold text-lg hover:scale-[1.05] transform duration-300 px-6 py-3 relative text-background-500 '

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

        <RecentProject projects={recentWork}/>
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