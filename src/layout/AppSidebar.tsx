import { useCallback, useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  ChevronDownIcon,
  LogOutIcon,
  HomeIcon,
  UsersIcon,
  CalendarIcon,
  SettingsIcon,
  BookOpenIcon,
  GraduationCapIcon,
  BriefcaseIcon,
  AwardIcon,
  GlobeIcon,
} from "../icons";
import { useSidebar } from "../context/SidebarContext";
import { useSelector, useDispatch } from "react-redux";
import { clearUser } from "../store/authSlice";
import { clearAuth } from "../utils/auth";
import AppHeaderData from "../constant/AppHeader.data";

interface RootState {
  auth: {
    user: {
      id: string;
      email: string;
      name: string;
      role: string;
    } | null;
    token: string | null;
  };
}

interface NavItem {
  name: string;
  path: string;
  icon: React.ReactNode;
}

const AppSidebar: React.FC = () => {
  const { isMobileOpen, toggleMobileSidebar } = useSidebar();
  const location = useLocation();
  const dispatch = useDispatch();

  const currentUser = useSelector((state: RootState) => state.auth.user);
  const role = currentUser?.role || "Student";

  // Educational institute navigation items
  const getNavItems = (role: string): NavItem[] => {
    const baseItems = [
      {
        name: "Dashboard",
        path: "/dashboard",
        icon: <HomeIcon className="w-5 h-5" />,
      },
      {
        name: "Courses",
        path: "/courses",
        icon: <BookOpenIcon className="w-5 h-5" />,
      },
      {
        name: "Projects",
        path: "/projects",
        icon: <BriefcaseIcon className="w-5 h-5" />,
      },
      {
        name: "Calendar",
        path: "/calendar",
        icon: <CalendarIcon className="w-5 h-5" />,
      },
    ];

    // Add role-specific items
    if (["Admin", "Instructor", "Teacher"].includes(role)) {
      baseItems.splice(2, 0, {
        name: "Students",
        path: "/students",
        icon: <UsersIcon className="w-5 h-5" />,
      });
      baseItems.splice(3, 0, {
        name: "Certificates",
        path: "/certificates",
        icon: <AwardIcon className="w-5 h-5" />,
      });
    }

    if (role === "Student") {
      baseItems.splice(2, 0, {
        name: "My Learning",
        path: "/my-learning",
        icon: <GraduationCapIcon className="w-5 h-5" />,
      });
    }

    // Add settings for all roles
    baseItems.push({
      name: "Settings",
      path: "/settings",
      icon: <SettingsIcon className="w-5 h-5" />,
    });

    return baseItems;
  };

  const navItems = getNavItems(role);

  const isActive = useCallback(
    (path: string) => {
      if (!path) return false;
      if (location.pathname === path) return true;
      const normalized = path.endsWith("/") ? path.slice(0, -1) : path;
      return location.pathname.startsWith(`${normalized}/`);
    },
    [location.pathname]
  );

  const handleLogout = () => {
    dispatch(clearUser());
    clearAuth();
    window.location.href = "/login";
  };

  const handleNavClick = () => {
    // Close mobile sidebar when navigation item is clicked
    if (isMobileOpen) {
      toggleMobileSidebar();
    }
  };

  return (
    <aside
      className={`fixed mt-16 flex flex-col top-0 right-0 bg-white text-gray-900 h-screen transition-transform duration-300 ease-in-out z-50 border-l border-gray-200 w-[280px] shadow-xl
        ${isMobileOpen ? "translate-x-0" : "translate-x-full"} 
        lg:hidden`}
    >
      {/* Header with Navigation Tabs - Exact layout from image */}
      <div className="p-6 border-b border-gray-200">
        {/* Navigation Tabs - Top section */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex space-x-1">
            <button className="px-4 py-2 bg-gray-900 text-white rounded-lg text-sm font-medium">
              Home
            </button>
            <button className="px-4 py-2 text-gray-600 hover:text-gray-900 rounded-lg text-sm font-medium transition-colors">
              About
            </button>
            <button className="px-4 py-2 text-gray-600 hover:text-gray-900 rounded-lg text-sm font-medium transition-colors">
              Courses
            </button>
            <button className="px-4 py-2 text-gray-600 hover:text-gray-900 rounded-lg text-sm font-medium transition-colors">
              Contact
            </button>
          </div>
          
          {/* Close Button - Circular with X like image */}
          <button
            onClick={toggleMobileSidebar}
            className="w-8 h-8 rounded-full bg-gray-900 hover:bg-gray-800 flex items-center justify-center transition-all duration-200"
          >
            <div className="w-4 h-4 relative">
              <div className="absolute inset-0 w-full h-0.5 bg-white transform rotate-45 origin-center"></div>
              <div className="absolute inset-0 w-full h-0.5 bg-white transform -rotate-45 origin-center"></div>
            </div>
          </button>
        </div>
      </div>
      
      {/* Main Content Area - Your Actual Navigation Items */}
      <div className="flex-1 overflow-y-auto py-4">
        <div className="px-6 space-y-2">
          {/* Main Navigation Items */}
          <div className="mb-6">
            <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3 px-3">
              Main Navigation
            </h3>
            {AppHeaderData.map((item) => (
              <Link
                key={item.id}
                to={item.path}
                onClick={handleNavClick}
                className={`flex items-center gap-3 px-3 py-3 rounded-lg font-medium transition-all duration-200 ${
                  isActive(item.path)
                    ? "bg-gray-100 text-gray-900 border-l-2 border-blue-500"
                    : "text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                }`}
              >
                <span className="w-5 h-5 flex items-center justify-center text-gray-500">
                  {item.name === "Home" && <HomeIcon className="w-4 h-4" />}
                  {item.name === "About us" && (
                    <UsersIcon className="w-4 h-4" />
                  )}
                  {item.name === "Courses" && (
                    <BookOpenIcon className="w-4 h-4" />
                  )}
                  {item.name === "Batches" && (
                    <GraduationCapIcon className="w-4 h-4" />
                  )}
                  {item.name === "Blog" && <BookOpenIcon className="w-4 h-4" />}
                  {item.name === "Contact us" && (
                    <UsersIcon className="w-4 h-4" />
                  )}
                </span>
                <span className="text-sm font-medium">{item.name}</span>
              </Link>
            ))}
          </div>

          {/* Role-based Navigation */}
          <div className="mb-6">
            <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3 px-3">
              {role} Features
            </h3>
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={handleNavClick}
                className={`flex items-center gap-3 px-3 py-3 rounded-lg font-medium transition-all duration-200 ${
                  isActive(item.path)
                    ? "bg-gray-100 text-gray-900 border-l-2 border-blue-500"
                    : "text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                }`}
              >
                <span className="w-5 h-5 flex items-center justify-center text-gray-500">
                  {item.icon}
                </span>
                <span className="text-sm font-medium">{item.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Footer with Language and Motion - Bottom section like image */}
      <div className="p-6 border-t border-gray-200">
        <div className="flex items-center justify-between text-sm">
          {/* Language Selection - Left side */}
          <button className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors">
            <GlobeIcon className="w-4 h-4" />
            <span>English</span>
            <ChevronDownIcon className="w-3 h-3" />
          </button>
          
          {/* Motion Setting - Right side */}
          <button className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors">
            <span>Motion</span>
            <ChevronDownIcon className="w-3 h-3" />
          </button>
        </div>
      </div>
    </aside>
  );
};

export default AppSidebar;
