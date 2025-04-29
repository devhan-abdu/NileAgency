'use client'
import { cn } from "@/lib/utils";
import Link from "next/link"
import { usePathname } from "next/navigation"
import { CgMenuLeft } from "react-icons/cg";
import {
    Sheet,
    SheetContent,
    SheetTrigger,
} from "@/components/ui/sheet"
import { FloatingNav } from "./ui/FloatedNav";

const Header = () => {
    const pathName = usePathname();
    const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'Services', href: '/services' },
        { name: 'Portfolio', href: '/portfolio' },
        { name: 'About Us', href: '/about' },
    ]


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

        <header className='flex items-center justify-between font-poppins  text-foreground-500 px-4 py-8'>
            <FloatingNav navItems={navLinks} />
            <div className="flex justify-between items-center place-content-center gap-4 w-full">
                <Link href={'/'} className="text-primary-500 text-3xl font-semibold inline-block font-montserrat">
                    NileAgency
                </Link>
                <nav className='hidden md:flex grow'>
                    <ul className='flex justify-between items-center gap-6 mx-auto'>
                        {
                            <NavMap />
                        }
                    </ul>
                    <Link href={'/contact'}
                        className=" border text-sm font-medium relative border-white/[0.2] text-black bg-primary-500 px-4 py-2 rounded-lg ">
                        <span>Become a client</span>
                    </Link>
                </nav>

            </div>
            <Sheet className='flex md:hidden w-full px-4'>
                <SheetTrigger className='ml-auto md:hidden'>
                    <CgMenuLeft className='text-primary-500 text-3xl' />
                </SheetTrigger>
                <SheetContent className='w-[250px] bg-black/90 shadow-md shadow-foreground-500 px-12 py-28'>
                    <nav>
                        <ul className='flex flex-col justify-between gap-6 text-foreground-500'>
                            {
                                <NavMap />
                            }
                        </ul>
                    </nav>
                </SheetContent>
            </Sheet>
        </header>
    )
}

export default Header




