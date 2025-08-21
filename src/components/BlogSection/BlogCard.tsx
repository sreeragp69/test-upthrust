import { ArrowRight, Calendar, Clock } from "lucide-react"
import { useState } from "react"
import { BlogPost } from "../../types/BlogSection.type"

const BlogCard: React.FC<{ post: BlogPost }> = ({ post }) => {
  const [imageLoaded, setImageLoaded] = useState(false)
  const [imageError, setImageError] = useState(false)

  const handleImageLoad = () => {
    setImageLoaded(true)
  }

  const handleImageError = () => {
    setImageError(true)
    setImageLoaded(true)
  }



  return (
    <article className=" bg-  overflow-hidden  rounded-4xl  border-gray-100  cursor-pointer flex flex-col">
      <div className={`relative rounded-4xl   overflow-hidden flex-shrink-0`}>
        {!imageLoaded && <div className="absolute inset-0 bg-gray-200 animate-pulse" />}
        {!imageError ? (
          <img
            src={post.image || "/placeholder.svg"}
            alt={post.imageAlt}
            className={`w-full h-full  object-cover  ${
              imageLoaded ? "opacity-100" : "opacity-0"
            }`}
            onLoad={handleImageLoad}
            onError={handleImageError}
          />
        ) : (
          <div className="w-full h-full bg-gray-200 flex items-center justify-center">
            <div className="text-gray-400 text-center">
              <Calendar className="w-12 h-12 mx-auto mb-2" />
              <p className="text-sm">Image not available</p>
            </div>
          </div>
        )}
        {post.featured && (
          <div className="absolute top-4 left-4">
            <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">Featured</span>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      <div className="px-0 py-6 flex-1 flex flex-col justify-between">
        <div className="flex-1">
          <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-200 line-clamp-2">
            {post.title}
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">{post.description}</p>
        </div>

       
      </div>
    </article>
  )
}
export default BlogCard