// React Hooks
import { useState } from "react";
import axios from "axios";

// Bootstrap Components
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";

// Custom Components
import PageTitle from "../Titles/PageTitle";
import Page from "../Layout/Page";
import FormErrorText from "../Texts/FormErrorText";
import FormInput from "../InputGroups/FormInput";
import PrimaryButton from "../Buttons/PrimaryButton";
import FileUploadButton from "../Buttons/FileUploadButton";
import InputLabelText from "../Texts/InputLabelText";
import FormSectionTitle from "../Titles/FormSectionTitle";

export default function RestaurantRegisterForm(props) {
  const [firstNameErrorMsg, setfirstNameErrorMsg] = useState("");
  const [lastNameErrorMsg, setLastNameErrorMsg] = useState("");
  const [emailErrorMsg, setEmailErrorMsg] = useState("");
  const [usernameErrorMsg, setUsernameErrorMsg] = useState("");
  const [passwordErrorMsg, setPasswordErrorMsg] = useState("");
  const [restaurantNameErrorMsg, setRestaurantNameErrorMsg] = useState("");
  const [restaurantLicenseErrorMsg, setRestaurantLicenseErrorMsg] =
    useState("");

  const [userSignedUp, setUserSignedUp] = useState(false);
  const [restaurantSignedUp, setRestaurantSignedUp] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const user = {
      first_name: event.target.first_name.value,
      last_name: event.target.last_name.value,
      email: event.target.email.value,
      username: event.target.username.value,
      password: event.target.password.value,
    };
    const restaurant = {
      restaurant_name: event.target.restaurant_name.value,
      restaurant_license: event.target.restaurant_license.value,
    };
    
    await axios
      .all([
        axios.post("http://127.0.0.1:8000/api/users/", user),
        axios.post("http://127.0.0.1:8000/api/vendors/", restaurant),
      ])
      .then(
        axios.spread((
          {data: user},
          {data: vendor}) => {
            setUserSignedUp(true);
            props.success(userSignedUp);
            setRestaurantSignedUp(true);
            props.success(restaurantSignedUp);
      }))
      .catch((error) => {
        console.log(error.response.data)
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
        if ("vendor_name" in error.response.data) {
          setRestaurantNameErrorMsg(
            String(error.response.data["vendor_name"]).charAt(0).toUpperCase() +
              String(error.response.data["vendor_name"]).slice(1)
          );
        } else {
          setRestaurantNameErrorMsg("");
        }
        if ("vendor_license" in error.response.data) {
          setRestaurantLicenseErrorMsg(
            String(error.response.data["vendor_license"])
              .charAt(0)
              .toUpperCase() +
              String(error.response.data["vendor_license"]).slice(1)
          );
        } else {
          setRestaurantLicenseErrorMsg("");
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
          <FormSectionTitle text="Personal Information" />
          <Row className="mb-3">
            <Col>
              <Form.Group className="mb-3" controlId="formFirstName">
                <FormInput name="first_name" text="First Name" />
                <FormErrorText
                  msg={firstNameErrorMsg}
                  style={{ marginTop: "-20px" }}
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3" controlId="formLastName">
                <FormInput name="last_name" text="Last Name" />
                <FormErrorText
                  msg={lastNameErrorMsg}
                  style={{ marginTop: "-20px" }}
                />
              </Form.Group>
            </Col>
          </Row>
          <Row className="mb-3">
            <Col>
              <Form.Group className="mb-3" controlId="formEmailAddress">
                <FormInput name="email" text="Email Address" />
                <FormErrorText
                  msg={emailErrorMsg}
                  style={{ marginTop: "-20px" }}
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3" controlId="formUsername">
                <FormInput name="username" text="Username" />
                <FormErrorText
                  msg={usernameErrorMsg}
                  style={{ marginTop: "-20px" }}
                />
              </Form.Group>
            </Col>
          </Row>
          <Row className="mb-5">
            <Col>
              <Form.Group className="mb-3" controlId="formPassword">
                <FormInput name="password" type="password" text="Password" />
                <FormErrorText
                  msg={passwordErrorMsg}
                  style={{ marginTop: "-20px" }}
                />
              </Form.Group>
            </Col>
            <Col></Col>
          </Row>
          <FormSectionTitle text="Restaurant Information" />
          <Row className="mb-4">
            <Col>
              <Form.Group controlId="formRestaurantName">
                <FormInput name="restaurant_name" text="Restaurant Name" />
                <FormErrorText
                  msg={restaurantNameErrorMsg}
                  style={{ marginTop: "-20px" }}
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="formRestaurantLicense">
                <InputLabelText text="Restaurant License" />
                <FileUploadButton name="restaurant_license" />
                <FormErrorText
                  msg={restaurantLicenseErrorMsg}
                  style={{ marginTop: "-20px" }}
                />
              </Form.Group>
            </Col>
          </Row>
          <PrimaryButton text="Submit" />
        </Form>
      }
    ></Page>
  );
}
