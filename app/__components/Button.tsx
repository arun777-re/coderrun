import React from "react";
import {motion} from 'framer-motion';

type ButtonProps = {
    text:string;
    onClick:()=>void;
}

const Button:React.FC<ButtonProps> = ({text,onClick}) => {
  return (
 <motion.button
 whileHover={{scaleX:1.05}}
whileTap={{scaleX:0.95}}
transition={{type:"spring",stiffness:300}}
 className='bg-blue-600 px-6 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-color duration-300 cursor-pointer'
  onClick={onClick}>{text}</motion.button>
  )
}

export default Button