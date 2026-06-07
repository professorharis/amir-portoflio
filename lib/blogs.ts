// lib/blogs.ts

import { CONFIG } from './config';

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  author: string;
  image: string;
  excerpt: string;
  content: string;
}

export const blogs: BlogPost[] = [
  {
    slug: 'my-journey-of-building-modern-apps',
    title: 'My Journey of Building Modern Apps: From Idea to Reality',
    date: 'February 18, 2026',
    author: 'Amir',
    image: '/blog1.jpg',
    excerpt: 'How I use modern technology to turn complex ideas into simple, fast, and user-friendly digital solutions.',
    content: `
      <p>Building apps is more than just writing code; it is about solving real-world problems. My goal has always been to create a digital ecosystem where every tool serves a purpose. Using <strong>Next.js</strong> and <strong>Tailwind CSS</strong>, I have focused on making things fast, beautiful, and easy for everyone to use.</p>

      <h2>The Vision Behind My Projects</h2>
      <p>I believe that technology should be accessible. Whether it is an educational platform or a simple utility tool, the user experience comes first. Here is a look at the core projects that define my work so far:</p>

      <h2>1. Personal Portfolio – My Digital Identity</h2>
      <p>This is where everything starts. My portfolio is designed to show my skills in modern web development. I used <strong>Next.js</strong> for speed and <strong>Framer Motion</strong> for smooth animations. It is not just a website; it is a reflection of my commitment to quality and clean design.</p>

      <h2>2. Eduka – Simplifying Education</h2>
      <p>Eduka was built with a clear mission: to make learning platforms better for students and teachers. I focused on clean layouts and mobile responsiveness. The goal was to ensure that even with a lot of content, the website stays fast and easy to navigate. It represents my approach to building professional landing pages for institutions.</p>

      <h2>3. Convertify – Useful Tools for Everyone</h2>
      <p>Convertify is a practical tool designed for daily use. It allows users to convert files quickly without any complicated steps. This project taught me how to handle data processing and server-side logic while keeping the interface as simple as possible. It is a perfect example of "utility at scale."</p>

      <h2>My Core Philosophy: Simple & Fast</h2>
      <p>Why do I use Next.js? Because in 2026, speed is everything. My development process follows three simple rules:</p>
      <ul>
        <li><strong>Clean Code:</strong> Making sure the backend is organized and maintainable.</li>
        <li><strong>User-First Design:</strong> Ensuring anyone can use the app without a manual.</li>
        <li><strong>Global Reach:</strong> Deploying on high-performance servers like Vercel for instant access worldwide.</li>
      </ul>

      <h2>What’s Next?</h2>
      <p>This is just the beginning of the <strong>Amir</strong> ecosystem. I am constantly working on new ideas, from AI-integrated tools to more advanced educational platforms. My journey is about continuous learning and building better solutions every day.</p>

      <p>Explore my work live:</p>
      <ul>
        <li><a href="/" style="color: #FF4D1C; font-weight: bold;">My Portfolio</a></li>
        <li><a href="https://eduka-example.vercel.app" target="_blank" rel="noopener noreferrer" style="color: #FF4D1C; font-weight: bold;">Eduka Platform</a></li>
        <li><a href="https://convertify-example.vercel.app" target="_blank" rel="noopener noreferrer" style="color: #FF4D1C; font-weight: bold;">Convertify Tool</a></li>
      </ul>
    `,
  },
  {
    slug: 'how-i-build-fast-and-reliable-websites',
    title: 'How I Build Fast and Reliable Websites for Clients',
    date: 'February 20, 2026',
    author: 'Amir',
    image: '/blog2.jpg',
    excerpt: 'A look into my professional workflow and the modern tools I use to create high-performance digital experiences.',
    content: `
      <p>In today's digital world, a website is more than just an online address—it is a business tool. For a website to be successful, it needs to be two things: <strong>fast</strong> and <strong>reliable</strong>. Here is how I ensure every project I deliver meets these professional standards.</p>

      <h2>1. Choosing the Right Tech Stack</h2>
      <p>I don't just build websites; I build high-performance machines. By using <strong>Next.js 15</strong>, I ensure that pages load almost instantly. For styling, I use <strong>Tailwind CSS</strong>, which allows me to create beautiful, custom designs that work perfectly on mobile, tablet, and desktop screens.</p>

      <h2>2. Speed is a Priority</h2>
      <p>Did you know that most users leave a website if it takes more than 3 seconds to load? I optimize every image, use clean code, and leverage server-side rendering to make sure your visitors never have to wait. Fast websites not only keep users happy but also rank higher on Google.</p>

      <h2>3. User-Centric Design</h2>
      <p>A professional website must be easy to use. I focus on "Clean UI/UX," which means the design is simple, the navigation is clear, and the call-to-action buttons are easy to find. My goal is to guide your visitors exactly where you want them to go.</p>

      <h2>4. Reliable Deployment & Security</h2>
      <p>I use <strong>Vercel</strong> for deployment, which provides 99.9% uptime and global speed. This means your website will always be online and secure, no matter where your clients are located. I also ensure that all forms (like the ones powered by Formspree) and interactive elements work flawlessly every time.</p>

      <h2>Why Work With Me?</h2>
      <p>When you hire me for a project, you are not just getting a coder. You are getting a partner who cares about your business growth. I provide:</p>
      <ul>
        <li><strong>Clear Communication:</strong> I keep you updated at every step of the process.</li>
        <li><strong>Quality Assurance:</strong> Every site is tested for bugs before it goes live.</li>
        <li><strong>On-Time Delivery:</strong> I respect your deadlines and deliver results as promised.</li>
      </ul>

      <p>Ready to start your next project? Let’s build something amazing together!</p>
      
      <div style="margin-top: 30px; padding: 20px; background-color: #f9f9f9; border-left: 5px solid #FF4D1C; border-radius: 10px;">
        <p style="margin: 0; font-weight: bold;">"A great website is an investment that pays for itself."</p>
      </div>
    `,
  },
];