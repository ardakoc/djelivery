// Bootstrap Components
import Form from "react-bootstrap/Form";
import BlockButton from "../Buttons/BlockButton";

export default function LoginForm() {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formEmail">
        <Form.Control type="email" placeholder="Email address" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formPassword">
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <BlockButton text="LOG IN" />
    </Form>
  );
}
