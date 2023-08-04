// Custom Components
import ModalSectionTitle from "../../Titles/ModalSectionTitle";

// Icons
import Facebook from "../../Icons/Social/Facebook";
import LoginWithButton from "../../Buttons/LoginWithButton";
import X from "../../Icons/Social/X";
import Google from "../../Icons/Social/Google";

export default function SocialAuthModalSection() {
  return (
    <>
      <ModalSectionTitle text="Login With" />
      <LoginWithButton
        appIcon={<Facebook />}
        appName="Facebook"
        backgroundColor="#4267B2"
        color="#fff"
      />
      <LoginWithButton
        appIcon={<X />}
        appName="X"
        backgroundColor="#162126"
        color="#fff"
      />
      <LoginWithButton
        appIcon={<Google />}
        appName="Google"
        backgroundColor="#B63A2B"
        color="#fff"
      />
    </>
  );
}
