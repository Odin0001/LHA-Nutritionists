import './App.css'
import About from './components/About'
import Benefits from './components/Benefits'
import BMI from './components/BMI'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Results from './components/Results'
import Services from './components/Services'
import Testimonials from './components/Testimonials'

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Benefits />
      <Services />
      <Results />
      <Testimonials />
      <BMI />
      <Footer />
    </>
  )
}

export default App
