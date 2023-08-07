// Bootstrap Components
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";

export default function InputWithIcon(props) {
  return (
    <InputGroup className={props.className || "mb-2"} hasValidation>
      <InputGroup.Text>{props.icon}</InputGroup.Text>
      <Form.Control
        name={props.name}
        placeholder={props.placeholder}
        type={props.type}
        onChange={props.onChange}
        value={props.defaultIfEmpty}
      />
      <Form.Control.Feedback type="invalid">
        {props.error}
      </Form.Control.Feedback>
    </InputGroup>
  );
}
