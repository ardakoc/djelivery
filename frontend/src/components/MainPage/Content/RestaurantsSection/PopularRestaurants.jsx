// Bootstrap Components
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Card from "react-bootstrap/Card";

// Custom Components
import Content from "../Content";
import RestaurantCard from "./RestaurantCard";

export default function PopularRestaurants() {
  return (
    <Content
      title="Choose From Most Popular"
      description="Give an order from most popular restaurants in your location"
      cardBorder="none"
      titleCenter
      body={
        <Card.Body>
          <Row className="p-2">
            <Col>
              <RestaurantCard />
            </Col>
            <Col>
              <RestaurantCard />
            </Col>
          </Row>
          <Row className="p-2">
            <Col>
              <RestaurantCard />
            </Col>
            <Col>
              <RestaurantCard />
            </Col>
          </Row>
          <Row className="p-2">
            <Col>
              <RestaurantCard />
            </Col>
            <Col>
              <RestaurantCard />
            </Col>
          </Row>
        </Card.Body>
      }
    />
  );
}
