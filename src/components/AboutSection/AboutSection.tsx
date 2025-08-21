import React from "react";
import Button from "../ui/button/Button";
import { motion } from "framer-motion";

const AboutSection = () => {
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
  return (
    <motion.section 
      className="mx-auto w-full py-8 xs:py-10 sm:py-12 md:py-16 lg:py-20 overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={containerVariants}
    >
      <motion.div 
        className="container mx-auto px-4 xs:px-6 sm:px-8 lg:mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 py-5"
        variants={containerVariants}
      >
        {/* Left Text Section */}
        <motion.div
          variants={itemVariants}
          className="flex items-center sm:col-span-2 lg:col-span-1"
        >
          <motion.div className="flex flex-col gap-5 items-start" variants={itemVariants}>
            <motion.h2 
              className="text-[#343339] text-lg sm:text-xl font-bold"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              About The Upthrust
            </motion.h2>
            <motion.h1 
              className="text-themeGray font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-snug"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Aims to provide Result-Oriented Training!!
            </motion.h1>
            <motion.p 
              className="text-[#6D758F] text-sm sm:text-base tracking-[0.02em] leading-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              With our experience of 11 years in Digital Marketing training and
              Game Development, With our experience of 11 years in Digital
              Marketing training. With our experience of 11 years in Digital
              Marketing training and Game Development, With our experience of 11
              years in Digital Marketing training.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <Button children="More About" endIcon="" />
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Middle Images */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col h-full justify-center sm:col-span-2 md:col-span-1"
        >
          <motion.div 
            className="w-full h-full overflow-hidden rounded-2xl bg-white/60 shadow-theme-xs"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            whileHover={{ scale: 1.02 }}
            viewport={{ once: true }}
          >
            <img
              className="w-full h-auto object-cover"
              src="images/svg/Rectangle 6038.svg"
              alt="About section main"
              loading="lazy"
            />
          </motion.div>
          <motion.div 
            className="grid grid-cols-2 gap-4 sm:gap-5 mt-4 sm:mt-6"
            variants={containerVariants}
          >
            <motion.div 
              className="w-full h-full overflow-hidden rounded-2xl bg-white/60 shadow-theme-xs"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ scale: 1.05 }}
              viewport={{ once: true }}
            >
              <img
                className="w-full h-full object-cover"
                src="images/svg/Rectangle 6040.svg"
                alt="About section secondary 1"
                loading="lazy"
              />
            </motion.div>
            <motion.div 
              className="w-full h-full overflow-hidden rounded-2xl bg-white/60 shadow-theme-xs"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              whileHover={{ scale: 1.05 }}
              viewport={{ once: true }}
            >
              <img
                className="w-full h-full object-cover"
                src="images/svg/Rectangle 6041.svg"
                alt="About section secondary 2"
                loading="lazy"
              />
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          variants={itemVariants}
          className="flex items-center justify-center h-full sm:col-span-2 md:col-span-1 lg:col-span-1"
        >
          <motion.div 
            className="w-full overflow-hidden rounded-2xl bg-white/60 shadow-theme-xs h-full"
            initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            whileHover={{ scale: 1.03, rotate: 1 }}
            viewport={{ once: true }}
          >
            <img
              className="w-full h-full object-cover"
              src="images/svg/aboutSecimg4.svg"
              alt="About section illustration"
              loading="lazy"
            />
          </motion.div>
        </motion.div>

      </motion.div>
    </motion.section>
  );
};

export default AboutSection;
