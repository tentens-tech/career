<script setup lang="ts">
import Line from './../public/images/line.svg'
import { isDesktopSmall, isMobile } from '~/composables/windowSizeService'
import type { GrowthCase, GrowthCaseData } from '~/types/growth'

definePageMeta({
  layoutData: {
    mainImage: '/images/techRole_header.webp',
    breadcrumbs: [
      {
        name: 'Career framework',
        path: '/',
      },
      {
        name: 'Growth cases',
        path: '/growth-cases',
      },
    ],
  },
  validate: (route) => {
    const { name } = route.params as { name?: string }
    return typeof name === 'string' && name.length > 0
  },
  middleware: (to) => {
    const {
      params: { name },
      meta: { layoutData },
    } = to

    const nameBreadcrumbs: Record<string, string> = {
      rostyslav: 'Rostyslav',
      sofia: 'Sofia',
      bogdan: 'Bogdan',
      valentine: 'Valentine',
    }

    const nameBreadcrumb = nameBreadcrumbs[name as string]

    const newBreadcrumbs = layoutData.breadcrumbs.filter(
      routeBreadcrumb => !Object.values(nameBreadcrumbs).includes(routeBreadcrumb.name),
    )

    newBreadcrumbs.push({
      name: nameBreadcrumb,
      path: `/growth-cases/${name}`,
    })

    layoutData.breadcrumbs = newBreadcrumbs
  },
})

