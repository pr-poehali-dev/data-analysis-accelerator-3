import { Gem, Shield, Headphones, Award } from "lucide-react"

const features = [
  {
    icon: Gem,
    title: "Премиум-уровень",
    description: "Каждый отель сети — это безупречный стандарт качества, проверенный тысячами довольных гостей",
  },
  {
    icon: Shield,
    title: "Надёжное бронирование",
    description: "Защищённая оплата, гибкие условия отмены и прозрачная политика без скрытых сборов",
  },
  {
    icon: Headphones,
    title: "Консьерж-сервис 24/7",
    description: "Персональный консьерж на связи круглосуточно: от трансфера до резервирования столика",
  },
  {
    icon: Award,
    title: "Награды и признание",
    description: "Многократные лауреаты премий лучших отелей года по версии ведущих туристических изданий",
  },
]

export function WhyChooseUs() {
  return (
    <section id="about" className="py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-5xl md:text-6xl font-light tracking-tight mb-6 text-balance">
            Почему выбирают <span className="font-semibold">Elite Hotels</span>
          </h2>
          <p className="text-lg text-muted-foreground text-balance leading-relaxed">
            Мы создаём не просто проживание — мы создаём воспоминания, к которым хочется возвращаться снова
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center space-y-4">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 text-primary mb-2">
                <feature.icon className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold">{feature.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}