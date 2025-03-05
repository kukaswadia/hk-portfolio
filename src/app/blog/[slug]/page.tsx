'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { useParams } from 'next/navigation';
import { FiArrowLeft, FiCalendar, FiTag } from 'react-icons/fi';

// Sample blog posts data (same as in Blog.tsx)
const blogPosts = [
  {
    id: 1,
    title: "Building Resilient Microservices: Lessons from the Banking Industry",
    date: "February 25, 2025",
    excerpt: "Exploring how financial institutions implement fault-tolerant distributed systems and what developers across industries can learn from these practices.",
    content: `
      <p>As a Software Development Engineer at Lloyds Banking Group, I've had the opportunity to work with microservices architectures at scale. Financial institutions face unique challenges when it comes to system reliability—downtime isn't just an inconvenience, it can have serious financial and regulatory consequences.</p>
      
      <p>In this article, I'll share some of the key patterns and practices we've implemented to build resilient microservices that can withstand various types of failures.</p>
      
      <h3>Circuit Breakers: Preventing Cascading Failures</h3>
      
      <p>One of the most important patterns we've implemented is the circuit breaker pattern. When a service dependency begins to fail, a circuit breaker can detect this and "trip," preventing further calls to the failing service. This stops the failure from cascading throughout the system.</p>
      
      <p>We've found that implementing circuit breakers with configurable thresholds and half-open states allows us to gracefully handle temporary failures without requiring manual intervention.</p>
      
      <h3>Bulkheads: Isolating Failure Domains</h3>
      
      <p>Another critical pattern is the bulkhead pattern, inspired by ship design. By partitioning service instances and resources, we ensure that failures in one area don't sink the entire ship.</p>
      
      <p>For example, we maintain separate connection pools for different types of database operations, ensuring that slow-running queries don't exhaust connection resources for critical, quick operations.</p>
      
      <h3>Lessons Learned</h3>
      
      <p>Building truly resilient systems isn't just about implementing patterns—it's about shifting how we think about failure. Here are some key lessons:</p>
      
      <ul>
        <li>Failure is inevitable—design for it rather than treating it as an exceptional case</li>
        <li>Test your resilience mechanisms regularly with chaos engineering practices</li>
        <li>Monitor not just services but also the health of your resilience mechanisms</li>
        <li>Document failure modes and recovery procedures for each service</li>
      </ul>
      
      <p>These practices have helped us maintain high availability even during significant infrastructure events, and the principles apply across industries, not just in financial services.</p>
    `,
    tags: ["Microservices", "System Design", "Resilience"],
    slug: "building-resilient-microservices"
  },
  {
    id: 2,
    title: "Deep Dive into Java's Concurrency API",
    date: "January 15, 2025",
    excerpt: "An exploration of Java's concurrency tools and patterns for building highly performant multi-threaded applications.",
    content: `
      <p>Java's concurrency API has evolved significantly since the early days of Thread and Runnable. In this post, I'll dive deep into the modern concurrency tools available in Java and how to use them effectively.</p>
      
      <h3>The Evolution of Java Concurrency</h3>
      
      <p>Java's approach to concurrency has matured over the years:</p>
      
      <ul>
        <li>JDK 1.0: Basic Thread and Runnable</li>
        <li>JDK 5: ExecutorService, Future, and concurrent collections</li>
        <li>JDK 7: Fork/Join framework</li>
        <li>JDK 8: CompletableFuture</li>
        <li>JDK 9+: Reactive Streams and Flow API</li>
      </ul>
      
      <p>Each iteration has brought more powerful abstractions that make concurrent programming more accessible and less error-prone.</p>
      
      <h3>CompletableFuture: Composable Asynchronous Programming</h3>
      
      <p>CompletableFuture is one of my favorite additions to Java. It allows for composing asynchronous operations in a readable and maintainable way. Instead of callback hell, you can chain operations:</p>
      
      <pre><code>
CompletableFuture.supplyAsync(() -> fetchUserData(userId))
    .thenApply(userData -> enrichWithPreferences(userData))
    .thenApply(userData -> filterSensitiveInfo(userData))
    .thenAccept(this::displayUserProfile)
    .exceptionally(ex -> {
        handleError(ex);
        return null;
    });
      </code></pre>
      
      <p>This approach makes the code flow much more readable and maintains the logical sequence of operations while still executing asynchronously.</p>
      
      <h3>Common Pitfalls and How to Avoid Them</h3>
      
      <p>Even with modern APIs, concurrent programming has its challenges:</p>
      
      <ol>
        <li>Thread pool sizing: Too few threads means underutilization; too many means context switching overhead. Profile your application to find the right balance.</li>
        <li>Resource leaks: Always properly shut down ExecutorServices to prevent application hanging on exit.</li>
        <li>Deadlocks: Use timeout versions of blocking operations where possible and maintain consistent lock ordering.</li>
      </ol>
      
      <p>In future posts, I'll dive deeper into specific aspects of Java concurrency and explore real-world use cases where these tools have made a significant difference in application performance.</p>
    `,
    tags: ["Java", "Concurrency", "Performance"],
    slug: "java-concurrency-api"
  },
  {
    id: 3,
    title: "Algorithmic Problem-Solving: Strategies That Work",
    date: "December 8, 2024",
    excerpt: "Breaking down complex algorithm problems and the systematic approaches I use to solve them efficiently.",
    content: "Full content of the blog post about algorithmic problem-solving...",
    tags: ["Algorithms", "Problem Solving", "Coding Interviews"],
    slug: "algorithmic-problem-solving"
  },
  {
    id: 4,
    title: "From React to Next.js: A Migration Story",
    date: "November 20, 2024",
    excerpt: "My experience migrating a complex React application to Next.js and the performance gains we achieved.",
    content: "Full content of the blog post about React to Next.js migration...",
    tags: ["React", "Next.js", "Frontend"],
    slug: "react-to-nextjs-migration"
  },
  {
    id: 5,
    title: "The Most Underrated TypeScript Features You Should Be Using",
    date: "October 5, 2024",
    excerpt: "Exploring lesser-known TypeScript features that can dramatically improve your code quality and developer experience.",
    content: "Full content of the blog post about TypeScript features...",
    tags: ["TypeScript", "JavaScript", "Best Practices"],
    slug: "underrated-typescript-features"
  }
];

