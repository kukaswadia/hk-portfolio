'use client';

import { motion } from 'framer-motion';
import { FiGithub } from 'react-icons/fi';

interface GitHubHeatmapProps {
  username: string;
}

const GitHubHeatmap = ({ username }: GitHubHeatmapProps) => {
  return (
    <section id="github" className="section py-24 bg-dark-bg dark:bg-dark-bg light:bg-white">
      <div className="max-w-5xl mx-auto px-6 md:px-0">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="heading flex items-center">
            <FiGithub className="mr-4 text-medium-pink" />
            GitHub Activity
          </h2>
          <div className="w-20 h-1 bg-medium-pink mt-2 mb-8"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-darkest-bg dark:bg-darkest-bg light:bg-slate-50 rounded-2xl p-6 md:p-8"
        >
          {/* GitHub Contribution Graph using external service */}
          <div className="overflow-x-auto">
            <img 
              src={`https://ghchart.rshah.org/${username}`}
              alt={`${username}'s GitHub contribution graph`}
              className="w-full max-w-full h-auto"
              style={{ minWidth: '700px' }}
            />
          </div>

          {/* Alternative: Using GitHub Readme Stats */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex justify-center">
              <img 
                src={`https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true&theme=radical&hide_border=true&bg_color=1a0e12&title_color=b92e62&icon_color=e65c8a&text_color=ccd6f6`}
                alt={`${username}'s GitHub stats`}
                className="w-full h-auto"
              />
            </div>
            <div className="flex justify-center">
              <img 
                src={`https://github-readme-streak-stats.herokuapp.com/?user=${username}&theme=radical&hide_border=true&background=1a0e12&ring=b92e62&fire=e65c8a&currStreakLabel=ccd6f6&sideLabels=ccd6f6&currStreakNum=ccd6f6&dates=8892b0&sideNums=ccd6f6`}
                alt={`${username}'s GitHub streak`}
                className="w-full h-auto"
              />
            </div>
          </div>

          {/* Top Languages */}
          <div className="mt-8 flex justify-center">
            <img 
              src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${username}&layout=compact&theme=radical&hide_border=true&bg_color=1a0e12&title_color=b92e62&text_color=ccd6f6`}
              alt={`${username}'s top languages`}
              className="w-full max-w-md h-auto"
            />
          </div>

          {/* Link to GitHub Profile */}
          <div className="mt-8 text-center">
            <a 
              href={`https://github.com/${username}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-3 border-2 border-medium-pink rounded-md text-medium-pink hover:bg-medium-pink hover:bg-opacity-10 transition-all duration-300"
            >
              <FiGithub className="mr-2" size={20} />
              View GitHub Profile
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default GitHubHeatmap;