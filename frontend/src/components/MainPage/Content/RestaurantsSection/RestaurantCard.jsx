// Bootstrap Components
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";

// Custom Components
import RestaurantLogo from "./RestaurantLogo";

// Icons
import FavoriteFilled from "../../../Icons/Favorite/FavoriteFilled";
import FavoriteRegular from "../../../Icons/Favorite/FavoriteRegular";
import Rating from "../../../Icons/Rating/Rating";

export default function RestaurantCard(props) {
  return (
    <Card>
      <Row className="p-3">
        <Col className="text-center m-3">
          <RestaurantLogo
            photo="https://upload.wikimedia.org/wikipedia/commons/2/2e/Burger_King_logo_2020.png"
            width="75px"
            height="75px"
          />
        </Col>
        <Col xs={7}>
          <Card.Title>Restaurant name</Card.Title>
          <Card.Subtitle>
            <Rating />
          </Card.Subtitle>
          <Card.Text>Food types</Card.Text>
          <Card.Text>30 minutes</Card.Text>
        </Col>
        <Col className="d-flex justify-content-end pe-4">
          <FavoriteRegular />
        </Col>
      </Row>
    </Card>
  );
}
