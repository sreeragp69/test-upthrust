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
import TestimonialSkeleton from "./TestimonialSkeleton.tsx";
import TestimonialCard from "./TestimonialCard.tsx";



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
      className={`py-8 xs:py-10 sm:py-12 md:py-16 lg:py-20   ${className}`}
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
            className="relative w-[98vw] sm:w-[95vw] md:w-[90vw] min-[1680px]:w-[90%] mx-auto"
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
                <div className="text-gray-600 text-xs xs:text-sm sm:text-base flex place-items-center justify-baseline font-medium font-nunito">
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
