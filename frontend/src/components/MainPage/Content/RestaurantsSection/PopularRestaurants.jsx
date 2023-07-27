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
            <Col md={6} sm={12} className="mb-3">
              <RestaurantCard status="open" />
            </Col>
            <Col md={6} sm={12}>
              <RestaurantCard status="open" />
            </Col>
          </Row>
          <Row className="p-2">
            <Col md={6} sm={12} className="mb-3">
              <RestaurantCard status="open" />
            </Col>
            <Col md={6} sm={12}>
              <RestaurantCard status="close" />
            </Col>
          </Row>
          <Row className="p-2">
            <Col md={6} sm={12} className="mb-3">
              <RestaurantCard status="close" />
            </Col>
            <Col md={6} sm={12}>
              <RestaurantCard status="close" />
            </Col>
          </Row>
        </Card.Body>
      }
    />
  );
}
