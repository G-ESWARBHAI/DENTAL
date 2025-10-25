import React from 'react'
import Navbar from './components/navbar'
import Footer from './components/footer'
import Homepage from './pages/Homepage'


const App = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Homepage />
      <Footer />
    </div>
  )
}

export default App