'use client'

import { motion } from 'framer-motion';
import { useState } from 'react';
import Image from 'next/image';
// import garbaEvent from '../public/image.png'; // Ensure the image is placed in the "public" folder for Next.js

const topAuthority = [
  { role: "President", name: "MPHF Rtn. Shailesh S. Patel" },
  { role: "Secretary", name: "PHF Rtn. Dr. Jignesh Maheshwari" },
  { role: "Club Trainer", name: "PHF Rtn. Ashok Modi" },
  { role: "Imm Past President", name: "PHF Rtn. Mukesh Modh" },
  { role: "President Elect (2025-26)", name: "PHF Rtn. Nilesh Pujara" },
  { role: "President Nominee (2026-27)", name: "PHF Rtn. Akshay Panchal" },
  { role: "Vice President", name: "MPHF Rtn. Shailesh S. Patel" },
  { role: "Joint Secretary", name: "Rtn. Chetan Soni" },
  { role: "Treasurer", name: "MPHF Rtn. Dr. Pinakin Patel" },
  { role: "Sgt. at Arms", name: "PHF Rtn. Lalit Jadav" },
  { role: "Board of Directors", name: "Multiple members" }, // List all
  { role: "Bulletin Editor", name: "Rtn. Mahendra Gupta" }
];

const members = [
  // Add all the member names in the list as in the image
  "MPHF Rtn. Ajit D. Agrawal", "MPHF Rtn. Dr. Ramesh B. Patel", 
  "MPHF Rtn. Dr. Shailesh V. Patel", "MPHF Rtn. Pinakin N. Patel", 
  "MPHF Rtn. Nishant P. Nayak", "MPHF Rtn. Ashok P. Khandelwal", 
  "MPHF Rtn. Mehul M. Soni", "PHF Rtn. Dr. Surekhaben K. Patel",
  // Add other members similarly
];

export default function MembersPage() {
  const [showTopAuthority, setShowTopAuthority] = useState(true);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-blue-100 p-8">
      <div className="max-w-7xl mx-auto">
        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="mb-8"
        >
          {/* <Image
            src={"/" + "img3" + ".jpeg"}
            alt="Garba Event Banner"
            layout="responsive"
            width={1000}
            height={400}
            className="rounded-lg shadow-lg"
          /> */}
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-bold text-center text-gray-800 mb-8"
        >
          {showTopAuthority ? 'Top Authority' : 'Members'}
        </motion.h1>

        <div className="text-center mb-8">
          <button
            onClick={() => setShowTopAuthority(true)}
            className={`py-2 px-6 text-lg font-bold rounded-lg transition-all duration-300 ease-in-out mr-4 ${
              showTopAuthority
                ? 'bg-blue-500 text-white'
                : 'bg-white text-blue-500 border border-blue-500'
            }`}
          >
            Top Authority
          </button>
          <button
            onClick={() => setShowTopAuthority(false)}
            className={`py-2 px-6 text-lg font-bold rounded-lg transition-all duration-300 ease-in-out ${
              !showTopAuthority
                ? 'bg-blue-500 text-white'
                : 'bg-white text-blue-500 border border-blue-500'
            }`}
          >
            Members
          </button>
        </div>

        {showTopAuthority ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {topAuthority.map((person, index) => (
              <motion.div
                key={index}
                className="bg-white shadow-md rounded-lg p-6"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {person.role}
                </h3>
                <p className="text-gray-600">{person.name}</p>
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {members.map((member, index) => (
              <motion.div
                key={index}
                className="bg-white shadow-md rounded-lg p-6"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <p className="text-lg text-gray-800">{member}</p>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </div>
  );
}
