import { Projects } from "@/app/types/data";


export const ProjectsData:Projects[] = [
   {
    slug:'1',
    title: "E-commerce Platform",
    description:"A full-featured MERN e-commerce system with user authentication, product management, shopping cart, and payment integration using Stripe.",
    image:"/images/product-page.png",
    video:"/images/shorte-comm.mp4",
    techStack: ["Next.js", "Node.js", "Express", "MongoDB", "Stripe/Razorpay", "ReduxToolkit","Redis","BullMQ","TailwindCSS","Framer Motion","Render","Upstash","Vercel","Mailgun"],
    features: [
      "User Authentication with JWT",
      "Product Management Dashboard",
        "Shopping Cart(User & Guest Cart) and Wishlist Functionality",
        "Secure Payment Integration with Razorpay/Stripe",
        "Order Tracking and History",
        "Responsive Design for Mobile and Desktop",
        "Low Latency and High Performance with Optimized Backend by Caching",
        "Admin Panel for Managing Products, Orders and Inventory management",
        "SEO Optimization for Better Search Rankings",
        "Scalable Architecture to Handle Traffic Spikes",
        "Concurrency and Race Condition Handling",
        "Two types of discounts: Coupon System and Product-specific Discounts",
        "Blogs and Reviews System",
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