"use client";

import { motion } from "motion/react";
import { FiArrowRight, FiClock } from "react-icons/fi";

interface PodcastEpisode {
  id: number;
  episodeNumber: string;
  title: string;
  author: string;
  duration: string;
  coverImage: string;
}

const podcasts: PodcastEpisode[] = [
  {
    id: 1,
    episodeNumber: "Episode 9",
    title: "Everything I know (so far) on AI & digital coaching",
    author: "By Siddharth Rajsekar",
    duration: "2hr 23min",
    coverImage: "/podcast1.png",
  },
  {
    id: 2,
    episodeNumber: "Episode 8",
    title: "Design problems & scaling systems animation can answer",
    author: "By Siddharth Rajsekar",
    duration: "1hr 05min",
    coverImage: "/podcast2.png",
  },
  {
    id: 3,
    episodeNumber: "Episode 7",
    title: "Your only challenge is to focus and execute flawlessly",
    author: "By Siddharth Rajsekar",
    duration: "1hr 50min",
    coverImage: "/podcast3.png",
  },
  {
    id: 4,
    episodeNumber: "Episode 6",
    title: "Building a ₹1,000 CR movement & freedom ecosystem",
    author: "By Siddharth Rajsekar",
    duration: "1hr 50min",
    coverImage: "/podcast4.png",
  },
];

export default function LatestPodcast() {
  return (
    <section className="relative w-full bg-black py-20 sm:py-28 text-white select-none overflow-hidden">
      {/* Background Ambient Glow matching website theme */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-gradient-to-r from-blue-900/10 via-purple-900/15 to-cyan-900/10 blur-[150px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        {/* Header Row */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              Listen & Transform
            </h2>
          </motion.div>

          {/* View All Episodes Button matching site frosted glass pill theme */}
          <motion.a
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            href="#"
            className="group pl-6 pr-2.5 py-2.5 rounded-full bg-white/15 hover:bg-white/25 backdrop-blur-xl border border-white/25 transition-all shadow-lg text-white font-medium text-sm sm:text-base flex items-center gap-3.5 active:scale-95"
          >
            <span>View all episodes</span>
            <div className="w-8 h-8 rounded-full bg-white text-slate-950 flex items-center justify-center group-hover:scale-105 transition-transform">
              <FiArrowRight className="w-4 h-4" />
            </div>
          </motion.a>
        </div>

        {/* 2x2 Podcast Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {podcasts.map((podcast, idx) => (
            <motion.div
              key={podcast.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group rounded-xl bg-white/[0.03]    p-6   transition-all duration-500 flex flex-col sm:flex-row items-center sm:items-stretch gap-6 cursor-pointer shadow-2xl  "
            >
              {/* Cover Art with Real Reel Image Peeking Effect */}
              <div className="relative shrink-0 flex items-center pr-5">
                {/* Real Peeking Reel Image */}
                <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden absolute right-0 top-1/2 -translate-y-1/2 z-0 shadow-xl group-hover:translate-x-4 transition-transform duration-500 ease-out">
                  <img
                    src="/reel.png"
                    alt="Vinyl reel"
                    className="w-full h-full object-cover group-hover:rotate-45 transition-transform duration-700 ease-out"
                  />
                </div>

                {/* Real Podcast Cover Artwork */}
                <div className="relative z-10 w-32 h-32 sm:w-40 sm:h-40 rounded-xl overflow-hidden shadow-2xl shrink-0   bg-slate-900">
                  <img
                    src={podcast.coverImage}
                    alt={podcast.title}
                    className="w-full h-full object-cover object-center   transition-transform duration-500"
                  />
                </div>
              </div>

              {/* Episode Content Info */}
              <div className="flex flex-col justify-between flex-1 py-1 text-center sm:text-left">
                <div>
                  <h3 className="text-base sm:text-lg font-extrabold text-white leading-snug tracking-tight mb-2   transition-colors line-clamp-2">
                    {podcast.title}
                  </h3>
                  <p className="text-xs text-white/60 font-medium mb-4">
                    {podcast.author}
                  </p>
                </div>

                {/* Duration Row */}
                <div className="flex items-center justify-center sm:justify-start gap-1.5 text-xs font-semibold text-white/70">
                  <FiClock className="w-3.5 h-3.5 text-cyan-400/80" />
                  <span>{podcast.duration}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
