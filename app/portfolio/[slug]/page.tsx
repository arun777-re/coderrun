'use client'
import Navbar from '@/app/components/Navbar';
import CaseStudy from '@/app/components/CaseStudy';
import Footer from '@/app/components/Footer';
import Banner from '@/app/components/Banner';

const page = () => {
  return (
    <div>
      <Navbar/>
      <Banner/>
      <CaseStudy title='loda' description=''/>
      <Footer/>
    </div>
  )
}

export default page