import React, { useRef, useEffect, useState } from "react";
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
  const cardRef = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(cardRef, { amount: 0.4 });
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsLargeScreen(window.innerWidth >= 1024); // lg breakpoint
    };
    
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  // Rotate on Z axis only based on tilt and screen size
  const targetRotate = isLargeScreen ? (tilt === "left" ? -10 : tilt === "right" ? 10 : 0) : 0;

  return (
    <div className="w-full max-w-sm">
      <motion.div
        ref={cardRef}
        key={id}
        initial={{ rotate: 0, scale: 0.95, opacity: 0 }}
        animate={{ 
          rotate: isInView ? targetRotate : 0,
          scale: isInView ? 1 : 0.95,
          opacity: isInView ? 1 : 0
        }}
        transition={{ 
          type: "spring",
          stiffness: 300,
          damping: 10,
          delay: isInView ? index * 0.1 : 0
        }}
        whileHover={{
          scale: 1.02,
          rotate: isLargeScreen ? targetRotate + (tilt === "left" ? -2 : tilt === "right" ? 2 : 0) : 0,
          transition: { duration: 0.2 }
        }}
        className="relative overflow-visible rounded-3xl cursor-pointer group"
      >
        {/* Background Container */}
        <div className="relative h-96 lg:h-[28rem] overflow-visible">
          <img
            src={backgroundImage}
            alt="Game development background"
            className="w-full h-full object-contain object-center"
          />

          {charecterTrue && characterImage && (
            <img
              src={characterImage}
              alt={alt}
              className="absolute z-99999 top-[22%] left-1/2 -translate-x-1/2 -translate-y-1/2 lg:h-[314px] object-contain pointer-events-none"
            />
          )}
        </div>

        {/* Text Content */}
        <div className="absolute scale-80 lg:scale-90 lg:mb-7 xl:mb-2 bottom-0 left-0 right-0 p-8 sm:p-8 lg:p-12 z-20">
          <div className="text-white">
            <h2 className="text-xl font-light mb-1 tracking-wide drop-shadow-lg">
              Become a
            </h2>
            <h1 className="text-4xl font-clash font-bold uppercase leading-tight tracking-tight drop-shadow-lg">
              {subtitle}
            </h1>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default HomeCard;
