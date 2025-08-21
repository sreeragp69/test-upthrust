"use client"

import type React from "react"
import { useState, useEffect } from "react"
import {  BlogSectionProps } from "../../types/BlogSection.type"
import { BLOG_POSTS, BLOG_SECTION_DATA } from "../../constant/BlogSection.data"
import BlogCard from "./BlogCard"
import BlogSkeleton from "./BlogSkeleton"




const BlogSection: React.FC<BlogSectionProps> = ({
  title = BLOG_SECTION_DATA.title,
  subtitle = BLOG_SECTION_DATA.subtitle,
  posts = BLOG_POSTS,
  loading = false,
}) => {
  const [isLoading, setIsLoading] = useState(loading)

  useEffect(() => {
    if (loading) {
      const timer = setTimeout(() => {
        setIsLoading(false)
      }, 2000)
      return () => clearTimeout(timer)
    }
  }, [loading])

  return (
    <section className="py-16 px-4  ">
      <div className=" mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          {isLoading ? (
            <div className="space-y-4">
              <div className="h-12 bg-gray-200 rounded mx-auto w-80 animate-pulse" />
              <div className="h-6 bg-gray-200 rounded mx-auto w-96 animate-pulse" />
              <div className="h-6 bg-gray-200 rounded mx-auto w-72 animate-pulse" />
            </div>
          ) : (
            <>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">{title}</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">{subtitle}</p>
            </>
          )}
        </div>

        {/* Blog Grid */}
        <div className="columns-1 md:columns-2  gap-6 lg:gap-8 space-y-6">
          {isLoading ? (
            <>
              <div className="break-inside-avoid mb-6">
                <BlogSkeleton size="large" />
              </div>
              <div className="break-inside-avoid mb-6">
                <BlogSkeleton size="medium" />
              </div>
              <div className="break-inside-avoid mb-6">
                <BlogSkeleton size="small" />
              </div>
              <div className="break-inside-avoid mb-6">
                <BlogSkeleton size="large" />
              </div>
            </>
          ) : (
            posts.slice(0, 4).map((post) => (
              <div key={post.id} className="break-inside-avoid mb-6">
                <BlogCard post={post} />
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  )
}

export default BlogSection
