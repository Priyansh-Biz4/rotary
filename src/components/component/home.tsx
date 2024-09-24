'use client'

import Image from 'next/image';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

 const images = [
    'home',
    'home2',
    'home3',
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
          className="absolute inset-0 w-full h-full object-cover"
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
      <h2 className="text-3xl font-bold mb-4 text-orange-600 font-serif">Welcome to Rotary Club of Palanpur</h2>
      <p className="text-pink-700 text-lg">
        Serving our community and celebrating our culture through Garba. Join us in our mission to create lasting change and preserve our traditions.
      </p>
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

  return (
    <div className="relative flex flex-col min-h-screen overflow-hidden bg-gradient-to-br from-orange-100 via-pink-100 to-purple-100">
      <DecorativeBorder />
      <div className="absolute inset-0 overflow-hidden -z-10">
        <video
        autoPlay
          className="w-full h-full object-cover opacity-20"
          loop
          muted
        >
          <source src="https://biz4-chatbot-bucket.s3.eu-north-1.amazonaws.com/drone+01.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <main className="relative flex-1 z-10 container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto mt-12 mb-16">
          <IntroModel />
        </div>
        
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8 text-purple-700 font-serif">Upcoming Garba Events</h2>
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
              <div className="inline-block rounded-full bg-orange-500 px-3 py-1 text-sm text-white font-semibold">
                Our Sponsers
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-purple-700 font-serif">Making a Difference Through Garba</h2>
              <p className="text-pink-700 text-lg">
                The Rotary Club of Palanpur is committed to various community service projects. We combine our love for Garba with our dedication to social causes, creating events that not only celebrate our culture but also contribute to the betterment of our community.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {images.map((event) => (
                <Image
                  key={event}
                  src={"/" + event + ".jpeg"}
                  width={400}
                  height={300}
                  alt={event}
                  className="rounded-lg object-cover shadow-lg"
                />
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}