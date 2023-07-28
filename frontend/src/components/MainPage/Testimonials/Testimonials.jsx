// Bootstrap Components
import Row from "react-bootstrap/esm/Row";
import Content from "../Content/Content";

// Custom Components
import Testimonial from "./Testimonial";

export default function Testimonials() {
  return (
    <Content
      background="true"
      title="Happy eaters"
      description="We care your experience is perfect"
      cardBorder="none"
      body={
        <Row style={{ backgroundColor: "#c3fae8" }}>
          <Testimonial
            photo="https://chimpgroup.com/themeforest/foodbakery-html/assets/extra-images/testimonial-img1.jpg"
            comment="I love you, Djelivery. Just ordered me some grub, and I tell you, you
          folks make that part of my life easy."
          />
          <Testimonial
            photo="https://chimpgroup.com/themeforest/foodbakery-html/assets/extra-images/testimonial-img2.jpg"
            comment="Made my first @Djelivery order today. So great to be able to order food and not have to talk to anyone."
          />
          <Testimonial
            photo="https://chimpgroup.com/themeforest/foodbakery-html/assets/extra-images/testimonial-img3.jpg"
            comment="Shout out to Djelivery for making my life so so easy! Simply amazing and worth it for!"
          />
          <Testimonial
            photo="https://chimpgroup.com/themeforest/foodbakery-html/assets/extra-images/testimonial-img4.jpg"
            comment="Seriously, @Djelivery makes it easy for my coworkers and I to order food and get it to our office in a jiffy. FOOD!"
          />
        </Row>
      }
    ></Content>
  );
}
