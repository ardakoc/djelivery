// Bootstrap Components
import Row from "react-bootstrap/esm/Row"
import Col from "react-bootstrap/esm/Col"

// Icons
import StarRegular from "./StarRegular"
import StarFilled from "./StarFilled"

export default function Rating() {
  return (
    <Row>
      <Col><StarFilled /></Col>
      <Col><StarFilled /></Col>
      <Col><StarFilled /></Col>
      <Col><StarFilled /></Col>
      <Col><StarRegular /></Col>
    </Row>
  )
}