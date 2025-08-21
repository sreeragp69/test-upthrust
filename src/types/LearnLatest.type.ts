export interface LearnLatestFeature {
  id: string
  title: string
  description: string
  icon?: string
}

export interface LearnLatestStatistic {
  id: string
  value: string
  label: string
  suffix?: string
}

export interface LearnLatestData {
  mainTitle: string
  subtitle: string
  features: LearnLatestFeature[]

  illustration: {
    src: string
    alt: string
  }
}
