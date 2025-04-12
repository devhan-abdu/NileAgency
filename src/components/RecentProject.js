import { recentProject } from "@/lib/serviceDate";
import { PinContainer } from "./3D-pin";



const RecentProject = () => {
    return (

        <div className="py-20 relative">
            <div className="space-y-4">
                <h1 className="text-gray-500 text-4xl capitalize font-serif font-semibold text-center">
                    <span className="text-gray-300">Our </span>
                    <span className="text-primary-500">Success </span>
                    <span>Stor</span>
                    <span className="text-gray-300">ies</span>
                </h1>
                <p className="text-gray-200 text-center max-w-[500px] mx-auto">
                    Real projects, real results. Discover how we’ve made a difference for our clients.
                </p>
            </div>
            <div className="flex flex-wrap items-center justify-center p-4 mt-10 gap-16 bg-red-200 relative">
                {
                    recentProject.map(({ id, name, desc, img, icon }) => (
                        <div key={id} className="lg:min-h-[32.5] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw] bg-green-200 overflow-hidden">
                            <PinContainer key={id} title="/ui.aceternity.com" className='bg-gray-200 w-full'
                                href="https://twitter.com/mannupaaji">
                                    <div className="">
                                        <img src={img} alt={name} className="absolute z-10 bottom-0 w-full h-full" />

                                    </div>
                               
                            </PinContainer>
                            </div>
                    ))
                }
            </div>
        </div>

    );
};

export default RecentProject;
