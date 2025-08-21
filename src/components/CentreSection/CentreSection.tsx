import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const CentreSectionCard1 = {
  image: "images/cards/centreSectionImg1.svg",
  alt: "SAGA University Indore",
};
const CentreSectionCard2 = {
  image: "images/cards/centreSectionImg2.svg",
  alt: "Prashanti Groups of Institutes",
  title: "Prashanti Groups of Institutes, Ujjain (M.P.)",
};

const CentreSection = () => {
  const [isLoading, setIsLoading] = useState(true);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6 },
    },
    hover: {
      scale: 1.03,
      boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.1)",
      transition: { duration: 0.3 },
    },
  };

  useEffect(() => {
    if (isLoading) {
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [isLoading]);

  return (
    <motion.section
      className="py-8 sm:py-10 md:py-12 lg:py-16 xl:py-20 mb-16 sm:mb-20 md:mb-24 lg:mb-32 xl:mb-40 container mx-auto px-4 sm:px-6 lg:px-8 overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={containerVariants}
    >
      <div className="mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <motion.div
            className="flex flex-col items-start space-y-3 sm:space-y-4 md:space-y-5 text-center lg:text-left order-2 lg:order-1"
            variants={itemVariants}
          >
            <div className="flex items-baseline flex-wrap gap-2 justify-center lg:justify-start">
              <motion.h2
                className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-900"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                Our Centre of
              </motion.h2>
            </div>
            <motion.h1
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight text-gray-900"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Innovation
            </motion.h1>
            <motion.p
              className="text-sm sm:text-base md:text-lg lg:text-xl max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg alexandria text-[#6D758F] leading-relaxed mx-auto lg:mx-0"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              With our experience of 11 years in Digital Marketing training and
              Game Development, With our experience of 11 years in Digital
              Marketing training.
            </motion.p>
          </motion.div>

          {/* Right Cards */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 order-1 lg:order-2"
            variants={itemVariants}
          >
            <motion.div
              className="bg-white p-4 sm:p-6 md:p-8 lg:p-10 rounded-2xl sm:rounded-3xl lg:rounded-4xl shadow-theme-xs flex flex-col justify-between
                 aspect-[415/298] w-full max-w-[300px] sm:max-w-[350px] md:max-w-[415px] mx-auto"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover="hover"
            >
              <div className="flex-1 flex items-center justify-center">
                <img
                  src={CentreSectionCard1.image}
                  alt={CentreSectionCard1.alt}
                  className="max-w-[60%] sm:max-w-[65%] md:max-w-[70%] object-contain"
                />
              </div>

              <p className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-center text-gray-700">
                {/* {item.title} */}
              </p>
            </motion.div>
            
            <motion.div
              className="bg-white p-4 sm:p-6 md:p-8 lg:p-10 rounded-2xl sm:rounded-3xl lg:rounded-4xl shadow-theme-xs flex flex-col justify-between
                 aspect-[415/298] w-full max-w-[300px] sm:max-w-[350px] md:max-w-[415px] mx-auto"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover="hover"
            >
              <div className="flex-1 flex items-center justify-center">
                <img
                  src={CentreSectionCard2.image}
                  alt={CentreSectionCard2.alt}
                  className="max-w-[60%] sm:max-w-[65%] md:max-w-[70%] object-contain"
                />
              </div>

              <p className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-center text-gray-700 leading-tight">
                {CentreSectionCard2.title}
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default CentreSection;
