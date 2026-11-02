<script setup lang="ts">
import { isDesktopSmall, isMobile } from '~/composables/windowSizeService'

definePageMeta({
  layoutData: {
    mainImage: '/images/techCareer_header.webp',
    name: 'Tech career framework',
    title: 'Tech career framework',
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
})
</script>

<template>
  <section
    v-if="isMobile"
    flex="~ col"
  >
    <div
      flex="~ col justify-end"
      m-b-80px
      class="header__img"
    >
      <div m-l-20px>
        <div
          m-t-140px
          m-b-60px
          text="font-700 26px"
          line-height-31px
        >
          Tech career

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
        Tech career framework
      </div>

      <div text-content-3>
        Engineer в TENTENS Tech - це партнер для бізнесу, який використовуючи
        свій набір інструментів (мов програмування, методологій розробки та
        тестування, знань баз даних та інфраструктури) допомагає бізнесу
        досягати поставлених цілей.
      </div>
    </div>

    <div p-x-20px>
      <div m-b-30px text="font-400 18px #fff">
        Така людина – надійна опора для бізнесу. Вона глибоко занурена у
        контекст, постійно вивчає нові підходи та інструменти, а також
        удосконалює власні знання.
      </div>

      <div
        m-b-30px
        text="font-400 18px #fff"
      >
        Головне завдання engineer – шляхом технологій допомогти бізнесу досягти
        результатів.
      </div>

      <div flex="~ col gap-30px" m-b-30px>
        <div flex-grow>
          <div m-b-30px flex="~ items-start">
            <div
              flex="~ align-center"
              m-t-4px
              m-r-35px
              p-l-18px
              p-y-6px
              b-l="2px #C8C8C8"
              text="font-500 #C8C8C8"
            >
              1
            </div>

            <div text="#C8C8C8">
              До групи IC входять розробники, фокус яких – особистий внесок у
              досягнення цілей нашого бізнесу, а не менеджмент команди. Існує
              кілька рівнів (від IC1 до Senior Staff Engineer). Кожен рівень
              відображає зростання вкладу співробітника у бізнес.
            </div>
          </div>

          <div flex="~ items-start">
            <div
              flex="~ align-center"
              m-t-4px
              m-r-35px
              p-l-18px
              p-y-6px
              b-l="2px #C8C8C8"
              text="font-500 #C8C8C8"
            >
              2
            </div>

            <div text="#C8C8C8">
              Напрямок інженерних керівників складається з Тім Лідів. Вони
              діють, як керівники команд. Існує ряд рівнів (від L1 Team Lead
              спеціаліста до Гільд майстра)
            </div>
          </div>
        </div>

        <div
          w-full
          p-y-45px
          p-x-42px
          b="2px rd-20px #222222"
          bg="#0D0D0D"
        >
          <img m-x-auto src="/images/techCareer_roles.svg" />
        </div>
      </div>

      <div m-b-30px text-header-1>
        Важливо: співробітник може розвиватися як по IC треку, так і по leadership
        треку. І сказати, що якийсь сценарій кращий – не можна.
      </div>

      <div m-b-27px text="#C8C8C8">
        При цьому ми не очікуємо, що Тім Ліди будуть найкращими інженерами у
        своїй команді, але вони мають бути технічно підковані.Тож існує
        мінімальна вимога – співробітники повинні зрости до рівня IC3, перш ніж
        переходити на позицію L1 Team Lead. Так вони зможуть робити значний
        внесок у розвиток команди та спрямовувати її учасників.
      </div>

      <div m-b-100px text="#C8C8C8">
        Обидва напрями працюють паралельно і компенсаційні пакети мають
        однаковий рівень. Ми наполегливо рекомендуємо нашим співробітникам
        вирішувати, яким шляхом йти, виходячи з типу роботи, яка їм подобається.
      </div>

      <TheNavigation p-x-20px m-b-100px />
    </div>
  </section>

  <section v-else flex="~ col">
    <div position-relative w-full>
      <img src="/images/techCareer_header.webp" w-full />

      <div
        grid="~ rows-[1fr_2fr]"
        position-absolute
        h-full
        w-full
        top="0"
        :class="isDesktopSmall ? 'p-l-120px' : 'p-l-160px'"
      >
        <div text-white p-t-90px>
          <TheBreadcrumbs />
        </div>

        <div max-w-318px text-title>
          Tech career framework
        </div>
      </div>
    </div>

    <div
      flex="~ col items-start"
      w-full
      h-auto
      text-content-2
      :class="isDesktopSmall
        ? 'm-b-90px p-x-120px'
        : 'm-b-90px p-x-160px'"
    >
      <div text-header-1 m-b-60px>
        Tech career framework
      </div>

      <div
        p-b-60px
        m-b-60px
        text-content-1
        b-b="2px solid #222222"
      >
        <div
          :class="isDesktopSmall
            ? 'w-full'
            : 'max-w-858px'"
        >
          Engineer в TENTENS Tech - це партнер для бізнесу, який використовуючи
          свій набір інструментів (мов програмування, методологій розробки та
          тестування, знань баз даних та інфраструктури) допомагає бізнесу
          досягати поставлених цілей.
        </div>
      </div>

      <div m-b-27px>
        Така людина – надійна опора для бізнесу. Вона глибоко занурена у
        контекст, постійно вивчає нові підходи та інструменти, а також
        удосконалює власні знання.
      </div>

      <div m-b-60px>
        Головне завдання engineer – шляхом технологій допомогти бізнесу досягти
        результатів.
      </div>

      <div
        flex="~ gap-67px"
        m-b-60px
        w-full
        :class="{ 'flex-col': isDesktopSmall }"
      >
        <div flex-grow>
          <div m-b-60px flex="~ items-start">
            <div
              b-l="2px #C8C8C8"
              m-t-4px
              p="l-18px y-6px"
              font-500
              flex="~ align-center"
              m-r-35px
            >
              1
            </div>

            <div
              :class="isDesktopSmall
                ? 'w-full'
                : 'max-w-502px'"
            >
              До групи IC входять розробники, фокус яких – особистий внесок у
              досягнення цілей нашого бізнесу, а не менеджмент команди. Існує
              кілька рівнів (від IC1 до Senior Staff Engineer). Кожен рівень
              відображає зростання вкладу співробітника у бізнес.
            </div>
          </div>

          <div flex="~ items-start">
            <div
              b-l="2px #C8C8C8"
              m-t-4px
              p="l-18px y-6px"
              font-500
              m-r-31px
              flex="~ align-center"
            >
              2
            </div>

            <div
              :class="isDesktopSmall
                ? 'w-full'
                : 'max-w-493px'"
            >
              Напрямок інженерних керівників складається з Тім Лідів. Вони
              діють, як керівники команд. Існує ряд рівнів (від L1 Team Lead
              спеціаліста до Гільд майстра)
            </div>
          </div>
        </div>

        <div
          b="2px rd-20px #222222"
          bg="#0D0D0D"
          p="y-45px x-42px"
        >
          <img m-x-auto  src="/images/techCareer_roles.svg" />
        </div>
      </div>

      <div
        w-full
        m-b-60px
        p="y-40px x-45px"
        b="2px rd-20px #222222"
        bg="#0D0D0D"
        text-white
        font-500
      >
        Важливо: співробітник може розвиватися як по IC треку, так і по leadership
        треку.

        <br />

        І сказати, що якийсь сценарій кращий – не можна.
      </div>

      <div m-b-27px>
        При цьому ми не очікуємо, що Тім Ліди будуть найкращими інженерами у
        своїй команді, але вони мають бути технічно підковані.Тож існує
        мінімальна вимога – співробітники повинні зрости до рівня IC3, перш ніж
        переходити на позицію L1 Team Lead. Так вони зможуть робити значний
        внесок у розвиток команди та спрямовувати її учасників.
      </div>

      <div m-b-180px>
        Обидва напрями працюють паралельно і компенсаційні пакети мають
        однаковий рівень. Ми наполегливо рекомендуємо нашим співробітникам
        вирішувати, яким шляхом йти, виходячи з типу роботи, яка їм подобається.
      </div>

      <TheNavigation :class="{ 'w-full': isDesktopSmall }" />
    </div>
  </section>
</template>

<style scoped lang="scss">
.header__img {
  content: '';
  background: no-repeat 0%/120% url('/images/techCareer_header.webp');
}
</style>
