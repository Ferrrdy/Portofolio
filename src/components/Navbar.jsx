import { useState } from 'react';
import { RiMenu3Fill, RiCloseFill } from 'react-icons/ri';
import clsx from 'clsx';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: '#beranda', label: 'Beranda' },
    { href: '#tentang', label: 'Tentang' },
    { href: '#project', label: 'Project' },
    { href: '#kontak', label: 'Kontak' },
  ];

  return (
    <header className="sticky top-0 left-0 w-full bg-zinc-900 z-50">
      <div className="container mx-auto px-4 flex justify-between items-center pt-6 pb-4">
        {/* Logo atau Judul */}
        <a href="#beranda" className="text-3xl font-bold text-white">
          Portfolio
        </a>

        {/* Navigasi Desktop */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-md text-zinc-300 hover:text-white transition-colors duration-300"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Tombol Hamburger untuk Mobile */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-white z-20"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <RiCloseFill size={24} /> : <RiMenu3Fill size={24} />}
        </button>

        {/* Navigasi Mobile (Fullscreen Overlay) */}
        <div
          className={clsx(
            'md:hidden fixed inset-0 bg-zinc-950 flex justify-center items-center transition-opacity duration-300',
            {
              'opacity-100 visible': isMenuOpen,
              'opacity-0 invisible': !isMenuOpen,
            }
          )}
        >
          <nav className="flex flex-col items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-2xl text-zinc-300 hover:text-white transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)} // Tutup menu saat link diklik
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;