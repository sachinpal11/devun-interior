"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Footer = () => {
  const footerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    let ctx = gsap.context(() => {
      // 1. Cluster A: Top Left Micro CTA Reveal
      gsap.fromTo(
        ".footer-cluster-a",
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".footer-cluster-a",
            start: "top 95%",
          },
        }
      );

      // 2. Cluster B: Headline Reveal
      gsap.fromTo(
        ".footer-headline",
        { x: 50, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1.2,
          ease: "power4.out",
          scrollTrigger: {
            trigger: ".footer-headline",
            start: "top 90%",
          },
        }
      );

      // 3. Phone and Button Reveal
      gsap.fromTo(
        ".footer-cta-action",
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".footer-cta-action",
            start: "top 92%",
          },
        }
      );

      // 4. Cluster C: Supporting Copy Reveal
      gsap.fromTo(
        ".footer-copy",
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".footer-copy",
            start: "top 98%",
          },
        }
      );

      // 5. Nav Bar Reveal
      gsap.fromTo(
        ".footer-nav",
        { opacity: 0, y: 15 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".footer-nav",
            start: "top bottom",
          },
        }
      );
    }, footerRef);

    // Force ScrollTrigger and Lenis synchronization
    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 1000);

    return () => {
      ctx.revert();
      clearTimeout(timer);
    };
  }, []);

  return (
    <footer
      ref={footerRef}
      className="relative w-full min-h-screen md:h-[1200px] lg:h-[110vh] overflow-hidden font-[family-name:var(--font-inter)] antialiased select-none bg-[#1A1A1A] pt-20"
    >
      {/* BACKGROUND IMAGE - PARALLAX */}
      <div className="absolute inset-0 z-0 h-[140%] -top-[20%]">
        <Image
          src="https://images.unsplash.com/photo-1606744824163-985d376605aa?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Luxury Interior Footer Background"
          fill
          className="object-cover opacity-30 object-center"
          priority
        />
      </div>

      {/* OVERLAY CONTENT */}
      <div className="relative z-10 w-full h-full px-6 md:px-10 lg:px-16 flex flex-col lg:block">
        {/* TOP WRAPPER FOR MOBILE STACK */}
        <div className="flex flex-col lg:contents">
          {/* CLUSTER A — TOP LEFT MICRO CTA */}
          <div className="footer-cluster-a mb-12 lg:mb-0 lg:absolute lg:top-[120px] lg:left-[64px] flex flex-col items-start text-left uppercase text-[#FFFFFF] opacity-[0.85] leading-[1.8] tracking-[0.12em] text-[11px] font-[400]">
            <span>CONTACT US</span>
            <span>TO DISCUSS YOUR</span>
            <span>UPCOMING PROJECT</span>
          </div>

          {/* CLUSTER B — RIGHT DOMINANT CTA */}
          <div className="lg:absolute lg:top-[90px] lg:right-[64px] flex flex-col items-start lg:items-end text-left lg:text-right text-[#FFFFFF] w-full lg:w-auto">
            <h2 className="footer-headline text-[clamp(22px,5vw,145px)] font-[400] tracking-[-0.02em] leading-[0.92] uppercase">
              CREATING<br />A COZY<br />INTERIOR
            </h2>
            <div className="mt-8 md:mt-[48px] flex flex-col items-start lg:items-end w-full">
              <span className="footer-cta-action text-[clamp(12px,4vw,92px)] font-[400] tracking-[0.01em] leading-[1.1]">
                +91 9988665544
              </span>
              <button
                className="footer-cta-action mt-8 md:mt-[44px] rounded-br-4xl w-full sm:w-[280px] h-[64px] bg-[#D4B96A] text-[#1A1A1A] text-[14px] font-[600] uppercase tracking-[0.15em] flex items-center justify-center transition-transform hover:scale-[1.02] active:scale-[0.98]"
              >
                CONTACT US <span className="ml-2">↗</span>
              </button>
            </div>
          </div>
        </div>

        {/* BOTTOM WRAPPER FOR MOBILE STACK */}
        <div className="mt-20 lg:mt-0 flex flex-col lg:contents">
          {/* CLUSTER C — BOTTOM LEFT SUPPORTING COPY */}
          <div className="footer-copy mb-20 lg:mb-0 lg:absolute lg:bottom-[140px] lg:left-[64px] flex flex-col items-start text-left text-[#FFFFFF] opacity-[0.9] leading-[1.7] text-[13px] font-[400] max-w-[280px]">
            <p>
              Be sure that DEV.UN will make<br />
              your space a special place filled<br />
              with beauty and comfort
            </p>
          </div>

          {/* BOTTOM NAV BAR */}
          <nav className="footer-nav border-t border-white/10 lg:border-none absolute inset-x-0 bottom-0 min-h-[84px] py-8 px-6 md:px-10 lg:px-16 flex flex-col sm:flex-row items-center justify-between gap-8 bg-[rgba(20,16,12,0.4)] backdrop-blur-sm lg:bg-transparent lg:backdrop-blur-none">
            {/* NAV BAR — LEFT (Logo) */}
            <div className="flex items-center gap-[10px]">
              <span className="text-[16px] font-[700] text-white tracking-[0.05em]">DEV.UN®</span>
            </div>

            {/* NAV BAR — CENTER (Navigation Links) */}
            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-4 md:gap-[40px] lg:gap-[72px] xl:gap-[88px]">
              {["HOMEPAGE", "SERVICES", "ABOUT US", "PORTFOLIO", "CONTACTS"].map((link) => (
                <a
                  key={link}
                  href="#"
                  className="text-[10px] md:text-[11px] font-[400] tracking-[0.12em] text-white uppercase hover:opacity-80 transition-opacity"
                >
                  {link}
                </a>
              ))}
            </div>

            {/* NAV BAR — RIGHT (Credits) */}
            <div className="flex flex-col items-center sm:items-end text-center sm:text-right leading-[1.6] tracking-[0.08em] opacity-[0.7]">
              <span className="text-[9px] font-[400] text-white">DEVELOPED BY THE TEAM OF</span>
              <span className="text-[9px] font-[400] text-white uppercase">Pavlo Klymash</span>
            </div>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
