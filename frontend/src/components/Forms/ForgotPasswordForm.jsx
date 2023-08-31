// React Hooks
import { useState } from "react";

// Bootstrap Components
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/esm/Col";

// Custom Components
import BlockButton from "../Buttons/BlockButton";
import InputWithIcon from "../InputGroups/InputWithIcon";

// Icons
import Email from "../Icons/Email";
import FormErrorText from "../Texts/FormErrorText";

// API
import api from '../../api.jsx';

export default function ForgotPasswordForm(props) {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [emailErrorMsg, setEmailErrorMsg] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = {
      email: event.target.email.value,
    };

    await api
      .post("/forgot-password/", data)
      .then((response) => {
        setIsSubmitted(true);
      })
      .catch((error) => {
        console.log(error)
        console.log(error.response)
        console.log(error.response.data)
        if (error.response.data["error"]) {
          setEmailErrorMsg(
            String(error.response.data["error"]).charAt(0).toUpperCase() +
              String(error.response.data["error"]).slice(1)
          );
        } else {
          setEmailErrorMsg("");
        }
      });
  };
  return (
    <>
      {isSubmitted ? (
        <p>
          Password reset link is sent to your email. Please check it and reset
          your password by click the link we sent.
        </p>
      ) : (
        <>
          Enter your email address below and we'll send you an email with
          instructions on how to change your password.
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3 mt-3" controlId="formLastName">
              <InputWithIcon
                name="email"
                type="email"
                placeholder="Enter your email address"
                className=""
                icon={<Email />}
              />
            </Form.Group>
            <FormErrorText msg={emailErrorMsg} />
            <BlockButton
              text="SUBMIT"
              className="btn-success fw-bold mb-4"
            />
          </Form>
        </>
      )}
    </>
  );
}
