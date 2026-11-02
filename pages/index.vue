<script setup lang="ts">
import { setupVanillaTilt } from '~/scripts/tilt'
import { isDesktopSmall, isMobile } from '~/composables/windowSizeService'

definePageMeta({
  layoutData: {
    mainImage: '/images/careerFramework_img1.webp',
    name: 'Career framework',
    title: 'Career framework',
    breadcrumbs: [
      {
        name: 'Career framework',
        path: '/',
      },
    ],
  },
})

const careerFunctions = [
  {
    text: 'Допомагає працівнику зрозуміти свою роль в компанії й те, що необхідно робити для особистого зростання',
  },
  {
    text: 'Допомагає визначати напрямок свого професійного розвитку: рух по IC (Individual Contributor) треку, leadership треку або перехід на іншу роль',
  },
  {
    text: 'Донести, які очікування є у компанії від співробітників та кандидатів',
  },
  {
    text: 'Для бізнесу – зрозуміти, який внесок робить працівник для досягнення цілей компанії, а для працівника — зрозуміти цінність, яку він/вона приносить',
  },
  {
    text: 'Фреймворк не є інструментом оцінки, а є інструментом, який допомагає менеджеру і співробітнику робити висновки відносно перфомансу і зростання',
    image: '/images/analytics.svg',
  },
]

onUpdated(setupVanillaTilt)

setupVanillaTilt()
</script>

