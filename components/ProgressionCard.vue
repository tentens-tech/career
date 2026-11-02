<script setup lang="ts">
defineProps<{
  name: string
  items: { name: string, path?: string }[]
}>()
</script>

<template>
  <div
    flex="~ col gap-7px"
    min-w-240px
    h-full
    bg="rgba(13, 13, 13, 0.50)"
    p="25px"
    b="2px rd-5px #222222"
    text="#979797"
    hover="text-#C8C8C8"
    backdrop-blur-10
  >
    <div
      text="#FFFFFF"
      m="b-8px"
      text-16px
      font-600
    >
      {{ name }}
    </div>

    <div
      v-for="item in items"
      :key="item.name"
      w-fit
      text-14px
      hover="text-#00F3BC"
      font-500
    >
      <NuxtLink v-if="item.path" :to="item.path">
        {{ item.name }}
      </NuxtLink>

      <span v-else cursor-default>
        {{ item.name }}
      </span>
    </div>
  </div>
</template>
