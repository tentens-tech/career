<script setup lang="ts">
import IconComponent from './../public/images/cart_example2.svg?skipsvgo'
import type { ProgressionTrack } from '@/types'

const teamsConfig: ProgressionTrack.TeamConfig[] = [{
  name: 'QA',
  offset: {
    bottom: 10,
    left: 2,
  },
}, {
  name: 'Backend',
  offset: {
    top: 5,
    left: 0,
  },
}, {
  name: 'Design',
  offset: {
    right: 10,
    bottom: -39,
  },
}, {
  name: 'Team2',
  offset: {
    bottom: 14,
    right: -115,
  },
}, {
  name: 'Team1',
  offset: {
    top: -27,
    right: -2,
  },
}, {
  name: 'Analytics',
  offset: {
    bottom: 3,
    right: 0,
  },
}, {
  name: 'Lead',
  offset: {
    top: 8,
    right: -5,
  },
}]

const svgCart = ref<{ $el: SVGElement }>()
const teams: Ref<ProgressionTrack.Team[]> = ref(teamsConfig.map(config => ({ name: config.name })))

onMounted(() => {
  teams.value.forEach((team, i) => {
    const point = svgCart.value?.$el.querySelector<SVGElement>(`#Point-${team.name}`)

    if (!point || !team.element)
      return

    Object.assign(team, useOffset(point, team.element, teamsConfig[i]))
  })
})
</script>

<template>
  <div h-full w-full>
    <IconComponent
      ref="svgCart"
      h-full
      w-full
    />

    <div
      v-for="(team, i) in teams"
      :key="team.name"
      :ref="el => teams[i].element = (el as HTMLDivElement | null)"
      :style="{
        top: String(team.top ?? ''),
        left: String(team.left ?? ''),
      }"
      absolute
    >
      <slot :name="team.name" />
    </div>
  </div>
</template>
