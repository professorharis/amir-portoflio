import { notFound } from 'next/navigation';
import { blogs } from '@/lib/blogs';
import { CONFIG } from "@/lib/config";
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import BlogPostClient from './BlogPostClient';

export async function generateStaticParams() {
  return blogs.map((blog) => ({ slug: blog.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const blog = blogs.find((b) => b.slug === slug);
  return {
    title: blog?.title ?? 'Blog Not Found',
    description: blog?.excerpt,
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const decodedSlug = decodeURIComponent(slug);
  const blog = blogs.find((b) => b.slug === decodedSlug);

  if (!blog) notFound();

  return (
    <main className="bg-gradient-to-br from-gray-50 to-white text-[#1A1A1A] font-sans antialiased min-h-screen py-6 md:py-12">
      {/* Subtle background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#FF4D1C]/5 rounded-full blur-3xl"></div>
        <div className="absolute top-60 -left-20 w-60 h-60 bg-[#FF4D1C]/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative container mx-auto max-w-4xl px-4 sm:px-6">
        {/* Back Button - with improved styling */}
        <Link
          href="/#blog"
          className="inline-flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-[#FF4D1C] mb-6 md:mb-8 transition-colors group"
        >
          <span className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-[#FF4D1C] group-hover:text-white transition-colors duration-300">
            <ArrowLeft size={16} />
          </span>
          <span>Back </span>
        </Link>

        {/* Use the Client Component for the animated article */}
        <BlogPostClient blog={blog} />
      </div>
    </main>
  );
}