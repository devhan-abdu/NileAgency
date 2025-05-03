import Footer from "@/components/footer/Footer";
import "./globals.css";
import Header from "@/components/Header";
import { Montserrat } from 'next/font/google';

import { Poppins } from "next/font/google";
import { Toaster } from "sonner";


const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-montserrat',
  display: 'swap',
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
});




export const metadata = {
  title: "NileAgency",
  description: "Created by devhan",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body

       className={`antialiased bg-background-500 px-6 max-w-[1160px] mx-auto ${montserrat.variable} ${poppins.variable}`}

      >
        <Header/>
        {children}
        <Toaster position="top-right"  />
        <Footer/>

      </body>
    </html>
  );
}
