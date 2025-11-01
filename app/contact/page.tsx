import React from 'react'
import Navbar from '../components/Navbar'
import Banner from '../components/Banner'
import Footer from '../components/Footer'
import ContactFormSection from '../components/ContactFormSection'
import MapSection from '../components/MapSection'

const ContactPage = () => {
  return (
    <>
    <Navbar/>
    <Banner title='Contact Us' subtitle='Let us Build Something Together'/>
    <ContactFormSection/>
    <MapSection/>
    <Footer/>
    </>
  )
}

export default ContactPage