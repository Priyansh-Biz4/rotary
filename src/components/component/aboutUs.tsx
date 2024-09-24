'use client'

import { motion } from 'framer-motion'

export default function About() {
  return (
      <div className="container mx-auto px-4 py-8">
        <motion.h1 
          className="text-3xl font-bold text-orange-800 mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          About Us
        </motion.h1>
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <p className="text-lg text-orange-700">
            Garba Celebrations is dedicated to preserving and promoting the rich cultural heritage of Gujarat through the art of Garba dance. Our organization brings together passionate dancers, musicians, and cultural enthusiasts to create unforgettable Garba experiences.
          </p>
          <p className="text-lg text-orange-700">
            Founded in 2010, we have been organizing Garba events, workshops, and performances for over a decade. Our mission is to share the joy of Garba with people from all walks of life, fostering a sense of community and cultural appreciation.
          </p>
          <h2 className="text-2xl font-semibold text-orange-800 mt-8 mb-4">Our Values</h2>
          <ul className="list-disc list-inside space-y-2 text-orange-700">
            <li>Preservation of Gujarati culture and traditions</li>
            <li>Inclusivity and community building</li>
            <li>Excellence in Garba performance and education</li>
            <li>Promotion of cultural diversity and understanding</li>
          </ul>
        </motion.div>
      </div>
  )
}