'use client'

import { motion } from 'framer-motion'

export default function About() {
  return (
      <div className="container mx-auto px-4 py-8 main-bg">    
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
About Rotary Club of Palanpur Diamond City Zanzar – Garba Event
Welcome to Rotary Club of Palanpur Diamond City Zanzar Garba Event! Join us for a night of vibrant dance, culture, and community spirit. The Rotary Club of Palanpur is proud to present Zanzar, a spectacular Garba celebration where tradition meets togetherness.          </p>
          <p className="text-lg text-orange-700">
Our mission is simple: to serve, unite, and uplift our community through cultural events that inspire joy and foster connection. As part of Rotary International, we embody the spirit of Service Above Self and strive to make a difference in the lives of those around us. Since 1977, we’ve spearheaded impactful projects, from healthcare initiatives like our Rotary Eye Hospital to hosting community drives like blood donation camps.</p>
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