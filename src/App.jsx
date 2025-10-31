import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/navbar'
import Footer from './components/footer'
import ScrollToTop from './components/ScrollToTop'
import Homepage from './pages/Homepage'
import Services from './pages/services'

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen overflow-x-hidden w-full max-w-full">
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/services" element={<Services />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App