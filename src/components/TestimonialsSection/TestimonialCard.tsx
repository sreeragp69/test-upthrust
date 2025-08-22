import { motion } from "framer-motion";
import { useState } from "react";
import TestimonialSkeleton from "./TestimonialSkeleton";
import { TestimonialCardProps } from "../../types/TestimonialsSection.type";

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  testimonial,
  isLoading = false,
}) => {
  const [bgImageLoading, setBgImageLoading] = useState(false);
  const [bgImageError, setBgImageError] = useState(false);
  const [personImageLoading, setPersonImageLoading] = useState(false);
  const [personImageError, setPersonImageError] = useState(false);

  if (isLoading) {
    return <TestimonialSkeleton />;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="w-full mx-auto px-4 sm:px-6 lg:px-8"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-center">
        {/* Left side - Background with person image */}
        <div className="relative flex justify-center lg:justify-start order-2 lg:order-1">
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative w-64 h-64 xs:w-80 xs:h-80 sm:w-80 sm:h-80 md:h-96"
          >
            {/* Background decoration */}
            <motion.div
              initial={{ rotate: -5 }}
              animate={{ rotate: 0 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0"
            >
              {bgImageLoading && (
                <div className="w-full h-full bg-gray-200 rounded-2xl animate-pulse flex items-center justify-center">
                  <div className="w-8 h-8 border-2 border-gray-400 border-t-transparent rounded-full animate-spin"></div>
                </div>
              )}
              <img
                src={
                  bgImageError
                    ? "/images/error/fallback.png"
                    : "/images/carousel/upthrustbg.svg"
                }
                alt="Background decoration"
                className={`w-full h-full object-contain ${
                  bgImageLoading ? "hidden" : ""
                }`}
                loading="lazy"
                onLoad={() => setBgImageLoading(false)}
                onError={() => {
                  setBgImageLoading(false);
                  setBgImageError(true);
                }}
              />
            </motion.div>

            {/* Person image */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-40 xs:w-40 sm:w-52 sm:h-52 md:w-60 md:h-60"
            >
              {personImageLoading && (
                <div className="w-full h-full bg-gray-300 rounded-2xl animate-pulse flex items-center justify-center">
                  <div className="w-6 h-6 border-2 border-gray-400 border-t-transparent rounded-full animate-spin"></div>
                </div>
              )}
              <img
                src={
                  personImageError
                    ? "/images/error/fallback.png"
                    : testimonial.image || "/placeholder.svg"
                }
                alt={testimonial.name}
                className={`w-full h-full object-contain rounded-2xl ${
                  personImageLoading ? "hidden" : ""
                }`}
                loading="lazy"
                onLoad={() => setPersonImageLoading(false)}
                onError={() => {
                  setPersonImageLoading(false);
                  setPersonImageError(true);
                }}
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
          <div className="space-y-3">
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
              className="text-xs sm:text-base leading-relaxed alexandria text-[#6D758F]"
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

export default TestimonialCard;
