"use client"
import Image from 'next/image';
import { useState } from 'react';
import styles from './AchievementsPage.module.css'; // Ensure to create/update the CSS module
import { motion } from 'framer-motion';

const images = Array.from({ length: 31 }, (_, i) => ({
  src: `/ilovepdf_pages-to-jpg/ppt+rcpdc-2_page-${String(i + 1).padStart(4, '0')}.jpg`,
  title: `Page ${i + 1}`,
  description: `Details about ${i + 1}` // Additional info for the back of the page
}));

export default function AchievementsPage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipping, setIsFlipping] = useState(false);

  const nextImage = () => {
    if (!isFlipping) {
      setIsFlipping(true);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        setIsFlipping(false);
      }, 600); // Match this duration with the CSS transition duration
    }
  };

  const prevImage = () => {
    if (!isFlipping) {
      setIsFlipping(true);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
        setIsFlipping(false);
      }, 600);
    }
  };

  return (
    <div className={`${styles.container} main-bg`}>
      <motion.h1 
          className="text-3xl font-bold text-orange-800 mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Our Achievements
        </motion.h1>
      <div className={styles.book}>
        <div className={`${styles.page} ${isFlipping ? styles.flip : ''}`}>
          <div className={styles.front}>
            <Image
              src={images[currentIndex].src}
              alt={images[currentIndex].title}
              width={400}
              height={300}
              className={styles.image}
            />
          </div>
          <div className={styles.back}>
            <h2>{images[currentIndex].title}</h2>
            <p>{images[currentIndex].description}</p>
          </div>
        </div>
      </div>
      <div className={styles.controls}>
        <button onClick={prevImage} className={styles.button}>Previous</button>
        <button onClick={nextImage} className={styles.button}>Next</button>
      </div>
    </div>
  );
}
