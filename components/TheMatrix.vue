<script setup lang="ts">
import ArrowDown from './../public/images/arrow_down.svg'
import ArrowUp from './../public/images/arrow_up.svg'
import ArrowLeft from './../public/images/arrow_left.svg'
import ArrowRight from './../public/images/arrow_right.svg'
import ArrowShortDown from './../public/images/arrow_down_short.svg'
import ArrowShortUp from './../public/images/arrow_up_short.svg'
import { isDesktopSmall, isMobile } from '~/composables/windowSizeService'
import type { Grades, Matrix } from '~/types/matrix'
import {
  GradesAnalytics,
  GradesDesign,
  GradesIC,
  GradesLead,
} from '~/types/matrix'
import jsonMatrix from '@/data/matrix.generated.json'

const props = defineProps<{
  role: string
}>()

const gradesOrderMap: Record<string, Grades[]> = {
  analytics: [
    GradesAnalytics.IC1,
    GradesAnalytics.IC2,
    GradesAnalytics.IC3,
    GradesAnalytics.IC4,
    GradesAnalytics.IC5,
  ],
  design: [
    GradesDesign.IC1,
    GradesDesign.IC2,
    GradesDesign.IC3,
    GradesDesign.IC4,
  ],
  lead: [GradesLead.L1, GradesLead.L2],
  default: [
    GradesIC.IC1,
    GradesIC.IC2,
    GradesIC.IC3,
    GradesIC.IC4,
    GradesIC.StaffEngineer,
    GradesIC.SeniorStaffEngineer,
  ],
}

const matrix = jsonMatrix as Matrix
const skills = computed<string[]>(() => Object.keys(matrix[props.role] ?? {}))

const gradesOrder = computed<Grades[]>(() => gradesOrderMap[props.role] ?? gradesOrderMap.default)

const currentGrade = ref<Grades>(gradesOrder.value[0])
const nextGrades = computed<Grades[]>(() =>
  gradesOrder.value
    .slice(gradesOrder.value.indexOf(currentGrade.value) + 1)
    // eslint-disable-next-line ts/no-use-before-define -- evaluated lazily, after currentSkill is initialised
    .filter(grade => hasContent(currentSkill.value, grade)),
)

const currentRoleContent = computed<Matrix[keyof Matrix]>(
  () => matrix[props.role],
)

function hasSubskills(skill: string): boolean {
  return Object.values(matrix[props.role][skill]).every(value => typeof value === 'object')
}

function hasContent(skill: string, grade: Grades = currentGrade.value): boolean {
  return hasSubskills(skill)
    ? Object.values(matrix[props.role][skill]).some(subskillContent =>
      Boolean((subskillContent as Record<string, string>)[grade]),
    )
    : Boolean(matrix[props.role][skill][grade])
}

const availableSkills = computed<string[]>(() =>
  skills.value.filter(skill => hasContent(skill)),
)
const currentSkill = ref(availableSkills.value[0])

function selectSkill(skill: string): string {
  if (isMobile) {
    toggleDropdown()
  }

  return currentSkill.value = skill
}
const isCurrentSkill = (skill: string): boolean => currentSkill.value === skill

function getSubskills(skill: string): string[] {
  const skillContent = matrix[props.role][skill] as Record<
    string,
    Record<string, string>
  >
  const allSubskills = Object.keys(skillContent)

  return allSubskills.filter(subskill => skillContent[subskill][currentGrade.value])
}

const canMoveDown = computed<boolean>(() => availableSkills.value.findIndex(skill => skill === currentSkill.value)
  < availableSkills.value.length - 1,
)

function moveDown() {
  const currentIndex = availableSkills.value.findIndex(skill => skill === currentSkill.value)
  currentSkill.value = availableSkills.value[currentIndex + 1]
}

const canMoveUp = computed<boolean>(() => availableSkills.value.findIndex(skill => skill === currentSkill.value) > 0)
function moveUp() {
  const currentIndex = availableSkills.value.findIndex(skill => skill === currentSkill.value)
  currentSkill.value = availableSkills.value[currentIndex - 1]
}

const canMoveRight = computed<boolean>(() => gradesOrder.value.findIndex(grade => grade === currentGrade.value)
  < gradesOrder.value.length - 1,
)
function moveRight() {
  const currentIndex = gradesOrder.value.findIndex(grade => grade === currentGrade.value)
  currentGrade.value = gradesOrder.value[currentIndex + 1]
}

const canMoveLeft = computed<boolean>(() => gradesOrder.value.findIndex(grade => grade === currentGrade.value) > 0)
function moveLeft() {
  const currentIndex = gradesOrder.value.findIndex(grade => grade === currentGrade.value)
  currentGrade.value = gradesOrder.value[currentIndex - 1]
}

