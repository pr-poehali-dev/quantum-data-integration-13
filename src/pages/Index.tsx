import HeroSection from "@/components/HeroSection"
import { TextGradientScroll } from "@/components/ui/text-gradient-scroll"
import { Timeline } from "@/components/ui/timeline"
import { StaggerTestimonials } from "@/components/ui/stagger-testimonials"
import { motion } from "framer-motion"
import SmoothScrollHero from "@/components/ui/smooth-scroll-hero"

export default function Index() {
  const missionStatement =
    "Мы — педагоги-воспитатели, которые верят: здоровое дыхание закладывает фундамент здоровья на всю жизнь. Наше сообщество объединяет специалистов дошкольного образования, которых связывает любовь к детям и забота об их развитии. Дыхательная гимнастика — это не просто упражнения. Это способ научить малышей слышать своё тело, справляться со стрессом и расти здоровыми. Делимся опытом, методиками и поддерживаем друг друга — потому что вместе мы делаем детство лучше."

  const timelineEntries = [
    {
      id: 1,
      image: "https://cdn.poehali.dev/projects/d5d3dc68-b639-4ce8-bb68-250d081ef5f4/files/e44600b0-2f48-49a1-a479-c85988f806fe.jpg",
      alt: "Дети на занятии дыхательной гимнастикой",
      title: "Первые шаги в практике",
      description:
        "Начать с дыхательной гимнастики в группе бывает непросто — дети активны, внимание рассеяно. Но наши педагоги знают: 5 минут весёлых дыхательных упражнений в игровой форме уже к концу недели дают заметный результат. Главное — начать!",
      layout: "left" as const,
    },
    {
      id: 2,
      image: "https://cdn.poehali.dev/projects/d5d3dc68-b639-4ce8-bb68-250d081ef5f4/files/e44600b0-2f48-49a1-a479-c85988f806fe.jpg",
      alt: "Воспитатель проводит занятие",
      title: "Методики, которые работают",
      description:
        "От упражнения «Шарик» до техники носового дыхания по Стрельниковой — в нашем сообществе собраны десятки проверенных методик. Каждый педагог делится тем, что работает именно в его группе, с детьми разного возраста и темперамента.",
      layout: "right" as const,
    },
    {
      id: 3,
      image: "https://cdn.poehali.dev/projects/d5d3dc68-b639-4ce8-bb68-250d081ef5f4/files/e44600b0-2f48-49a1-a479-c85988f806fe.jpg",
      alt: "Здоровые и счастливые дети",
      title: "Результаты, которые видны",
      description:
        "Педагоги нашего сообщества отмечают: дети, регулярно практикующие дыхательную гимнастику, реже болеют, лучше концентрируются и спокойнее реагируют на стресс. Это не теория — это опыт сотен воспитателей со всей страны.",
      layout: "left" as const,
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <HeroSection />

      <section id="mission" className="relative min-h-screen flex items-center justify-center py-20 bg-white">
        <div className="absolute inset-0 bg-grid-subtle opacity-30 pointer-events-none" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-6xl font-black tracking-wider mb-12 text-gray-900">НАША МИССИЯ</h2>
            <TextGradientScroll
              text={missionStatement}
              className="text-2xl md:text-3xl lg:text-4xl font-medium leading-relaxed text-gray-800"
              type="word"
              textOpacity="soft"
            />
          </div>
        </div>
      </section>

      <section id="community" className="relative py-20 bg-white">
        <div className="absolute inset-0 bg-grid-subtle opacity-30 pointer-events-none" />

        <div className="relative z-10">
          <div className="container mx-auto px-6 mb-16">
            <div className="text-center">
              <h2 className="text-4xl md:text-6xl font-black tracking-wider mb-6 text-gray-900">НАШИ ПРАКТИКИ</h2>
              <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
                Реальный опыт педагогов из разных уголков страны — как дыхательная гимнастика меняет жизнь детей в группе.
              </p>
            </div>
          </div>

          <Timeline entries={timelineEntries} />
        </div>
      </section>

      <section id="testimonials" className="relative py-20 bg-white">
        <div className="absolute inset-0 bg-grid-subtle opacity-30 pointer-events-none" />

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-black tracking-wider text-gray-900 mb-6">
              Что говорят наши{" "}
              <span className="bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">ПЕДАГОГИ</span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-12">
              Реальные истории воспитателей, которые внедрили дыхательную гимнастику в свою работу с дошкольниками.
            </p>
          </motion.div>

          <StaggerTestimonials />
        </div>
      </section>

      <section id="join" className="relative">
        <SmoothScrollHero
          scrollHeight={2500}
          desktopImage="https://cdn.poehali.dev/projects/d5d3dc68-b639-4ce8-bb68-250d081ef5f4/files/e44600b0-2f48-49a1-a479-c85988f806fe.jpg"
          mobileImage="https://cdn.poehali.dev/projects/d5d3dc68-b639-4ce8-bb68-250d081ef5f4/files/e44600b0-2f48-49a1-a479-c85988f806fe.jpg"
          initialClipPercentage={30}
          finalClipPercentage={70}
        />
      </section>
    </div>
  )
}
