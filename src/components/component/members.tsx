'use client'

import { motion } from 'framer-motion';
import { useState } from 'react';
import Image from 'next/image';

const topAuthority = [
  { role: "President", name: "MPHF Rtn. Shailesh S. Patel", imgSrc: "shailesh.jpeg", phone: "9825071950" },
  { role: "Secretary", name: "PHF Rtn. Dr. Jignesh Maheshwari", imgSrc: "jignesh.jpeg", phone: "9601382282" },
  { role: "Imm Past President", name: "PHF Rtn. Mukesh Modh", imgSrc: "mukesh-modh.jpeg", phone: "9879047408" },
  { role: "Club Trainer", name: "PHF Rtn. Ashok Modi", imgSrc: "user.jpg", phone: "9825244309" },
  { role: "President Elect (2025-26)", name: "PHF Rtn. Nilesh Pujara", imgSrc: "user.jpg", phone: "9824257880" },
  { role: "President Nominee (2026-27)", name: "PHF Rtn. Akshay Panchal", imgSrc: "akshay.jpeg", phone: "9427065164" },
  { role: "Vice President", name: "MPHF Rtn. Shailesh S. Patel", imgSrc: "user.jpg", phone: "9825071950" },
  { role: "Joint Secretary", name: "Rtn. Chetan Soni", imgSrc: "chetan.jpeg", phone: "9426567398" },
  { role: "Treasurer", name: "MPHF Rtn. Dr. Pinakin Patel", imgSrc: "pinakin.png", phone: "9824008886" },
  { role: "Sgt. at Arms", name: "PHF Rtn. Lalit Jadav", imgSrc: "lalit.jpeg", phone: "9879875831" },
 { name: "MPHF Rtn. Ajit Agrawal", imgSrc: "ajit.png", phone: "9712177777", role: "Board of Director" },
{ name: "MPHF Rtn. Ashok Khandelwal", imgSrc: "ashok-khandelwal.jpeg", phone: "9824266516", role: "Board of Director" },
{ name: "MPHF Rtn. Dinesh Patel", imgSrc: "dinesh.jpeg", phone: "9428509903", role: "Board of Director" },
{ name: "PHF Rtn. Dr. Shodhan Sheth", imgSrc: "user.jpg", phone: "9825179033", role: "Board of Director" },
{ name: "PHF Rtn. Manoj Joshi", imgSrc: "manoj.png", phone: "9429407102", role: "Board of Director" },
{ name: "PHF Rtn. Mehul Soni", imgSrc: "user.jpg", phone: "9825105871", role: "Board of Director" },
{ name: "Rtn. Sandip Patel", imgSrc: "sandip-patel.jpeg", phone: "9825282400", role: "Board of Director" },
{ name: "Rtn. Kamlesh Patni", imgSrc: "user.jpg", phone: "9426505642", role: "Board of Director" },
{ name: "PHF Rtn. Rahul Agrawal", imgSrc: "rahul.png", phone: "9723205522", role: "Board of Director" },
{ name: "PHF Rtn. Shubham Agrawal", imgSrc: "shubham.jpeg", phone: "9427647003", role: "Board of Director" },
{ name: "PHF Rtn. Dhaval Gohil", imgSrc: "dhaval.png", phone: "9909864777", role: "Board of Director" },
{ role: "Bulletin Editor", name: "Rtn. Mahendra Gupta", imgSrc: "mahendra-gupta.jpeg", phone: "9824036026" }
];


