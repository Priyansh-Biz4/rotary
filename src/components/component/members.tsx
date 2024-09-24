'use client'

import { motion } from 'framer-motion';
import { useState } from 'react';
import Image from 'next/image';

const topAuthority = [
  { role: "President", name: "MPHF Rtn. Shailesh S. Patel", imgSrc: "s-patel.jpeg" },
  { role: "Secretary", name: "PHF Rtn. Dr. Jignesh Maheshwari", imgSrc: "jignesh-mh.jpeg" },
    { role: "Imm Past President", name: "PHF Rtn. Mukesh Modh", imgSrc: "m-modh.jpeg" },
  { role: "Club Trainer", name: "PHF Rtn. Ashok Modi", imgSrc: "user.jpg" },
  { role: "President Elect (2025-26)", name: "PHF Rtn. Nilesh Pujara", imgSrc: "user.jpg" },
  { role: "President Nominee (2026-27)", name: "PHF Rtn. Akshay Panchal", imgSrc: "a-panchal.jpeg" },
  { role: "Vice President", name: "MPHF Rtn. Shailesh S. Patel", imgSrc: "user.jpg" },
  { role: "Joint Secretary", name: "Rtn. Chetan Soni", imgSrc: "user.jpg" },
  { role: "Treasurer", name: "MPHF Rtn. Dr. Pinakin Patel", imgSrc: "pinakin.png" },
  { role: "Sgt. at Arms", name: "PHF Rtn. Lalit Jadav", imgSrc: "user.jpg" },
  { role: "Board of Directors", name: "Multiple members", imgSrc: "user.jpg" },
  { role: "Bulletin Editor", name: "Rtn. Mahendra Gupta", imgSrc: "user.jpg" }
];


const members = [
  { name: "Rtn. Shailesh Patel", imgSrc: "s-patel.jpeg" },
  { name: "Rtn. Ashok Modi", imgSrc: "user.jpg" },
  { name: "Rtn. Mukesh Modh", imgSrc: "m-modh.jpeg" },
  { name: "Rtn. Nilesh Pujara", imgSrc: "user.jpg" },
  { name: "Rtn. Akshay Panchal", imgSrc: "a-panchal.jpeg" },
  { name: "Rtn. Dr. Shailesh Patel", imgSrc: "user.jpg" },
  { name: "Rtn. Dr. Jignesh Maheshwari", imgSrc: "jignesh-mh.jpeg" },
  { name: "Rtn. Chetan Soni", imgSrc: "user.jpg" },
  { name: "Rtn. Dr. Pinakin Patel", imgSrc: "pinakin.png" },
  { name: "Rtn. Lalit Jadhav", imgSrc: "user.jpg" },
  { name: "Rtn. Ajit Agrawal", imgSrc: "ajit.png" },
  { name: "Rtn. Dr. Shodhan Sheth", imgSrc: "Shodhan.png" },
  { name: "Rtn. Shubham Agrawal", imgSrc: "user.jpg" },
  { name: "Rtn. Ashok Khandelwal", imgSrc: "user.jpg" },
  { name: "Rtn. Sandip Patel", imgSrc: "Sandip.png" },
  { name: "Rtn. Rahul Agrawal", imgSrc: "rahul.png" },
  { name: "Rtn. Dhaval Gohil", imgSrc: "dhaval.png" },
  { name: "Rtn. Manoj Joshi", imgSrc: "manoj.png" },
  { name: "Rtn. Kamlesh Patni", imgSrc: "user.jpg" },
  { name: "Rtn. Dinesh Patel", imgSrc: "user.jpg" },
  { name: "Rtn. Mehul Soni", imgSrc: "user.jpg" },
  { name: "Rtn. Mahendra Gupta", imgSrc: "user.jpg" },
  { name: "Rtn. Bharat R. Patel", imgSrc: "user.jpg" },
  { name: "Rtn. Bhupendra Suthar", imgSrc: "user.jpg" },
  { name: "Rtn. Dr. Bharat R. Patel", imgSrc: "user.jpg" },
  { name: "Rtn. Dr. Nishant Nayak", imgSrc: "nishant-nayak.png" },
  { name: "Rtn. Dr. Pravin B. Patel", imgSrc: "user.jpg" },
  { name: "Rtn. Dr. Pravin G. Patel", imgSrc: "user.jpg" },
  { name: "Rtn. Dr. Ramesh Patel", imgSrc: "user.jpg" },
  { name: "Rtn. Dr. Sanjay Chaudhry", imgSrc: "user.jpg" },
  { name: "Rtn. Dr. Sanjay Dharani", imgSrc: "user.jpg" },
  { name: "Rtn. Dr. Surekha Patel", imgSrc: "user.jpg" },
  { name: "Rtn. Dr. Hasmukh Modi", imgSrc: "user.jpg" },
  { name: "Rtn. Hasmukh Patel", imgSrc: "user.jpg" },
  { name: "Rtn. Jagdish Panchal", imgSrc: "user.jpg" },
  { name: "Rtn. Kalpesh Modi", imgSrc: "kalpesh.png" },
  { name: "Rtn. Nagesh Patel", imgSrc: "user.jpg" },
  { name: "Rtn. Naresh Patel", imgSrc: "user.jpg" },
  { name: "Rtn. Nikhil Modi", imgSrc: "user.jpg" },
  { name: "Rtn. Pratik Agrawal", imgSrc: "user.jpg" },
  { name: "Rtn. Pravin Parmar", imgSrc: "user.jpg" },
  { name: "Rtn. Ronak Patel", imgSrc: "user.jpg" },
  { name: "Rtn. Sanjay Gupta", imgSrc: "user.jpg" },
  { name: "Rtn. Shailesh Chaudhary", imgSrc: "user.jpg" },
  { name: "Rtn. Sunil Maheshwari", imgSrc: "sunil.png" },
  { name: "Rtn. Dr. Manjula Parmar", imgSrc: "user.jpg" },
  { name: "Rtn. Bharat H. Patel", imgSrc: "user.jpg" },
  { name: "Rtn. Milit Rathi", imgSrc: "user.jpg" },
  { name: "Rtn. Dr. Arpit Agrawal", imgSrc: "user.jpg" },
  { name: "Rtn. Kalpesh Patel", imgSrc: "user.jpg" },
  { name: "Rtn. Dr. Satish Patel", imgSrc: "user.jpg" },
  { name: "Rtn. Dr. Parth Patel", imgSrc: "user.jpg" },
  { name: "Rtn. Bharat Shankhla", imgSrc: "user.jpg" },
  { name: "Rtn. Pravin Patel", imgSrc: "user.jpg" },
  { name: "Rtn. Jitendra Patel", imgSrc: "user.jpg" },
  { name: "Rtn. Dr. Pavan Soni", imgSrc: "user.jpg" }
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
                className="bg-white shadow-md rounded-lg p-6 flex items-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Image
                  src={"/" + person.imgSrc}// Image for top authority
                  alt={person.name}
                  width={80} // Adjust size as needed
                  height={80}
                  className="rounded-full mr-4" // Rounded image
                />
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    {person.role}
                  </h3>
                  <p className="text-gray-600">{person.name}</p>
                </div>
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
                className="bg-white shadow-md rounded-lg p-6 flex items-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Image
                 src={"/" + member.imgSrc}// Image for members
                  alt={member.name}
                  width={80} // Adjust size as needed
                  height={80}
                  className="rounded-full mr-4" // Rounded image
                />
                <p className="text-lg text-gray-800">{member.name}</p>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </div>
  );
}
