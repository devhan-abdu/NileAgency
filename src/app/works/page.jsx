import Link from "next/link"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"

const Works = () => {
    return (
        <div className='text-gray-300'>
            <section className="px-2 sm:px-0 pt-16 pb-8 md:pt-24  relative text-left sm:text-center ">
                <h1 className=" text-4xl sm:text-5xl leading-[1.4] font-bold capitalize font-serif mb-4 max-w-[700px] mx-auto">
                    <span className="">Designs That</span><span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 from-55% to-green-400 to-90% "> Speak Louder</span> <span className="">Than Words</span>
                </h1>
                <p className="text-gray-300 text-base lg:text-lg capitalize mb-12 max-w-[500px] mx-auto"> From Ecommerce to UI/UX, our projects redefine digital success with innovation and precision.</p>

                <div className='flex  items-center place-content-around gap-4  py-10 border-t border-gray-600 shadow-xl max-w-[700px] mx-auto rounded-lg text-gray-400 '>
                    <div className=" px-2">
                        <p className='text-5xl sm:text-6xl font-bold mb-2 animate-fade text-gray-200'>100+</p>
                        <p className=" ml-16 text-lg uppercase ">Project Done</p>
                    </div>
                    <Link
                        href="#service"
                        className={cn(
                            buttonVariants({ variant: 'default', size: 'lg' }),
                            ' font-semibold text-lg hover:scale-[1.05] transform duration-300 px-6 py-6 text-black rounded-md '
                        )}
                    >
                        Explore Our Work
                    </Link>
                </div>
            </section>

            <section className="py-12 md:py-16 ">
                <div className="flex flex-col sm:flex-row  gap-12  ">
                  <div className="w-1/4 mt-24">
                    <div className=" p-6 border border-gray-500 shadow-2xl rounded-lg sticky top-24">
                        <h2 className="text-2xl text-gray-300 font-bold mb-6">Services</h2>
                        <ul className="space-y-4 text-left text-gray-400 capitalize ">
                            <li className="cursor-pointer ">ALL</li>
                            <li className="cursor-pointer ">Branding</li>
                            <li className="cursor-pointer ">UI/UX</li>
                            <li className="cursor-pointer ">Web Devlopment</li>
                            <li className="cursor-pointer ">Eccomerce</li>
                        </ul>
                    </div>
                  </div>
                  <div className="w-3/4 grow grid grid-cols-1 sm:grid-cols-2 gap-12">
                  <h1 className="col-span-1 sm:col-span-2 text-3xl sm:text-4xl leading-[1.4] font-bold capitalize font-serif mb-4 text-center">
                    <span className="">A Decade of</span><span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 from-55% to-green-400 to-90% "> Digital Success</span> <span className="">for Clients <br/> Now Yours</span>
                </h1>
                   {
                    [1,2,3,4,5,6,7,8].map((item) =>(
                    <div className="">
                    <div >
                        <img src="/work1.png" alt="" />
                    </div>
                    <div>
                        <span>Category</span>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, placeat.</p>
                    </div>
                    </div>
                    ))
                    }
                   
                  </div>
                </div>
            </section>
        </div>
    )
}

export default Works
