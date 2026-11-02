<script setup lang="ts">
const route = useRoute()
const breadcrumbs = route.meta.layoutData.breadcrumbs

const isMainPage = route.path === '/'
const isTechCareerPage = route.path === '/tech-career'
const isGrowthCasePage = route.path === '/growth-cases'

const isCompetitionsVisible = isMainPage || isTechCareerPage
const isGrowthCasesVisible = isMainPage || isGrowthCasePage

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

const getBreadcrumbActiveStatus = (path: string): boolean => route.path === path
</script>

<template>
  <div flex="~ items-center justify-start" m-b-40px>
    <template v-for="item in breadcrumbs" :key="item.path">
      <NuxtLink
        v-if="item.name === 'Career framework'"
        to="/"
        text-breadcrumbs
        class="breadcrumb"
      >
        <span
          p-r="2"
          class="breadcrumb"
          :class="{ breadcrumb__active: getBreadcrumbActiveStatus('/') }"
        >/</span>

        <span
          class="breadcrumb"
          :class="{ breadcrumb__active: getBreadcrumbActiveStatus('/') }"
        >
          Career framework
        </span>

        <NuxtLink
          to="/tech-career"
          class="breadcrumb"
          :class="{ breadcrumb__active: getBreadcrumbActiveStatus('/tech-career') }"
        >
          <span p-x="2">/</span>

          <span>Tech career framework</span>
        </NuxtLink>
      </NuxtLink>

      <NuxtLink
        v-else
        :to="item.path"
        text-breadcrumbs
        class="breadcrumb"
        :class="{ breadcrumb__active: getBreadcrumbActiveStatus(item.path) }"
      >
        <template v-if="item.path !== '/tech-career'">
          <span p-x="2">/</span>

          <span>{{ item.name }}</span>
        </template>
      </NuxtLink>
    </template>

    <div v-if="isCompetitionsVisible" flex="~ align-center">
      <span p-x="2">/</span>

      <Dropdown
        title="Competitions"
        :items="competitionsItems"
      />
    </div>

    <div v-if="isGrowthCasesVisible" flex="~ align-center">
      <span p-x="2">/</span>

      <Dropdown
        title="Success stories"
        :items="growthCasesItems"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.breadcrumb__active {
  color: #00F3BC;
}
</style>
