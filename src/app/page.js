import Link from "next/link";
import { cn } from "@/lib/utils";
import { services } from "@/lib/serviceDate";


export default function Home() {
  return (
    < >
      <section className=" mx-auto px-12 py-16  min-h-screen flex  justify-between items-center flex-col md:flex-row gap-24 max-w-6xl">
     
        <div className="w-full md:w-1/2 text-left space-y-16">
          <div className="space-y-6">
            <div className="space-y-1">
              <p className="text-body text-gray-200 text-normal md:text-lg">10 years of experiance !</p>
              <p className="text-body  text-5xl md:text-4xl lg:text-5xl leading-[1.1] font-bold capitalize  text-gray-300 font-serif">
                <span className="">Best</span> <span className="text-gray-400">crypto</span><br /> <span className="text-primary-500">Investing platorm</span><br />  <span className="text-gray-400">for your </span> <span className="">Future</span>
              </p>
            </div>
            <p className="text-gray-300 leading-tight tracking-wider capitalize ">NileAgency brings the strength and flow of the Nile to your digital presence. We specialize in web development, app innovation, and user-centric UI/UX design to help you dominate the competition</p>
          </div>
          <Link href={'/contact'} className='bg-primary-500 px-8 py-4 font-serif self-start text-black font-bold  rounded-lg '>Contact Us</Link>
        </div>

        <div className="w-full md:w-1/2 h-full relative flex items-center justify-center">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-primary-500/60 from-10% via-transparent via-30% to-primary-500/60 to-90% blur-[150px]"></div>
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

      <section className="w-full min-h-screen">
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
             services.map((item)=>(
              <div key={item.id} className={cn("serviceCard w-[330px] h-[250px] px-4 py-6 cursor-pointer transition justify-self-center duration-300 backdrop-blur-md rounded-lg border-[0.5px] border-gray-600 transform duration-300 ", item.id ===1  ? "bg-primary-500    md:-rotate-3 " : "bg-linear-to-b from-[#2f3332] to-[#14181c] bg-opacity-30")} >
              <div className={cn("content space-y-4  text-gray-300 ", item.id === 1 ? 'text-black' : 'text-gray-300')}>
                {item.icon}
                <h3 className=" font-semibold font-serif text-xl font-bold">{item.title}</h3>
                <p className={cn("text-xs leading-4 text-start lowercase",  item.id === 1  ? 'text-black/70' : 'text-gray-400')}>{item.desc}</p>
                <button className={cn("cursor-pointer font-bold leading-none mt-3 ")}> Learn more &rarr;</button>
              </div>
            </div>
             ))
           }
           </div>
          </div>
          </div>
      </section>
    </>
  );
}
