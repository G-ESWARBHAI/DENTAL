import React from 'react'
import Restorations from './firstpage/Restorations'
import WhyChoose from './firstpage/WhyChoose'
import Frequently from './firstpage/Frequently'
import Benefits from './firstpage/Benifits'
import OurClient from './firstpage/OurClient'

const FirstPage = () => {
  return (
    <div className="pt-16 overflow-x-hidden w-full max-w-full">
        <Restorations />
        <WhyChoose />
        <Frequently />
        <Benefits />
        <OurClient />
    </div>
  )
}

export default FirstPage
