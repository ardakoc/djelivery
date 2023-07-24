import './App.css'
import Navigation from './components/Navigation/Navigation'
import Hero from './components/Main Page/Hero/Hero'
import BrowseByCuisine from './components/Main Page/Content/BrowseSection/BrowseByCuisine'
import BrowseByLocation from './components/Main Page/Content/BrowseSection/BrowseByLocation'

function App() {
  return (
    <>
      <Navigation />
      <Hero />
      <BrowseByCuisine />
      <BrowseByLocation />
    </>
  )
}

export default App
