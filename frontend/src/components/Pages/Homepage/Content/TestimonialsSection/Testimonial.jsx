// Bootstrap Components
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/esm/Image";

export default function Testimonial(props) {
  return (
    <Col xs={12} md={3} className="pb-3">
      <Card className="card-border-none" style={{ backgroundColor: "#c3fae8" }}>
        
        <Row xs={2} md={12}>
          <Col xs={2} md={3}>
            <Image
              src={props.photo}
              roundedCircle
              width="64px"
            />
          </Col>
          <Col xs={10} md={9}><Card.Text
          style={{
            letterSpacing: "-0.7px",
            fontWeight: "300",
            fontSize: "14px",
          }}
        >
          {props.comment}
        </Card.Text></Col>
        </Row>
      </Card>
    </Col>
  );
}