const isDropdownOpened = ref(false)
function toggleDropdown(): void {
  isDropdownOpened.value = !isDropdownOpened.value
}

const touchPosition = ref<number | null>(null)

function handleTouchStart(event: TouchEvent): void {
  touchPosition.value = event.touches[0].clientX || null
}

function handleTouchMove(event: TouchEvent): void {
  const touchDown = touchPosition.value

  if (touchDown === null) {
    return
  }

  const currentTouch = event.touches[0].clientX
  const diff = touchDown - currentTouch

  if (diff > 5 && canMoveRight.value) {
    moveRight()
  }

  if (diff < -5 && canMoveLeft.value) {
    moveLeft()
  }

  touchPosition.value = null
}

watch(currentGrade, () => {
  if (availableSkills.value.includes(currentSkill.value)) {
    return
  }

  currentSkill.value = availableSkills.value[0]
})
</script>

<template>
  <div
    v-if="isMobile || isDesktopSmall"
    flex="~ col"
  >
    <div
      m-b-30px
      p-x-25px
      b="2px rd-20px #222222"
      :class="isDropdownOpened ? 'p-b-30px' : 'p-b-0'"
    >
      <div
        flex="~ items-center justify-between items-center"
        p-y-30px
        m-l-10px
        cursor-pointer
        :class="isDropdownOpened ? 'm-b-10px' : 'm-b-0'"
        @click="toggleDropdown"
      >
        <div
          font-600
          text="18px white"
          line-height-22px
        >
          {{ currentSkill }}
        </div>

        <ArrowShortUp
          v-if="isDropdownOpened"
          class="arrow_active"
        />

        <ArrowShortDown
          v-else
          class="arrow_active"
        />
      </div>

      <div
        v-if="isDropdownOpened"
        p-l-10px
        flex="~ col gap-10px"
        h-auto
        overflow-hidden
        class="skills"
      >
        <div
          v-for="skill in skills"
          :key="skill"
          class="skills__content"
        >
          <template v-if="hasContent(skill)">
            <div
              flex="~ justify-between items-center gap-10px"
              bg="#26262682"
              hover="text-#00F3BC"
              font-500
              b="1px rd-8px #393939"
              p="y-10px x-14px"
              cursor-pointer
              :text="isCurrentSkill(skill) ? '#00F3BC' : 'white'"
              @click="selectSkill(skill)"
            >
              {{ skill }}

              <div
                :bg="isCurrentSkill(skill) ? '#00F3BC' : '#393939'"
                b="2px rd-50% #393939"
                min-w-13px
                min-h-13px
              ></div>
            </div>

            <div
              v-if="hasSubskills(skill) && isCurrentSkill(skill)"
              bg="#26262682"
              b="1px rd-8px #393939"
              m-t-10px
              p-14px
              flex="~ col gap-20px"
              text-breadcrumbs
              font-400
            >
              <div
                v-for="subskill in getSubskills(skill)"
                :key="subskill"
              >
                {{ subskill }}
              </div>
            </div>
          </template>

          <div
            v-else
            flex="~ justify-between items-center gap-10px"
            bg="#26262682"
            text="#393939"
            font-500
            b="1px rd-8px #393939"
            p="y-10px x-14px"
          >
            {{ skill }}

            <div
              bg="#393939"
              b="2px rd-50% #393939"
              min-w-13px
              min-h-13px
            ></div>
          </div>
        </div>
      </div>
    </div>

    <div
      w-full
      @touchstart="handleTouchStart"
      @touchmove="handleTouchMove"
    >
      <MatrixCard
        :currentPosition="{
          grade: currentGrade,
          skill: currentSkill,
        }"
        :roleContent="currentRoleContent"
        :hasSubskills="hasSubskills(currentSkill)"
        type="active"
        m-b-30px
      />

      <div flex="~ justify-between">
        <div flex="~ gap-20px">
          <ArrowDown
            :class="canMoveDown ? 'arrow_active' : 'arrow_inactive'"
            :cursor="canMoveDown ? 'pointer' : 'auto'"
            @click="canMoveDown && moveDown()"
          />

          <ArrowUp
            :class="canMoveUp ? 'arrow_active' : 'arrow_inactive'"
            :cursor="canMoveUp ? 'pointer' : 'auto'"
            @click="canMoveUp && moveUp()"
          />
        </div>

        <div flex="~ gap-20px">
          <ArrowLeft
            :class="canMoveLeft ? 'arrow_active' : 'arrow_inactive'"
            :cursor="canMoveLeft ? 'pointer' : 'auto'"
            @click="canMoveLeft && moveLeft()"
          />

          <ArrowRight
            :class="canMoveRight ? 'arrow_active' : 'arrow_inactive'"
            :cursor="canMoveRight ? 'pointer' : 'auto'"
            @click="canMoveRight && moveRight()"
          />
        </div>
      </div>
    </div>
  </div>

  <div
    v-else
    flex
    position-relative
    @touchstart="handleTouchStart"
    @touchmove="handleTouchMove"
  >
    <div
      w-283px
      m-r-37px
      b="2px rd-20px #222222"
      p="y-28px x-25px"
    >
      <div
        font-700
        text="26px white"
        line-height-26px
        m="b-15px l-10px"
        w-fit
      >
        Skills
      </div>

      <div
        class="skills"
        p-l-10px
        flex="~ col gap-10px"
        h-536px
        overflow-y-scroll
      >
        <div
          v-for="skill in skills"
          :key="skill"
          class="skills__content"
        >
          <template v-if="hasContent(skill)">
            <div
              @click="selectSkill(skill)"
              flex="~ justify-between items-center gap-10px"
              bg="#26262682"
              :text="isCurrentSkill(skill) ? '#00F3BC' : 'white'"
              hover="text-#00F3BC"
              font-500
              b="1px rd-8px #393939"
              p="y-10px x-14px"
              cursor-pointer
            >
              {{ skill }}

              <div
                :bg="isCurrentSkill(skill) ? '#00F3BC' : '#393939'"
                b="2px rd-50% #393939"
                min-w-13px
                min-h-13px
              ></div>
            </div>

            <div
              v-if="hasSubskills(skill) && isCurrentSkill(skill)"
              bg="#26262682"
              b="1px rd-8px #393939"
              m-t-10px
              p-14px
              flex="~ col gap-20px"
              text-breadcrumbs
              font-400
            >
              <div
                v-for="subskill in getSubskills(skill)"
                :key="subskill"
              >
                {{ subskill }}
              </div>
            </div>
          </template>

          <div
            v-else
            flex="~ justify-between items-center gap-10px"
            bg="#26262682"
            text="#393939"
            font-500
            b="1px rd-8px #393939"
            p="y-10px x-14px"
          >
            {{ skill }}

            <div
              bg="#393939"
              b="2px rd-50% #393939"
              min-w-13px
              min-h-13px
            ></div>
          </div>
        </div>
      </div>
    </div>

    <div>
      <MatrixCard
        :currentPosition="{
          grade: currentGrade,
          skill: currentSkill,
        }"
        :roleContent="currentRoleContent"
        :hasSubskills="hasSubskills(currentSkill)"
        type="active"
        m-b-30px
      />

      <div flex="~ justify-between" p-r-30px>
        <div flex="~ gap-20px">
          <ArrowDown
            :class="canMoveDown ? 'arrow_active' : 'arrow_inactive'"
            :cursor="canMoveDown ? 'pointer' : 'auto'"
            @click="canMoveDown && moveDown()"
          />

          <ArrowUp
            :class="canMoveUp ? 'arrow_active' : 'arrow_inactive'"
            :cursor="canMoveUp ? 'pointer' : 'auto'"
            @click="canMoveUp && moveUp()"
          />
        </div>

        <div flex="~ gap-20px">
          <ArrowLeft
            :class="canMoveLeft ? 'arrow_active' : 'arrow_inactive'"
            :cursor="canMoveLeft ? 'pointer' : 'auto'"
            @click="canMoveLeft && moveLeft()"
          />

          <ArrowRight
            :cursor="canMoveRight ? 'pointer' : 'auto'"
            :class="canMoveRight ? 'arrow_active' : 'arrow_inactive'"
            @click="canMoveRight && moveRight()"
          />
        </div>
      </div>
    </div>

    <div position-absolute flex="~ gap-30px" left-920px>
      <MatrixCard
        v-for="nextGrade in nextGrades"
        :key="nextGrade"
        :currentPosition="{
          grade: nextGrade,
          skill: currentSkill,
        }"
        :roleContent="currentRoleContent"
        :hasSubskills="hasSubskills(currentSkill)"
        type="inactive"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.arrow {
  &_active:deep(path) {
    stroke: #ffffff;
  }

  &_inactive:deep(path) {
    stroke: #6d6d6d;
  }
}

.skills {
  direction: rtl;

  &__content {
    direction: ltr;
  }

  &::-webkit-scrollbar {
    width: 4px;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 31px;
    background-color: #6d6d6d;
  }

  &::-webkit-scrollbar-track {
    border-radius: 31px;
    background-color: #222;
  }
}
</style>
