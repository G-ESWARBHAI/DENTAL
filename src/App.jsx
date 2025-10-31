import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/navbar'
import Footer from './components/footer'
import ScrollToTop from './components/ScrollToTop'
import Homepage from './pages/Homepage'
import Top from './pages/firstpage/Top'
import Services_last from './pages/Services_last'
import Services from './pages/services'
import OralTop from './pages/Oral/OralTop'
import DentalCrownsAndVeneers from './pages/page_2/hero'
import RootTop from './pages/RootCanal/RootTop'
import ToothTop from './pages/Tooth/ToothTop'

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen overflow-x-hidden w-full max-w-full">
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/services" element={<Top />} />
          <Route path="/services/teeth-whitening" element={<Services_last />} />
          <Route path="/services/orthodontics" element={<Services />} />
          <Route path="/services/oral-prophylaxis" element={<OralTop />} />
          <Route path="/services/dental-crowns-and-veneers" element={<DentalCrownsAndVeneers />} />
          <Route path="/services/root-canal" element={<RootTop />} />
          <Route path="/services/tooth-surgery" element={<ToothTop />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App