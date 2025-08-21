import React, { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

type HomeCardProps = {
  id: string;
  index: number;
  backgroundImage: string;
  subtitle: string;
  alt: string;
  charecterTrue: boolean;
  characterImage?: string;
  tilt?: "left" | "right" | "none";
};

const HomeCard: React.FC<HomeCardProps> = ({
  id,
  index,
  backgroundImage,
  characterImage,
  alt,
  charecterTrue,
  subtitle,
  tilt = "none",
}) => {
  const rotateTarget = tilt === "left" ? -6 : tilt === "right" ? 6 : 0;

  const [enableTilt, setEnableTilt] = useState(false);
  useEffect(() => {
    const check = () => setEnableTilt(window.innerWidth >= 1024);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const cardRef = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(cardRef, { amount: 0.35 });

  const [hasScrolled, setHasScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setHasScrolled(true);
    window.addEventListener("scroll", onScroll, {
      passive: true,
    } as AddEventListenerOptions);
    return () =>
      window.removeEventListener("scroll", onScroll as EventListener);
  }, []);

  return (
    <div className="w-full max-w-sm">
      <motion.div
        ref={cardRef}
        key={id}
        initial={{ opacity: 0, y: 50, scale: 0.9, rotate: 0 }}
        animate={{
          opacity: 1,
          y: 0,
          scale: 1,
          rotate: enableTilt && isInView && hasScrolled ? rotateTarget : 0,
        }}
        transition={{
          duration: 0.8,
          delay: index * 0.2,
          ease: [0.25, 0.46, 0.45, 0.94],
        }}
        className="relative overflow-visible rounded-3xl  cursor-pointer group"
      >
        {/* Background Container */}
        <div className="relative h-96 lg:h-[28rem]  overflow-visible">
          <motion.img
            src={backgroundImage}
            alt="Game development background"
            className="w-full h-full object-contain object-center"
          />
          {charecterTrue && characterImage && (
            <motion.img
              src={characterImage}
              alt={alt}
              className="absolute z-99999 top-[22%] left-1/2  -translate-x-1/2 -translate-y-1/2  lg:h-[314px] object-contain  pointer-events-none"
            />
          )}
        </div>

        {/* Text Content */}
        <div className="absolute   bottom-0 left-0 right-0 p-6 sm:p-8 lg:p-12 z-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-white"
          >
            <motion.h2
              className="text-xl font-light mb-1 tracking-wide drop-shadow-lg"
              whileHover={{ x: 5 }}
              transition={{ duration: 0.2 }}
            >
              Become a
            </motion.h2>
            <motion.h1
              className="text-4xl font-clash font-bold uppercase   leading-tight tracking-tight drop-shadow-lg"
              whileHover={{ x: 5 }}
              transition={{ duration: 0.2, delay: 0.1 }}
            >
              {subtitle}
            </motion.h1>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default HomeCard;
