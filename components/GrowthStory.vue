<script setup lang="ts">
import ArrowShortDown from 'public/images/arrow_down_short.svg'
import ArrowShortUp from 'public/images/arrow_up_short.svg'
import Quotes from './../public/images/quotes.svg'
import type { GrowthCase } from '~/types/growth'
import { isDesktopSmall, isMobile } from '~/composables/windowSizeService'

const props = defineProps<{ case: GrowthCase }>()

const isRostyslav = props.case.class === 'rostyslav'
const isSofia = props.case.class === 'sofia'
const isBogdan = props.case.class === 'bogdan'
const isValentine = props.case.class === 'valentine'

const stories = computed<string[]>(() => props.case.story.map(x => x.title))

const currentStory = ref(stories.value[0])

const isStoryFirst = computed<boolean>(() => currentStory.value === stories.value[0])
const isStorySecond = computed<boolean>(() => currentStory.value === stories.value[1])
const isStoryThird = computed<boolean>(() => currentStory.value === stories.value[2])
const isStoryFourth = computed<boolean>(() => currentStory.value === stories.value[3])

function selectStory(story: string): string {
  if (isMobile) {
    toggleDropdown()
  }

  return currentStory.value = story
}

const isCurrentStory = (story: string): boolean => currentStory.value === story

function hasContent(story: string): boolean {
  return Boolean(props.case.story.find(x => x.title === story)?.text)
}

const currentStoryContent = computed<string[]>(() => {
  const story = props.case.story.find(x => x.title === currentStory.value)

  return story ? story.text : []
})

const isDropdownOpened = ref(false)

function toggleDropdown(): void {
  isDropdownOpened.value = !isDropdownOpened.value
}
</script>

