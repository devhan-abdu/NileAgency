'use client'
import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import RecentProject from "@/components/RecentProject";
import { useEffect, useMemo, useState } from "react";
import { ArrowRightIcon, FolderMinus } from "lucide-react";

export default function Portfolio({ projects }) {
  const [category, setCategory] = useState("all");
  const [visibleCount, setVisibleCount] = useState(6)
  const [displayProject, setDisplayProject] = useState([])

  const categories = [
    { name: 'All', value: 'all' },
    { name: 'UI/Ux', value: 'uiux' },
    { name: 'Web Development', value: 'webdevelopment' },
    { name: 'App Development', value: 'appdevelopment' },
    { name: 'Content Writing', value: 'contentwriting' },
    { name: 'Digital Marketing', value: 'digitalmarketing' },
    { name: 'Ecommerce', value: 'ecommerce' },
  ]

  const filteredProjects = useMemo(() => {
    switch (category) {
      case "webdevelopment":
        return projects.filter((project) =>
          project.servicesProvided.includes("Web Development")
        );
      case "appdevelopment":
        return projects.filter((project) =>
          project.servicesProvided.includes("App Development")
        );
      case "uiux":
        return projects.filter((project) =>
          project.servicesProvided.includes("UI/UX Design")
        );
      case "ecommerce":
        return projects.filter((project) =>
          project.servicesProvided.includes("E-commerce")
        );
      case "contentwriting":
        return projects.filter((project) =>
          project.servicesProvided.includes("Content Writing")
        );
      case "digitalmarketing":
        return projects.filter((project) =>
          project.servicesProvided.includes("Digital Marketing")
        );
      default:
        return projects;
    }
  }, [category, projects]);


  const visibleProject = useMemo(() => {
    return filteredProjects.slice(0, visibleCount)
  }, [visibleCount, filteredProjects])

  useEffect(() => {
    setDisplayProject(visibleProject)
  }, [visibleProject])

  const handleVisible = () => {
    setVisibleCount((prev) => prev + 6)
  }

  return (
    <div className="font-poppins text-foreground-500">
     
      <section className="py-10 md:py-14" id="projects">
        <h1 className="text-3xl lg:text-4xl leading-[1.4] font-bold capitalize text-center max-w-[900px] mx-auto mb-10 md:mb-16 font-montserrat">

          A Decade of Digital Success for Clients Now Yours 🫵
        </h1>
        <div className="flex flex-col md:flex-row gap-12 relative">
          <div className="w-full md:w-1/4 md:mt-24">
            <div className="sticky top-12 flex flex-col gap-6">
              <div className="p-6 md:border border-gray-500 shadow-2xl rounded-lg">
                <h2 className="text-2xl font-bold mb-6 font-montserrat">Services</h2>
                <div className="flex flex-wrap md:flex-col gap-4 items-start ">
                  {categories.map((item, index) => (
                    <button
                      key={index}
                      className={cn(
                        "cursor-pointer uppercase text-sm md:text-base capitalize pr-4 md:pr-0",

                        item.value === category
                          ? "text-primary-500"
                          : "text-foreground-500/80"
                      )}
                      onClick={() => setCategory(item.value)}
                    >
                      {item.name}
                    </button>
                  ))}
                </div>
              </div>
              <Link
                href="#contact"
                className={cn(
                  buttonVariants({ variant: "default" }),
                  "font-poppins font-semibold text-lg hover:scale-[1.05] transform duration-300 p-5 text-black rounded-md hidden md:inline-flex items-center"

                )}
              >
                Have a Project ?
              </Link>
            </div>
          </div>
          <div className="grow w-full md:w-3/4 ">

            {filteredProjects.length === 0 ? (
              <div className="flex flex-col h-full items-center justify-center text-foreground-500/80">
                <FolderMinus className="h-12 w-12 mb-4" />
                <p className="text-xl">No projects found.</p>
              </div>
            ) : (
              <RecentProject projects={displayProject} />
            )}
            {displayProject.length !== filteredProjects.length && (
             
              <button onClick={handleVisible}  className='flex justify-end mt-6 w-full ' >
              <p className="cursor-pointer inline-flex items-center justify-start  gap-2 text-primary-500 text-xl font-bold hover:text-foreground-500 duration-500 font-poppins"><span className='capitalize'>See More</span>  <ArrowRightIcon /></p>
             </button>
            )}

          </div>
        </div>
      </section>
    </div>
  );
}