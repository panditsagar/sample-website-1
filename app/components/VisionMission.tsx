"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { 
  FiArrowRight, 
  FiUsers, 
  FiHeart, 
  FiTarget, 
  FiCompass 
} from "react-icons/fi";

interface AccordionItem {
  id: number;
  number: string;
  category: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  cardBgExpanded: string;
  cardBgCollapsed: string;
  accent: string;
  badgeColor: string;
}

export default function VisionMission() {
  const [expandedId, setExpandedId] = useState<number>(1); // Mission expanded by default

  const accordionItems: AccordionItem[] = [
    {
      id: 0,
      number: "01",
      category: "Philosophy",
      title: "What I Believe",
      description:
        "Everyone has a story worth telling. Your mess is your message. Your struggles become the bridge that helps others cross their own challenges.",
      icon: <FiHeart className="w-5 h-5 text-pink-400" />,
      cardBgExpanded: "bg-gradient-to-b from-[#28122c] via-[#1e0c21] to-[#140716]",
      cardBgCollapsed: "bg-[#1a0b1d] hover:bg-[#240f29]",
      accent: "from-pink-500/25 via-purple-500/10 to-transparent",
      badgeColor: "text-pink-400 bg-pink-950/80",
    },
    {
      id: 1,
      number: "02",
      category: "Mission",
      title: "What I'm Building",
      description:
        "A global community of 100,000 knowledge entrepreneurs living life on their own terms — financially free, location independent, and deeply fulfilled.",
      icon: <FiTarget className="w-5 h-5 text-cyan-400" />,
      cardBgExpanded: "bg-gradient-to-b from-[#0d2a38] via-[#091d27] to-[#051118]",
      cardBgCollapsed: "bg-[#081a23] hover:bg-[#0e2734]",
      accent: "from-cyan-500/25 via-blue-500/10 to-transparent",
      badgeColor: "text-cyan-400 bg-cyan-950/80",
    },
    {
      id: 2,
      number: "03",
      category: "Purpose",
      title: "Who I Help",
      description:
        "Experts, coaches, consultants, and creators who are ready to package their knowledge, build their audience, and create a wildly profitable online business.",
      icon: <FiCompass className="w-5 h-5 text-amber-400" />,
      cardBgExpanded: "bg-gradient-to-b from-[#2e1d0d] via-[#211408] to-[#150c04]",
      cardBgCollapsed: "bg-[#1b1006] hover:bg-[#271809]",
      accent: "from-amber-500/25 via-orange-500/10 to-transparent",
      badgeColor: "text-amber-400 bg-amber-950/80",
    },
  ];

  return (
    <section className="relative w-full bg-black pt-16 pb-28 text-white select-none overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[450px] bg-gradient-to-r from-blue-900/10 via-purple-900/15 to-cyan-900/10 blur-[160px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        
        {/* Top Header / Vision */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row   justify-between gap-6 mb-16"
        >
          {/* Left Side: Eyebrow + Heading */}
          <div className="max-w-xl">
           
            <h2 className="text-2xl sm:text-3xl lg:text-5xl font-extrabold tracking-tight text-white leading-snug">
              Building the Future of Education
            </h2>
          </div>

          {/* Right Side: Subheading Description */}
          <div className="max-w-md">
            <p className="text-base sm:text-lg text-white/70 font-normal leading-relaxed">
              Transforming how knowledge is shared, valued, and monetized in the digital age.
            </p>
          </div>
        </motion.div>

        {/* Horizontal Expanding Accordion Container with Distinct Card Colors */}
        <div className="flex flex-col md:flex-row items-stretch gap-4 sm:gap-6 min-h-[380px] sm:min-h-[420px] mb-16">
          {accordionItems.map((item) => {
            const isExpanded = expandedId === item.id;
            return (
              <motion.div
                key={item.id}
                layout
                onClick={() => setExpandedId(item.id)}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className={`relative rounded-xl overflow-hidden transition-all duration-500 cursor-pointer select-none flex flex-col justify-between ${
                  isExpanded
                    ? `flex-[3.5] ${item.cardBgExpanded} shadow-2xl p-8 sm:p-10`
                    : `flex-[1] ${item.cardBgCollapsed} p-6 sm:p-8 flex-col justify-between items-center text-center`
                }`}
              >
                {/* Ambient Subtle Card Glow when expanded */}
                {isExpanded && (
                  <div className={`absolute top-0 right-0 w-72 h-72 bg-gradient-to-bl ${item.accent} blur-3xl pointer-events-none`} />
                )}

                {/* EXPANDED CONTENT */}
                {isExpanded ? (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="relative z-10 flex flex-col justify-between h-full"
                  >
                    <div>
                      {/* Top Category Badge & Icon */}
                      <div className="flex items-center justify-between mb-8">
                        <div className={`inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-[0.2em] ${item.badgeColor}`}>
                          <span>{item.number}</span>
                          <span>•</span>
                          <span>{item.category}</span>
                        </div>

                        <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-md">
                          {item.icon}
                        </div>
                      </div>

                      {/* Main Title */}
                      <h3 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4 leading-tight">
                        {item.title}
                      </h3>

                      {/* Description */}
                      <p className="text-base sm:text-xl text-white/90 leading-relaxed font-normal max-w-2xl">
                        "{item.description}"
                      </p>
                    </div>

                    {/* Bottom Status Tag */}
                    <div className="pt-6 text-xs font-semibold uppercase tracking-widest text-white/40 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-white/60 animate-pulse" />
                      <span>Active Pillar</span>
                    </div>
                  </motion.div>
                ) : (
                  /* COLLAPSED CONTENT - LARGE SMOOTH BOLD CATEGORY */
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="relative z-10 flex items-center justify-center h-full w-full py-8"
                  >
                    <span className="text-xl sm:text-2xl lg:text-3xl font-black uppercase tracking-[0.3em] text-white/80 group-hover:text-white transition-all duration-300 -rotate-90 whitespace-nowrap drop-shadow-xl select-none">
                      {item.category}
                    </span>
                  </motion.div>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Call-to-Action Bar */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-xl p-6 sm:p-10 bg-[#0c1822] backdrop-blur-xl flex flex-col sm:flex-row items-center justify-between gap-6 shadow-2xl"
        >
          <div className="flex items-center gap-4 text-center sm:text-left">
            <div className="w-12 h-12 rounded-full bg-cyan-950/80 flex items-center justify-center text-cyan-400 shrink-0">
              <FiUsers className="w-6 h-6" />
            </div>
            <div>
              <div className="text-xs font-bold uppercase tracking-widest text-cyan-400 mb-1">
                Join 35,000+ coaches in the movement
              </div>
              <div className="text-base sm:text-lg font-bold text-white">
                From rock bottom to ₹1,000 crore <span className="text-white/50 text-xs font-normal ml-2">• 5 min read</span>
              </div>
            </div>
          </div>

          <a
            href="#"
            className="group pl-6 pr-2.5 py-3 rounded-full bg-white/15 hover:bg-white/25 backdrop-blur-xl transition-all shadow-lg text-white font-medium text-sm sm:text-base flex items-center gap-3.5 shrink-0 active:scale-95"
          >
            <span>Discover my story</span>
            <div className="w-8 h-8 rounded-full bg-white text-slate-950 flex items-center justify-center group-hover:scale-105 transition-transform">
              <FiArrowRight className="w-4 h-4" />
            </div>
          </a>
        </motion.div>

      </div>
    </section>
  );
}
