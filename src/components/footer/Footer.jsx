'use client'
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import React from 'react';
import {
    Linkedin,
    Instagram,
    Twitter,
    Facebook,
    Youtube,
} from 'lucide-react';

const Footer = () => {
    const pathName = usePathname();
    const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'Services', href: '/services' },
        { name: 'Portfolio', href: '/portfolio' },
        { name: 'About Us', href: '/about' },
        { name: 'Contact Us', href: '/contact' },
    ]

    const socialLinks = [
        { icon: <Linkedin />, href: 'https://linkedin.com' },
        { icon: <Instagram />, href: 'https://instagram.com' },
        { icon: <Twitter />, href: 'https://twitter.com' },
        { icon: <Facebook />, href: 'https://facebook.com' },
        { icon: <Youtube />, href: 'https://youtube.com' },
    ];

    const NavMap = () => {
        return (
            navLinks.map((navLink) => {
                const isActive = navLink.href === pathName;
                return (
                    <li
                        key={navLink.href}
                        className={cn(
                            "hover:text-primary-500 duration-300",
                            isActive && "text-primary-500"
                        )}
                    >
                        <Link href={navLink.href}>{navLink.name}</Link>
                    </li>
                )
            })
        )
    }
    return (
        <div className='text-foreground-500 font-poppins  mb-2  mt-16 flex items-center justify-center '>

            <div className='flex flex-col items-center justify-center gap-6  pb-6  bg-[#202020] px-2 rounded-lg w-full'>
                <div className=' p-6 relative rounded-lg w-full sm:w-[80%] max-w-3xl -mt-12 z-10'>
                    <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-6 [background:radial-gradient(125%_125%_at_50%_10%,#202020_60%,#5dd623_100%)] rounded-sm"></div>
                    <div className='flex flex-col md:flex-row items-center justify-center gap-6 '>
                        <p className='text-lg md:text-xl font-montserrat font-semibold'>Subscribe to our newsLetter</p>
                        <div className="inline-flex border border-foreground-500 focus-within:border-primary-500 text-white rounded-full transition">
                            <input
                                type="text"
                                className="outline-none px-2 py-2 bg-transparent text-white"
                                placeholder="Enter email"
                            />
                            <button className="text-black bg-white rounded-r-full px-2 font-bold cursor-pointer">
                                Subscribe
                            </button>
                        </div>


                    </div>
                </div>

                <h1 className='text-3xl font-bold font-montserrat uppercase'>NileAgency</h1>
                <ul className='flex flex-wrap justify-center items-center gap-6 mx-auto mt-2 '>
                    {
                        <NavMap />
                    }
                </ul>
                <div className='flex gap-3 items-center mt-2 mb-6'>
                    {
                        socialLinks.map((item, index) => (
                            <Link key={index} target='_blank' href={item.href} className='w-10 h-10 rounded-full flex items-center justify-center bg-white text-black hover:scale-105  transition duration-300'>  {item.icon}</Link>
                        ))
                    }
                </div>
                <p>Copyright &copy; <span className='font-semibold'>NileAgency</span> </p>
            </div>
        </div>
    )
}

export default Footer
