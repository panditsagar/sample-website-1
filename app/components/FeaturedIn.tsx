"use client";

export default function FeaturedIn() {
  const publicationLogos = [
    { name: "Entrepreneur", src: "/logo1.png" },
    { name: "YourStory", src: "/logo2.png" },
    { name: "Forbes India", src: "/logo3.svg" },
    { name: "Business Standard", src: "/logo4.png" },
    { name: "Economic Times", src: "/logo5.png" },
  ];

  // Duplicated array for seamless infinite marquee scrolling loop
  const marqueeItems = [
    ...publicationLogos,
    ...publicationLogos,
    ...publicationLogos,
    ...publicationLogos,
  ];

  return (
    <section className="w-full bg-black py-8 sm:pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Subtle Section Label */}
        <p className="text-[0.7rem] sm:text-2xl font-semibold   text-white/40 mb-6 text-center">
          Featured In
        </p>

        {/* Marquee Outer Container */}
        <div className="relative py-6 sm:py-10 overflow-hidden">
          {/* Left & Right edge gradient fade overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-20 sm:w-30 z-10 bg-gradient-to-r from-black via-black/90 to-transparent pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 sm:w-30 z-10 bg-gradient-to-l from-black via-black/90 to-transparent pointer-events-none" />

          {/* Running Loop Marquee Track */}
          <div className="animate-marquee flex items-center gap-12 sm:gap-20">
            {marqueeItems.map((pub, idx) => (
              <div
                key={idx}
                /* Fixed bounding box container (w-36 sm:w-44 h-10 sm:h-12) to ensure equal visual scale */
                className="w-36 sm:w-40 h-10 sm:h-12 flex items-center justify-center shrink-0 opacity-60 hover:opacity-100 transition-opacity duration-300 cursor-default select-none group"
              >
                <img
                  src={pub.src}
                  alt={pub.name}
                  className="max-h-full max-w-full object-contain brightness-0 invert"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
