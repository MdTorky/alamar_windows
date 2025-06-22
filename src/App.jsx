"use client"
import Header from "./components/Header"
import Hero from "./components/Hero"
import About from "./components/About"
import Mission from "./components/Mission"
import Values from "./components/Values"
import Services from "./components/Services"
import WhyChooseUs from "./components/WhyChooseUs"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import { LanguageProvider } from "./context/LanguageContext"

function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-white">
        <Header />
        <main>
          <Hero />
          <About />
          <Mission />
          <Values />
          <Services />
          <WhyChooseUs />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  )
}

export default App
