'use client';
import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const AOSInIt = () => {

    React.useEffect(()=>{
        AOS.init({
            duration: 1000,
            once: true,
        })
    },[])
  return null;
}

export default AOSInIt