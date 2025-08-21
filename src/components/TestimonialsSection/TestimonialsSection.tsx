"use client";

import type React from "react";
import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { Swiper as SwiperType } from "swiper";
import { motion, AnimatePresence } from "framer-motion";

// Import Swiper styles
// import "swiper/css"
// import "swiper/css/navigation"
// import "swiper/css/pagination"

import { testimonialsData } from "../../constant/TestimonialsSection.data.ts";
import type {
  TestimonialsSectionProps,
  TestimonialCardProps,
} from "../../types/TestimonialsSection.type.ts";
import ArrowButton from "../ui/button/ArrowButton.tsx";

// Loading Skeleton Component
const TestimonialSkeleton: React.FC = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
        {/* Left side - Background decoration skeleton */}
        <div className="relative flex justify-center lg:justify-start order-2 lg:order-1">
          <div className="relative w-72 h-72 xs:w-80 xs:h-80 sm:w-96 sm:h-96">
            <div className="absolute inset-0 bg-gray-200 rounded-lg animate-pulse"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 xs:w-28 xs:h-28 sm:w-32 sm:h-32 bg-gray-300 rounded-full animate-pulse"></div>
          </div>
        </div>

        {/* Right side - Content skeleton */}
        <div className="space-y-4 sm:space-y-6 order-1 lg:order-2">
          <div className="space-y-3 sm:space-y-4">
            <div className="h-5 sm:h-6 bg-gray-200 rounded w-24 sm:w-32 animate-pulse"></div>
            <div className="h-8 sm:h-10 bg-gray-200 rounded w-full sm:w-3/4 animate-pulse"></div>
            <div className="h-3 sm:h-4 bg-gray-200 rounded w-full animate-pulse"></div>
            <div className="space-y-2">
              <div className="h-3 sm:h-4 bg-gray-200 rounded w-full animate-pulse"></div>
              <div className="h-3 sm:h-4 bg-gray-200 rounded w-full animate-pulse"></div>
              <div className="h-3 sm:h-4 bg-gray-200 rounded w-full sm:w-3/4 animate-pulse"></div>
            </div>
          </div>

          <div className="space-y-1 sm:space-y-2">
            <div className="h-5 sm:h-6 bg-gray-200 rounded w-32 sm:w-40 animate-pulse"></div>
            <div className="h-3 sm:h-4 bg-gray-200 rounded w-24 sm:w-32 animate-pulse"></div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex gap-3 sm:gap-4">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-200 rounded-full animate-pulse"></div>
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-200 rounded-full animate-pulse"></div>
            </div>
            <div className="h-5 sm:h-6 bg-gray-200 rounded w-10 sm:w-12 animate-pulse"></div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

// Individual Testimonial Card Component
const TestimonialCard: React.FC<TestimonialCardProps> = ({
  testimonial,
  isLoading = false,
}) => {
  if (isLoading) {
    return <TestimonialSkeleton />;
  }

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-center">
        {/* Left side - Background with person image */}
        <div className="relative flex justify-center lg:justify-start order-2 lg:order-1">
          <motion.div 
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative w-72 h-72 xs:w-80 xs:h-80 sm:w-96 sm:h-96"
          >
            {/* Background decoration */}
            <motion.div 
              initial={{ rotate: -5 }}
              animate={{ rotate: 0 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0"
            >
              <img
                src="/images/carousel/upthrustbg.svg"
                alt="Background decoration"
                className="w-full h-full object-contain"
                loading="lazy"
              />
            </motion.div>

            {/* Person image */}
            <motion.div 
              initial={{ y: 10, opacity: 0.8 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="absolute top-[55%] left-[55%] transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 xs:w-28 xs:h-28 sm:w-32 sm:h-32 md:w-40 md:h-64"
            >
              <img
                src={testimonial.image || "/placeholder.svg"}
                alt={testimonial.name}
                className="w-full h-full object-contain rounded-2xl"
                loading="lazy"
              />
            </motion.div>
          </motion.div>
        </div>

        {/* Right side - Content */}
        <motion.div 
          initial={{ x: 20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="space-y-4 sm:space-y-6 order-1 lg:order-2"
        >
          <div className="space-y-3 sm:space-y-4">
            <motion.p 
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.3 }}
              className="text-gray-600 text-xs xs:text-sm sm:text-base font-medium"
            >
              Student Wall
            </motion.p>

            <motion.h2 
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.3 }}
              className="text-xl xs:text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight"
            >
              What our students are saying
            </motion.h2>

            <motion.p 
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.3 }}
              className="text-xs xs:text-sm sm:text-base leading-relaxed alexandria text-[#6D758F]"
            >
              {testimonial.testimonial}
            </motion.p>
          </div>

          <motion.div 
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.3 }}
            className="space-y-1"
          >
            <h3 className="text-base xs:text-lg sm:text-xl font-semibold text-gray-900">
              {testimonial.name}
            </h3>
            <p className="text-gray-500 text-xs xs:text-sm sm:text-base">
              ({testimonial.designation})
            </p>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

// Main Testimonials Section Component
const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({
  className = "",
}) => {
  const [swiper, setSwiper] = useState<SwiperType | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  // Simulate loading state
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  const handlePrevSlide = () => {
    if (swiper) {
      swiper.slidePrev();
    }
  };

  const handleNextSlide = () => {
    if (swiper) {
      swiper.slideNext();
    }
  };

  return (
    <motion.section 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={`py-8 xs:py-10 sm:py-12 md:py-16 lg:py-20 ${className}`}
    >
      <AnimatePresence mode="wait">
        {isLoading ? (
          <motion.div
            key="skeleton"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <TestimonialSkeleton />
          </motion.div>
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="relative w-[98vw] sm:w-[95vw] md:w-[90vw] lg:w-[86%] mx-auto"
          >
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={0}
              slidesPerView={1}
              onSwiper={setSwiper}
              onSlideChange={(swiper) => setCurrentSlide(swiper.activeIndex)}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
              loop={true}
              className="testimonials-swiper"
            >
              {testimonialsData.map((testimonial) => (
                <SwiperSlide key={testimonial.id}>
                  <TestimonialCard testimonial={testimonial} />
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Navigation Controls */}
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.4 }}
              className="flex flex-col sm:grid sm:grid-cols-2 sm:justify-end gap-4 mt-6 sm:mt-8 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto"
            >
              <div></div>
              <div className="flex justify-center sm:justify-end gap-4 md:gap-7">
                <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                  <ArrowButton onClick={handlePrevSlide} direction="left" borderColor="#E1E4ED" color="#000" />
                </motion.div>
                <div className="text-gray-600 text-xs xs:text-sm sm:text-base flex place-items-center justify-baseline font-medium">
                  {currentSlide + 1}/{testimonialsData.length}
                </div>
                <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                  <ArrowButton onClick={handleNextSlide} direction="right" borderColor="#E1E4ED" color="#000" />
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  );
};


export default TestimonialsSection;
