'use client';

import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { FiGithub, FiExternalLink, FiChevronLeft, FiChevronRight, FiFolder } from 'react-icons/fi';

// Featured project data (for slider)
const featuredProjects = [
  {
    title: "Finance Data API",
    description: "A robust data engineering solution for extracting, processing, and analyzing financial data from SEC filings and earnings reports. Still working on it, please check back later",
    image: "/images/project1.jpg",
    tags: ["Python"],
    github: "https://github.com/kukaswadia/financialData_API",
    demo: "https://github.com/kukaswadia/financialData_API"
  },
  {
    title: "Lorem ipsum",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: "/images/project2.jpg",
    tags: ["Next.js", "TypeScript", "MongoDB"],
    github: "https://github.com",
    demo: "https://example.com"
  },
  {
    title: "Lorem ipsum",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: "/images/project3.jpg",
    tags: ["React Native", "Firebase", "Redux"],
    github: "https://github.com",
    demo: "https://example.com"
  },
  {
    title: "Lorem ipsum",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: "/images/project1.jpg", // Placeholder - replace with actual image
    tags: ["Vue.js", "D3.js", "Tailwind CSS"],
    github: "https://github.com",
    demo: "https://example.com"
  }
];

// Other projects data (for grid)
const otherProjects = [
  {
    title: "URL Shortener",
    description: "An efficient URL shortener that converts long links into compact, shareable URLs with redirection support.",
    tags: ["Java", "Springboot"],
    github: "https://github.com/kukaswadia/url_shortener",
    demo: "https://hk-tinyurl.up.railway.app/"
  },
  {
    title: "Path Finding Visualizer",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    tags: ["React", "Food API", "CSS"],
    github: "https://github.com/kukaswadia/PathFindingVisualizer",
    demo: "https://example.com"
  },
  {
    title: "Personal Wastebin",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    tags: ["JavaScript"],
    github: "https://github.com/kukaswadia/Personalwastebin",
    demo: "https://example.com"
  },
  {
    title: "Portfolio Template",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    tags: ["HTML", "SCSS", "JavaScript"],
    github: "https://github.com",
    demo: "https://example.com"
  },
  {
    title: "Lorem ipsum",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    tags: ["React", "Web Audio API"],
    github: "https://github.com",
    demo: "https://example.com"
  },
  {
    title: "Lorem ipsum",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    tags: ["Socket.io", "Express", "MongoDB"],
    github: "https://github.com",
    demo: "https://example.com"
  }
];

