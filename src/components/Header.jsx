import React, { useState } from 'react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('Home');

  // Tambahkan href untuk setiap link - sesuaikan dengan id section
  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Menu', href: '#menu' },
    { label: 'Story', href: '#story' },
    { label: 'Location', href: '#location' },
  ];

  const handleClick = (label) => {
    setActiveLink(label);
    setIsOpen(false); // tutup mobile menu saat link diklik
  };

  return (
    <div className="sticky top-0 border border-blue-200 mx-0 mt-0 z-100">
      <nav className="flex items-center justify-between px-6 py-4 bg-amber-50">
        {/* Logo */}
        <h1 className="text-xl font-semibold text-gray-800 tracking-wide">Ibu Maryamah</h1>

        {/* Nav Links - Desktop */}
        <ul className="hidden md:flex items-center gap-8 list-none">
          {navLinks.map((link) => (
            <li key={link.label}>
              {/* Ganti <li> jadi <a> agar bisa scroll ke section */}
              <a
                href={link.href}
                onClick={() => handleClick(link.label)}
                className={`font-medium cursor-pointer transition-colors no-underline ${activeLink === link.label ? 'text-[#BB563B] border-b-2 border-[#BB563B] pb-0.5' : 'text-gray-600 hover:text-[#BB563B]'}`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Right Side */}
        <div className="flex items-center gap-3">
          <button className="hidden md:block bg-[#9B0F06] hover:bg-[#ed2718] text-white font-medium px-6 py-2.5 rounded-full transition-colors cursor-pointer">Order Now</button>

          {/* Hamburger Button - Mobile */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden flex flex-col justify-center items-center w-8 h-8 gap-1.5 cursor-pointer">
            <span className={`block w-6 h-0.5 bg-gray-700 transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block w-6 h-0.5 bg-gray-700 transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-6 h-0.5 bg-gray-700 transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-64' : 'max-h-0'}`}>
        <ul className="flex flex-col bg-amber-50 px-6 pb-4 gap-4 list-none rounded-b-lg">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a href={link.href} onClick={() => handleClick(link.label)} className={`block font-medium cursor-pointer transition-colors no-underline ${activeLink === link.label ? 'text-[#9B0F06]' : 'text-gray-600 hover:text-orange-500'}`}>
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <button className="w-full bg-[#9B0F06] hover:bg-[#e11d10] text-white font-medium px-6 py-2.5 rounded-full transition-colors cursor-pointer">Order Now</button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