const members = [
  { name: "Rtn. Shailesh Patel", imgSrc: "shailesh.jpeg", phone: "9825071950" },
  { name: "Rtn. Ashok Modi", imgSrc: "user.jpg", phone: "9825244309" },
  { name: "Rtn. Mukesh Modh", imgSrc: "mukesh-modh.jpeg", phone: "9879047408" },
  { name: "Rtn. Nilesh Pujara", imgSrc: "user.jpg", phone: "9824257880" },
  { name: "Rtn. Akshay Panchal", imgSrc: "akshay.jpeg", phone: "9427065164" },
  { name: "Rtn. Dr. Shailesh Patel", imgSrc: "shailesh_1.jpeg", phone: "9825400679" },
  { name: "Rtn. Dr. Jignesh Maheshwari", imgSrc: "jignesh.jpeg", phone: "9601382282" },
  { name: "Rtn. Chetan Soni", imgSrc: "chetan.jpeg", phone: "9426567398" },
  { name: "Rtn. Dr. Pinakin Patel", imgSrc: "pinakin.png", phone: "9824008886" },
  { name: "Rtn. Lalit Jadhav", imgSrc: "lalit.jpeg", phone: "9879875831" },
  { name: "Rtn. Ajit Agrawal", imgSrc: "ajit.png", phone: "9712177777" },
  { name: "Rtn. Dr. Shodhan Sheth", imgSrc: "user.jpg", phone: "9825179033" },
  { name: "Rtn. Shubham Agrawal", imgSrc: "shubham.jpeg", phone: "9427647003" },
  { name: "Rtn. Ashok Khandelwal", imgSrc: "user.jpg", phone: "9824266516" },
  { name: "Rtn. Sandip Patel", imgSrc: "sandip-patel.jpeg", phone: "9825282400" },
  { name: "Rtn. Rahul Agrawal", imgSrc: "rahul.png", phone: "9723205522" },
  { name: "Rtn. Dhaval Gohil", imgSrc: "dhaval.png", phone: "9909864777" },
  { name: "Rtn. Manoj Joshi", imgSrc: "manoj.png", phone: "9429407102" },
  { name: "Rtn. Kamlesh Patni", imgSrc: "user.jpg", phone: "9426505642" },
  { name: "Rtn. Dinesh Patel", imgSrc: "dinesh.jpeg", phone: "9428509903" },
  { name: "Rtn. Mehul Soni", imgSrc: "user.jpg", phone: "9825105871" },
  { name: "Rtn. Bharat R. Patel", imgSrc: "bharat.jpeg", phone: "9898019262" },
  { name: "Rtn. Bhupendra Suthar", imgSrc: "bhupendra-suthar.jpeg", phone: "9426004795" },
  { name: "Rtn. Dr. Bharat R. Patel", imgSrc: "bharat-r-patel.jpeg", phone: "9427065081" },
  { name: "Rtn. Dr. Nishant Nayak", imgSrc: "nishant-nayak.jpeg", phone: "9426546173" },
  { name: "Rtn. Dr. Pravin B. Patel", imgSrc: "user.jpg", phone: "9099704627" },
  { name: "Rtn. Dr. Pravin G. Patel", imgSrc: "pravin-g.jpeg", phone: "9824050189" },
  { name: "Rtn. Dr. Ramesh Patel", imgSrc: "user.jpg", phone: "9825071930" },
  { name: "Rtn. Dr. Sanjay Chaudhry", imgSrc: "user.jpg", phone: "9067151406" },
  { name: "Rtn. Dr. Sanjay Dharani", imgSrc: "user.jpg", phone: "9824277570" },
  { name: "Rtn. Dr. Surekha Patel", imgSrc: "user.jpg", phone: "9428023071" },
  { name: "Rtn. Dr. Hasmukh Modi", imgSrc: "user.jpg", phone: "9824058966" },
  { name: "Rtn. Hasmukh Patel", imgSrc: "user.jpg", phone: "9825071924" },
  { name: "Rtn. Jagdish Panchal", imgSrc: "jagdish.jpeg", phone: "9426487114" },
  { name: "Rtn. Kalpesh Modi", imgSrc: "kalpesh.png", phone: "9979869982" },
  { name: "Rtn. Nagesh Patel", imgSrc: "user.jpg", phone: "9824269633" },
  { name: "Rtn. Naresh Patel", imgSrc: "naresh.jpeg", phone: "9824354737" },
  { name: "Rtn. Nikhil Modi", imgSrc: "user.jpg", phone: "7567348939" },
  { name: "Rtn. Pratik Agrawal", imgSrc: "user.jpg", phone: "9699879220" },
  { name: "Rtn. Pravin Parmar", imgSrc: "pravin-parmar.jpeg", phone: "9879180577" },
  { name: "Rtn. Ronak Patel", imgSrc: "user.jpg", phone: "8141914313" },
  { name: "Rtn. Sanjay Gupta", imgSrc: "user.jpg", phone: "9712991916" },
  { name: "Rtn. Shailesh Chaudhary", imgSrc: "user.jpg", phone: "9824084748" },
  { name: "Rtn. Sunil Maheshwari", imgSrc: "sunil.png", phone: "9898249674" },
  { name: "Rtn. Dr. Manjula Parmar", imgSrc: "manjula.jpeg", phone: "9426268794" },
  { name: "Rtn. Bharat H. Patel", imgSrc: "user.jpg", phone: "9574007392" },
  { name: "Rtn. Milit Rathi", imgSrc: "milit.jpeg", phone: "9429972220" },
  { name: "Rtn. Dr. Arpit Agrawal", imgSrc: "arpit.jpeg", phone: "9727755028" },
  { name: "Rtn. Kalpesh Patel", imgSrc: "kalpesh.jpeg", phone: "9428984448" },
  { name: "Rtn. Dr. Satish Patel", imgSrc: "user.jpg", phone: "9427264306" },
  { name: "Rtn. Dr. Parth Patel", imgSrc: "user.jpg", phone: "9898761119" },
  { name: "Rtn. Bharat Shankhla", imgSrc: "bharat.jpeg", phone: "7014678507" },
  { name: "Rtn. Pravin Patel", imgSrc: "pravin.jpeg", phone: "8140022200" },
  { name: "Rtn. Jitendra Patel", imgSrc: "user.jpg", phone: "9426041670" },
  { name: "Rtn. Dr. Pavan Soni", imgSrc: "user.jpg", phone: "9586144477" }
];

export default function MembersPage() {
  const [showTopAuthority, setShowTopAuthority] = useState(true);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-blue-100 p-8 main-bg">
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
