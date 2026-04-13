import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

// Variants animasi
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut', delay },
  }),
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

const MainSix = () => {
  const ref = useRef(null);
  // Animasi trigger saat section masuk viewport
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <div className="bg-[#FAF3E0] px-6 md:px-16 py-12" ref={ref}>
      {/* Card utama scale in saat masuk viewport */}
      <motion.section className="bg-[#9B3F25] rounded-3xl px-8 md:px-16 py-14 max-w-5xl mx-auto text-center" variants={scaleIn} initial="hidden" animate={isInView ? 'visible' : 'hidden'}>
        {/* Judul fade up */}
        <motion.h1 className="text-3xl md:text-4xl font-bold text-white mb-4" variants={fadeUp} initial="hidden" animate={isInView ? 'visible' : 'hidden'} custom={0.2}>
          Sudah Lapar Hari Ini?
        </motion.h1>

        {/* Deskripsi fade up */}
        <motion.p className="text-white/80 text-sm md:text-base leading-relaxed max-w-md mx-auto mb-8" variants={fadeUp} initial="hidden" animate={isInView ? 'visible' : 'hidden'} custom={0.35}>
          Pesan sekarang melalui WhatsApp atau kunjungi langsung kedai kami untuk menikmati pengalaman makan Nasi Rames terbaik.
        </motion.p>

        {/* Tombol CTA fade up */}
        <motion.div className="flex flex-col sm:flex-row gap-4 justify-center" variants={fadeUp} initial="hidden" animate={isInView ? 'visible' : 'hidden'} custom={0.5}>
          {/* Tombol Order via WhatsApp */}
          <motion.a
            href="https://wa.me/6281234567890?text=Halo%20Bu%20Maryamah%2C%20saya%20mau%20pesan"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-white text-[#9B3F25] font-semibold px-7 py-3 rounded-xl cursor-pointer"
            whileHover={{ scale: 1.05, backgroundColor: '#f3f4f6', transition: { duration: 0.2 } }}
            whileTap={{ scale: 0.97 }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.112 1.522 5.84L.057 23.571a.75.75 0 00.882.961l5.935-1.556A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75a9.705 9.705 0 01-4.951-1.355l-.355-.211-3.664.96.976-3.566-.231-.366A9.712 9.712 0 012.25 12C2.25 6.615 6.615 2.25 12 2.25S21.75 6.615 21.75 12 17.385 21.75 12 21.75z" />
            </svg>
            Order via WhatsApp
          </motion.a>

          {/* Tombol Cari Lokasi */}
          <motion.a
            href="https://maps.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-transparent border-2 border-white text-white font-semibold px-7 py-3 rounded-xl cursor-pointer"
            whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.15)', transition: { duration: 0.2 } }}
            whileTap={{ scale: 0.97 }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
            </svg>
            Cari Lokasi
          </motion.a>
        </motion.div>
      </motion.section>
    </div>
  );
};

export default MainSix;
