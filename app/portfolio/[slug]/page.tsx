'use client'
import Navbar from '@/app/components/Navbar';
import CaseStudy from '@/app/components/CaseStudy';
import Footer from '@/app/components/Footer';
import Banner from '@/app/components/Banner';
import { useParams } from 'next/navigation';
import { ProjectsData } from '@/public/data/data';

const page = () => {
  const {slug} = useParams();

  const projectData = ProjectsData.find((p)=> p.slug === slug);

  console.log("Project Data:", projectData);
  return (
    <div>
      <Navbar/>
      <Banner title={(projectData && projectData.title) ?? "Project"} subtitle='Case Study'/>
      <CaseStudy {...projectData}/>
      <Footer/>
    </div>
  )
}

export default page