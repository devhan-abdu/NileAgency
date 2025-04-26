'use client';
import Link from "next/link"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import RecentProject from "@/components/RecentProject"
import { recentProject } from "@/lib/serviceDate";
import { useMemo, useState } from "react"
import Pagination from "@/components/Pagination";
import { FolderMinus } from "lucide-react";

const Works = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [category, setCategory] = useState('all')
    const itemsPerPage = 8;

    const filteredProjects = useMemo(() => {
        switch (category) {
            case 'branding':
                return recentProject.filter((item) => item.category === 'branding')
            case 'web':
                return recentProject.filter((item) => item.category === 'web')
            case 'ui/ux':
                return recentProject.filter((item) => item.category === 'uiux')
            case 'ecommerce':
                return recentProject.filter((item) => item.category === 'ecommerce')
            default:
                return recentProject;
        }
    }, [category])

    const paginatedProjects = useMemo(() => {
        const lastIndex = currentPage * itemsPerPage;
        const firstIndex = lastIndex - itemsPerPage;
        return filteredProjects.slice(firstIndex, lastIndex)
    }, [currentPage, filteredProjects])
    return (
        <div className="font-montserrat text-foreground-500" >
            <section className="px-2 sm:px-0 pt-16 pb-8 md:pt-24  ">
                <div className="text-left md:text-center max-w-[700px] mx-auto ">
                    <h1 className="text-4xl lg:text-6xl leading-[1.3] font-bold mb-4 capitalize">
                        Design That Speak Louder Than Words
                    </h1>
                    <p className="mb-6 text-base sm:pr-6 pr-0">We deliver innovative Ecommerce, Digital Marketing, and UI/UX solutions that drive results, crafted with precision to elevate your brand</p>
                    <div className='flex  items-center place-content-around gap-4  py-10 border-t border-gray-600 shadow-xl max-w-[700px] mx-auto rounded-lg text-gray-400 '>
                        <div className=" px-2">
                            <p className='text-5xl sm:text-6xl font-bold mb-2 animate-fade text-gray-200'>100+</p>
                            <p className=" md:ml-16  uppercase ">Projects Done</p>
                        </div>
                        <Link
                            href="#projects"
                            className={cn(
                                buttonVariants({ variant: 'default', size: 'lg' }),
                                ' font-semibold  hover:scale-[1.05] transform duration-300 p-5 text-black rounded-md  text-lg'
                            )}
                        >
                            Explore Our Work
                        </Link>
                    </div>
                </div>
            </section>

            <section className="py-10 md:py-14 " id="projects">
                <h1 className="text-3xl lg:text-4xl leading-[1.4] font-bold  capitalize text-center max-w-[900px] mx-auto mb-10 md:mb-16 ">
                    A Decade of Digital Success for Clients Now Yours 🫵
                </h1>
                <div className="flex flex-col md:flex-row  gap-12 relative ">
                    <div className="w-full md:w-1/4  md:mt-24">
                        <div className="sticky top-12 flex flex-col gap-6">
                            <div className=" p-6 md:border border-gray-500 shadow-2xl rounded-lg  ">
                                <h2 className="text-2xl  font-bold mb-6">Services</h2>
                                <div className="flex flex-wrap md:flex-col gap-4 items-start">
                                    {
                                        ['all', 'branding', 'ui/ux', 'web', 'ecommerce'].map((item, index) => (
                                            <button key={index} className={cn("cursor-pointer uppercase text-sm md:text-base", item === category ? 'text-primary-500' : 'text-foreground-500/80')} onClick={() => { setCategory(item); setCurrentPage(1) }}>{item}</button>
                                        ))
                                    }

                                </div>
                            </div>
                            <Link
                                href="/contact"
                                className={cn(
                                    buttonVariants({ variant: 'default', }),
                                    ' font-semibold text-lg hover:scale-[1.05] transform duration-300 p-5 text-black rounded-md hidden md:inline-flex items-center'
                                )}
                            >
                                Hava a Project ?
                            </Link>
                        </div>
                    </div>
                    <div className="grow w-full md:w-3/4">
                        {paginatedProjects.length === 0 ? (
                            <div className="flex flex-col h-full items-center justify-center text-foreground-500/80">
                                <FolderMinus className="h-12 w-12 mb-4" />
                                <p className="text-xl">No projects found.</p>
                            </div>) : (
                            <RecentProject projects={paginatedProjects} />
                        )}
                    </div>
                </div>
                {
                    filteredProjects.length > itemsPerPage && (
                        <div className="flex items-center justify-center mt-10">
                            <Pagination itemsPerPage={itemsPerPage} setCurrentPage={setCurrentPage} currentPage={currentPage} totalItems={filteredProjects.length}
                            />
                        </div>
                    )
                }

            </section>
            <section className="py-12 md:py-16 flex flex-col  justify-center gap-4 items-center text-center relative mt-12">
                <div className="absolute inset-0 -z-10 h-full w-full items-center rounded-xl px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#202020_60%,#328c05_100%)]"></div>

                <h1 className="text-2xl md:text-4xl  leading-[1.2] font-bold capitalize  text-center  ">
                    Transform Your Ideas into Reality
                </h1>
                <p className="mb-2 text-sm md:text-base">Don't settle for mediocrity. Partner with NileAgency for <br /> innovative solutions that drive success.
                </p>
                <Link
                    href="#service"
                    className={cn(
                        buttonVariants({ variant: 'default', size: 'lg' }),
                        ' font-semibold text-lg hover:scale-[1.05] transform duration-300 px-6 py-6 text-black b'
                    )}
                >
                    Request a Quote
                </Link>
            </section>
        </div>
    )
}

export default Works
