"use client";

import type React from "react";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { whyUsData } from "../../constant/WhyUs.data";
import {
  WhyUsData,
  WhyUsFeature,
  WhyUsStatistic,
} from "../../types/WhyUs.type";

// Loading skeleton components
const FeatureSkeleton = () => (
  <div className="animate-pulse rounded-2xl p-4 sm:p-5 md:p-6">
    <div className="h-8 sm:h-10 md:h-12 w-8 sm:w-10 md:w-12 bg-gray-200 rounded-md mb-3 sm:mb-4"></div>
    <div className="h-4 sm:h-5 bg-gray-200 rounded mb-2 w-3/4"></div>
    <div className="h-3 sm:h-4 bg-gray-200 rounded w-full"></div>
    <div className="h-3 sm:h-4 bg-gray-200 rounded w-2/3 mt-2"></div>
  </div>
);

const StatisticSkeleton = () => (
  <div className="animate-pulse bg-white rounded-2xl p-3 sm:p-4 md:p-5 lg:p-6 shadow-lg">
    <div className="h-6 sm:h-8 md:h-10 lg:h-12 bg-gray-200 rounded-md mb-2 sm:mb-3 w-12 sm:w-16 md:w-18 lg:w-20 mx-auto"></div>
    <div className="h-3 sm:h-4 bg-gray-200 rounded w-16 sm:w-20 md:w-22 lg:w-24 mx-auto"></div>
  </div>
);

const IllustrationSkeleton = () => (
  <div className="animate-pulse w-full flex justify-center relative">
    <div className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 xl:w-80 xl:h-80 bg-gray-200 rounded-full"></div>
    <div className="absolute -bottom-2 sm:-bottom-4 md:-bottom-6 lg:-bottom-8 xl:-bottom-10 left-1/2 -translate-x-1/2 w-20 h-20 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-40 lg:h-40 xl:w-48 xl:h-48 bg-gray-300 rounded-full -z-10 blur-lg"></div>
  </div>
);

// Feature component
const FeatureCard: React.FC<{ feature: WhyUsFeature }> = ({ feature }) => (
  <motion.div 
    className="space-y-2 sm:space-y-3"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, ease: "easeOut" }}
  >
    <motion.h3 
      className="text-base sm:text-lg md:text-xl lg:text-xl font-bold text-gray-900 leading-tight"
      initial={{ opacity: 0, x: -10 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.3, duration: 0.4 }}
    >
      {feature.title}
    </motion.h3>
    <motion.p 
      className="text-gray-600 text-xs sm:text-sm md:text-sm lg:text-base leading-relaxed"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.4, duration: 0.5 }}
    >
      {feature.description}
    </motion.p>
  </motion.div>
);

// Statistic component
const StatisticCard: React.FC<{ statistic: WhyUsStatistic }> = ({
  statistic,
}) => (
  <motion.div 
    className="bg-white rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-5 lg:p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 alexandria"
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    whileHover={{ y: -2, transition: { duration: 0.2 } }}
  >
    <div className="text-center">
      <motion.div 
        className="text-xl sm:text-2xl md:text-2xl lg:text-3xl xl:text-3xl font-bold text-gray-900 mb-1 sm:mb-2"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.4 }}
      >
        {statistic.value}
        <span className="">{statistic.suffix}</span>
      </motion.div>
      <motion.p 
        className="text-themeGray text-xs sm:text-sm font-normal leading-tight"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.4 }}
      >
        {statistic.label}
      </motion.p>
    </div>
  </motion.div>
);

