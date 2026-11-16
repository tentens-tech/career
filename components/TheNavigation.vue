<script setup lang="ts">
import { isDesktopSmall, isMobile } from '~/composables/windowSizeService'

const links: { name: string, path: string }[] = [
  { name: 'Backend', path: '/tech-career/backend' },
  { name: 'Devops', path: '/tech-career/devops' },
  { name: 'Analytic', path: '/tech-career/analytics' },
  { name: 'Data Engineer', path: '/tech-career/data-engineer' },
  { name: 'Frontend', path: '/tech-career/frontend' },
  { name: 'DBA', path: '/tech-career/dba' },
  { name: 'Design', path: '/tech-career/design' },
  { name: 'QA', path: '/tech-career/qa' },
  { name: 'SO', path: '/tech-career/so' },
  { name: 'Lead track', path: '/tech-career/lead' },
  { name: 'Growth cases', path: '/growth-cases' },
]

const linksBlocks: { name: string, path: string }[][] = [
  [
    { name: 'Backend', path: '/tech-career/backend' },
    { name: 'Devops', path: '/tech-career/devops' },
    { name: 'Analytic', path: '/tech-career/analytics' },
    { name: 'Data Engineer', path: '/tech-career/data-engineer' },
  ],
  [
    { name: 'Frontend', path: '/tech-career/frontend' },
    { name: 'DBA', path: '/tech-career/dba' },
    { name: 'Design', path: '/tech-career/design' },
  ],
  [
    { name: 'QA', path: '/tech-career/qa' },
    { name: 'SO', path: '/tech-career/so' },
    { name: 'Lead track', path: '/tech-career/lead' },
  ],
  [
    { name: 'Growth cases', path: '/growth-cases' },
  ],
]
</script>

<template>
  <div v-if="isMobile">
    <div m-b-30px text-header-1>
      Navigation
    </div>

    <div

      grid="~ rows-2"

      row-gap-20px w-full overflow-hidden p-30px text-24px line-height-29px text-white
      b="2px rd-10px #222"
      class="links-grid_mobile"
    >
      <NuxtLink
        v-for="link in links"
        :key="link.path"
        :to="link.path"
        position-relative
        hover-text="#00F3BC"
      >
        {{ link.name }}
      </NuxtLink>
    </div>

    <div

      m-t-64px flex justify-center
    >
      <AnimatedButton
        title="Tech career framework"
        path="/tech-career"
      />
    </div>
  </div>

  <div v-else>
    <div m-b-60px text-header-1>
      Navigation
    </div>

    <div
      v-if="isDesktopSmall"

      grid="~ rows-3 row-gap-20px"

      b="2px rd-10px #222"
      p="y-50px x-65px"
      position-relative w-full overflow-hidden text-24px line-height-29px text-white
      class="links-grid_small-desktop"
    >
      <NuxtLink
        v-for="link in links"
        :key="link.path"
        :to="link.path"
        position-relative
        hover-text="#00F3BC"
      >
        {{ link.name }}
      </NuxtLink>
    </div>

    <div
      v-else

      b="2px rd-10px #222"
      p="y-50px x-65px"
      position-relative w-full flex overflow-hidden text-24px line-height-29px text-white
      class="links-grid_desktop"
    >
      <div
        v-for="(block, index) in linksBlocks"
        :key="`${block}-${index}`"
        flex="~ col gap-20px"
      >
        <NuxtLink
          v-for="link in block"
          :key="link.path"
          :to="link.path"
          position-relative
          hover-text="#00F3BC"
        >
          {{ link.name }}
        </NuxtLink>
      </div>
    </div>

    <AnimatedButton
      title="Tech career framework"
      path="/tech-career"
      m-t-64px
    />
  </div>
</template>

<style scoped lang="scss">
.links-grid {
  &_mobile {
    row-gap: 20px;
    column-gap: 44px;
    grid-template-columns: repeat(2, 1fr);
  }

  &_desktop {
    width: 100%;
    row-gap: 20px;
    column-gap: 65px;
    grid-template-columns: repeat(4, minmax(160px, max-content));
  }

  &_small-desktop {
    row-gap: 20px;
    column-gap: 65px;
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>
