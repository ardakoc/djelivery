import Copyright from "./Copyright";
import FooterMenu from "./FooterMenu";
import SubscribeSection from "./SubscribeSection";

export default function Footer() {
  return (
    <div className="footer">
      <SubscribeSection />
      <FooterMenu />
      <Copyright />
    </div>
  );
}
