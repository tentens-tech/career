<script setup lang="ts">
import ArrowRight from './../public/images/arrow_right.svg'
import ArrowRightLong from './../public/images/arrow_right_long.svg'
import { isMobile } from '~/composables/windowSizeService'
import type { GrowthCardInfo } from '~/types/growth'

defineProps<{ card: GrowthCardInfo }>()
</script>

<template>
  <NuxtLink
    v-if="isMobile"
    :to="card.path"
    flex="~ col"
    h-434px
    w-full
    b-rd-10px
    cursor-pointer
  >
    <div
      relative
      h-358px
      w-full
      m-b-30px
    >
      <img
        absolute
        h-full
        w-full
        bg="#141414"
        b-rd-10px
        object-cover
        :src="`/images/${card.class}.webp`"
        :alt="`${card.class} photo`"
        class="card-mobile"
      />
    </div>

    <div
      flex
      justify-between
      w-full
      b-rd-20px
    >
      <div flex="~ col">
        <div
          m-b-8px
          text-24px
          text-white
          line-height-28px
          font-700
        >
          {{ card.name }} {{ card.surname }}
        </div>

        <p
          text-18px
          line-height-22px
          font-400
        >
          {{ card.position }}
        </p>
      </div>

      <div
        flex="~ justify-center items-center"
        min-w-24px
      >
        <ArrowRightLong class="arrow" />
      </div>
    </div>
  </NuxtLink>

  <NuxtLink
    v-else
    :to="card.path"
    flex
    relative
    h-454px
    w-255px
    b="1px solid linear-gradient(to right, #C8C8C8 20%, #C8C8C8 100%) rd-20px"
    cursor-pointer
    class="card"
    :class="`card_${card.class}`"
  >
    <div
      absolute
      bottom-0
      flex="~ col justify-end"
      w-full
      p-30px
      b-rd-20px
      class="info"
    >
      <div
        m-b-8px
        text-24px
        text-white
        line-height-28px
        font-700
      >
        {{ card.name }}

        <br />

        {{ card.surname }}
      </div>

      <div
        flex
        justify-between
        w-full
      >
        <p
          text-18px
          line-height-22px
          font-400
        >
          {{ card.position }}
        </p>

        <ArrowRight
          min-w-24px
          class="arrow"
        />
      </div>
    </div>
  </NuxtLink>
</template>

<style scoped lang="scss">
.card {
  filter: grayscale(100%);
  transition: filter 0.5s;
  content: '';

  &:hover {
    filter: grayscale(0%);
  }

  &_rostyslav {
    background: rgba(211, 211, 211, 0.1) no-repeat -168px -70px/250% url('/images/rostyslav.webp');
  }

  &_sofia {
    background: rgba(211, 211, 211, 0.1) no-repeat -164px -46px/214% url('/images/sofia.webp');
  }

  &_bogdan {
    background: rgba(211, 211, 211, 0.1) no-repeat -178px -60px/220% url('/images/bogdan.webp');
  }

  &_valentine {
    background: rgba(211, 211, 211, 0.1) no-repeat -132px -65px/208% url('/images/valentine.webp');
  }
}

.card-mobile {
  object-position: center 10%;
}

.info {
  background: linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, #000 100%);
  opacity: 0;
  transition: opacity 0.5s;
}

.card:hover .info {
  opacity: 1;
}

.arrow:deep(path) {
  stroke: #00F3BC;
}
</style>
