"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const services = [
  {
    text: "We implement interior design for buildings of all sizes. With a competent interior design, even a small apartment can be significantly expanded, modernised and visually enlarged, giving it more usable space.",
    img: "https://images.unsplash.com/photo-1620626011761-996317b8d101?q=80&w=1000&auto=format&fit=crop",
    reverse: false
  },
  {
    text: "A well-established system of managing all stages of work makes it possible to meet deadlines and complete the interior design without you. We visit the site, monitor the similarity between the design project and the actual situation, and control the correspondence to the colour scheme.",
    img: "https://images.unsplash.com/photo-1583847268964-b28ce8f89f20?q=80&w=1000&auto=format&fit=crop",
    reverse: true
  },
  {
    text: "Choosing materials and interior items together with a specialist is a comprehensive and cost-effective service for the client. It helps you to purchase stylistically justified and functional objects that will not stand out from the overall picture of your home.",
    img: "https://images.unsplash.com/photo-1600607688066-890987f18a86?q=80&w=1000&auto=format&fit=crop",
    reverse: false
  }
];

export default function ServicesSection() {
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    let ctx = gsap.context(() => {
      // 1. Tagline & Logo
      gsap.fromTo('.service-header-elem',
        { y: -20, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 1, stagger: 0.2, ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
          }
        }
      );

      // 2. Headlines
      gsap.fromTo('.service-headline',
        { x: -50, opacity: 0, clipPath: "inset(0 100% 0 0)" },
        {
          x: 0, opacity: 1, clipPath: "inset(0 0% 0 0)", duration: 1.5, stagger: 0.2, ease: "power4.out",
          scrollTrigger: {
            trigger: '.service-headline-container',
            start: "top 80%",
          }
        }
      );

      // 3. Service items
      const items = gsap.utils.toArray<HTMLElement>('.service-item');
      items.forEach((item) => {
        const textWrapper = item.querySelector('.service-text-wrapper');
        const imgWrapper = item.querySelector('.service-img-wrapper');
        const ghostNum = item.querySelector('.service-ghost-num');
        const frame = item.querySelector('.service-frame');

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: item,
            start: "top 75%",
          }
        });

        tl.fromTo(imgWrapper,
          { y: 50, opacity: 0, scale: 0.95 },
          { y: 0, opacity: 1, scale: 1, duration: 1.2, ease: "power3.out" }
        )
          .fromTo(frame,
            { opacity: 0, scale: 0.95 },
            { opacity: 1, scale: 1, duration: 0.8, ease: "power2.out" },
            "-=0.8"
          )
          .fromTo(ghostNum,
            { x: 40, opacity: 0 },
            { x: 0, opacity: 1, duration: 1, ease: "power3.out" },
            "-=1"
          )
          .fromTo(textWrapper,
            { y: 30, opacity: 0 },
            { y: 0, opacity: 1, duration: 1, ease: "power3.out" },
            "-=1"
          );
      });

      // 4. CTA Button
      gsap.fromTo('.service-cta',
        { y: 40, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 1, ease: "power3.out",
          scrollTrigger: {
            trigger: '.service-cta',
            start: "top 90%",
          }
        }
      );

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="services"
      ref={containerRef}
      className="w-full bg-[#FFFFFF] px-6 pb-20 md:px-[80px] font-[family-name:var(--font-montserrat)] relative z-10"
      style={{ textRendering: 'optimizeLegibility', WebkitFontSmoothing: 'antialiased' }}
    >
      {/* SECTION HEADER BLOCK */}
      <div className="relative w-full pt-[60px] pb-[80px] flex flex-col">

        {/* TAGLINE */}
        <div className="service-header-elem relative md:absolute top-0 md:top-[60px] left-0 mb-4 md:mb-0 z-10 text-[11px] font-normal uppercase tracking-[0.06em] leading-[1.7] text-[#1A1A1A]">
          DOING OUR JOB<br />FROM THE BOTTOM<br />OF OUR HEARTS
        </div>

        {/* LOGO */}
        <div className="service-header-elem relative md:absolute top-0 md:top-[60px] right-0 z-10 flex items-center gap-1 text-[13px] font-[600] uppercase text-[#1A1A1A] mt-4 md:mt-0">
          <svg className="w-3.5 h-3.5 text-[#1A1A1A]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <rect x="3" y="3" width="18" height="18" />
            <path d="M3 9h18M9 21V9" />
          </svg>
          DEV.UN<sup className="text-[8px]">®</sup>
        </div>

        {/* OUR SERVICES HEADLINE */}
        <div className="service-headline-container flex flex-col w-full mt-12 md:mt-[80px] mb-[40px] md:mb-[20px]">
          <h2 className="service-headline ml-0 md:ml-[35%] text-[50px] md:text-[clamp(80px,10vw,130px)] font-[400] uppercase tracking-[-0.01em] leading-[0.9] text-[#111111] font-[family-name:var(--font-montserrat)]">
            OUR
          </h2>
          <h2 className="service-headline ml-0 md:ml-[35%] pl-12 md:pl-[100px] text-[50px] md:text-[clamp(80px,10vw,130px)] font-[400] uppercase tracking-[-0.01em] leading-[0.9] text-[#6B3F2A] font-[family-name:var(--font-montserrat)]">
            SERVICES
          </h2>
        </div>
      </div>

      {/* SERVICE ITEMS */}
      <div className="flex flex-col w-full">
        {services.map((s, idx) => (
          <div
            key={idx}
            className={`service-item flex w-full items-center justify-between mb-24 md:mb-[100px] flex-col ${s.reverse ? 'md:flex-row-reverse' : 'md:flex-row'}`}
          >
            {/* TEXT COLUMN */}
            <div className="service-text-wrapper w-full md:w-[45%] flex flex-col justify-center relative z-10 order-2 md:order-none mt-12 md:mt-0">
              <h3 className="text-[18px] font-[700] uppercase tracking-[0.06em] text-[#111111] mb-[20px]">
                INTERIOR DESIGN <span className="ml-[12px]">—</span>
              </h3>
              <p className="text-[13px] font-[600] text-[#2A2A2A] text-justify leading-[1.75] max-w-full md:max-w-[380px]">
                {s.text}
              </p>
            </div>

            {/* IMAGE COLUMN */}
            <div className="w-full md:w-[50%] relative z-0 order-1 md:order-none">
              {/* FRAME BORDER */}
              <div
                className="service-frame absolute -inset-[15px] md:-inset-[20px] border border-[#C8B89A] bg-transparent -z-10"
                data-scroll data-scroll-speed="-0.02"
              />

              {/* IMAGE */}
              <div
                className="service-img-wrapper relative w-full h-[280px] md:h-[350px]"
                data-scroll data-scroll-speed="0.05"
              >
                <Image
                  src={s.img}
                  alt="Interior Design Service"
                  fill
                  className="object-cover object-center"
                />
              </div>

              {/* GHOST NUMBER */}
              <span
                className="service-ghost-num absolute -top-[30px] md:-top-[60px] -right-[10px] md:-right-[20px] text-[70px] md:text-[clamp(70px,8vw,100px)] font-[400] text-neutral-600 z-0 leading-none pointer-events-none select-none"
                data-scroll data-scroll-speed="0.15"
              >
                0{idx + 1}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* CTA BUTTON */}
      <div className="mt-8 md:mt-[80px] mb-[80px] flex justify-center md:justify-start">
        <a
          href="#estimate"
          className="service-cta rounded-br-4xl inline-flex items-center justify-center bg-[#C9A84C] text-white text-[10px] md:text-[12px] font-[700] uppercase tracking-[0.12em] px-6 py-4 md:px-[40px] md:py-[20px] rounded-[2px] hover:bg-[#B8943D] transition-colors duration-200"
        >
          CALCULATE THE ESTIMATE <span className="ml-[8px] font-normal leading-none">&#x2197;</span>
        </a>
      </div>

    </section>
  );
}
