"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const unsplashImages = [
  "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1510074377623-8cf13fb86c08?q=80&w=1000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=1000&auto=format&fit=crop",
];

const AboutSection = () => {
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    let ctx = gsap.context(() => {
      // 1. Micro Label Reveal
      gsap.fromTo(
        ".about-label span",
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
          },
        }
      );

      // 2. Headlines Staggered Entry
      gsap.fromTo(
        ".about-headline",
        { y: 60, opacity: 0, clipPath: "inset(0% 0% 100% 0%)" },
        {
          y: 0,
          opacity: 1,
          clipPath: "inset(0% 0% 0% 0%)",
          duration: 1.2,
          stagger: 0.2,
          ease: "power4.out",
          scrollTrigger: {
            trigger: ".about-headline-container",
            start: "top 75%",
          },
        }
      );

      // 3. Left Column: Decorative SVG & Connector
      gsap.fromTo(
        ".about-svg path",
        { strokeDasharray: 1000, strokeDashoffset: 1000 },
        {
          strokeDashoffset: 0,
          duration: 2,
          ease: "power2.inOut",
          scrollTrigger: {
            trigger: ".about-svg",
            start: "top 85%",
          },
        }
      );

      gsap.fromTo(
        ".about-connector",
        { scaleY: 0, transformOrigin: "top" },
        {
          scaleY: 1,
          duration: 1.5,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".about-photo-stack",
            start: "top 80%",
          },
        }
      );

      // 4. Photo Stack Staggered Entry
      const photos = gsap.utils.toArray<HTMLElement>(".about-photo-item");
      photos.forEach((photo, idx) => {
        gsap.fromTo(
          photo,
          { y: 50, opacity: 0, scale: 0.95 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: photo,
              start: "top 85%",
            },
          }
        );
      });

      // 5. Stats Staggered Column
      const statItems = gsap.utils.toArray<HTMLElement>(".about-stat-item");
      statItems.forEach((stat) => {
        const num = stat.querySelector(".stat-number");
        const title = stat.querySelector(".stat-title-row");
        const para = stat.querySelector(".stat-para");

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: stat,
            start: "top 90%",
          },
        });

        tl.fromTo(
          num,
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }
        )
          .fromTo(
            title,
            { y: 20, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.6, ease: "power3.out" },
            "-=0.4"
          )
          .fromTo(
            para,
            { y: 20, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.6, ease: "power3.out" },
            "-=0.4"
          );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative w-full bg-[#FFFFFF] py-12 pb-24 overflow-hidden font-[family-name:var(--font-montserrat)] antialiased"
    >
      {/* Hero Headline Block */}
      <div className="relative w-full px-20 pt-12 pb-0">
        {/* Micro Label */}
        <div className="about-label absolute top-12 left-20 flex flex-col text-[#0B0B0B] text-[11px] font-normal uppercase tracking-[0.06em] leading-[1.5]">
          <span>LEARN MORE</span>
          <span>ABOUT THE</span>
          <span>COMPANY</span>
        </div>

        {/* Headline */}
        <div className="about-headline-container flex flex-col items-center justify-center w-full">
          <div className="flex flex-col font-[400]">
            <h2 className="about-headline text-[#0B0B0B] font-medium text-[clamp(80px,10vw,118px)] leading-[0.9] tracking-[-0.03em] uppercase">
              ABOUT
            </h2>
            <h2 className="about-headline text-[#6B3F2A] text-[clamp(80px,10vw,118px)] font-medium leading-[0.9] tracking-[-0.03em] uppercase pl-[80px]">
              COMPANY
            </h2>
          </div>
        </div>
      </div>

      {/* 2-Column Content Block */}
      <div className="flex flex-row w-full px-20 gap-[60px] mt-12 items-start">
        {/* Left Column */}
        <div className="relative w-[54%]">
          {/* Decorative Outlined SVG */}
          <div
            className="about-svg absolute -left-10 top-20 w-[280px] h-[600px] z-0 pointer-events-none"
            data-scroll
            data-scroll-speed="-0.05"
          >
            <svg
              viewBox="0 0 280 600"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full"
            >
              <path
                d="M40 50L240 50L40 250L240 250"
                stroke="#C8B89A"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <path
                d="M60 350C60 450 220 450 220 350"
                stroke="#C8B89A"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <path
                d="M80 500L200 500M80 540L160 540"
                stroke="#C8B89A"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </div>

          {/* Connector Lines */}
          <div className="absolute left-[165px] top-0 bottom-0 z-1 pointer-events-none">
            {/* Vertical Line */}
            <div className="about-connector absolute top-0 bottom-7 w-[1px] bg-[#C8B89A]" />
            {/* Short Horizontal Line at Top */}
            <div className="about-connector h-top absolute top-0 right-0 w-[60px] h-[1px] bg-[#C8B89A] translate-x-full origin-left" />
          </div>

          {/* Three Framed Photo Items */}
          <div className="about-photo-stack flex flex-col ml-[160px] z-[2] relative">
            {unsplashImages.map((url, idx) => (
              <div
                key={idx}
                className="about-photo-item relative mb-7 w-[320px] h-[240px]"
                data-scroll
                data-scroll-speed={0.02 * (idx + 1)}
              >
                {/* Frame Border */}
                <div
                  className="absolute inset-[-12px] border border-[#C8B89A] bg-transparent z-0 rounded-[0px]"
                  data-scroll
                  data-scroll-speed="-0.02"
                />
                {/* Actual Image */}
                <div className="relative w-full h-full z-[1]">
                  <Image
                    src={url}
                    alt={`Editorial photography ${idx + 1}`}
                    fill
                    className="object-cover object-center rounded-[0px]"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column */}
        <div className="flex flex-col w-[46%] gap-[72px] pt-5">
          {/* Stat 1 */}
          <div className="about-stat-item flex flex-col">
            <span className="stat-number text-[#0B0B0B] font-bold text-[clamp(64px,7vw,84px)] font-black tracking-[-0.02em]">
              45+
            </span>
            <div className="stat-title-row flex justify-between items-center w-full">
              <h3 className="text-[#0B0B0B] text-[24px] font-bold uppercase tracking-[0.06em]">
                DESIGN PROJECTS
              </h3>
              <span className="text-[24px] text-[#C8B89A]">—</span>
            </div>
            <p className="stat-para text-[#1E1E1E] text-[14px] font-normal leading-[1.65] max-w-[400px] mt-4 text-left">
              prove that owners of large commercial facilities, owners of houses
              and apartments are willing to work with us. We are happy to
              provide you with samples of real projects.
            </p>
          </div>

          {/* Stat 2 */}
          <div className="about-stat-item flex flex-col">
            <span className="stat-number text-[#0B0B0B] font-bold text-[clamp(64px,7vw,84px)] font-black tracking-[-0.02em]">
              20+
            </span>
            <div className="stat-title-row flex justify-between items-center w-full">
              <h3 className="text-[#0B0B0B] text-[24px] font-bold uppercase tracking-[0.06em]">
                EMPLOYEES
              </h3>
              <span className="text-[24px] text-[#C8B89A]">—</span>
            </div>
            <p className="stat-para text-[#1E1E1E] text-[14px] font-normal leading-[1.65] max-w-[400px] mt-4 text-left">
              are always ready to answer your questions and save you time spent
              on repairs and searching for interior design references.
            </p>
          </div>

          {/* Stat 3 */}
          <div className="about-stat-item flex flex-col">
            <span className="stat-number text-[#0B0B0B] font-bold text-[clamp(64px,7vw,84px)] font-black tracking-[-0.02em]">
              100+
            </span>
            <div className="stat-title-row flex justify-between items-center w-full">
              <h3 className="text-[#0B0B0B] text-[24px] font-bold uppercase tracking-[0.06em]">
                CONTRACTORS
              </h3>
              <span className="text-[24px] text-[#C8B89A]">—</span>
            </div>
            <p className="stat-para text-[#1E1E1E] text-[14px] font-normal leading-[1.65] max-w-[400px] mt-4 text-left">
              guarantee on-time completion of assigned tasks, personal support
              and thorough control of interior design at all stages.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
