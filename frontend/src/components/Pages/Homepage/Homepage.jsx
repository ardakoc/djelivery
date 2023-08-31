// React Hooks
import { useState, useEffect } from "react";

// Custom Components
import Hero from "./Content/HeroSection/Hero";
import BrowseSection from "./Content/BrowseSection/BrowseSection";
import RestaurantsSection from "./Content/RestaurantsSection/RestaurantsSection";
import Testimonials from "./Content/TestimonialsSection/Testimonials";
import AutohideToast from "../../Toasts/AutohideToast";

export default function Homepage(props) {
  const [activationMessage, setActivationMessage] = useState(null);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const activationStatus = urlParams.get("activate");
    const resetPasswordErrorStatus = urlParams.get("reset-password-error");

    if (activationStatus === "success") {
      setActivationMessage("Your user has been activated. You can login now.");
    } else if (activationStatus === "error") {
      setActivationMessage("The link has been expired!");
    }
    
    if (resetPasswordErrorStatus === "error") {
      setActivationMessage("The link has been expired!");
    }
  }, []);

  return (
    <>
      {props.response && (
        <AutohideToast title="Success" info={props.response} />
      )}
      {activationMessage && (
        <AutohideToast title="Success" info={activationMessage} />
      )}
      <Hero />
      <BrowseSection />
      <RestaurantsSection />
      <Testimonials />
    </>
  );
}
