export interface GrowthCardInfo {
  name: string
  surname: string
  position: string
  path: string
  class: string
}

export type GrowthCaseData = Record<string, {
  class: string
  title: string
  position: string
  description: string
  story: {
    title: string
    text: string[]
  }[]
  advice: {
    title: string[]
    cards: string[]
  }
  value: {
    title: string
    text: string
  }
}>

export interface GrowthCase {
  class: string
  title: string
  position: string
  description: string
  story: {
    title: string
    text: string[]
  }[]
  advice: {
    title: string[]
    cards: string[]
  }
  value: {
    title: string
    text: string
  }
}

export type GrowthCardSet = Record<string, GrowthCardInfo>
