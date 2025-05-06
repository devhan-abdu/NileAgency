'use client';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
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
  const [year, setYear] = useState(null);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'About Us', href: '/about' },
    { name: 'Contact Us', href: '/contact' },
  ];

  const socialLinks = [
    { icon: <Linkedin />, href: 'https://linkedin.com' },
    { icon: <Instagram />, href: 'https://instagram.com' },
    { icon: <Twitter />, href: 'https://twitter.com' },
    { icon: <Facebook />, href: 'https://facebook.com' },
    { icon: <Youtube />, href: 'https://youtube.com' },
  ];

  const NavMap = () => {
    return navLinks.map((navLink) => {
      const isActive = navLink.href === pathName;
      return (
        <li
          key={navLink.href}
          className={cn(
            'hover:text-primary-500 duration-300 text-[14px]',
            isActive && 'text-primary-500'
          )}
        >
          <Link href={navLink.href}>{navLink.name}</Link>
        </li>
      );
    });
  };

  return (
    <footer className="text-gray-300 font-poppins pt-20 pb-6 px-8 md:px-12   mt-16 bg-[#202020] ">
      <div className="flex flex-col items-center justify-center max-w-[1200px] mx-auto">
      <div className="flex flex-col md:flex-row gap-12 place-content-center">
        <div className="w-full md:w-[25%]  flex flex-col justify-between gap-6">
          <div>
            <h1 className="text-3xl font-bold font-montserrat uppercase text-foreground-500">NileAgency</h1>
            <p className="text-[14px]">Design. Strategy. Results.</p>
          </div>

          <div>
            <div className="flex gap-3 items-center">
              {socialLinks.map((item, index) => (
                <Link
                  key={index}
                  target="_blank"
                  href={item.href}
                  className="w-8 h-8 rounded-full flex items-center justify-center bg-white text-black hover:scale-105 transition duration-300"
                >
                  {item.icon}
                </Link>
              ))}
            </div>
            <h3 className="text-lg font-bold mt-2">Follow Us</h3>
          </div>
        </div>

        <div className="w-full md:w-[40%]  flex flex-col justify-between gap-6">
          <ul className="flex flex-wrap gap-4">{<NavMap />}</ul>
          <div>
            <h3 className="text-xl font-bold">About Us</h3>
            <p className="text-[14px]">
              We help brands grow through impactful digital strategies and stunning design.
              Based by the Nile, driven by creativity and results.
            </p>
          </div>
        </div>

        <div className="w-full md:w-[35%] flex flex-col justify-between gap-6 border-t md:border-t-0 md:border-l pl-0 md:pl-8 pt-6 md:pt-0 border-gray-600">
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-bold mb-1">Call:</h3>
              <p className="ml-4 text-[14px] text-foreground-500/90">+25195234125</p>
              <p className="ml-4 text-[14px] text-foreground-500/90">+251743567212</p>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-1">Email:</h3>
              <p className="ml-4 text-[14px] text-foreground-500/90">nileagency12@gmail.com</p>
              <p className="ml-4 text-[14px] text-foreground-500/90">nileagencyhan@gmail.com</p>
            </div>
          </div>
          <div className="inline-flex   mr-auto border border-foreground-500 focus-within:border-primary-500 text-white rounded-full transition">
            <input
              type="text"
              className="outline-none px-2 py-2 bg-transparent text-white"
              placeholder="Enter email"
            />
            <button className="text-black bg-primary-500 rounded-r-full px-3 font-bold cursor-pointer">
              Subscribe
            </button>
          </div>
        </div>
      </div>
     
      <div className="text-center mt-10  text-foreground-500">
        Copyright &copy; {year && <span>{year}</span>}<span className="font-bold"> NileAgency</span>
      </div>
      </div>
    </footer>
  );
};

export default Footer;
