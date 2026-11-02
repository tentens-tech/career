<script setup lang="ts">
const props = defineProps<{ path: string }>()

function navigateToPath() {
  navigateTo(props.path)
}
</script>

<template>
  <button
    b="1px rd-5px #00F3BC"
    p="y-15px x-25px"
    text="#00B088"
    font-semibold
    class="progression-button"
    backdrop-blur-10
    @click="navigateToPath"
  >
    <slot />
  </button>
</template>

<style scoped lang="scss">
.progression-button {
  background: linear-gradient(
    67deg,
    rgba(0, 243, 188, 0.26) 29.7%,
    rgba(0, 243, 188, 0) 127.2%
  );
}
</style>
