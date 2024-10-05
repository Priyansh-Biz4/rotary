/* eslint-disable react/jsx-no-undef */
'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion'
import IntroTimeoutModel from './intro-model';

const images = [
  { src: '/image1.jpg', title: 'Serene Landscape', description: 'A tranquil scene of rolling hills and a peaceful lake.' },
  { src: '/image2.jpg', title: 'Vibrant Celebration', description: 'Colorful Garba dancers in traditional attire.' },
  { src: '/image3.jpg', title: 'Community Service', description: 'Rotary members engaged in a local clean-up project.' },
  { src: '/image4.jpg', title: 'Cultural Heritage', description: 'Ancient temple architecture showcasing our rich history.' },
]

export default function GalleryPage() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [userName, setUserName] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [showScanLink, setShowScanLink] = useState(false)

  useEffect(() => {
    // Disable scrolling when modal is open
    if (isModalOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
  }, [isModalOpen])

  const handleFormSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault()
    if (userName && phoneNumber) {
      setShowScanLink(true)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-300 via-pink-300 to-yellow-200 relative overflow-hidden py-12 px-4 sm:px-6 lg:px-8 main-bg">
      {/* Floating Garba motifs */}
      <div className="absolute inset-0 z-0">
        <div className="w-32 h-32 bg-pink-400 rounded-full opacity-20 blur-lg animate-spin-slow absolute top-10 left-20"></div>
        <div className="w-24 h-24 bg-yellow-400 rounded-full opacity-30 blur-lg animate-pulse absolute bottom-20 right-20"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center space-y-4 mb-12"
        >
           <motion.h1 
          className="text-3xl font-bold text-orange-800 mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
                     Rotary Club of Palanpur Diamond City Gallery

        </motion.h1>
          <p className="max-w-3xl mx-auto text-lg text-gray-100 border-b-2 border-pink-300 pb-2">
            Explore our collection of images that capture the spirit of our community and the impact of our projects.
          </p>
          {/* Blinking Button to open modal */}
   <div className="mt-6 text-center" style={{      marginTop:"30px",
}}>
  <motion.a
    href="https://kwikpic-in.app.link/e/dNPrb2XHqNb?uCode=DDLTTG"
    className="px-4 py-2 bg-blue-500 text-white font-bold rounded-lg shadow-md hover:bg-blue-600 transition duration-200 blink-text"
    animate={{ opacity: [1, 0.5, 1], transition: { repeat: Infinity, duration: 1 } }} // Blinking effect for link
       style={{
      padding: '16px',
      backgroundColor: '#2d3748', // dark gray
      borderRadius: '8px',
      boxShadow: '0 4px 10px rgba(0, 0, 0, 0.3)',
      animation: 'highlight 2s infinite',
      transition: 'transform 0.5s ease-in-out',
    }}
    onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
    onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
  >
    Click here to scan your photos
  </motion.a>

  {/* Photographer's Logo and Name */}
  {/* <div
    className="mt-4 flex justify-center items-center space-x-2"
  >
    <Image
      src="/SAVE_20241003_211008.jpg"
      alt="Photographer Logo"
      width={200}
      height={200}
      className="rounded-full object-cover"
    />
    <p
      style={{
        color: '#f7fafc', // light gray
        fontWeight: '600',
        fontSize: '14px',
      }}
    >
      Photography Managed By{' '}
      <span style={{ color: '#d53f8c' }}>[Photographer Name]</span>
    </p>
  </div> */}

  {/* Inline keyframe animation */}
  <style jsx>{`
    @keyframes highlight {
      0% {
        box-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
      }
      50% {
        box-shadow: 0 0 20px rgba(255, 255, 255, 1);
      }
      100% {
        box-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
      }
    }
  `}</style>
</div>



        </motion.div>

        {/* Grid of Images */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              // onClick={() => setSelectedImage(image)}
              className="cursor-pointer overflow-hidden rounded-lg shadow-lg border-4 border-yellow-300"
            >
              <Image
                src={image.src}
                alt={image.title}
                width={400}
                height={300}
                className="w-full h-64 object-cover rounded-lg"
              />
              <div className="p-4 bg-white border-t-4 border-pink-300">
                <h3 className="text-lg font-semibold text-gray-900">{image.title}</h3>
                <p className="mt-1 text-sm text-gray-500">{image.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal for user input */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-md flex items-center justify-center z-50"  // Added blur effect
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 p-8 rounded-lg max-w-3xl w-full relative border-4 border-yellow-500 shadow-lg" // Added background gradient color
            >
              {
                 <div className="mt-6 text-center">
                    <motion.a
                      href="https://kwikpic-in.app.link/e/dNPrb2XHqNb?uCode=DDLTTG"
                      className="px-4 py-2 bg-blue-500 text-white font-bold rounded-lg shadow-md hover:bg-blue-600 transition duration-200 blink-text"
                      animate={{ opacity: [1, 0.5, 1], transition: { repeat: Infinity, duration: 1 } }} // Blinking effect for link
                    >
                      Click here to scan your photos
                    </motion.a>
                  </div>
              }
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      <IntroTimeoutModel img={"/photographer.jpg"}/>
    </div>
  )
}
