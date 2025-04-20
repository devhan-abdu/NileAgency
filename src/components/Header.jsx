'use client'
import { cn } from "@/lib/utils";
import Link from "next/link"
import { usePathname } from "next/navigation"
import { CgMenuLeft } from "react-icons/cg";
import { buttonVariants } from "./ui/button";


import {
    Sheet,
    SheetContent,
    SheetTrigger,
} from "@/components/ui/sheet"


const Header = () => {
    const pathName = usePathname();
    const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'Services', href: '/services' },
        { name: 'About Us', href: '/about'},
        { name: 'Contact Us', href: '/contact'}
    ]

    return (

        <header className='flex items-center p-4'>
            <div className="flex justify-between items-center gap-4  w-full ">
                <Link href={'/'} className=" text-primary-500  text-2xl  font-medium font-mono">
                    NileAgency
                </Link >
                <nav className='hidden md:block'>
                    <ul className='flex justify-between  text-gray-400 gap-6'>
                        {
                            navLinks.map((navLink) => {
                                const isActive = navLink.href === pathName;
                                return (
                                    <li
                                        key={navLink.href}
                                        className={cn(
                                            " hover:text-primary-500  duration-300 text-sm px-4 py-2 sm:text-base",
                                            isActive && "text-primary-500"
                                        )}
                                    >
                                        <Link href={navLink.href} >{navLink.name}</Link>
                                    </li>)}) 
                                    }
                    </ul>
                </nav>
                <Link
                    href="/contact"
                    className={cn(
                        buttonVariants({ variant: 'default' }),
                        '   hover:scale-[1.05] transform duration-300 hidden md:block'
                    )}
                >
                   Become a client
                </Link>
            </div>
            <div className="flex md:hidden">
                <Sheet className=''>
                    <SheetTrigger className='mx-2 sm:mx-4'>
                        < CgMenuLeft className='text-primary-500 text-3xl' />
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
