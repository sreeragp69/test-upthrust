import React from "react";

const AboutSkeleton = () => {
  return (
    <div className="mx-auto w-full px-4 sm:px-6 lg:px-8 animate-pulse">
      <div className="lg:mt-20 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 py-5">
        
        {/* Left Text Section Skeleton */}
        <div className="flex items-center">
          <div className="flex flex-col gap-5 items-start w-full">
            <div className="h-6 w-40 bg-gray-300 rounded"></div>
            <div className="h-10 w-3/4 bg-gray-300 rounded"></div>
            <div className="h-20 w-full bg-gray-300 rounded"></div>
            <div className="h-10 w-32 bg-gray-300 rounded"></div>
          </div>
        </div>

        {/* Middle Image Section Skeleton */}
        <div className="flex flex-col">
          <div className="w-full h-64 sm:h-72 lg:h-80 bg-gray-300 rounded-2xl"></div>
          <div className="grid grid-cols-2 gap-3 sm:gap-5 mt-4 sm:mt-5">
            <div className="w-full h-32 sm:h-36 bg-gray-300 rounded-2xl"></div>
            <div className="w-full h-32 sm:h-36 bg-gray-300 rounded-2xl"></div>
          </div>
        </div>

        {/* Right Image Section Skeleton */}
        <div>
          <div className="w-full h-64 sm:h-72 lg:h-full bg-gray-300 rounded-2xl"></div>
        </div>

      </div>
    </div>
  );
};

export default AboutSkeleton;
