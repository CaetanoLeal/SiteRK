import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'
import WhatWeDo from './components/WhatWeDo'
import Team from './components/Team'
import Results from './components/Results'
import Testimonials from './components/Testimonials'
import CTA from './components/CTA'
import Stats from './components/Stats'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <Hero />
      <WhatWeDo />
      <Testimonials />
      <Services />
      <Results />
      <Team />
      <CTA />
      <Stats />
      <Footer />
    </div>
  )
}

export default App
