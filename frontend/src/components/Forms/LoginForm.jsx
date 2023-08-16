// Bootstrap Components
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";

// Custom Components
import BlockButton from "../Buttons/BlockButton";
import InputWithIcon from "../InputGroups/InputWithIcon";

// Icons
import Email from "../Icons/Email";
import Password from "../Icons/Password";
import ModalLink from "../Link/ModalLink";

export default function LoginForm(props) {
  return (
    <>
      <Form>
        <Form.Group className="mb-3" controlId="formEmail">
          <InputWithIcon
            name="email"
            type="email"
            placeholder="Email address"
            icon={<Email />}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formPassword">
          <InputWithIcon
            name="password"
            type="password"
            placeholder="Password"
            icon={<Password />}
          />
        </Form.Group>
        <Form.Text>
          <Nav>
            <ModalLink
              text="Forgot your password?"
              onClick={props.onClickForgotPassword}
            />
          </Nav>
        </Form.Text>
        <BlockButton text="LOG IN" />
        <Form.Text>
          <Nav style={{ paddingTop: "16px" }}>
            Don't have an account?
            <ModalLink
              text="Register here!"
              onClick={props.onClickRegister}
              style={{ color: "#000", padding: "0 0 0 4px" }}
            />
          </Nav>
        </Form.Text>
      </Form>
    </>
  );
}
