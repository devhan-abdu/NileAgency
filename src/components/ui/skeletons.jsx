export function ProjectSection() {
    return (
    <div className="font-poppins text-foreground-500 animate-pulse">

        <section className="py-10 md:py-14" id="projects">

            <div className="w-2/3 mx-auto h-[1rem] mb-2 rounded-xl bg-foreground-500/30 mb-4" />
            <div className="w-1/2 mx-auto h-[1rem] mb-2 rounded-xl bg-foreground-500/30 " />


            <div className="flex flex-col md:flex-row gap-12 relative mt-24">
                <div className="w-full md:w-1/4 md:mt-24">
                    <div className=" flex flex-col gap-6">
                        <div className="p-6 md:border border-gray-500 shadow-2xl rounded-lg">
                            <div className="w-full h-[1rem] mb-2 rounded-xl" />
                            <div className="flex flex-wrap md:flex-col gap-4 items-start ">
                                <div className="w-full h-[.5rem] mb-2 rounded-xl bg-foreground-500/30" />
                                <div className="w-full h-[.5rem] mb-2 rounded-xl bg-foreground-500/30" />
                                <div className="w-full h-[.5rem] mb-2 rounded-xl bg-foreground-500/30" />
                                <div className="w-full h-[.5rem] mb-2 rounded-xl bg-foreground-500/30" />
                                <div className="w-full h-[.5rem] mb-2 rounded-xl bg-foreground-500/30" />
                                <div className="w-full h-[.5rem] mb-2 rounded-xl bg-foreground-500/30" />
                            </div>
                        </div>
                        <div className="w-[80%] h-[1rem] mb-2 rounded-xl bg-foreground-500/30" />
                    </div>
                </div>
                <div className="grow w-full md:w-3/4 grid grid-cols-1 md:grid-cols-2 gap-6 items-center justify-between">
                {
                  [1,2,3,4,5,6].map((item)=>(
                    <div key={item}>
                    <div
                        className="rounded-lg shadow-lg object-center object-cover w-full h-64 mb-4 w-32 h-32 bg-foreground-500/30"
                    />
                    <div className="w-[80%] h-[.5rem] mb-2 rounded-xl bg-foreground-500/30" />
                    <div className="w-full h-[.5rem] mb-2 rounded-xl bg-foreground-500/30 mt-2" />
                    <div className="w-full h-[.5rem] mb-2 rounded-xl bg-foreground-500/30" />
                  </div>
                    ))
                }
                
                </div>
            </div>
        </section>
    </div>
    )
}