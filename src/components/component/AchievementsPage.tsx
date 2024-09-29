'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const PDF_URL = 'https://servi-fi-bucket.s3.eu-north-1.amazonaws.com/ppt+rcpdc-2.pdf'

export default function AchievementsPage() {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  const handleIframeLoad = () => {
    setLoading(false)
  }

  const handleIframeError = () => {
    setError('Failed to load the PDF. Please try again or download it directly.')
    setLoading(false)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-100 via-orange-100 to-red-100 py-12 px-4 sm:px-6 lg:px-8 main-bg">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto bg-white rounded-lg shadow-xl overflow-hidden"
      >
        <div className="p-8">
          <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">Our Achievements</h1>
          <p className="text-center text-gray-600 mb-8">
            Explore the proud accomplishments and milestones of the Rotary Club of Palanpur in this comprehensive document.
          </p>
        </div>

        <div className="bg-gray-100 p-8">
          {loading && (
            <div className="flex justify-center items-center h-96">
              <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-orange-500"></div>
            </div>
          )}

          {error && (
            <div className="text-center text-red-500 mb-4">
              <p>{error}</p>
            </div>
          )}

          <div className={`w-full ${loading ? 'hidden' : 'block'}`}>
            <iframe
              src={`${PDF_URL}#view=FitH`}
              className="w-full h-[600px] border-none rounded-lg shadow-lg"
              onLoad={handleIframeLoad}
              onError={handleIframeError}
            />
          </div>
        </div>

        <div className="p-8 text-center">
          <motion.a
            href={PDF_URL}
            download="Rotary_Club_Palanpur_Achievements.pdf"
            className="inline-block bg-green-500 text-white font-bold py-3 px-6 rounded-lg transition duration-300 ease-in-out hover:bg-green-600"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Download Achievements PDF
          </motion.a>
        </div>
      </motion.div>
    </div>
  )
}