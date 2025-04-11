'use client'
import { cn } from "@/lib/utils";
import Link from "next/link"
import { usePathname } from "next/navigation"
import { CgMenuLeft } from "react-icons/cg";
import { Layers ,Mail, Users , House } from 'lucide-react';


import {
    Sheet,
    SheetContent,
    SheetTrigger,
} from "@/components/ui/sheet"


const Header = () => {
    const pathName = usePathname();

    const navLinks = [
        { name: 'Home', href: '/' , icon:<House/>},
        { name: 'Services', href: '/services' , icon:<Layers/> },
        { name: 'About Us', href: '/about' , icon:<Users/>  },
        { name: 'Contact Us', href: '/contact' , icon:<Mail/> }
    ]

    return (
  
            <header className='flex items-center px-6 py-3 max-w-6xl mx-auto'>
                 <div className="flex justify-between items-center gap-4 h-20 w-full">
                <Link href={'/'} className="logo text-primary-500 uppercase text-xl md:text-2xl font-bold tracking-wider">
                    NILEAGENCY
                </Link >
                <nav className='hidden md:block'>
                    <ul className='flex justify-between lg:gap-12 text-gray-400 gap-4'>
                        {
                            navLinks.map((navLink) => {
                                const isActive = navLink.href === pathName;
                                return (
                                    <li
                                        key={navLink.href}
                                        className={cn(
                                            "font-semibold hover:text-primary-500 duration-300",
                                            isActive && "text-primary-500"
                                        )}
                                    >
                                        <Link href={navLink.href} className="flex items-center gap-1 ">{navLink.icon} <span>{navLink.name}</span></Link>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </nav>
                <Link href={'/contact'} className='bg-primary-500 px-6 py-1.5   font-sans text-black font-bold  rounded-lg hidden md:block '>Contact Us</Link>

            </div>
            <div className="flex md:hidden">
                <Sheet className=''>
                    <SheetTrigger className='mx-2 sm:mx-4'>
                        < CgMenuLeft className='text-primary-500  text-2xl' />
                    </SheetTrigger>
                    <SheetContent className='w-[250px] bg-black/90 shadow-md shadow-primary-500  px-12 py-28'>

                        <nav>
                            <ul className='flex flex-col justify-between gap-6 text-gray-400'>
                                {
                                    navLinks.map((navLink) => {
                                        const isActive = navLink.href === pathName;
                                        return (
                                            <li
                                                key={navLink.href}
                                                className={cn(
                                                    "font-semibold hover:text-primary-500 duration-300",
                                                    isActive && "text-primary-500"
                                                )}
                                            >
                                                <Link href={navLink.href}>{navLink.name}</Link>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </nav>
                    </SheetContent>
                </Sheet>
            </div>

        </header>
    )
}

export default Header
