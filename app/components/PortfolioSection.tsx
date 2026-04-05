"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const PortfolioSection = () => {
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    let ctx = gsap.context(() => {
      // 1. Header Staggered Reveal
      gsap.fromTo(
        ".portfolio-title",
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          stagger: 0.2,
          ease: "power4.out",
          scrollTrigger: {
            trigger: ".portfolio-header",
            start: "top 85%",
          },
        }
      );

      // 2. Info Block Staggered Entrance
      const infoItems = gsap.utils.toArray<HTMLElement>(".portfolio-info-item");
      infoItems.forEach((item, idx) => {
        gsap.fromTo(
          item,
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            delay: idx * 0.1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: item,
              start: "top 90%",
            },
          }
        );
      });

      // 3. Grid Image Reveal
      const images = gsap.utils.toArray<HTMLElement>(".portfolio-grid-img");
      images.forEach((img, idx) => {
        gsap.fromTo(
          img,
          { scale: 1.1, clipPath: "inset(100% 0% 0% 0%)" },
          {
            scale: 1,
            clipPath: "inset(0% 0% 0% 0%)",
            duration: 1.5,
            ease: "power4.out",
            scrollTrigger: {
              trigger: img,
              start: "top 95%",
            },
          }
        );
      });

      // 4. Corner Brackets Animation
      gsap.fromTo(
        ".portfolio-bracket",
        { opacity: 0, scale: 1.2 },
        {
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".portfolio-grid-container",
            start: "top 80%",
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="w-full bg-[#FFFFFF] py-16 md:py-24 font-[family-name:var(--font-montserrat)] antialiased overflow-hidden"
    >
      <div className="max-w-[1280px] mx-auto px-6 md:px-10 flex flex-col items-center">
        {/* PAGE HEADER */}
        <header className="portfolio-header relative flex flex-col items-center mb-12 md:mb-[80px] w-full text-center">
          <div className="relative flex flex-col -ml-30 items-center leading-none">
            <h1 className="portfolio-title text-[clamp(44px,11vw,100px)] font-[400] text-[#1A1A1A] uppercase leading-[0.85] md:-translate-x-[60px]">
              OUR
            </h1>
            <h1 className="portfolio-title text-[clamp(52px,13vw,130px)] font-[400] text-[#6B3A2A] uppercase leading-[0.9] md:translate-x-[60px] -mt-2 md:-mt-[10px]">
              PORTFOLIO
            </h1>
          </div>
        </header>

        {/* PROJECT BLOCK */}
        <div className="relative flex flex-col w-full items-center">
          {/* ZONE A — TEXT INFO BLOCK */}
          <div className="flex flex-col w-full mb-12 md:mb-16">
            <div className="relative flex flex-col md:flex-row justify-between items-start pt-1 w-full max-w-[960px] mx-auto group">
              {/* Info Column */}
              <div className="flex flex-col items-start w-full">
                <h2 className="portfolio-info-item text-[24px] md:text-[32px] font-[700] text-[#1A1A1A] uppercase tracking-[0.1em] leading-none mb-6">
                  SAUNA DESIGN
                </h2>
                <div className="flex flex-col lg:flex-row gap-10 md:gap-[48px] items-start w-full">
                  <p className="portfolio-info-item text-[12px] font-[400] text-[#333333] leading-[1.8] text-justify max-w-full lg:max-w-[280px]">
                    Throughout this entire construction process, we paid special attention to every detail to create the perfect environment. From the selection of the highest quality materials to the precise installation of each element. We intended the sauna to be not only functional, but also visually appealing. The customer was satisfied with the result.
                  </p>

                  {/* Meta Block */}
                  <div className="portfolio-info-item flex flex-row flex-wrap gap-12 md:gap-8 w-full sm:w-auto">
                    <div className="flex flex-col items-start">
                      <span className="text-[9px] font-[400] text-[#888888] lowercase tracking-[0.05em] mb-2">
                        location
                      </span>
                      <span className="text-[24px] md:text-[30px] font-[700] text-[#1A1A1A] uppercase leading-[1.0]">
                        KYIV
                      </span>
                    </div>
                    <div className="flex flex-col items-start">
                      <span className="text-[9px] font-[400] text-[#888888] lowercase mb-2">
                        terms of execution
                      </span>
                      <span className="text-[24px] md:text-[30px] font-[700] text-[#1A1A1A] uppercase leading-[1.0]">
                        30 DAYS
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Ghost Number - Absolute Position with subtle layout shift on mobile */}
              <div
                className="portfolio-info-item absolute -top-8 right-0 md:-right-[20px] text-[100px] md:text-[140px] font-[100] text-[#CCCCCC] opacity-[0.4] leading-none select-none pointer-events-none z-0"
                style={{ WebkitTextStroke: "1px #CCCCCC", color: "transparent" }}
                data-scroll
                data-scroll-speed="0.1"
              >
                01
              </div>
            </div>
          </div>

          {/* IMAGE GRID - Responsive with gap and safe padding */}
          <div className="portfolio-grid-container relative w-full overflow-visible">
            {/* Corner Bracket Decoration for Hero Area */}
            <div className="portfolio-bracket absolute top-[-6px] left-[-6px] w-[24px] h-[24px] border-t border-l border-[#AAAAAA] z-10" />
            <div className="portfolio-bracket absolute top-[-6px] right-[-6px] md:right-auto md:left-[calc(40.5%-24px+6px)] w-[24px] h-[24px] border-t border-r border-[#AAAAAA] z-10" />

            <div className="flex flex-col md:grid md:grid-cols-[1.5fr_1.1fr_1.1fr] md:grid-rows-[320px_280px] gap-2 lg:gap-3 bg-white">
              {/* Image 1: Hero */}
              <div
                className="portfolio-grid-img relative w-full aspect-[4/3] md:h-full overflow-hidden"
                data-scroll
                data-scroll-speed="0.02"
              >
                <Image
                  src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=1000&auto=format&fit=crop"
                  alt="Sauna Hero"
                  fill
                  className="object-cover object-center"
                />
              </div>
              {/* Image 2: Top Mid */}
              <div
                className="portfolio-grid-img relative w-full aspect-[4/3] md:h-full overflow-hidden"
                data-scroll
                data-scroll-speed="0.04"
              >
                <Image
                  src="https://images.unsplash.com/photo-1621293954908-d81149e01e40?q=80&w=1000&auto=format&fit=crop"
                  alt="Sauna Detail 1"
                  fill
                  className="object-cover object-center"
                />
              </div>
              {/* Image 3: Top Right */}
              <div
                className="portfolio-grid-img relative w-full aspect-[4/3] md:h-full overflow-hidden"
                data-scroll
                data-scroll-speed="0.06"
              >
                <Image
                  src="https://images.unsplash.com/photo-1515233157545-22af0c0344d9?q=80&w=1000&auto=format&fit=crop"
                  alt="Sauna Detail 2"
                  fill
                  className="object-cover object-center"
                />
              </div>
              {/* Image 4: Bot Left */}
              <div
                className="portfolio-grid-img relative w-full aspect-[4/3] md:h-full overflow-hidden"
                data-scroll
                data-scroll-speed="0.03"
              >
                <Image
                  src="https://images.unsplash.com/photo-1629910276241-98c4d832113f?q=80&w=1000&auto=format&fit=crop"
                  alt="Sauna Detail 3"
                  fill
                  className="object-cover object-center"
                />
              </div>
              {/* Image 5: Bot Mid */}
              <div
                className="portfolio-grid-img relative w-full aspect-[4/3] md:h-full overflow-hidden"
                data-scroll
                data-scroll-speed="0.05"
              >
                <Image
                  src="https://images.unsplash.com/photo-1615873968403-89e068628260?q=80&w=1000&auto=format&fit=crop"
                  alt="Sauna Detail 4"
                  fill
                  className="object-cover object-center"
                />
              </div>
              {/* Image 6: Bot Right */}
              <div
                className="portfolio-grid-img relative w-full aspect-[4/3] md:h-full overflow-hidden"
                data-scroll
                data-scroll-speed="0.07"
              >
                <Image
                  src="https://images.unsplash.com/photo-1553051021-9f94520a6cad?q=80&w=1000&auto=format&fit=crop"
                  alt="Sauna Detail 5"
                  fill
                  className="object-cover object-center"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
