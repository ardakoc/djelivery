// Bootstrap Components
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Card from "react-bootstrap/Card";

// Custom Components
import LocationCard from "./LocationCard";
import Button from "react-bootstrap/esm/Button";

export default function BrowseByLocation() {
  return (
    <div className="page-section">
      <Container className="pt-5 pb-5">
        <Row>
          <Col>
            <h2>Popular Localities In Izmir</h2>
            <p>Explore restaurants by locality</p>
          </Col>
          <Card>
            <Row>
              <Col>
                <Card.Body>
                  <LocationCard location="Bayrakli" placeCount="41" />
                  <LocationCard location="Bostanli" placeCount="38" />
                  <LocationCard location="Konak" placeCount="35" />
                  <LocationCard location="Bornova" placeCount="32" />
                </Card.Body>
              </Col>
              <Col>
                <Card.Body>
                  <LocationCard location="Alsancak" placeCount="32" />
                  <LocationCard location="Mavisehir" placeCount="27" />
                  <LocationCard location="Atakent" placeCount="25" />
                  <LocationCard location="Fahrettin Altay" placeCount="14" />
                </Card.Body>
              </Col>
              <Col>
                <Card.Body>
                  <LocationCard location="Cigli" placeCount="14" />
                  <LocationCard location="Basmane" placeCount="12" />
                  <LocationCard location="Balcova" placeCount="9" />
                  <LocationCard location="Narlidere" placeCount="8" />
                </Card.Body>
              </Col>
              <Col>
                <Card.Body>
                  <LocationCard location="Guzelbahce" placeCount="5" />
                  <LocationCard location="Urla" placeCount="5" />
                </Card.Body>
              </Col>
              <Button
                variant="success"
                style={{ borderTopLeftRadius: "0", borderTopRightRadius: "0" }}
              >
                See more locations
              </Button>
            </Row>
          </Card>
        </Row>
      </Container>
    </div>
  );
}
