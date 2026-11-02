<script setup lang="ts">
import { isMobile } from '~/composables/windowSizeService'
</script>

<template>
  <section
    v-if="isMobile"
    flex-col
    p-x-20px
  >
    <div text-header-1 m-b-30px>
      Як career framework використовується в роботі?
    </div>

    <div
      flex="~ col"
      text-24px
      line-height-29px
    >
      <div
        m-b-20px
        text-18px
        line-height-22px
        text="#C8C8C8"
      >
        Кар'єрний фреймворк – ключова складова performance review (підбивання
        підсумків роботи співробітника за період).
        Процес рев’ю допомагає виявити сильні та слабкі сторони працівника та
        визначити кроки, необхідні для досягнення його наступних кар'єрних
        цілей.
      </div>

      <div
        m-b-30px
        text-18px
        line-height-22px
        text="#727272"
      >
        * Під час performance review працівник та його people менеджер
        узгоджують відповідність до грейду
      </div>

      <div
        m-b-20px
        text-18px
        line-height-22px
        text="#C8C8C8"
      >
        Після performance review співробітник ініціює створення performance
        development plan (PDP), де описує свої точки зростання, цілі на
        наступний період, шляхи досягнення цілей та формулює маркери
        результатів.
      </div>

      <div
        text-18px
        line-height-22px
        text="#727272"
      >
        * PDP допомагає співробітнику побудувати чіткий план у зростанні по
        кар’єрному фреймворку
      </div>
    </div>
  </section>

  <section
    v-else
    m-b-180px
    p="l-160px r-160px"
  >

    <div text-header-1 m-b-60px>
      Як career framework використовується в роботі?
    </div>

    <div flex class="usage">
      <div
        min-w-6px
        m-r-58px
        class="usage-bar"
      />

      <div
        flex="~ col"
        m-r-44px
        text-24px
        line-height-29px
      >
        <div
          relative
          flex
          w-full
          m="t-84px b-98px"
          class="usage-block"
        >
          <span
            absolute
            top-8px
            left="-68px"
            w-14px
            h-14px
            bg="#00F3BC"
          />

          <div max-w-529px>
            Кар'єрний фреймворк – ключова складова performance review (підбивання
            підсумків роботи співробітника за період).

            <br />

            Процес рев’ю допомагає виявити сильні та слабкі сторони працівника та
            визначити кроки, необхідні для досягнення його наступних кар'єрних
            цілей.
          </div>

          <div
            flex="~ col"
            text-18px
            line-height-22px
            text="#C8C8C8"
            max-w-255px
          >
            <div>
              * Під час performance review працівник та його people менеджер
              узгоджують відповідність до грейду
            </div>
          </div>
        </div>

        <div
          relative
          flex
          w-full
          class="usage-block"
        >
          <span
            absolute
            top-8px
            left="-68px"
            w-14px
            h-14px
            bg="#00F3BC"
          />

          <div max-w-529px>
            Після performance review співробітник ініціює створення performance
            development plan (PDP), де описує свої точки зростання, цілі на
            наступний період, шляхи досягнення цілей та формулює маркери
            результатів.
          </div>

          <div
            flex="~ col"
            text-18px
            line-height-22px
            text="#C8C8C8"
            max-w-255px
          >
            <div>
              * PDP допомагає співробітнику побудувати чіткий план у зростанні по
              кар’єрному фреймворку
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.usage-block {
  display: grid;
  grid-template-columns: 1fr 0.4fr;
  grid-gap: 50px;
}

.usage-bar {
  background: linear-gradient(
    to bottom,
    rgba(67, 67, 67, 0) 0%,
    rgba(67, 67, 67, 1) 29.17%,
    rgba(67, 67, 67, 1) 76.04%,
    rgba(67, 67, 67, 0) 100%);
}
</style>
