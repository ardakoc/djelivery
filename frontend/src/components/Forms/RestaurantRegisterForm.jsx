// React Hooks
import { useState } from "react";
import axios from "axios";

// Bootstrap Components
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Button from "react-bootstrap/esm/Button";

// Custom Components
import InputWithIcon from "../InputGroups/InputWithIcon";
import PageTitle from "../Titles/PageTitle";
import Page from "../Layout/Page";

// Icons
import Email from "../Icons/Email";
import Password from "../Icons/Password";
import ModalLink from "../Link/ModalLink";
import Name from "../Icons/Name";
import Username from "../Icons/Username";
import FormErrorText from "../Texts/FormErrorText";
import FormInput from "../InputGroups/FormInput";
import PrimaryButton from "../Buttons/PrimaryButton";
import FileUploadButton from "../Buttons/FileUploadButton";
import InputLabelText from "../Texts/InputLabelText";

export default function RestaurantRegisterForm(props) {
  const [firstNameErrorMsg, setfirstNameErrorMsg] = useState("");
  const [lastNameErrorMsg, setLastNameErrorMsg] = useState("");
  const [emailErrorMsg, setEmailErrorMsg] = useState("");
  const [usernameErrorMsg, setUsernameErrorMsg] = useState("");
  const [passwordErrorMsg, setPasswordErrorMsg] = useState("");

  const [signedUp, setSignedUp] = useState(false);

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
        setSignedUp(true);
        props.success(signedUp);
      })
      .catch((error) => {
        if ("first_name" in error.response.data) {
          setfirstNameErrorMsg(
            String(error.response.data["first_name"]).charAt(0).toUpperCase() +
              String(error.response.data["first_name"]).slice(1)
          );
        } else {
          setfirstNameErrorMsg("");
        }
        if ("last_name" in error.response.data) {
          setLastNameErrorMsg(
            String(error.response.data["last_name"]).charAt(0).toUpperCase() +
              String(error.response.data["last_name"]).slice(1)
          );
        } else {
          setLastNameErrorMsg("");
        }
        if ("email" in error.response.data) {
          setEmailErrorMsg(
            String(error.response.data["email"]).charAt(0).toUpperCase() +
              String(error.response.data["email"]).slice(1)
          );
        } else {
          setEmailErrorMsg("");
        }
        if ("username" in error.response.data) {
          setUsernameErrorMsg(
            String(error.response.data["username"]).charAt(0).toUpperCase() +
              String(error.response.data["username"]).slice(1)
          );
        } else {
          setUsernameErrorMsg("");
        }
        if ("password" in error.response.data) {
          setPasswordErrorMsg(
            String(error.response.data["password"]).charAt(0).toUpperCase() +
              String(error.response.data["password"]).slice(1)
          );
        } else {
          setPasswordErrorMsg("");
        }
      });
  };

  return (
    <Page
      content={
        <Form onSubmit={handleSubmit}>
          <PageTitle
            text="PARTNER WITH DJELIVERY"
            subtext="Register your restaurant with Djelivery marketplace and get orders online!"
          />
          <Row>
            <Col>
              <Form.Group className="mb-3" controlId="formFirstName">
                <FormInput name="first_name" text="First Name" />
                <FormErrorText msg={firstNameErrorMsg} />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3" controlId="formLastName">
                <FormInput name="last_name" text="Last Name" />
                <FormErrorText msg={lastNameErrorMsg} />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Group className="mb-3" controlId="formEmailAddress">
                <FormInput name="email" text="Email Address" />
                <FormErrorText msg={emailErrorMsg} />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3" controlId="formUsername">
                <FormInput name="username" text="Username" />
                <FormErrorText msg={usernameErrorMsg} />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Group className="mb-3" controlId="formRestaurantName">
                <FormInput name="restaurant_name" text="Restaurant Name" />
                <FormErrorText msg="" />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3" controlId="formRestaurantLicense">
                <InputLabelText text="Restaurant License" />
                <FileUploadButton />
                <FormErrorText msg="" />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Group className="mb-3" controlId="formPassword">
                <FormInput name="password" type="password" text="Password" />
                <FormErrorText msg="" />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3" controlId="formConfirmPassword">
                <FormInput
                  name="confirm_password"
                  type="password"
                  text="Confirm Password"
                />
                <FormErrorText msg="" />
              </Form.Group>
            </Col>
          </Row>
          <PrimaryButton text="Submit" />
        </Form>
      }
    ></Page>
  );
}
