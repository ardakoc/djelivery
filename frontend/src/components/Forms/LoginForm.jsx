// Bootstrap Components
import Form from "react-bootstrap/Form";

// Custom Components
import BlockButton from "../Buttons/BlockButton";
import InputWithIcon from "../InputGroups/InputWithIcon";

// Icons
import Email from "../Icons/Email";
import Password from "../Icons/Password";

export default function LoginForm() {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formEmail">
        <InputWithIcon icon={<Email />} placeholder="Email address" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formPassword">
        <InputWithIcon icon={<Password />} placeholder="*********" />
      </Form.Group>
      <BlockButton text="LOG IN" />
    </Form>
  );
}
