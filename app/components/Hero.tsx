"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { 
  FiUsers, 
  FiTrendingUp, 
  FiAward, 
  FiFilm, 
  FiArrowRight, 
  FiMenu, 
  FiX 
} from "react-icons/fi";
import { useState } from "react";

export default function Hero() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="relative min-h-screen w-full flex flex-col justify-between overflow-hidden bg-black font-sans text-white select-none">
      {/* Background Image with Dark Vignette & Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/bg.png"
          alt="Hero background"
          fill
          priority
          className="object-cover object-bottom scale-105 transform brightness-[0.85] contrast-[1.05]"
        />
        {/* Dark subtle gradient & vignette overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/30 to-black/10" />
      </div>

      {/* Floating Glass Navbar */}
      <header className="relative z-20 w-full pt-6 px-4 sm:px-8 max-w-7xl mx-auto">
        <nav className="relative flex items-center justify-between px-4 py-3.5 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] transition-all">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-8 h-8 rounded-full flex items-center justify-center border border-white/30 bg-white/10 group-hover:bg-white/20 transition">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                className="w-5 h-5 text-white"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  d="M12 4C8 4 6 6 6 9c0 4 6 3 6 7 0 3-2 5-6 5"
                  strokeLinecap="round"
                />
                <path
                  d="M18 7c0-2-1.5-3.5-3.5-3.5S11 5 11 7c0 3.5 7 2.5 7 6.5 0 2.5-2 3.5-4.5 3.5"
                  strokeLinecap="round"
                  opacity="0.6"
                />
              </svg>
            </div>
            <span className="text-lg font-semibold tracking-tight text-white">
              Siddharth Rajsekar
            </span>
          </Link>

          {/* Navigation Links - Desktop */}
          <div className="hidden md:flex items-center space-x-8 text-sm font-medium">
            <Link
              href="#"
              className="text-white font-semibold transition hover:text-white/80"
            >
              About
            </Link>
            <Link
              href="#"
              className="text-white/70 hover:text-white transition"
            >
              Podcasts
            </Link>
            <Link
              href="#"
              className="text-white/70 hover:text-white transition"
            >
              Books
            </Link>
            <Link
              href="#"
              className="text-white/70 hover:text-white transition"
            >
              Reviews
            </Link>
            <Link
              href="#"
              className="text-white/70 hover:text-white transition"
            >
              In The News
            </Link>
          </div>

          {/* Action Button */}
          <div className="hidden md:block">
            <Link
              href="#"
              className="px-5 py-2.5 rounded-full text-sm font-medium text-white border border-white/25 bg-transparent hover:bg-white/20 transition-all backdrop-blur-sm shadow-sm"
            >
              Watch Now
            </Link>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-white p-1 focus:outline-none"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </nav>

        {/* Mobile Nav Menu Dropdown */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden mt-3 p-6 rounded-2xl bg-black/80 backdrop-blur-2xl border border-white/20 flex flex-col space-y-4 text-center shadow-xl"
          >
            <Link href="#" className="text-white font-semibold py-1">
              About
            </Link>
            <Link href="#" className="text-white/70 hover:text-white py-1">
              Podcasts
            </Link>
            <Link href="#" className="text-white/70 hover:text-white py-1">
              Books
            </Link>
            <Link href="#" className="text-white/70 hover:text-white py-1">
              Reviews
            </Link>
            <Link href="#" className="text-white/70 hover:text-white py-1">
              In The News
            </Link>
            <Link
              href="#"
              className="mt-2 px-5 py-2.5 rounded-full text-xs font-medium text-white border border-white/30 bg-white/15"
            >
              Watch Now
            </Link>
          </motion.div>
        )}
      </header>

      {/* Main Hero Content */}
      <main className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-12 py-16 md:py-24 flex flex-col justify-center flex-1">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className=""
        >
          {/* Main Title */}
          <h1 className="text-4xl sm:text-7xl max-w-2xl font-bold text-white tracking-tight leading-[1.1] mb-8 drop-shadow-md">
            From Failure to
            <br />
            India's Top AI Digital Coach
          </h1>

          {/* CTA & Subtext Section */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 sm:gap-6 mt-4">
            <Link
              href="#"
              className="group inline-flex items-center gap-3.5 pl-6 pr-2 py-2.5 rounded-full bg-white/15 hover:bg-white/25 backdrop-blur-xl border border-white/25 transition-all shadow-lg text-white font-medium text-sm"
            >
              <span>Watch This Series</span>
              <div className="w-8 h-8 rounded-full bg-white text-slate-900 flex items-center justify-center group-hover:scale-105 transition-transform">
                <FiArrowRight className="w-4 h-4" />
              </div>
            </Link>

            <p className="text-xs sm:text-[1rem] text-white/80 max-w-sm font-normal">
              How I built a ₹1,000 crore coaching movement and transformed
              51,000+ lives. My 15-part story raw, unfiltered, real.
            </p>
          </div>
        </motion.div>
      </main>

      {/* Bottom Stats Section */}
      <footer className="relative z-10 w-full pb-10 pt-4 px-6 sm:px-12 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 pt-8 border-t border-white/10"
        >
          {/* Stat Item 1: Community */}
          <div className="flex items-center gap-3.5">
            <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white shrink-0">
              <FiUsers className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                48K+
              </div>
              <div className="text-xs text-white/70 font-normal">Community</div>
            </div>
          </div>

          {/* Stat Item 2: Movement */}
          <div className="flex items-center gap-3.5">
            <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white shrink-0">
              <FiTrendingUp className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                ₹1000Cr
              </div>
              <div className="text-xs text-white/70 font-normal">Movement</div>
            </div>
          </div>

          {/* Stat Item 3: Satisfied Clients */}
          <div className="flex items-center gap-3.5">
            <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white shrink-0">
              <FiAward className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                3k+
              </div>
              <div className="text-xs text-white/70 font-normal">
                Satisfied Clients
              </div>
            </div>
          </div>

          {/* Stat Item 4: Documentary */}
          <div className="flex items-center gap-3.5">
            <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white shrink-0">
              <FiFilm className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                15 Eps
              </div>
              <div className="text-xs text-white/70 font-normal">
                Documentary
              </div>
            </div>
          </div>
        </motion.div>
      </footer>
    </div>
  );
}
