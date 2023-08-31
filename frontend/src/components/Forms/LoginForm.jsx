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
import FormErrorText from "../Texts/FormErrorText";
import { useState } from "react";

// API
import api from '../../api.jsx';

export default function LoginForm(props) {
  const [loginErrorMsg, setLoginErrorMsg] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const user = {
      email: event.target.email.value,
      password: event.target.password.value,
    };

    await api
      .post("/v1/login/", user)
      .then((response) => {
        localStorage.setItem("token", response.data.token);
        window.location.reload(true)
      })
      .catch((error) => {
        setLoginErrorMsg(error.response.data.error);
      });
  };
  return (
    <>
      <Form onSubmit={handleSubmit}>
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
        <FormErrorText msg={loginErrorMsg} style={{ marginBottom: "8px" }} />
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
