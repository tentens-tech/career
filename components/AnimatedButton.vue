<script setup lang="ts">
const props = defineProps<{
  path: string
  title: string
}>()

function navigateToPath() {
  navigateTo(props.path, { external: true })
}
</script>

<template>
  <button
    class="animated-button"
    relative
    block
    cursor-pointer
    flex="~ items-center justify-center"
    overflow-hidden
    text="18px #C8C8C8"
    line-height-24px
    style="letter-spacing: -0.9px"
    b="rd-33px"
    bg-black
    w-271px
    h-53px
    hover="text-white bg-#222"
    @click="navigateToPath"
  >
    <span
      b-rd-35px
      class="animated-button__text"
      flex="~ items-center justify-center"
      relative
      inline-block
      bg-black
      z-1
    >
      {{ props.title }}
    </span>
  </button>
</template>

<style scoped lang="scss">
.animated-button {
  &::before {
    content: "";
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    position: absolute;
    width: 200%;
    height: 500px;
    background-image: conic-gradient(
      transparent,
      transparent,
      transparent,
      #00f3bc
    );
    animation: rotation 4s linear infinite;
  }

  &__text {
    width: calc(100% - 2px);
    height: calc(100% - 2px);
  }
}

@keyframes rotation {
  0% {
    transform: translate(-50%, -50%) rotate(0deg);
  }
  100% {
    transform: translate(-50%, -50%) rotate(360deg);
  }
}
</style>