// Main component
const WhyUs: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState<WhyUsData | null>(null);
  
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
      setData(whyUsData);
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <section className="py-8 sm:py-10 md:py-12 lg:py-16 xl:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header skeleton */}
          <div className="text-center sm:text-start mb-6 sm:mb-8 md:mb-10 lg:mb-12 animate-pulse">
            <div className="h-6 sm:h-8 md:h-10 lg:h-12 bg-gray-200 rounded-md mb-3 sm:mb-4 w-3/4 sm:w-2/3 md:w-1/2 mx-auto sm:mx-0"></div>
            <div className="space-y-2 w-full sm:w-2/3 md:w-2/3 lg:w-1/2 xl:w-1/3 mx-auto sm:mx-0">
              <div className="h-3 sm:h-4 bg-gray-200 rounded w-full"></div>
              <div className="h-3 sm:h-4 bg-gray-200 rounded w-5/6"></div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start lg:items-center">
            {/* Left features skeleton - hidden on mobile, shown on larger screens */}
            <div className="hidden lg:block lg:col-span-3 space-y-4 xl:space-y-6">
              <FeatureSkeleton />
              <FeatureSkeleton />
              <FeatureSkeleton />
            </div>

            {/* Center illustration skeleton */}
            <div className="lg:col-span-6 flex justify-center order-first lg:order-none">
              <div className="relative w-full max-w-sm sm:max-w-md mx-auto">
                <IllustrationSkeleton />
              </div>
            </div>

            {/* Right features and statistics skeleton */}
            <div className="lg:col-span-3 w-full">
              <div className="space-y-4 sm:space-y-6 lg:space-y-8 w-full">
                <div className="lg:hidden space-y-4 sm:space-y-6">
                  <FeatureSkeleton />
                  <FeatureSkeleton />
                  <FeatureSkeleton />
                </div>

                <div className="grid grid-cols-2 gap-2 sm:gap-3 md:gap-4 lg:gap-3 w-full">
                  <StatisticSkeleton />
                  <StatisticSkeleton />
                  <StatisticSkeleton />
                  <StatisticSkeleton />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (!data) return null;

  return (
    <section className="py-8 sm:py-10 md:py-12 lg:py-16 xl:py-20 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div 
          className="text-center sm:text-start mb-6 sm:mb-8 md:mb-10 lg:mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2 
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 md:mb-6 leading-tight"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {data.mainTitle}
          </motion.h2>
          <motion.p 
            className="text-gray-600 text-sm sm:text-base md:text-base lg:text-lg w-full sm:w-2/3 md:w-2/3 lg:w-1/2 xl:w-1/3 mx-auto sm:mx-0 leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {data.subtitle}
          </motion.p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start lg:items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {/* Left side features - only visible on large screens */}
          <motion.div 
            className="hidden lg:block lg:col-span-3 space-y-4 xl:space-y-6"
            variants={itemVariants}
          >
            {data.features.map((feature, index) => (
              <motion.div 
                key={feature.id} 
                variants={itemVariants}
                transition={{ delay: index * 0.1 }}
              >
                <FeatureCard feature={feature} />
              </motion.div>
            ))}
          </motion.div>

          {/* Center illustration */}
          <motion.div 
            className="lg:col-span-6 flex justify-center order-first lg:order-none mb-6 sm:mb-8 lg:mb-0"
            variants={itemVariants}
          >
            <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-lg xl:max-w-xl mx-auto">
              <motion.img
                src={data.illustration.src || "/placeholder.svg"}
                alt={data.illustration.alt}
                className="w-full h-auto max-w-[12rem] sm:max-w-[14rem] md:max-w-[16rem] lg:max-w-[18rem] xl:max-w-[20rem] object-contain relative z-10 mx-auto"
                loading="lazy"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                whileHover={{ scale: 1.05, rotate: 2 }}
              />
              <motion.div
                className="absolute -bottom-2 sm:-bottom-4 md:-bottom-6 lg:-bottom-8 xl:-bottom-10 left-1/2 -translate-x-1/2
                  w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 xl:w-32 xl:h-32
                  bg-black/40 rounded-full scale-x-180 -rotate-x-72 -z-10 blur-lg"
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              ></motion.div>
            </div>
          </motion.div>

          {/* Right side content */}
          <motion.div 
            className="lg:col-span-3 w-full"
            variants={itemVariants}
          >
            <div className="space-y-4 sm:space-y-6 lg:space-y-8 w-full">
              {/* Mobile/Tablet: Show all features */}
              <motion.div 
                className="lg:hidden space-y-4 sm:space-y-6"
                variants={containerVariants}
              >
                {data.features.map((feature, index) => (
                  <motion.div 
                    key={feature.id} 
                    className="text-center sm:text-left"
                    variants={itemVariants}
                    transition={{ delay: index * 0.1 }}
                  >
                    <FeatureCard feature={feature} />
                  </motion.div>
                ))}
              </motion.div>

              {/* Statistics grid */}
              <motion.div 
                className="grid grid-cols-2 gap-2 sm:gap-3 md:gap-4 lg:gap-3 w-full"
                variants={containerVariants}
              >
                {data.statistics.map((statistic, index) => (
                  <motion.div 
                    key={statistic.id}
                    variants={itemVariants}
                    transition={{ delay: index * 0.1 }}
                  >
                    <StatisticCard statistic={statistic} />
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyUs;
