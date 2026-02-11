"use client"

import Header from "../components/header"
import Welcome from "../components/welcome"
import About from "../components/About"
import Services from "../components/Services"
import Skills from "../components/Skills"
import Sampleproject from "../components/Sampleprj"
import ContactUs from "../components/contactUs"
import Footer from "../components/footer"
import WhatsAppButton from "../components/WhatsAppButton"


const Landing = () => {
  return (
    <div>
      <WhatsAppButton phoneNumber="+250789414780" />
      <Header />
      <Welcome />
      <About />
      <Skills />
      <Services />
      <Sampleproject />
      <ContactUs />
      {/* Add other components as needed */}
      {/* <Projects /> */}
      <Footer />
    </div>
  )
}

export default Landing
