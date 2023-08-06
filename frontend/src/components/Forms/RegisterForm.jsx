// React Hooks
import { useState } from "react";
import axios from "axios";

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
import Name from "../Icons/Name";
import Username from "../Icons/Username";

export default function RegisterForm(props) {
  const handleSubmit = async (event) => {
    event.preventDefault();
    const user = {
      first_name: event.target.first_name.value,
      last_name: event.target.last_name.value,
      email: event.target.email.value,
      username: event.target.username.value,
      password: event.target.password.value,
    };
    await axios.post("http://127.0.0.1:8000/api/users/", user).then((response) => {
      console.log(response.data);
    }).catch((error) => {
      console.log(error)
    });
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formFirstName">
          <InputWithIcon
            name="first_name"
            icon={<Name />}
            placeholder="First name"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formLastName">
          <InputWithIcon
            name="last_name"
            icon={<Name />}
            placeholder="Last name"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formEmail">
          <InputWithIcon
            name="email"
            icon={<Email />}
            placeholder="Email address"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formUsername">
          <InputWithIcon
            name="username"
            icon={<Username />}
            placeholder="Username"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formPassword">
          <InputWithIcon
            name="password"
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
