'use client'
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";
import { useState } from "react";

export const HoverEffect = ({
  items,
  className
}) => {
  let [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div
      className={cn("grid grid-cols-1 md:grid-cols-2 gap-6 py-10 mt-16 md:mt-24", className)}>
      {items.map((item, idx) => (
        <div
          key={idx}
          className=" h-[400px] md:h-[450px] group flex flex-col items-start gap-2 relative p-4"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}>

          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-linear-to-b from-[#2f3332] to-[#14181c]  block rounded-t-lg rounded-b-3xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }} />
            )}
          </AnimatePresence>
         
             <div className="relative w-full h-full">
              <Image fill alt='allah' src={item.img} className="object-cover"/>
             </div>
             <h2 className="relative text-xl font-semibold text-[#1aa3a3] capitailize">{item.name}</h2>
             <p className="relative text-sm text-gray-300">{item.desc}</p>
        </div>
      ))}
    </div>
  );
};


