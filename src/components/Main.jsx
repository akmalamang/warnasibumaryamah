import React from 'react';
import { motion } from 'framer-motion';
import warungImg from '../assets/warung.jpg';

// Variants animasi - atur timing dan efek di sini
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: 'easeOut', delay },
  }),
};

const Main = () => {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center mx-auto text-center"
      style={{
        backgroundImage: `url(${warungImg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
      id="home"
    >
      {/* Overlay gelap - fade in saat halaman load */}
      <motion.div className="absolute inset-0 bg-black/55" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} />

      {/* Konten */}
      <div className="relative z-10 px-6 md:px-16 py-20 max-w-2xl">
        {/* Badge Sejak - muncul pertama */}
        <motion.div
          className="inline-block bg-white/90 text-gray-700 text-sm font-medium px-4 py-1.5 rounded-full mb-6"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.2} // delay 0.2s
        >
          Sejak 1984
        </motion.div>

        {/* Judul - muncul kedua */}
        <motion.h1
          className="text-4xl md:text-5xl font-bold text-white mb-6 text-center"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.4} // delay 0.4s
        >
          Warung Nasi Rames <span className="text-[#9B0F06]">Ibu Maryamah</span>
        </motion.h1>

        {/* Deskripsi - muncul ketiga */}
        <motion.p
          className="text-white/80 text-base md:text-lg leading-relaxed mb-8"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.6} // delay 0.6s
        >
          Cita Rasa Otentik, Resep Turun Temurun. Nikmati kehangatan masakan rumah di setiap suapan Nasi Rames kami.
        </motion.p>

        {/* Tombol - muncul terakhir */}
        <motion.div
          className="flex flex-wrap gap-4 justify-center"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.8} // delay 0.8s
        >
          <motion.button
            className="flex items-center gap-2 bg-[#9B0F06] text-white font-medium px-6 py-3 rounded-full cursor-pointer"
            whileHover={{ scale: 1.05, backgroundColor: '#e11d10' }}
            whileTap={{ scale: 0.97 }}
            transition={{ duration: 0.2 }}
          >
            🍴 Lihat Menu
          </motion.button>

          <motion.button
            className="flex items-center gap-2 bg-white/10 border border-white/40 text-white font-medium px-6 py-3 rounded-full cursor-pointer backdrop-blur-sm"
            whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.2)' }}
            whileTap={{ scale: 0.97 }}
            transition={{ duration: 0.2 }}
          >
            📍 Lokasi Kami
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Main;
