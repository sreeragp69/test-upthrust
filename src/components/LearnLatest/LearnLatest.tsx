"use client";

import type React from "react";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { learnLatestData } from "../../constant/LearnLatest.data";
import {
  LearnLatestData,
  LearnLatestFeature,
  LearnLatestStatistic,
} from "../../types/LearnLatest.type";
import Button from "../ui/button/Button";

// Loading skeleton components
const FeatureSkeleton = () => (
  <div className="animate-pulse  rounded-2xl p-4 sm:p-5 md:p-6">
    <div className="h-10 sm:h-12 md:h-14 w-10 sm:w-12 md:w-14 bg-gray-200 rounded-md mb-3 sm:mb-4"></div>
    <div className="h-4 sm:h-5 bg-gray-200 rounded mb-2 w-3/4"></div>
    <div className="h-3 sm:h-4 bg-gray-200 rounded w-full"></div>
    <div className="h-3 sm:h-4 bg-gray-200 rounded w-2/3 mt-2"></div>
  </div>
);



const IllustrationSkeleton = () => (
  <div className="animate-pulse w-full flex justify-center relative">
    <div className="w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 bg-gray-200 rounded-full"></div>
    <div className="absolute -bottom-4 sm:-bottom-8 md:-bottom-10 lg:-bottom-13 left-1/2 -translate-x-1/2 w-28 h-28 sm:w-44 sm:h-44 md:w-52 md:h-52 lg:w-64 lg:h-64 bg-gray-300 rounded-full -z-10 blur-lg"></div>
  </div>
);

// Feature component
const FeatureCard: React.FC<{ feature: LearnLatestFeature }> = ({
  feature,
}) => (
  <motion.div 
    className="space-y-2 max-w-sm mx-auto md:mx-0"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, ease: "easeOut" }}
  >
    <motion.h3 
      className="text-lg sm:text-xl md:text-xl font-bold text-gray-900 leading-tight"
      initial={{ opacity: 0, x: -10 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.3, duration: 0.4 }}
    >
      {feature.title}
    </motion.h3>
    <motion.p 
      className="text-gray-600 text-xs sm:text-sm md:text-sm"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.4, duration: 0.5 }}
    >
      {feature.description}
    </motion.p>
  </motion.div>
);



// Main component
const LearnLatest: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState<LearnLatestData | null>(null);
  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  useEffect(() => {
    // Simulate loading delay
    const timer = setTimeout(() => {
      setData(learnLatestData);
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <section className="py-12 md:py-16 lg:py-24">
        <div className="container mx-auto ">
          {/* Mobile/Tablet Header skeleton - only visible on smaller screens */}
          <div className="mb-8 md:mb-10 lg:hidden animate-pulse">
            <div className="text-center">
              <div className="h-8 md:h-10 bg-gray-200 rounded-md mb-4 w-3/4 sm:w-2/3 mx-auto"></div>
              <div className="space-y-2 w-full max-w-md mx-auto">
                <div className="h-4 bg-gray-200 rounded w-full"></div>
                <div className="h-4 bg-gray-200 rounded w-5/6 mx-auto"></div>
              </div>
              <div className="h-10 w-32 bg-gray-200 rounded-md mt-6 mx-auto"></div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 md:gap-8 items-start lg:items-center mt-8 md:mt-10 lg:mt-12">
            {/* Desktop Header skeleton - hidden on mobile/tablet */}
            <div className="hidden lg:block lg:col-span-3 animate-pulse">
              <div className="h-10 lg:h-12 bg-gray-200 rounded-md mb-4 w-3/4"></div>
              <div className="space-y-2 w-full lg:w-3/4">
                <div className="h-4 bg-gray-200 rounded w-full"></div>
                <div className="h-4 bg-gray-200 rounded w-5/6"></div>
              </div>
              <div className="h-10 w-32 bg-gray-200 rounded-md mt-6"></div>
            </div>

            {/* Center illustration skeleton - centered on all screens */}
            <div className="col-span-1 md:col-span-2 lg:col-span-6 flex justify-center order-none">
              <div className="relative w-full max-w-md mx-auto">
                <IllustrationSkeleton />
              </div>
            </div>

            {/* Features skeleton */}
            <div className="col-span-1 md:col-span-2 lg:col-span-3 space-y-6 md:space-y-8 w-full">
              <FeatureSkeleton />
              <FeatureSkeleton />
              <FeatureSkeleton />
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (!data) return null;

  return (
    <section className="py-12 md:py-16 lg:py-24 overflow-hidden">
      <div className="container mx-auto ">
        {/* Title section - always visible, positioned at top on mobile/tablet */}
        <motion.div 
          className="mb-8 md:mb-10 lg:hidden"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center lg:text-start">
            <motion.h2 
              className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 md:mb-6 leading-tight"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {data.mainTitle}
            </motion.h2>
            <motion.p
              className="text-gray-600 text-sm sm:text-base md:text-base mx-auto max-w-md"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {data.subtitle}
            </motion.p>
            <motion.div 
              className="mt-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Button children="Contact Now" />
            </motion.div>
          </div>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 md:gap-8 items-start lg:items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {/* Left side content - hidden on mobile/tablet, visible on desktop */}
          <motion.div 
            className="hidden lg:block lg:col-span-3 space-y-4 xl:space-y-8"
            variants={itemVariants}
          >
            {/* Left content */}
            <motion.div 
              className="text-start"
              variants={itemVariants}
            >
              <motion.h2 
                className="text-2xl sm:text-3xl md:text-4xl xl:text-4xl font-bold text-gray-900 mb-4 md:mb-6 leading-tight"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                {data.mainTitle}
              </motion.h2>
              <motion.p 
                className="text-gray-600 text-sm sm:text-base md:text-base w-full lg:w-3/4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                {data.subtitle}
              </motion.p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Button children="Contact Now" />
            </motion.div>
          </motion.div>

          {/* Center illustration - order first on desktop, centered on all screens */}
          <motion.div 
            className="col-span-1 md:col-span-2 lg:col-span-6 flex justify-center order-none"
            variants={itemVariants}
          >
            <div className="relative w-full max-w-md mx-auto">
              <motion.img
                src={data.illustration.src || "/placeholder.svg"}
                alt={data.illustration.alt}
                className="w-full h-auto max-w-[16rem] sm:max-w-xs md:max-w-sm lg:max-w-md xl:max-w-lg object-contain relative z-10 mx-auto"
                loading="lazy"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                whileHover={{ scale: 1.05, rotate: 2 }}
              />
             
            </div>
          </motion.div>

          {/* Right side features */}
          <motion.div 
            className="col-span-1 md:col-span-2 lg:col-span-3 space-y-4 xl:space-y-8"
            variants={itemVariants}
          >
            <motion.div 
              className="text-center md:text-left lg:text-left"
              variants={containerVariants}
            >
              {data.features.map((feature) => (
                <motion.div 
                  key={feature.id} 
                  className="mb-6 md:mb-8"
                  variants={itemVariants}
                >
                  <FeatureCard feature={feature} />
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default LearnLatest;
