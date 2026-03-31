import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

interface NavbarProps {
  onBooking: () => void
}

export function Navbar({ onBooking }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/80 backdrop-blur-xl border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-semibold tracking-tight">Elite Hotels</h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-12">
            <a
              href="#destinations"
              className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors"
            >
              Отели
            </a>
            <a
              href="#packages"
              className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors"
            >
              Номера и пакеты
            </a>
            <a href="#about" className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors">
              О нас
            </a>
            <a
              href="#contact"
              className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors"
            >
              Контакты
            </a>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button onClick={onBooking} className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-6">
              Забронировать номер
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-border">
          <div className="px-6 py-6 space-y-4">
            <a href="#destinations" className="block text-base font-medium text-foreground/70 hover:text-foreground">
              Отели
            </a>
            <a href="#packages" className="block text-base font-medium text-foreground/70 hover:text-foreground">
              Номера и пакеты
            </a>
            <a href="#about" className="block text-base font-medium text-foreground/70 hover:text-foreground">
              О нас
            </a>
            <a href="#contact" className="block text-base font-medium text-foreground/70 hover:text-foreground">
              Контакты
            </a>
            <Button onClick={onBooking} className="w-full bg-primary text-primary-foreground hover:bg-primary/90 rounded-full">
              Забронировать номер
            </Button>
          </div>
        </div>
      )}
    </nav>
  )
}