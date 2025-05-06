import {Layout ,Code ,Smartphone ,Megaphone ,PenTool, ShoppingCart,Briefcase,User,Clock ,TrendingUp ,Search, Brush, CheckCircle } from 'lucide-react'


export const whyChooseUs = [
  {
    id: 1,
    title:'Affordable Price',
    icon:<Briefcase  className="size-10" />,
    desc:'Competitive pricing for top-tier digital solutions in Ecommerce, UI/UX, and more.',
  },

  {
    id: 2,
    title:'Professional Team',
    icon:<User   className="size-10" />,
    desc:'Expert team delivering innovative solutions across All domains, ensuring quality and satisfaction.',
  },
  {
    id: 3,
    title:'10+ Years Experience',
    icon:<Clock    className="size-10"/>,
    desc:'Since 2005, we’ve driven digital success for clients globally with proven strategies.',
  },
  {
    id: 4,
    title:'Results-Driven Growth',
    icon:<TrendingUp   className="size-10" />,
    desc:'Trackable results with 30% average revenue growth for clients across industries.',
  },
]

export const homeServices =[
    {
      id:1,
      title:"UI/UX Design",
      icon:<Layout className= "text-2xl font-bold "/>,
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
      desc:"Delivering captivating, SEO-optimized content for websites, blogs, and ads to engage audiences and strengthen your brands voice"
    },
    {
      id:6,
      title:"Ecommerce",
      icon:<ShoppingCart className=" text-2xl font-bold"/>,
      desc:"Launching scalable online stores with seamless development, payment integration, and optimized UX to thrive in the digital marketplace"
    }
  ]




export const services = [
  {
    icon: <Layout size={30}  />,
    title: 'UI/UX Design',
    description:
      'We craft intuitive, visually stunning interfaces that prioritize user satisfaction. Our research-driven UI/UX design process ensures seamless navigation, engaging interactions, and tailored experiences, boosting retention and conversions for your digital products.',
    features: ['Wireframing', 'Prototyping', 'User Testing', 'Accessibility Compliance'],
    media: '/serviceImage/ui.png',
  },
  {
    icon: <Code size={30}  />,
    title: 'Web Development',
    description:
      'We build fast, secure, and responsive websites and web applications using cutting-edge technologies. Our custom solutions empower your brand, streamline operations, and drive measurable business growth in a competitive digital landscape.',
    features: ['Responsive Design', 'CMS Integration', 'API Development', 'Performance Optimization'],
    media: '/serviceImage/web.png',
  },
  {
    icon: <Smartphone size={30}  />,
    title: 'App Development',
    description:
      'We create high-performance iOS and Android apps with exceptional functionality and user-focused design. From startups to enterprises, our innovative mobile solutions transform your vision into reality, ensuring scalability and engagement.',
    features: ['Native/Hybrid Apps', 'UI/UX Integration', 'App Store Deployment'],
    media: '/serviceImage/appteam.jpg',
  },
  {
    icon: <Megaphone size={30} color="#bafd02" />,
    title: 'Digital Marketing',
    description:
      'Our data-driven digital marketing strategies amplify your brands; reach. Through SEO, social media, and PPC campaigns, we grow your audience, increase conversions, and maximize ROI with measurable, tailored solutions.',
    features: ['SEO Audits', 'Social Media Management', 'PPC Campaigns', 'Analytics'],
    media: '/serviceImage/market2.png',
  },
  {
    icon: <PenTool size={40}  />,
    title: 'Content Writing',
    description:
      'We deliver compelling, SEO-optimized content for websites, blogs, and ads. Our storytelling strengthens your brands voice, engages audiences, and drives traffic, ensuring your message resonates and converts.',
    features: ['Blog Posts', 'Ad Copy', 'Whitepapers', 'SEO Optimization'],
    media: '/serviceImage/content2.jpg',
  },
  {
    icon: <ShoppingCart size={30}  />,
    title: 'E-commerce',
    description:
      'We launch scalable online stores with seamless development, secure payment integration, and optimized UX. Our e-commerce solutions empower your business to thrive in the competitive digital marketplace.',
    features: ['Shopify/WooCommerce', 'Payment Gateways', 'Inventory Management'],
    media: '/serviceImage/eccomerce.jpg',
  },
];

export const strategySteps = [
  {
    icon: <Search size={32}  />,
    title: 'Market Research',
    description: 'We analyze your industry, audience, and competitors to create effective strategies.',
  },
  {
    icon: <Brush size={32}  />,
    title: 'Design & Development',
    description: 'Our team designs and develops tailored solutions using cutting-edge technology.',
  },
  {
    icon: <CheckCircle size={32}  />,
    title: 'Quality Assurance',
    description: 'We rigorously test and refine to deliver flawless, high-quality results every time.',
  },
];

export const aboutSolutions = [
  {
    title: "Design and UX",
    description: [
      "UI/UX Design",
      "User-Centric Experiences",
      "Tools: Figma, Adobe XD, Sketch",
    ],
  },
  {
    title: "Development",
    description: [
      "Web Development",
      "App Development",
      "Ecommerce Solutions",
      "Technologies: React, Flutter, Shopify, WordPress",
    ],
  },
  {
    title: "Digital Marketing",
    description: [
      "Digital Marketing",
      "Engagement & Growth",
      "Tools: Google Analytics, SEMrush, HubSpot",
    ],
  },
  {
    title: "Content Writing",
    description: [
      "Content Writing",
      "SEO-Optimized Content",
      "Tools: Grammarly, Yoast SEO, Google Docs",
    ],
  },
];


   