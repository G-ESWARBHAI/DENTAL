import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/navbar'
import Footer from './components/footer'
import ScrollToTop from './components/ScrollToTop'
import Homepage from './pages/Homepage'
import Top from './pages/firstpage/Top'
import Services from './pages/services'
import OralTop from './pages/Oral/OralTop'
import DentalCrownsAndVeneers from './pages/page_2/hero'
import RootTop from './pages/RootCanal/RootTop'
import ToothTop from './pages/Tooth/ToothTop'
import Hero from './pages/services_last/hero'
// import FlapSurgery from './pages/FLAPSURGERY/FlapSurgery'
// import LaserGum from './pages/laser gum/LaserGum'
import Tooth_Extra from './pages/TOOTH_Extraction/Tooth_Extra'
import Dental_Implents from './pages/Dental_Implants/Dental_Implents'

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen overflow-x-hidden w-full max-w-full">
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/services" element={<Top />} />
          <Route path="/services/teeth-whitening" element={<Hero />} />
          <Route path="/services/orthodontics" element={<Services />} />
          <Route path="/services/oral-prophylaxis" element={<OralTop />} />
          <Route path="/services/dental-crowns-and-veneers" element={<DentalCrownsAndVeneers />} />
          <Route path="/services/root-canal" element={<RootTop />} />
          <Route path="/services/tooth-surgery" element={<ToothTop />} />
          {/* <Route path="/services/flap-surgery" element={<FlapSurgery />} /> */}
          {/* <Route path="/services/laser-gum" element={<LaserGum />} /> */}
          <Route path="/services/tooth-extraction" element={<Tooth_Extra />} />
           <Route path="/services/dental-implants" element={<Dental_Implents />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App