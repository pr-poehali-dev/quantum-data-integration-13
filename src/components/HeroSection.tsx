import { LiquidButton } from "@/components/ui/liquid-glass-button"
import { Menu, X } from "lucide-react"
import { useState } from "react"

export default function HeroSection() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { name: "Главная", href: "#hero" },
    { name: "Миссия", href: "#mission" },
    { name: "Практики", href: "#community" },
    { name: "Отзывы", href: "#testimonials" },
    { name: "Вступить", href: "#join" },
  ]

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  return (
    <div id="hero" className="relative h-screen w-full overflow-hidden bg-black">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://cdn.poehali.dev/projects/d5d3dc68-b639-4ce8-bb68-250d081ef5f4/files/e44600b0-2f48-49a1-a479-c85988f806fe.jpg')`,
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <nav className="relative z-20 flex items-center justify-between p-6 md:p-8">
        <div className="text-white font-bold text-xl tracking-wider">ДЫШИ</div>

        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <button
              key={item.name}
              onClick={() => scrollToSection(item.href)}
              className="relative text-white hover:text-gray-300 transition-colors duration-300 font-medium tracking-wide pb-1 group"
            >
              {item.name}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 ease-out group-hover:w-full"></span>
            </button>
          ))}
        </div>

        <button
          className="md:hidden text-white hover:text-gray-300 transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          <span className="sr-only">Меню</span>
        </button>
      </nav>

      {isMenuOpen && (
        <div className="absolute top-0 left-0 w-full h-full bg-black/90 z-30 md:hidden">
          <div className="flex flex-col items-center justify-center h-full space-y-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="text-white text-2xl font-bold tracking-wider hover:text-gray-300 transition-colors duration-300"
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>
      )}

      <div className="relative z-10 flex h-full items-center justify-center px-6">
        <div className="text-center text-white max-w-4xl">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-wider mb-4 leading-none">
            ДЫШИМ
            <br />
            ВМЕСТЕ
          </h1>

          <p className="text-xl md:text-2xl font-light tracking-wide mb-8 text-gray-200">
            Сообщество педагогов-воспитателей · Дыхательная гимнастика для дошкольников
          </p>

          <LiquidButton
            size="xxl"
            className="font-semibold text-lg tracking-wide"
            onClick={() => scrollToSection("#join")}
          >
            Вступить в сообщество
          </LiquidButton>
        </div>
      </div>
    </div>
  )
}
