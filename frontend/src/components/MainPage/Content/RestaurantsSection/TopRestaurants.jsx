// Bootstrap Components
import Row from "react-bootstrap/esm/Row";
import Card from "react-bootstrap/Card";

// Custom Components
import Content from "../Content";
import RestaurantLogo from "./RestaurantLogo";

export default function TopRestaurants() {
  return (
    <Content
      title="Top Restaurants"
      description="Best restaurants in your location"
      cardBorder="none"
      body={
        <Card.Body>
          <Row className="justify-content-md-center">
            <RestaurantLogo photo="https://upload.wikimedia.org/wikipedia/commons/2/2e/Burger_King_logo_2020.png" />
            <RestaurantLogo photo="https://upload.wikimedia.org/wikipedia/tr/b/b8/KFC_logo.png" />
            <RestaurantLogo photo="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/McDonald%27s_logo.svg/2560px-McDonald%27s_logo.svg.png" />
            <RestaurantLogo photo="https://kofteciyusuf.com/assets/img/noimg3.png" />
            <RestaurantLogo photo="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Subway_2016_logo.svg/1200px-Subway_2016_logo.svg.png" />
            <RestaurantLogo photo="https://erastafethiye.com/wp-content/uploads/2022/03/Tavuk-Dunyasi-Logo.png" />
            <RestaurantLogo photo="https://static.wixstatic.com/media/8f1b38_681bcba788544b2abd5da78aaa68fcc1~mv2.png/v1/fill/w_398,h_232,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/leone%20y%C4%B1lba%C5%9F%C4%B1%20renk.png" />
            <RestaurantLogo photo="https://www.ohannesburger.com/_nuxt/img/orange-logo.f9c40a4.png" />
          </Row>
        </Card.Body>
      }
    />
  );
}
