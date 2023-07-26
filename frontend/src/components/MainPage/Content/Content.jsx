// Bootstrap Components
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Card from "react-bootstrap/Card";

export default function Content(props) {
  return (
    <div className={props.background === "true" && "section-bg"}>
      <Container className={props.className || "pt-5 pb-5"}>
        <Row>
          <Col>
            <h2>{props.title}</h2>
            <p>{props.description}</p>
          </Col>
          <Card className={props.cardBorder === "none" && "card-border-none"}>
            {props.body}
          </Card>
        </Row>
      </Container>
    </div>
  );
}