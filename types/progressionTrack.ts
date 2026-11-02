import type { ReadonlyRefOrGetter } from '@vueuse/core'
import type { StyleValue } from 'nuxt/dist/app/compat/capi'

export interface TeamConfig {
  name: string
  offset: Partial<{
    top: number
    bottom: number
    left: number
    right: number
  }>
}

export interface Team {
  name: string
  element?: HTMLDivElement | null
  top?: ReadonlyRefOrGetter<StyleValue>
  left?: ReadonlyRefOrGetter<StyleValue>
}
