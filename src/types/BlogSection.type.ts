export interface BlogPost {
  id: string
  title: string
  description: string
  image: string
  imageAlt: string
  featured?: boolean
  size?: "small" | "medium" | "large"
}

export interface BlogSectionProps {
  title?: string
  subtitle?: string
  posts?: BlogPost[]
  loading?: boolean
}
