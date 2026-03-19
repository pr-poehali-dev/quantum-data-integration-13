import type React from "react"
import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

const SQRT_5000 = Math.sqrt(5000)

// Testimonials from educators practicing breathing gymnastics with preschoolers
const testimonials = [
  {
    tempId: 0,
    testimonial:
      "Начала применять дыхательную гимнастику в своей группе три года назад. Дети стали болеть заметно реже, а на занятиях — сосредоточеннее. Сообщество помогло с методиками и поддержало в начале пути.",
    by: "Ольга Сергеева, воспитатель, Москва",
    imgSrc: "https://api.dicebear.com/7.x/initials/svg?seed=OlgaSergeeva&backgroundColor=3b82f6&textColor=ffffff",
  },
  {
    tempId: 1,
    testimonial:
      "Я боялась, что дети не воспримут упражнения всерьёз. Но когда мы превратили это в игру — «надуем шарик», «подуем на снежинку» — они просили ещё! Коллеги из сообщества подсказали эти приёмы.",
    by: "Наталья Климова, воспитатель, Санкт-Петербург",
    imgSrc: "https://api.dicebear.com/7.x/initials/svg?seed=NataliyaKlimova&backgroundColor=10b981&textColor=ffffff",
  },
  {
    tempId: 2,
    testimonial:
      "В нашем сообществе я нашла не просто коллег, а единомышленников. Обмен опытом, конспекты занятий, советы по работе с гиперактивными детьми — всё это бесценно для практикующего педагога.",
    by: "Ирина Васильева, старший воспитатель, Казань",
    imgSrc: "https://api.dicebear.com/7.x/initials/svg?seed=IrinaVasilieva&backgroundColor=8b5cf6&textColor=ffffff",
  },
  {
    tempId: 3,
    testimonial:
      "Методика Стрельниковой в адаптации для малышей — это настоящее открытие. После двух месяцев занятий родители сами стали отмечать, что дети спокойнее засыпают и меньше капризничают.",
    by: "Светлана Попова, воспитатель, Екатеринбург",
    imgSrc: "https://api.dicebear.com/7.x/initials/svg?seed=SvetlanaPopova&backgroundColor=ef4444&textColor=ffffff",
  },
  {
    tempId: 4,
    testimonial:
      "Я работаю в детском саду уже 15 лет, и дыхательная гимнастика стала неотъемлемой частью моих занятий. Это сообщество помогло мне систематизировать опыт и выйти на новый уровень.",
    by: "Татьяна Кузнецова, воспитатель высшей категории",
    imgSrc: "https://api.dicebear.com/7.x/initials/svg?seed=TatianaKuznetsova&backgroundColor=f59e0b&textColor=ffffff",
  },
  {
    tempId: 5,
    testimonial:
      "Благодаря сообществу провела свой первый открытый урок по дыхательной гимнастике. Коллеги помогли подготовиться, подобрать упражнения. Урок прошёл на отлично — дети были в восторге!",
    by: "Анастасия Морозова, молодой педагог",
    imgSrc: "https://api.dicebear.com/7.x/initials/svg?seed=AnastasiaMorozova&backgroundColor=6366f1&textColor=ffffff",
  },
  {
    tempId: 6,
    testimonial:
      "В нашем саду ввели дыхательную гимнастику как часть утренней зарядки. Администрация поначалу скептически отнеслась, но через месяц сами увидели результат и поддержали инициативу.",
    by: "Марина Лебедева, воспитатель, Новосибирск",
    imgSrc: "https://api.dicebear.com/7.x/initials/svg?seed=MarinaLebedeva&backgroundColor=ec4899&textColor=ffffff",
  },
  {
    tempId: 7,
    testimonial:
      "Работаю с детьми ОВЗ. Дыхательные упражнения стали настоящим инструментом коррекции — помогают при речевых нарушениях, снижают тревожность. Коллеги из сообщества поделились специальными адаптациями.",
    by: "Людмила Соколова, педагог-дефектолог",
    imgSrc: "https://api.dicebear.com/7.x/initials/svg?seed=LudmilaKoroleva&backgroundColor=06b6d4&textColor=ffffff",
  },
  {
    tempId: 8,
    testimonial:
      "Сообщество вдохновляет каждый день. Вижу, как коллеги делятся находками, как поддерживают друг друга. Это не просто профессиональная сеть — это живое тёплое комьюнити педагогов-единомышленников.",
    by: "Елена Павлова, методист ДОУ",
    imgSrc: "https://api.dicebear.com/7.x/initials/svg?seed=ElenaPavlova&backgroundColor=f97316&textColor=ffffff",
  },
  {
    tempId: 9,
    testimonial:
      "После участия в онлайн-мастер-классах сообщества мои занятия стали намного разнообразнее. Игровые техники, визуальные подсказки, работа с родителями — всему этому научили коллеги.",
    by: "Юлия Андреева, воспитатель, Ростов-на-Дону",
    imgSrc: "https://api.dicebear.com/7.x/initials/svg?seed=JuliaAndreeva&backgroundColor=84cc16&textColor=ffffff",
  },
  {
    tempId: 10,
    testimonial:
      "Мне нравится, что в сообществе принимают всех — и опытных, и начинающих. Никакого снобизма, только взаимная поддержка и уважение. Именно так и должно быть среди педагогов.",
    by: "Валентина Семёнова, воспитатель",
    imgSrc: "https://api.dicebear.com/7.x/initials/svg?seed=ValentinaRodrigo&backgroundColor=a855f7&textColor=ffffff",
  },
  {
    tempId: 11,
    testimonial:
      "Дыхательная гимнастика помогает детям перед дневным сном. Всего 5–7 минут спокойных упражнений — и группа засыпает без капризов. Этот лайфхак подсказали в чате сообщества.",
    by: "Галина Тихонова, воспитатель, Уфа",
    imgSrc: "https://api.dicebear.com/7.x/initials/svg?seed=GalinaTihonova&backgroundColor=059669&textColor=ffffff",
  },
  {
    tempId: 12,
    testimonial:
      "Начала вести занятия по дыхательной гимнастике для родителей с детьми. Идею и материалы взяла из сообщества. Теперь это одно из самых популярных мероприятий нашего детского сада.",
    by: "Оксана Зайцева, воспитатель, Самара",
    imgSrc: "https://api.dicebear.com/7.x/initials/svg?seed=OksanaZaitseva&backgroundColor=0ea5e9&textColor=ffffff",
  },
  {
    tempId: 13,
    testimonial:
      "В профессии уже 20 лет, но именно здесь нашла стимул для роста. Участвую в обсуждениях, делюсь наработками, учусь у молодых коллег — они такие творческие! Это взаимообогащение.",
    by: "Тамара Беляева, воспитатель-ветеран",
    imgSrc: "https://api.dicebear.com/7.x/initials/svg?seed=TamaraBelyaeva&backgroundColor=dc2626&textColor=ffffff",
  },
  {
    tempId: 14,
    testimonial:
      "После курса дыхательной гимнастики в нашей группе случаев ОРВИ стало меньше на треть — по сравнению с прошлым годом. Медсестра в саду была приятно удивлена и теперь тоже поддерживает нашу практику.",
    by: "Дарья Фёдорова, воспитатель, Пермь",
    imgSrc: "https://api.dicebear.com/7.x/initials/svg?seed=DariaFedorova&backgroundColor=7c3aed&textColor=ffffff",
  },
]

