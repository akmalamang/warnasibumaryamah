import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

import rendangImg from '../assets/rendang.jpg';
import ayamImg from '../assets/ayam-goreng.jpg';
import laukImg from '../assets/lauk-pauk.jpg';
import sambalImg from '../assets/sambal.jpg';

// Variants animasi header
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut', delay },
  }),
};

// Variants animasi card dari kiri
const fadeLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: (delay = 0) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.65, ease: 'easeOut', delay },
  }),
};

// Variants animasi card dari kanan
const fadeRight = {
  hidden: { opacity: 0, x: 50 },
  visible: (delay = 0) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.65, ease: 'easeOut', delay },
  }),
};

const MainThree = () => {
  const ref = useRef(null);
  // once: true agar animasi hanya jalan sekali saat pertama masuk viewport
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <div className="bg-[#FAF3E0] py-16 px-6 md:px-16" id="menu" ref={ref}>
      <section className="max-w-5xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-10">
          {/* Judul fade up */}
          <motion.h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2" variants={fadeUp} initial="hidden" animate={isInView ? 'visible' : 'hidden'} custom={0.1}>
            Menu Favorit
          </motion.h1>

          {/* Subjudul fade up */}
          <motion.p className="text-gray-500 text-sm md:text-base" variants={fadeUp} initial="hidden" animate={isInView ? 'visible' : 'hidden'} custom={0.25}>
            Pilihan terbaik yang selalu dirindukan pelanggan kami.
          </motion.p>
        </div>

        {/* Grid Layout Menu */}
        <div className="flex flex-col gap-4">
          {/* Baris Pertama */}
          <div className="flex flex-col md:flex-row gap-4">
            {/* Card Besar - slide dari kiri */}
            <motion.div
              className="relative w-full md:w-2/3 h-64 rounded-2xl overflow-hidden cursor-pointer"
              style={{ backgroundImage: `url(${rendangImg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
              variants={fadeLeft}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              custom={0.3}
              whileHover={{ scale: 1.02, transition: { duration: 0.5 } }}
            >
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

              {/* Konten */}
              <div className="absolute bottom-0 left-0 p-5">
                <span className="inline-block bg-green-500 text-white text-xs font-semibold px-3 py-1 rounded-full mb-2">Best Seller</span>
                <h2 className="text-white text-xl font-bold mb-1">Nasi Rames Rendang</h2>
                <p className="text-white/80 text-xs leading-relaxed max-w-xs">Rendang sapi yang empuk dengan bumbu meresap hingga ke dalam, disajikan dengan sayur nangka dan sambal ijo.</p>
              </div>
            </motion.div>

            {/* Card Kecil - slide dari kanan */}
            <motion.div
              className="relative w-full md:w-1/3 h-64 rounded-2xl overflow-hidden cursor-pointer"
              style={{ backgroundImage: `url(${ayamImg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
              variants={fadeRight}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              custom={0.4}
              whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
            >
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

              {/* Konten */}
              <div className="absolute bottom-0 left-0 p-5">
                <h2 className="text-white text-lg font-bold mb-1">Ayam Goreng Lengkuas</h2>
                <p className="text-white/80 text-xs leading-relaxed">Ayam ungkep bumbu rempah yang digoreng garing dengan taburan lengkuas renyah.</p>
              </div>
            </motion.div>
          </div>

          {/* Baris Kedua */}
          <div className="flex flex-col md:flex-row gap-4">
            {/* Card Kecil - slide dari kiri */}
            <motion.div
              className="relative w-full md:w-1/3 h-56 rounded-2xl overflow-hidden cursor-pointer"
              style={{ backgroundImage: `url(${laukImg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
              variants={fadeLeft}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              custom={0.5}
              whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
            >
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

              {/* Konten */}
              <div className="absolute bottom-0 left-0 p-5">
                <h2 className="text-white text-lg font-bold mb-1">Aneka Lauk Pauk</h2>
                <p className="text-white/80 text-xs leading-relaxed">Tempe Orek, Perkedel, dan Tumis Kacang Panjang segar.</p>
              </div>
            </motion.div>

            {/* Card Besar - slide dari kanan */}
            <motion.div
              className="relative w-full md:w-2/3 h-56 rounded-2xl overflow-hidden cursor-pointer"
              style={{ backgroundImage: `url(${sambalImg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
              variants={fadeRight}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              custom={0.6}
              whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
            >
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

              {/* Konten */}
              <div className="absolute bottom-0 left-0 p-5">
                <h2 className="text-white text-xl font-bold mb-1">Sambal Bajak Spesial</h2>
                <p className="text-white/80 text-xs leading-relaxed max-w-sm">Pedas yang pas dengan aroma terasi pilihan. Pelengkap wajib setiap hidangan kami.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MainThree;
