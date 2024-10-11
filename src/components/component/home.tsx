'use client'

import Image from 'next/image';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import IntroTimeoutModel from './intro-model';
import AchievementsPage from './AchievementsPage';

 const images = [
    'home',
    'home2',
    'home3',
    'img4',
  ];

  const sponserImages = [
    's91',
    'img1',
    'img3',
    'img4',
  ];
const CarouselComp = () => {
 
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);


  return (
    <div className="relative w-full h-64 md:h-96 rounded-lg overflow-hidden">
      <AnimatePresence initial={false}>
        <motion.img
          key={currentIndex}
                            src={"/" + images[currentIndex] + ".jpeg"}

          alt={`Garba Event ${currentIndex + 1}`}
          className="absolute inset-0 w-full h-full object-fill"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        />
      </AnimatePresence>
    </div>
  );
};

const IntroModel = () => {
  return (
    <div className="p-6 text-center bg-white bg-opacity-90 rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold mb-4 text-orange-600 font-serif">Welcome to Rotary Club of Palanpur Diamond City</h2>
      {/* <a
    href="https://forms.gle/KqpbmZvKRjB5p8UW9"
    style={{
      animation: "blink 1s infinite",  // Apply the blink animation
    }}
  >
    <h1 className="animate-pulse">💬 Give Feedback</h1>
  </a> */}
    <motion.a
    href="https://forms.gle/KqpbmZvKRjB5p8UW9"
    className="px-4 py-2 bg-blue-500 text-white font-bold rounded-lg shadow-md hover:bg-blue-600 transition duration-200 blink-text"
    animate={{ opacity: [1, 0.5, 1], transition: { repeat: Infinity, duration: 1 } }} // Blinking effect for link
       style={{
      padding: '16px',
      backgroundColor: '#2d3748', // dark gray,
      marginTop:"20px",
      borderRadius: '8px',
      boxShadow: '0 4px 10px rgba(0, 0, 0, 0.3)',
      animation: 'highlight 2s infinite',
      transition: 'transform 0.5s ease-in-out',
    }}
    onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
    onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
  >
    Give Feedback
  </motion.a>
    </div>
  );
};


const DecorativeBorder = () => (
  <div className="absolute inset-0 pointer-events-none">
    <div className="h-4 bg-[url('/border-pattern.png')] bg-repeat-x"></div>
    <div className="w-4 bg-[url('/border-pattern-vertical.png')] bg-repeat-y absolute top-0 bottom-0 left-0"></div>
    <div className="w-4 bg-[url('/border-pattern-vertical.png')] bg-repeat-y absolute top-0 bottom-0 right-0"></div>
    <div className="h-4 bg-[url('/border-pattern.png')] bg-repeat-x absolute bottom-0 left-0 right-0"></div>
  </div>
);

export default function HomePage() {
  const events = ['Garba Night', 'Dandiya Raas', 'Cultural Program', 'Charity Auction'];

           const stats = [
  { value: '1.2', label: 'million', description: 'members worldwide', color: 'text-teal-600' },
  { value: '47', label: 'million', description: 'volunteer hours each year', color: 'text-purple-600' },
  { value: '$291', label: 'million', description: 'funding awarded in 2023-24', color: 'text-orange-500' },
];

function StatsSection() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-center">
        {stats.map((stat, index) => (
          <div key={index} className="p-6 bg-white shadow-lg rounded-lg">
            <h3 className={`text-4xl font-bold ${stat.color}`}>{stat.value}</h3>
            <p className="text-xl font-semibold text-gray-800">{stat.label}</p>
            <p className="mt-2 text-gray-600">{stat.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

  return (
    <div className="relative flex flex-col min-h-screen overflow-hidden bg-gradient-to-br from-orange-100 via-pink-100 to-purple-100">
      <DecorativeBorder />
      <div className="absolute inset-0 overflow-hidden -z-10">
        {/* Background Color with Pattern Overlay */}
        <div className="w-full h-full bg-[radial-gradient(circle_at_top_left,_#FFDA44_0%,_#FF6B6B_30%,_#B06AB6_60%,_#6A82FB_100%)] opacity-90"></div>
      </div>

      <main className="relative flex-1 z-10 container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto mt-12 mb-16">
          <IntroModel />
        </div>
        
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8 text-purple-700 font-serif">Upcoming Zanzar Garba Events</h2>
          <CarouselComp />
        </section>

        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-orange-600 font-serif">Celebrate the Spirit of Rotary and Garba</h2>
              <p className="text-pink-700 text-lg">
                Join us in our mission to provide service to others, promote integrity, and advance world understanding, goodwill, and peace through our fellowship of business, professional, and community leaders - all while celebrating our rich cultural heritage through Garba.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {events.map((event) => (
                <div key={event} className="bg-white bg-opacity-75 p-4 rounded-lg shadow-md text-center">
                  <h3 className="text-xl font-semibold text-purple-600 mb-2">{event}</h3>
                  <p className="text-pink-600">Join us for an unforgettable night of dance and celebration!</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-purple-700 font-serif">Our Sponsors: Making a Difference Through Garba
</h2>
              <p className="text-pink-700 text-lg">
The Rotary Club of Palanpur Diamond City is thrilled to celebrate the vibrant spirit of Garba while creating a positive impact on our community! With the incredible support of our sponsors, we’re able to blend the joy of Navratri festivities with meaningful social causes.Their generosity allows us to host events that not only honor our rich culture but also uplift those in need. Together, we’re dancing our way to a better future—one Garba step at a time!</p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {sponserImages.map((event) => (
                <Image
                  key={event}
                  src={"/" + event + ".jpeg"}
                  width={200}
                  height={200}
                  alt={event}
                  className="rounded-lg object-cover shadow-lg"
                />
              ))}
            </div>
          </div>
        </section>

        {StatsSection()}



      </main>
      <IntroTimeoutModel img={"/servifi.jpeg"}/>
    </div>
  );
}