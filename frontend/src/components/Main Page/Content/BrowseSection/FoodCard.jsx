import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/esm/Button";
import Col from "react-bootstrap/esm/Col";

export default function FoodCard(props) {
  return (
    <Col>
      <Card style={{ border: "none" }} className="text-center">
        <Card.Body>
          <Card.Title>
            <Button
              href="#action1"
              style={{ background: "none", border: "none" }}
            >
              {props.icon}
            </Button>
          </Card.Title>
          <Card.Text>
            <Button
              href="#action1"
              style={{
                background: "none",
                border: "none",
                color: "#000",
                textTransform: "uppercase",
              }}
            >
              {props.food}
            </Button>
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
}
