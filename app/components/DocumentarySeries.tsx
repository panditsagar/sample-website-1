"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { FiPlay, FiPlus, FiCheck, FiX } from "react-icons/fi";

interface Episode {
  id: number;
  number: string;
  duration: string;
  title: string;
  description: string;
  thumbnail: string;
  videoId: string;
  tags: string[];
}

const episodes: Episode[] = [
  {
    id: 1,
    number: "EPISODE 1",
    duration: "33:25",
    title: "My Journey from Failure to India's Top AI Digital Coach",
    description:
      "Where it all started — a moment of reckoning. Discover how a series of devastating personal and financial setbacks became the ultimate catalyst for reinventing everything and building India's premier AI-driven digital coaching ecosystem.",
    thumbnail: "https://img.youtube.com/vi/VPt7tDok7xM/maxresdefault.jpg",
    videoId: "VPt7tDok7xM",
    tags: ["Origin Story", "AI Coaching", "Failure to Success"],
  },
  {
    id: 2,
    number: "EPISODE 2",
    duration: "25:46",
    title: "How I Built a ₹1,000 Crore Coaching Movement",
    description:
      "Building an empire from scratch. Step inside the exact frameworks, community building strategies, and scalable systems used to impact over 51,000+ lives and generate ₹1,000 Crores in total community movement.",
    thumbnail: "https://img.youtube.com/vi/S5l_CkDnmXs/maxresdefault.jpg",
    videoId: "S5l_CkDnmXs",
    tags: ["Scaling", "Coaching Empire", "₹1,000 CR Impact"],
  },
  {
    id: 3,
    number: "EPISODE 3",
    duration: "20:27",
    title: "How to Build Unshakable Courage?",
    description:
      "The psychology of fear and how to overcome it. Learn how to break free from self-doubt, overcome paralysis by analysis, and cultivate unshakable courage to take high-stakes action when everything is on the line.",
    thumbnail: "https://img.youtube.com/vi/lGkHMq3GROk/maxresdefault.jpg",
    videoId: "lGkHMq3GROk",
    tags: ["Courage", "Overcoming Fear", "Mindset"],
  },
  {
    id: 4,
    number: "EPISODE 4",
    duration: "22:00",
    title: "The Power of Personal Branding",
    description:
      "Why your story is your greatest asset. Discover how to package your unique life experiences, build undeniable market authority, and attract a passionate community of loyal followers through authentic storytelling.",
    thumbnail: "https://img.youtube.com/vi/LaVFNKM6uNs/maxresdefault.jpg",
    videoId: "LaVFNKM6uNs",
    tags: ["Personal Brand", "Authority", "Storytelling"],
  },
];

export default function DocumentarySeries() {
  const [activeEpisode, setActiveEpisode] = useState<Episode>(episodes[0]);
  const [inWatchlist, setInWatchlist] = useState(false);
  const [isPlayingVideo, setIsPlayingVideo] = useState(false);

  return (
    <section className="w-full bg-black pb-16 px-4 sm:px-8">
      <div className="relative max-w-7xl mx-auto rounded-2xl overflow-hidden     min-h-[620px] sm:min-h-[700px] text-white select-none shadow-2xl flex flex-col justify-between p-6 sm:p-12">
        {/* Background Backdrop Image */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeEpisode.id}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.7 }}
            className="absolute inset-0 z-0"
          >
            <img
              src={activeEpisode.thumbnail}
              alt={activeEpisode.title}
              className="w-full h-full   object-center brightness-75 contrast-105"
            />
          </motion.div>
        </AnimatePresence>

        {/* Bottom One-Line Layout Container */}
        <div className="relative z-20 flex flex-col lg:flex-row lg:items-end justify-between gap-8 mt-auto ">
          {/* Left: Hero Info Column */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeEpisode.id}
              initial={{ opacity: 0, x: -25 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 25 }}
              transition={{ duration: 0.5 }}
              className="max-w-xl lg:max-w-2xl"
            >
              {/* CTA Buttons Row */}
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setIsPlayingVideo(true)}
                  className="group pl-6 pr-2.5 py-2.5 rounded-full bg-white/15 hover:bg-white/25 backdrop-blur-xl border border-white/25 transition-all shadow-lg text-white font-medium text-sm sm:text-base flex items-center gap-3.5 active:scale-95"
                >
                  <span>Watch Episode</span>
                  <div className="w-8 h-8 rounded-full bg-white text-slate-950 flex items-center justify-center group-hover:scale-105 transition-transform">
                    <FiPlay className="w-3.5 h-3.5 fill-current translate-x-0.5" />
                  </div>
                </button>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Right: Bottom Right Mini-Thumbnail Bar */}
          <div className="shrink-0">
            <div className="flex items-center gap-2 sm:gap-2.5">
              {episodes.map((ep) => {
                const isActive = activeEpisode.id === ep.id;
                return (
                  <button
                    key={ep.id}
                    onClick={() => {
                      setActiveEpisode(ep);
                      setIsPlayingVideo(false);
                    }}
                    className={`relative shrink-0 w-20 sm:w-24 h-12 sm:h-14 rounded-sm overflow-hidden border transition-all duration-300 group focus:outline-none ${
                      isActive
                        ? "border border-white/20   scale-110"
                        : "border-0 opacity-60 hover:opacity-100 hover:border-white/50"
                    }`}
                  >
                    <img
                      src={ep.thumbnail}
                      alt={ep.title}
                      className="w-full h-full object-cover object-center"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                    <div className="absolute bottom-1 left-1.5 text-[0.6rem] font-bold text-white tracking-tight drop-shadow-md">
                      Ep {ep.id}
                    </div>

                    {isActive && (
                      <div className="absolute inset-0 bg-black/40 backdrop-blur-[1px] flex items-center justify-center">
                        <FiPlay className="w-3.5 h-3.5 text-white fill-current" />
                      </div>
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Embedded YouTube Player Modal */}
      <AnimatePresence>
        {isPlayingVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 bg-black/90 backdrop-blur-2xl"
            onClick={() => setIsPlayingVideo(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-5xl aspect-video rounded-2xl overflow-hidden border border-white/10 bg-black shadow-2xl"
            >
              {/* Close Modal Button */}
              <button
                onClick={() => setIsPlayingVideo(false)}
                className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/80 border border-white/25 flex items-center justify-center text-white hover:bg-white/20 transition focus:outline-none"
                aria-label="Close Video"
              >
                <FiX className="w-5 h-5" />
              </button>

              {/* YouTube Video iFrame Player */}
              <iframe
                src={`https://www.youtube-nocookie.com/embed/${activeEpisode.videoId}?autoplay=1&rel=0`}
                title={activeEpisode.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full rounded-3xl border-0"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
