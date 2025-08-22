import { motion } from "framer-motion";

const TestimonialSkeleton: React.FC = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="w-full mx-auto px-4 sm:px-6 lg:px-8"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-center">
        {/* Left side - Background with person image skeleton */}
        <div className="relative flex justify-center lg:justify-start order-2 lg:order-1">
          <motion.div 
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative w-64 h-64 xs:w-80 xs:h-80 sm:w-80 sm:h-80 md:h-96"
          >
            {/* Background decoration skeleton */}
            <motion.div 
              initial={{ rotate: -5 }}
              animate={{ rotate: 0 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0"
            >
              <div className="w-full h-full bg-gray-200 rounded-2xl animate-pulse"></div>
            </motion.div>

            {/* Person image skeleton */}
            <motion.div 
              initial={{ y: 10, opacity: 0.8 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="absolute top-[55%] left-[55%] transform -translate-x-1/2 -translate-y-1/2 w-32 h-40 xs:w-40 sm:w-52 sm:h-52 md:w-60 md:h-60"
            >
              <div className="w-full h-full bg-gray-300 rounded-2xl animate-pulse"></div>
            </motion.div>
          </motion.div>
        </div>

        {/* Right side - Content skeleton */}
        <motion.div 
          initial={{ x: 20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="space-y-4 sm:space-y-6 order-1 lg:order-2"
        >
          <div className="space-y-3 sm:space-y-4">
            <motion.div 
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.3 }}
              className="h-4 xs:h-5 sm:h-6 bg-gray-200 rounded w-24 sm:w-28 animate-pulse"
            ></motion.div>

            <motion.div 
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.3 }}
              className="h-6 xs:h-8 sm:h-10 lg:h-12 bg-gray-200 rounded w-full sm:w-4/5 animate-pulse"
            ></motion.div>

            <motion.div 
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.3 }}
              className="space-y-2"
            >
              <div className="h-3 xs:h-4 sm:h-5 bg-gray-200 rounded w-full animate-pulse"></div>
              <div className="h-3 xs:h-4 sm:h-5 bg-gray-200 rounded w-full animate-pulse"></div>
              <div className="h-3 xs:h-4 sm:h-5 bg-gray-200 rounded w-full animate-pulse"></div>
              <div className="h-3 xs:h-4 sm:h-5 bg-gray-200 rounded w-3/4 animate-pulse"></div>
            </motion.div>
          </div>

          <motion.div 
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.3 }}
            className="space-y-1"
          >
            <div className="h-5 xs:h-6 sm:h-7 bg-gray-200 rounded w-32 sm:w-40 animate-pulse"></div>
            <div className="h-3 xs:h-4 sm:h-5 bg-gray-200 rounded w-24 sm:w-32 animate-pulse"></div>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default TestimonialSkeleton;