const namesMap: GrowthCaseData = {
  rostyslav: {
    class: 'rostyslav',
    title: 'Poстислав Силка',
    position: 'Backend Team Lead',
    description: 'Шлях від Trainee Backend розробника до Team Lead',
    story: [
      {
        title: 'З чого все починалось',
        text: [
          'Працюючи баристою в кафе я побачив хлопців з макбуками, що сидять і пишуть код.',
          'Ця перспектива мене приваблювала більше, ніж робити лате на кокосовому. Тому, не довго, думаючи я підійшов до них і почав розпитувати, з чого почати шлях в IT.',
          'Хто шукає, той знаходить. Я почав стажування у компанії цих «айтішніків з макбуками», де з часом виріс до грейду middle (на ринку прирівнювався до джуна).',
        ],
      },
      {
        title: 'Мій шлях в TENTENS Tech',
        text: [
          'Загальмувати у професійному розвитку точно не було моїм бажанням. Тож я вирішив, що треба рухатись далі, працювати з новими підходами в IT, мати більше можливостей та челенджів. Так я долучився до Genesis Software School, де було багато лекторів з TENTENS Tech.',
          'По закінченню навчання я отримав офер на позицію Trainee Backend Developer.',
          'Мене надихнули можливості розвитку, знання, які я тут можу отримати, а також команда крутих професіоналів, з якими я можу працювати й набиратись досвіду. Тому я свідомо вирішив іти на downgrade.',
          'Їхав по IС треку, я достатньо швидко. Робив піт-стопи на навчання та прокачку своїх навичок, але про це згодом.',
          'Загалом моя «гонка» виглядала так:',
          'за місяць роботи я перейшов на IC1 (з trainee на junior), чим достроково закривав випробовувальний',
          'через півроку став middle IC2',
          'через рік – senior IC3',
          'ще через 3 місяці перейшов на Leadership трек, обіймаючи позицію Backend Team Lead.',
        ],
      },
      {
        title: 'Де я зараз',
        text: [
          'Зараз я на позиції Backend Team Lead. Відповідаю за короткострокове та стратегічне планування, підтримку високого рівня перформансу команди.',
        ],
      },
      {
        title: 'Що допомогло зростати',
        text: [
          'Бути бізнес-орієнтовним.',
          'Мої задачі та задачі команди повинні мати позитивний вплив на бізнес та максимально ефективно вирішувати його потреби.',
          'Бажання брати на себе відповідальність.',
          'Бо чим більша у мене зона відповідальності, тим більше я можу впливати на бізнес.',
          'Я отримую кайф від розуміння, що якесь моє рішення впливає на кращий перформенс бізнесу.',
          'Прагнення розвиватись.',
          'Я не хочу гальмувати та зупинятись на якомусь рівні. Завжди є нові треки, нові гонки, нові рекорди, котрі я хочу досягти.',
          'Користувався усіма можливостями, які надавала компанія,',
          'навчався підприємництву, менеджменту, ораторському мистецтву, вів лекції на Software школі.',
          'Ти хопаєшся за можливості, десь себе показуєш, десь здобуваєш нові навички. І все це, врешті-решт, веде тебе до твоїх поставлених цілей.',
        ],
      },
    ],
    advice: {
      title: [
        'Як вийти у пік свого потенціалу?',
        'Поради від Ростіка',
      ],
      cards: [
        'Братись за всі можливості та створювати їх для себе самостійно',
        'Не боятись брати на себе все більше і більше відповідальності',
      ],
    },
    value: {
      title: 'Chief Executive Everyone',
      text: 'Попри свій невеликий досвід я міг брати на себе відповідальність та приймати рішення у своїй зоні. Важливий не твій тайтл, а твої результати.',
    },
  },
  sofia: {
    class: 'sofia',
    title: 'Софія Львова',
    position: 'Software Engineer IC5',
    description: 'Junior Full Stack → Team Lead → Software Engineer',
    story: [
      {
        title: 'З чого все починалось',
        text: [
          'Усе почалось ще у фізико-математичному ліцеї. Та тема мене дуже зацікавила. І хоч в універ я пішла навчатись на нетехнічну спеціальність, врешті-решт шлях мене привів у розробку.',
          'Роботу без досвіду було знайти вкрай важко, тож я пішла на курси з перспективою працевлаштування. Навчалась на Full Stack, але доволі швидко зрозуміла, що саме Backend драйвить мене найбільше. Роботу обирала там, де було б якомога цікавіше та складніше. Так я опиналась у невеликому стартапі, де було багато задач, відповідальності, а, відповідно, і швидке зростання',
        ],
      },
      {
        title: 'Мій шлях в TENTENS Tech',
        text: [
          'З часом я зрозуміла, що хочу піти в стабільну, велику компанію, де розвиватись можна ще швидше та амбітніше. Тоді-то я закинула свій CV на Djinni.',
          'Невдовзі мене запросили на співбесіду у TENTENS Tech. Я побачила офіс, отримала позитивні враження від знайомства з командою та моїм майбутнім лідом. ',
          'Звісно, важливо, щоб люди, з якими працюєш, тобі імпонували.',
          'Для багатьох людей шлях від developer до lead видається певним підвищенням (насправді, це не завжди так). Але тоді я була такої ж думки і одразу повідомила керівників, що посада Team Lead є для мене логічною кар’єрною ціллю. Отож, коли з’явилась можливість очолити одразу 2 команди, я погодилась.',
          'Зараз розумію, що мені – тоді ще middle-спеціалісту, іноді бракувало технічної експертизи. Менеджмент займав 90% мого робочого часу. Як наслідок, я практично не писала код, відчуваючи «стагнацію» відносно інших спеціалістів.',
          'Розробка мені завжди була цікава. Це, як логічні задачки, від вирішення яких можеш отримувати кайф.',
          'Тож після 3 років на позиції Team Lead, я зізналась собі, що сумую за розробкою та подоланням технічних викликів. І що повернення до неї аж ніяк не стане «down grade», адже це просто зовсім інший шлях розвитку.',
        ],
      },
      {
        title: 'Де я зараз',
        text: [
          'Сьогодні я Software Engineer – ця позиція розмиває межу між Backend та Frontend та розвиває мої T-shaped skills.',
          'Працюю у Functional Team, із переходом у яку я знову «змінила роботу». Мої завдання трансформувались у більш глобальні технічні треки, які можуть тривати кілька місяців та стосуватись одразу всіх зон TENTENS Tech.',
        ],
      },
      {
        title: 'Що допомогло зростати',
        text: [
          'Відповідальність',
          'Велике бажання росту',
          'Зміна контекстів',
          'У мене не бувало такого, що я застигала у контексті однієї команди. Натомість я змінювала оточення, стейкхолдерів, типи завдань, і, як наслідок – зростала.',
        ],
      },
    ],
    advice: {
      title: [
        'Як вийти у пік свого потенціалу?',
        'Поради від Софії',
      ],
      cards: [
        'Якомога частіше змінювати контексти всередині компанії – такий підхід розвиває helicopter view та стратегічне мислення.',
        'Використовувати всі корпоративні можливості (школи, курси, клуби тощо)',
        'Розвивати не лише hard, але й soft skills',
        'Ніколи не припиняти навчання',
      ],
    },
    value: {
      title: 'Plich-o-Plich',
      text: 'Наш успіх у TENTENS Tech об’єднує спільна ціль, у яку кожен вкладається на максимум',
    },
  },
  bogdan: {
    class: 'bogdan',
    title: 'Богдан Новіков',
    position: 'Head of Engineering',
    description: 'Middle Backend → Software Architect IC6 → Head of Engineering',
    story: [
      {
        title: 'З чого все починалось',
        text: [
          'У шкільні роки у мене з‘явився комп‘ютер, а разом із ним – жага допомогти родичам із сортуванням бухгалтерських файлів. Саме тоді я розробив перше програмне рішення, яке економило час та приносило користь. І мені це сподобалось!',
          'Професійний досвід я почав здобувати ще під час навчання у коледжі, працюючи у web-студіях.',
          'Я завжди бажав безпосередньо впливати на розвиток продукту, тому подався у логістичний стартап. Там тісно співпрацював із СЕО, самостійно обирав технології для вирішення проблем бізнесу, фокусувався на web, а також деліверив frontend, інфраструктуру, backend та десктопні додатки.',
        ],
      },
      {
        title: 'Мій шлях в TENTENS Tech',
        text: [
          'Коли стартап, у якому я працював, досягнув «стелі» ринку, я переїхав у Київ та розпочав пошуки вакансій під свій спектр знань.',
          'Я зрозумів, що хочу більшого. Чогось worldwide',
          'Читаючи відгуки про SKELAR, я помітив дуже багато схвальних. Мене підкупили атмосфера команди та її досягнень, досвід та спеціалізація працівників, цікаві виклики та той факт, що продукти, які тут створюються, є worldwide.',
          'Так розпочався мій шлях у TENTENS Tech на позиції Middle Backend Engineer. Оточений досвідченими спеціалістами, терабайтами даних та співпрацею зразу з декількома стейкхолдерами я неабияк поглибив свої навички у Backend.',
        ],
      },
      {
        title: 'Де я зараз',
        text: [
          'Сьогодні я обіймаю посаду Head of Engineering.',
          'Я відповідальний за:',
          'Дизайн систем. Понад 8 команд паралельно розробляють цілісну екосистему. А я є фасилітатором цього процесу',
          'Формування інженерної стратегії та культури',
          'Оптимізацію, керування ризиками та змінами.',
          'Архітектор масштабує себе не шляхом прямого підпорядкування n-1, а шляхом експертизи та цінності, яку він надає інженерам, командам та зонам',
        ],
      },
      {
        title: 'Що допомогло зростати',
        text: [
          'Орієнтація на цілі бізнесу',
          'Той рівень вимог, який є у компанії. Так я зміг відточити підходи на дуже високому рівні',
          'Круто пропрацьована командна взаємодія',
          'Можливості розвитку, які надає компанія (внутрішне навчання, постійний нетворк з досвідченими спеціалістами)',
          'Якщо немає віддачі, то жодного росту не буде.',
        ],
      },
    ],
    advice: {
      title: [
        'Як вийти у пік свого потенціалу?',
        'Поради від Богдана',
      ],
      cards: [
        'Поглиблюйте та поширюйте свою експертизу – у стеку та галузі',
        'Комунікуйте професійно та якісно',
        'Будьте системними та оцінюйте власні зусилля',
        'Любіть те, що робите + робіть те, що любите',
      ],
    },
    value: {
      title: 'Track the Track',
      text: 'Я завжди використовую свої знання так, щоб найефективнішим шляхом досягати цілей разом з командами, мати гарні результати, рухатись швидко, але контрольовано. І найголовніше – я балансую цим так, аби не «злітати з траси»',
    },
  },
  valentine: {
    class: 'valentine',
    title: 'Валентина Жук',
    position: 'Lead Marketing Analyst',
    description: 'Шлях від Trainee аналітика до Team Lead',
    story: [
      {
        title: 'З чого все починалось',
        text: [
          'Ще зі школи я дуже любила математику. Їздила на олімпіади та отримувала призові місця. Тож у 14 років я вирішила переїхати із Луцька до Києва, аби поступити до фізико-математичного ліцею.',
          'У ліцеї я сильно захопилась програмуванням. Тож далі обрала логічний шлях розвитку – вступ до інституту прикладного системного аналізу. Все мало б бути логічно та послідовно, якби не моє розуміння – розробка мене не драйвить.',
          'Хоча адаптуватись можна до всього, я не хотіла займатись тим, що мене не драйвить',
          'Десь на курсі 3 я вирішила спробувати себе у ролі Project Manager. Цей трек ідеально мені підходив, адже я мала технічний бекграунд, любов до дизайну систем і сильні soft skills. Мій перший досвід роботи – маленька компанія, де щоденно доводилось працювати понад 12 годин.',
          'Мене не влаштовувала позиція компанії працювати «дешево та сердито», аби лише догодити запитам замовників.',
          'Я хотіла робити щось якісне та цінне',
          'Як наслідок, я вступила в IT-школу від Genesis, після якої отримала оффер в TENTENS Tech на позицію Trainee Analyst.',
        ],
      },
      {
        title: 'Мій шлях в TENTENS Tech',
        text: [
          'Складні та цікаві виклики мені пропонували багато компаній-партнерів IT-школи. Що ж вирізняло TENTENS Tech поміж них?',
          'Колектив – найважливіше питання для мене. Мені хочеться, щоб я могла обговорити з колегами свої прагнення і цінності; ділити з ними спільне бажання чогось більшого.',
          'Саме TENTENS Tech зміг мене підкупити своєю командою.',
          'За час роботи в аналітичній команді я встигла глибоко поринути у найменші деталі, знала підхід до стейкхолдерів та, загалом, відчувала себе, як риба у воді. Через 1,5 року роботи я менторила 2 людей. Поступово у мене з\'являлось розуміння, як розвивати людей, управляти процесами, пріоритетами, командою.',
        ],
      },
      {
        title: 'Де я зараз',
        text: [
          'За рік менеджменту я багато навчилась. На старті у моїй команді було 3 людини, сьогодні – 7.',
          'Зараз моя команда змістила фокус з того, аналітика – це сервісна функція на те, що ми, як команда можемо бути повноцінним юнітом зі своїми цілями.',
          'Займаюсь побудовою процесів, побудовою взаємодії зі стейкхолдерами, стратегічним розвитком зони аналітики у своєму домені та розвитком команди.',
        ],
      },
      {
        title: 'Що допомогло зростати',
        text: [
          'Наполегливість та працьовитість (я дійсно люблю багато працювати).',
          'Не шукала легких шляхів. Чим складніше був виклик, то цікавіше мені було долучитись до нього.',
          'Чимало інвестувала в навчання. Розуміла, що так я виграю на дистанції.',
          'Будувала стосунки з колегами, обмінювалась контекстами, розвиваючи верхньорівневе бачення на бізнес. Складно рости, знаходячись у своїй бульбашці.',
        ],
      },
    ],
    advice: {
      title: [
        'Як вийти у пік свого потенціалу?',
        'Поради від Валі',
      ],
      cards: [
        'Шукайте, яким чином ви можете стати кращими завтра, та багато працюйте',
        'Прагніть до більшого. Не дарма кажуть – хто хоче, той знайде',
        'Не бійтеся брати ініціативу на себе',
      ],
    },
    value: {
      title: 'Be 1010s',
      text: 'Цінність, яка мені сильно відгукується. Адже, я живу за переконанням: якщо хочеш досягнути своїх цілей – багато і наполегливо працюй',
    },
  },
}

