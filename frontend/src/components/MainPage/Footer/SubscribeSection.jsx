// Bootstrap Components
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Form from "react-bootstrap/Form";

export default function SubscribeSection() {
  return (
    <Container className="pt-5 pb-5">
        <Row>
          <Col className="text-center">
            <h5 style={{ color: "#9cccbd", letterSpacing: "3px" }}>
              SUBSCRIBE TO OUR NEWSLETTER
            </h5>
            <Row>
              <Col></Col>
              <Col xs={10} md={6}>
                <Form className="my-4">
                  <Row className="align-items-center justify-content-center">
                    <Col>
                      <Form.Label htmlFor="formInput" visuallyHidden>
                        Email
                      </Form.Label>
                      <Form.Control
                        className="mb-2"
                        id="formInput"
                        placeholder="Enter your email address..." style={{ height: "52px"}}
                      ></Form.Control>
                    </Col>
                    <Col xs="auto" sm="auto" md="auto">
                      <Button
                        type="submit"
                        className="btn-success mb-2"
                        style={{
                          letterSpacing: "-0.3px",
                          fontWeight: "600",
                          color: "#fff",
                          height: "52px"
                        }}
                      >
                        SIGN UP
                      </Button>
                    </Col>
                  </Row>
                </Form>
              </Col>
              <Col></Col>
            </Row>
          </Col>
        </Row>
      </Container>
  )
}