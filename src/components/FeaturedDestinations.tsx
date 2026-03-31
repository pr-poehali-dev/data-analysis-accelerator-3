import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MapPin, ArrowRight } from "lucide-react"

interface FeaturedDestinationsProps {
  onBooking: () => void
}

const destinations = [
  {
    name: "Eleon",
    country: "Премиум-класс",
    image: "https://cdn.poehali.dev/projects/c38de44d-1171-44ea-bd2b-8821fc7542ab/files/4683cb0a-8cef-40ac-a16e-01f18be870bd.jpg",
    description: "Элегантный отель с изысканным интерьером, панорамными террасами и авторской кухней",
    price: "от 12 000 ₽/ночь",
  },
  {
    name: "Grand Azure Palace",
    country: "Люкс-класс",
    image: "https://cdn.poehali.dev/projects/c38de44d-1171-44ea-bd2b-8821fc7542ab/files/4b8bd064-ce7b-4401-9512-05efa3eaca5e.jpg",
    description: "Дворцовая архитектура, бассейн с видом на горизонт и персональный консьерж",
    price: "от 25 000 ₽/ночь",
  },
  {
    name: "Royal Emerald Residence",
    country: "Ультра-люкс",
    image: "https://cdn.poehali.dev/projects/c38de44d-1171-44ea-bd2b-8821fc7542ab/files/3fc1cbf0-3284-4a27-90b9-067b95aff07a.jpg",
    description: "Апартаменты с приватными садами, SPA-зона и ресторан с мишленовской кухней",
    price: "от 35 000 ₽/ночь",
  },
  {
    name: "Imperial Sapphire Hotel",
    country: "Империал-класс",
    image: "https://cdn.poehali.dev/projects/c38de44d-1171-44ea-bd2b-8821fc7542ab/files/1bb8b35a-8ac4-45e5-b67a-d01ce4ba98ea.jpg",
    description: "Символ роскоши: золотые детали, пентхаусы и приватный пляж для гостей",
    price: "от 50 000 ₽/ночь",
  },
]

export function FeaturedDestinations({ onBooking }: FeaturedDestinationsProps) {
  return (
    <section id="destinations" className="py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-20">
          <h2 className="text-5xl md:text-6xl font-light tracking-tight mb-6 text-balance">
            Наши <span className="font-semibold">отели</span>
          </h2>
          <p className="text-lg text-muted-foreground text-balance leading-relaxed">
            Четыре уникальных пространства — каждый со своим характером, но единым стандартом безупречного сервиса
          </p>
        </div>

        {/* Destinations Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {destinations.map((destination, index) => (
            <Card
              key={index}
              className="group overflow-hidden border-0 bg-card hover:shadow-2xl transition-all duration-500 cursor-pointer"
            >
              {/* Image */}
              <div className="relative h-80 overflow-hidden">
                <img
                  src={destination.image || "/placeholder.svg"}
                  alt={destination.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0" />

                {/* Location Badge */}
                <div className="absolute top-4 left-4 flex items-center gap-1.5 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-full">
                  <MapPin className="h-3.5 w-3.5 text-primary" />
                  <span className="text-xs font-medium tracking-wide uppercase">{destination.country}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <div>
                  <h3 className="text-2xl font-semibold mb-2">{destination.name}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{destination.description}</p>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <span className="text-sm font-semibold text-primary">{destination.price}</span>
                  <Button variant="ghost" size="sm" onClick={onBooking} className="group/btn text-foreground hover:text-primary">
                    Забронировать
                    <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-16">
          <Button variant="outline" size="lg" className="rounded-full px-8 border-2 bg-transparent">
            Сравнить все отели
          </Button>
        </div>
      </div>
    </section>
  )
}