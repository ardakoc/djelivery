// Bootstrap Components
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Card from "react-bootstrap/Card";

// Custom Components
import LocationCard from "./LocationCard";
import Content from "../Content";
import PrimaryButton from "../../../../Buttons/PrimaryButton";

export default function BrowseByLocation() {
  return (
    <Content
      className="pb-5"
      title="Popular Localities In Izmir"
      description="Explore restaurants by locality"
      withBackground
      body={
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
          <PrimaryButton
            text="See more locations"
            style={{ borderTopLeftRadius: "0", borderTopRightRadius: "0" }}
            className="btn-success"
          />
        </Row>
      }
    />
  );
}
