import Image from "next/image"
const ProjectCard = ({src , title , desc}) => {
  return (
    <div className='relative overflow-hidden rounded-lg shadow-lg hover:border border-primary-500 max-w-[70vw] mx-auto'>
      <Image 
       src={src}
       alt={title}
       width={1000}
       height={1000}
       className="w-full object-contain "
       
      />

      <div className="relative px-6 py-2">
        <h2 className="text-2xl font-semibold line-clamp-1 text-gray-200">{title}</h2>
        <p className="text-lg line-clamp-2 text-gray-200">{desc}</p>
      </div>
    </div>
  )
}

export default ProjectCard
