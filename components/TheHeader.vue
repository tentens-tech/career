<script setup lang="ts">
import Menu from './../public/images/menu.svg'
import Cross from './../public/images/cross.svg'
import { isDesktopSmall, isMobile } from '~/composables/windowSizeService'

defineProps<{ isMenuOpened: boolean }>()

function onMenuClick(): string {
  return window.location.hash.includes('#menu')
    ? window.location.hash = ''
    : window.location.hash = 'menu'
}

function onLogoClick(): void {
  window.location.pathname = '/'
  window.location.hash = ''
}
</script>

<template>
  <header
    w-full
    flex="~ row items-center"
    :class="[
      { 'sticky top-0 z-100 flex-justify-between h-64px p-x-20px p-y-16px bg-black': isMobile },
      { 'h-85px p-l-120px': !isMobile && isDesktopSmall },
      { 'h-85px p-l-165px': !isMobile && !isDesktopSmall },
    ]"
  >
    <button @click="onLogoClick">
      <img
        src="/images/logo.svg"
        alt="tentens tech"
        :class="{ 'max-h-32px': isMobile }"
      >
    </button>

    <Menu
      v-if="isMobile && !isMenuOpened"
      cursor-pointer
      @click="onMenuClick"
    />

    <Cross
      v-if="isMobile && isMenuOpened"
      w-24px
      cursor-pointer
      @click="onMenuClick"
    />
  </header>
</template>
