"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { FiStar, FiArrowRight, FiCheckCircle } from "react-icons/fi";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  achievement: string;
  quote: string;
  avatar: string;
  stars: number;
}

const testimonialsCol1: Testimonial[] = [
  {
    id: 1,
    name: "Pooja Puneet",
    role: "Life & India's Top Habits Coach",
    achievement: "₹5+ Crore Generated",
    quote:
      "Joining the Freedom Business Model completely revolutionized my coaching business. I went from struggling to get clients to scaling a community of thousands while working on my own terms.",
    avatar: "/bg.png",
    stars: 5,
  },
  {
    id: 2,
    name: "Sanjeev Jain",
    role: "Business Automation Expert",
    achievement: "₹12+ Crore Impact",
    quote:
      "The systems and frameworks taught here are pure gold. Siddharth's guidance enabled me to build a high-ticket ecosystem that automates client onboarding and delivers massive value.",
    avatar: "/bg.png",
    stars: 5,
  },
];

const testimonialsCol2: Testimonial[] = [
  {
    id: 3,
    name: "Niddhi Parmar",
    role: "Parenting & Family Transformation Coach",
    achievement: "15,000+ Students Mentored",
    quote:
      "This movement gave me clarity, confidence, and a bulletproof blueprint. I transitioned from a traditional consultant to running a thriving digital academy right from home.",
    avatar: "/bg.png",
    stars: 5,
  },
  {
    id: 4,
    name: "Dr. Meghana Dikshit",
    role: "Brain Performance & Mindset Expert",
    achievement: "₹8+ Crore Generated",
    quote:
      "The Freedom Model is not just about revenue—it's about deep transformation and building a legacy. It helped me scale my reach to global audiences seamlessly.",
    avatar: "/bg.png",
    stars: 5,
  },
];

const testimonialsCol3: Testimonial[] = [
  {
    id: 5,
    name: "Aravindh Sundar",
    role: "Copywriting & Funnel Architect",
    achievement: "₹3.5+ Crore Generated",
    quote:
      "Siddharth's community is the most supportive and high-performance network in Asia. The return on investment has been life-changing for me and my family.",
    avatar: "/bg.png",
    stars: 5,
  },
  {
    id: 6,
    name: "Maneesh Paul",
    role: "Financial Freedom & Investor Coach",
    achievement: "8,500+ Members Mentored",
    quote:
      "I built a sustainable 7-figure online coaching business in less than 18 months using the digital ecosystem frameworks. The community culture is unparalleled.",
    avatar: "/bg.png",
    stars: 5,
  },
];

