"use client"

import type React from "react"
import { Star, User } from "lucide-react"
import type { Course } from "../../../types/CourseSection.type"
import Button from "../button/Button"

export const CourseCardSkeleton = () => (
  <div className="bg-white rounded-2xl shadow-lg overflow-hidden animate-pulse">
    <div className="relative">
      <div className="w-full h-40 sm:h-52 md:h-64 lg:h-72 bg-gray-200"></div>
      <div className="absolute top-3 right-3 sm:top-4 sm:right-4 bg-gray-200 rounded-full px-3 py-1 w-16 sm:w-20 h-7 sm:h-8"></div>
    </div>
    <div className="p-4 sm:p-6 space-y-3 sm:space-y-4">
      <div className="h-6 sm:h-8 bg-gray-200 rounded w-2/3 sm:w-3/4"></div>
      <div className="space-y-2">
        <div className="h-3 sm:h-4 bg-gray-200 rounded"></div>
        <div className="h-3 sm:h-4 bg-gray-200 rounded w-4/5 sm:w-5/6"></div>
      </div>
      <div className="flex items-center justify-between pt-3 sm:pt-4">
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 sm:w-4 sm:h-4 bg-gray-200 rounded"></div>
          <div className="h-3 sm:h-4 bg-gray-200 rounded w-16 sm:w-20"></div>
        </div>
        <div className="h-10 sm:h-12 bg-gray-200 rounded-full w-24 sm:w-28"></div>
      </div>
    </div>
  </div>
)

export const CourseCard: React.FC<{ course: Course }> = ({ course }) => {
  const renderStars = (rating: number) => {
    const stars = []
    const fullStars = Math.floor(rating)
    const hasHalfStar = rating % 1 !== 0

    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star key={i} className="w-3 h-3 sm:w-4 sm:h-4 fill-yellow-400 text-yellow-400" />)
    }

    if (hasHalfStar) {
      stars.push(<Star key="half" className="w-3 h-3 sm:w-4 sm:h-4 fill-yellow-400 text-yellow-400" />)
    }

    const remainingStars = 5 - Math.ceil(rating)
    for (let i = 0; i < remainingStars; i++) {
      stars.push(<Star key={`empty-${i}`} className="w-3 h-3 sm:w-4 sm:h-4 text-gray-300" />)
    }

    return stars
  }

  return (
    <div className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 h-full">
      <div className="relative p-3 sm:p-4 md:p-6 rounded-lg">
        <img
          src={course.image || "/placeholder.svg"}
          alt={course.title}
          className="w-full h-36 sm:h-48 md:h-56 lg:h-64 object-cover rounded-2xl sm:rounded-3xl" 
        />
        <div className="absolute bottom-2 sm:bottom-4 right-2 sm:right-6 md:right-10 bg-white rounded-xl px-2 sm:px-3 py-1 sm:py-2 shadow-md">
          <div className="flex items-center space-x-2 sm:space-x-3">
            <div className="flex flex-col">
              <div className="text-xs text-gray-600 mb-0.5 sm:mb-1">Rating</div>
              <div className="flex items-center space-x-0.5">{renderStars(course.rating)}</div>
            </div>
            <span className="text-lg sm:text-xl md:text-2xl font-bold alexandria text-gray-900">{course.rating}</span>
          </div>
        </div>
      </div>

      <div className="p-3 sm:p-4 md:p-6">
        <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-gray-900 mb-1 sm:mb-2 md:mb-3 leading-tight font-clash">
          {course.title}
        </h3>
        <p className="text-xs sm:text-sm md:text-base text-gray-600 mb-3 sm:mb-4 md:mb-6 leading-relaxed">
          {course.description}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8">
          {/* <div className="flex items-center space-x-1 sm:space-x-2 text-gray-500">
            <User className="w-3 h-3 sm:w-4 sm:h-4" />
            <span className="text-xs sm:text-sm">+{course.studentCount} Students</span>
          </div> */}
          
          <Button
            className="ring-gray-500"
            startIcon={<User className="text-themePrimary w-3 h-3 sm:w-4 sm:h-4" />}
            variant="outline"
            children={`+${course.studentCount} Students`}
          />
          <Button
            variant="primary"
            children="ENROLL"
          />
        </div>
      </div>
    </div>
  )
}
