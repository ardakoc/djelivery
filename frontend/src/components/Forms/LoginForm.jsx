// Bootstrap Components
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";

// Custom Components
import BlockButton from "../Buttons/BlockButton";
import InputWithIcon from "../InputGroups/InputWithIcon";

// Icons
import Email from "../Icons/Email";
import Password from "../Icons/Password";

export default function LoginForm(props) { 

  return (
    <>
      <Form>
        <Form.Group className="mb-3" controlId="formEmail">
          <InputWithIcon icon={<Email />} placeholder="Email address" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formPassword">
          <InputWithIcon
            icon={<Password />}
            placeholder="*********"
            type="password"
          />
        </Form.Group>
        <Form.Text>
          <Nav>
            <Nav.Link
              style={{ color: "#000", padding: "0 0 16px 0" }}
              onClick={props.onClickForgotPassword}
            >
              Forgot your password?
            </Nav.Link>
          </Nav>
        </Form.Text>
        <BlockButton text="LOG IN" />
        <Form.Text>
          <Nav style={{ paddingTop: "16px" }}>
            Don't have an account?
            <Nav.Link
              style={{ color: "#000", padding: "0 0 0 4px" }}
            >
              Register here!
            </Nav.Link>
          </Nav>
        </Form.Text>
      </Form>
    </>
  );
}
