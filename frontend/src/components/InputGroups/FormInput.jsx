// Bootstrap Components
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

// Custom Components
import InputLabelText from "../Texts/InputLabelText";

export default function FormInput(props) {
  return (
    <>
      <InputLabelText text={props.text} />
      <InputGroup className="mb-4" hasValidation>
        <Form.Control
          name={props.name}
          type={props.type}
          onChange={props.onChange}
          value={props.defaultIfEmpty}
        />
        <Form.Control.Feedback type="invalid">
          {props.error}
        </Form.Control.Feedback>
      </InputGroup>
    </>
  );
}
