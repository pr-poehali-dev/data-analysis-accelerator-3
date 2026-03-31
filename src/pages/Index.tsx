import { useState } from "react"
import { Navbar } from "@/components/Navbar"
import { Hero } from "@/components/Hero"
import { FeaturedDestinations } from "@/components/FeaturedDestinations"
import { WhyChooseUs } from "@/components/WhyChooseUs"
import { PopularPackages } from "@/components/PopularPackages"
import { Testimonials } from "@/components/Testimonials"
import { Newsletter } from "@/components/Newsletter"
import { Footer } from "@/components/Footer"
import { BookingModal } from "@/components/BookingModal"

export default function Index() {
  const [bookingOpen, setBookingOpen] = useState(false)

  return (
    <main className="min-h-screen">
      <Navbar onBooking={() => setBookingOpen(true)} />
      <Hero onBooking={() => setBookingOpen(true)} />
      <FeaturedDestinations onBooking={() => setBookingOpen(true)} />
      <WhyChooseUs />
      <PopularPackages onBooking={() => setBookingOpen(true)} />
      <Testimonials />
      <Newsletter />
      <Footer />
      <BookingModal open={bookingOpen} onClose={() => setBookingOpen(false)} />
    </main>
  )
}
