import React from 'react';

const socialLinks = [
  {
    id: 1,
    label: 'Instagram',
    href: 'https://www.instagram.com/warungnasimaryamah/',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ),
    hoverColor: 'hover:text-pink-400',
  },
  {
    id: 2,
    label: 'WhatsApp',
    href: 'https://wa.me/6281234567890?text=Halo%20Bu%20Maryamah%2C%20saya%20mau%20pesan',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
        <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.112 1.522 5.84L.057 23.571a.75.75 0 00.882.961l5.935-1.556A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75a9.705 9.705 0 01-4.951-1.355l-.355-.211-3.664.96.976-3.566-.231-.366A9.712 9.712 0 012.25 12C2.25 6.615 6.615 2.25 12 2.25S21.75 6.615 21.75 12 17.385 21.75 12 21.75z" />
      </svg>
    ),
    hoverColor: 'hover:text-green-400',
  },
  {
    id: 3,
    label: 'Google Maps',
    href: 'https://maps.google.com',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
      </svg>
    ),
    hoverColor: 'hover:text-red-400',
  },
];

const footerLinks = [
  { label: 'Menu', href: '#menu' },
  { label: 'Story', href: '#story' },
  { label: 'Lokasi', href: '#lokasi' },
  { label: 'Kontak', href: 'https://wa.me/081574394344' },
];

const MainSeve = () => {
  return (
    /* Footer wrapper dengan background gelap */
    <footer className="bg-[#5E0006] text-white" id="location">
      {/* Bagian Atas Footer */}
      <div className="max-w-5xl mx-auto px-6 md:px-16 pt-14 pb-10">
        <div className="flex flex-col md:flex-row justify-between gap-10">
          {/* Kolom Kiri - Brand */}
          <div className="max-w-xs">
            {/* Logo & Nama */}
            <h2 className="text-2xl font-bold text-white mb-1">
              Warung Nasi <span className="text-[#C8711A]">Ibu Maryamah</span>
            </h2>
            {/* Tagline */}
            <p className="text-white/50 text-sm mb-6 leading-relaxed">Cita rasa otentik, resep turun temurun. Sejak 1984.</p>

            {/* Sosial Media */}
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.id}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className={`w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white/60 ${social.hoverColor} hover:bg-white/20 transition-all duration-200`}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Kolom Tengah - Navigasi */}
          <div>
            <h3 className="text-sm font-semibold text-white/40 uppercase tracking-widest mb-4">Navigasi</h3>
            <ul className="flex flex-col gap-3">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-white/70 hover:text-[#C8711A] text-sm transition-colors duration-200">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Kolom Kanan - Kontak & Jam Buka */}
          <div>
            <h3 className="text-sm font-semibold text-white/40 uppercase tracking-widest mb-4">Informasi</h3>
            <ul className="flex flex-col gap-3 text-sm text-white/70">
              {/* Alamat */}
              <li className="flex items-start gap-2">
                <span className="mt-0.5">📍</span>
                <span>
                  Jl. Perjuangan No. 38,
                  <br />
                  Bekasi, Jawa Barat
                </span>
              </li>
              {/* Jam Buka */}
              <li className="flex items-center gap-2">
                <span>🕕</span>
                <span>Buka 06.00 – 15:00 WIB</span>
              </li>
              {/* Nomor Telepon */}
              <li className="flex items-center gap-2">
                <span>📱</span>
                <a href="https://wa.me/6281234567890" className="hover:text-[#C8711A] transition-colors">
                  0812-3456-7890
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Garis Pemisah */}
      <div className="border-t border-white/10" />

      {/* Bagian Bawah - Copyright */}
      <div className="max-w-5xl mx-auto px-6 md:px-16 py-5 flex flex-col sm:flex-row justify-between items-center gap-2">
        <p className="text-white/60 text-xs text-center">© 2026 Warung Nasi Rames Ibu Maryamah. All rights reserved.</p>
        <p className="text-white/60 text-xs text-center">
          Crafted with ❤️ by <span className="text-[#C8711A]">NoidProject</span>
        </p>
      </div>
    </footer>
  );
};

export default MainSeve;