<template>
  <div
    v-if="isMobile || isDesktopSmall"
    p-x-20px
    :class="{ 'p-t-76px': isMobile }"
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
          {{ currentStory }}
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
          v-for="story in stories"
          :key="story"
          class="skills__content"
        >
          <template v-if="hasContent(story)">
            <div
              flex="~ justify-between items-center gap-10px"
              bg="#26262682"
              hover="text-#00F3BC"
              font-500
              b="1px rd-8px #393939"
              p="y-10px x-14px"
              cursor-pointer
              :text="isCurrentStory(story) ? '#00F3BC' : 'white'"
              @click="selectStory(story)"
            >
              {{ story }}

              <div
                :bg="isCurrentStory(story) ? '#00F3BC' : '#393939'"
                b="2px rd-50% #393939"
                min-w-13px
                min-h-13px
              />
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
            {{ story }}

            <div
              bg="#393939"
              b="2px rd-50% #393939"
              min-w-13px
              min-h-13px
            />
          </div>
        </div>
      </div>
    </div>

    <template v-if="isRostyslav">
      <template v-if="isStoryFirst || isStoryThird">
        <div
          flex="~ col items-start"
          p-30px
          bg="#0D0D0D"
          b="2px rd-20px #00f3bc61"
          text="18px #C8C8C8 start"
          line-height-22px
          font-400
        >
          <p
            v-for="(item, index) in currentStoryContent"
            :key="item"
            :mb="(index === currentStoryContent?.length - 1) ? '0' : '20px'"
          >
            {{ item }}
          </p>
        </div>
      </template>

      <template v-if="isStorySecond">
        <div
          flex="~ col items-start"
          p-30px
          bg="#0D0D0D"
          b="2px rd-20px #00f3bc61"
          text="18px #C8C8C8 start"
          line-height-22px
          font-400
        >
          <p m-b-20px>
            {{ currentStoryContent[0] }}
          </p>

          <p m-b-20px>
            {{ currentStoryContent[1] }}
          </p>

          <div
            flex="~ items-start"
            gap-16px
            m-b-20px
            p-32px
            bg="#1A1A1A"
            b="1px solid linear-gradient(to right, #C8C8C8 20%, #C8C8C8 100%) rd-20px"
          >
            <Quotes min-w-20px class="icon" />

            <p>
              {{ currentStoryContent[2] }}
            </p>
          </div>

          <p m-b-20px>
            {{ currentStoryContent[3] }}
          </p>

          <p text="#fff" font-500 m-b-14px>
            {{ currentStoryContent[4] }}
          </p>

          <div flex>
            <div
              min-w-4px
              m-r-24px
              class="bar"
            />

            <div
              flex="~ col"
              m-t-30px
              text-24px
              line-height-29px
            >
              <div
                relative
                flex
                w-full
                m-b-26px
              >
                <span
                  absolute
                  top-5px
                  left="-33px"
                  w-14px
                  h-14px
                  bg="#00F3BC"
                />

                <p
                  text="18px #C8C8C8 start"
                  line-height-22px
                  font-400
                >
                  {{ currentStoryContent[5] }}
                </p>
              </div>

              <div
                relative
                flex
                w-full
                m-b-26px
              >
                <span
                  absolute
                  top-5px
                  left="-33px"
                  w-14px
                  h-14px
                  bg="#00F3BC"
                />

                <p
                  text="18px #C8C8C8 start"
                  line-height-22px
                  font-400
                >
                  {{ currentStoryContent[6] }}
                </p>
              </div>

              <div
                relative
                flex
                w-full
                m-b-26px
              >
                <span
                  absolute
                  top-5px
                  left="-33px"
                  w-14px
                  h-14px
                  bg="#00F3BC"
                />

                <p
                  text="18px #C8C8C8 start"
                  line-height-22px
                  font-400
                >
                  {{ currentStoryContent[7] }}
                </p>
              </div>

              <div
                relative
                flex
                w-full
                m-b-26px
              >
                <span
                  absolute
                  top-5px
                  left="-33px"
                  w-14px
                  h-14px
                  bg="#00F3BC"
                />

                <p
                  text="18px #C8C8C8 start"
                  line-height-22px
                  font-400
                >
                  {{ currentStoryContent[8] }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </template>

      <template v-if="isStoryFourth">
        <div
          flex="~ col items-start"
          p-30px
          bg="#0D0D0D"
          b="2px rd-20px #00f3bc61"
          text="18px #C8C8C8 start"
          line-height-22px
          font-400
        >
          <div flex="~ col justify-start items-start gap-20px" m-b-30px>
            <div
              p="x-29px y-4px"
              b="1px rd-75px #00F3BC"
              text="#00F3BC 14px"
              line-height-18px
              font-600
            >
              1
            </div>

            <div>
              <p text="#fff" font-500>
                {{ currentStoryContent[0] }}
              </p>

              <p>
                {{ currentStoryContent[1] }}
              </p>
            </div>
          </div>

          <div flex="~ col justify-start items-start gap-20px" m-b-30px>
            <div
              p="x-29px y-4px"
              b="1px rd-75px #00F3BC"
              text="#00F3BC 14px"
              line-height-18px
              font-600
            >
              2
            </div>

            <div>
              <p text="#fff" font-500>
                {{ currentStoryContent[2] }}
              </p>

              <p m-b-30px>
                {{ currentStoryContent[3] }}
              </p>

              <div
                flex="~ items-start"
                gap-16px
                p-32px
                bg="#1A1A1A"
                b="1px solid linear-gradient(to right, #C8C8C8 20%, #C8C8C8 100%) rd-20px"
              >
                <Quotes min-w-20px class="icon" />

                <p>
                  {{ currentStoryContent[4] }}
                </p>
              </div>
            </div>
          </div>

          <div flex="~ col justify-start items-start gap-20px" m-b-30px>
            <div
              p="x-29px y-4px"
              b="1px rd-75px #00F3BC"
              text="#00F3BC 14px"
              line-height-18px
              font-600
            >
              3
            </div>

            <div>
              <p text="#fff" font-500>
                {{ currentStoryContent[5] }}
              </p>

              <p>
                {{ currentStoryContent[6] }}
              </p>
            </div>
          </div>

          <div flex="~ col justify-start items-start gap-20px">
            <div
              p="x-29px y-4px"
              b="1px rd-75px #00F3BC"
              text="#00F3BC 14px"
              line-height-18px
              font-600
            >
              4
            </div>

            <div>
              <p text="#fff" font-500>
                {{ currentStoryContent[7] }}
              </p>

              <p m-b-30px>
                {{ currentStoryContent[8] }}
              </p>

              <div
                flex="~ items-start"
                gap-16px
                p-32px
                bg="#1A1A1A"
                b="1px solid linear-gradient(to right, #C8C8C8 20%, #C8C8C8 100%) rd-20px"
              >
                <Quotes min-w-20px class="icon" />

                <p>
                  {{ currentStoryContent[9] }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </template>
    </template>

    <template v-if="isBogdan">
      <template v-if="isStoryFirst">
        <div
          flex="~ col items-start"
          p-30px
          bg="#0D0D0D"
          b="2px rd-20px #00f3bc61"
          text="18px #C8C8C8 start"
          line-height-22px
          font-400
        >
          <p
            v-for="(item, index) in currentStoryContent"
            :key="item"
            :mb="(index === currentStoryContent?.length - 1) ? '0' : '20px'"
          >
            {{ item }}
          </p>
        </div>
      </template>

      <template v-if="isStorySecond">
        <div
          flex="~ col items-start"
          p-30px
          bg="#0D0D0D"
          b="2px rd-20px #00f3bc61"
          text="18px #C8C8C8 start"
          line-height-22px
          font-400
        >
          <p m-b-20px>
            {{ currentStoryContent[0] }}
          </p>

          <div
            flex="~ items-start"
            gap-16px
            w-full
            m-b-20px
            p-32px
            bg="#1A1A1A"
            b="1px solid linear-gradient(to right, #C8C8C8 20%, #C8C8C8 100%) rd-20px"
          >
            <Quotes min-w-20px class="icon" />

            <p>
              {{ currentStoryContent[1] }}
            </p>
          </div>

          <p m-b-20px>
            {{ currentStoryContent[2] }}
          </p>

          <p>
            {{ currentStoryContent[3] }}
          </p>
        </div>
      </template>

      <template v-if="isStoryThird">
        <div
          flex="~ col items-start"
          p-30px
          bg="#0D0D0D"
          b="2px rd-20px #00f3bc61"
          text="18px #C8C8C8 start"
          line-height-22px
          font-400
        >
          <p m-b-20px>
            {{ currentStoryContent[0] }}
          </p>

          <p m-b-14px>
            {{ currentStoryContent[1] }}
          </p>

          <div flex m-b-40px>
            <div
              min-w-4px
              m-r-24px
              class="bar"
            />

            <div
              flex="~ col"
              m-t-30px
              text-24px
              line-height-29px
            >
              <div
                relative
                flex
                w-full
                m-b-26px
              >
                <span
                  absolute
                  top-5px
                  left="-33px"
                  w-14px
                  h-14px
                  bg="#00F3BC"
                />

                <p
                  text="18px #C8C8C8 start"
                  line-height-22px
                  font-400
                >
                  {{ currentStoryContent[2] }}
                </p>
              </div>

              <div
                relative
                flex
                w-full
                m-b-26px
              >
                <span
                  absolute
                  top-5px
                  left="-33px"
                  w-14px
                  h-14px
                  bg="#00F3BC"
                />

                <p
                  text="18px #C8C8C8 start"
                  line-height-22px
                  font-400
                >
                  {{ currentStoryContent[3] }}
                </p>
              </div>

              <div
                relative
                flex
                w-full
                m-b-26px
              >
                <span
                  absolute
                  top-5px
                  left="-33px"
                  w-14px
                  h-14px
                  bg="#00F3BC"
                />

                <p
                  text="18px #C8C8C8 start"
                  line-height-22px
                  font-400
                >
                  {{ currentStoryContent[4] }}
                </p>
              </div>
            </div>
          </div>

          <div
            flex="~ items-start"
            gap-16px
            p-32px
            bg="#1A1A1A"
            b="1px solid linear-gradient(to right, #C8C8C8 20%, #C8C8C8 100%) rd-20px"
          >
            <Quotes min-w-20px class="icon" />

            <p>
              {{ currentStoryContent[5] }}
            </p>
          </div>
        </div>
      </template>

      <template v-if="isStoryFourth">
        <div
          flex="~ col items-start"
          p-30px
          bg="#0D0D0D"
          b="2px rd-20px #00f3bc61"
          text="18px #C8C8C8 start"
          line-height-22px
          font-400
        >
          <div flex="~ col justify-start items-start gap-20px" m-b-30px>
            <div
              p="x-29px y-4px"
              b="1px rd-75px #00F3BC"
              text="#00F3BC 14px"
              line-height-18px
              font-600
            >
              1
            </div>

            <div>
              <p>
                {{ currentStoryContent[0] }}
              </p>
            </div>
          </div>

          <div flex="~ col justify-start items-start gap-20px" m-b-30px>
            <div
              p="x-29px y-4px"
              b="1px rd-75px #00F3BC"
              text="#00F3BC 14px"
              line-height-18px
              font-600
            >
              2
            </div>

            <div flex="~ row">
              <p>
                {{ currentStoryContent[1] }}
              </p>
            </div>
          </div>

          <div flex="~ col justify-start items-start gap-20px" m-b-30px>
            <div
              p="x-29px y-4px"
              b="1px rd-75px #00F3BC"
              text="#00F3BC 14px"
              line-height-18px
              font-600
            >
              3
            </div>

            <div flex="~ row">
              <p>
                {{ currentStoryContent[2] }}
              </p>
            </div>
          </div>

          <div flex="~ col justify-start items-start gap-20px">
            <div
              p="x-29px y-4px"
              b="1px rd-75px #00F3BC"
              text="#00F3BC 14px"
              line-height-18px
              font-600
            >
              4
            </div>

            <div>
              <div flex="~ row">
                <p m-b-30px>
                  {{ currentStoryContent[3] }}
                </p>
              </div>

              <div
                flex="~ items-start"
                gap-16px
                p-32px
                bg="#1A1A1A"
                b="1px solid linear-gradient(to right, #C8C8C8 20%, #C8C8C8 100%) rd-20px"
              >
                <Quotes min-w-20px class="icon" />

                <p>
                  {{ currentStoryContent[4] }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </template>
    </template>

    <template v-if="isSofia">
      <template v-if="isStoryFirst">
        <div
          flex="~ col items-start"
          p-30px
          bg="#0D0D0D"
          b="2px rd-20px #00f3bc61"
          text="18px #C8C8C8 start"
          line-height-22px
          font-400
        >
          <p
            v-for="(item, index) in currentStoryContent"
            :key="item"
            :mb="(index === currentStoryContent?.length - 1) ? '0' : '20px'"
          >
            {{ item }}
          </p>
        </div>
      </template>

      <template v-if="isStorySecond">
        <div
          flex="~ col items-start"
          p-30px
          bg="#0D0D0D"
          b="2px rd-20px #00f3bc61"
          text="18px #C8C8C8 start"
          line-height-22px
          font-400
        >
          <p m-b-20px>
            {{ currentStoryContent[0] }}
          </p>

          <p m-b-20px>
            {{ currentStoryContent[1] }}
          </p>

          <div
            flex="~ items-start"
            gap-16px
            w-full
            m-b-20px
            p-32px
            bg="#1A1A1A"
            b="1px solid linear-gradient(to right, #C8C8C8 20%, #C8C8C8 100%) rd-20px"
          >
            <Quotes min-w-20px class="icon" />

            <p>
              {{ currentStoryContent[2] }}
            </p>
          </div>

          <p m-b-20px>
            {{ currentStoryContent[3] }}
          </p>

          <p m-b-20px>
            {{ currentStoryContent[4] }}
          </p>

          <div
            flex="~ items-start"
            gap-16px
            w-full
            m-b-20px
            p-32px
            bg="#1A1A1A"
            b="1px solid linear-gradient(to right, #C8C8C8 20%, #C8C8C8 100%) rd-20px"
          >
            <Quotes min-w-20px class="icon" />

            <p>
              {{ currentStoryContent[5] }}
            </p>
          </div>

          <p>
            {{ currentStoryContent[6] }}
          </p>
        </div>
      </template>

      <template v-if="isStoryThird">
        <div
          flex="~ col items-start"
          p-30px
          bg="#0D0D0D"
          b="2px rd-20px #00f3bc61"
          text="18px #C8C8C8 start"
          line-height-22px
          font-400
        >
          <p
            v-for="(item, index) in currentStoryContent"
            :key="item"
            :mb="(index === currentStoryContent?.length - 1) ? '0' : '20px'"
          >
            {{ item }}
          </p>
        </div>
      </template>

      <template v-if="isStoryFourth">
        <div
          flex="~ col items-start"
          p-30px
          bg="#0D0D0D"
          b="2px rd-20px #00f3bc61"
          text="18px #C8C8C8 start"
          line-height-22px
          font-400
        >
          <div flex="~ col justify-start items-start gap-20px" m-b-30px>
            <div
              p="x-29px y-4px"
              b="1px rd-75px #00F3BC"
              text="#00F3BC 14px"
              line-height-18px
              font-600
            >
              1
            </div>

            <div>
              <p text="#fff" font-500>
                {{ currentStoryContent[0] }}
              </p>
            </div>
          </div>

          <div flex="~ col justify-start items-start gap-20px" m-b-30px>
            <div
              p="x-29px y-4px"
              b="1px rd-75px #00F3BC"
              text="#00F3BC 14px"
              line-height-18px
              font-600
            >
              2
            </div>

            <div>
              <p text="#fff" font-500>
                {{ currentStoryContent[1] }}
              </p>
            </div>
          </div>

          <div flex="~ col justify-start items-start gap-20px">
            <div
              p="x-29px y-4px"
              b="1px rd-75px #00F3BC"
              text="#00F3BC 14px"
              line-height-18px
              font-600
            >
              3
            </div>

            <div>
              <p m-b-30px text="#fff" font-500>
                {{ currentStoryContent[2] }}
              </p>

              <p>
                {{ currentStoryContent[3] }}
              </p>
            </div>
          </div>
        </div>
      </template>
    </template>

    <template v-if="isValentine">
      <template v-if="isStoryFirst">
        <div
          flex="~ col items-start"
          p-30px
          bg="#0D0D0D"
          b="2px rd-20px #00f3bc61"
          text="18px #C8C8C8 start"
          line-height-22px
          font-400
        >
          <p m-b-20px>
            {{ currentStoryContent[0] }}
          </p>

          <p m-b-20px>
            {{ currentStoryContent[1] }}
          </p>

          <div
            flex="~ items-start"
            gap-16px
            w-full
            m-b-20px
            p-32px
            bg="#1A1A1A"
            b="1px solid linear-gradient(to right, #C8C8C8 20%, #C8C8C8 100%) rd-20px"
          >
            <Quotes min-w-20px class="icon" />

            <p>
              {{ currentStoryContent[2] }}
            </p>
          </div>

          <p m-b-20px>
            {{ currentStoryContent[3] }}
          </p>

          <p m-b-20px>
            {{ currentStoryContent[4] }}
          </p>

          <div
            flex="~ items-start"
            gap-16px
            w-full
            m-b-20px
            p-32px
            bg="#1A1A1A"
            b="1px solid linear-gradient(to right, #C8C8C8 20%, #C8C8C8 100%) rd-20px"
          >
            <Quotes min-w-20px class="icon" />

            <p>
              {{ currentStoryContent[5] }}
            </p>
          </div>

          <p>
            {{ currentStoryContent[6] }}
          </p>
        </div>
      </template>

      <template v-if="isStorySecond">
        <div
          flex="~ col items-start"
          p-30px
          bg="#0D0D0D"
          b="2px rd-20px #00f3bc61"
          text="18px #C8C8C8 start"
          line-height-22px
          font-400
        >
          <p m-b-20px>
            {{ currentStoryContent[0] }}
          </p>

          <div
            flex="~ items-start"
            gap-16px
            w-full
            m-b-20px
            p-32px
            bg="#1A1A1A"
            b="1px solid linear-gradient(to right, #C8C8C8 20%, #C8C8C8 100%) rd-20px"
          >
            <Quotes min-w-20px class="icon" />

            <p>
              {{ currentStoryContent[1] }}
            </p>
          </div>

          <p m-b-20px>
            {{ currentStoryContent[2] }}
          </p>

          <p>
            {{ currentStoryContent[3] }}
          </p>
        </div>
      </template>

      <template v-if="isStoryThird">
        <div
          flex="~ col items-start"
          p-30px
          bg="#0D0D0D"
          b="2px rd-20px #00f3bc61"
          text="18px #C8C8C8 start"
          line-height-22px
          font-400
        >
          <p
            v-for="(item, index) in currentStoryContent"
            :key="item"
            :mb="(index === currentStoryContent?.length - 1) ? '0' : '20px'"
          >
            {{ item }}
          </p>
        </div>
      </template>

      <template v-if="isStoryFourth">
        <div
          flex="~ col items-start"
          p-30px
          bg="#0D0D0D"
          b="2px rd-20px #00f3bc61"
          text="18px #C8C8C8 start"
          line-height-22px
          font-400
        >
          <div flex="~ col justify-start items-start gap-20px" m-b-30px>
            <div
              p="x-29px y-4px"
              b="1px rd-75px #00F3BC"
              text="#00F3BC 14px"
              line-height-18px
              font-600
            >
              1
            </div>

            <div>
              <p>
                {{ currentStoryContent[0] }}
              </p>
            </div>
          </div>

          <div flex="~ col justify-start items-start gap-20px" m-b-30px>
            <div
              p="x-29px y-4px"
              b="1px rd-75px #00F3BC"
              text="#00F3BC 14px"
              line-height-18px
              font-600
            >
              2
            </div>

            <div flex="~ row">
              <p>
                {{ currentStoryContent[1] }}
              </p>
            </div>
          </div>

          <div flex="~ col justify-start items-start gap-20px" m-b-30px>
            <div
              p="x-29px y-4px"
              b="1px rd-75px #00F3BC"
              text="#00F3BC 14px"
              line-height-18px
              font-600
            >
              3
            </div>

            <div flex="~ row">
              <p>
                {{ currentStoryContent[2] }}
              </p>
            </div>
          </div>

          <div flex="~ col justify-start items-start gap-20px">
            <div
              p="x-29px y-4px"
              b="1px rd-75px #00F3BC"
              text="#00F3BC 14px"
              line-height-18px
              font-600
            >
              4
            </div>

            <div>
              <div flex="~ row">
                <p>
                  {{ currentStoryContent[3] }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </template>
    </template>
  </div>

  <div
    v-else
    flex
  >
    <div
      w-284px
      h-fit
      m-r-37px
      b="2px rd-20px #222222"
      p="y-28px x-25px"
    >
      <div flex="~ col gap-10px">
        <div
          v-for="story in stories"
          :key="story"
        >
          <template v-if="hasContent(story)">
            <div
              flex="~ justify-between items-center gap-10px"
              bg="#26262682"
              :text="isCurrentStory(story) ? '#00F3BC' : 'white'"
              hover="text-#00F3BC"
              font-500
              b="1px rd-8px #393939"
              p="y-10px x-14px"
              cursor-pointer
              @click="selectStory(story)"
            >
              {{ story }}

              <div
                :bg="isCurrentStory(story) ? '#00F3BC' : '#393939'"
                b="2px rd-50% #393939"
                min-w-13px
                min-h-13px
              />
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
            {{ story }}

            <div
              bg="#393939"
              b="2px rd-50% #393939"
              min-w-13px
              min-h-13px
            />
          </div>
        </div>
      </div>
    </div>

    <div
      w-full
      h-fit
      p="x-28px y-28px"
      bg="#0D0D0D"
      b="2px rd-20px #00f3bc61"
    >
      <div flex="~ col justify-between items-start gap-24px" m-b-30px>
        <div
          text="#00F3BC 24px"
          line-height-28px
          font-500
        >
          {{ currentStory }}
        </div>

        <template v-if="isRostyslav">
          <template v-if="isStoryFirst || isStoryThird">
            <div
              flex="~ col items-start"
              p-0
              text="18px #C8C8C8 start"
              line-height-22px
              font-400
            >
              <p
                v-for="(item, index) in currentStoryContent"
                :key="item"
                :mb="(index === currentStoryContent?.length - 1) ? '0' : '20px'"
              >
                {{ item }}
              </p>
            </div>
          </template>

          <template v-if="isStorySecond">
            <div
              flex="~ col items-start"
              p-0
              text="18px #C8C8C8 start"
              line-height-22px
              font-400
            >
              <p m-b-20px>
                {{ currentStoryContent[0] }}
              </p>

              <p m-b-20px>
                {{ currentStoryContent[1] }}
              </p>

              <div
                flex="~ items-start"
                gap-16px
                m-b-20px
                p-32px
                bg="#1A1A1A"
                b="1px solid linear-gradient(to right, #C8C8C8 20%, #C8C8C8 100%) rd-20px"
              >
                <Quotes min-w-20px class="icon" />

                <p>
                  {{ currentStoryContent[2] }}
                </p>
              </div>

              <p m-b-20px>
                {{ currentStoryContent[3] }}
              </p>

              <p text="#fff" font-500 m-b-14px>
                {{ currentStoryContent[4] }}
              </p>

              <div flex>
                <div
                  min-w-4px
                  m-r-24px
                  class="bar"
                />

                <div
                  flex="~ col"
                  m-t-30px
                  text-24px
                  line-height-29px
                >
                  <div
                    relative
                    flex
                    w-full
                    m-b-26px
                  >
                    <span
                      absolute
                      top-5px
                      left="-33px"
                      w-14px
                      h-14px
                      bg="#00F3BC"
                    />

                    <p
                      text="18px #C8C8C8 start"
                      line-height-22px
                      font-400
                    >
                      {{ currentStoryContent[5] }}
                    </p>
                  </div>

                  <div
                    relative
                    flex
                    w-full
                    m-b-26px
                  >
                    <span
                      absolute
                      top-5px
                      left="-33px"
                      w-14px
                      h-14px
                      bg="#00F3BC"
                    />

                    <p
                      text="18px #C8C8C8 start"
                      line-height-22px
                      font-400
                    >
                      {{ currentStoryContent[6] }}
                    </p>
                  </div>

                  <div
                    relative
                    flex
                    w-full
                    m-b-26px
                  >
                    <span
                      absolute
                      top-5px
                      left="-33px"
                      w-14px
                      h-14px
                      bg="#00F3BC"
                    />

                    <p
                      text="18px #C8C8C8 start"
                      line-height-22px
                      font-400
                    >
                      {{ currentStoryContent[7] }}
                    </p>
                  </div>

                  <div
                    relative
                    flex
                    w-full
                    m-b-26px
                  >
                    <span
                      absolute
                      top-5px
                      left="-33px"
                      w-14px
                      h-14px
                      bg="#00F3BC"
                    />

                    <p
                      text="18px #C8C8C8 start"
                      line-height-22px
                      font-400
                    >
                      {{ currentStoryContent[8] }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </template>

          <template v-if="isStoryFourth">
            <div
              flex="~ col items-start"
              p-0
              text="18px #C8C8C8 start"
              line-height-22px
              font-400
            >
              <div flex="~ col justify-start items-start gap-20px" m-b-30px>
                <div
                  p="x-29px y-4px"
                  b="1px rd-75px #00F3BC"
                  text="#00F3BC 14px"
                  line-height-18px
                  font-600
                >
                  1
                </div>

                <div>
                  <p text="#fff" font-500>
                    {{ currentStoryContent[0] }}
                  </p>

                  <p>
                    {{ currentStoryContent[1] }}
                  </p>
                </div>
              </div>

              <div flex="~ col justify-start items-start gap-20px" m-b-30px>
                <div
                  p="x-29px y-4px"
                  b="1px rd-75px #00F3BC"
                  text="#00F3BC 14px"
                  line-height-18px
                  font-600
                >
                  2
                </div>

                <div>
                  <p text="#fff" font-500>
                    {{ currentStoryContent[2] }}
                  </p>

                  <p m-b-30px>
                    {{ currentStoryContent[3] }}
                  </p>

                  <div
                    flex="~ items-start"
                    gap-16px
                    p-32px
                    bg="#1A1A1A"
                    b="1px solid linear-gradient(to right, #C8C8C8 20%, #C8C8C8 100%) rd-20px"
                  >
                    <Quotes min-w-20px class="icon" />

                    <p>
                      {{ currentStoryContent[4] }}
                    </p>
                  </div>
                </div>
              </div>

              <div flex="~ col justify-start items-start gap-20px" m-b-30px>
                <div
                  p="x-29px y-4px"
                  b="1px rd-75px #00F3BC"
                  text="#00F3BC 14px"
                  line-height-18px
                  font-600
                >
                  3
                </div>

                <div>
                  <p text="#fff" font-500>
                    {{ currentStoryContent[5] }}
                  </p>

                  <p>
                    {{ currentStoryContent[6] }}
                  </p>
                </div>
              </div>

              <div flex="~ col justify-start items-start gap-20px">
                <div
                  p="x-29px y-4px"
                  b="1px rd-75px #00F3BC"
                  text="#00F3BC 14px"
                  line-height-18px
                  font-600
                >
                  4
                </div>

                <div>
                  <p text="#fff" font-500>
                    {{ currentStoryContent[7] }}
                  </p>

                  <p m-b-30px>
                    {{ currentStoryContent[8] }}
                  </p>

                  <div
                    flex="~ items-start"
                    gap-16px
                    p-32px
                    bg="#1A1A1A"
                    b="1px solid linear-gradient(to right, #C8C8C8 20%, #C8C8C8 100%) rd-20px"
                  >
                    <Quotes min-w-20px class="icon" />

                    <p>
                      {{ currentStoryContent[9] }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </template>
        </template>

        <template v-if="isBogdan">
          <template v-if="isStoryFirst">
            <div
              flex="~ col items-start"
              p-0
              text="18px #C8C8C8 start"
              line-height-22px
              font-400
            >
              <p
                v-for="(item, index) in currentStoryContent"
                :key="item"
                :mb="(index === currentStoryContent?.length - 1) ? '0' : '20px'"
              >
                {{ item }}
              </p>
            </div>
          </template>

          <template v-if="isStorySecond">
            <div
              flex="~ col items-start"
              p-0
              text="18px #C8C8C8 start"
              line-height-22px
              font-400
            >
              <p m-b-20px>
                {{ currentStoryContent[0] }}
              </p>

              <div
                flex="~ items-start"
                gap-16px
                w-full
                m-b-20px
                p-32px
                bg="#1A1A1A"
                b="1px solid linear-gradient(to right, #C8C8C8 20%, #C8C8C8 100%) rd-20px"
              >
                <Quotes min-w-20px class="icon" />

                <p>
                  {{ currentStoryContent[1] }}
                </p>
              </div>

              <p m-b-20px>
                {{ currentStoryContent[2] }}
              </p>

              <p>
                {{ currentStoryContent[3] }}
              </p>
            </div>
          </template>

          <template v-if="isStoryThird">
            <div
              flex="~ col items-start"
              p-0
              text="18px #C8C8C8 start"
              line-height-22px
              font-400
            >
              <p m-b-20px>
                {{ currentStoryContent[0] }}
              </p>

              <p text="#fff" font-500 m-b-14px>
                {{ currentStoryContent[1] }}
              </p>

              <div flex m-b-40px>
                <div
                  min-w-4px
                  m-r-24px
                  class="bar"
                />

                <div
                  flex="~ col"
                  m-t-30px
                  text-24px
                  line-height-29px
                >
                  <div
                    relative
                    flex
                    w-full
                    m-b-26px
                  >
                    <span
                      absolute
                      top-5px
                      left="-33px"
                      w-14px
                      h-14px
                      bg="#00F3BC"
                    />

                    <p
                      text="18px #C8C8C8 start"
                      line-height-22px
                      font-400
                    >
                      {{ currentStoryContent[2] }}
                    </p>
                  </div>

                  <div
                    relative
                    flex
                    w-full
                    m-b-26px
                  >
                    <span
                      absolute
                      top-5px
                      left="-33px"
                      w-14px
                      h-14px
                      bg="#00F3BC"
                    />

                    <p
                      text="18px #C8C8C8 start"
                      line-height-22px
                      font-400
                    >
                      {{ currentStoryContent[3] }}
                    </p>
                  </div>

                  <div
                    relative
                    flex
                    w-full
                    m-b-26px
                  >
                    <span
                      absolute
                      top-5px
                      left="-33px"
                      w-14px
                      h-14px
                      bg="#00F3BC"
                    />

                    <p
                      text="18px #C8C8C8 start"
                      line-height-22px
                      font-400
                    >
                      {{ currentStoryContent[4] }}
                    </p>
                  </div>
                </div>
              </div>

              <div
                flex="~ items-start"
                gap-16px
                p-32px
                bg="#1A1A1A"
                b="1px solid linear-gradient(to right, #C8C8C8 20%, #C8C8C8 100%) rd-20px"
              >
                <Quotes min-w-20px class="icon" />

                <p>
                  {{ currentStoryContent[5] }}
                </p>
              </div>
            </div>
          </template>

          <template v-if="isStoryFourth">
            <div
              flex="~ col items-start"
              p-0
              text="18px #C8C8C8 start"
              line-height-22px
              font-400
            >
              <div flex="~ col justify-start items-start gap-20px" m-b-30px>
                <div
                  p="x-29px y-4px"
                  b="1px rd-75px #00F3BC"
                  text="#00F3BC 14px"
                  line-height-18px
                  font-600
                >
                  1
                </div>

                <div>
                  <p>
                    {{ currentStoryContent[0] }}
                  </p>
                </div>
              </div>

              <div flex="~ col justify-start items-start gap-20px" m-b-30px>
                <div
                  p="x-29px y-4px"
                  b="1px rd-75px #00F3BC"
                  text="#00F3BC 14px"
                  line-height-18px
                  font-600
                >
                  2
                </div>

                <div flex="~ row">
                  <p>
                    {{ currentStoryContent[1] }}
                  </p>
                </div>
              </div>

              <div flex="~ col justify-start items-start gap-20px" m-b-30px>
                <div
                  p="x-29px y-4px"
                  b="1px rd-75px #00F3BC"
                  text="#00F3BC 14px"
                  line-height-18px
                  font-600
                >
                  3
                </div>

                <div flex="~ row">
                  <p>
                    {{ currentStoryContent[2] }}
                  </p>
                </div>
              </div>

              <div flex="~ col justify-start items-start gap-20px">
                <div
                  p="x-29px y-4px"
                  b="1px rd-75px #00F3BC"
                  text="#00F3BC 14px"
                  line-height-18px
                  font-600
                >
                  4
                </div>

                <div>
                  <div flex="~ row">
                    <p m-b-30px>
                      {{ currentStoryContent[3] }}
                    </p>
                  </div>

                  <div
                    flex="~ items-start"
                    gap-16px
                    p-32px
                    bg="#1A1A1A"
                    b="1px solid linear-gradient(to right, #C8C8C8 20%, #C8C8C8 100%) rd-20px"
                  >
                    <Quotes min-w-20px class="icon" />

                    <p>
                      {{ currentStoryContent[4] }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </template>
        </template>

        <template v-if="isSofia">
          <template v-if="isStoryFirst">
            <div
              flex="~ col items-start"
              p-0
              text="18px #C8C8C8 start"
              line-height-22px
              font-400
            >
              <p
                v-for="(item, index) in currentStoryContent"
                :key="item"
                :mb="(index === currentStoryContent?.length - 1) ? '0' : '20px'"
              >
                {{ item }}
              </p>
            </div>
          </template>

          <template v-if="isStorySecond">
            <div
              flex="~ col items-start"
              p-0
              text="18px #C8C8C8 start"
              line-height-22px
              font-400
            >
              <p m-b-20px>
                {{ currentStoryContent[0] }}
              </p>

              <p m-b-20px>
                {{ currentStoryContent[1] }}
              </p>

              <div
                flex="~ items-start"
                gap-16px
                w-full
                m-b-20px
                p-32px
                bg="#1A1A1A"
                b="1px solid linear-gradient(to right, #C8C8C8 20%, #C8C8C8 100%) rd-20px"
              >
                <Quotes min-w-20px class="icon" />

                <p>
                  {{ currentStoryContent[2] }}
                </p>
              </div>

              <p m-b-20px>
                {{ currentStoryContent[3] }}
              </p>

              <p m-b-20px>
                {{ currentStoryContent[4] }}
              </p>

              <div
                flex="~ items-start"
                gap-16px
                w-full
                m-b-20px
                p-32px
                bg="#1A1A1A"
                b="1px solid linear-gradient(to right, #C8C8C8 20%, #C8C8C8 100%) rd-20px"
              >
                <Quotes min-w-20px class="icon" />

                <p>
                  {{ currentStoryContent[5] }}
                </p>
              </div>

              <p>
                {{ currentStoryContent[6] }}
              </p>
            </div>
          </template>

          <template v-if="isStoryThird">
            <div
              flex="~ col items-start"
              p-0
              text="18px #C8C8C8 start"
              line-height-22px
              font-400
            >
              <p
                v-for="(item, index) in currentStoryContent"
                :key="item"
                :mb="(index === currentStoryContent?.length - 1) ? '0' : '20px'"
              >
                {{ item }}
              </p>
            </div>
          </template>

          <template v-if="isStoryFourth">
            <div
              flex="~ col items-start"
              p-0
              text="18px #C8C8C8 start"
              line-height-22px
              font-400
            >
              <div flex="~ col justify-start items-start gap-20px" m-b-30px>
                <div
                  p="x-29px y-4px"
                  b="1px rd-75px #00F3BC"
                  text="#00F3BC 14px"
                  line-height-18px
                  font-600
                >
                  1
                </div>

                <div>
                  <p text="#fff" font-500>
                    {{ currentStoryContent[0] }}
                  </p>
                </div>
              </div>

              <div flex="~ col justify-start items-start gap-20px" m-b-30px>
                <div
                  p="x-29px y-4px"
                  b="1px rd-75px #00F3BC"
                  text="#00F3BC 14px"
                  line-height-18px
                  font-600
                >
                  2
                </div>

                <div>
                  <p text="#fff" font-500>
                    {{ currentStoryContent[1] }}
                  </p>
                </div>
              </div>

              <div flex="~ col justify-start items-start gap-20px">
                <div
                  p="x-29px y-4px"
                  b="1px rd-75px #00F3BC"
                  text="#00F3BC 14px"
                  line-height-18px
                  font-600
                >
                  3
                </div>

                <div>
                  <p m-b-30px text="#fff" font-500>
                    {{ currentStoryContent[2] }}
                  </p>

                  <p>
                    {{ currentStoryContent[3] }}
                  </p>
                </div>
              </div>
            </div>
          </template>
        </template>

        <template v-if="isValentine">
          <template v-if="isStoryFirst">
            <div
              flex="~ col items-start"
              p-0
              text="18px #C8C8C8 start"
              line-height-22px
              font-400
            >
              <p m-b-20px>
                {{ currentStoryContent[0] }}
              </p>

              <p m-b-20px>
                {{ currentStoryContent[1] }}
              </p>

              <div
                flex="~ items-start"
                gap-16px
                w-full
                m-b-20px
                p-32px
                bg="#1A1A1A"
                b="1px solid linear-gradient(to right, #C8C8C8 20%, #C8C8C8 100%) rd-20px"
              >
                <Quotes min-w-20px class="icon" />

                <p>
                  {{ currentStoryContent[2] }}
                </p>
              </div>

              <p m-b-20px>
                {{ currentStoryContent[3] }}
              </p>

              <p m-b-20px>
                {{ currentStoryContent[4] }}
              </p>

              <div
                flex="~ items-start"
                gap-16px
                w-full
                m-b-20px
                p-32px
                bg="#1A1A1A"
                b="1px solid linear-gradient(to right, #C8C8C8 20%, #C8C8C8 100%) rd-20px"
              >
                <Quotes min-w-20px class="icon" />

                <p>
                  {{ currentStoryContent[5] }}
                </p>
              </div>

              <p>
                {{ currentStoryContent[6] }}
              </p>
            </div>
          </template>

          <template v-if="isStorySecond">
            <div
              flex="~ col items-start"
              p-0
              text="18px #C8C8C8 start"
              line-height-22px
              font-400
            >
              <p m-b-20px>
                {{ currentStoryContent[0] }}
              </p>

              <div
                flex="~ items-start"
                gap-16px
                w-full
                m-b-20px
                p-32px
                bg="#1A1A1A"
                b="1px solid linear-gradient(to right, #C8C8C8 20%, #C8C8C8 100%) rd-20px"
              >
                <Quotes min-w-20px class="icon" />

                <p>
                  {{ currentStoryContent[1] }}
                </p>
              </div>

              <p m-b-20px>
                {{ currentStoryContent[2] }}
              </p>

              <p>
                {{ currentStoryContent[3] }}
              </p>
            </div>
          </template>

          <template v-if="isStoryThird">
            <div
              flex="~ col items-start"
              p-0
              text="18px #C8C8C8 start"
              line-height-22px
              font-400
            >
              <p
                v-for="(item, index) in currentStoryContent"
                :key="item"
                :mb="(index === currentStoryContent?.length - 1) ? '0' : '20px'"
              >
                {{ item }}
              </p>
            </div>
          </template>

          <template v-if="isStoryFourth">
            <div
              flex="~ col items-start"
              p-0
              text="18px #C8C8C8 start"
              line-height-22px
              font-400
            >
              <div flex="~ col justify-start items-start gap-20px" m-b-30px>
                <div
                  p="x-29px y-4px"
                  b="1px rd-75px #00F3BC"
                  text="#00F3BC 14px"
                  line-height-18px
                  font-600
                >
                  1
                </div>

                <div>
                  <p>
                    {{ currentStoryContent[0] }}
                  </p>
                </div>
              </div>

              <div flex="~ col justify-start items-start gap-20px" m-b-30px>
                <div
                  p="x-29px y-4px"
                  b="1px rd-75px #00F3BC"
                  text="#00F3BC 14px"
                  line-height-18px
                  font-600
                >
                  2
                </div>

                <div flex="~ row">
                  <p>
                    {{ currentStoryContent[1] }}
                  </p>
                </div>
              </div>

              <div flex="~ col justify-start items-start gap-20px" m-b-30px>
                <div
                  p="x-29px y-4px"
                  b="1px rd-75px #00F3BC"
                  text="#00F3BC 14px"
                  line-height-18px
                  font-600
                >
                  3
                </div>

                <div flex="~ row">
                  <p>
                    {{ currentStoryContent[2] }}
                  </p>
                </div>
              </div>

              <div flex="~ col justify-start items-start gap-20px">
                <div
                  p="x-29px y-4px"
                  b="1px rd-75px #00F3BC"
                  text="#00F3BC 14px"
                  line-height-18px
                  font-600
                >
                  4
                </div>

                <div>
                  <div flex="~ row">
                    <p>
                      {{ currentStoryContent[3] }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </template>
        </template>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.icon:deep(path) {
  stroke: #00F3BC;
}

.bar {
  background: linear-gradient(
    to bottom,
    rgba(67, 67, 67, 0) 0%,
    rgba(67, 67, 67, 1) 29.17%,
    rgba(67, 67, 67, 1) 76.04%,
    rgba(67, 67, 67, 0) 100%);
}
</style>
