'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { FiMail } from 'react-icons/fi';

// Simplified version - keeping just the essential parts
const Hero = () => {
  const [text, setText] = useState('');
  const fullText = "hi, huda k here.";
  const [showCursor, setShowCursor] = useState(true);

  // Typewriter effect
  useEffect(() => {
    if (text.length < fullText.length) {
      const timeout = setTimeout(() => {
        setText(fullText.slice(0, text.length + 1));
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [text, fullText]);

  // Blinking cursor effect
  useEffect(() => {
    const interval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);
    return () => clearInterval(interval);
  }, []);

  // Function to render the text with different colors
  const renderColoredText = () => {
    // If text is not yet loaded enough to show "huda"
    if (text.length < 4) {
      return (
        <span className="text-[#ccd6f6]">{text}</span>
      );
    }
    
    // Split the text into parts
    const prefix = text.substring(0, 4); // "hi, "
    const name = text.substring(4, 10);   // "huda"
    const suffix = text.substring(10);    // " here."
    
    return (
      <>
        <span className="text-[#ccd6f6]">{prefix}</span>
        <span className="text-medium-pink">{name}</span>
        <span className="text-[#ccd6f6]">{suffix}</span>
      </>
    );
  };

  return (
    <section id="home" className="min-h-screen flex flex-col justify-center items-center bg-darkest-bg relative">
      <div className="max-w-5xl px-6 md:px-0 z-10 text-center">
        <h1 className="text-7xl md:text-8xl mb-4 leading-tight font-normal" style={{ fontFamily: 'NTR, sans-serif', letterSpacing: '-1px' }}>
          {renderColoredText()}
          <span className={`w-1 h-16 ml-2 inline-block bg-medium-pink ${showCursor ? 'opacity-100' : 'opacity-0'}`}></span>
        </h1>
        
        <p className="text-4xl md:text-5xl text-[#8892b0] mb-10" style={{ fontFamily: 'NTR, sans-serif' }}>
          I build and break things occasionally.
        </p>
        
        <p className="text-xl text-[#8892b0] max-w-3xl mx-auto mb-12 leading-relaxed" style={{ fontFamily: 'NTR, sans-serif' }}>
        I'm a software engineer based in London, UK, specializing in high-performance, distributed systems for the financial services industry. 
        I architect scalable microservices solutions that drive business value through optimized performance and reliable software ecosystems.
        </p>
        
        {/* Contact button */}
        <Link 
          href="mailto:huda.kukaswadia@gmail.com"
          className="inline-flex items-center justify-center px-10 py-4 mt-6 border-2 border-medium-pink rounded-md text-medium-pink text-xl hover:bg-medium-pink hover:bg-opacity-10 transition-all duration-300"
          style={{ fontFamily: 'NTR, sans-serif' }}
        >
          <FiMail className="mr-2 text-xl" /> Say hi!
        </Link>
      </div>
    </section>
  );
};

export default Hero;