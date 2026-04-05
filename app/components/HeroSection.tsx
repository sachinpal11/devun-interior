"use client";

import Image from "next/image";
import Hero from "../assets/hero-bg.png"
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  useEffect(() => {
    let ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      // Background scale in
      gsap.fromTo('.hero-bg',
        { scale: 1.1 },
        { scale: 1, duration: 2.5, ease: "power2.out" }
      );

      // Navbar staggered entry
      tl.fromTo('.nav-item',
        { y: -20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.1 },
        0.2 // delay
      );

      // Mega Wordmark reveal
      tl.fromTo('.hero-title',
        { y: 80, opacity: 0, clipPath: "inset(100% 0% 0% 0%)" },
        { y: 0, opacity: 1, clipPath: "inset(0% 0% 0% 0%)", duration: 1.5, ease: "power4.out" },
        0.4
      );

      // Subheadline fade up
      tl.fromTo('.hero-subtitle',
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "power3.out" },
        0.8
      );

      // Script label fade from right
      tl.fromTo('.hero-script',
        { x: 30, opacity: 0 },
        { x: 0, opacity: 1, duration: 1, ease: "power3.out" },
        1.0
      );

      // Right column service tags staggered
      tl.fromTo('.service-tag',
        { x: 20, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.8, stagger: 0.15 },
        1.1
      );

      // CTA Button fade in
      tl.fromTo('.cta-button',
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 1 },
        1.3
      );

    }, containerRef);

    return () => ctx.revert();
  }, []);

  // Prevent scrolling when mobile nav is open
  useEffect(() => {
    if (mobileNavOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [mobileNavOpen]);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-screen overflow-hidden antialiased"
      style={{ textRendering: 'optimizeLegibility' }}
    >

      {/* Background Image */}
      <div
        className="absolute inset-x-0 inset-y-[-20%] w-full h-[140%] z-0 placeholder-hero-bg"
        data-scroll
        data-scroll-speed="-0.3"
      >
        <Image
          src={Hero}
          alt="Interior"
          fill
          priority
          className="object-cover opacity-30 hero-bg"
          style={{ objectPosition: "center 60%" }}
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/[0.08]" />

      {/* Navbar */}
      <nav className="absolute top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-6 md:px-[60px] md:py-[28px]">
        <div className="flex items-center gap-2 text-white text-[13px] font-[600] tracking-[0.06em] uppercase font-[family-name:var(--font-montserrat)] nav-item">
          <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <rect x="3" y="3" width="18" height="18" />
            <path d="M3 9h18M9 21V9" />
          </svg>
          DEV.UN<sup className="text-[8px] ml-0.5">®</sup>
        </div>
        <div className="hidden md:flex gap-[48px] font-[family-name:var(--font-montserrat)] nav-item">
          {['HOMEPAGE', 'SERVICES', 'ABOUT US', 'PORTFOLIO', 'CONTACTS'].map(n => (
            <a key={n} href="#" className="text-white/85 text-[12px] font-light tracking-[0.1em] uppercase hover:opacity-50 transition-opacity duration-200">
              {n}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-4 nav-item">
          <span className="hidden md:block text-white text-[12px] md:text-[14px] font-medium tracking-[0.02em] font-[family-name:var(--font-montserrat)]">
            +91 9988665544
          </span>
          <button
            onClick={() => setMobileNavOpen(true)}
            className="md:hidden flex flex-col justify-center items-end w-8 h-8 gap-1.5 z-50 opacity-80 hover:opacity-100"
          >
            <div className="w-6 h-px bg-white"></div>
            <div className="w-4 h-px bg-white"></div>
          </button>
        </div>
      </nav>

      {/* Mobile Side Navbar Drawer */}
      <div
        className={`fixed inset-0 z-[60] bg-[#1a1a1a] transition-transform duration-[600ms] ease-[cubic-bezier(0.76,0,0.24,1)] flex flex-col justify-center items-center ${mobileNavOpen ? "translate-x-0" : "translate-x-full"
          }`}
      >
        <button
          onClick={() => setMobileNavOpen(false)}
          className="absolute top-6 right-6 w-10 h-10 flex text-white opacity-60 hover:opacity-100 transition-opacity justify-center items-center"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </button>

        <div className="flex flex-col gap-10 text-center font-[family-name:var(--font-montserrat)]">
          {['HOMEPAGE', 'SERVICES', 'ABOUT US', 'PORTFOLIO', 'CONTACTS'].map(n => (
            <a
              key={n}
              href="#"
              onClick={() => setMobileNavOpen(false)}
              className="text-white text-[24px] font-extralight tracking-[0.2em] uppercase hover:text-[#C9A84C] hover:scale-105 transition-all duration-300"
            >
              {n}
            </a>
          ))}
        </div>
      </div>

      {/* Mega Wordmark */}
      <h1
        className="absolute left-6 md:left-[60px] text-white z-10 select-none font-[family-name:var(--font-montserrat)] hero-title"
        data-scroll
        data-scroll-speed="0.2"
        style={{
          top: '28%',
          fontSize: 'clamp(60px, 15vw, 260px)',
          fontWeight: 100,
          lineHeight: 0.88,
          letterSpacing: '-0.02em',
          fontFeatureSettings: '"kern" 1'
        }}>
        DEV.UN
      </h1>

      {/* Subheadline */}
      <p
        className="absolute left-6 md:left-[60px] text-white mt-10 md:mt-0 font-normal uppercase tracking-[0.04em] leading-[1.25] z-10 font-[family-name:var(--font-montserrat)] hero-subtitle"
        data-scroll
        data-scroll-speed="0.1"
        style={{ top: '65%', fontSize: 'clamp(16px, 2.2vw, 30px)' }}>
        CREATING INTERIORS<br />THAT INSPIRE
      </p>

      {/* CTA Button */}
      <a
        href="#estimate"
        data-scroll
        data-scroll-speed="0.15"
        className="absolute left-6 md:left-[60px] z-10 flex items-center justify-center rounded-br-4xl text-white text-[10px] md:text-[12px] font-bold tracking-[0.12em] uppercase px-6 py-4 md:px-[40px] md:py-[20px] transition-colors duration-200 font-[family-name:var(--font-montserrat)] rounded-[2px] cta-button"
        style={{ bottom: '8%', backgroundColor: '#C9A84C' }}
        onMouseEnter={e => e.currentTarget.style.backgroundColor = '#B8943D'}
        onMouseLeave={e => e.currentTarget.style.backgroundColor = '#C9A84C'}>
        CALCULATE THE ESTIMATE <span className="ml-[6px] font-normal text-[16px] md:text-[20px] leading-none">&#x2197;</span>
      </a>

      {/* Right Column — Service Tags */}
      <div
        className="hidden md:block absolute right-[60px] text-right z-10 font-[family-name:var(--font-montserrat)]"
        data-scroll
        data-scroll-speed="0.1"
        style={{ top: '170px' }}>
        {['APARTMENTS', 'HOUSES', 'ESTABLISHMENTS'].map(s => (
          <p key={s} className="text-white text-[12px] font-normal tracking-[0.08em] uppercase leading-[2.0] service-tag">{s}</p>
        ))}
      </div>

      {/* Script Label */}
      <p
        className="hidden md:block absolute right-[60px] text-white z-10 italic font-[family-name:var(--font-dancing-script)] hero-script"
        data-scroll
        data-scroll-speed="0.15"
        style={{
          top: '52%',
          fontSize: '32px'
        }}>
        interior design
      </p>

    </div>
  );
}