import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Logo from '../../assets/img/brand-logo.svg'

export default function Navigation() {
  return (
    <Navbar expand="lg" className="navbar" fixed="top" >
      <Container>
        <Navbar.Brand href="#" className='fw-bold fs-3 brand-logo'>
          <img
            alt=""
            src={Logo}
            width="35"
            height="35"
            className="d-inline-block align-center pb-1"
          />{' '}
          Djelivery
        </Navbar.Brand>
      </Container>
    </Navbar>
  )
}