export interface Testimonial {
  id: string
  name: string
  designation: string
  testimonial: string
  image: string
}

export interface TestimonialsSectionProps {
  className?: string
}

export interface TestimonialCardProps {
  testimonial: Testimonial
  isLoading?: boolean
}
