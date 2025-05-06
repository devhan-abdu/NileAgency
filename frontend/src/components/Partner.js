import Image from "next/image"

export const Partner = () => {
     const clientLogos = [
        '/partnerLogo/corel.svg',
        '/partnerLogo/creative-new.svg',
        '/partnerLogo/nokia.svg',
        '/partnerLogo/opera.svg',
        '/partnerLogo/oppo-new.svg',
        '/partnerLogo/schibsted.svg',
        
      ];

  return (
    <div className="space-y-12">
    <div className='flex items-center justify-center gap-4 max-w-[500px] mx-auto'>
      <hr className='grow hidden sm:block' />
      <p className='font-bold sm:text-xl text-lg '>Trusted By Amazing Brand</p>
      <hr className='grow hidden sm:block' />
    </div>
    <div className="overflow-hidden whitespace-nowrap relative w-full">
      <div className="flex mx-auto w-max space-x-16 animate-scroll">
        {
          clientLogos.map((item, idx) => (
            <Image
              key={`logo1-${idx}`}
              src={item}
              alt={`Client logo ${idx + 1}`}
              className="mx-8 w-24 lg:w-32 h-auto inline-block"
              width={128}
              height={128}
            />
          ))
        }
        {
          clientLogos.map((item, idx) => (
            <Image
              key={`logo2-${idx}`}
              src={item}
              alt={`Client logo ${idx + 1}`}
              className="mx-8 w-24 lg:w-32 h-auto inline-block"
              width={128}
              height={128}
            />
          ))
        }
      </div>          
    </div>
    </div>
  )
}


