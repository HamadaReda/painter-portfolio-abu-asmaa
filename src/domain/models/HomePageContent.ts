export interface HomeValue {
  id: string
  title: string
  description: string
}

export interface WorkStep {
  id: string
  title: string
  description: string
}

export interface HomePageContent {
  hero: {
    eyebrow: string
    title: string
    description: string
  }
  values: readonly HomeValue[]
  process: readonly WorkStep[]
  serviceAreas: readonly string[]
  finalCta: {
    title: string
    description: string
  }
}
