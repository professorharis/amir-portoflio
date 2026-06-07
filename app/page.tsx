"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

import {
  ArrowRight,
  ArrowUpRight,
  Menu,
  X,
  Star,
  Quote,
  CheckCircle2,
  Send,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

import { CONFIG } from "@/lib/config";
import { blogs } from "@/lib/blogs";
import { services, experience, portfolio } from "@/lib/data";

// -----------------------------------------------------------------------------
// Helper: reduce motion detection
// -----------------------------------------------------------------------------
const usePrefersReducedMotion = () => {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);
    const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, []);
  return prefersReducedMotion;
};

// -----------------------------------------------------------------------------
// Skip to content link (accessibility)
// -----------------------------------------------------------------------------
const SkipLink = () => (
  <a
    href="#main-content"
    className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 z-[100] bg-[#FF4D1C] text-white px-4 py-2 rounded-md"
  >
    Skip to main content
  </a>
);

// -----------------------------------------------------------------------------
// Navigation Bar (improved accessibility)
// -----------------------------------------------------------------------------
export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const closeBtnRef = useRef<HTMLButtonElement>(null);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  useEffect(() => {
    if (!isMenuOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeMenu();
      if (e.key === "Tab" && menuRef.current) {
        const focusable = menuRef.current.querySelectorAll(
          'a, button, [tabindex="0"]'
        );
        if (focusable.length === 0) return;
        const first = focusable[0] as HTMLElement;
        const last = focusable[focusable.length - 1] as HTMLElement;
        if (e.shiftKey && document.activeElement === first) {
          last.focus();
          e.preventDefault();
        } else if (!e.shiftKey && document.activeElement === last) {
          first.focus();
          e.preventDefault();
        }
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    closeBtnRef.current?.focus();
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isMenuOpen]);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Service", href: "#services" },
    { name: "Resume", href: "#resume" },
    { name: "Project", href: "#portfolio" },
    { name: "Contact Us", href: "#contact" },
  ];

  return (
    <>
      <SkipLink />
      <nav className="fixed top-6 left-0 right-0 z-[60] flex justify-center px-4">
        <div className="bg-[#1A1A1A] text-white rounded-full px-2 py-2 pl-6 pr-2 flex items-center gap-8 shadow-2xl max-w-5xl w-full justify-between">
          <Link href="/" className="flex items-center gap-2" aria-label="Home">
            <div className="w-8 h-8 bg-[#FF4D1C] rounded-full flex items-center justify-center font-bold text-white">
              A
            </div>
            <span className="font-bold text-lg">{CONFIG.name}</span>
          </Link>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-300">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="hover:text-[#FF4D1C] transition-colors">
                {link.name}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-3">
            <a
              href="#contact"
              className="hidden md:block bg-transparent text-white text-sm font-medium hover:text-[#FF4D1C]"
            >
              Let's talk us
            </a>
            <button
              onClick={toggleMenu}
              className="md:hidden p-2 text-white focus:outline-none focus:ring-2 focus:ring-[#FF4D1C] rounded-full"
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
            >
              <Menu size={18} />
            </button>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[60] md:hidden bg-black/50 backdrop-blur-sm"
            onClick={closeMenu}
          >
            <motion.div
              ref={menuRef}
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="absolute right-0 top-0 h-full w-64 bg-[#1A1A1A] shadow-2xl"
              onClick={(e) => e.stopPropagation()}
              role="dialog"
              aria-label="Mobile navigation menu"
            >
              <div className="flex justify-end p-6">
                <button
                  ref={closeBtnRef}
                  onClick={closeMenu}
                  className="text-white p-2 hover:text-[#FF4D1C] transition-colors focus:outline-none focus:ring-2 focus:ring-[#FF4D1C] rounded-full"
                  aria-label="Close menu"
                >
                  <X size={28} />
                </button>
              </div>
              <div className="flex flex-col items-center justify-start px-6 -mt-4">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={closeMenu}
                    className="text-white text-lg font-bold py-3 w-full text-center hover:text-[#FF4D1C] transition-colors border-b border-gray-800 last:border-0 focus:outline-none focus:ring-2 focus:ring-[#FF4D1C]"
                  >
                    {link.name}
                  </a>
                ))}
                <a
                  href="#contact"
                  onClick={closeMenu}
                  className="mt-6 bg-[#FF4D1C] text-white px-6 py-3 rounded-full font-bold text-base w-full text-center hover:bg-orange-600 transition-colors focus:outline-none focus:ring-2 focus:ring-white"
                >
                  Let's talk us
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

// -----------------------------------------------------------------------------
// Hero Section (optimized images, reduced motion)
// -----------------------------------------------------------------------------
const Hero = () => {
  const prefersReducedMotion = usePrefersReducedMotion();

  return (
    <section id="home" className="pt-26 pb-0 bg-white relative overflow-hidden flex flex-col items-center">
      <motion.div
        initial={prefersReducedMotion ? false : { y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="relative mb-2 border border-gray-200 px-6 py-2 rounded-full shadow-sm bg-white z-10"
      >
        <span className="font-medium text-gray-800 text-sm">Hello!</span>
        <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white border-b border-r border-gray-200 rotate-45"></div>
      </motion.div>

  <motion.h1
  initial={prefersReducedMotion ? false : { y: 30, opacity: 0 }}
  animate={{ y: 0, opacity: 1 }}
  className="text-3xl md:text-[4.5rem] font-semibold text-[#1A1A1A] text-center leading-[1.1] z-0 relative tracking-tight px-4 mt-10 md:mt-20 max-w-7xl mx-auto mt-4 md:-top-10"
>
  I'm <span className="text-[#FF4D1C]">{CONFIG.name}</span>,<br /> Next.js Expert
</motion.h1>

      <div className="relative w-full max-w-6xl mx-auto flex justify-center items-end h-[400px] md:h-[550px] -mt-30 md:-mt-40">
        {/* Left quote - hidden on mobile */}
        <div className="absolute top-[20%] left-6 md:left-12 z-10 hidden lg:block">
          <Quote className="text-[#1A1A1A] mb-2 fill-current rotate-180" size={24} aria-hidden="true" />
          <p className="text-[13px] font-medium text-gray-500 max-w-[190px]">
            I build high-performance web applications using Next.js.
          </p>
          <div className="mt-4 font-bold text-2xl text-[#1A1A1A]">
            05+ <span className="text-xs font-normal text-gray-400 block">Client Served</span>
          </div>
        </div>

        {/* Right stars - hidden on mobile */}
        <div className="absolute top-[20%] right-6 md:right-12 text-right z-10 hidden lg:block">
          <div className="flex gap-1 justify-end mb-2" aria-label="5 star rating">
            {[1, 2, 3, 4, 5].map((i) => (
              <Star key={i} size={14} className="fill-[#FF4D1C] text-[#FF4D1C]" aria-hidden="true" />
            ))}
          </div>
          <div className="font-bold text-2xl text-[#1A1A1A]">Next.js</div>
          <span className="text-gray-400 text-xs border-t border-gray-200 pt-1 inline-block min-w-[100px]">
            Expertise
          </span>
        </div>

        <div className="absolute bottom-0 w-[280px] h-[140px] md:w-[480px] md:h-[270px] bg-[#FF4D1C] rounded-t-full z-10"></div>
        <div className="relative z-20 w-[280px] md:w-[480px]">
          <Image
            src="/amir.png"
            alt={CONFIG.name}
            width={480}
            height={550}
            priority
            className="w-full h-auto object-contain"
            style={{ width: 'auto', height: 'auto' }}
          />
        </div>

        <div className="absolute bottom-[40px] md:bottom-[60px] z-50 flex gap-4 justify-center items-center">
          <div className="relative">
            <div className="absolute right-full top-1/2 pointer-events-none hidden md:block"
              style={{ marginRight: "7px", marginTop: "-14px", width: "70px", height: "70px", transform: "translateY(-50%)" }}
              aria-hidden="true"
            >
              {!prefersReducedMotion && (
                <motion.svg width="100%" height="100%" viewBox="0 0 100 60" fill="none" initial="hidden" animate="visible">
                  <motion.path
                    d="M 5 5 C 5 35, 25 50, 95 50"
                    stroke="#1A1A1A"
                    strokeWidth={3.3}
                    strokeLinecap="round"
                    variants={{
                      hidden: { pathLength: 0, opacity: 0 },
                      visible: { pathLength: 1, opacity: 1, transition: { duration: 0.8, delay: 0.5 } },
                    }}
                  />
                  <motion.path
                    d="M 80 40 L 95 50 L 80 60"
                    stroke="#1A1A1A"
                    strokeWidth={3.3}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    variants={{
                      hidden: { opacity: 0 },
                      visible: { opacity: 1, transition: { delay: 1.2 } },
                    }}
                  />
                </motion.svg>
              )}
            </div>
            <a
              href="#portfolio"
              className="bg-[#FF4D1C] text-white px-5 md:px-10 py-3 md:py-3.5 rounded-full font-bold text-sm border-2 border-white shadow-[0_0_20px_rgba(255,77,28,0.4)] hover:scale-105 transition-transform duration-300 block focus:outline-none focus:ring-2 focus:ring-[#FF4D1C]"
            >
              Portfolio
            </a>
          </div>
          <a
            href="#contact"
            className="bg-white text-black px-5 md:px-10 py-3 md:py-3.5 rounded-full font-bold text-sm border-2 border-white shadow-[0_0_20px_rgba(255,255,255,0.6)] hover:bg-gray-50 transition focus:outline-none focus:ring-2 focus:ring-[#FF4D1C]"
          >
            Hire Me
          </a>
        </div>
      </div>
    </section>
  );
};

// -----------------------------------------------------------------------------
// Services Section (images with fill)
// -----------------------------------------------------------------------------
const Services = () => {
  return (
    <section id="services" className="bg-[#1A1A1A] w-full rounded-t-[2rem] md:rounded-t-[3rem] pt-24 pb-20 px-4 md:px-6">
      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 md:mb-16 gap-6">
          <h2 className="text-3xl md:text-5xl font-semibold">
            <span className="text-white">My </span>
            <span className="text-[#FF4D1C]">Services</span>
          </h2>
          <p className="text-gray-400 max-w-md text-sm md:text-base leading-relaxed md:text-right">
            I build high-performance, SEO-optimized, and fully responsive websites using Next.js to help your business stand out.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, idx) => {
            const isCenter = idx === 1;
            return (
              <div
                key={idx}
                className={`relative rounded-3xl p-6 md:p-8 flex flex-col group transition-all duration-500 hover:-translate-y-2 ${
                  isCenter ? "text-white" : "bg-[#2A2A2A] text-white hover:bg-[#303030]"
                }`}
                style={isCenter ? { background: "linear-gradient(to bottom, #FF4D1C 0%, #FF4D1C 30%, #2A2A2A 70%, #2A2A2A 100%)" } : {}}
              >
                <h3 className={`text-xl md:text-2xl font-semibold mb-8 ${isCenter ? "text-white" : "text-white"}`}>
                  {service.title}
                </h3>
                <div className="relative mt-auto">
                  <div className="relative rounded-2xl overflow-hidden h-48 md:h-56 w-full shadow-lg bg-white/5">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover object-top opacity-90 group-hover:opacity-100 transition-opacity duration-500"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                  <Link
                    href={service.link}
                    className={`absolute -bottom-4 -right-4 w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center transition-transform duration-300 hover:scale-110 border-[6px] ${
                      isCenter ? "bg-[#FF4D1C] text-white border-[#2A2A2A]" : "bg-[#3A3A3A] text-white border-[#2A2A2A] group-hover:border-[#303030]"
                    }`}
                    aria-label={`View ${service.title} details`}
                  >
                    <ArrowUpRight size={24} strokeWidth={2.5} />
                  </Link>
                </div>
                {service.desc && (
                  <p className={`mt-6 text-sm line-clamp-2 ${isCenter ? "text-white/90" : "opacity-80"}`}>
                    {service.desc}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

// -----------------------------------------------------------------------------
// Work Experience (Resume)
// -----------------------------------------------------------------------------
const WorkExperience = () => {
  return (
    <section id="resume" className="bg-white py-16 md:py-24 px-4 md:px-6">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-2xl md:text-4xl font-bold text-center text-[#1A1A1A] mb-12 md:mb-16">
          My Work Experience
        </h2>
        <div className="relative">
          <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-[1px] bg-gray-200 md:-translate-x-1/2"></div>
          <div className="space-y-10 md:space-y-12">
            {experience.map((exp, i) => (
              <div key={i} className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-0 relative">
                <div className="absolute left-[13px] md:left-1/2 w-4 h-4 bg-[#FF4D1C] rounded-full border-4 border-white shadow-sm z-10 md:-translate-x-1/2 mt-1 md:mt-0"></div>
                <div className={`pl-12 md:pl-0 md:w-1/2 md:pr-12 ${i % 2 !== 0 ? "md:order-2 md:pl-12 md:pr-0 md:text-left" : "md:text-right"}`}>
                  <h3 className="font-bold text-lg md:text-xl text-[#1A1A1A]">{exp.company}</h3>
                  <p className="text-xs md:text-sm text-gray-500">{exp.date}</p>
                </div>
                <div className={`pl-12 md:pl-0 md:w-1/2 md:pl-12 ${i % 2 !== 0 ? "md:order-1 md:pr-12 md:pl-0 md:text-right" : "md:text-left"}`}>
                  <h4 className="font-bold text-base md:text-lg text-[#1A1A1A]">{exp.role}</h4>
                  <p className="text-xs md:text-sm text-gray-500 mt-1 max-w-xs">{exp.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// -----------------------------------------------------------------------------
// Why Hire Me (About) – optimized image with fill
// -----------------------------------------------------------------------------
const WhyHireMe = () => {
  return (
    <section id="about" className="bg-[#F9FAFB] py-16 md:py-24 px-4 md:px-6">
      <div className="container mx-auto max-w-6xl flex flex-col lg:flex-row items-center gap-10 md:gap-16">
        <div className="w-full lg:w-1/2 relative flex justify-center">
          <div className="relative w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] md:w-[400px] md:h-[400px]">
            <div className="absolute inset-0 bg-[#FF4D1C] rounded-full"></div>
            <div
              className="absolute -top-4 -right-4 sm:-top-6 sm:-right-6 w-16 h-16 sm:w-24 sm:h-24 opacity-50"
              style={{
                backgroundImage: "radial-gradient(#1A1A1A 2px, transparent 2px)",
                backgroundSize: "12px 12px",
              }}
              aria-hidden="true"
            ></div>
            <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white shadow-2xl">
              <Image
                src="/amir2.png"
                alt={CONFIG.name}
                fill
                className="object-contain"
                sizes="(max-width: 768px) 280px, 400px"
              />
            </div>
          </div>
        </div>

        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h2 className="text-3xl md:text-5xl font-bold text-[#1A1A1A] mb-4 md:mb-6 leading-tight">
            Why You <span className="text-[#FF4D1C]">Hire Me</span> for
            <br /> Your Next Projects?
          </h2>
          <p className="text-sm md:text-base text-gray-500 mb-8 md:mb-10 leading-relaxed px-2 lg:px-0">
            Hi, I'm Amir, a Next.js developer focused on building high-performance, scalable web applications that blend modern design with real-world functionality.
            From business websites and SaaS platforms to restaurant systems and custom web tools, I craft digital solutions designed to perform efficiently, scale seamlessly and drive meaningful business growth.
          </p>

          <div className="grid grid-cols-2 gap-4 md:gap-8 mb-8 md:mb-10 max-w-xs mx-auto lg:mx-0">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-[#1A1A1A]">05+</h3>
              <p className="text-xs md:text-sm text-gray-500">Premium Projects</p>
            </div>
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-[#1A1A1A]">100%</h3>
              <p className="text-xs md:text-sm text-gray-500">Next.js Specialist</p>
            </div>
          </div>

          <a
            href="#contact"
            className="inline-block border border-[#FF4D1C] text-[#FF4D1C] px-6 md:px-8 py-2 md:py-3 rounded-full font-bold hover:bg-[#FF4D1C] hover:text-white transition-colors text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-[#FF4D1C]"
          >
            Hire Me
          </a>
        </div>
      </div>
    </section>
  );
};

// -----------------------------------------------------------------------------
// Portfolio Section (images with fill)
// -----------------------------------------------------------------------------
const Portfolio = () => {
  const [showAll, setShowAll] = useState(false);
  const thirdProjectRef = useRef<HTMLDivElement>(null);

  const handleShowMore = () => {
    if (!showAll) {
      setShowAll(true);
      setTimeout(() => {
        thirdProjectRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
      }, 100);
    }
  };

  return (
    <section id="portfolio" className="bg-white py-16 md:py-24 px-4 md:px-6">
      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8 md:mb-10">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-[#1A1A1A]">Let's Have a Look at</h2>
            <h2 className="text-2xl md:text-3xl font-bold text-[#FF4D1C]">my Portfolio</h2>
          </div>
          <div className="hidden md:block">
            {!showAll && (
              <button
                onClick={handleShowMore}
                className="bg-[#FF4D1C] text-white px-5 md:px-6 py-2 rounded-full text-xs md:text-sm font-bold flex items-center gap-2 hover:bg-orange-700 transition-colors cursor-pointer focus:outline-none focus:ring-2 focus:ring-white"
              >
                See More <ArrowUpRight size={14} />
              </button>
            )}
          </div>
        </div>

        <div className="flex md:grid md:grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 overflow-x-auto md:overflow-visible pb-4 md:pb-0 snap-x snap-mandatory md:snap-none">
          {portfolio.map((item, i) => {
            const isThird = i === 2;
            return (
              <div
                key={i}
                ref={isThird ? thirdProjectRef : null}
                className={`group flex-shrink-0 w-[280px] sm:w-[320px] md:w-auto snap-start ${
                  isThird && !showAll ? 'md:hidden' : ''
                }`}
              >
                <div className="relative bg-[#F3F4F6] rounded-[2rem] overflow-hidden h-[300px] md:h-[400px] shadow-lg">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transform group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute bottom-4 right-4 md:bottom-6 md:right-6 w-10 h-10 md:w-12 md:h-12 bg-[#FF4D1C] rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all translate-y-4 group-hover:translate-y-0 shadow-lg focus:opacity-100 focus:translate-y-0"
                    aria-label={`View ${item.title} project (opens new tab)`}
                  >
                    <ArrowRight size={18} />
                  </a>
                </div>
                <div className="flex gap-2 mb-2 md:mb-3 mt-4 flex-wrap">
                  {item.tags.map((tag) => (
                    <span key={tag} className="px-2 md:px-3 py-1 bg-gray-100 text-xs font-medium text-gray-600 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-lg md:text-xl font-bold text-[#1A1A1A] flex items-center gap-2">
                  <a href={item.link} target="_blank" rel="noopener noreferrer" className="hover:text-[#FF4D1C] focus:outline-none focus:ring-2 focus:ring-[#FF4D1C] rounded">
                    {item.title}
                  </a>
                  <span className="text-[#FF4D1C]" aria-hidden="true">
                    <ArrowUpRight size={16} className="inline bg-[#FF4D1C] text-white rounded-full p-0.5" />
                  </span>
                </h3>
                <p className="text-gray-500 text-xs md:text-sm mt-2 max-w-md">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

// -----------------------------------------------------------------------------
// Testimonials Section (inline)
// -----------------------------------------------------------------------------
const Testimonials = () => {
  const reviews = [
    {
      name: "Alex Rivera",
      role: "E-commerce Owner",
      quote: "Amir is a Next.js wizard. He transformed our slow landing page into a lightning-fast experience. His technical skills are top-notch!",
      img: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
      name: "Sarah Chen",
      role: "SaaS Founder",
      quote: "Working with Amir on our tool integration was a breeze. He understands modern UI and performance better than most developers I've met.",
      img: "https://randomuser.me/api/portraits/women/44.jpg"
    }
  ];

  return (
    <section className="bg-[#1A1A1A] py-16 md:py-24 px-4 md:px-6 text-white text-center">
      <div className="container mx-auto max-w-4xl">
        <div className="mb-10 md:mb-12 relative inline-block">
          <h2 className="text-2xl md:text-4xl font-bold">Client Success</h2>
          <h2 className="text-2xl md:text-4xl font-bold text-[#FF4D1C]">Stories & Feedback</h2>
          <div className="absolute -top-4 -right-4 md:-top-6 md:-right-8">
            <Quote size={24} className="text-gray-600 rotate-12 opacity-50" />
          </div>
          <div className="absolute -bottom-4 -left-4 md:-bottom-6 md:-left-8">
            <Star size={20} className="text-white opacity-50" />
          </div>
        </div>
        
        <p className="text-gray-400 mb-12 md:mb-16 max-w-lg mx-auto text-xs md:text-sm">
          I take pride in delivering high-quality digital products. Here is what some of my 
          collaborators have to say about our work together.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 text-left">
          {reviews.map((review, i) => (
            <div key={i} className="bg-[#262626] p-6 md:p-8 rounded-2xl relative border border-gray-800">
              <div className="flex gap-1 mb-3 md:mb-4">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star key={s} size={12} className="fill-[#FF4D1C] text-[#FF4D1C]" />
                ))}
                <span className="ml-2 text-xs font-bold">5.0</span>
              </div>
              <p className="text-gray-300 text-xs md:text-sm mb-6 md:mb-8 leading-relaxed">
                "{review.quote}"
              </p>
              <div className="flex items-center gap-3">
                <img src={review.img} className="w-8 h-8 md:w-10 md:h-10 rounded-full border border-gray-700" alt={review.name} />
                <div>
                  <h4 className="font-bold text-xs md:text-sm">{review.name}</h4>
                  <p className="text-xs text-gray-500">{review.role}</p>
                </div>
                <Quote className="ml-auto text-gray-700" size={24} />
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center gap-2 mt-6 md:mt-8">
          <div className="w-2 h-2 rounded-full bg-gray-600"></div>
          <div className="w-2 h-2 rounded-full bg-[#FF4D1C]"></div>
          <div className="w-2 h-2 rounded-full bg-gray-600"></div>
        </div>
      </div>
    </section>
  );
};

// -----------------------------------------------------------------------------
// CTA Section with Modal (focus trap, accessible form)
// -----------------------------------------------------------------------------
const CTA = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [modalOpen, setModalOpen] = useState(false);
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const modalRef = useRef<HTMLDivElement>(null);
  const prevFocusRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!modalOpen) return;
    prevFocusRef.current = document.activeElement as HTMLElement;
    const focusable = modalRef.current?.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    if (focusable?.length) {
      (focusable[0] as HTMLElement).focus();
    }
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal();
      if (e.key === "Tab" && modalRef.current) {
        const focusableElements = modalRef.current.querySelectorAll(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        if (focusableElements.length === 0) return;
        const first = focusableElements[0] as HTMLElement;
        const last = focusableElements[focusableElements.length - 1] as HTMLElement;
        if (e.shiftKey && document.activeElement === first) {
          last.focus();
          e.preventDefault();
        } else if (!e.shiftKey && document.activeElement === last) {
          first.focus();
          e.preventDefault();
        }
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      prevFocusRef.current?.focus();
    };
  }, [modalOpen]);

  const handleSendClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setName('');
    setMessage('');
  };

  const handleModalSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !message.trim()) return;

    setStatus('loading');
    setModalOpen(false);

    const formData = new FormData();
    formData.append('email', email);
    formData.append('name', name);
    formData.append('message', message);

    try {
      const res = await fetch(CONFIG.formspreeUrl, {
        method: 'POST',
        body: formData,
        headers: { Accept: 'application/json' },
      });

      if (res.ok) {
        setStatus('success');
        setEmail('');
        setName('');
        setMessage('');
        setTimeout(() => setStatus('idle'), 3000);
      } else {
        setStatus('error');
        setTimeout(() => setStatus('idle'), 3000);
      }
    } catch {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 3000);
    }
  };

  return (
    <section className="bg-white pt-16 md:pt-24 pb-8 md:pb-12 px-4 md:px-6">
      <div className="container mx-auto max-w-5xl text-center">
        <h2 className="text-2xl md:text-5xl font-bold text-[#1A1A1A] mb-2">
          Have An Awesome Project
        </h2>
        <h2 className="text-2xl md:text-5xl font-bold text-[#1A1A1A] mb-6 md:mb-8">
          Idea? <span className="text-[#FF4D1C]">Let's Discuss</span>
        </h2>

        <div className="relative max-w-xl mx-auto mb-8 md:mb-12 px-2">
          <div className="flex items-center bg-white border border-gray-200 rounded-full shadow-lg p-1 pl-4 md:p-2 md:pl-6">
            <div className="p-1 md:p-2 bg-[#FFEAE4] rounded-full text-[#FF4D1C]" aria-hidden="true">
              <Mail size={16} />
            </div>
            <label htmlFor="cta-email" className="sr-only">Email address</label>
            <input
              id="cta-email"
              type="email"
              placeholder="Enter Email Address"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={status === 'loading'}
              className="flex-1 outline-none px-2 md:px-4 text-xs md:text-sm text-gray-700 placeholder:text-gray-400"
            />
            <button
              onClick={handleSendClick}
              disabled={status === 'loading' || !email.trim()}
              className="bg-[#FF4D1C] text-white px-4 md:px-6 py-2 md:py-3 rounded-full text-xs md:text-sm font-bold hover:bg-orange-600 disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-[#FF4D1C]"
            >
              {status === 'loading' ? 'Sending...' : 'Send'}
            </button>
          </div>

          {status === 'success' && (
            <p className="text-green-600 text-xs mt-2 text-center" role="status">
              Message received! Amir will contact you soon.
            </p>
          )}
          {status === 'error' && (
            <p className="text-red-500 text-xs mt-2 text-center" role="alert">
              Something went wrong. Please try again.
            </p>
          )}
        </div>

        <div className="flex flex-wrap justify-center gap-4 md:gap-8 text-xs font-bold text-gray-600 uppercase tracking-wide">
          <span className="flex items-center gap-1 md:gap-2">
            <CheckCircle2 size={14} className="text-[#FF4D1C]" aria-hidden="true" /> 100% Job Success
          </span>
          <span className="flex items-center gap-1 md:gap-2">
            <CheckCircle2 size={14} className="text-[#FF4D1C]" aria-hidden="true" /> Open Source Contributor
          </span>
          <span className="flex items-center gap-1 md:gap-2">
            <CheckCircle2 size={14} className="text-[#FF4D1C]" aria-hidden="true" /> Modern Frontend Developer
          </span>
        </div>
      </div>

      <AnimatePresence>
        {modalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-black/50 backdrop-blur-sm"
            onClick={closeModal}
            aria-modal="true"
            role="dialog"
            aria-label="Project discussion form"
          >
            <motion.div
              ref={modalRef}
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-6 relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-[#FF4D1C] rounded-full"
                aria-label="Close modal"
              >
                <X size={20} />
              </button>
              <h3 className="text-xl font-bold text-[#1A1A1A] mb-2">Let's discuss your project</h3>
              <p className="text-sm text-gray-500 mb-6">
                Your email address: <span className="font-medium text-[#FF4D1C]">{email}</span>
              </p>
              <form onSubmit={handleModalSubmit}>
                <div className="mb-4">
                  <label htmlFor="modal-name" className="block text-xs font-medium text-gray-600 mb-1">
                    Your name
                  </label>
                  <input
                    id="modal-name"
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full border border-gray-200 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#FF4D1C]/50"
                    placeholder="e.g. John Smith"
                  />
                </div>
                <div className="mb-6">
                  <label htmlFor="modal-message" className="block text-xs font-medium text-gray-600 mb-1">
                    Project Details
                  </label>
                  <textarea
                    id="modal-message"
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    rows={3}
                    className="w-full border border-gray-200 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#FF4D1C]/50"
                    placeholder="Tell me about your project..."
                  />
                </div>
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full bg-[#FF4D1C] text-white py-3 rounded-lg font-bold hover:bg-orange-600 transition-colors disabled:opacity-50 focus:outline-none focus:ring-2 focus:ring-[#FF4D1C]"
                >
                  {status === 'loading' ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

// -----------------------------------------------------------------------------
// Pure CSS Angled Marquee (no framer-motion)
// -----------------------------------------------------------------------------
const AngledMarquee = () => {
  return (
    <div className="relative py-6 md:py-8 overflow-hidden bg-white mb-12 md:mb-16">
      <div className="absolute inset-0 flex items-center justify-center transform -rotate-1 scale-105 bg-[#FF4D1C] py-3 md:py-4 shadow-xl z-10">
        <div className="marquee whitespace-nowrap flex gap-4 md:gap-8 text-white font-bold text-sm md:text-xl uppercase tracking-widest items-center">
          {[...Array(4)].map((_, i) => (
            <React.Fragment key={i}>
              <span>Next.js</span> <span className="text-black" aria-hidden="true">•</span>
              <span>React</span> <span className="text-black" aria-hidden="true">•</span>
              <span>Full-Stack</span> <span className="text-black" aria-hidden="true">•</span>
              <span>SaaS Apps</span> <span className="text-black" aria-hidden="true">•</span>
              <span>Tailwind CSS</span> <span className="text-black" aria-hidden="true">•</span>
              <span>Web Utilities</span> <span className="text-black" aria-hidden="true">•</span>
              <span>Clean Code</span> <span className="text-black" aria-hidden="true">•</span>
            </React.Fragment>
          ))}
        </div>
      </div>
      <style jsx>{`
        .marquee {
          animation: scroll 20s linear infinite;
        }
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @media (prefers-reduced-motion: reduce) {
          .marquee {
            animation: none;
            transform: translateX(0);
          }
        }
      `}</style>
    </div>
  );
};

// -----------------------------------------------------------------------------
// Blog Section (images with fill)
// -----------------------------------------------------------------------------
const Blog = () => {
  return (
    <section id="blog" className="bg-white pb-16 md:pb-24 px-4 md:px-6">
      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-8 md:mb-12 gap-4">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-[#1A1A1A]">From my</h2>
            <h2 className="text-2xl md:text-3xl font-bold text-[#1A1A1A]">blog post</h2>
          </div>
        </div>

        <div className="flex md:grid md:grid-cols-3 gap-6 md:gap-8 overflow-x-auto md:overflow-visible pb-4 md:pb-0 snap-x snap-mandatory md:snap-none">
          {blogs.map((blog, i) => (
            <div key={i} className="group cursor-pointer flex-shrink-0 w-[260px] sm:w-[300px] md:w-auto snap-start">
              <div className="relative mb-3 md:mb-4">
                <div className="relative rounded-2xl overflow-hidden h-48 md:h-60 w-full shadow-lg bg-white/5">
                  <Image
                    src={blog.image}
                    alt={blog.title}
                    fill
                    className="object-cover object-top transform group-hover:scale-110 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <Link
                  href={`/blog/${blog.slug}`}
                  className={`absolute -bottom-4 -right-4 w-10 h-10 md:-bottom-6 md:-right-6 md:w-16 md:h-16 rounded-full flex items-center justify-center transition-transform duration-300 hover:scale-110 ${
                    i === 1 ? 'bg-[#FF4D1C] text-white' : 'bg-[#3A3A3A] text-white'
                  }`}
                >
                  <ArrowUpRight size={24} strokeWidth={2.5} />
                </Link>
              </div>
              <h3 className="font-bold text-base md:text-lg text-[#1A1A1A] mb-2 leading-snug group-hover:text-[#FF4D1C] transition-colors">
                {blog.title}
              </h3>
              <div className="flex items-center justify-between mt-3 md:mt-4 border-t border-gray-100 pt-3 md:pt-4">
                <div className="flex gap-2 text-xs text-gray-500 font-medium">
                  <span className="text-[#FF4D1C]">• {blog.author}</span>
                  <span>• {blog.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// -----------------------------------------------------------------------------
// Footer
// -----------------------------------------------------------------------------
export const Footer = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email.trim()) return;

    const subject = encodeURIComponent('Message from your portfolio');
    const body = encodeURIComponent(`Sender's email: ${email}\n\n[Please write your message here]`);
    const mailtoLink = `mailto:${CONFIG.email}?subject=${subject}&body=${body}`;

    window.location.href = mailtoLink;
    setTimeout(() => setEmail(''), 1000);
  };

  return (
    <footer id="contact" className="bg-[#1A1A1A] text-white pt-12 md:pt-20 px-4 md:px-6 pb-4 md:pb-6">
      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-col md:flex-row justify-between items-center pb-10 md:pb-16 border-b border-gray-800 gap-4">
          <div>
            <h2 className="text-2xl md:text-4xl font-bold mb-2 text-center md:text-left">Let's Connect there</h2>
          </div>
          <a
            href="#contact"
            className="bg-[#FF4D1C] hover:bg-orange-600 text-white px-6 md:px-8 py-2 md:py-3 rounded-full font-bold flex items-center gap-2 transition-colors text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-white"
          >
            Hire me <ArrowUpRight size={16} />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12 py-8 md:py-12">
          <div className="col-span-1 md:col-span-1 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 mb-4 md:mb-6">
              <div className="w-8 h-8 bg-[#FF4D1C] rounded-full flex items-center justify-center font-bold text-white">
                A
              </div>
              <span className="font-bold text-lg">{CONFIG.name}</span>
            </div>
            <p className="text-gray-400 text-xs md:text-sm leading-relaxed mb-4 md:mb-6">
              I build high-performance, SEO-optimized, and fully responsive websites using Next.js to help your business stand out.
            </p>
            <div className="flex gap-3 md:gap-4 justify-center md:justify-start">
              <a href={CONFIG.social.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="bg-[#262626] p-2 rounded-md hover:bg-[#FF4D1C] transition-colors focus:outline-none focus:ring-2 focus:ring-[#FF4D1C]">
                <FaGithub size={14} />
              </a>
              <a href={CONFIG.social.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="bg-[#262626] p-2 rounded-md hover:bg-[#FF4D1C] transition-colors focus:outline-none focus:ring-2 focus:ring-[#FF4D1C]">
                <FaInstagram size={14} />
              </a>
              <a href={CONFIG.social.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="bg-[#262626] p-2 rounded-md hover:bg-[#FF4D1C] transition-colors focus:outline-none focus:ring-2 focus:ring-[#FF4D1C]">
                <FaLinkedin size={14} />
              </a>
            </div>
          </div>

          <div className="text-center md:text-left">
            <h4 className="font-bold text-[#FF4D1C] text-xs md:text-sm mb-4 md:mb-6 uppercase">Navigation</h4>
            <ul className="space-y-2 md:space-y-3 text-xs md:text-sm text-gray-400">
              <li><a href="#home" className="hover:text-white focus:outline-none focus:ring-2 focus:ring-[#FF4D1C] rounded">Home</a></li>
              <li><a href="#about" className="hover:text-white focus:outline-none focus:ring-2 focus:ring-[#FF4D1C] rounded">About Us</a></li>
              <li><a href="#services" className="hover:text-white focus:outline-none focus:ring-2 focus:ring-[#FF4D1C] rounded">Service</a></li>
              <li><a href="#resume" className="hover:text-white focus:outline-none focus:ring-2 focus:ring-[#FF4D1C] rounded">Resume</a></li>
              <li><a href="#portfolio" className="hover:text-white focus:outline-none focus:ring-2 focus:ring-[#FF4D1C] rounded">Project</a></li>
            </ul>
          </div>

          <div className="text-center md:text-left">
            <h4 className="font-bold text-[#FF4D1C] text-xs md:text-sm mb-4 md:mb-6 uppercase">Contact</h4>
            <ul className="space-y-2 md:space-y-3 text-xs md:text-sm text-gray-400">
              <li className="flex items-center justify-center md:justify-start gap-2"><Phone size={14} aria-hidden="true" /> {CONFIG.phone}</li>
              <li className="flex items-center justify-center md:justify-start gap-2"><Mail size={14} aria-hidden="true" /> {CONFIG.email}</li>
              <li className="flex items-center justify-center md:justify-start gap-2"><MapPin size={14} aria-hidden="true" /> {CONFIG.location}</li>
            </ul>
          </div>

          <div className="text-center md:text-left">
            <h4 className="font-bold text-[#FF4D1C] text-xs md:text-sm mb-4 md:mb-6 uppercase">Get the latest information</h4>
            <form onSubmit={handleSubmit} className="flex bg-white rounded-md overflow-hidden pl-2 py-1 pr-1 max-w-xs mx-auto md:mx-0">
              <label htmlFor="footer-email" className="sr-only">Email address</label>
              <input
                id="footer-email"
                type="email"
                placeholder="Your email address"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-transparent text-black text-xs outline-none flex-1 w-full placeholder:text-gray-400 px-1"
              />
              <button type="submit" className="bg-[#FF4D1C] p-2 rounded-md text-white hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-white" aria-label="Send email">
                <Send size={14} />
              </button>
            </form>
            <p className="text-gray-500 text-xs mt-2">We'll open your email app to send us a message.</p>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-4 md:pt-6 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 gap-2">
          <p>Copyright © 2026 {CONFIG.name}. All Rights Reserved.</p>
          <p>
            <Link href="/privacy" className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-[#FF4D1C] rounded">Privacy Policy</Link>
            {" | "}
            <Link href="/terms" className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-[#FF4D1C] rounded">Terms & Conditions</Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

// -----------------------------------------------------------------------------
// Main Page Component
// -----------------------------------------------------------------------------
export default function PortfolioPage() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <main id="main-content" className="font-sans antialiased text-[#1A1A1A] bg-white selection:bg-[#FF4D1C] selection:text-white">
      <Navbar />
      <Hero />
      <Services />
      <WorkExperience />
      <WhyHireMe />
      <Portfolio />
      <Testimonials />
      <CTA />
      <AngledMarquee />
      <Blog />
      <Footer />
    </main>
  );
}