const route = useRoute<'growth-cases-name'>()
const nameData: GrowthCase = namesMap[route.params.name]

const isRostyslav = nameData.class === 'rostyslav'
const isSofia = nameData.class === 'sofia'
const isBogdan = nameData.class === 'bogdan'
const isValentine = nameData.class === 'valentine'
</script>

<template>
  <section v-if="isMobile" flex="~ col">
    <div :class="`header__img_mobile-${nameData.class}`">
      <div flex="~ col" p-x-20px>
        <div
          max-w-200px
          m-b-20px
          p-t-50px
          text="font-700 36px"
          line-height-43px
        >
          {{ nameData.title }}
        </div>

        <div text="font-400 18px #C8C8C8" line-height-22px>
          {{ nameData.position }}
        </div>
      </div>

      <div
        flex="~ col"
        max-w-300px
        m-x-auto
        p-t-346px
        p-x-20px
      >
        <Line
          w-46px
          m-b-18px
          m-l="80px"
          class="line"
        />

        <div
          font-600
          text="24px #FFF"
          line-height-29px
          :class="{ 'w-280px': isBogdan }"
        >
          {{ nameData.description }}
        </div>
      </div>

      <div
        h-500px
        m-t="-500px"
        class="header__img-shadow"
      />
    </div>

    <GrowthStory :case="nameData" />

    <div p="x-20px t-60px b-100px">

      <div m-b-140px>
        <div text-header-1 m-b-30px>
          {{ nameData.advice.title[0] }}
        </div>

        <div flex="~ col gap-30px" >
          <div
            v-for="(advice, index) in nameData.advice.cards"
            :key="`${index}-${advice}`"
            min-h-130px
            p="x-36px y-36px"
            bg="#0D0D0D"
            b="2px rd-20px #222222"
            overflow-hidden
          >
            <div flex="~ col justify-start items-start gap-30px">
              <div
                p="x-29px y-4px"
                b="1px rd-75px #00F3BC"
                text="#00F3BC 10px"
                line-height-10px
                font-500
              >
                Порада №{{ index + 1 }}
              </div>

              <div
                text="#FFF left 18px"
                line-height-22px
                font-400
              >
                {{ advice }}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div m-b-120px>
        <div text-header-1 m-b-30px>
          «Твоя» цінність
        </div>

        <div flex="~ col gap-30px">
          <div
            text="#FFF left 36px"
            line-height-43px
            font-700
          >
            {{ nameData.value.title }}
          </div>

          <div
            text="#FFF left 18px"
            line-height-22px
            font-400
          >
            {{ nameData.value.text }}
          </div>
        </div>
      </div>

      <TheNavigation />
    </div>
  </section>

  <section v-else>
    <div :class="{ 'min-h-800px': !isDesktopSmall }">
      <div
        p-t-90px
        text-white
        :class="isDesktopSmall ? 'm-x-100px' : 'm-l-159px'"
      >
        <TheBreadcrumbs />
      </div>

      <div relative>
        <div
          h-800px
          w-800px
          m-x-auto
          :class="`header__img_desktop-${nameData.class}`"
        />

        <div
          h-500px
          m-t="-500px"
          class="header__img-shadow"
        />

        <div
          absolute
          top-0
          left-0
          flex
          justify-between
          w-full
          m-x-auto
          :class="isDesktopSmall ? 'p-x-80px' : 'p-x-160px'"
        >
          <div max-w-360px p-t-180px>
            <div text-title m-b-20px>
              {{ nameData.title }}
            </div>

            <div
              font-400
              text="24px #C8C8C8"
              line-height-28px
            >
              {{ nameData.position }}
            </div>
          </div>

          <div
            flex="~ col"
            p-t-340px
            :class="{
              'max-w-474px': isRostyslav,
              'min-w-398px max-w-536px': isBogdan,
              'min-w-398px max-w-460px': isSofia,
              'w-400px': isValentine,
            }"
          >
            <div
              font-600
              text="46px #FFF"
              line-height-54px
            >
              {{ nameData.description }}
            </div>

            <Line
              w-46px
              m-l="-80px"
              class="line"
            />
          </div>
        </div>
      </div>
    </div>

    <div
      p="t-90px b-180px"
      :class="isDesktopSmall ? 'p-x-120px' : 'p-x-166px'"
    >
      <div m-b-196px>
        <GrowthStory :case="nameData" />
      </div>

      <div m-b-170px>
        <div text-header-1 m-b-90px>
          {{ nameData.advice.title[0] }}

          <br />

          {{ nameData.advice.title[1] }}
        </div>

        <div grid="~ cols-2" gap-30px>
          <div
            v-for="(advice, index) in nameData.advice.cards"
            :key="`${index}-${advice}`"
            min-h-130px
            p="x-60px y-60px"
            bg="#0D0D0D"
            b="2px rd-20px #222222"
            overflow-hidden
          >
            <div flex="~ col justify-start items-start gap-30px">
              <div
                p="x-29px y-4px"
                b="1px rd-75px #00F3BC"
                text="#00F3BC 14px"
                line-height-18px
                font-600
              >
                Порада №{{ index + 1 }}
              </div>

              <div
                text-20px
                text="#FFF left"
                line-height-24px
                font-500
                style="letter-spacing: -0.6px"
              >
                {{ advice }}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div m-b-170px>
        <div text-header-1 m-b-90px>
          «Твоя» цінність
        </div>

        <div grid="~ cols-2" gap-240px>
          <div text-title>
            {{ nameData.value.title }}
          </div>

          <div
            text-20px
            text="#FFF left"
            line-height-24px
            font-500
            style="letter-spacing: -0.6px"
          >
            {{ nameData.value.text }}
          </div>
        </div>
      </div>

      <TheNavigation />
    </div>
  </section>
