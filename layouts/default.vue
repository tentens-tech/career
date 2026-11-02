<script setup lang="ts">
import { isMobile, trackWindowSize } from '~/composables/windowSizeService'

const nuxtApp = useNuxtApp()

const mainRef = ref<HTMLElement>()
const isMenuActive = ref(false)
const isLoading = ref(true)

nuxtApp.hook('page:finish', () => {
  mainRef.value?.scrollTo(0, 0)
  isLoading.value = false
})

function handleHashChange(): void {
  isMenuActive.value = window.location.hash.includes('#menu')
}

onMounted(() => {
  trackWindowSize()

  isLoading.value = false

  window.location.hash = ''
  window.addEventListener('hashchange', handleHashChange)
})

onBeforeUnmount(() => {
  window.removeEventListener('hashchange', handleHashChange)
})

watch(() => window.location.hash, (newHash) => {
  isMenuActive.value = newHash.includes('#menu')
})
</script>

<template>
  <main
    h="10dvh screen"
    w-full
    bg-black
    font-manrope
    text-white
    overflow="y-auto x-hidden"
    class="page"
    :class="{ 'page_with-menu': isMenuActive && isMobile }"
    ref="mainRef"
  >
    <Loader v-if="isLoading" />

    <template v-else>
      <TheHeader :isMenuOpened="isMenuActive && isMobile" />
      <MenuMobile :isOpened="isMenuActive && isMobile" />
      <slot />
      <TheFooter />
    </template>
  </main>
</template>

<style>
html, body {
  height: 100vh;
  margin: 0;
  padding: 0;
  width: 100vw;
  overflow: hidden;
}

.page_with-menu {
  overflow: hidden;
}
</style>
