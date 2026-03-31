import { Card } from "@/components/ui/card"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Екатерина Морозова",
    hotel: "Royal Emerald Residence",
    avatar: "ЕМ",
    rating: 5,
    text: "Провели медовый месяц в Royal Emerald — это было волшебно. Приватный сад, завтрак прямо у бассейна, персональный консьерж угадывал желания раньше, чем мы успевали их озвучить. Вернёмся обязательно.",
    date: "Март 2025",
  },
  {
    name: "Дмитрий Волков",
    hotel: "Imperial Sapphire Hotel",
    avatar: "ДВ",
    rating: 5,
    text: "Останавливался в Imperial Sapphire по делам. Переговорная, трансфер, завтрак — всё на высшем уровне. Пентхаус с видом на город произвёл впечатление даже на партнёров из Лондона. Рекомендую для деловых поездок.",
    date: "Февраль 2025",
  },
  {
    name: "Анна и Сергей Белых",
    hotel: "Grand Azure Palace",
    avatar: "АБ",
    rating: 5,
    text: "Приезжали семьёй с двумя детьми. Grand Azure Palace удивил: дети были в восторге от бассейна и детской программы, а мы наконец-то отдохнули. Персонал — просто золото, внимательны к каждой мелочи.",
    date: "Январь 2025",
  },
  {
    name: "Михаил Соколов",
    hotel: "Eleon",
    avatar: "МС",
    rating: 5,
    text: "Eleon — идеальное сочетание стиля и уюта. Не кричащая роскошь, а продуманная до деталей атмосфера. Ресторан с авторской кухней — отдельный повод приехать. Буду рекомендовать всем коллегам.",
    date: "Декабрь 2024",
  },
  {
    name: "Ольга Захарова",
    hotel: "Royal Emerald Residence",
    avatar: "ОЗ",
    rating: 5,
    text: "SPA в Royal Emerald — это отдельный мир. Приехала на выходные просто отдохнуть от города, а уехала полностью обновлённой. Тихо, красиво, персонал ненавязчивый. Вернулась уже через месяц.",
    date: "Ноябрь 2024",
  },
  {
    name: "Артём Никитин",
    hotel: "Grand Azure Palace",
    avatar: "АН",
    rating: 5,
    text: "Бронировал Grand Azure для годовщины. Отель сделал всё сам: цветы в номере, особый ужин, шампанское — всё без лишних просьб. Жена была в восторге. Это не просто отель, это эмоции.",
    date: "Октябрь 2024",
  },
]

export function Testimonials() {
  return (
    <section className="py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-3xl mb-20">
          <h2 className="text-5xl md:text-6xl font-light tracking-tight mb-6 text-balance">
            Отзывы <span className="font-semibold">наших гостей</span>
          </h2>
          <p className="text-lg text-muted-foreground text-balance leading-relaxed">
            Каждый отзыв — это история, которую мы помогли создать
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, index) => (
            <Card key={index} className="p-6 border-0 bg-muted/30 hover:shadow-lg transition-all duration-300 space-y-4">
              <div className="flex items-center gap-1">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                ))}
              </div>

              <p className="text-sm text-foreground/80 leading-relaxed">"{t.text}"</p>

              <div className="flex items-center justify-between pt-2 border-t border-border">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs font-semibold shrink-0">
                    {t.avatar}
                  </div>
                  <div>
                    <div className="text-sm font-semibold">{t.name}</div>
                    <div className="text-xs text-muted-foreground">{t.hotel}</div>
                  </div>
                </div>
                <span className="text-xs text-muted-foreground">{t.date}</span>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