const Projects = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);
  const autoPlayRef = useRef<NodeJS.Timeout>();
  const pausedRef = useRef(false);

  const nextProject = () => {
    setActiveIndex((prev) => (prev === featuredProjects.length - 1 ? 0 : prev + 1));
  };

  const prevProject = () => {
    setActiveIndex((prev) => (prev === 0 ? featuredProjects.length - 1 : prev - 1));
  };

  // Auto-slide functionality
  useEffect(() => {
    // Start the auto-slide
    const startAutoPlay = () => {
      autoPlayRef.current = setInterval(() => {
        if (!pausedRef.current) {
          nextProject();
        }
      }, 5000); // Change slide every 5 seconds
    };

    startAutoPlay();

    // Pause auto-slide when user interacts with slider
    const pauseAutoPlay = () => {
      pausedRef.current = true;
    };

    // Resume auto-slide after a delay when user stops interacting
    const resumeAutoPlay = () => {
      pausedRef.current = false;
    };

    // Add event listeners to pause/resume on hover
    const sliderElement = sliderRef.current;
    if (sliderElement) {
      sliderElement.addEventListener('mouseenter', pauseAutoPlay);
      sliderElement.addEventListener('mouseleave', resumeAutoPlay);
    }

    // Clean up
    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
      if (sliderElement) {
        sliderElement.removeEventListener('mouseenter', pauseAutoPlay);
        sliderElement.removeEventListener('mouseleave', resumeAutoPlay);
      }
    };
  }, []);

  return (
    <section id="projects" className="section py-24 bg-darkest-bg">
      <div className="max-w-5xl mx-auto px-6 md:px-0">
        {/* <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-14"
        >
          <h2 className="text-4xl md:text-5xl font-light text-[#ccd6f6] mb-4 flex items-center">
            <span className="text-medium-pink mr-4">/</span>projects
          </h2>
          <div className="h-px bg-gray-700 opacity-60 w-44 md:w-80 mt-2"></div>
        </motion.div> */}

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="heading">Projects</h2>
          <div className="w-20 h-1 bg-medium-pink mt-2 mb-8"></div>
        </motion.div>

        {/* Featured Projects Slider */}
        <div className="relative mb-24">
          {/* Navigation Arrows */}
          <button 
            onClick={prevProject}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 z-30 text-5xl text-white opacity-70 hover:opacity-100 transition-opacity focus:outline-none"
            aria-label="Previous project"
          >
            <FiChevronLeft />
          </button>
          
          <button 
            onClick={nextProject}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 z-30 text-5xl text-white opacity-70 hover:opacity-100 transition-opacity focus:outline-none"
            aria-label="Next project"
          >
            <FiChevronRight />
          </button>

          {/* Slider Container */}
          <div className="overflow-hidden rounded-3xl" ref={sliderRef}>
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {featuredProjects.map((project, index) => (
                <div 
                  key={index} 
                  className="w-full flex-shrink-0"
                >
                  <div className="relative rounded-3xl overflow-hidden h-[500px] bg-gradient-to-r from-slate-700 to-slate-500 transition-transform duration-300 hover:scale-[1.02] hover:shadow-xl">
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent z-10"></div>
                    
                    {/* Background image */}
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover object-center opacity-50"
                      placeholder="blur"
                      blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z/C/HgAGgwJ/lK3Q6wAAAABJRU5ErkJggg=="
                    />
                    
                    {/* Content overlay */}
                    <div className="absolute inset-0 z-20 flex flex-col justify-center items-center text-center p-8">
                      <h3 className="text-5xl font-bold mb-4 text-white">{project.title}</h3>
                      <p className="text-xl max-w-2xl mb-6 text-gray-200">{project.description}</p>
                      
                      {/* Tech tags */}
                      <div className="mb-8">
                        {project.tags.map((tag, i) => (
                          <span key={i} className="inline-block mx-2 text-gray-300">
                            {tag}{i < project.tags.length - 1 ? '' : ''}
                          </span>
                        ))}
                      </div>
                      
                      {/* Links */}
                      <div className="flex justify-center space-x-6">
                        <a 
                          href={project.github} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-3xl text-white hover:text-medium-pink transition-colors"
                          aria-label="View source code on GitHub"
                        >
                          <FiGithub />
                        </a>
                        <a 
                          href={project.demo} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-3xl text-white hover:text-medium-pink transition-colors"
                          aria-label="View live demo"
                        >
                          <FiExternalLink />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center mt-8 space-x-2">
            {featuredProjects.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  activeIndex === index ? 'bg-medium-pink w-8' : 'bg-gray-600 hover:bg-gray-500'
                }`}
                aria-label={`Go to project ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Other Projects Grid */}
        <div>
          <h3 className="text-2xl font-light mb-8 text-center text-[#ccd6f6]">Other Noteworthy Projects</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {otherProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="h-full bg-[#1f1520] rounded-2xl p-7 flex flex-col transition-all duration-300 transform group-hover:-translate-y-2 group-hover:bg-[#2a1a22]">
                  <div className="flex justify-between items-center mb-7">
                    <div className="text-medium-pink text-4xl">
                      <FiFolder />
                    </div>
                    <div className="flex space-x-4">
                      <a 
                        href={project.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-2xl text-gray-300 hover:text-medium-pink transition-colors"
                        aria-label="View source code on GitHub"
                      >
                        <FiGithub />
                      </a>
                      <a 
                        href={project.demo} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-2xl text-gray-300 hover:text-medium-pink transition-colors"
                        aria-label="View live demo"
                      >
                        <FiExternalLink />
                      </a>
                    </div>
                  </div>
                  
                  <h4 className="text-xl font-semibold mb-2 text-gray-200 group-hover:text-medium-pink transition-colors">
                    {project.title}
                  </h4>
                  
                  <p className="text-gray-400 mb-5 flex-grow font-light">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap pt-3 text-gray-500 text-sm">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="mr-4">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;