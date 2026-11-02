<script setup lang="ts">
import { isMobile } from '~/composables/windowSizeService'

defineProps<{ text: string }>()

const ITEM_COUNT = 10
</script>

<template>
  <div
    relative
    flex="~ gap-40px"
    overflow-hidden
    select-none
    b="1px #222"
    b-l-none
    bg="#0d0d0d"
    :class="isMobile ? 'p-y-24px text-18px' : 'p-y-30px text-24px'"
  >
    <div
      flex="~ gap-40px shrink-0 justify-around"
      min-w-full
      class="marquee"
    >
      <div
        v-for="item in ITEM_COUNT"
        :key="item"
        text-white
        font-700
        uppercase
        transition-all
        transition-duration-0.1s
        ease-in-out
      >
        {{ text }}
      </div>
    </div>
    <div
      aria-hidden="true"
      flex="~ gap-40px shrink-0 justify-around"
      min-w-full
      class="marquee"
    >
      <div
        v-for="item in ITEM_COUNT"
        :key="item"
        text-white
        font-700
        uppercase
        transition-all
        transition-duration-0.1s
        ease-in-out
      >
        {{ text }}
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.marquee {
  animation: scroll 20s linear infinite;
}

@keyframes scroll {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(calc(-100% - 20px));
  }
}
</style>
