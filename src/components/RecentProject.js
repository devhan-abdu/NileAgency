'use client'
import Image from "next/image";
import {motion} from "framer-motion";
import { useState } from "react";

const RecentProject = ({projects}) => {
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const springConfig = { type: "spring", stiffness: 100, damping: 20 };

    
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {
                projects.map((item, index) => (
                    <motion.div
                    key={index}
                    className="relative p-4 rounded-lg"
                    initial={{ scale: 1, opacity: 1, y: 0 }}
                    animate={{
                        scale: hoveredIndex === null ? 1 : hoveredIndex === index ? 1.02 : 0.95,
                        opacity: hoveredIndex === null ? 1 : hoveredIndex === index ? 1 : 0.5,
                        y: hoveredIndex === index ? -5 : 0,
                    }}
                    transition={springConfig}
                    onHoverStart={() => setHoveredIndex(index)}
                    onHoverEnd={() => setHoveredIndex(null)}                  
                    whileHover={{
                        boxShadow: "0 0 15px rgba(84, 194, 32, 0.3)",
                    }}
                >
                            <Image width={1000} height={1000} src={item.img} alt={item.name} layout="responsive" className="rounded-lg shadow-lg object-cover w-full h-64 mb-4" />
                        <p className="text-left mb-2 font-semibold text-xl">{item.name}</p>
                        <p className="text-left text-foreground-500/70 line-clamp-2 text-sm">{item.desc}</p>
                        </motion.div>
                ))

            }
        </div>
       
    );
};

export default RecentProject;
