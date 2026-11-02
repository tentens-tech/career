<script setup lang="ts">
import { isDesktopSmall, isMobile } from '~/composables/windowSizeService'

const links: { name: string, path: string }[] = [
  { name: 'Backend', path: '/tech-career/backend' },
  { name: 'Devops', path: '/tech-career/devops' },
  { name: 'Analytic', path: '/tech-career/analytics' },
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
    <div text-header-1 m-b-30px>
      Navigation
    </div>

    <div
      p-30px
      w-full
      overflow-hidden
      text-24px
      line-height-29px
      grid="~ rows-2"
      row-gap-20px
      text-white
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
      flex
      justify-center
      m-t-64px
    >
      <AnimatedButton
        title="Tech career framework"
        path="/tech-career"
      />
    </div>
  </div>

  <div v-else>
    <div text-header-1 m-b-60px>
      Navigation
    </div>

    <div
      v-if="isDesktopSmall"
      position-relative
      overflow-hidden
      text-24px
      line-height-29px
      grid="~ rows-3 row-gap-20px"
      text-white
      b="2px rd-10px #222"
      p="y-50px x-65px"
      w-full
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
      flex
      position-relative
      overflow-hidden
      text-24px
      line-height-29px
      text-white
      b="2px rd-10px #222"
      p="y-50px x-65px"
      w-full
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
    grid-template-columns: repeat(4, 160px);
  }

  &_small-desktop {
    row-gap: 20px;
    column-gap: 65px;
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>
