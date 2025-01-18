import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Pagetitle from '../components/contact/Pagetitle'
import Getintouch from '../components/contact/Getintouch'
import Faq from '../components/contact/Faq'

const Contact = () => {
  return (
   <>
    <Navbar/>
    <Pagetitle/>
    <Getintouch/>
    <Faq/>
    <Footer/>
   </>
  )
}

export default Contact