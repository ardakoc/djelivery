import Hero from "./Content/HeroSection/Hero";
import BrowseSection from "./Content/BrowseSection/BrowseSection";
import RestaurantsSection from "./Content/RestaurantsSection/RestaurantsSection";
import Testimonials from "./Content/TestimonialsSection/Testimonials";
import AutohideToast from "../../Toasts/AutohideToast";

export default function Homepage(props) {
  return (
    <>
      {props.response && (
        <AutohideToast title="Success" info={props.response} />
      )}
      <Hero />
      <BrowseSection />
      <RestaurantsSection />
      <Testimonials />
    </>
  );
}
