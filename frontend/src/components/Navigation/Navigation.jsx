// Bootstrap Components
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';

// Custom Components
import FoodMenu from './FoodMenu/FoodMenu';

// Logo
import NavLogo from './NavLogo';

// Icons
import Compass from '../Icons/Compass';
import Location from '../Icons/Location/Location';
import LocationSearchIcon from '../Icons/Location/LocationSearchIcon';

export default function Navigation() {
  return (
    <Navbar expand="lg" className="navbar" fixed="top" >
      <Container>
        <NavLogo />
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-2"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="#action1" className="fw-bold">Restaurants</Nav.Link>
            <NavDropdown 
              title={
                <div style={{ display: "inline-block", paddingRight: "8px", }}>
                  <Compass />
                  WHAT TO EAT / DRINK?
                </div>
                }
                id="navbarScrollingDropdown"
                style={{ fontSize: "14px", paddingTop: "2px" }}
            >
              <FoodMenu />
            </NavDropdown>
            <NavDropdown 
              title={
                <div style={{ display: "inline-block", paddingRight: "8px" }}>
                  <Location />
                  CHOOSE LOCATION
                </div>
                }
                id="navbarScrollingDropdown"
                style={{ fontSize: "14px", paddingTop: "2px" }}
            >
              <Form.Control 
                type="search"
                placeholder="Search locations"
                aria-label="Search Locations"
                className="ps-2 me-2 ms-2"
                style={{
                  width: "auto",
                  height: "32px",
                  fontSize: "12px"
                }}
              />
              <NavDropdown.Divider />
              <NavDropdown.Header>Popular Locations</NavDropdown.Header>
              <NavDropdown.Item href="#action4">İstanbul</NavDropdown.Item>
              <NavDropdown.Item href="#action5">Ankara</NavDropdown.Item>
              <NavDropdown.Item href="#action6">İzmir</NavDropdown.Item>
              <NavDropdown.Item href="#action7">Antalya</NavDropdown.Item>
              <NavDropdown.Item href="#action8">Bursa</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav className='d-flex gap-3'>
            <Nav.Link href="#action1" className="fw-bold" style={{ fontSize: "14px", letterSpacing: "-0.3px" }}>LOGIN / REGISTER</Nav.Link>
            <Button className="btn-success fw-bold" style={{ fontSize: "14px", letterSpacing: "-0.3px" }}>REGISTER RESTAURANT</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}