export default function BlogPostPage() {
  const params = useParams();
  const slug = params.slug as string;
  
  // Find the matching blog post
  const post = blogPosts.find(post => post.slug === slug);
  
  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-darkest-bg">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-[#ccd6f6] mb-4">Post Not Found</h1>
          <p className="text-[#8892b0] mb-8">The blog post you're looking for doesn't exist.</p>
          <Link 
            href="/blog" 
            className="inline-flex items-center text-medium-pink hover:underline"
          >
            <FiArrowLeft className="mr-2" />
            Back to Blog
          </Link>
        </div>
      </div>
    );
  }
  
  return (
    <section className="pt-32 pb-24 bg-darkest-bg">
      <div className="max-w-4xl mx-auto px-6 md:px-0">
        <Link 
          href="/blog" 
          className="inline-flex items-center text-medium-pink hover:underline mb-8 block"
        >
          <FiArrowLeft className="mr-2" />
          Back to Blog
        </Link>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold text-[#ccd6f6] mb-6">{post.title}</h1>
          
          <div className="flex items-center gap-4 mb-8 text-gray-400">
            <div className="flex items-center">
              <FiCalendar className="mr-2" />
              <span>{post.date}</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {post.tags.map(tag => (
                <span 
                  key={tag} 
                  className="inline-flex items-center text-xs px-2 py-1 bg-dark-bg rounded"
                >
                  <FiTag className="mr-1" />
                  {tag}
                </span>
              ))}
            </div>
          </div>
          
          <div className="prose prose-xl prose-invert prose-pink max-w-none">
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
          </div>
        </motion.div>
      </div>
    </section>
  );
}