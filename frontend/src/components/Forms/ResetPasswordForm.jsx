// React Hooks
import { useState, useEffect } from "react";

// Bootstrap Components
import Form from "react-bootstrap/Form";

// Custom Components
import InputWithIcon from "../InputGroups/InputWithIcon";
import FormErrorText from "../Texts/FormErrorText";
import Page from "../Layout/Page";
import PageTitle from "../Titles/PageTitle";
import PrimaryButton from "../Buttons/PrimaryButton";

// Icons
import Password from "../Icons/Password";

// API
import api from '../../api.jsx';

export default function ResetPasswordForm(props) {
  const [errorMsg, setErrorMsg] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = {
      password: event.target.password.value,
    };

    const confirm_password = event.target["confirm-password"].value;

    if (data.password != confirm_password) {
      setErrorMsg("The passwords you entered do not match.");
    }    

    await api
      .post("/reset-password/", data)
      .then((response) => {
        setIsSuccess(true);
      })
      .catch((error) => {
        setErrorMsg(error.response.data.error);
      });
  };

  return (
    <Page
      style={{ maxWidth: "25%" }}
      className={errorMsg ? "my-5" : "my-4 py-3"}
      content={
        isSuccess ? (
          <>
            <PageTitle
              text="Reset Your Password"
              subtext="Your password has been successfully reset. You can now login with your new password."
              className="mb-4"
              subtextClass="mt-4"
            />
            <a
              href="/"
              style={{ color: "#000", padding: "0", fontSize: "14px", textDecoration: "none" }}
            >
              Back to home page
            </a>
          </>
        ) : (
          <Form onSubmit={handleSubmit}>
            <PageTitle
              text="Reset Your Password"
              subtext="Please set your new password."
              className="mb-4"
            />
            <Form.Group className="mb-2" controlId="formEmail">
              <InputWithIcon
                name="password"
                type="password"
                placeholder="Password"
                icon={<Password />}
              />
            </Form.Group>
            <Form.Group className="mb-4" controlId="formPassword">
              <InputWithIcon
                name="confirm-password"
                type="password"
                placeholder="Confirm Password"
                icon={<Password />}
              />
            </Form.Group>
            <FormErrorText msg={errorMsg} />
            <PrimaryButton
              text="Submit"
              className={`btn-success fw-bold ${!errorMsg && "mt-2"}`}
            />
          </Form>
        )
      }
    ></Page>
  );
}
