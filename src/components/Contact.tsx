'use client';

import { motion } from 'framer-motion';
import { FiMail, FiLinkedin, FiGithub, FiTwitter } from 'react-icons/fi';

const Contact = () => {
  return (
    <section id="contact" className="section bg-darkest-bg">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="heading">Get In Touch</h2>
          <div className="w-20 h-1 bg-medium-pink mx-auto mt-2 mb-8"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="subheading mb-4">Contact Me</h3>
            <p className="text-gray-300 mb-6">
              I'm currently open to new opportunities and collaborations. Feel free to reach out if you have a project in mind or just want to connect!
            </p>
            
            <div className="space-y-4">
              <a 
                href="mailto:contact@hudakukaswadia.com" 
                className="flex items-center text-gray-300 hover:text-light-pink transition-colors"
              >
                <span className="mr-3 text-medium-pink">
                  <FiMail size={20} />
                </span>
                contact@hudakukaswadia.com
              </a>
              
              <div className="flex space-x-6 mt-8">
                <a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-light-pink transition-colors"
                  aria-label="LinkedIn profile"
                >
                  <FiLinkedin size={24} />
                </a>
                <a 
                  href="https://github.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-light-pink transition-colors"
                  aria-label="GitHub profile"
                >
                  <FiGithub size={24} />
                </a>
                <a 
                  href="https://twitter.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-light-pink transition-colors"
                  aria-label="Twitter profile"
                >
                  <FiTwitter size={24} />
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-300 mb-2">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full px-4 py-3 bg-dark-bg border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-medium-pink"
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-gray-300 mb-2">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full px-4 py-3 bg-dark-bg border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-medium-pink"
                  placeholder="Your email"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-gray-300 mb-2">Message</label>
                <textarea 
                  id="message" 
                  rows={5}
                  className="w-full px-4 py-3 bg-dark-bg border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-medium-pink resize-none"
                  placeholder="Your message"
                />
              </div>
              
              <button 
                type="submit" 
                className="btn btn-primary w-full"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;