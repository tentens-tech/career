<script setup lang="ts">
import ArrowDown from './../public/images/arrow_down_short.svg'
import ArrowUp from './../public/images/arrow_up_short.svg'

defineProps<{
  items: {
    name: string
    path?: string
  }[]
  title: string
}>()

const dropdown = ref<HTMLElement | null>(null)
const isOpened = ref(false)

function toggleDropdown() {
  isOpened.value = !isOpened.value
}

watchEffect((onInvalidate) => {
  if (process.client) {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdown.value && !dropdown.value.contains(event.target as Node)) {
        isOpened.value = false
      }
    }

    document.addEventListener('mousedown', handleClickOutside)

    onInvalidate(() => {
      document.removeEventListener('mousedown', handleClickOutside)
    })
  }
})
</script>

<template>
  <div
    ref="dropdown"
    position-relative
    cursor-pointer
    @click="toggleDropdown"
  >
    <div
      flex="~ items-center justify-center"
      :text="isOpened ? '#ffffff' : '#c8c8c8'"
    >
      <span m-r-8px>
        {{ title }}
      </span>

      <ArrowUp v-if="isOpened" class="arrow_active" />

      <ArrowDown v-else class="arrow_inactive" />
    </div>

    <div
      v-show="isOpened"
      position-absolute
      flex="~ col justify-start"
      m-t-10px
      w-150px
      line-height-24px
      bg="#141414"
      b="1px solid #393939"
      b-rd-8px
      overflow-hidden
      text="16px #c8c8c8"
    >
      <NuxtLink
        v-for="item in items"
        :key="item.path"
        :to="item.path"
        p="x-14px y-10px"
        hover-text="#00f3bc"
        hover-bg="#191919"
        cursor-pointer
      >
        <p position-relative>
          {{ item.name }}
        </p>
      </NuxtLink>
    </div>
  </div>
</template>

<style scoped lang="scss">
.arrow {
  &_active:deep(path) {
    stroke: #ffffff;
  }

  &_inactive:deep(path) {
    stroke: #6d6d6d;
  }
}
</style>
