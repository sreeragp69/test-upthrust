export interface FooterProps {
  isLoading?: boolean
}

export interface FooterLink {
  label: string
  href: string
}

export interface FooterSection {
  title: string
  links: FooterLink[]
}

export interface ContactInfo {
  phone: string
  address: {
    line1: string
    line2: string
    line3: string
  }
}

export interface ContactFormData {
  firstName: string
  email: string
  phone: string
  course: string
}

export interface CourseOption {
  value: string
  label: string
}
