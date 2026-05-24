//App.jsx
import Navbar from "./components/Navbar"
import HomeHero from "./components/HomeHero"
import ProductsSection from "./components/ProductsSection"
import AboutSection from "./components/AboutSection"
import ContactSection from "./components/ContactSection"
import Footer from "./components/Footer"

function App() {
  return (
    <div className="min-h-screen bg-stone-50 text-stone-900">
      <Navbar />
      <HomeHero />
      <ProductsSection />
      <AboutSection />
      <ContactSection />
      <Footer />
    </div>
  )
}

export default App