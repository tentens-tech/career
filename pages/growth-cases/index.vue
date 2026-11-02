<script setup lang="ts">
import { isDesktopSmall, isMobile } from '~/composables/windowSizeService'
import type { GrowthCardSet } from '~/types/growth'

definePageMeta({
  layoutData: {
    mainImage: '/images/careerFramework_img1.webp',
    name: 'Growth cases',
    title: 'Growth cases',
    breadcrumbs: [
      {
        name: 'Career framework',
        path: '/',
      },
      {
        name: 'Growth cases',
        path: '/growth-cases',
      },
    ],
  },
})

const growthCards: GrowthCardSet = {
  rostyslav: {
    name: 'Poстислав',
    surname: 'Силка',
    position: 'Backend Team Lead',
    path: 'growth-cases/rostyslav',
    class: 'rostyslav',
  },
  sofia: {
    name: 'Софія',
    surname: 'Львова',
    position: 'Software Engineer IC5',
    path: 'growth-cases/sofia',
    class: 'sofia',
  },
  bogdan: {
    name: 'Богдан',
    surname: 'Новіков',
    position: 'Head of Engineering',
    path: 'growth-cases/bogdan',
    class: 'bogdan',
  },
  valentine: {
    name: 'Валентина',
    surname: 'Жук',
    position: 'Lead Marketing Analyst',
    path: 'growth-cases/valentine',
    class: 'valentine',
  },
}
</script>

<template>
  <section
    v-if="isMobile"
    flex="~ col"
  >
    <div
      flex="~ col justify-end"
      m-b-80px
      p-x-20px
      class="header__img"
    >
      <div m-b-60px>
        <div
          m-t-140px
          m-b-30px
          text="font-700 26px"
          line-height-31px
        >
          Growth cases
        </div>

        <div
          text="font-400 18px #C8C8C8"
          line-height-22px
        >
          Як співробітники TENTENS Tech рухались по Career framework, що робили для того, аби досягти успіхів і вивести свій потенціал на пік.

          <div m-t-30px />

          Зібрали їхні історії і готові поділитись ними з вами
        </div>
      </div>
    </div>

    <div
      flex="~ col items-start"
      w-full
      h-auto
      m-b-100px
      p-x-20px
      text-content-2
    >
      <div text-header-1 m-b-30px>
        Команда
      </div>

      <div
        flex="~ col"
        gap-30px
        w-full
        m-b-100px
      >
        <GrowthCard :card="growthCards.rostyslav" />
        <GrowthCard :card="growthCards.sofia" />
        <GrowthCard :card="growthCards.bogdan" />
        <GrowthCard :card="growthCards.valentine" />
      </div>

      <TheNavigation w-full m-b-100px />
    </div>
  </section>

  <section v-else flex="~ col">
    <div position-relative w-full min-h-600px>
      <img src="/images/careerFramework_img1.webp" w-full />

      <div
        grid="~ rows-[1fr_2fr]"
        position-absolute
        h-full
        w-full
        top="0"
        :class="isDesktopSmall ? 'p-l-120px' : 'p-l-160px'"
      >
        <div text-white p-t-90px>
          <TheBreadcrumbs />
        </div>

        <div max-w-570px>
          <div m-b-20px text-title>
            Growth cases
          </div>

          <div
            text="font-400 24px #C8C8C8"
            line-height-28px
          >
            Як співробітники TENTENS Tech рухались по Career framework, що робили для того, аби досягти успіхів і вивести свій потенціал на пік.

            <div m-t-30px />

            Зібрали їхні історії і готові поділитись ними з вами
          </div>
        </div>
      </div>
    </div>

    <div
      flex="~ col items-start"
      w-full
      h-auto
      text-content-2
      :class="isDesktopSmall
        ? 'm-b-90px p-x-120px'
        : 'm-b-90px p-x-160px'"
    >
      <div text-header-1 m-b-60px>
        Команда
      </div>

      <div
        v-if="isDesktopSmall"
        flex="~ row"
        grid-justify-evenly
        gap-36px
        w-full
        m-b-180px
      >
        <div>
          <GrowthCard m-b-40px :card="growthCards.rostyslav" />
          <GrowthCard :card="growthCards.bogdan" />
        </div>

        <div>
          <GrowthCard m-b-40px :card="growthCards.sofia" />
          <GrowthCard :card="growthCards.valentine" />
        </div>
      </div>

      <div
        v-else
        flex
        grid-justify-evenly
        gap-36px
        w-full
        h-454px
        m-b-180px
      >
        <GrowthCard :card="growthCards.rostyslav" />
        <GrowthCard :card="growthCards.sofia" />
        <GrowthCard :card="growthCards.bogdan" />
        <GrowthCard :card="growthCards.valentine" />
      </div>

      <TheNavigation :class="{ 'w-full': isDesktopSmall }" />
    </div>
  </section>
</template>

<style scoped lang="scss">
.header__img {
  content: '';
  background: no-repeat top left 100%/120%  url('/images/careerFramework_img1.webp');
}
</style>
