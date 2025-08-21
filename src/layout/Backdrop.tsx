import { useSidebar } from "../context/SidebarContext";
import { motion } from "framer-motion";

interface BackdropProps {
  onClick?: () => void;
}

const Backdrop: React.FC<BackdropProps> = ({ onClick }) => {
  const { isMobileOpen, toggleMobileSidebar } = useSidebar();

  if (!isMobileOpen) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 z-40 lg:hidden"
      onClick={onClick || toggleMobileSidebar}
    >
      {/* Creative Backdrop Layers */}
      
      {/* Main backdrop with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-blue-900/20 to-purple-900/30 backdrop-blur-xl" />
      
      {/* Animated floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating circles */}
        <motion.div
          animate={{
            y: [0, -20, 0],
            x: [0, 10, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-20 left-10 w-3 h-3 bg-blue-400/60 rounded-full blur-sm"
        />
        
        <motion.div
          animate={{
            y: [0, 15, 0],
            x: [0, -15, 0],
            scale: [1, 0.8, 1],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          className="absolute top-40 right-20 w-2 h-2 bg-purple-400/50 rounded-full blur-sm"
        />
        
        <motion.div
          animate={{
            y: [0, -25, 0],
            x: [0, 20, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
          className="absolute bottom-32 left-1/4 w-4 h-4 bg-cyan-400/40 rounded-full blur-sm"
        />
        
        <motion.div
          animate={{
            y: [0, 18, 0],
            x: [0, -12, 0],
            scale: [1, 0.9, 1],
          }}
          transition={{
            duration: 4.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5,
          }}
          className="absolute bottom-20 right-1/3 w-2.5 h-2.5 bg-pink-400/50 rounded-full blur-sm"
        />
      </div>
      
      {/* Geometric patterns */}
      <div className="absolute inset-0 opacity-20">
        {/* Diagonal lines */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-0 left-0 w-32 h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent transform -rotate-45 origin-left" />
          <div className="absolute top-20 left-0 w-24 h-px bg-gradient-to-r from-transparent via-purple-400 to-transparent transform -rotate-45 origin-left" />
          <div className="absolute top-40 left-0 w-28 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent transform -rotate-45 origin-left" />
        </div>
        
        {/* Right side patterns */}
        <div className="absolute top-0 right-0 w-full h-full">
          <div className="absolute top-10 right-0 w-20 h-px bg-gradient-to-l from-transparent via-pink-400 to-transparent transform rotate-45 origin-right" />
          <div className="absolute top-32 right-0 w-16 h-px bg-gradient-to-l from-transparent via-blue-400 to-transparent transform rotate-45 origin-right" />
          <div className="absolute top-52 right-0 w-22 h-px bg-gradient-to-l from-transparent via-purple-400 to-transparent transform rotate-45 origin-right" />
        </div>
      </div>
      
      {/* Interactive click area with subtle border */}
      <div className="absolute inset-0 border border-white/10 rounded-2xl" />
      
      {/* Subtle noise texture */}
      <div className="absolute inset-0 opacity-5">
        <div className="w-full h-full bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.15)_1px,transparent_0)] bg-[length:20px_20px]" />
      </div>
    </motion.div>
  );
};

export default Backdrop;
