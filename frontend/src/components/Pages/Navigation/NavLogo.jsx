import Logo from '../../../assets/img/brand-logo.svg'
import Navbar from 'react-bootstrap/Navbar';

export default function NavLogo() {
  return (
    <Navbar.Brand href="#" className="fw-bold fs-3 brand-logo" style={{color: "#12b886"}}>
      <img
        alt=""
        src={Logo}
        width="35"
        height="35"
        className="d-inline-block align-center pb-1"
      />{' '}
      Djelivery
    </Navbar.Brand>
  )
}