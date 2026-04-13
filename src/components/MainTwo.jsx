import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import dapurImg from '../assets/makanan-1.jpg';
import rempahImg from '../assets/makanan-2.jpg';

// Variants animasi
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: 'easeOut', delay },
  }),
};

const fadeLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: (delay = 0) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: 'easeOut', delay },
  }),
};

const fadeRight = {
  hidden: { opacity: 0, x: 50 },
  visible: (delay = 0) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: 'easeOut', delay },
  }),
};

const MainTwo = () => {
  // useRef & useInView agar animasi trigger saat section masuk viewport
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <div className="bg-[#EED9B9] py-16 px-6 md:px-16" id="story" ref={ref}>
      <section className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* Kiri - 2 Foto, slide dari kiri */}
        <div className="flex flex-row md:flex-col gap-4 w-full md:w-2/5">
          {/* Foto pertama - delay lebih awal */}
          <motion.img
            src={dapurImg}
            alt="Dapur Ibu Maryamah"
            className="w-1/2 md:w-4/5 h-40 md:h-52 object-cover rounded-2xl shadow-md"
            variants={fadeLeft}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            custom={0.1}
            whileHover={{ scale: 1.03, transition: { duration: 0.3 } }}
          />

          {/* Foto kedua - delay sedikit lebih lama */}
          <motion.img
            src={rempahImg}
            alt="Rempah-rempah"
            className="w-1/2 md:w-4/5 h-40 md:h-52 object-cover rounded-2xl shadow-md md:ml-10"
            variants={fadeLeft}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            custom={0.3}
            whileHover={{ scale: 1.03, transition: { duration: 0.3 } }}
          />
        </div>

        {/* Kanan - Konten Teks, slide dari kanan */}
        <div className="w-full md:w-3/5">
          {/* Label */}
          <motion.p className="text-xs font-semibold tracking-widest text-gray-500 uppercase mb-3" variants={fadeRight} initial="hidden" animate={isInView ? 'visible' : 'hidden'} custom={0.2}>
            The Legacy
          </motion.p>

          {/* Judul */}
          <motion.h1 className="text-3xl md:text-4xl font-bold text-gray-800 leading-snug mb-5" variants={fadeRight} initial="hidden" animate={isInView ? 'visible' : 'hidden'} custom={0.35}>
            Warisan Rasa dari Dapur Ibu Maryamah
          </motion.h1>

          {/* Paragraf 1 */}
          <motion.p className="text-gray-600 text-sm md:text-base leading-relaxed mb-4" variants={fadeUp} initial="hidden" animate={isInView ? 'visible' : 'hidden'} custom={0.5}>
            Dimulai dari sebuah kedai kecil di sudut kota, Ibu Maryamah mendedikasikan hidupnya untuk meracik bumbu rahasia yang ia pelajari dari sang nenek. Setiap sendok bumbu diolah secara tradisional, tanpa penyedap buatan, menjaga
            keaslian rempah Indonesia yang kaya.
          </motion.p>

          {/* Paragraf 2 */}
          <motion.p className="text-gray-600 text-sm md:text-base leading-relaxed mb-6" variants={fadeUp} initial="hidden" animate={isInView ? 'visible' : 'hidden'} custom={0.6}>
            Kini, semangat yang sama tetap kami jaga. Menghadirkan rasa ramesan yang tidak hanya mengenyangkan perut, tapi juga menghangatkan jiwa.
          </motion.p>

          {/* Quote */}
          <motion.blockquote className="border-l-4 border-[#5E0006] pl-4 text-gray-500 italic text-sm md:text-base" variants={fadeUp} initial="hidden" animate={isInView ? 'visible' : 'hidden'} custom={0.75}>
            "Masakan adalah doa yang tersaji di atas piring." - Ibu Maryamah
          </motion.blockquote>
        </div>
      </section>
    </div>
  );
};

export default MainTwo;
