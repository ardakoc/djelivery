// Bootstrap Components
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/esm/Container';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import InputGroup from 'react-bootstrap/InputGroup';

// Icons
import Location from '../Icons/Location/Location';
import Restaurant from '../Icons/Restaurant';

export default function HeroForm() {
  return (
    <Container className="hero-form">
      <h1>Best restaurants in your city</h1>
      {/* <h1>Choose your food from your favorite restaurants</h1> */}
      <h6>Pay quickly and securely by credit card, at the door or with food cards.</h6>
      <Form>
        <Col xs="auto">
          <Form.Label htmlFor="inlineFormInputGroup" visuallyHidden>
            Restaurant Name
          </Form.Label>
          <InputGroup className="mb-2">
            <InputGroup.Text>
                <Restaurant />
            </InputGroup.Text>
            <Form.Control id="inlineFormInputGroup" placeholder="Restaurant name" />
          </InputGroup>
        </Col>
        <Col xs="auto">
          <Form.Label htmlFor="inlineFormInputGroup" visuallyHidden>
            Username
          </Form.Label>
          <InputGroup className="mb-2">
            <InputGroup.Text>
              <Location />
            </InputGroup.Text>
            <Form.Control id="inlineFormInputGroup" placeholder="Location" />
          </InputGroup>
        </Col>
        <Col xs="auto">
          <Button type="submit" className="mb-2 btn-success">
            Search
          </Button>
        </Col>
      </Form>
    </Container>
  )
}