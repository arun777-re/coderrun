import React from "react";
import {motion} from 'framer-motion';

type ButtonProps = {
    text:string;
    onClick:()=>void;
}

const Button:React.FC<ButtonProps> = ({text,onClick}) => {
  return (
 <motion.button
 whileHover={{scale:1.05}}
whileTap={{scale:0.95}}
transition={{ type: "spring", stiffness: 200, damping: 15 }} 
 className='bg-accent px-6 py-3 rounded-lg text-lg font-semibold text-primary  transition-shadow shadow-md hover:shadow-xl
  duration-300 cursor-pointer'
  onClick={onClick}>{text}</motion.button>
  )
}

export default Button