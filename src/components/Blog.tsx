'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';

// Sample blog posts data
const blogPosts = [
  {
    id: 1,
    title: "Building Resilient Microservices: Lessons from the Banking Industry",
    date: "February 25, 2025",
    excerpt: "Exploring how financial institutions implement fault-tolerant distributed systems and what developers across industries can learn from these practices.",
    tags: ["Microservices", "System Design", "Resilience"],
    slug: "building-resilient-microservices"
  },
  {
    id: 2,
    title: "Deep Dive into Java's Concurrency API",
    date: "January 15, 2025",
    excerpt: "An exploration of Java's concurrency tools and patterns for building highly performant multi-threaded applications.",
    tags: ["Java", "Concurrency", "Performance"],
    slug: "java-concurrency-api"
  },
  {
    id: 3,
    title: "Algorithmic Problem-Solving: Strategies That Work",
    date: "December 8, 2024",
    excerpt: "Breaking down complex algorithm problems and the systematic approaches I use to solve them efficiently.",
    tags: ["Algorithms", "Problem Solving", "Coding Interviews"],
    slug: "algorithmic-problem-solving"
  },
  {
    id: 4,
    title: "From React to Next.js: A Migration Story",
    date: "November 20, 2024",
    excerpt: "My experience migrating a complex React application to Next.js and the performance gains we achieved.",
    tags: ["React", "Next.js", "Frontend"],
    slug: "react-to-nextjs-migration"
  },
  {
    id: 5,
    title: "The Most Underrated TypeScript Features You Should Be Using",
    date: "October 5, 2024",
    excerpt: "Exploring lesser-known TypeScript features that can dramatically improve your code quality and developer experience.",
    tags: ["TypeScript", "JavaScript", "Best Practices"],
    slug: "underrated-typescript-features"
  }
];

// Extract all unique tags using a more TypeScript-friendly approach
const allTags: string[] = Array.from(
  new Set(blogPosts.flatMap(post => post.tags))
);

const Blog = () => {
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  
  // Filter posts based on selected tag
  const filteredPosts = selectedTag
    ? blogPosts.filter(post => post.tags.includes(selectedTag))
    : blogPosts;

  return (
    <section id="blog" className="section py-24 bg-darkest-bg">
      <div className="max-w-5xl mx-auto px-6 md:px-0">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="heading">Writing</h2>
          <div className="w-20 h-1 bg-medium-pink mt-2 mb-8"></div>
          <p className="text-[#8892b0] text-lg mb-6">
            Sharing my thoughts on software development, algorithms, and technology.
          </p>
        </motion.div>

        {/* Tag filters */}
        <div className="mb-10">
          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => setSelectedTag(null)}
              className={`px-3 py-1 rounded-full text-sm transition-colors ${
                selectedTag === null 
                  ? 'bg-medium-pink text-white' 
                  : 'bg-dark-bg text-gray-300 hover:bg-[#3a2a31]'
              }`}
            >
              All
            </button>
            {allTags.map(tag => (
              <button
                key={tag}
                onClick={() => setSelectedTag(tag)}
                className={`px-3 py-1 rounded-full text-sm transition-colors ${
                  selectedTag === tag 
                    ? 'bg-medium-pink text-white' 
                    : 'bg-dark-bg text-gray-300 hover:bg-[#3a2a31]'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        {/* Blog posts */}
        <div className="space-y-8">
          {filteredPosts.map((post) => (
            <motion.div 
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-dark-bg rounded-2xl p-8 transition-all duration-300 hover:-translate-y-2 hover:bg-[#3a2a31]"
            >
              <Link href={`/blog/${post.slug}`} className="block group">
                <span className="text-gray-400 text-sm mb-2 block">{post.date}</span>
                <h3 className="text-2xl font-medium text-[#ccd6f6] mb-3 group-hover:text-medium-pink transition-colors">
                  {post.title}
                </h3>
                <p className="text-gray-300 mb-4 text-lg">
                  {post.excerpt}
                </p>
                <div className="flex flex-wrap gap-2 mb-2">
                  {post.tags.map(tag => (
                    <span 
                      key={tag} 
                      className="text-xs px-2 py-1 bg-darkest-bg rounded text-gray-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <span className="text-medium-pink font-semibold inline-block mt-2">
                  Read more →
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;