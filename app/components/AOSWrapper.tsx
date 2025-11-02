'use client';
import dynamic from "next/dynamic";
const AOSInIt = dynamic(()=>import("@/app/components/AOS"),{ssr:false});

const AOSWrapper = () => {
  return <AOSInIt/>
}

export default AOSWrapper