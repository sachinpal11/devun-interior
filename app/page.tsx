import HeroSection from './components/HeroSection'
import ServicesSection from './components/ServicesSection'
import AboutSection from './components/AboutSection'
import PortfolioSection from './components/PortfolioSection'
import Footer from './components/Footer'

export default function Page() {
  return (
    <main className="bg-black mix-blend-normal">
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <PortfolioSection />
      <Footer />
    </main>
  )
}