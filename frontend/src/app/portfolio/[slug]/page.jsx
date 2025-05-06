import Image from 'next/image'
import { client } from '@/lib/sanity'
import { ArrowLeftIcon, ArrowRightIcon, Quote } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import { getSingleProjectQuery } from '@/lib/queries'
import { notFound } from 'next/navigation'
import { urlFor } from '@/lib/sanity'

export default async function ProjectDetail({params}) {
    const {slug} =await params;

    const project = await client.fetch(getSingleProjectQuery,{slug});
    const allProjects = await client.fetch(`*[_type == "project"]{
        slug { current } ,clientName
      }`);
      const currentIndex = allProjects.findIndex(p => p.slug.current === slug);
      const prevProject = currentIndex > 0 ? allProjects[currentIndex - 1] : null;
      const nextProject = currentIndex < allProjects.length - 1 ? allProjects[currentIndex + 1] : null;
   

if (!project) {
  return notFound()
}

    return (
        <div className='font-poppins text-foreground-500 px-6  max-w-[1260px] mx-auto'>
            <section className="px-2 sm:px-0 pt-16 pb-8 md:pt-24  border-b border-gray-600 shadow-xl rounded-lg">
                <h1 className="text-4xl md:text-5xl lg:text-6xl leading-[1.3] font-bold mb-4 uppercase text-left font-montserrat">
                    {project.clientName}
                </h1>
            </section>
            <section className='py-4 my-8  '>
                <Link href="/portfolio" className='font-poppins inline-flex items-center justify-start gap-2 text-primary-500 text-xl font-bold hover:text-foreground-500 duration-500' >

                    <ArrowLeftIcon /> <span>Back to portfolio</span>
                </Link>
            </section>
            <section className='py-10 md:py-14 '>
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-6  items-center justify-center'>
                    <div className='space-y-10'>
                        <div>
                            <p className='text-xl font-bold mb-1'>Clients:</p>
                            <p className='text-sm'> <span className='uppercase text-base'>{project.clientName}:</span> {project.description}</p>
                        </div>
                        <div>
                            <p className='text-xl font-bold mb-1'>Services:</p>
                            <ul className='list-disc pl-4 list-inside space-y-1'>
                                {
                                    project.servicesProvided.map((service, index)=>(
                                        <li key={index} className='text-sm'>{service}</li>
                                    ))
                                }
                
                            </ul>
                        </div>
                        <Link href="#" className='self-end mt-auto text-primary-500 text-lg font-bold hover:text-foreground-500 duration-500 underline font-poppins' >
                            Vist The Site
                        </Link>
                    </div>
                    <div className='overflow-y-auto h-[80vh] border-1 border-gray-600 rounded-lg shadow-xl'>
                        <Image src={project.imageUrl} alt={project.clientName} width={1000} height={1000} layout='responsive' className='object-cover w-full' />
                    </div>
                </div>

                <div className='mt-18 space-y-8'>
                    <div>
                        <p className='text-xl font-bold mb-1'>The Challenge:
                        </p>
                        <p className='text-sm'>{project.challenge}
                        </p>
                    </div>
                    <div>
                        <p className='text-xl font-bold mb-1'>The Solutions:
                        </p>
                        <p className='text-sm'>{project.solution}</p>
                    </div>
                    <div>
                        <p className='text-xl font-bold mb-1'>The Result:
                        </p>
                        <p className='text-sm'>{project.result}</p>
                        </div>
                </div>
            </section>
            <section className="py-10 md:py-14">
                <div className='flex flex-col items-center justify-center max-w-[500px] mx-auto text-center'>
                    <Quote className='mb-4'/>
                    <p className=''>{project.testimonial.message}</p>
                    <div className="flex  gap-2 p-8 flex-row items-center sm:gap-6 sm:py-4 ...">
                        <Image
                          className="mx-auto block w-16 h-16 rounded-full object-cover object-center"
                          src={urlFor(project.testimonial.image).url()}
                          alt={`${project.testimonial.ceoName} - ${project.testimonial.companyName} CEO`}
                          width={64}
                          height={64}
                        />  
                        <div className="space-y-0.5">
                            <p className="text-lg font-semibold ">{project.testimonial.ceoName}</p>
                            <p className="font-medium capitalize">{project.testimonial.companyName} CEO</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className='py-10 md:py-14 space-y-6'>
               <div className='flex items-center justify-center gap-4 max-w-[600px] mx-auto'>
               <hr className='grow hidden sm:block' />
                <p className='font-bold text-xl '>See Other Projects</p>
                <hr  className='grow hidden sm:block'/>
               </div>
              <div className='flex items-center justify-between gap-6 '>
             {prevProject ? <Link  href={`/portfolio/${prevProject.slug.current}`}  className='inline-flex items-center justify-start gap-2 text-primary-500 text-xl font-bold hover:text-foreground-500 duration-500 font-poppins' >
                    <ArrowLeftIcon /> <span className='capitalize'>{prevProject.clientName}</span>
                </Link> : <div/>}
               {nextProject ? <Link href={`/portfolio/${nextProject.slug.current}`}  className='inline-flex items-center justify-start gap-2 text-primary-500 text-xl font-bold hover:text-foreground-500 duration-500 font-poppins' >

                   <span className='capitalize'>{nextProject.clientName}</span>  <ArrowRightIcon />
                </Link> :<div/>}
              </div>
                 
            </section>
        </div>
    )
}

