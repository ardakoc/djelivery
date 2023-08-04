// Bootstrap Components
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";

export default function InputWithIcon(props) {
  return (
    <InputGroup className={props.className || "mb-2"}>
      <InputGroup.Text>{props.icon}</InputGroup.Text>
      <Form.Control
        id="inlineFormInputGroup"
        placeholder={props.placeholder}
        type={props.type}
      />
    </InputGroup>
  );
}
