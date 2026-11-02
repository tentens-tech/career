<script setup lang="ts">
import ArrowDown from 'public/images/arrow_down_short.svg'
import ArrowUp from 'public/images/arrow_up_short.svg'
import { isMobile } from '~/composables/windowSizeService'

defineProps<{ isOpened: boolean }>()

const dropdownCompetitions = ref<HTMLElement | null>(null)
const dropdownGrowthCases = ref<HTMLElement | null>(null)

const isCompetitionsOpened = ref(false)
const isGrowthCasesOpened = ref(false)

const menuItems: { name: string, path: string }[] = [
  { name: 'Career framework', path: '/' },
  { name: 'Tech career framework', path: '/tech-career' },
  { name: 'Growth cases', path: '/growth-cases' },
]

const competitionsItems: { name: string, path: string }[] = [
  { name: 'Backend', path: '/tech-career/backend' },
  { name: 'Frontend', path: '/tech-career/frontend' },
  { name: 'QA', path: '/tech-career/qa' },
  { name: 'Devops', path: '/tech-career/devops' },
  { name: 'DBA', path: '/tech-career/dba' },
  { name: 'SO', path: '/tech-career/so' },
  { name: 'Analytic', path: '/tech-career/analytics' },
  { name: 'Design', path: '/tech-career/design' },
  { name: 'Lead track', path: '/tech-career/lead' },
]

const growthCasesItems: { name: string, path: string }[] = [
  { name: 'Rostyslav', path: '/growth-cases/rostyslav' },
  { name: 'Sofia', path: '/growth-cases/sofia' },
  { name: 'Bogdan', path: '/growth-cases/bogdan' },
  { name: 'Valentine', path: '/growth-cases/valentine' },
]

function toggleCompetitionsDropdown() {
  isGrowthCasesOpened.value = false
  isCompetitionsOpened.value = !isCompetitionsOpened.value
}

function toggleGrowthCasesDropdown() {
  isCompetitionsOpened.value = false
  isGrowthCasesOpened.value = !isGrowthCasesOpened.value
}

function onMenuItemClick(path: string) {
  window.location.pathname = path
  window.location.hash = ''
}

watch(isMobile, (newValue) => {
  if (!newValue) {
    window.location.hash = ''
  }
})
</script>

<template>
  <div
    flex="~ col items-center justify-start"
    fixed
    top-62px
    left-0
    right-0
    z-10
    h-full
    bg-black
    p-t-30px
    class="menu"
    :class="{ menu_opened: isOpened }"
  >
    <template
      v-for="item in menuItems"
      :key="item.path"
    >
      <button
        p-b-20px
        text="18px #fff"
        class="menu__item"
        hover-text="#00F3BC"
        @click="onMenuItemClick(item.path)"
      >
        {{ item.name }}
      </button>
    </template>

    <div
      ref="dropdownCompetitions"
      position-relative
      p-b-20px
      cursor-pointer
      @click="toggleCompetitionsDropdown"
    >
      <div
        flex="~ items-center justify-center"
        text="18px #fff"
        hover-text="#00F3BC"
      >
        <span m-r-14px>
          Competitions
        </span>

        <ArrowUp v-if="isCompetitionsOpened" class="arrow" />

        <ArrowDown v-else class="arrow" />
      </div>

      <div
        v-show="isCompetitionsOpened"
        flex="~ col justify-start"
        m-t-10px
        w-150px
        overflow-hidden
        line-height-24px
        text="18px #fff"
      >
        <button
          v-for="item in competitionsItems"
          :key="item.path"
          p="x-14px y-10px"
          text="18px #C8C8C8"
          hover-text="#00F3BC"
          cursor-pointer
          @click="onMenuItemClick(item.path)"
        >
          <p position-relative>
            {{ item.name }}
          </p>
        </button>
      </div>
    </div>

    <div
      ref="dropdownGrowthCases"
      position-relative
      p-b-20px
      cursor-pointer
      @click="toggleGrowthCasesDropdown"
    >
      <div
        flex="~ items-center justify-center"
        text="18px #fff"
        hover-text="#00F3BC"
      >
        <span m-r-14px>
          Success stories
        </span>

        <ArrowUp v-if="isGrowthCasesOpened" class="arrow" />

        <ArrowDown v-else class="arrow" />
      </div>

      <div
        v-show="isGrowthCasesOpened"
        flex="~ col justify-start"
        m-t-10px
        w-150px
        overflow-hidden
        line-height-24px
        text="18px #fff"
      >
        <button
          v-for="item in growthCasesItems"
          :key="item.path"
          p="x-14px y-10px"
          text="18px #C8C8C8"
          hover-text="#00F3BC"
          cursor-pointer
          @click="onMenuItemClick(item.path)"
        >
          <p position-relative>
            {{ item.name }}
          </p>
        </button>
      </div>
    </div>

    <AnimatedButton
      m-t-10px
      title="Приєднатися до команди"
      path="https://jobs.ashbyhq.com/TENTENS-Tech"
    />
  </div>
</template>

<style lang="scss" scoped>
.menu {
  transform: translateX(+100%);
  transition: transform 0.5s;

  &_opened {
    transform: translateX(0);
    overflow: hidden;
  }
}

.arrow:deep(path) {
  stroke: #ffffff;

  &:hover {
    color: #00F3BC;
  }
}
</style>
