import type { ReadonlyRefOrGetter } from '@vueuse/core'
import type { StyleValue } from 'nuxt/dist/app/compat/capi'
import { useElementBounding, useElementSize } from '@vueuse/core'
import type { ProgressionTrack } from '~/types'

export function useOffset(
  point: HTMLElement | SVGElement,
  elementToOffset: HTMLElement,
  config: ProgressionTrack.TeamConfig,
): Omit<ProgressionTrack.Team, 'name' | 'element'> {
  const {
    top: pointTop,
    left: pointLeft,
    bottom: pointBottom,
    right: pointRight,
  } = useElementBounding(point)
  const { width, height } = useElementSize(elementToOffset)

  return {
    top: config.offset.top !== undefined
      ? getOffsetWithSize(pointTop, config.offset.top, height)
      : getOffset(pointBottom, config.offset.bottom),
    left: config.offset.left !== undefined
      ? getOffsetWithSize(pointLeft, config.offset.left, width)
      : getOffset(pointRight, config.offset.right),
  }
}

function getOffset(pointRef: Ref<number>, offset: number | undefined): ReadonlyRefOrGetter<StyleValue> | undefined {
  return offset === undefined ? offset : computed(() => `${pointRef.value + offset}px`)
}

function getOffsetWithSize(pointRef: Ref<number>, offset: number | undefined, size: Ref<number>): ReadonlyRefOrGetter<StyleValue> | undefined {
  return offset === undefined
    ? offset
    : computed(() => `${pointRef.value - offset - size.value}px`)
}
