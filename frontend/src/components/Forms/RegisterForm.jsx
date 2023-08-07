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
import FormErrorText from "../Texts/FormErrorText";

export default function RegisterForm(props) {
  const [firstNameErrorMsg, setfirstNameErrorMsg] = useState("");
  const [lastNameErrorMsg, setLastNameErrorMsg] = useState("");
  const [emailErrorMsg, setEmailErrorMsg] = useState("");
  const [usernameErrorMsg, setUsernameErrorMsg] = useState("");
  const [passwordErrorMsg, setPasswordErrorMsg] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const user = {
      first_name: event.target.first_name.value,
      last_name: event.target.last_name.value,
      email: event.target.email.value,
      username: event.target.username.value,
      password: event.target.password.value,
    };
    await axios
      .post("http://127.0.0.1:8000/api/users/", user)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        if ("first_name" in error.response.data) {
          setfirstNameErrorMsg(
            String(error.response.data["first_name"]).charAt(0).toUpperCase() +
              String(error.response.data["first_name"]).slice(1)
          );
        }
        else {
          setfirstNameErrorMsg("");
        }
        if ("last_name" in error.response.data) {
          setLastNameErrorMsg(
            String(error.response.data["last_name"]).charAt(0).toUpperCase() +
              String(error.response.data["last_name"]).slice(1)
          );
        }
        else {
          setLastNameErrorMsg("");
        }
        if ("email" in error.response.data) {
          setEmailErrorMsg(
            String(error.response.data["email"]).charAt(0).toUpperCase() +
              String(error.response.data["email"]).slice(1)
          );
        }
        else {
          setEmailErrorMsg("");
        }
        if ("username" in error.response.data) {
          setUsernameErrorMsg(
            String(error.response.data["username"]).charAt(0).toUpperCase() +
              String(error.response.data["username"]).slice(1)
          );
        }
        else {
          setUsernameErrorMsg("");
        }
        if ("password" in error.response.data) {
          setPasswordErrorMsg(
            String(error.response.data["password"]).charAt(0).toUpperCase() +
              String(error.response.data["password"]).slice(1)
          );
        }
        else {
          setPasswordErrorMsg("");
        }
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
          <FormErrorText msg={firstNameErrorMsg} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formLastName">
          <InputWithIcon
            name="last_name"
            icon={<Name />}
            placeholder="Last name"
          />
          <FormErrorText msg={lastNameErrorMsg} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formEmail">
          <InputWithIcon
            name="email"
            icon={<Email />}
            placeholder="Email address"
          />
          <FormErrorText msg={emailErrorMsg} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formUsername">
          <InputWithIcon
            name="username"
            icon={<Username />}
            placeholder="Username"
          />
          <FormErrorText msg={usernameErrorMsg} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formPassword">
          <InputWithIcon
            name="password"
            icon={<Password />}
            placeholder="*********"
            type="password"
          />
          <FormErrorText msg={passwordErrorMsg} />
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
