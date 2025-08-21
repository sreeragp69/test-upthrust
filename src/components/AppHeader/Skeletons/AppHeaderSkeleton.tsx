import React from "react";

const AppHeaderSkeleton: React.FC = () => {
  return (
    <header className="sticky top-0 flex w-full bg-themeBackgroundColor z-[999999]">
      <div className="flex flex-col items-center justify-between w-full  mx-auto px-4 lg:px-6">
        <div className="flex items-center justify-between w-full gap-4 py-4 lg:py-5 animate-pulse">
          
          {/* Mobile Menu Button */}
          <div className="flex items-center lg:hidden">
            <div className="w-6 h-6 flex flex-col justify-between">
              <div className="h-0.5 bg-gray-400  rounded"></div>
              <div className="h-0.5 bg-gray-400  rounded"></div>
              <div className="h-0.5 bg-gray-400 rounded"></div>
            </div>
          </div>

          {/* Logo */}
          <div className="flex-shrink-0">
            <div className="h-10 w-24 bg-gray-300  rounded"></div>
          </div>

          {/* Navigation Links (Desktop) */}
          <div className="hidden lg:flex items-center gap-8">
            {Array.from({ length: 4 }).map((_, i) => (
              <div
                key={i}
                className="h-5 w-16 bg-gray-300  rounded"
              ></div>
            ))}
          </div>

          {/* Auth Buttons */}
          <div className="flex items-center gap-3">
            <div className="hidden sm:flex items-center gap-3">
              <div className="h-8 w-20 bg-gray-300  rounded-full"></div>
              <div className="h-8 w-20 bg-gray-300  rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default AppHeaderSkeleton;
