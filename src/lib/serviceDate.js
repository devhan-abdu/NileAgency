import {Layout ,Code ,Smartphone ,Megaphone ,PenTool, ShoppingCart } from 'lucide-react'

export const services =[
    {
      id:1,
      title:"UI/UX Design",
      icon:<Layout className= "text-2xl font-bold text-primary-500"/>,
      desc:"Crafting user-friendly, stunning interfaces for seamless navigation and delightful experiences, tailored to your audience to boost satisfaction and retention"
    },
    {
      id:2,
      title:"Web Development",
      icon:<Code className=" text-2xl font-bold"/>,
      desc:"Building fast, secure, responsive websites and web apps with cutting-edge tech to elevate your brand and achieve business goals"
    },
    {
      id:3,
      title:"App Development",
      icon:<Smartphone className=" text-2xl font-bold"/>,
      desc:"Creating high-performance iOS and Android apps with exceptional functionality, turning your vision into innovative, user-focused mobile solutions"
    },
    {
      id:4,
      title:"Digital Marketing",
      icon:<Megaphone className=" text-2xl font-bold"/>,
      desc:"Driving brand visibility with data-driven SEO, social media, and PPC strategies to grow audiences, boost conversions, and maximize ROI"
    },
    {
      id:5,
      title:"Content Writing",
      icon:<PenTool className=" text-2xl font-bold"/>,
      desc:"Delivering captivating, SEO-optimized content for websites, blogs, and ads to engage audiences and strengthen your brand’s voice"
    },
    {
      id:6,
      title:"Ecommerce",
      icon:<ShoppingCart className=" text-2xl font-bold"/>,
      desc:"Launching scalable online stores with seamless development, payment integration, and optimized UX to thrive in the digital marketplace"
    }
  ]