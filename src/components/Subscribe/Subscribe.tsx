"use client";

import type React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import type {
  SubscribeProps,
  SubscribeFormData,
} from "../../types/Subscribe.type";
import { SUBSCRIBE_DATA } from "../../constant/Subscribe.data";
import SubscribeSkeleton from "./SubscribeSkeleton";

const Subscribe: React.FC<SubscribeProps> = ({ isLoading = false }) => {
  const [formData, setFormData] = useState<SubscribeFormData>({ email: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (isLoading) {
    return <SubscribeSkeleton />;
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 1000));

    console.log("Subscribe:", formData);
    setIsSubmitting(false);
    setFormData({ email: "" });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ email: e.target.value });
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="w-full max-w-6xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 absolute z-10 bottom-[8%] sm:bottom-[7%] md:bottom-[6.5%] lg:bottom-[6.2%] left-1/2 -translate-x-1/2"
    >
      <div className="bg-gradient-to-r from-themePrimary to-themePrimary rounded-2xl sm:rounded-3xl lg:rounded-[53px] shadow-2xl overflow-hidden relative">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-20 sm:w-32 md:w-40 lg:w-64 xl:w-96 h-20 sm:h-32 md:h-40 lg:h-64 xl:h-96 bg-white rounded-full -translate-y-10 sm:-translate-y-16 md:-translate-y-20 lg:-translate-y-32 xl:-translate-y-48 translate-x-10 sm:translate-x-16 md:translate-x-20 lg:translate-x-32 xl:translate-x-48"></div>
          <div className="absolute bottom-0 left-0 w-16 sm:w-24 md:w-32 lg:w-48 xl:w-64 h-16 sm:h-24 md:h-32 lg:h-48 xl:h-64 bg-white rounded-full translate-y-8 sm:translate-y-12 md:translate-y-16 lg:translate-y-24 xl:translate-y-32 -translate-x-8 sm:-translate-x-12 md:-translate-x-16 lg:-translate-x-24 xl:-translate-x-32"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-5 md:gap-6 lg:gap-8 items-center relative z-10">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-3 sm:space-y-4 md:space-y-5 p-4 sm:p-5 md:p-6 lg:p-8 order-2 lg:order-1 text-center lg:col-span-7 lg:text-left"
          >
            <div className="space-y-2 sm:space-y-3">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-white text-sm sm:text-base md:text-lg lg:text-xl font-normal leading-snug sm:leading-tight alexandria"
              >
                {SUBSCRIBE_DATA.heading}
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-white/90 text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold leading-tight"
              >
                {SUBSCRIBE_DATA.subheading}
              </motion.p>
            </div>

            {/* Subscribe Form */}
            <motion.form
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-2 sm:gap-3 w-full max-w-sm sm:max-w-md mx-auto lg:mx-0"
            >
              <div className="flex-1 relative">
                <input
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder={SUBSCRIBE_DATA.placeholder}
                  required
                  className="w-full h-10 sm:h-11 md:h-12 px-3 sm:px-4 rounded-lg sm:rounded-xl border-0 bg-white text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-blue-300 focus:outline-none text-sm font-medium shadow-lg"
                />
              </div>
              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full sm:w-auto px-4 sm:px-5 md:px-6 h-10 sm:h-11 md:h-12 bg-green-500 hover:bg-green-600 text-white font-bold text-sm rounded-lg sm:rounded-xl shadow-lg transition-colors duration-200 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "SUBSCRIBING..." : SUBSCRIBE_DATA.buttonText}
              </motion.button>
            </motion.form>

            {/* Subscriber Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-2 sm:gap-3 pt-1 sm:pt-2"
            >
              <div className="flex -space-x-1 sm:-space-x-2">
                {SUBSCRIBE_DATA.stats.avatars.map((avatar, index) => (
                  <motion.img
                    key={index}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.7 + index * 0.1 }}
                    src={avatar}
                    alt={`Subscriber ${index + 1}`}
                    className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 rounded-full object-cover border-2 border-white"
                  />
                ))}
              </div>
              <div className="text-white/90 text-xs sm:text-sm font-medium">
                <span className="font-bold text-white">
                  {SUBSCRIBE_DATA.stats.count}
                </span>{" "}
                {SUBSCRIBE_DATA.stats.label}
              </div>
            </motion.div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="order-1 lg:order-2 w-full h-full lg:col-span-5"
          >
            <div className="relative h-full w-full flex items-center justify-center lg:justify-end">
              <img
                src="images/cards/subscribe.png"
                alt="3D Character working at computer"
                className="w-full h-full max-h-48 sm:max-h-56 md:max-h-64 lg:max-h-72 object-contain"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Subscribe;
