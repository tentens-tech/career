<script setup lang="ts">
import { isDesktopSmall, isMobile } from '~/composables/windowSizeService'

const route = useRoute()

const currentYear = computed(() => new Date().getFullYear())

const isGrowthCasePage = computed<boolean>(() => route.path.includes('growth-cases'))
const isGrowthCaseMobile = isGrowthCasePage && isMobile
</script>

<template>
  <footer>
    <FlowingText
      v-if="!isGrowthCaseMobile"
      text="Відчуй наш драйв"
    />

    <div
      relative
      :class="isMobile
        ? 'my-0 mx-auto'
        : 'm-b-76px p-t-101px p-x-161px min-h-506px'"
    >
      <img
        v-if="!isMobile"
        absolute
        right-0
        top-0
        h-506px
        object-cover
        src="/images/footer_img.webp"
        alt="sports car"
      >

      <div
        relative
        :class="[
          { 'flex flex-col items-center justify-center p-x-26px': isMobile },
          { 'footer__img p-t-60px p-b-160px': isMobile && !isGrowthCaseMobile },
          { 'max-w-431px': !isMobile && !isGrowthCasePage },
          { 'max-w-700px': !isMobile && isGrowthCasePage },
        ]"
      >
        <div
          v-if="isGrowthCasePage && !isGrowthCaseMobile"
          m-b-40px
          text-title
        >
          Create your own success story at TENTENS Tech
        </div>

        <div v-if="isGrowthCaseMobile" />

        <template v-if="!isGrowthCasePage && !isGrowthCaseMobile">
          <div
            m-b-20px
            font-700
            :style="isMobile
              ? 'letter-spacing: -1.2px'
              : 'letter-spacing: -1.8px'"
            :class="isMobile
              ? 'text-center text-24px line-height-31px'
              : 'max-w-431px text-36px line-height-43px'"
          >
            Ми драйвимо таланти
            <br>
            до піку їхнього потенціалу
          </div>

          <div
            m-b-30px
            text="18px #C8C8C8"
            line-height-22px
            :class="{ 'text-center': isMobile }"
          >
            TENTENS Tech — це найпотужніша команда, найсучасніший болід та місце
            на міжнародних перегонах. Це для тих, хто мчить за горизонт
          </div>
        </template>

        <AnimatedButton
          v-if="!isGrowthCaseMobile"
          title="Приєднатися до команди"
          path="https://jobs.ashbyhq.com/TENTENS-Tech"
        />
      </div>
    </div>

    <div
      :class="[
        { 'block flex flex-col w-full p-x-20px': isMobile },
        { 'flex justify-start m-b-65px p-l-120px p-r-120px': !isMobile && isDesktopSmall },
        { 'flex justify-start m-b-65px p-l-165px p-r-175px': !isMobile && !isDesktopSmall },
      ]"
    >
      <div
        :class="[
          { 'm-y-0px m-x-auto': isMobile },
          { 'm-r-40px p-t-14px': !isMobile && isDesktopSmall },
          { 'm-r-191px p-t-14px': !isMobile && !isDesktopSmall },
        ]"
      >
        <NuxtLink to="/">
          <img
            src="/images/footer_logo.svg"
            alt="tentens tech"
            :class="isMobile
              ? 'm-b-56px'
              : 'm-b-30px'"
          >
        </NuxtLink>

        <SocialLinks v-if="!isMobile" />
      </div>

      <div
        flex
        font-500
        :class="{ 'flex-col': isMobile }"
      >
        <div
          flex="~ col gap-20px"
          :class="[
            { 'm-b-30px line-height-24px text-18px': isMobile },
            { 'm-r-40px line-height-30px text-24px': !isMobile && isDesktopSmall },
            { 'm-r-90px line-height-30px text-24px': !isMobile && !isDesktopSmall },
          ]"
        >
          <NuxtLink
            to="https://jobs.ashbyhq.com/TENTENS-Tech"
            hover-text="#00F3BC"
          >
            Вакансії
          </NuxtLink>

          <NuxtLink
            to="/"
            hover-text="#00F3BC"
          >
            Career framework
          </NuxtLink>

          <NuxtLink
            to="/tech-career"
            hover-text="#00F3BC"
          >
            Tech careers
          </NuxtLink>

          <NuxtLink
            to="/growth-cases"
            hover-text="#00F3BC"
          >
            Growth cases
          </NuxtLink>
        </div>

        <div
          v-if="isMobile"
          flex="~ row gap-93px"
          m-b-60px
        >
          <div
            flex="~ col gap-16px"
            m-r-69px
            text="font-400 18px #C8C8C8"
            line-height-22px
          >
            <NuxtLink
              to="/tech-career/backend"
              hover-text="#00F3BC"
            >
              Backend
            </NuxtLink>

            <NuxtLink
              to="/tech-career/frontend"
              hover-text="#00F3BC"
            >
              Frontend
            </NuxtLink>

            <NuxtLink
              to="/tech-career/qa"
              hover-text="#00F3BC"
            >
              QA
            </NuxtLink>

            <NuxtLink
              to="/tech-career/devops"
              hover-text="#00F3BC"
            >
              Devops
            </NuxtLink>

            <NuxtLink
              to="/tech-career/dba"
              hover-text="#00F3BC"
            >
              DBA
            </NuxtLink>

            <NuxtLink
              to="/tech-career/so"
              hover-text="#00F3BC"
            >
              SO
            </NuxtLink>
          </div>

          <div
            flex="~ col gap-16px"
            text="font-400 18px #C8C8C8"
            line-height-22px
          >
            <NuxtLink
              to="/tech-career/analytics"
              hover-text="#00F3BC"
            >
              Analytic
            </NuxtLink>

            <NuxtLink
              to="/tech-career/data-engineer"
              hover-text="#00F3BC"
            >
              Data Engineer
            </NuxtLink>

            <NuxtLink
              to="/tech-career/design"
              hover-text="#00F3BC"
            >
              Design
            </NuxtLink>

            <NuxtLink
              to="/tech-career/lead"
              hover-text="#00F3BC"
            >
              Lead track
            </NuxtLink>
          </div>
        </div>

        <template v-else>
          <div
            flex="~ col gap-16px"
            text="14px #C8C8C8"
            m-r-69px
            line-height-22px
          >
            <NuxtLink
              to="/tech-career/backend"
              hover-text="#00F3BC"
            >
              Backend
            </NuxtLink>

            <NuxtLink
              to="/tech-career/frontend"
              hover-text="#00F3BC"
            >
              Frontend
            </NuxtLink>

            <NuxtLink
              to="/tech-career/qa"
              hover-text="#00F3BC"
            >
              QA
            </NuxtLink>

            <NuxtLink
              to="/tech-career/devops"
              hover-text="#00F3BC"
            >
              Devops
            </NuxtLink>

            <NuxtLink
              to="/tech-career/so"
              hover-text="#00F3BC"
            >
              SO
            </NuxtLink>
          </div>

          <div
            flex="~ col gap-16px"
            text="14px #C8C8C8"
            line-height-22px
          >
            <NuxtLink
              to="/tech-career/dba"
              hover-text="#00F3BC"
            >
              DBA
            </NuxtLink>

            <NuxtLink
              to="/tech-career/analytics"
              hover-text="#00F3BC"
            >
              Analytic
            </NuxtLink>

            <NuxtLink
              to="/tech-career/data-engineer"
              hover-text="#00F3BC"
            >
              Data Engineer
            </NuxtLink>

            <NuxtLink
              to="/tech-career/design"
              hover-text="#00F3BC"
            >
              Design
            </NuxtLink>

            <NuxtLink
              to="/tech-career/lead"
              hover-text="#00F3BC"
            >
              Lead track
            </NuxtLink>
          </div>
        </template>

        <SocialLinks
          v-if="isMobile"

          m-b-30px justify-center
        />
      </div>
    </div>

    <div
      b-t="1px #6D6D6D"
      text="16px #6D6D6D center"
      :class="isMobile
        ? 'p-y-30px p-x-70px font-400 line-height-20px'
        : 'p-y-20px font-500 line-height-24px'"
    >
      © Copyright {{ currentYear }} TENTENS©. All rights reserved.
    </div>
  </footer>
</template>

<style scoped lang="scss">
.footer__img {
  content: '';
  background: no-repeat 100%/100% url('/images/footer_img_bg-mobile.webp');
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
