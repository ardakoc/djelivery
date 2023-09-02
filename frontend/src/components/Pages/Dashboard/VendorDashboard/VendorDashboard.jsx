// Bootstrap Components
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// Custom Components
import VendorDashboardMenu from './VendorDashboardMenu/VendorDashboardMenu';
import VendorDashboardContent from './VendorDashboardContent/VendorDashboardContent';

export default function VendorDashboard() {
  return (
    <Container>
      <Row>
        <Col><VendorDashboardMenu /></Col>
        <Col xs={9}><VendorDashboardContent /></Col>
      </Row>
    </Container>  
  )
}