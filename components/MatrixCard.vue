<script setup lang="ts">
import { isDesktopSmall, isMobile } from '~/composables/windowSizeService'
import type { Grades, Matrix } from '~/types/matrix'

const props = defineProps<{
  currentPosition: { grade: Grades, skill: string }
  roleContent: Matrix[keyof Matrix]
  hasSubskills: boolean
  type: 'active' | 'inactive'
}>()

const plainText = computed(
  () =>
    props.roleContent[props.currentPosition.skill][
      props.currentPosition.grade
    ] as string,
)
const skillContent = computed(
  () => props.roleContent[props.currentPosition.skill],
)
const isActive = computed(() => props.type === 'active')

function getSubskillText(subskill: string): ComputedRef<string> {
  return computed(
    () =>
      (
        props.roleContent[props.currentPosition.skill][subskill] as Record<
          string,
          string
        >
      )[props.currentPosition.grade],
  )
}

const subskills = computed<string[]>(() => {
  const allSubskills = Object.keys(skillContent.value)

  return allSubskills.filter(
    subskill =>
      (skillContent.value as Record<string, Record<string, string>>)[subskill][
        props.currentPosition.grade
      ],
  )
})
</script>

<template>
  <div
    p="x-28px y-28px"
    bg="#0D0D0D"
    :b="isActive ? '2px rd-20px #00f3bc61' : '2px rd-20px #393939'"
    :class="isMobile || isDesktopSmall
      ? 'w-full h-auto'
      : 'w-570px h-550px overflow-hidden'"
  >
    <div flex="~ justify-between items-center gap-80px" m-b-30px>
      <div
        p="x-29px y-4px"
        :b="isActive ? '1px rd-75px #00F3BC' : '1px rd-75px #393939'"
        :text="isActive ? '#00F3BC 14px' : '#393939 14px'"

        font-600 line-height-18px
      >
        {{ currentPosition.grade }}
      </div>

      <span
        style="letter-spacing: -0.6px"

        :text="isActive ? '#FFF right' : '#393939 right'"

        text-20px font-500 line-height-24px
      >
        {{ currentPosition.skill }}
      </span>
    </div>

    <div
      v-if="hasSubskills"
      flex="~ col gap-30px"
      :class="[
        { 'matrix-card-scrollable': isActive },
        { 'p-r-0 h-auto overflow-y-hidden': isMobile },
        { 'p-r-0 h-auto overflow-y-hidden': !isMobile && isDesktopSmall },
        { 'p-r-38px h-434px overflow-y-scroll': !isMobile && !isDesktopSmall && isActive },
      ]"
    >
      <div
        v-for="subskill in subskills"
        :key="subskill"
      >
        <h4

          :text="isActive ? '#FFF' : '#393939'"

          m-b-10px text-20px font-500 line-height-24px
        >
          {{ subskill }}
        </h4>

        <div
          :text="isActive ? '18px #C8C8C8' : '18px #393939'"
          line-height-22px
        >
          {{ getSubskillText(subskill).value }}
        </div>
      </div>
    </div>

    <div
      v-else
      :class="[
        { 'matrix-card-scrollable': isActive },
        { 'p-r-38px h-434px': !isMobile || !isDesktopSmall },
        { 'overflow-y-scroll': !isMobile && !isDesktopSmall && isActive },
      ]"
      :text="isActive ? '#C8C8C8 18px' : '#393939 18px'"
      line-height-22px
    >
      {{ plainText }}
    </div>
  </div>
</template>

<style scoped lang="scss">
.matrix-card-scrollable {
  &::-webkit-scrollbar {
    width: 4px;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 31px;
    background-color: #393939;
  }

  &::-webkit-scrollbar-track {
    border-radius: 31px;
    background-color: #181818;
  }
}
</style>
