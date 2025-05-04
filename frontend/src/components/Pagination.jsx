'use client';
import { cn } from '@/lib/utils';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { recentProject } from '@/lib/serviceDate'

const generatePagination = (currentPage, totalPages) => {
    if (totalPages <= 7) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }  
    if (currentPage <= 3) {
      return [1, 2, 3, '...', totalPages - 1, totalPages];
    }  
    if (currentPage >= totalPages - 2) {
      return [1, 2, '...', totalPages - 2, totalPages - 1, totalPages];
    } 
    return [
      1,
      '...',
      currentPage - 1,
      currentPage,
      currentPage + 1,
      '...',
      totalPages,
    ];
  };

const Pagination = ({totalItems,itemsPerPage , setCurrentPage ,currentPage }) => {
  let totalPages =Math.ceil(totalItems / itemsPerPage);
  const allPages = generatePagination(currentPage, totalPages);
  console.log(allPages , 'allpage')
  console.log(totalPages , 'totalpage')
  console.log(currentPage ,'currentpage')


  return (
    <>
      <div className="inline-flex">
        <PaginationArrow
          direction="left"
          page={currentPage-1}
          isDisabled={currentPage <= 1}
          setCurrentPage={setCurrentPage}
        />

        <div className="flex -space-x-px">
          {allPages.map((page, index) => {
            let position='';

            if (index === 0) position = 'first';
            if (index === totalPages.length - 1) position = 'last';
            if (totalPages.length === 1) position = 'single';
            if (page === '...') position = 'middle';

            return (
              <PaginationNumber
                key={index}
                page={page}
                position={position}
                isActive={currentPage === page}
                setCurrentPage={setCurrentPage}
              />
            );
          })}
        </div>

        <PaginationArrow
          direction="right"
          page={currentPage+1}
          isDisabled={currentPage >= totalPages}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </>
  );
}

function PaginationNumber({ page, setCurrentPage, isActive, position}) {
  const className = cn(
    'flex h-10 w-10 items-center justify-center text-sm border cursor-pointer transition duration-1000',
    {
      'rounded-l-md': position === 'first' || position === 'single',
      'rounded-r-md': position === 'last' || position === 'single',
      'z-10 bg-primary-500 border-primary-500 text-black': isActive,
      'hover:bg-gray-100 hover:text-black': !isActive && position !== 'middle',
      'text-gray-300': position === 'middle',
    },
  );

  return isActive || position === 'middle' ? (
    <div className={className}>{page}</div>
  ) : (
    <p onClick={()=>setCurrentPage(page)} className={className}>
      {page}
    </p>
  );
}

function PaginationArrow({ page, direction, isDisabled,setCurrentPage}){
  const className =cn(
    'flex h-10 w-10 items-center justify-center rounded-md border transition duration-1000 ',
    {
      'pointer-events-none text-gray-300': isDisabled,
      'hover:bg-gray-100 hover:text-black': !isDisabled,
      'mr-2 md:mr-4': direction === 'left',
      'ml-2 md:ml-4': direction === 'right',
    },
  );

  const icon =
    direction === 'left' ? (
      <ArrowLeft className="w-4" />
    ) : (
      <ArrowRight className="w-4" />
    );

  return isDisabled ? (
    <div className={className}>{icon}</div>
  ) : (
    <p className={className} onClick={()=>setCurrentPage(page)}>
      {icon}
    </p>
  );
}
export default Pagination











