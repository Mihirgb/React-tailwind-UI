import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import CircleAnimation from './animations/CircleAnimation'
import Background from './animations/Background.jsx'
import Instructor from './components/Instructor'
import DSASection from './components/DSASection'
import Testimonials from './components/Testimonials'
import SubFooter from './components/SubFooter'
import Footer from './components/Footer'
function App() {
  return (
    <>
      <Background />
      <CircleAnimation />

      <div className="relative z-10">
        <Navbar />
        <div className="max-w-7xl mx-auto pt-15 px-6">

          <HeroSection />
          <Instructor />
          <DSASection />
          <Testimonials />
          <SubFooter />
          <Footer />
        </div>

      </div >


      </>
      )
}

      export default App
