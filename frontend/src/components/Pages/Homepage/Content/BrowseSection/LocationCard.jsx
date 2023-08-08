// Bootstrap Components
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/esm/Col";

export default function LocationCard(props) {
  return (
    <Col>
      <Card style={{ border: "none" }}>
        <Card.Body style={{ padding: "4px"}}>
          <Card.Link href="#action1" className="location-link">
            {props.location}{" "}
          </Card.Link>
          <span style={{ color: "#12b786", paddingLeft: "12px" }}>
            ({props.placeCount} places)
          </span>
        </Card.Body>
      </Card>
    </Col>
  );
}
