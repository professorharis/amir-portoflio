"use client";

import { motion } from "framer-motion";
import { Calendar, User, Clock } from "lucide-react";

// Define a type for the blog prop (adjust according to your actual type)
interface BlogPost {
  slug: string;
  title: string;
  author: string;
  date: string;
  image: string;
  content: string;
  excerpt?: string;
}

export default function BlogPostClient({ blog }: { blog: BlogPost }) {
  // Important words for smart highlight – adjust as needed
  const importantWords = ['Modern', 'Apps', 'Fast', 'Reliable', 'Websites', 'Journey', 'Build'];
  const titleWords = blog.title.split(' ');
  let highlightCount = 0; // limit to two highlighted words

  // Simple reading time estimate (assuming 200 words per minute)
  const wordCount = blog.content.replace(/<[^>]*>/g, '').split(/\s+/).length;
  const readingTime = Math.max(1, Math.ceil(wordCount / 200));

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100"
    >
      {/* Hero image at top for mobile, side-by-side on desktop */}
      <div className="relative md:hidden w-full h-64 overflow-hidden">
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
      </div>

      <div className="p-6 md:p-10">
        {/* Header with image on the side - professional layout */}
        <div className="flex flex-col md:flex-row gap-6 md:gap-8 mb-8">
          {/* Title and meta */}
          <div className="md:w-2/3">
            {/* Meta info with improved spacing */}
            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-4">
              <span className="flex items-center gap-1.5 bg-gray-100 px-3 py-1 rounded-full">
                <User size={14} className="text-[#FF4D1C]" />
                <span className="font-medium">{blog.author}</span>
              </span>
              <span className="flex items-center gap-1.5">
                <Calendar size={14} className="text-[#FF4D1C]" />
                <span>{blog.date}</span>
              </span>
              <span className="flex items-center gap-1.5">
                <Clock size={14} className="text-[#FF4D1C]" />
                <span>{readingTime} min read</span>
              </span>
            </div>

            {/* Title with smart highlights - underline removed */}
            <h1 className="text-3xl sm:text-4xl md:text-4xl font-bold leading-tight tracking-tight">
              {titleWords.map((word, index) => {
                const cleanWord = word.replace(/[^\w]/g, '');
                const isImportant = importantWords.includes(cleanWord);
                let highlighted = false;
                if (isImportant && highlightCount < 2) {
                  highlighted = true;
                  highlightCount++;
                }
                return (
                  <span
                    key={index}
                    className={highlighted ? 'text-[#FF4D1C]' : 'text-[#1A1A1A]'}
                  >
                    {word}{' '}
                  </span>
                );
              })}
            </h1>
            <span className="block w-20 h-1 bg-[#FF4D1C] mt-6 rounded-full"></span>
          </div>

          {/* Side image - hidden on mobile, visible on desktop */}
          <div className="hidden md:block md:w-1/3 flex-shrink-0">
            <div className="relative group">
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-auto max-h-80 object-cover rounded-2xl shadow-lg transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-black/10"></div>
            </div>
          </div>
        </div>

        {/* Blog Content – refined typography with smaller subheadings */}
        <div
          className="prose prose-base sm:prose-lg max-w-none
            prose-headings:text-[#1A1A1A] 
            prose-h2:text-lg sm:prose-h2:text-xl md:prose-h2:text-2xl prose-h2:font-bold prose-h2:mt-10 prose-h2:mb-3 prose-h2:tracking-tight
            prose-h3:text-base sm:prose-h3:text-lg prose-h3:font-semibold prose-h3:mt-6 prose-h3:mb-2
            prose-p:text-gray-600 prose-p:leading-relaxed prose-p:text-base sm:prose-p:text-lg prose-p:mb-5
            prose-strong:text-[#FF4D1C] prose-strong:font-semibold
            prose-b:text-[#FF4D1C] prose-b:font-semibold
            prose-ul:list-disc prose-ul:pl-6 prose-ul:text-base sm:prose-ul:text-lg prose-ul:space-y-1.5
            prose-a:text-[#FF4D1C] prose-a:font-medium hover:prose-a:underline
            prose-blockquote:border-l-4 prose-blockquote:border-[#FF4D1C] prose-blockquote:pl-4 prose-blockquote:italic prose-blockquote:text-gray-600
            prose-img:rounded-xl prose-img:shadow-md prose-img:mx-auto"
        >
          <div dangerouslySetInnerHTML={{ __html: blog.content }} />
        </div>

        {/* Bottom Tags with better styling */}
        <div className="mt-12 pt-6 border-t border-gray-100">
          <div className="flex flex-wrap gap-2">
            <span className="px-4 py-2 bg-gray-100 text-sm font-medium text-gray-700 rounded-full hover:bg-[#FF4D1C]/10 transition-colors cursor-default">
              Next.js
            </span>
            <span className="px-4 py-2 bg-gray-100 text-sm font-medium text-gray-700 rounded-full hover:bg-[#FF4D1C]/10 transition-colors cursor-default">
              Professional Dev
            </span>
            <span className="px-4 py-2 bg-gray-100 text-sm font-medium text-gray-700 rounded-full hover:bg-[#FF4D1C]/10 transition-colors cursor-default">
              Web Performance
            </span>
          </div>
        </div>
      </div>
    </motion.article>
  );
}