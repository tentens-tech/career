<script setup lang="ts">
import { isDesktopSmall, isMobile } from '~/composables/windowSizeService'
import { LEAD_ROLE } from '~/types/matrix'

definePageMeta({
  layoutData: {
    mainImage: '/images/techRole_header.webp',
    breadcrumbs: [
      {
        name: 'Career framework',
        path: '/',
      },
      {
        name: 'Tech career framework',
        path: '/tech-career',
      },
    ],
  },
  validate: (route) => {
    const { role } = route.params as { role?: string }
    return typeof role === 'string' && role.length > 0
  },
  middleware: (to) => {
    const {
      params: { role },
      meta: { layoutData },
    } = to

    const roleBreadcrumbs: Record<string, string> = {
      backend: 'Backend',
      lead: 'Lead',
      frontend: 'Frontend',
      so: 'SO',
      dba: 'DBA',
      devops: 'Devops',
      qa: 'QA',
      analytics: 'Analytic',
      design: 'Design',
    }
    const roleBreadcrumb = roleBreadcrumbs[role as string]

    const newBreadcrumbs = layoutData.breadcrumbs.filter(
      routeBreadcrumb =>
        !Object.values(roleBreadcrumbs).includes(routeBreadcrumb.name),
    )
    newBreadcrumbs.push({
      name: roleBreadcrumb,
      path: `/tech-career/${role}`,
    })
    layoutData.breadcrumbs = newBreadcrumbs
  },
})

const rolesMap: Record<string, { title: string, description: string }> = {
  backend: {
    title: 'Backend Engineer',
    description:
      'Engineer в TENTENS Tech - це партнер для бізнесу, який використовуючи свій набір інструментів (мов програмування, методологій розробки та тестування, знань баз даних та інфраструктури) допомагає бізнесу досягати поставлених цілей.',
  },
  lead: {
    title: 'Lead Track',
    description:
      'Координує команду розробників та їхню роботу задля досягнення цілей проєкту',
  },
  frontend: {
    title: 'Frontend Engineer',
    description:
      'Engineer в TENTENS Tech - це партнер для бізнесу, який використовуючи свій набір інструментів (мов програмування, методологій розробки та тестування, знань баз даних та інфраструктури) допомагає бізнесу досягати поставлених цілей.',
  },
  so: {
    title: 'Service Operations Engineer',
    description:
      'Engineer в TENTENS Tech - це партнер для бізнесу, який використовуючи свій набір інструментів (мов програмування, методологій розробки та тестування, знань баз даних та інфраструктури) допомагає бізнесу досягати поставлених цілей.',
  },
  dba: {
    title: 'Database Administrator (DBA)',
    description:
      'Engineer в TENTENS Tech - це партнер для бізнесу, який використовуючи свій набір інструментів (мов програмування, методологій розробки та тестування, знань баз даних та інфраструктури) допомагає бізнесу досягати поставлених цілей.',
  },
  devops: {
    title: 'DevOps',
    description:
      'Engineer в TENTENS Tech - це партнер для бізнесу, який використовуючи свій набір інструментів (мов програмування, методологій розробки та тестування, знань баз даних та інфраструктури) допомагає бізнесу досягати поставлених цілей.',
  },
  qa: {
    title: 'Quality Assurance',
    description:
      'Engineer в TENTENS Tech - це партнер для бізнесу, який використовуючи свій набір інструментів (мов програмування, методологій розробки та тестування, знань баз даних та інфраструктури) допомагає бізнесу досягати поставлених цілей.',
  },
  analytics: {
    title: 'Analytic',
    description:
      'Аналітик відповідає за збір, обробку та аналіз даних, щоб допомогти бізнесу приймати обґрунтовані рішення.',
  },
  design: {
    title: 'Designer',
    description:
      'Створює естетичний та функціональний дизайн згідно потреб бізнесу.',
  },
}

const route = useRoute<'tech-career-role'>()
const roleData = rolesMap[route.params.role]

const isHeaderBtnVisible = roleData.title !== 'Analytic' && roleData.title !== 'Designer'
</script>

<template>
  <section v-if="isMobile" flex="~ col">
    <div class="header__img_mobile">
      <div flex="~ col gap-30px" p-x-20px>
        <div
          m-b-20px
          p-t-80px
          text="font-700 26px"
          line-height-31px
        >
          {{ roleData.title }}
        </div>

        <div text="font-400 16px #C8C8C8" line-height-22px>
          {{ roleData.description }}
        </div>

        <AnimatedButton
          v-if="isHeaderBtnVisible"
          title="Tech career framework"
          path="/tech-career"
          m-x-auto
          m-y-0
        />
      </div>
    </div>

    <div p="x-20px t-60px b-100px">
      <template v-if="route.params.role !== LEAD_ROLE">
        <div
          m-b-30px
          text-header-1
          text-white
          case-upper
        >
          Individual contributor track
        </div>

        <TheMatrix
          m-b-100px
          :role="route.params.role"
        />
      </template>

      <div
        m-b-30px
        text-header-1
        text-white
        case-upper
      >
        Leadership track
      </div>

      <TheMatrix
        m-b-100px
        :role="LEAD_ROLE"
      />

      <TheNavigation />
    </div>
  </section>

  <section v-else>
    <div
      class="header__img_desktop"
      :class="{ 'min-h-800px': !isDesktopSmall }"
    >
      <div :class="isDesktopSmall ? 'm-x-120px' : 'm-l-159px'">
        <div
          p-t-90px
          text-white
          :class="{ 'm-b-105px': !isDesktopSmall }"
        >
          <TheBreadcrumbs />
        </div>

        <div text-title m-b-20px>
          {{ roleData.title }}
        </div>

        <div text="24px #C8C8C8" max-w-915px>
          {{ roleData.description }}
        </div>

        <AnimatedButton
          v-if="isHeaderBtnVisible"
          title="Tech career framework"
          path="/tech-career"
          m-t-40px
        />
      </div>
    </div>

    <div
      p="t-90px b-180px"
      :class="isDesktopSmall ? 'p-x-120px' : 'p-x-166px'"
    >
      <template v-if="route.params.role !== LEAD_ROLE">
        <div
          text-header-1
          text-white
          m-b-60px
          case-upper
        >
          Individual contributor track
        </div>

        <TheMatrix :role="route.params.role" m-b-180px />
      </template>

      <div
        text-header-1
        text-white
        m-b-50px
        case-upper
      >
        Leadership track
      </div>

      <TheMatrix :role="LEAD_ROLE" m-b-157px />

      <TheNavigation />
    </div>
  </section>
</template>

<style scoped lang="scss">
.header__img {
  &_mobile {
    content: '';
    background: no-repeat 30%/120% url('/images/techRole_header.webp');
  }

  &_desktop {
    content: '';
    background: no-repeat 100%/100% url('/images/techRole_header.webp');
  }
}
</style>
