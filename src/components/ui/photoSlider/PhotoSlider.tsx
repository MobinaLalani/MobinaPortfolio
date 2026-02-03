"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const images = [
  {
    src: "https://picsum.photos/id/1015/400/400",
    title: "Mountain View",
    description:
      "This is a beautiful mountain landscape. The view is breathtaking with green hills and a clear blue sky. This is a beautiful mountain landscape. The view is breathtaking with green hills and a clear blue sky.",
  },
  {
    src: "https://picsum.photos/id/1016/400/400",
    title: "Forest Trail",
    description:
      "A peaceful forest trail surrounded by tall trees. Perfect place for hiking and enjoying nature.",
  },
  {
    src: "https://picsum.photos/id/1018/400/400",
    title: "Sunset Glow",
    description:
      "Golden sunset glow over the horizon, painting the sky with warm colors and tranquil vibes.",
  },
  {
    src: "https://picsum.photos/id/1020/400/400",
    title: "Calm Lake",
    description:
      "A serene lake reflecting the surrounding mountains, a perfect spot to relax and meditate.",
  },
  {
    src: "https://picsum.photos/id/1020/400/400",
    title: "Calm Lake",
    description:
      "A serene lake reflecting the surrounding mountains, a perfect spot to relax and meditate.",
  },
  {
    src: "https://picsum.photos/id/1020/400/400",
    title: "Calm Lake",
    description:
      "A serene lake reflecting the surrounding mountains, a perfect spot to relax and meditate.",
  },
  {
    src: "https://picsum.photos/id/1020/400/400",
    title: "Calm Lake",
    description:
      "A serene lake reflecting the surrounding mountains, a perfect spot to relax and meditate.",
  },
  {
    src: "https://picsum.photos/id/1024/400/400",
    title: "City Lights",
    description:
      "The city comes alive at night with sparkling lights and vibrant energy, perfect for night photography.",
  },
];

export default function InteractivePhotoSlider() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="max-w-6xl mx-auto min-h-[98%] flex gap-8 p-6 overflow-hidden">
      {/* ستون عکس‌ها */}

      {/* ستون متن */}
      <div className="flex-1 flex items-start">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 16 }}
            transition={{ duration: 0.35 }}
            className="bg-gray-100 rounded-xl shadow-md p-6 h-80 md:h-96 overflow-y-auto"
          >
            <p className="text-gray-800 leading-relaxed">
              {images[activeIndex].description}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>
      <div className="flex flex-col gap-4 max-h-[80vh] overflow-y-auto pr-2">
        {images.map((img, i) => {
          const isActive = i === activeIndex;

          return (
            <motion.div
              key={i}
              onClick={() => setActiveIndex(i)}
              className={`
                relative cursor-pointer rounded-xl 
                transition-all duration-300
                ${
                  isActive
                    ? "ring-4 shadow-2xl"
                    : "opacity-80 hover:opacity-100 shadow-md"
                }
              `}
            >
              <img
                src={img.src}
                alt={img.title}
                className="w-64 h-64 md:w-72 md:h-72 object-cover rounded-xl"
              />

              {/* Title */}
              <motion.div
                initial={false}
                animate={{ opacity: isActive ? 1 : 0 }}
                transition={{ duration: 0.2 }}
                className="absolute bottom-2 left-2 right-2 bg-black/50 text-white text-sm rounded-md text-center py-1"
              >
                {img.title}
              </motion.div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