</template>

<style scoped lang="scss">
.header {
  &__img {
    &_mobile {
      content: '';

      &-rostyslav {
        background: no-repeat -40px 114px/130% url('/images/rostyslav.webp');

        @media (min-width: 452px) and (max-width: 768px) {
          background: no-repeat 10px 86px/100%  url('/images/rostyslav.webp');
        }
      }

      &-bogdan {
        background: no-repeat -84px 114px/130% url('/images/bogdan.webp');

        @media (min-width: 578px) and (max-width: 768px) {
          background: no-repeat -26px 40px/100%  url('/images/bogdan.webp');
        }

        @media (min-width: 452px) and (max-width: 578px) {
          background: no-repeat -26px 112px/100%  url('/images/bogdan.webp');
        }
      }

      &-sofia {
        background: no-repeat -64px 118px/130% url('/images/sofia.webp');

        @media (min-width: 622px) and (max-width: 768px) {
          background: no-repeat -26px 40px/100%  url('/images/sofia.webp');
        }

        @media (min-width: 452px) and (max-width: 622px) {
          background: no-repeat -26px 114px/100%  url('/images/sofia.webp');
        }
      }

      &-valentine {
        background: no-repeat -64px 118px/130% url('/images/valentine.webp');

        @media (min-width: 622px) and (max-width: 768px) {
          background: no-repeat 10px 40px/100%  url('/images/valentine.webp');
        }

        @media (min-width: 452px) and (max-width: 622px) {
          background: no-repeat 10px 114px/100%  url('/images/valentine.webp');
        }
      }
    }

    &_desktop {
      content: '';

      &-rostyslav {
        background: no-repeat 20px -100px/100% url('/images/rostyslav.webp');
      }

      &-bogdan {
        background: no-repeat -20px -100px/100% url('/images/bogdan.webp');
      }

      &-sofia {
        background: no-repeat 20px -100px/100% url('/images/sofia.webp');
      }

      &-valentine {
        background: no-repeat 20px -100px/100% url('/images/valentine.webp');
      }
    }
  }

  &__img-shadow {
    background: linear-gradient(180deg, rgba(0, 0, 0, 0.00) 14.87%, #000 87.43%);
  }
}

.line:deep(path) {
  stroke: #00F3BC;
}
</style>
