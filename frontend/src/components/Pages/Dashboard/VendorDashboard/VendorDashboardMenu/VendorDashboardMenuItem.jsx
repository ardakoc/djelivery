import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import ListGroup from "react-bootstrap/ListGroup";

export default function VendorDashboardMenuItem(props) {
  return (
    <ListGroup.Item
      action
      href={props.href}
      onClick={props.handeClick}
      style={{
        fontSize: "14px",
        backgroundColor: "#f0f0f0",
        color: "#2e3331",
        borderRadius: "0",
      }}
    >
      <Row>
        <Col xs={2} sm={2}>{props.icon}</Col>
        <Col xs={10} sm={9}>{props.title}</Col>
      </Row>
      
    </ListGroup.Item>
  );
}