interface TestimonialCardProps {
  position: number
  testimonial: (typeof testimonials)[0]
  handleMove: (steps: number) => void
  cardSize: number
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ position, testimonial, handleMove, cardSize }) => {
  const isCenter = position === 0
  return (
    <div
      onClick={() => handleMove(position)}
      className={cn(
        "absolute left-1/2 top-1/2 cursor-pointer border-2 p-8 transition-all duration-500 ease-in-out",
        isCenter
          ? "z-10 bg-gray-900 text-white border-gray-900"
          : "z-0 bg-white text-gray-900 border-gray-200 hover:border-gray-400",
      )}
      style={{
        width: cardSize,
        height: cardSize,
        clipPath: `polygon(50px 0%, calc(100% - 50px) 0%, 100% 50px, 100% 100%, calc(100% - 50px) 100%, 50px 100%, 0 100%, 0 0)`,
        transform: `
          translate(-50%, -50%)
          translateX(${(cardSize / 1.5) * position}px)
          translateY(${isCenter ? -65 : position % 2 ? 15 : -15}px)
          rotate(${isCenter ? 0 : position % 2 ? 2.5 : -2.5}deg)
        `,
        boxShadow: isCenter ? "0px 8px 0px 4px hsl(var(--border))" : "0px 0px 0px 0px transparent",
      }}
    >
      <span
        className="absolute block origin-top-right rotate-45 bg-gray-300"
        style={{
          right: -2,
          top: 48,
          width: SQRT_5000,
          height: 2,
        }}
      />
      <img
        src={testimonial.imgSrc || "/placeholder.svg"}
        alt={`${testimonial.by.split(",")[0]}`}
        className="mb-4 h-14 w-12 bg-gray-100 object-cover object-top"
        style={{
          boxShadow: "3px 3px 0px hsl(var(--background))",
        }}
      />
      <h3 className={cn("text-base sm:text-xl font-medium", isCenter ? "text-white" : "text-gray-900")}>
        "{testimonial.testimonial}"
      </h3>
      <p
        className={cn(
          "absolute bottom-8 left-8 right-8 mt-2 text-sm italic",
          isCenter ? "text-gray-300" : "text-gray-600",
        )}
      >
        - {testimonial.by}
      </p>
    </div>
  )
}

