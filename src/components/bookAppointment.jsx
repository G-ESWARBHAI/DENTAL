import React, { useState } from 'react'
import { Calendar, CalendarDays } from 'lucide-react'
import { motion, useReducedMotion } from 'framer-motion'

const BookAppointment = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    preferredDate: '',
    message: ''
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    // Handle form submission here
  }

  const prefersReducedMotion = useReducedMotion();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.05 } }
  };

  const blockVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: 'easeOut' } }
  };

  return (
    <motion.section 
      className="py-12 sm:py-16 lg:py-20"
      style={{
        background: 'linear-gradient(135deg, #A1D6FA 0%, #C9E8FB 52%, #EFF8FB 100%)'
      }}
      initial={prefersReducedMotion ? false : 'hidden'}
      whileInView={prefersReducedMotion ? undefined : 'visible'}
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div className="text-center mb-8 sm:mb-12" variants={blockVariants}>
          <motion.h2 className="text-3xl sm:text-4xl lg:text-[48px] font-medium text-[#0067AC] mb-3 sm:mb-4 font-sans leading-tight" variants={blockVariants}>
            Book Appointment
          </motion.h2>
          <motion.p className="text-base sm:text-lg text-[#737B8C] font-sans max-w-2xl mx-auto px-4" variants={blockVariants}>
            Simple. Quick. Hassle-free. Fill in your details and schedule your appointment at Sasha Smiles today.
          </motion.p>
        </motion.div>

        {/* Form Card */}
        <motion.div className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 shadow-lg" variants={blockVariants}>
          <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
            {/* Input Fields Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              {/* Full Name */}
              <div>
                <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-2 font-sans">
                  Full Name
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  placeholder="John Doe"
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-200 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-[#0067AC] focus:border-transparent outline-none font-sans bg-white text-sm sm:text-base"
                  required
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2 font-sans">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="john@example.com"
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-200 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-[#0067AC] focus:border-transparent outline-none font-sans bg-white text-sm sm:text-base"
                  required
                />
              </div>

              {/* Phone Number */}
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2 font-sans">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="+1 (555) 000-0000"
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-200 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-[#0067AC] focus:border-transparent outline-none font-sans bg-white text-sm sm:text-base"
                  required
                />
              </div>

              {/* Preferred Date */}
              <div>
                <label htmlFor="preferredDate" className="block text-sm font-medium text-gray-700 mb-2 font-sans">
                  Preferred Date
                </label>
                <div className="relative">
                  <input
                    type="date"
                    id="preferredDate"
                    name="preferredDate"
                    value={formData.preferredDate}
                    onChange={handleInputChange}
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-[#0067AC] focus:border-transparent outline-none font-sans pr-10 sm:pr-12 text-sm sm:text-base"
                    required
                  />
                  <Calendar className="absolute right-3 sm:right-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 sm:w-5 sm:h-5" />
                </div>
              </div>
            </div>

            {/* Message Textarea */}
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2 font-sans">
                Message (Optional)
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Tell us about your dental needs..."
                rows={3}
                className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-200 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-[#0067AC] focus:border-transparent outline-none resize-none font-sans bg-white text-sm sm:text-base"
              />
            </div>

            {/* Submit Button */}
            <div className="pt-2 sm:pt-4">
              <motion.button
                type="submit"
                className="w-full bg-[#FF642F] hover:bg-[#e55a2b] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold flex items-center justify-center space-x-2 transition-colors font-sans text-sm sm:text-base"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <CalendarDays className="w-4 h-4 sm:w-5 sm:h-5" />
                <span>Book Appointment</span>
              </motion.button>
            </div>
          </form>
        </motion.div>
      </div>
    </motion.section>
  )
}

export default BookAppointment
