// Bootstrap Components
import Container from 'react-bootstrap/esm/Container';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/esm/Col';
import InputGroup from 'react-bootstrap/InputGroup';

// Icons
import Location from '../../Icons/Location/Location';
import Restaurant from '../../Icons/Restaurant';
import PrimaryButton from '../../Buttons/PrimaryButton';

export default function HeroForm() {
  return (
    <Container className="hero-form">
      <h1>Best restaurants in your city</h1>
      <h6>Pay quickly and securely by credit card, at the door or with food cards.</h6>
      <Form className="mt-4">
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
            Location
          </Form.Label>
          <InputGroup className="mb-3">
            <InputGroup.Text>
              <Location />
            </InputGroup.Text>
            <Form.Control id="inlineFormInputGroup" placeholder="Location" />
          </InputGroup>
        </Col>
        <Col xs="auto">
          <PrimaryButton text="SEARCH" />
        </Col>
      </Form>
    </Container>
  )
}