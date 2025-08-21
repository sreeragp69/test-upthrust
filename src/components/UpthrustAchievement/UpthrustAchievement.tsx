import React from "react";
import { motion } from "framer-motion";
import Button from "../ui/button/Button";
import AchievementCard from "./AchievementCard";
import { upthrustAchievementData } from "../../constant/UpthrustAchievement.data";
import ArrowButton from "../ui/button/ArrowButton";

const UpthrustAchievement = () => {
  const { title, subtitle, description, buttonText, achievements } =
    upthrustAchievementData;

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
    <section className="py-8 xs:py-10 sm:py-12 md:py-16 lg:py-24 bg-themeBackgroundColor overflow-hidden">
      <div className="container mx-auto px-4 xs:px-6 sm:px-8 w-full">
        <motion.div
          className="flex flex-col lg:grid lg:grid-cols-3 w-full gap-6 xs:gap-8 lg:gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          <motion.div
            className="w-full mb-6 xs:mb-8 md:mb-0 "
            variants={itemVariants}
          >
            {/* Trophy div */}
            <motion.div
              className="flex flex-col items-start space-y-3 xs:space-y-4"
              variants={itemVariants}
            >
              <div className="flex items-baseline flex-wrap gap-2">
                <motion.h2
                  className="text-xl xs:text-2xl sm:text-3xl md:text-4xl font-bold"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  {title}
                </motion.h2>
                <motion.img
                  className="h-16 xs:h-20 sm:h-24 md:h-28 lg:h-36"
                  src="/images/svg/trophy.svg"
                  alt="Trophy"
                  initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
                  whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  whileHover={{ rotate: 5, scale: 1.05 }}
                />
              </div>
              <motion.h1
                className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-bold leading-tight"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                {subtitle}
              </motion.h1>
              <motion.p
                className="text-xs xs:text-sm sm:text-base  md:text-lg max-w-xs xs:max-w-sm sm:max-w-md alexandria text-[#6D758F]"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                {description}
              </motion.p>
            </motion.div>

            <motion.div
              className="mt-4 xs:mt-6 sm:mt-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <Button
                children={buttonText}
                endIcon={
                  <ArrowButton
                    direction="right"
                    backgroundColor="#D7E7FF"
                    borderColor="#D7E7FF"
                    color="#135CE9"
                    asIcon={true}
                  />
                }
              />
            </motion.div>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:col-span-2  gap-4 xs:gap-5 w-full lg:ml-5"
            variants={containerVariants}
          >
            {achievements.map((achievement) => (
              <motion.div key={achievement.id} variants={itemVariants}>
                <AchievementCard
                  title={achievement.title}
                  description={achievement.description}
                  imageSrc={achievement.imageSrc}
                />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default UpthrustAchievement;
