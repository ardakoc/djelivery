import Hero from "./Content/HeroSection/Hero";
import BrowseSection from "./Content/BrowseSection/BrowseSection";
import RestaurantsSection from "./Content/RestaurantsSection/RestaurantsSection";
import Testimonials from "./Content/TestimonialsSection/Testimonials";


export default function Homepage() {
  return (
    <>
      <Hero />
      <BrowseSection />
      <RestaurantsSection />
      <Testimonials />
    </>
  )
}