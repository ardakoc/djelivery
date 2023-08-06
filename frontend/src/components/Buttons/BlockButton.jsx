// Bootstrap Components
import Button from "react-bootstrap/Button";

export default function BlockButton(props) {
  return (
    <div className="d-grid gap-2">
      <Button
        className={props.className || "btn-success fw-bold"}
        style={props.style || { letterSpacing: "-0.3px" }}
        variant={props.variant || "success"}
        type={props.type || "submit"}
        onClick={props.onClick}
      >
        {props.text}
      </Button>
    </div>
  );
}
