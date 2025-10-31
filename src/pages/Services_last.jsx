import React from 'react'
import Hero from '../components/services_last/hero'
import ContentSection from '../components/services_last/content'
import ImageContentSection from '../components/services_last/image_content'

const Services_last = () => {
  return (
    <div className="pt-0 overflow-x-hidden w-full max-w-full">
      <Hero />
      <ContentSection />
      <ImageContentSection />
    </div>
  )
}

export default Services_last