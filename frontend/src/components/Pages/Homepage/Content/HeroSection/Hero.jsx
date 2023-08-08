// Bootstrap Components
import Container from 'react-bootstrap/esm/Container';
import Row from "react-bootstrap/Row";

// Custom Components
import HeroSearchForm from '../../../../Forms/HeroSearchForm';

export default function Hero() {
  return (
    <>
      <Row className="hero-section">
        <Container className="hero-form">
          <h1>Best restaurants in your city</h1>
          <h6>
            Pay quickly and securely by credit card, at the door or with food
            cards.
          </h6>
          <HeroSearchForm />
        </Container>
      </Row>
    </>
  );
}
