
export default function Loading() {
    return (
      <div className=" text-foreground-500 animate-pulse">
      <section className="px-2 sm:px-0 pt-16 pb-8 md:pt-24 flex flex-col items-left justify-left sm:justify-center">
      <div className="space-y-4 ">

            <div className="h-10 w-3/4 bg-gray-800 rounded"></div>
            <div className="h-4 w-full bg-gray-800 rounded"></div>
            <div className="h-4 w-5/6 bg-gray-800 rounded"></div>
          </div>
          <div className="mt-10 flex gap-6">
            <div className="h-20 w-24 bg-gray-800 rounded"></div>
            <div className="h-12 w-40 bg-gray-800 rounded"></div>
          </div>
        </section>
  
        <section className="flex flex-col md:flex-row gap-8 px-4 py-10 max-w-6xl mx-auto">
          <div className="w-full md:w-1/2 space-y-4">
            <div className="h-6 w-1/2 bg-gray-800 rounded"></div>
            {[...Array(6)].map((_, i) => (
              <div key={i} className="h-4 w-3/4 bg-gray-800 rounded"></div>
            ))}
          </div>
  
          <div className="grow grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="h-48 bg-gray-800 rounded-lg"></div>
            ))}
          </div>
        </section>
      </div>
    );
  }
  