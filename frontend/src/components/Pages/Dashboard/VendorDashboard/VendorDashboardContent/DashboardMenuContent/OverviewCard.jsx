import { Card, Col } from "react-bootstrap";

export default function OverivewCard(props) {
  return (
    <Col className="me-5">
      <Card style={{ borderRadius: "0" }}>
        <Card.Body>
          <h6>{props.title}</h6>
          <Card.Text>
            <a href={props.contentRoute} className="card-link">
              {props.content}
            </a>
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
}
