import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const testimonials = [
  {
    id: 1,
    name: 'Budi Santoso',
    role: 'Pecinta Kuliner Nusantara',
    avatar: 'BS',
    avatarBg: 'bg-rose-200',
    rating: 5,
    text: '"Rendangnya juara! Bumbunya medok dan dagingnya bener-bener empuk. Suasananya juga homey banget, berasa lagi mudik ke rumah nenek."',
  },
  {
    id: 2,
    name: 'Siska Putri',
    role: 'Karyawan Swasta',
    avatar: 'SP',
    avatarBg: 'bg-red-400',
    rating: 5,
    text: '"Sering pesan via WhatsApp untuk kantor, porsinya pas dan pengirimannya selalu tepat waktu. Sambal bajaknya bikin ketagihan!"',
  },
  {
    id: 3,
    name: 'Andi Wijaya',
    role: 'Mahasiswa',
    avatar: 'AW',
    avatarBg: 'bg-green-600',
    rating: 5,
    text: '"Nasi Rames Ayam Gorengnya gurih banget. Harganya sangat terjangkau untuk rasa kualitas premium seperti ini. Definitly my favorite spot!"',
  },
];

// Variants animasi header
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut', delay },
  }),
};

// Variants animasi card testimoni
const cardVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut', delay },
  }),
};

const MainFive = () => {
  // Trigger animasi saat section masuk viewport
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <div className="bg-[#D53E0F] py-16 px-6 md:px-16" ref={ref}>
      <section className="max-w-5xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          {/* Judul fade up pertama */}
          <motion.h1 className="text-3xl md:text-4xl font-bold text-white mb-3" variants={fadeUp} initial="hidden" animate={isInView ? 'visible' : 'hidden'} custom={0.1}>
            Kata Pelanggan
          </motion.h1>

          {/* Quote fade up kedua */}
          <motion.p className="text-slate-300 italic text-sm md:text-base" variants={fadeUp} initial="hidden" animate={isInView ? 'visible' : 'hidden'} custom={0.25}>
            "Seperti makan masakan rumah sendiri, penuh kasih sayang dan rempah melimpah."
          </motion.p>
        </div>

        {/* Grid Testimoni */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((item, index) => (
            // Setiap card muncul bergantian dengan delay berbeda
            <motion.div
              key={item.id}
              className="bg-white rounded-2xl p-6 shadow-sm flex flex-col justify-between"
              variants={cardVariant}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              custom={0.2 + index * 0.15} // delay: card 1=0.2s, card 2=0.35s, card 3=0.5s
              whileHover={{
                y: -6, // card naik saat hover
                boxShadow: '0 12px 30px rgba(0,0,0,0.1)',
                transition: { duration: 0.25 },
              }}
            >
              {/* Bintang Rating */}
              <div>
                <motion.div className="flex gap-1 mb-4" initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : { opacity: 0 }} transition={{ delay: 0.4 + index * 0.15, duration: 0.4 }}>
                  {/* Render bintang satu per satu dengan stagger */}
                  {Array.from({ length: item.rating }).map((_, i) => (
                    <motion.span
                      key={i}
                      className="text-green-600 text-xl"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ delay: 0.5 + index * 0.15 + i * 0.07, duration: 0.3, type: 'spring' }}
                    >
                      ★
                    </motion.span>
                  ))}
                </motion.div>

                {/* Teks Ulasan */}
                <p className="text-gray-600 text-sm leading-relaxed mb-6">{item.text}</p>
              </div>

              {/* Profil Pelanggan */}
              <div className="flex items-center gap-3">
                {/* Avatar */}
                <div className={`w-10 h-10 rounded-full ${item.avatarBg} flex items-center justify-center text-white text-sm font-semibold flex-shrink-0`}>{item.avatar}</div>

                {/* Nama & Role */}
                <div>
                  <p className="text-gray-800 font-semibold text-sm">{item.name}</p>
                  <p className="text-gray-400 text-xs">{item.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default MainFive;
