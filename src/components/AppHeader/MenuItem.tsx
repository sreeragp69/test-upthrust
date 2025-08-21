import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router";

const transition = {
  type: "spring" as const,
  mass: 0.5,
  damping: 11.5,
  stiffness: 100,
  restDelta: 0.001,
  restSpeed: 0.001,
};

type MenuItemProps = {
  item: string;
  active: string | null;
  setActive: (item: string | null) => void;
  children?: React.ReactNode;
};

const MenuItem: React.FC<MenuItemProps> = ({
  item,
  active,
  setActive,
  children,
}) => {
  const hasDropdown = children && React.Children.count(children) > 0;

  return (
    <div
      onMouseEnter={() => (hasDropdown ? setActive(item) : null)}
      onMouseLeave={() => setActive(null)}
      className="relative"
    >
      {hasDropdown ? (
        <motion.p
          transition={transition}
          className="cursor-pointer text-gray-800  uppercase tracking-wide font-semibold px-3 py-1 rounded-lg hover:text-blue-600  hover:bg-white/20  transition-all duration-300"
        >
          {item}
        </motion.p>
      ) : (
        <Link
          to={`/${item.toLowerCase().replace(/\s+/g, "-")}`}
          className="text-gray-800  uppercase tracking-wide font-semibold px-3 py-1 rounded-lg hover:text-blue-600  hover:bg-white/20  transition-all duration-300"
        >
          {item}
        </Link>
      )}

      {active === item && hasDropdown && (
        <div className="absolute top-[calc(100%+1rem)] left-1/2 -translate-x-1/2 pt-4 z-50">
          <div className="absolute -top-4 left-0 right-0 h-4 bg-transparent" />
          <div
            className="bg-white  backdrop-blur-x rounded-2xl overflow-hidden 
                 border border-white/30  shadow-2xl shadow-blue-500/10"
            onMouseEnter={() => setActive(item)}
            onMouseLeave={() => setActive(null)}
          >
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 8 }}
              transition={transition}
              className="w-max h-full p-5 space-y-3"
            >
              {children}
            </motion.div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MenuItem;
