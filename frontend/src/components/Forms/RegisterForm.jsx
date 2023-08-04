// Bootstrap Components
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import InputGroup from "react-bootstrap/InputGroup";
import FormGroup from "react-bootstrap/esm/FormGroup";

// Custom Components
import BlockButton from "../Buttons/BlockButton";
import InputWithIcon from "../InputGroups/InputWithIcon";

// Icons
import Email from "../Icons/Email";
import Password from "../Icons/Password";
import ModalLink from "../Link/ModalLink";
import Name from "../Icons/Name";
import Username from "../Icons/Username";

export default function RegisterForm(props) {
  return (
    <>
      <Form>        
        <Form.Group className="mb-3" controlId="formFirstName">
          <InputWithIcon icon={<Name />} placeholder="First name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formLastName">
          <InputWithIcon icon={<Name />} placeholder="Last name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formEmail">
          <InputWithIcon icon={<Email />} placeholder="Email address" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formEmail">
          <InputWithIcon icon={<Username />} placeholder="Username" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formPassword">
          <InputWithIcon
            icon={<Password />}
            placeholder="*********"
            type="password"
          />
        </Form.Group>
        <div
          key={`default-checkbox`}
          className="mb-3"
          style={{ fontSize: "14px" }}
        >
          <Form.Check
            type="checkbox"
            id="formCheckbox"
            label="I accept the Terms & Conditions And Privacy Policy"
          />
        </div>
        <BlockButton text="SIGN UP" />
        <Form.Text>
          <Nav style={{ paddingTop: "16px" }}>
            Already have an account?
            <ModalLink
              text="Login here!"
              onClick={props.onClickBackToLoginPage}
              style={{ color: "#000", padding: "0 0 0 4px" }}
            />
          </Nav>
        </Form.Text>
      </Form>
    </>
  );
}