export default function Testimonials() {
  const col1Items = [
    ...testimonialsCol1,
    ...testimonialsCol1,
    ...testimonialsCol1,
  ];
  const col2Items = [
    ...testimonialsCol2,
    ...testimonialsCol2,
    ...testimonialsCol2,
  ];
  const col3Items = [
    ...testimonialsCol3,
    ...testimonialsCol3,
    ...testimonialsCol3,
  ];

  return (
    <section className="relative w-full bg-black pt-10  pb-10 text-white select-none overflow-hidden">
      {/* Background Ambient Radial Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[450px] bg-gradient-to-r from-cyan-900/10 via-purple-900/15 to-blue-900/10 blur-[160px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        {/* Top Header Area */}
        <div className="flex flex-col md:flex-row   justify-between gap-6 mb-16">
          {/* Left Side: Eyebrow + Heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-lg"
          >
            <h2 className="text-3xl sm:text-5xl  font-extrabold tracking-tight text-white leading-snug">
              Trusted by 9,098+ Experts
            </h2>
          </motion.div>

          {/* Right Side: Subheading Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="max-w-lg"
          >
            <p className="text-base sm:text-lg text-white/70 font-normal leading-relaxed">
              Real stories from coaches and entrepreneurs who transformed their
              lives with the Freedom Business Model.
            </p>
          </motion.div>
        </div>

        {/* 3 Vertical Marquee Columns Container */}
        <div className="relative h-[550px] sm:h-[850px] mb-16 overflow-hidden">
          {/* Top & Bottom Gradient Fade Overlay Masks */}
          <div className="absolute top-0 left-0 right-0 h-20 sm:h-28 z-20 bg-gradient-to-b from-black via-black/90 to-transparent pointer-events-none" />
          <div className="absolute bottom-0 left-0 right-0 h-20 sm:h-28 z-20 bg-gradient-to-t from-black via-black/90 to-transparent pointer-events-none" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 h-full">
            {/* COLUMN 1 (Scrolls Up) */}
            <div className="relative overflow-hidden">
              <div className="animate-vertical-marquee flex flex-col gap-4 hover:[animation-play-state:paused]">
                {col1Items.map((item, idx) => (
                  <div
                    key={`col1-${item.id}-${idx}`}
                    className="group rounded-xl bg-white/[0.03]   p-7 sm:p-8 transition-all duration-500 flex flex-col justify-between shadow-2xl hover:-translate-y-1.5 cursor-default"
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-6">
                        <div className="flex items-center gap-1 text-amber-400">
                          {[...Array(item.stars)].map((_, i) => (
                            <FiStar key={i} className="w-4 h-4 fill-current" />
                          ))}
                        </div>
                      </div>
                      <p className="text-sm sm:text-base text-white/80 leading-relaxed font-normal mb-8  ">
                        "{item.quote}"
                      </p>
                    </div>
                    <div className="flex items-center gap-3.5   ">
                      <div className="relative w-11 h-11 rounded-full overflow-hidden border border-white/20 shrink-0 bg-slate-900">
                        <Image
                          src={item.avatar}
                          alt={item.name}
                          fill
                          className="object-cover object-top"
                        />
                      </div>
                      <div>
                        <h4 className="text-base font-bold text-white tracking-tight   transition-colors">
                          {item.name}
                        </h4>
                        <p className="text-xs text-white/60 font-normal">
                          {item.role}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* COLUMN 2 (Scrolls Down / Reverse) */}
            <div className="relative overflow-hidden hidden md:block">
              <div className="animate-vertical-marquee-reverse flex flex-col gap-4 hover:[animation-play-state:paused]">
                {col2Items.map((item, idx) => (
                  <div
                    key={`col2-${item.id}-${idx}`}
                    className="group rounded-xl bg-white/[0.03]    p-7 sm:p-8 transition-all duration-500 flex flex-col justify-between shadow-2xl hover:-translate-y-1.5 cursor-default"
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-6">
                        <div className="flex items-center gap-1 text-amber-400">
                          {[...Array(item.stars)].map((_, i) => (
                            <FiStar key={i} className="w-4 h-4 fill-current" />
                          ))}
                        </div>
                      </div>
                      <p className="text-sm sm:text-base text-white/80 leading-relaxed font-normal mb-8  ">
                        "{item.quote}"
                      </p>
                    </div>
                    <div className="flex items-center gap-3.5  ">
                      <div className="relative w-11 h-11 rounded-full overflow-hidden border border-white/20 shrink-0 bg-slate-900">
                        <Image
                          src={item.avatar}
                          alt={item.name}
                          fill
                          className="object-cover object-top"
                        />
                      </div>
                      <div>
                        <h4 className="text-base font-bold text-white tracking-tight   transition-colors">
                          {item.name}
                        </h4>
                        <p className="text-xs text-white/60 font-normal">
                          {item.role}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* COLUMN 3 (Scrolls Up) */}
            <div className="relative overflow-hidden hidden lg:block">
              <div className="animate-vertical-marquee flex flex-col gap-4 hover:[animation-play-state:paused]">
                {col3Items.map((item, idx) => (
                  <div
                    key={`col3-${item.id}-${idx}`}
                    className="group rounded-xl bg-white/[0.03]  5 p-7 sm:p-8 transition-all duration-500 flex flex-col justify-between shadow-2xl hover:-translate-y-1.5 cursor-default"
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-6">
                        <div className="flex items-center gap-1 text-amber-400">
                          {[...Array(item.stars)].map((_, i) => (
                            <FiStar key={i} className="w-4 h-4 fill-current" />
                          ))}
                        </div>
                      </div>
                      <p className="text-sm sm:text-base text-white/80 leading-relaxed font-normal mb-8  ">
                        "{item.quote}"
                      </p>
                    </div>
                    <div className="flex items-center gap-3.5  ">
                      <div className="relative w-11 h-11 rounded-full overflow-hidden border border-white/20 shrink-0 bg-slate-900">
                        <Image
                          src={item.avatar}
                          alt={item.name}
                          fill
                          className="object-cover object-top"
                        />
                      </div>
                      <div>
                        <h4 className="text-base font-bold text-white tracking-tight   transition-colors">
                          {item.name}
                        </h4>
                        <p className="text-xs text-white/60 font-normal">
                          {item.role}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

       
      </div>
    </section>
  );
}
