import './App.css'
import Navigation from './components/Navigation/Navigation'
import Hero from './components/MainPage/Hero/Hero'
import BrowseSection from './components/MainPage/Content/BrowseSection/BrowseSection'
import RestaurantsSection from './components/MainPage/Content/RestaurantsSection/RestaurantsSection'
import Testimonials from './components/MainPage/Testimonials/Testimonials'
import Footer from './components/MainPage/Footer/Footer'

function App() {
  return (
    <>
      <Navigation />
      <Hero />
      <BrowseSection />
      <RestaurantsSection />
      <Testimonials />
      <Footer />
    </>
  )
}

export default App
