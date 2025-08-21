const SubscribeSkeleton: React.FC = () => {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-3xl p-6 sm:p-8 lg:p-12 shadow-2xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content Skeleton */}
          <div className="space-y-6">
            <div className="space-y-4">
              <div className="h-8 bg-blue-500/30 rounded-lg animate-pulse"></div>
              <div className="h-12 bg-blue-500/30 rounded-lg animate-pulse"></div>
            </div>

            {/* Form Skeleton */}
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="flex-1 h-14 bg-white/20 rounded-xl animate-pulse"></div>
              <div className="w-full sm:w-auto h-14 bg-green-500/30 rounded-xl animate-pulse"></div>
            </div>

            {/* Stats Skeleton */}
            <div className="flex items-center gap-3">
              <div className="flex -space-x-2">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="w-10 h-10 bg-white/20 rounded-full animate-pulse"
                  ></div>
                ))}
              </div>
              <div className="h-4 w-48 bg-blue-500/30 rounded animate-pulse"></div>
            </div>
          </div>

          {/* Right Image Skeleton */}
          <div className="hidden lg:block">
            <div className="w-full h-64 bg-blue-500/30 rounded-2xl animate-pulse"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubscribeSkeleton