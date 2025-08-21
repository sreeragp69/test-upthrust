export interface Course {
    id: string
    title: string
    description: string
    image: string
    rating: number
    studentCount: number
    category: string
  }
  
  export interface CourseSectionData {
    title: string
    subtitle: string
    courses: Course[]
  }
  
  export interface CourseSectionProps {
    isLoading?: boolean
  }
  