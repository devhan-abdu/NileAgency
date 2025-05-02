import { buttonVariants } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { cn } from "@/lib/utils"
import { solutions } from "../services/data"
import { whyChooseUs } from "@/lib/serviceDate"
import Contact from "@/components/Contact"


const About = () => {
    return (
        <div className="font-poppins text-foreground-500" >
            <section className="px-2 sm:px-0 pt-16 pb-12 md:pt-24  ">
                <div className="text-left md:text-center max-w-[700px] mx-auto ">
                    <p className="text-xl ">WE ARE</p>
                    <h1 className="text-4xl lg:text-6xl leading-[1.3] font-bold mb-4 capitalize font-montserrat ">
                        NileAgency Your Digital Partner
                    </h1>
                    <p className="mb-6 text-base">Innovative Ecommerce, Marketing, and UI/UX solutions that drive results</p>
                    <Link
                        href="#about"
                        className={cn(
                            buttonVariants({ variant: 'default', size: 'lg' }),
                            'font-poppins font-semibold text-lg hover:scale-[1.05] transform duration-300 px-6 py-3 relative text-background-500 '
                        )}
                    >
                        Discover More
                    </Link>
                </div>
            </section>
            <section className="py-12 md:py-16 space-y-20 " id="about">
                <p className="text-center mb-1 text-sm">About Us</p>
                <h2 className=" text-2xl sm:text-3xl lg:text-4xl leading-[1.1] font-bold mb-4 capitalize text-center font-montserrat">
                    From Vision to Impact
                </h2>
                <p className="text-foreground-500/80 text-center max-w-[500px] mx-auto text-sm">
                    Transforming businesses with digital solutions since 2015
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-12 ">
                    <div className="w-full sm:w-1/2">
                        <Image
                            src={'/about.jpg'}
                            alt={`team`}
                            width={400}
                            height={400}
                            className='rounded-xl shadow-sm shadow-primary-500/20 object-cover sm:ml-auto mx-auto'
                            loading="lazy"
                        />
                    </div>
                    <div className="leading-8 sm:w-1/2 w-full">
                        <p>NileAgency , founded in 2015, is a digital powerhouse delivering inovative solution in UI/UX Design , Web Development ,App Develpment , Content Writing , Digital Marketing and Ecommerce</p><br />
                        <p>Our mission is empowering businesses with cutting-edge digital solutions that drive growth and engagement effortlessly</p>
                    </div>
                </div >

            </section>
            <section className="py-12 md:py-16">
                <p className="text-center mb-1 text-sm">Services</p>
                <h2 className=" text-2xl sm:text-3xl lg:text-4xl leading-[1.1] font-bold mb-4 capitalize text-center font-montserrat">
                    Solutions That Drive Success
                </h2>
                <p className="text-foreground-500/80 text-center max-w-[500px] mx-auto text-sm">
                    Smart services for growing modern brands
                </p>
                <div className="flex items-center justify-center mt-12 md:mt-16">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {
                            solutions.map((item, index) => (
                                <div key={index} className={cn("serviceCard w-[300px] h-[230px] px-4 py-5 rounded-lg border-[1.5px] border-white/20 transform cursor-pointer transition duration-300 ")} >
                                    <h3 class="text-2xl  font-bold mb-4 text-center font-montserrat">{item.title}</h3>
                                    <ul class="list-disc pl-5 space-y-2 text-sm">
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

            <section className="py-10 md:py-14 ">
                <p className="text-center mb-1 text-sm">why choose us</p>
                <h2 className=" text-2xl sm:text-3xl lg:text-4xl leading-[1.1] font-bold mb-4 capitalize text-center font-montserrat">
                    Why NileAgency Stands Out
                </h2>
                <p className="text-foreground-500/80 text-center max-w-[500px] mx-auto text-sm">
                    Innovative strategies driving success for 100+ clients
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
                                        <h3 className="text-lg font-semibold font-montserrat">{item.title}</h3>
                                        <p className="text-sm text-foreground-500/80 line-clamp-3">{item.desc}</p>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </section>
            < Contact />
        </div>
    )
}
export default About
