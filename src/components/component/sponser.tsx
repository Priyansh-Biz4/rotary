'use client'

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const sponsors = [
  { name: 'Sponsor 1', logo: '/s9.jpeg' },
  { name: 'Sponsor 2', logo: '/img1.jpeg' },
  { name: 'Sponsor 3', logo: '/img4.jpeg' },
  { name: 'Sponsor 4', logo: '/img3.jpeg' },
];

const SponsorCard = ({ name, logo }:any) => (
  <motion.div
    className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center justify-center"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    <Image src={logo} alt="image" width={150} height={150} className="mb-4" />
    <h3 className="text-xl font-semibold text-gray-800">{name}</h3>
  </motion.div>
);

export default function SponsorsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-100 via-orange-100 to-red-100 py-12 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="max-w-7xl mx-auto"
      >
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">Our Valued Sponsors</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {sponsors.map((sponsor, index) => (
            <motion.div
              key={sponsor.name}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <SponsorCard {...sponsor} />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="bg-white rounded-lg shadow-lg p-8 text-center"
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Want to Become a Sponsor?</h2>
          {/* <p className="text-gray-600 mb-6">
            Join us in making a difference in our community. By becoming a sponsor, you'll support our initiatives and gain visibility among our members and the wider community.
          </p> */}
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link href="/contact" passHref>
              {/* <a className="inline-block bg-yellow-500 text-white font-bold py-3 px-6 rounded-lg transition duration-300 ease-in-out hover:bg-yellow-600"> */}
                Contact Us to Become a Sponsor
              {/* </a> */}
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}
