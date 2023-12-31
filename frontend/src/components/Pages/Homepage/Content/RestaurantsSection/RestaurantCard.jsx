// Bootstrap Components
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";

// Custom Components
import Logo from "../../../../Logo/Logo";

// Icons
import FavoriteFilled from "../../../../Icons/Favorite/FavoriteFilled";
import FavoriteRegular from "../../../../Icons/Favorite/FavoriteRegular";
import Rating from "../../../../Icons/Rating/Rating";
import RestaurantStatus from "./RestaurantStatus";

export default function RestaurantCard(props) {
  return (
    <Card>
      <Row className="p-4">
        <Col className="text-center mb-4">
          <Row>
            <Logo
              photo="https://upload.wikimedia.org/wikipedia/commons/2/2e/Burger_King_logo_2020.png"
              width="75px"
              height="75px"
            />
          </Row>
          {props.open && <RestaurantStatus open />}
          {props.close && <RestaurantStatus close />}
        </Col>
        <Col xs={7}>
          <Card.Title style={{ fontSize: "16px" }} >Restaurant name</Card.Title>
          <Card.Subtitle style={{ fontSize: "12px" }}>
            <Rating />
          </Card.Subtitle>
          <Card.Text style={{ fontSize: "12px" }} className="mt-2 mb-1">
            Food types
            <Card.Text>30 minutes</Card.Text>
          </Card.Text>
        </Col>
        <Col className="d-flex justify-content-end pe-4">
          <FavoriteRegular />
        </Col>
      </Row>
    </Card>
  );
}
