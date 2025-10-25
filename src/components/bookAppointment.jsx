import React, { useState } from 'react'
import { Calendar, CalendarDays } from 'lucide-react'

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

  return (
    <section 
      className="py-20"
      style={{
        background: 'linear-gradient(135deg, #A1D6FA 0%, #C9E8FB 52%, #EFF8FB 100%)'
      }}
    >
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-[48px] font-medium text-[#0067AC] mb-4 font-sans leading-[48px] tracking-[0%]">
            Book Appointment
          </h2>
          <p className="text-lg text-[#737B8C] font-sans max-w-2xl mx-auto">
            Simple. Quick. Hassle-free. Fill in your details and schedule your appointment at Sasha Smiles today.
          </p>
        </div>

        {/* Form Card */}
        <div className="bg-white rounded-3xl p-4 md:p-6 shadow-lg">
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Input Fields Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#0067AC] focus:border-transparent outline-none font-sans bg-white"
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
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#0067AC] focus:border-transparent outline-none font-sans bg-white"
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
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#0067AC] focus:border-transparent outline-none font-sans bg-white"
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#0067AC] focus:border-transparent outline-none font-sans pr-12"
                    required
                  />
                  <Calendar className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
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
                rows={4}
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#0067AC] focus:border-transparent outline-none resize-none font-sans bg-white"
              />
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <button
                type="submit"
                className="w-full bg-[#FF642F] hover:bg-[#e55a2b] text-white px-8 py-4 rounded-full font-semibold flex items-center justify-center space-x-2 transition-colors font-sans"
              >
                <CalendarDays className="w-5 h-5" />
                <span>Book Appointment</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default BookAppointment
