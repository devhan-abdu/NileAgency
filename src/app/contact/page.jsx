import Contact from "@/components/Contact"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"

const ContactPage = () => {
    return (
        <div className='font-poppins text-foreground-500'>
            <section className="px-2 sm:px-0 pt-16 pb-12 md:pt-24  ">
                <div className="text-left md:text-center max-w-[700px] mx-auto ">
                    <h1 className="text-4xl lg:text-6xl leading-[1.3] font-bold mb-4 capitalize font-montserrat">
                    We've got a great feeling about this
                    </h1>
                    <p className="mb-6 text-foreground-500/80 text-sm md:text-base">Reach out today to discuss your project. Our team is ready to collaborate and create innovative solutions tailored to your business needs. Let’s work together!.</p>
                    <Link
                        href="#service"
                        className={cn(
                            buttonVariants({ variant: 'default', size: 'lg' }),
                            'font-poppins font-semibold text-lg hover:scale-[1.05] transform duration-300 px-6 py-3 relative text-background-500 '
                        )}
                    >
                        Contact Us
                    </Link>
                </div>
            </section>  
            <section id='contact'>
                <Contact/>
            </section>
              </div>
    )
}

export default ContactPage
