export interface WhyUsFeature {
  id: string
  title: string
  description: string
  icon?: string
}

export interface WhyUsStatistic {
  id: string
  value: string
  label: string
  suffix?: string
}

export interface WhyUsData {
  mainTitle: string
  subtitle: string
  features: WhyUsFeature[]
  statistics: WhyUsStatistic[]
  illustration: {
    src: string
    alt: string
  }
}
