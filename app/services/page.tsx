import React from 'react'
import Banner from '../components/Banner'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import WhatWeOffer from '../components/WhatWeOffer'
import TechStack from '../components/TechStack'
import Contact from '../components/Contact'

const ServicePage = () => {
  return (
    <>
    <Navbar/>
    <Banner title='Our Services' subtitle='We build high-performance web solutions using the latest technologies'/>
    <WhatWeOffer/>
    <TechStack/>
    <Contact/>
    <Footer/>
    </>
  )
}

export default ServicePage