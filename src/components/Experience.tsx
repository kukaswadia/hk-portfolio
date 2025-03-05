'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Define experience data
const experienceData = [
  {
    company: "LLOYDS BANKING GROUP",
    title: "Software Development Engineer",
    period: "SEP 2023 - PRESENT",
    responsibilities: [
        "Engineered Java Spring Boot microservice APIs and event listeners for real-time integration with third-party fraud detection systems, implementing Spring Task Executors and Dependency Injection patterns to process 5M+ daily transactions.",
        // "Implemented event-driven architecture using Apache Kafka with custom serializers/deserializers and Kafka Streams for real-time transaction monitoring and fraud detection",
        "Built automated testing frameworks using Selenium WebDriver with TestNG for UI regression testing, achieving 85% test automation coverage across critical banking applications.",
        "Orchestrated CI/CD pipelines with Jenkins, Docker, and Kubernetes, streamlining development workflows and reducing release cycles from weeks to days."
    ]
  },
//   {
//     company: "MAJESTIC CERAMICS",
//     title: "Software Engineer",
//     period: "OCT 2022 - AUG 2023",
//     responsibilities: [
//       "Developed and maintained key features for the Wattpad platform, helping millions of writers share their stories with a global audience.",
//       "Optimized web performance resulting in a 25% improvement in page load times and better user engagement metrics."
//     ]
//   },
  {
    company: "ADIRANI DIGITAL SOLUTIONS",
    title: "Software Developer",
    period: "MAY 2022 - AUG 2023",
    responsibilities: [
        "Architected and engineered enterprise-grade SaaS solutions leveraging React.js, Node.js, and GraphQL to deliver scalable client applications with 99.9% uptime.",
        "Implemented complex client-side state management solutions with Redux and Context API, enabling real-time data synchronization across application modules.",
        "Developed custom Progressive Web Applications (PWAs) with offline capabilities and push notifications, increasing mobile user retention by 35%."
    ]
  },
  {
    company: "LANCASTER UNIVERSITY",
    title: "ITPI Full Stack Developer",
    period: "OCT 2021 - APR 2022",
    responsibilities: [
        "Architected and maintained scalable backend systems using C# and .NET Core, serving 20,000+ students and faculty members.",
        "Designed and implemented RESTful APIs and microservices using ASP.NET Web API, enabling seamless integration between university systems.",
        "Implemented CI/CD pipelines with Azure DevOps and GitHub Actions, reducing deployment time by 60%.",
    ]
  },
  {
    company: "GARCHI",
    title: "Software Developer Intern",
    period: "MAY 2020 - JUNE 2020",
    responsibilities: [
        "Developed RESTful API endpoints using Node.js and Express, facilitating seamless data flow between frontend applications and backend services.",
        "Optimized database queries in MongoDB, reducing load times for customer-facing features by 30%.",
        "Implemented automated testing with Jest and React Testing Library, increasing code coverage from 65% to 85%."
    ]
  }
];

const Experience = () => {
  const [activeTab, setActiveTab] = useState(0);

  
  return (
    <section id="experience" className="section py-24 bg-darkest-bg">
      <div className="max-w-5xl mx-auto px-6 md:px-0">
        <div className="mb-16">
        <motion.div 
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
  viewport={{ once: true }}
  className="mb-16"
>
  <h2 className="heading">Experience</h2>
  <div className="w-20 h-1 bg-medium-pink mt-2 mb-8"></div>
</motion.div>
          {/* <h2 className="text-4xl md:text-5xl font-light text-[#ccd6f6] mb-4 flex items-center">
            <span className="text-medium-pink mr-4">/</span>experience
          </h2> */}
          {/* <div className="h-px bg-gray-700 opacity-60 w-44 md:w-80 mt-2"></div> */}
        </div>

        <div className="flex flex-col md:flex-row">
          {/* Company tabs - Left Side */}
          <div className="md:w-48 mb-6 md:mb-0 border-l border-gray-700 bg-transparent">
            <div className="flex flex-row md:flex-col overflow-x-auto md:overflow-visible">
              {experienceData.map((exp, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTab(index)}
                  className={`py-3 px-5 text-left transition-all duration-300 font-light tracking-wider ${
                    activeTab === index 
                      ? 'text-medium-pink border-l-2 border-medium-pink -ml-[2px]' 
                      : 'text-[#8892b0] hover:text-[#ccd6f6] hover:bg-dark-bg border-l-2 border-transparent -ml-[2px]'
                  }`}
                >
                  {exp.company}
                </button>
              ))}
            </div>
          </div>

          {/* Experience details - Right Side */}
          <div className="md:flex-1 md:pl-20">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: 10, y: 0 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                exit={{ opacity: 0, x: -10, y: 0 }}
                transition={{ 
                  type: "spring", 
                  stiffness: 300, 
                  damping: 30, 
                  duration: 0.2 
                }}
              >
                <h3 className="text-2xl font-light mb-1 text-[#ccd6f6]">
                  {experienceData[activeTab].title}{' '}
                  <span className="text-medium-pink">@ {experienceData[activeTab].company}</span>
                </h3>
                
                <p className="text-sm text-[#8892b0] mb-8 font-light">
                  {experienceData[activeTab].period}
                </p>

                <ul className="space-y-6">
                  {experienceData[activeTab].responsibilities.map((responsibility, index) => (
                    <li key={index} className="flex">
                      <span className="text-medium-pink mr-3 mt-1">▹</span>
                      <span className="text-[#8892b0] font-light leading-relaxed max-w-xl">
                        {responsibility}
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;