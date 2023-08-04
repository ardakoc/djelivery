// Bootstrap Components
import Nav from "react-bootstrap/Nav";

export default function ModalLink(props) {
  return (
    <Nav.Link
      style={
        props.style || {
          color: "#000",
          padding: "0 0 16px 0",
          fontSize: "14px",
        }
      }
      onClick={props.onClick}
    >
      {props.text}
    </Nav.Link>
  );
}
