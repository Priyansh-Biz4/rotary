/* eslint-disable react/jsx-no-undef */
'use client'

import { useState } from 'react'
import Image from 'next/image';

import { motion, AnimatePresence } from 'framer-motion'

const images = [
  { src: '/image1.jpg', title: 'Serene Landscape', description: 'A tranquil scene of rolling hills and a peaceful lake.' },
  { src: '/image2.jpg', title: 'Vibrant Celebration', description: 'Colorful Garba dancers in traditional attire.' },
  { src: '/image3.jpg', title: 'Community Service', description: 'Rotary members engaged in a local clean-up project.' },
  { src: '/image4.jpg', title: 'Cultural Heritage', description: 'Ancient temple architecture showcasing our rich history.' },
  { src: '/image4.jpg', title: 'Youth Empowerment', description: 'Young leaders participating in a Rotary workshop.' },
]

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState(null)

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-pink-100 to-yellow-100 py-12 px-4 sm:px-6 lg:px-8 main-bg">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center space-y-4 mb-12"
        >
          <h1 className="text-4xl font-bold tracking-tight text-gray-900">Rotary Club of Palanpur Diamond City Gallery</h1>
          <p className="max-w-3xl mx-auto text-lg text-gray-600">
            Explore our collection of images that capture the spirit of our community and the impact of our projects.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedImage(image as any)}
              className="cursor-pointer overflow-hidden rounded-lg shadow-lg"
            >
              <Image
                src={image.src}
                alt={image.title}
                width={400}
                height={300}
                className="w-full h-64 object-cover"
              />
              <div className="p-4 bg-white">
                <h3 className="text-lg font-semibold text-gray-900">{image.title}</h3>
                <p className="mt-1 text-sm text-gray-500">{image.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="bg-white rounded-lg overflow-hidden max-w-3xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}