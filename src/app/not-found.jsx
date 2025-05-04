'use client'
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
export default function NotFound() {
    const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'Services', href: '/services' },
        { name: 'Portfolio', href: '/portfolio' },
        { name: 'About Us', href: '/about' },
    ]
  return (
    <main className='text-montserrat text-foreground-500 flex flex-col md:flex-row items-center justify-center gap-12 '>
      <motion.div className="order-2 md:order-1"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
      >
        <img
          src={'/error.png'}
          alt={`team`}
          className={cn('rounded-xl shadow-lg  object-cover w-2/3 mx-auto ')}
          loading="lazy"
        />
      </motion.div>
      <motion.div className='text-left order-1 md:order-2'
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
      >
        <p className='text-4xl sm:text-5xl font-bold mb-3  '>Oops!</p>
        <p className='text-lg sm:text-xl font-semibold capitalize mb-6 sm:mb-12 '> We Could not find that page</p>

        <p className='text-md sm:text-lg mb-6 '>Maybe you can find what you need Here </p>
        <ul className='flex flex-wrap justify-start gap-4 center text-foreground-500'>
                            {
                                navLinks.map((navLink) => {
                                    return (
                                        <li
                                            key={navLink.href}
                                            className={cn(
                                                "text-primary-500 hover:text-primary-500/80 duration-500 font-semibold ",
                                            )}
                                        >
                                            <Link href={navLink.href}>{navLink.name}</Link>
                                        </li>
                                    )
                                })
                            }
                        </ul>
      
      </motion.div>
    </main>
  );
}