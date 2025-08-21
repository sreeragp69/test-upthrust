import React, { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useSidebar } from "../context/SidebarContext";
import { useSelector } from "react-redux";
import { Link } from "react-router";
import {
  AppHeaderProps,
  RootState,
  AppHeaderItem,
} from "../types/AppHeader.type";
import AppHeaderData from "../constant/AppHeader.data";

import MenuItem from "../components/AppHeader/MenuItem";
import CourseItem from "../components/AppHeader/CourseItem";
import Menu from "../components/AppHeader/Menu";

/* -------------------- Transition Config -------------------- */
const transition = {
  type: "spring" as const,
  mass: 0.5,
  damping: 11.5,
  stiffness: 100,
  restDelta: 0.001,
  restSpeed: 0.001,
};

/* -------------------- AppHeader -------------------- */
const AppHeader: React.FC<AppHeaderProps> = () => {
  const currentUser = useSelector((state: RootState) => state.auth.user);

  const [isApplicationMenuOpen, setApplicationMenuOpen] = useState(false);
  const { isMobileOpen, toggleMobileSidebar } = useSidebar();
  const [active, setActive] = useState<string | null>(null);

  const handleToggle = () => {
    toggleMobileSidebar();
  };

  const toggleApplicationMenu = () => {
    setApplicationMenuOpen(!isApplicationMenuOpen);
  };

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key === "k") {
        event.preventDefault();
        inputRef.current?.focus();
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);
  

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="sticky top-0 flex p-2  mx-auto max-w-(--breakpoint-2xl) bg-themeBackgroundColor z-[999999]"
    >
      <div className="flex flex-col items-center justify-between w-full  mx-auto px-4 lg:px-6">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex items-center justify-between w-full gap-4 py-4 lg:py-5"
        >
          
          {/* Mobile Menu Button */}
          <AnimatePresence>
            <div className="flex items-center lg:hidden order-last">
              <div className="relative">
                <div id="menuToggle" className="lg:hidden">
                  <input
                    id="checkbox"
                    type="checkbox"
                    onChange={handleToggle}
                    checked={isMobileOpen}
                    readOnly
                    className="hidden"
                  />
                  <label
                    className="relative w-6 h-6 flex flex-col justify-between cursor-pointer"
                    htmlFor="checkbox"
                  >
                    <div
                      className={`w-full h-0.5 bg-gray-600 rounded transition-all duration-300 ${
                        isMobileOpen ? "rotate-45 translate-y-2" : ""
                      }`}
                    ></div>
                    <div
                      className={`w-full h-0.5 bg-gray-600  rounded transition-all duration-300 ${
                        isMobileOpen ? "opacity-0" : ""
                      }`}
                    ></div>
                    <div
                      className={`w-full h-0.5 bg-gray-600  rounded transition-all duration-300 ${
                        isMobileOpen ? "-rotate-45 -translate-y-2" : ""
                      }`}
                    ></div>
                  </label>
                </div>
              </div>
            </div>
          </AnimatePresence>

          {/* Logo */}
          <motion.div
            className="flex-shrink-0"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <div className="text-black ">
              <img
                src="images/logo/logo.svg"
                alt="Logo"
                className="h-10 w-auto"
              />
            </div>
          </motion.div>

          {/* Navigation Links (Desktop with Dropdowns) */}
          <div className="hidden lg:flex items-center gap-8">
            <Menu setActive={setActive}>
              {AppHeaderData.map((item: AppHeaderItem) => (
                <MenuItem
                  key={item.id}
                  item={item.name}
                  active={active}
                  setActive={setActive}
                >
                  {item.isDropdown && item.dropdownList && (
                    <div className="grid grid-cols-2 gap-6 p-4 text-sm">
                      {item.dropdownList.map((course, index) => (
                        <CourseItem
                          key={index}
                          title={course.courseName}
                          href={`/courses/${course.courseName
                            .toLowerCase()
                            .replace(/\s+/g, "-")}`}
                          src={course.courseImg}
                          description={course.description}
                        />
                      ))}
                    </div>
                  )}
                </MenuItem>
              ))}
            </Menu>
          </div>

            {/* Right Side Actions */}
            <div className="flex items-center gap-3">
              {/* Auth Buttons */}
              <motion.div
                className="hidden sm:flex items-center gap-3"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    to="/login"
                    className="px-6 py-2 text-sm font-normal alexandria bg-themePrimary text-white border border-themePrimary rounded-full hover:bg-blue-50 hover:text-themePrimary transition-all duration-200"
                  >
                    Login
                  </Link>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    to="/signup"
                    className="px-6 py-2 text-sm font-normal alexandria text-themePrimary bg-white border border-themePrimary rounded-full hover:bg-blue-50 hover:text-themePrimary transition-all duration-200"
                  >
                    Sign up
                  </Link>
                </motion.div>
              </motion.div>
            </div>
        </motion.div>
      </div>
    </motion.header>
  );
};

export default AppHeader;

/* -------------------- Dropdown Components -------------------- */



