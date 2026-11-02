import { useWindowSize } from '@vueuse/core'
import mobile from 'is-mobile'
import { desktopSmallScreen, mobileScreen } from '~/constants'

export const currentWidth = ref(0)
export const isMobile = ref(false)
export const isDesktopSmall = ref(false)

export function trackWindowSize(): void {
  const { width } = useWindowSize()

  isMobile.value = mobile() || width.value <= mobileScreen
  isDesktopSmall.value = mobile() || width.value <= desktopSmallScreen

  watch(width, (newWidth) => {
    currentWidth.value = width.value

    isMobile.value = mobile() || newWidth <= mobileScreen
    isDesktopSmall.value = mobile() || newWidth <= desktopSmallScreen
  })
}