export const StaggerTestimonials: React.FC = () => {
  const [cardSize, setCardSize] = useState(365)
  const [testimonialsList, setTestimonialsList] = useState(testimonials)

  const handleMove = (steps: number) => {
    const newList = [...testimonialsList]
    if (steps > 0) {
      for (let i = steps; i > 0; i--) {
        const item = newList.shift()
        if (!item) return
        newList.push({ ...item, tempId: Math.random() })
      }
    } else {
      for (let i = steps; i < 0; i++) {
        const item = newList.pop()
        if (!item) return
        newList.unshift({ ...item, tempId: Math.random() })
      }
    }
    setTestimonialsList(newList)
  }

  useEffect(() => {
    const updateSize = () => {
      const { matches } = window.matchMedia("(min-width: 640px)")
      setCardSize(matches ? 365 : 290)
    }
    updateSize()
    window.addEventListener("resize", updateSize)
    return () => window.removeEventListener("resize", updateSize)
  }, [])

  return (
    <div className="relative w-full overflow-hidden bg-white" style={{ height: 600 }}>
      {testimonialsList.map((testimonial, index) => {
        const position =
          testimonialsList.length % 2 ? index - (testimonialsList.length + 1) / 2 : index - testimonialsList.length / 2
        return (
          <TestimonialCard
            key={testimonial.tempId}
            testimonial={testimonial}
            handleMove={handleMove}
            position={position}
            cardSize={cardSize}
          />
        )
      })}
      <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
        <button
          onClick={() => handleMove(-1)}
          className={cn(
            "flex h-14 w-14 items-center justify-center text-2xl transition-colors",
            "bg-white border-2 border-gray-300 hover:bg-gray-900 hover:text-white",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-500 focus-visible:ring-offset-2",
          )}
          aria-label="Предыдущий отзыв"
        >
          <ChevronLeft />
        </button>
        <button
          onClick={() => handleMove(1)}
          className={cn(
            "flex h-14 w-14 items-center justify-center text-2xl transition-colors",
            "bg-white border-2 border-gray-300 hover:bg-gray-900 hover:text-white",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-500 focus-visible:ring-offset-2",
          )}
          aria-label="Следующий отзыв"
        >
          <ChevronRight />
        </button>
      </div>
    </div>
  )
}