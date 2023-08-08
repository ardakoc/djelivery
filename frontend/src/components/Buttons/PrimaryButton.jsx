// Bootstrap Components
import Button from "react-bootstrap/Button";

export default function PrimaryButton(props) {
  return (
    <Button
      className={props.className || "btn-success fw-bold"}
      style={props.style || { fontSize: "14px", letterSpacing: "-0.3px" }}
      href={props.href}
    >
      {props.text}
    </Button>
  );
}
