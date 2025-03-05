'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { FiGithub, FiLinkedin, FiMail, FiEdit, FiMenu, FiX } from 'react-icons/fi';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/#about' },
    { name: 'Experience', href: '/#experience' },
    { name: 'Projects', href: '/#projects' },
    { name: 'Writing', href: '/blog' },
  ];

  const socialLinks = [
    { name: 'Email', href: 'mailto:huda.kukaswadia@gmail.com', icon: <FiMail size={20} /> },
    { name: 'GitHub', href: 'https://github.com/hudakukaswadia', icon: <FiGithub size={20} /> },
    { name: 'LinkedIn', href: 'https://linkedin.com/in/hudakukaswadia', icon: <FiLinkedin size={20} /> },
    { name: 'Resume', href: 'https://medium.com/@huda.kukaswadia', icon: <FiEdit size={20} /> },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-darkest-bg shadow-md' : 'bg-darkest-bg'}`}>
      <div className="max-w-6xl mx-auto px-6 md:px-12 flex justify-between items-center py-4">
        {/* Logo and Desktop Nav */}
        <div className="flex items-center">
          <Link href="/" className="text-xl font-medium text-white mr-12">
            HK
          </Link>

          {/* Desktop Nav Links */}
          <ul className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link 
                  href={link.href}
                  className="text-gray-300 hover:text-medium-pink transition-colors text-sm"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Social Icons (Desktop) */}
        <div className="hidden md:flex space-x-6">
          {socialLinks.map((link) => (
            <a 
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-medium-pink transition-colors"
              aria-label={link.name}
            >
              {link.icon}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="block md:hidden text-white text-2xl"
          onClick={toggleMobileMenu}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {mobileMenuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-darkest-bg bg-opacity-95 md:hidden pt-20">
          <div className="container mx-auto px-6 py-8 flex flex-col h-full">
            <ul className="space-y-6 mb-8">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-xl text-gray-200 hover:text-medium-pink transition-colors block py-2"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="flex justify-center space-x-8 mt-auto mb-16">
              {socialLinks.map((link) => (
                <a 
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-medium-pink transition-colors text-2xl"
                  aria-label={link.name}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;