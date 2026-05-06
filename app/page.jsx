import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Collection from '@/components/Collection'
import About from '@/components/About'
import Testimonials from '@/components/Testimonials'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Collection />
      <About />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  )
}
