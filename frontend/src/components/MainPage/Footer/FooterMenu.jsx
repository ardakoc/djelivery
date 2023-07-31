import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";

export default function FooterMenu() {
  return (
    <Container
      className="d-flex justify-content-center footer-menu pt-3"
      style={{ color: "#fff" }}
    >
      <Row>
        <hr className="hr pb-3" />
        <Col xs="auto" className="mx-5">
          <h6 className="d-flex justify-content-start">Discover Djelivery</h6>
          <p className="d-flex justify-content-start mt-3 mb-1">About us</p>
          <p className="d-flex justify-content-start mb-1">Career</p>
          <p className="d-flex justify-content-start">Tech careers</p>
        </Col>
        <Col xs="auto" className="mx-5">
          <h6 className="d-flex justify-content-start">Need help?</h6>
          <p className="d-flex justify-content-start mt-3 mb-1">FAQ</p>
          <p className="d-flex justify-content-start mb-1">
            Protection of Personal Data
          </p>
          <p className="d-flex justify-content-start mb-1">Privacy Policy</p>
          <p className="d-flex justify-content-start">Cookie Policy</p>
        </Col>
        <Col xs="auto" className="mx-5">
          <h6 className="d-flex justify-content-start">Connect us</h6>
          <p className="d-flex justify-content-start mt-3 mb-1">
            +90 123 456 78 90
          </p>
          <p className="d-flex justify-content-start mb-1">
            github.com/ardakoc
          </p>
          <p className="d-flex justify-content-start">Turkey</p>
        </Col>
        <hr className="hr pt-3" />
      </Row>
    </Container>
  );
}