<template>
  <section
    v-if="isMobile"
    flex-col
  >
    <div
      m-b-80px
      flex="~ col justify-end"
      class="header__img"
    >
      <div m-l-20px>
        <div
          m-t-140px
          m-b-60px
          text="font-700 26px"
          line-height-31px
        >
          Career

          <br />

          framework
        </div>
      </div>
    </div>

    <div
      flex="~ col items-start"
      w-full
      m-b-100px
      p-x-20px
    >
      <div m-b-30px text-header-1>
        Що таке career framework?
      </div>

      <div text-content-3>
        Кар'єрний фреймворк – це джерело інформації, яке описує, як співробітник
        може розвиватись всередині компанії та досягати успіхів бізнесу. У
        фреймворку вказані патерни поведінки, що очікуються від конкретної ролі
        та грейду.
      </div>
    </div>

    <div
      flex="~ col items-start"
      p="l-20px r-20px"
      m-b-90px
      w-full
    >
      <div m-b-30px text-header-1>
        Функції career framework:
      </div>

      <div flex="~ wrap gap-30px">
        <template
          v-for="(item, index) in careerFunctions"
          :key="item.text"
        >
          <div
            b="2px rd-30px #222222"
            w="100%"
            p="t-36px b-16px x-40px"
            flex="~ col gap-20px"
            data-tilt
            data-tilt-max="5"
          >
            <div
              b="~ rd-65px #00F3BC"
              text="#00F3BC center"
              w="58px"
              height="26px"
            >
              {{ index + 1 }}
            </div>

            <div text-18px>
              {{ item.text }}
            </div>

            <div class="js-tilt-glare">
              <div class="js-tilt-glare-inner" />
            </div>
          </div>
        </template>
      </div>
    </div>

    <TheUsage m-b-100px />

    <TheNavigation p-x-20px m-b-180px />
  </section>

  <section v-else flex="~ col">
    <div position-relative w-full>
      <img src="/images/careerFramework_img1.webp" w-full />

      <div
        grid="~ rows-[1fr_2fr]"
        position-absolute
        h-full
        w-full
        top="0"
        :class="isDesktopSmall ? 'p-l-120px' : 'p-l-160px'"
      >
        <div text-white p="t-90px">
          <TheBreadcrumbs />
        </div>

        <div text-title w="289px">
          Career framework
        </div>
      </div>
    </div>

    <div
      flex="~ col items-start"
      w-full
      :class="isDesktopSmall
        ? 'h-auto m-b-180px p-x-120px'
        : 'p-l-160px p-r-360px h-495px'"
    >
      <div text-header-1>
        Що таке career framework?
      </div>

      <div p-t-65px text-content-1>
        Кар'єрний фреймворк – це джерело інформації, яке описує, як співробітник
        може розвиватись всередині компанії та досягати успіхів бізнесу. У
        фреймворку вказані патерни поведінки, що очікуються від конкретної ролі
        та грейду.
      </div>
    </div>

    <div
      flex="~ col items-start"
      m-b-90px
      w-full
      :class="isDesktopSmall ? 'p-x-120px' : 'p-x-160px'"
    >
      <div text-header-1>
        Функції career framework:
      </div>

      <div p="t-65px" flex="~ wrap gap-20">
        <template
          v-for="(item, index) in careerFunctions"
          :key="item.text"
        >
          <div
            v-if="item.image"
            b="2px rd-30px #222222"
            w-full
            h="auto"
            p="l-64px t-58px b-56px"
            flex="~ items-center"
            data-tilt
            data-tilt-max="5"
            :class="isDesktopSmall ? 'flex-col p-r-40px' : 'flex-row'"
          >
            <div flex="~ col gap-20px">
              <div
                b="~ rd-65px #00F3BC"
                text="#00F3BC center"
                w="58px"
                height="26px"
              >
                {{ index + 1 }}
              </div>

              <div text-24px :class="{ 'm-b-30px': isDesktopSmall }">
                {{ item.text }}
              </div>
            </div>

            <img
              :src="item.image"
              :alt="item.text"
              h="200px"
              :class="isDesktopSmall ? 'w-full' : 'w-475px m-l-95px m-r-65px'"
            />

            <div class="js-tilt-glare">
              <div class="js-tilt-glare-inner"></div>
            </div>
          </div>

          <div
            v-else
            b="2px rd-30px #222222"
            h="auto"
            p="l-64px t-58px b-56px r-40px"
            flex="~ col gap-20px"
            data-tilt
            data-tilt-max="5"
            :class="isDesktopSmall ? 'w-full' : 'min-w-450px max-w-[calc(50%-40px)]'"
          >
            <div
              b="~ rd-65px #00F3BC"
              text="#00F3BC center"
              w="58px"
              height="26px"
            >
              {{ index + 1 }}
            </div>

            <div text-24px>
              {{ item.text }}
            </div>

            <div class="js-tilt-glare">
              <div class="js-tilt-glare-inner"></div>
            </div>
          </div>
        </template>
      </div>
    </div>

    <div
      v-if="!isDesktopSmall"
      flex="~ col items-start"
      m="t-90px b-166px"
      w-full
      :class="isDesktopSmall ? 'p-x-120px' : 'p-x-160px'"
    >
      <div text-header-1>
        Organisation structure
      </div>

      <ClientOnly>
        <ProgressionTrack m="t-65px">

          <template #QA>
            <ProgressionCard
              name="QA"
              :items="[
                { name: 'IC4 Automation QA', path: '/tech-career/qa' },
                { name: 'IC3 Automation QA', path: '/tech-career/qa' },
                { name: 'IC3 General QA', path: '/tech-career/qa' },
                { name: 'IC2 General QA', path: '/tech-career/qa' },
              ]"
            />
          </template>

          <template #Backend>
            <ProgressionCard
              name="Backend Functional Team"
              :items="[
                { name: 'Software Architect', path: '/tech-career/backend' },
                { name: 'IC5 Backend Engineer', path: '/tech-career/backend' },
                { name: 'IC4 Backend Engineer', path: '/tech-career/backend' },
              ]"
            />
          </template>

          <template #Analytics>
            <ProgressionCard
              name="Analytics Team"
              :items="[
                { name: 'Lead Analytic', path: '/tech-career/lead' },
                { name: 'IC2 Analytic', path: '/tech-career/analytics' },
                { name: 'IC3 Analytic', path: '/tech-career/analytics' },
              ]"
            />
          </template>

          <template #Design>
            <ProgressionCard
              name="Infrastructure department"
              :items="[
                { name: 'Devops', path: '/tech-career/devops' },
                { name: 'SO', path: '/tech-career/so' },
                { name: 'DBA', path: '/tech-career/dba' },
              ]"
            />
          </template>

          <template #Team1>
            <ProgressionCard
              name="Team 1"
              :items="[
                { name: 'Lead | Backend Engineer', path: '/tech-career/lead' },
                { name: 'IC1 Frontend Engineer', path: '/tech-career/frontend' },
                { name: 'IC3 Backend Engineer', path: '/tech-career/backend' },
                { name: 'Designer', path: '/tech-career/design' },
                { name: 'Scrum master' },
              ]"
            />
          </template>

          <template #Team2>
            <ProgressionCard
              name="Team 2"
              :items="[
                { name: 'Lead | Frontend Engineer', path: '/tech-career/lead' },
                { name: 'IC1 Backend Engineer', path: '/tech-career/backend' },
                { name: 'IC3 Frontend Engineer', path: '/tech-career/frontend' },
                { name: 'Scrum Master' },
                { name: 'Designer', path: '/tech-career/design' },
              ]"
            />
          </template>

          <template #Lead>
            <ProgressionButton path="/tech-career/lead">
              Lead track
            </ProgressionButton>
          </template>

        </ProgressionTrack>
      </ClientOnly>
    </div>

    <TheNavigation
      m-b-180px
      :class="isDesktopSmall ? 'p-x-120px' : 'p-x-160px'"
    />

    <TheUsage m-b-185px />
  </section>
</template>

<style scoped lang="scss">
.header__img {
  content: '';
  background: no-repeat 100%/120% url('/images/header_main_mobile.webp');
}
</style>
