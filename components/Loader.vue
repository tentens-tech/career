<script setup lang="ts">
</script>

<template>
  <div
    flex="~ items-center justify-center"
    class="loader-container"
  >
    <span class="loader" />
  </div>
</template>

<style scoped lang="scss">
.loader-container {
  position: absolute;
  top: 50%;
  left: 50%;
}

.loader {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  display: block;
  margin: 15px auto;
  position: relative;
  color: #00f3bc;
  left: -100px;
  box-sizing: border-box;
  animation: shadowRolling 2s linear infinite;
  opacity: 1;
  transition: opacity 0.3s;
}

@keyframes shadowRolling {
  0% {
    box-shadow: 0px 0 rgba(255, 255, 255, 0), 0px 0 rgba(255, 255, 255, 0), 0px 0 rgba(255, 255, 255, 0), 0px 0 rgba(255, 255, 255, 0);
  }
  12% {
    box-shadow: 100px 0 #00f3bc, 0px 0 rgba(255, 255, 255, 0), 0px 0 rgba(255, 255, 255, 0), 0px 0 rgba(255, 255, 255, 0);
  }
  25% {
    box-shadow: 110px 0 #00f3bc, 100px 0 #00f3bc, 0px 0 rgba(255, 255, 255, 0), 0px 0 rgba(255, 255, 255, 0);
  }
  36% {
    box-shadow: 120px 0 #00f3bc, 110px 0 #00f3bc, 100px 0 #00f3bc, 0px 0 rgba(255, 255, 255, 0);
  }
  50% {
    box-shadow: 130px 0 #00f3bc, 120px 0 #00f3bc, 110px 0 #00f3bc, 100px 0 #00f3bc;
  }
  62% {
    box-shadow: 200px 0 rgba(255, 255, 255, 0), 130px 0 #00f3bc, 120px 0 #00f3bc, 110px 0 #00f3bc;
  }
  75% {
    box-shadow: 200px 0 rgba(255, 255, 255, 0), 200px 0 rgba(255, 255, 255, 0), 130px 0 #00f3bc, 120px 0 #00f3bc;
  }
  87% {
    box-shadow: 200px 0 rgba(255, 255, 255, 0), 200px 0 rgba(255, 255, 255, 0), 200px 0 rgba(255, 255, 255, 0), 130px 0 #00f3bc;
  }
  100% {
    box-shadow: 200px 0 rgba(255, 255, 255, 0), 200px 0 rgba(255, 255, 255, 0), 200px 0 rgba(255, 255, 255, 0), 200px 0 rgba(255, 255, 255, 0);
  }
}
</style>
