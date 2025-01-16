import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Banner from '../components/home/Banner'
import About from '../components/home/About'
import Solutions from '../components/home/Solutions'
import Journey from '../components/home/Journey'
// import Collection from '../components/home/Collection'
// import Team from '../components/home/Team'
import Testimonials from '../components/home/Testimonials'
// import Faq from '../components/home/Faq'
import ScenarioComponent from '../components/home/ScenarioComponent'
import FeatureList from '../components/home/FeatureList'

const Home = () => {
  return (
    <>
   <Navbar/>
   <Banner/>
   <About/>
   <ScenarioComponent/>
   <FeatureList/>
   <Solutions/>
   <Journey/>
   {/* <Collection/> */}
   {/* <Team/> */}
   <Testimonials/>
   {/* <Faq/> */}
   <Footer/>
   </>
  )
}

export default Home