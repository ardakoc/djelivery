// Bootstrap Component
import NavDropdown from 'react-bootstrap/NavDropdown';


export default function FoodMenuItem(props) {
  return (
    <NavDropdown.Item href="#action3" className="d-flex flex-row align-items-center gap-2">
      {props.icon}
      {props.text}
    </NavDropdown.Item>
  )
}