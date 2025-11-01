import Navbar from '../components/Navbar'
import Banner from '../components/Banner'
import Footer from '../components/Footer'
import AboutIntro from '../components/AboutIntro'
import MissionVision from '../components/MissionVision'
import WhyChooseUs from '../components/WhyChooseUs'
import TechStack from '../components/TechStack'
import Contact from '../components/Contact'

const AboutPage = () => {
  return (
    <>
    <Navbar/>
    <Banner title='About CoderRun' subtitle='Building Scalable Digital Experiences'/>
    <AboutIntro/>
    <MissionVision/>
    <WhyChooseUs/>
    <TechStack/>
    <Contact/>
    <Footer/>
    </>
  )
}

export default AboutPage