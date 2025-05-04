import Contact from '@/components/Contact.jsx'
import PortfolioWrapper from './PortfolioWrapper.js'
import Link from 'next/link.js'
import { cn } from '@/lib/utils.js'
import { buttonVariants } from '@/components/ui/button.jsx'
import { Suspense } from 'react'
import { ProjectSection } from '@/components/ui/skeletons.jsx'

export default  function Page (){

  return (
     <div className="font-poppins text-foreground-500 px-6 max-w-[1160px] mx-auto">
          <section className="px-2 sm:px-0 pt-16 pb-8 md:pt-24">
            <div className="text-left md:text-center max-w-[700px] mx-auto">
              <h1 className="text-4xl lg:text-6xl leading-[1.3] font-bold mb-4 capitalize font-montserrat">
    
                Design That Speak Louder Than Words
              </h1>
              <p className="mb-6 text-base sm:pr-6 pr-0">
                We deliver innovative Ecommerce, Digital Marketing, and UI/UX
                solutions that drive results, crafted with precision to elevate
                your brand
              </p>
              <div className="flex flex-col sm:flex-row items-center place-content-around gap-8 sm:gap-4 py-10 border-t border-gray-600 shadow-xl max-w-[700px] mx-auto rounded-lg text-gray-400">
    
                <div className="px-2">
                  <p className="text-5xl sm:text-6xl font-bold mb-2 animate-fade text-gray-200">
                    150+
                  </p>
                  <p className="md:ml-16 uppercase">Projects Done</p>
                </div>
                <Link
                  href="#projects"
                  className={cn(
                    buttonVariants({ variant: "default", size: "lg" }),
                    "font-poppins font-semibold hover:scale-[1.05] transform duration-300 p-5 text-black rounded-md text-lg"
    
                  )}
                >
                  Explore Our Work
                </Link>
              </div>
            </div>
          </section>
          <Suspense fallback={<ProjectSection/>}>
          <PortfolioWrapper/>
          </Suspense>
        
          <section id="contact"><Contact/></section>
          </div>
  ) 
}

