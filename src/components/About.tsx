'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const About = () => {
  return (
    <section id="about" className="section py-24 bg-darkest-bg">
      <div className="max-w-5xl mx-auto px-6 md:px-0">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="heading">About Me</h2>
          <div className="w-20 h-1 bg-medium-pink mt-2 mb-8"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative mx-auto md:mx-0 group max-w-sm w-[85%] md:w-[80%]" 
          >
            <div className="absolute inset-0 border-2 border-medium-pink rounded-lg transform translate-x-4 translate-y-4 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-300"></div>
            <div className="relative w-full h-full overflow-hidden rounded-lg transition-transform duration-300 group-hover:scale-[1.03]">
              <Image
                src="/images/profile.jpg"
                alt="Huda Kukaswadia"
                width={320}
                height={320}
                className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                placeholder="blur"
                blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z/C/HgAGgwJ/lK3Q6wAAAABJRU5ErkJggg=="
              />
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-light mb-4 text-[#ccd6f6]">Hi - its Huda Kukaswadia (yes, it's a mouthful!) </h3>
            <p className="text-[#8892b0] mb-4 font-light text-lg">
              I'm a Software Development Engineer at <a href="https://www.lloydsbankinggroup.com/" target="_blank" rel="noopener noreferrer" className="text-medium-pink font-bold">Lloyds Banking Group</a>, building robust systems and crafting solutions that not only excel under the hood but also provide tangible value to users. 
            </p>
            <p className="text-[#8892b0] mb-4 font-light text-lg">
              I'm curious about all things quant, especially distributed systems, concurrency, and solving tricky algorithmic puzzles. 
            </p>

            <div className="grid gap-4 mb-6">
              <div>
                <h4 className="text-medium-pink font-bold mb-2 text-lg">Technologies I have been working with:</h4>
                <ul className="grid grid-cols-2 gap-y-1 text-[#8892b0] font-light">
                  <li className="flex">
                    <span className="text-medium-pink mr-3 mt-1">▹</span>
                    <span className="text-lg">Java</span>
                  </li>
                  <li className="flex">
                    <span className="text-medium-pink mr-3 mt-1">▹</span>
                    <span className="text-lg">Python</span>
                  </li>
                  <li className="flex">
                    <span className="text-medium-pink mr-3 mt-1">▹</span>
                    <span className="text-lg">C#</span>
                  </li>
                  <li className="flex">
                    <span className="text-medium-pink mr-3 mt-1">▹</span>
                    <span className="text-lg">C++</span>
                  </li>
                  <li className="flex">
                    <span className="text-medium-pink mr-3 mt-1">▹</span>
                    <span className="text-lg">TypeScript</span>
                  </li>
                  <li className="flex">
                    <span className="text-medium-pink mr-3 mt-1">▹</span>
                    <span className="text-lg">React.js</span>
                  </li>
                </ul>
              </div>
              <div>
                <p className="text-[#8892b0] mb-6 font-light text-lg">
                  Outside of work, you'll find me playing chess, going for a run or hitting a lagree class. 
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;