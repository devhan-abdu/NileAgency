'use client'
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

export default function NotFound() {
  return (
    <main className='text-montserrat text-foreground-500 grid grid-cols-1 md:grid-cols-2 items-center justify-center gap-12 h-screen'>
      <motion.div className=" w-full"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Image
          src={'/error.png'}
          alt={`team`}
          width={400}
          height={400}
          className='rounded-xl shadow-sm  object-cover sm:ml-auto mx-auto'
          loading="lazy"
        />
      </motion.div>

      <motion.div className=''
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <p className='text-5xl font-bold mb-3'>Oops!</p>
        <p className='text-xl font-semibold capitalize mb-12'> We Could not find the requested project</p>

        <p className='text-lg mb-6 '>Let’s go back to the portfolio and explore more</p>
        <Link
          href="/portfolio"
          className="mt-4  bg-primary-500/80 px-4 py-1 rounded-sm text-xl font-bold text-black transition-colors hover:bg-primary-500 font-poppins"
        >
          Go Back
        </Link>

      </motion.div>
    </main>
  );
}