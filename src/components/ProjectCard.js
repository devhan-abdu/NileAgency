import Image from "next/image"
const ProjectCard = ({src , title , desc}) => {
  return (
   <div className=" h-[60vh]  flex flex-col items-start gap-2 relative px-4 py-2 ">
<div class="absolute inset-0 bg-fuchsia-400 bg-[size:20px_20px] opacity-20 blur-[100px]"></div>

    <div className="relative w-full h-[80%]">
     <Image fill alt='allah' src={src}/>
    </div>
    <h2 className="text-xl font-semibold text-gray-300 capitailize">{title}</h2>
    <p className="text-sm text-gray-500">{desc}</p>

   </div>
  )
}

export default ProjectCard
