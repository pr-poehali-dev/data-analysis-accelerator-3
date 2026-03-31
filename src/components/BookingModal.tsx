import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Icon from "@/components/ui/icon"

interface BookingModalProps {
  open: boolean
  onClose: () => void
}

export function BookingModal({ open, onClose }: BookingModalProps) {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    hotel: "",
    checkIn: "",
    checkOut: "",
    guests: "",
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  const handleClose = () => {
    setSubmitted(false)
    setForm({ name: "", phone: "", hotel: "", checkIn: "", checkOut: "", guests: "" })
    onClose()
  }

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-2xl font-semibold">
            {submitted ? "Заявка принята!" : "Забронировать номер"}
          </DialogTitle>
        </DialogHeader>

        {submitted ? (
          <div className="py-8 text-center space-y-4">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mx-auto">
              <Icon name="CheckCircle" size={32} />
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Спасибо, <strong>{form.name}</strong>! Наш менеджер свяжется с вами по номеру{" "}
              <strong>{form.phone}</strong> в течение 15 минут для подтверждения бронирования.
            </p>
            <Button onClick={handleClose} className="rounded-full px-8 mt-2 bg-primary text-primary-foreground hover:bg-primary/90">
              Закрыть
            </Button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 pt-2">
            <div className="space-y-2">
              <Label htmlFor="name">Ваше имя</Label>
              <Input
                id="name"
                placeholder="Александр Иванов"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">Телефон</Label>
              <Input
                id="phone"
                type="tel"
                placeholder="+7 (999) 000-00-00"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                required
              />
            </div>

            <div className="space-y-2">
              <Label>Отель</Label>
              <Select onValueChange={(val) => setForm({ ...form, hotel: val })} required>
                <SelectTrigger>
                  <SelectValue placeholder="Выберите отель" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="eleon">Eleon</SelectItem>
                  <SelectItem value="grand-azure">Grand Azure Palace</SelectItem>
                  <SelectItem value="royal-emerald">Royal Emerald Residence</SelectItem>
                  <SelectItem value="imperial-sapphire">Imperial Sapphire Hotel</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-2">
                <Label htmlFor="checkin">Дата заезда</Label>
                <Input
                  id="checkin"
                  type="date"
                  value={form.checkIn}
                  onChange={(e) => setForm({ ...form, checkIn: e.target.value })}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="checkout">Дата выезда</Label>
                <Input
                  id="checkout"
                  type="date"
                  value={form.checkOut}
                  onChange={(e) => setForm({ ...form, checkOut: e.target.value })}
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label>Количество гостей</Label>
              <Select onValueChange={(val) => setForm({ ...form, guests: val })} required>
                <SelectTrigger>
                  <SelectValue placeholder="Выберите" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1">1 гость</SelectItem>
                  <SelectItem value="2">2 гостя</SelectItem>
                  <SelectItem value="3">3 гостя</SelectItem>
                  <SelectItem value="4">4 гостя</SelectItem>
                  <SelectItem value="5+">5 и более</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <Button
              type="submit"
              size="lg"
              className="w-full rounded-full bg-primary text-primary-foreground hover:bg-primary/90 mt-2"
            >
              Отправить заявку
            </Button>

            <p className="text-xs text-muted-foreground text-center">
              Менеджер свяжется с вами в течение 15 минут
            </p>
          </form>
        )}
      </DialogContent>
    </Dialog>
  )
}
