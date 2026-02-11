"use client"
import { useState, useEffect } from 'react';
import Image from 'next/image';
import logo from '../images/logo.png';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('welcome');

  const mylinks = [
    { id: 1, title: 'About', url: '#about', numbers: '01.' },
    { id: 2, title: 'Skills', url: '#skills', numbers: '02.' },
    { id: 3, title: 'Services', url: '#services', numbers: '03.' },
    { id: 4, title: 'Projects', url: '#projects', numbers: '04.' },
    { id: 5, title: 'Contact', url: '#contact', numbers: '05.' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['welcome', 'about', 'skills', 'services', 'projects', 'contact'];
      
      for (let section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className='py-6 px-6 md:px-14 bg-[#0a192f] fixed w-full z-50'>
      <nav className='flex items-center justify-between'>
        <Image src={logo} alt="Logo" className='w-12 h-12' width={48} height={48} />

        {/* Hamburger Button for Mobile */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className='text-[#64FFDA] md:hidden focus:outline-none'
        >
          <svg className='w-8 h-8' fill='none' stroke='currentColor' strokeWidth='2' viewBox='0 0 24 24'>
            {isOpen ? (
              <path strokeLinecap='round' strokeLinejoin='round' d='M6 18L18 6M6 6l12 12' />
            ) : (
              <path strokeLinecap='round' strokeLinejoin='round' d='M4 8h16M4 16h16' />
            )}
          </svg>
        </button>

        {/* Navigation Links */}
        <ul
        style={{ fontFamily: "'Space Mono', monospace" }}
          className={`md:flex md:space-x-10 md:items-center absolute md:static top-20 left-0 w-full md:w-auto bg-[#0a192f] px-6 md:px-0 transition-all duration-300 ease-in ${
            isOpen ? 'block' : 'hidden'
          }`}
        >
        {mylinks.map((link) => (
            <li key={link.id} className='py-2 md:py-0'>
              <a
                href={link.url}
                className={`transition-all duration-300 block relative group ${
                  activeSection === link.url.slice(1)
                    ? 'text-[#64FFDA]'
                    : 'text-[#CCD6F6] hover:text-[#64FFDA]'
                }`}
              >
                <span className={`${
                  activeSection === link.url.slice(1)
                    ? 'text-[#64FFDA]'
                    : 'text-[#64FFDA]'
                }`}>
                  {link.numbers}
                </span> {link.title}
                {activeSection === link.url.slice(1) && (
                  <div className='absolute bottom-0 left-0 h-0.5 bg-[#64FFDA] w-full'></div>
                )}
              </a>
            </li>
          ))}
          <li className='py-2 md:py-0'>
           <a href="/documents/baraka.pdf" download> <button className='text-[#64FFDA] hover:text-[#CCD6F6] hover:bg-[#668f86] transition-colors duration-300 border-2 border-[#64FFDA] px-10 py-2 rounded-lg w-full md:w-auto'>
              Resume
            </button></a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
