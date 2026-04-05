import HeroSection from './components/HeroSection'
import ServicesSection from './components/ServicesSection'
import AboutSection from './components/AboutSection'

export default function Page() {
  return (
    <main className="bg-black mix-blend-normal">
      <HeroSection />
      <ServicesSection />
      <AboutSection />
    </main>
  )
}