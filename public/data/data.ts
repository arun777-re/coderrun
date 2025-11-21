import { Projects } from "@/app/types/data";


export const ProjectsData:Projects[] = [
   {
  slug: "1",
  title: "E-commerce Platform",
  description:
    "A production-ready, scalable E-commerce platform built with clean architecture, secure authentication, real-time cart handling (User & Guest), optimized backend caching, and seamless payment integration. Includes a complete admin panel for managing products, inventory, orders, blogs, and more.",
  image: "/images/product-page.png",
  video: "/images/shorte-comm.mp4",
  techStack: [
    "Next.js",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Razorpay/Stripe",
    "Redux Toolkit",
    "Redis",
    "BullMQ",
    "TailwindCSS",
    "Framer Motion",
    "Render",
    "Upstash",
    "Vercel",
    "Mailgun"
  ],
  features: [
    "JWT-based Secure User Authentication",
    "User Cart, Guest Cart and Wishlist System",
    "Admin Panel for Product, Orders and Inventory Management",
    "Product-specific Discounts + Coupon System",
    "Real-time Order Tracking with Status Flow",
    "SEO-optimized Pages for Better Search Rankings",
    "High-performance API Layer with Redis Caching",
    "Concurrency-safe Cart and Order Logic",
    "Payment Gateway Integration (Razorpay/Stripe)",
    "Blog System + Product Reviews",
    "Responsive Frontend for All Devices",
    "Scalable Architecture for Traffic Spikes"
  ],
  liveLink: "https://coderrun.info",
  githubLink: "https://github.com/arun777-re"
},

   {
    slug:'2',
    title: "Chat Application",
    description:"A full-featured MERN e-commerce system with user authentication, product management, shopping cart, and payment integration using Stripe.",
    image:"/images/project-1.jpg",
    video:"/images/project-1-video.mp4",
   },
   {
    slug:'3',
    title: "Asbestos Removal Website",
    description:"A full-featured MERN e-commerce system with user authentication, product management, shopping cart, and payment integration using Stripe.",
    image:"/images/asbestos.png",
    video:"/images/project-1-video.mp4",
   },
   {
    slug:'4',
    title: "Rent Website",
    description:"A full-featured MERN e-commerce system with user authentication, product management, shopping cart, and payment integration using Stripe.",
    image:"/images/rently.png",
    video:"/images/project-1-video.mp4",
   },
   {
    slug:'5',
    title: "Travel Booking Platform",
    description:"A full-featured MERN e-commerce system with user authentication, product management, shopping cart, and payment integration using Stripe.",
    image:"/images/rently.png",
    video:"/images/project-1-video.mp4",
   },
   {
    slug:'6',
    title: "NPM Auth Library",
    description:"A full-featured MERN e-commerce system with user authentication, product management, shopping cart, and payment integration using Stripe.",
    image:"/images/rently.png",
    video:"/images/project-1-video.mp4",
   },
];


export const testimonials = [
  {
    name: "Shekhar Kaushik.",
    role: "Founder, DryBasket",
    review: "CoderRun transformed our eCommerce business with blazing-fast tech and a beautiful UI.",
  },
  {
    name: "Amit R.",
    role: "CTO, FinCore",
    review: "Highly professional and communicative team — delivered exactly what we envisioned.",
  },
  {
    name: "Yash Manocha",
    role: "Founder & CEO, Karvaan Travels",
    review: "Their scalable architecture design saved us months of rework. Totally recommended!",
  },
];