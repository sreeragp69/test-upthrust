"use client"

import type React from "react"

const BlogSkeleton: React.FC<{ size?: "small" | "medium" | "large" }> = ({ size = "medium" }) => {
  const getImageHeight = (size?: string) => {
    switch (size) {
      case "small":
        return "h-48"
      case "large":
        return "h-72"
      default:
        return "h-60"
    }
  }

  return (
    <article className="overflow-hidden rounded-4xl  border-gray-100 flex flex-col animate-pulse">
      {/* Image Skeleton */}
      <div className={`relative rounded-4xl overflow-hidden flex-shrink-0 ${getImageHeight(size)}`}>
        <div className="absolute inset-0 bg-gray-200" />
     
      </div>

      {/* Content Skeleton */}
      <div className="px-0 py-6 flex-1 flex flex-col justify-between">
        <div className="flex-1 space-y-3">
          <div className="h-6 bg-gray-200 rounded w-3/4" /> {/* Title */}
          <div className="h-4 bg-gray-200 rounded w-full" /> {/* Line 1 */}
          <div className="h-4 bg-gray-200 rounded w-5/6" /> {/* Line 2 */}
          <div className="h-4 bg-gray-200 rounded w-2/3" /> {/* Line 3 */}
        </div>
      </div>
    </article>
  )
}

export default BlogSkeleton
