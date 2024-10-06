'use client';

import { motion } from 'framer-motion';

export default function AwardsPage() {
  return (
    <div className="container mx-auto px-4 py-8 main-bg">
      <motion.h1
        className="text-3xl font-bold text-orange-800 mb-6 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        ROTARY CLUB OF PALNPUR DIAMOND CITY
      </motion.h1>
      <motion.p
        className="text-center text-lg text-orange-700"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Year: 2023-24 <br /> ACHIEVEMENT (AWARD)
      </motion.p>
      
      <motion.div
        className="mt-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <h2 className="text-2xl font-semibold text-orange-800 mb-4">Individual Awards</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm text-left text-orange-700">
            <thead className="bg-orange-200">
              <tr>
                <th className="px-4 py-2">#</th>
                <th className="px-4 py-2">Award</th>
                <th className="px-4 py-2">Recipient</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border px-4 py-2">1</td>
                <td className="border px-4 py-2">Best President (2023-24)</td>
                <td className="border px-4 py-2">Rtn. Mukesh Modh</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">2</td>
                <td className="border px-4 py-2">Best Secretary (2023-24)</td>
                <td className="border px-4 py-2">MPHF Rtn. Dr. Nishant Nayak</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">3</td>
                <td className="border px-4 py-2">Best Assistant Governor</td>
                <td className="border px-4 py-2">Rtn. Manoj Joshi</td>
              </tr>
              {/* Add the remaining rows similarly */}
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-semibold text-orange-800 mt-8 mb-4">Club Awards</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm text-left text-orange-700">
            <thead className="bg-orange-200">
              <tr>
                <th className="px-4 py-2">#</th>
                <th className="px-4 py-2">Award</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border px-4 py-2">1</td>
                <td className="border px-4 py-2">Host Club for First AGTS-DTTS</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">2</td>
                <td className="border px-4 py-2">Best Club</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">3</td>
                <td className="border px-4 py-2">Best Community Service</td>
              </tr>
              {/* Add the remaining rows similarly */}
            </tbody>
          </table>
        </div>
      </motion.div>
    </div>
  );
}
