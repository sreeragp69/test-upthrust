// src/components/AchievementCard.tsx
"use client";

import React from "react";
import { motion } from "framer-motion";
import { AchievementCardProps } from "../../types/UpthrustAchievement.type";

const AchievementCard: React.FC<Omit<AchievementCardProps, "id">> = ({
  title,
  description,
  imageSrc,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="relative bg-white rounded-3xl p-5 xs:p-6 sm:p-8 md:p-9 flex flex-col items-start w-full h-full"
    >
      {/* Top small image */}
      <motion.div
        className="w-12 h-12 xs:w-14 xs:h-14 sm:w-16 sm:h-16 md:w-20 md:h-20"
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.3 }}
      >
        <img
          src={imageSrc}
          alt="achievement icon"
          className="w-full h-full object-cover "
        />
      </motion.div>

      {/* Spacing for the image */}
      <div className="mt-4 xs:mt-5 sm:mt-6 md:mt-8"></div>

      {/* Title */}
      <motion.h3
        initial={{ opacity: 0, x: -10 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3, duration: 0.4 }}
        className="text-blue-600 font-semibold text-sm xs:text-base sm:text-lg md:text-xl mb-1 xs:mb-2"
      >
        {title}
      </motion.h3>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        className="text-xs xs:text-sm leading-4 xs:leading-5 text-[#6D758F] alexandria"
      >
        {description}
      </motion.p>
    </motion.div>
  );
};

export default AchievementCard;
