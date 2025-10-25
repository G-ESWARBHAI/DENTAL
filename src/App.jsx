import React from 'react'
import Navbar from './components/navbar'
import Hero from './components/hero'
import Services from './components/services'
import BookConsultation from './components/bookConsultation'
import BookAppointment from './components/bookAppointment'
import Footer from './components/footer'
import AboutSasha from './components/about'
import Explore from './components/Explore'

const App = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <AboutSasha />
      <Services />
      <BookConsultation />
      <Explore />
      <BookAppointment />
      <Footer />
    </div>
  )
}

export default App